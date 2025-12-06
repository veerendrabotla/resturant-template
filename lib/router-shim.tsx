'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// --- Helper to parse path from hash ---
const getHashPath = () => {
  // Hash is like "#/menu?id=1"
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  // Remove the leading '#'
  let pathWithQuery = hash.slice(1); 
  
  // Handle empty hash -> root
  if (!pathWithQuery) return '/';
  
  // Ensure leading slash for consistency (e.g. if user types #menu instead of #/menu)
  if (!pathWithQuery.startsWith('/')) {
    pathWithQuery = '/' + pathWithQuery;
  }
  
  // Remove query params to get just the pathname (e.g. "/menu")
  return pathWithQuery.split('?')[0];
};

// --- Router Context & Provider ---
const RouterContext = createContext<{ path: string }>({ path: '/' });

export const RouterProvider = ({ children }: { children?: React.ReactNode }) => {
  const [path, setPath] = useState('/');

  useEffect(() => {
    // Set initial path
    const currentPath = getHashPath();
    setPath(currentPath);

    // Ensure we start with a hash if none exists or if it's just empty
    if (!window.location.hash || window.location.hash === '#') {
      window.location.replace('#/');
    }

    const handleHashChange = () => {
      setPath(getHashPath());
      window.scrollTo(0, 0); // Scroll to top on hash change naturally
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <RouterContext.Provider value={{ path }}>
      {children}
    </RouterContext.Provider>
  );
};

// --- Hooks ---
export const usePathname = () => {
  const { path } = useContext(RouterContext);
  return path;
};

export const useRouter = () => {
  return {
    push: (href: string) => {
      // Update hash, which triggers hashchange
      window.location.hash = href;
    },
    replace: (href: string) => {
      const target = '#' + href;
      window.location.replace(target);
    }
  };
};

export const useSearchParams = () => {
  if (typeof window === 'undefined') return new URLSearchParams();
  
  const hash = window.location.hash;
  const parts = hash.split('?');
  const queryString = parts.length > 1 ? parts[1] : '';
  return new URLSearchParams(queryString);
};

// --- Link Component ---
interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const Link: React.FC<LinkProps> = ({ href, children, className, onClick, ...props }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // 1. Call any user-provided onClick (like closing a menu)
    if (onClick) {
      onClick(e);
    }
    
    // 2. If the user-provided click didn't prevent default, we handle navigation
    if (!e.defaultPrevented) {
      e.preventDefault();
      router.push(href);
    }
  };

  // Render a hash-based href so native browser behavior (hover, open in new tab) works
  const hashHref = `#${href}`;

  return (
    <a href={hashHref} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export default Link;