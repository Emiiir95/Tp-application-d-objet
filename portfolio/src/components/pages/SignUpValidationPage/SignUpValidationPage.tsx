import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

import { useSignupValidationMutation } from '@/api/hooks/useAuth';
import { useAuthContext } from '@/contexts/auth';

import { Typography } from '@/components/atoms/Typography';
import { PublicLayout } from '@/components/templates/PublicLayout';

export const SignUpValidationPage = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { saveUser } = useAuthContext();

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const signupValidationMutation = useSignupValidationMutation({
    onSuccess: (data) => {
      setTimeout(() => {
        saveUser(data.token, data.webUserResponse);
        navigate('/');
      }, 2000);
    }
  });

  useEffect(() => {
    if (token) {
      signupValidationMutation.mutate({ token });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <PublicLayout title={t('authentication.sidebar.validateEmail')} description={t('authentication.sidebar.tagline')}>
      <Typography variant="h1">{t('authentication.sidebar.validateEmail')}</Typography>
      <br className="mb-8" />

      <p>{t('authentication.signupValidation.checkMail')}</p>
      {!token && <b>{t('authentication.signupValidation.finalize')}</b>}
      {signupValidationMutation.isLoading && <b>{t('authentication.signupValidation.loading')}</b>}
      {signupValidationMutation.isSuccess && <b className="text-green-500">{t('authentication.signupValidation.success')}</b>}
      {signupValidationMutation.isError && <b className="text-red-500">{t('authentication.signupValidation.error')}</b>}

      <Link to="/" className="text-green-400 mt-4 underline">
        {t('authentication.backToAuthentication')}
      </Link>
    </PublicLayout>
  );
};
