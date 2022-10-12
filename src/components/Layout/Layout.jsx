import { Outlet, NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from './Layout.module.css';

const StyledLink = styled(NavLink)`
  position: relative;
  color: #373537;
  text-decoration: none;
  font-weight: 600;
  margin-left: 40px;
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
      background-color: #e4007e;
    }
  }
  &.active {
    color: #e4007e;
  }
`;

const Layout = () => {
  const { wrapper, header, nav, link } = styles;
  return (
    <>
      <div className={wrapper}>
        <header className={header}>
          <nav className={nav}>
            <Link className={link} to="/">
              Phonebook
            </Link>
            <div>
              <StyledLink to="/movies">Log in</StyledLink>
              <StyledLink to="/movies">Sign in</StyledLink>
            </div>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
