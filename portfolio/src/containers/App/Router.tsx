import React from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';

import { AuthRoute } from '../Guards/AuthRoute';
import { ProtectedRoute } from '../Guards/ProtectedRoute';
import { HomePage } from '@/components/pages/HomePage';
import { ErrorLayout } from '@/components/templates/ErrorLayout';

export const Router = () => {
  const { t } = useTranslation();
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
    </Routes>
  );
};
