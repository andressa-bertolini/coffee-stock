import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@/store';

import Checkbox from '@mui/material/Checkbox';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import MainLayout from '@/layouts/MainLayout';
import styles from '@/styles/global.module.scss';
import { fetchProducts } from "./products.service";

const Products = () => {
  const dispatch = useDispatch<AppDispatch>();  

  useEffect(() => {
    console.log('teste');
    dispatch(fetchProducts({ page: 1, pageSize: 10 }));
  },[]);

  return (
    <MainLayout>
      <h1 className={styles.title}>Stock Products</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th colSpan={2}>Product</th>
            <th>Unity</th>
            <th>Price?</th>
            <th>Quantity</th>
            <th>&nbsp;</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Checkbox /></td>
            <td><img src='/stobe/mock/images/product-coffee.png' alt="" /></td>
            <td>Coffee sack</td>
            <td>kg</td>
            <td>$39.90</td>
            <td>3</td>
            <td><EditIcon /></td>
            <td><DeleteIcon /></td>
          </tr>
        </tbody>
      </table>
    </MainLayout>
  );
};

export default Products;