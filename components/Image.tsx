import React from 'react';

const Image = ({ src, alt, className, fill, width, height, priority, sizes, ...props }: any) => {
  // Translate 'fill' prop to absolute positioning styles to mimic Next.js Image
  const style: React.CSSProperties = fill 
    ? { position: 'absolute', height: '100%', width: '100%', inset: 0, objectFit: 'cover' } 
    : { width: width, height: height };

  // Combine provided className with object-cover if fill is true, just in case
  const finalClassName = `${className || ''} ${fill ? 'object-cover' : ''}`;

  return (
    <img 
      src={src} 
      alt={alt} 
      className={finalClassName} 
      style={style} 
      {...props} 
    />
  );
};

export default Image;