import classNames from 'classnames';
import React, { useState } from 'react';

import { Navbar } from '@/components/organisms/Navbar';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  centerChildren?: boolean;
  sidebar?: React.ReactNode;
};

export const DashboardLayout: React.FC<Props> = ({ children, centerChildren, sidebar }: Props) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="min-h-screen flex flex-col overscroll-none h-auto">
      <div className="max-sm:hidden">
        <Navbar links={[]} onMenuClick={toggleMenu} />
      </div>
      <div className="flex grow">
        {sidebar && sidebar}
        <div className={classNames('w-full max-sm:absolute transition-transform', menuVisible ? 'translate-x-[300px]' : 'translate-x-[0px]')}>
          <div className="sm:hidden">
            <Navbar links={[]} onMenuClick={toggleMenu} />
          </div>
          <div className={classNames('p-5 bg-slate-100 relative z-0 h-full', centerChildren && 'flex flex-col gap-2 justify-center items-center')}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
