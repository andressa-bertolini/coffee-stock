import { Drawer } from '@mui/material';
import styles from './sidebar.module.scss';

const Sidebar = () => {
  return (
    <Drawer 
      variant="permanent"
      sx={{
        top: '48px',
        [`& .MuiDrawer-paper`]: { 
          width: '220px', 
          backgroundColor: '#013b27',
          top: '48px',
          padding: '16px',
          boxSizing: 'border-box'
        },
      }}
      className={`${styles.sidebar}`}>
        Sidebar
    </Drawer>
  );
};

export default Sidebar;