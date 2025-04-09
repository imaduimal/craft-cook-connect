
import React from 'react';
import Navbar from '@/components/Navbar';
import AuthForm from '@/components/AuthForm';
import Footer from '@/components/Footer';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-16 lg:py-20 flex items-center">
        <div className="container px-4 md:px-6">
          <AuthForm type="login" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
