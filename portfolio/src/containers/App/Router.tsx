import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import { AuthRoute } from '../Guards/AuthRoute';
import { ProtectedRoute } from '../Guards/ProtectedRoute';
import { HomePage } from '@/components/pages/HomePage';
import { LoginPage } from '@/components/pages/LoginPage';
import { SignUpPage } from '@/components/pages/SignUpPage';
import { SignUpValidationPage } from '@/components/pages/SignUpValidationPage';
import { ErrorLayout } from '@/components/templates/ErrorLayout';

export const Router = () => {
  const { t } = useTranslation();
  return (
    <Routes>
      <Route element={<AuthRoute />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signup-validation" element={<SignUpValidationPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="" element={<HomePage />} />
        <Route path="not-authorized" element={<ErrorLayout>{t(`page.notAuthorized`)}</ErrorLayout>} />
      </Route>
      <Route path="*" element={<ErrorLayout>{t(`page.notExists`)}</ErrorLayout>} />
    </Routes>
  );
};
