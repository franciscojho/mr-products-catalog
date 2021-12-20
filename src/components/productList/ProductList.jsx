import React, { useEffect, useReducer } from 'react';
import { initialState, productReducer } from '../../reducer/productReducer';
import { ProductCard } from '../productCard/ProductCard';
import styles from './styles.module.css';

export const ProductList = () => {
    const [{ products, isError, isLoading }, dispatch] = useReducer(
        productReducer,
        initialState
    );
    useEffect(() => {
        dispatch({ type: 'ON_LOAD', payload: true });
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) =>
                response.json().then((json) => {
                    return response.ok ? json : Promise.reject(json);
                })
            )
            .then((data) => {
                dispatch({ type: 'SET_PRODUCTS', payload: data });
            })
            .catch(() => dispatch({ type: 'ON_ERROR', payload: true }));
    }, []);

    return (
        <section>
            <ul className={styles['product__list']}>
                {isLoading && <h1>Products are loading</h1>}
                {isError && <h1>An error occured</h1>}
                {!isError &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </ul>
        </section>
    );
};
