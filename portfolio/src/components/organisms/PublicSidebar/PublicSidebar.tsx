import React from 'react';

import illustrationSrc from '@/assets/illustration.png';

import { Logo } from '@/components/atoms/Logo';
import { Typography } from '@/components/atoms/Typography';

type Props = {
  title: string;
  description?: string;
};

export const PublicSidebar = ({ title, description }: Props) => {
  return (
    <div className="py-8 px-20 h-full max-w-4xl bg-hero-pattern max-sm:hidden flex flex-col">
      <div className="flex-1">
        <div className="w-44">
          <Logo />
        </div>
        <div className="mt-40">
          <Typography variant="heroTitle" tag="h2">
            {title}
          </Typography>
        </div>
        {description && (
          <div className="mt-8">
            <Typography variant="paragraph" align="justify">
              {description}
            </Typography>
          </div>
        )}
      </div>
      <div className="flex-0">
        <img src={illustrationSrc} alt="Illustration logo" className="mb-12 w-[70%] ml-auto mr-auto" />
      </div>
    </div>
  );
};
