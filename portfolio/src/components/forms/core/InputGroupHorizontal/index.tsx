import * as React from 'react';

export type InputGroupProps = {
  id: string;
  label?: string;
  helperText?: string;
  error?: string;
  children?: React.ReactNode;
  center?: boolean;
};

const InputGroupFooter = ({ helperText, error }: { error?: string; helperText?: string }) => {
  return (
    <div className="mt-1">
      {helperText && <p className="text-xs md:hidden text-slate-500">{helperText}</p>}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

const InputGroupLabel = ({ label, id }: { label: string; id: string }) => {
  return (
    <label htmlFor={id} className="block text-sm font-normal text-slate-700">
      {label}
    </label>
  );
};

const InputGroupComponent = ({ id, label, helperText, error = 'teees', children, center }: InputGroupProps) => {
  return (
    <div className={`md:flex flex-wrap ${center ? 'items-center' : ''}`}>
      <div className="mr-4 w-56">
        {label && <InputGroupLabel id={id} label={label} />}
        {helperText && <p className="text-xs max-md:hidden text-slate-500">{helperText}</p>}
      </div>
      <div className=" grow mt-1 md:mt-0">
        <div className="relative">{children}</div>
      </div>
      <div className="w-full md:flex">
        <div className="mr-4 w-56" />
        <InputGroupFooter helperText={helperText} error={error} />
      </div>
    </div>
  );
};

InputGroupComponent.displayName = 'InputGroup';
InputGroupFooter.displayName = 'InputGroup.Footer';
InputGroupLabel.displayName = 'InputGroup.Label';

export default Object.assign(InputGroupComponent, {
  Footer: InputGroupFooter,
  Label: InputGroupLabel
});
