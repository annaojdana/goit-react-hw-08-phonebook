import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/authOperations';

import styles from './Register.module.css';

const Register = () => {
  const { loginForm, label, input, btn } = styles;

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const { name, email, password } = form.elements;
    console.log(name.value);
    console.log(email.value);
    console.log(password.value);
    dispatch(
      register({
        name: name.value,
        email: email.value,
        password: password.value,
      })
    );
    form.reset();
  };

  const content = (
    <section>
      <h1>Register</h1>

      <form className={loginForm} onSubmit={handleSubmit}>
        <label className={label} htmlFor="username">
          Username
        </label>
        <input className={input} type="text" name="name" id="username" />
        <label className={label} htmlFor="email">
          Email
        </label>
        <input className={input} type="email" name="email" id="email" />
        <label className={label} htmlFor="password">
          Password
        </label>
        <input
          className={input}
          type="password"
          id="password"
          name="password"
        />

        <button className={btn} type="submit">
          Sign Up
        </button>
      </form>
    </section>
  );
  return content;
};

export default Register;
