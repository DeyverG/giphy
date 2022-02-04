import React from 'react';
import { gif } from '../../models/GifModel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Gif.css'


export const Gif = ({ images }: gif) => {
    const { original } = images
    return (
        <LazyLoadImage
            src={original.url}
            className='img-config'
        />
    );
};
