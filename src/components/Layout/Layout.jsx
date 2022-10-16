import { Outlet, NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoIosLogOut } from 'react-icons/io';
import { useAuth } from 'hooks';
import { logOut } from 'redux/auth/authOperations';
import { Suspense } from 'react';
import styled from 'styled-components';
import styles from './Layout.module.css';

const StyledLink = styled(NavLink)`
  position: relative;
  color: #373537;
  text-decoration: none;
  font-weight: 600;
  margin-left: 15px;
  line-height: 1.25;
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
  const { wrapper, header, nav, link, links, main, btn } = styles;

  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  return (
    <>
      <div className={wrapper}>
        <header className={header}>
          <nav className={nav}>
            <Link className={link} to="/">
              Home
            </Link>
            {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
            {isLoggedIn ? (
              <div className={links}>
                <button
                  className={btn}
                  type="button"
                  onClick={() => dispatch(logOut())}
                >
                  <IoIosLogOut />
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
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default Layout;
