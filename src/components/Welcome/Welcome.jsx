import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';

const Welcome = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const content = (
    <section className="welcome">
      <h1>{`Welcome ${user.name}`}</h1>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </section>
  );

  return content;
};
export default Welcome;
