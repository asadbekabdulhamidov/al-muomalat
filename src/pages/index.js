import { lazy } from 'react';

export const HomePage = lazy(() => import('./home/HomePage'));
export const LoginPage = lazy(() => import('./login/LoginPage'));
export const RegisterPage = lazy(() => import('./register/RegisterPage'));
