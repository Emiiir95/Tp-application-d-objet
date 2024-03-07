import React from 'react';
import { Link } from 'react-router-dom';

import logoSrc from '@/assets/logo.svg';

export interface LogoProps {
  redirectUrl?: string;
}

export const Logo = ({ redirectUrl = '/' }: LogoProps) => {
  return (
    <Link to={redirectUrl}>
      <img src={logoSrc} alt="Logo" className="h-full" />
    </Link>
  );
};
