import cs from 'classnames';
import React from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

import InputGroup from '@/components/forms/core/InputGroup';
import InputGroupHorizontal from '@/components/forms/core/InputGroupHorizontal';

export type TextAreaProps = {
  horizontal?: boolean;
  label?: string;
  id: string;
  placeholder?: string;
  helperText?: string;
  readOnly?: boolean;
  inputOptions?: RegisterOptions;
};

export const TextArea = ({ horizontal, label, placeholder = '', helperText, id, readOnly = false, inputOptions }: TextAreaProps) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const formError = errors[id];

  const Group = horizontal ? InputGroupHorizontal : InputGroup;

  return (
    <Group id={id} label={label} helperText={helperText} error={formError?.message as unknown as string | undefined}>
      <textarea
        {...register(id, inputOptions)}
        data-testid={`input-${id}`}
        rows={3}
        name={id}
        id={id}
        readOnly={readOnly}
        className={cs(formError && ['error'], 'text-color-slate-300')}
        placeholder={placeholder}
        aria-describedby={id}
      />
    </Group>
  );
};
