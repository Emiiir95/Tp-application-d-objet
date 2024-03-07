import { FormProvider, useForm } from 'react-hook-form';
import React from 'react';

export const StorybookFormProvider = (Story: React.ComponentClass) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <Story />
      </form>
    </FormProvider>
  );
};
