import React from 'react';

export const ProductCard = ({ product }) => {
    return (
        <li>
            <h2>{product?.title.toUpperCase()}</h2>
            <p>{product?.body}</p>
        </li>
    );
};
