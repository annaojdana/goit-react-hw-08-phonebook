import { Outlet, NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/useAuth';
import { logOut } from 'redux/auth/authOperations';
import styled from 'styled-components';
import styles from './Layout.module.css';

const StyledLink = styled(NavLink)`
  position: relative;
  color: #373537;
  text-decoration: none;
  font-weight: 600;
  margin-left: 15px;
  line-height: 1.5;
  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    content: '';
  }
  &:hover {
    &::after {
      background-color: mediumaquamarine;
    }
  }
  &.active {
    color: mediumaquamarine;
  }
`;

const Layout = () => {
  const { wrapper, header, nav, link, links, main } = styles;

  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <div className={wrapper}>
        <header className={header}>
          <nav className={nav}>
            <Link className={link} to="/">
              Phonebook
            </Link>
            {isLoggedIn ? (
              <div className={links}>
                <button type="button" onClick={() => dispatch(logOut())}>
                  Logout
                </button>
              </div>
            ) : (
              <div className={links}>
                <StyledLink to="/login">Log in</StyledLink>
                <StyledLink to="/register">Sign up</StyledLink>
              </div>
            )}
          </nav>
        </header>
        <main className={main}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
