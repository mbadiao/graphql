'use client';
import { useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import { useRouter } from 'next/navigation';

const protectedRoute = (WrappedComponent) => {
  return function WithAuth(props) {
    const { User, lo } = useAppContext();
    const router = useRouter();

    useEffect(() => {
      if (!User) {
        const token = localStorage.getItem('token');
        if (!token) {
          router.push('/');
        }
      }
    }, [User, router]);

    if (!User) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};

export default protectedRoute;
