import { RootState } from '../store/store';
import { useSelector } from 'react-redux';

export const Profile = () => {
  const login = useSelector((state: RootState) => state.auth.login);
  return (
    <div>
      <h1> {login}</h1>
    </div>
  );
};
