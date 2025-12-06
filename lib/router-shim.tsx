'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// --- Helper to parse path from hash ---
const getHashPath = () => {
  // Hash is like "#/menu?id=1"
  const hash = typeof window !== 'undefined' ? window.location.hash : '';
  // Remove the leading '#'
  const pathWithQuery = hash.slice(1); 
  // If empty or just '#', default to '/'
  if (!pathWithQuery) return '/';
  // Remove query params to get just the pathname (e.g. "/menu")
  return pathWithQuery.split('?')[0];
};

// --- Router Context & Provider ---
const RouterContext = createContext<{ path: string }>({ path: '/' });

export const RouterProvider = ({ children }: { children?: React.ReactNode }) => {
  const [path, setPath] = useState('/');

  useEffect(() => {
    // Set initial path
    setPath(getHashPath());

    // Ensure we start with a hash if none exists
    if (!window.location.hash) {
      window.location.hash = '/';
    }

    const handleHashChange = () => {
      setPath(getHashPath());
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
      // Scroll to top on navigation
      window.scrollTo(0, 0);
    },
    replace: (href: string) => {
      // In hash routing, replace is similar to push for simple use cases,
      // or we could use location.replace('#' + href) to not add to history stack
      const target = '#' + href;
      window.location.replace(target);
      window.scrollTo(0, 0);
    }
  };
};

export const useSearchParams = () => {
  // In hash routing, query params are after the hash: #/order?dish=1
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

const Link: React.FC<LinkProps> = ({ href, children, className, ...props }) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push(href);
  };

  // Render a hash-based href so native browser behavior (hover, etc) makes sense
  // e.g. href="/menu" becomes href="#/menu"
  const hashHref = `#${href}`;

  return (
    <a href={hashHref} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
};

export default Link;