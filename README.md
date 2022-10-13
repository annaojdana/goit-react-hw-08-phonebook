# goit-react-hw-08-phonebook
Projekt powstał w ramach kursu FULLSTACK PROGRAMISTA OD ZERA od GoIT

Stona pracy:
> [https://annaojdana.github.io/goit-react-hw-08-phonebook/](https://annaojdana.github.io/goit-react-hw-08-phonebook/)

## Szczegóły projektu

Zadanie zostało wykonane według [kryteriów](https://github.com/goitacademy/react-homework/blob/master/homework-08/README.pl.md).

## Technologie
- REACT
- REDUX/REDUX TOOLKIT
- CSS
- JS

## Contact
Created by [Anna Ojdana](https://pl.linkedin.com/in/anna-ojdana)


## Create Private and Restricted Routes

### Add `PrivateRoute.js`

js
// PrivateRoute.js
import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

### Add `RestrictedRoute.js`

js
// RestrictedRoute.js
import { useAuth } from "hooks";
import { Navigate } from "react-router-dom";

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

## Wrap everything up!

### Update `components/App.jsx`

- Add a dispatch action `refreshUser`
- Add `RestrictedRoute` and `PrivateRoute`

jsx
// components/App.jsx
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { PrivateRoute } from "./PrivateRoute";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "redux/auth/operations";
import { useAuth } from "hooks";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const TasksPage = lazy(() => import("../pages/Tasks"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
