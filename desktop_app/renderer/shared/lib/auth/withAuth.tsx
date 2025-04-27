import { useEffect, ComponentType } from 'react';
import { useRouter } from 'next/navigation';


const withAuth = <P extends object>(WrappedComponent: ComponentType<P>): ComponentType<P> => {
  const AuthComponent = (props: P) => {
    const router = useRouter();

    useEffect(() => {
      const accessToken = localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken') || sessionStorage.getItem('refreshToken');

      if (!accessToken || !refreshToken) {
        router.push('/web/login');
      }
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;