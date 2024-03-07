import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { SignUpForm } from '@/components/organisms/SignUpForm';
import { PublicLayout } from '@/components/templates/PublicLayout';

export const SignUpPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onSignupSuccess = () => {
    navigate('/signup-validation');
  };

  return (
    <PublicLayout title={t('authentication.sidebar.register')} description={t('authentication.sidebar.tagline')}>
      <SignUpForm onSuccess={onSignupSuccess} />
    </PublicLayout>
  );
};
