import { Drawer } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import InventoryIcon from '@mui/icons-material/Inventory';
import MenuBookIcon from '@mui/icons-material/MenuBook';

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import styles from './sidebar.module.scss';

const Sidebar = () => {
  const navigate = useNavigate();
  const { branchId } = useParams();

  return (
    <Drawer 
      variant="permanent"
      sx={{
        top: '48px',
        [`& .MuiDrawer-paper`]: { 
          width: '250px', 
          backgroundColor: 'var(--green-700)',
          top: '48px',
          boxSizing: 'border-box',
        },
        [`& .MuiList-root`]: { 
          padding: 0
        },
      }}
      className={styles.sidebar}>

        <List sx={{
          color: '#fff',
          '& .MuiListItemIcon-root': {
            color: 'inherit',
          },
          '& .MuiDivider-root': {
            borderColor: 'rgba(255, 255, 255, 0.2)',
          }
        }}>
          <List disablePadding>
            <ListItemButton 
              sx={{ backgroundColor: 'var(--green-300)' }}
              onClick={() => navigate(`/inventory/${branchId}`)}
            >
              <ListItemIcon>
                <InventoryIcon/>
              </ListItemIcon>
              <ListItemText primary='Inventory' />
            </ListItemButton>
          </List>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton 
              sx={{ backgroundColor: 'var(--green-300)' }}
              onClick={() => navigate(`/menu/${branchId}`)}
            >
              <ListItemIcon>
                <MenuBookIcon/>
              </ListItemIcon>
              <ListItemText primary='Menu' />
            </ListItemButton>
          </ListItem>
          <Divider />
        </List>
    </Drawer>
  );
};

export default Sidebar;