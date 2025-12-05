import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, center }) => {
  return (
    <div className={`mb-10 ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary">
        {title}
      </h2>
      <div className={`h-1 w-20 bg-accent mt-4 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionTitle;