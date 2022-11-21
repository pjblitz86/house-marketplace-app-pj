import { Navigate, Outlet } from 'react-router-dom';
import { useAuthStatus } from '../hooks/useAuthStatus';

export const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    // @todo Spinner
    return <h3>Loading...</h3>;
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
};
