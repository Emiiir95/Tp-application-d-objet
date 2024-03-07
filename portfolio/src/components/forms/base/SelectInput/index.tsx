import cs from 'classnames';
import * as React from 'react';
import { RegisterOptions } from 'react-hook-form';

import { useFormContextOrFallBack } from '../../core/Form/useFormContextOrFallBack';
import InputGroup from '@/components/forms/core/InputGroup';
import InputGroupHorizontal from '@/components/forms/core/InputGroupHorizontal';

export interface OptionType {
  value: number | string;
  label: number | string;
}

export type SelectInputProps = {
  horizontal?: boolean;
  label?: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  type?: string;
  readOnly?: boolean;
  inputOptions?: RegisterOptions;
  options: OptionType[];
};

export const SelectInput = ({ horizontal, options, label, helperText, id, placeholder, readOnly = false, inputOptions }: SelectInputProps) => {
  const [isEmpty, setIsEmpty] = React.useState(!!placeholder);
  const {
    register,
    formState: { errors }
  } = useFormContextOrFallBack();

  const formError = errors[id];

  const Group = horizontal ? InputGroupHorizontal : InputGroup;

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIsEmpty(e.target.value === '');
    if (inputOptions?.onChange) {
      inputOptions.onChange(e);
    }
  };

  return (
    <Group id={id} label={label} helperText={helperText} error={formError?.message as unknown as string | undefined} center>
      <select
        {...register(id, {
          ...inputOptions,
          onChange: handleOnChange
        })}
        data-testid={`select-${id}`}
        name={id}
        id={id}
        className={cs([formError && 'error', isEmpty && '!text-slate-500', 'cursor-pointer'])}
        aria-describedby={id}
        disabled={readOnly}
      >
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={readOnly} data-testid={`select-option-${option.value}`}>
            {option.label}
          </option>
        ))}
      </select>
    </Group>
  );
};
