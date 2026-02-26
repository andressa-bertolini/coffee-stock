import { AppBar } from '@mui/material';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'
import styles from './header.module.scss';


const Header = () => {
  const { user } = useSelector((state: RootState) => state.user)
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: '#fff',
        flexDirection: 'row',
        zIndex: 1201,
      }}
      className={`${styles.header}`}>
        <div className={`${styles.headerLogo}`}>
          <LocalCafeIcon />
          Coffee Stock
        </div>
        <div className={`${styles.headerUser}`}>
          <PersonIcon />
          <div className={`${styles.headerUserInfo}`}>
            <span className={`${styles.headerUserName}`}>{user?.name}</span>
            <span className={`${styles.headerUserRole}`}>{user?.role}</span>
          </div>
        </div>
    </AppBar>
  );
};

export default Header;