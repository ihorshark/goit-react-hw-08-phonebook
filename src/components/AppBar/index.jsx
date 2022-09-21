import Navigation from 'components/Navigation';
import { AuthNav } from 'components/AuthNav';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import styles from './appBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
