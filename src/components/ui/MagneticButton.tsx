'use client';

import React from 'react';

interface MagneticButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const MagneticButton = ({ children, className = '', ...props }: MagneticButtonProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default MagneticButton;


