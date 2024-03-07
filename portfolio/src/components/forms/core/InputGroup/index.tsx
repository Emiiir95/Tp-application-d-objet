import * as React from 'react';

export type InputGroupProps = {
  id: string;
  label?: string;
  helperText?: string;
  error?: string;
  children?: React.ReactNode;
};

const InputGroupFooter = ({ helperText, error }: { error?: string; helperText?: string }) => {
  return (
    <div className="mt-1">
      {helperText && <p className="text-xs text-slate-500">{helperText}</p>}
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};

const InputGroupLabel = ({ label, id }: { label: string; id: string }) => {
  return (
    <label htmlFor={id} className="block text-base font-normal text-slate-700">
      {label}
    </label>
  );
};

const InputGroupComponent = ({ id, label, helperText, error, children }: InputGroupProps) => {
  return (
    <div>
      {label && <InputGroupLabel id={id} label={label} />}
      <div className="relative mt-1">{children}</div>
      <InputGroupFooter helperText={helperText} error={error} />
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
