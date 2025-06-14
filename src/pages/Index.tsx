import React from 'react';
import { WelcomeSection } from '@/components/WelcomeSection';
import { LoginForm } from '@/components/LoginForm';

const Index = () => {
  return (
    <main className="bg-[rgba(53,80,78,1)] flex items-stretch gap-[40px_100px] overflow-hidden flex-wrap min-h-screen">
      <WelcomeSection />
      <LoginForm />
    </main>
  );
};

export default Index;
