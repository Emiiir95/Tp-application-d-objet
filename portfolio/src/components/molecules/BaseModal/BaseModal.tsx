import classNames from 'classnames';
import React from 'react';

type Props = {
  children?: React.ReactNode | React.ReactNode[];
  isOpen: boolean;
};

export const BaseModal: React.FC<Props> = ({ children, isOpen }: Props) => {
  if (!isOpen) {
    return null;
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-[9999]">
      <div className={classNames('block bg-white w-3/4 h-3/4 p-2 border rounded', isOpen && 'overflow-y-auto')}>{children}</div>
    </div>
  );
};
