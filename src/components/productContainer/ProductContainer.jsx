import React from 'react';
import { ProductList } from '../productList/ProductList';
import styles from './styles.module.css';

export const ProductContainer = () => {
    return (
        <main className={styles['product__container']}>
            <ProductList />
        </main>
    );
};
