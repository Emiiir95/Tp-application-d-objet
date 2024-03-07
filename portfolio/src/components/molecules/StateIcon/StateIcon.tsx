import React from 'react';
import { TbCircleCheckFilled, TbCircleDashed, TbCircleDot } from 'react-icons/tb';

export enum IconState {
  DONE,
  PENDING,
  TODO
}

export type StateIconProps = {
  state: IconState;
};

export const StateIcon = ({ state }: StateIconProps) => {
  switch (state) {
    case IconState.DONE:
      return <TbCircleCheckFilled className="text-green-400 inline ml-1 mb-1" size={22} />;
    case IconState.PENDING:
      return <TbCircleDot className="text-orange-300 inline ml-1 mb-1" size={22} />;
    default:
      return <TbCircleDashed className="text-slate-700 inline ml-1 mb-1" size={22} />;
  }
};
