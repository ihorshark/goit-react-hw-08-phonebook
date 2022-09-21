import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import styles from '../pages/pages.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
  };

  return (
    <div className={styles.container}>
      <h1>Registration</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Name</label>
        <input
          type="text"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <label className={styles.label}>Email address</label>
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label className={styles.label}>Password</label>
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Register;
