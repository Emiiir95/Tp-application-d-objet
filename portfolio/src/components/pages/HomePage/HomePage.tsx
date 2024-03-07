import React from 'react';

import { useAuthContext, UserType } from '@/contexts/auth';

import { DashboardLayout } from '@/components/templates/DashboardLayout';

export const HomePage = () => {
  const { user } = useAuthContext() as { user: UserType };

  return (
    <div>
      <h1>fhfeiihf</h1>
    </div>
  );
};
