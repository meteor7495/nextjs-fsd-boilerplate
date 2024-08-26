'use client';

import { ToastContainer } from 'react-toastify';
import { ReactNode } from 'react';

import 'react-toastify/dist/ReactToastify.css';

export const withToast = (component: () => ReactNode) => (
  <>
    <ToastContainer />
    {component()}
  </>
);
