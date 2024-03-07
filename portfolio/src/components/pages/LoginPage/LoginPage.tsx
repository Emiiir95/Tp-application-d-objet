import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { TokenResponse } from '@/api/lib/auth';
import { useAuthContext } from '@/contexts/auth';

import { LoginForm } from '@/components/organisms/LoginForm';
import { PublicLayout } from '@/components/templates/PublicLayout';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { saveUser } = useAuthContext();
  const { t } = useTranslation();

  const onLoginSuccess = (data: TokenResponse) => {
    saveUser(data.token, data.webUserResponse);
    navigate('/');
  };

  return (
    <PublicLayout title={t('authentication.sidebar.login')} description={t('authentication.sidebar.tagline')}>
      <LoginForm onSuccess={onLoginSuccess} />
    </PublicLayout>
  );
};
