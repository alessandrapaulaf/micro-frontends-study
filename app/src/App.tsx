import React, { Suspense } from 'react';

const AuthForm = React.lazy(() => import('auth/AuthForm'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthForm />
    </Suspense>
  );
}