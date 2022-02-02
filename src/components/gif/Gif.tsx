import React from 'react';
import { gif } from '../../models/GifModel';
import './Gif.css'


export const Gif = ({ images }: gif) => {
    const { original } = images
    return (

        <img src={original.url} alt="" className='img-config'/>
    );
};
