'use client';

import { ToastContainer } from 'react-toastify';
import { ReactNode } from 'react';
import 'react-toastify/dist/ReactToastify.css';

interface IProps {
  children: React.ReactNode;
}

export const ToastProvider = ({ children }: IProps) => (
  <>
    <ToastContainer />
    {children}
  </>
);
