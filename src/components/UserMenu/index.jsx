import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import styles from './userMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  return (
    <div>
      <span className={styles.account}>Hi, {name}!</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
