import React from 'react';
import { Image } from '../../components/image/Image';
import { Header } from '../../components/header/Header';
import './Images.css'

export const Images = () => {

    //Array de imagenes
    const images =
        [
            "https://www.wallpapertip.com/wmimgs/4-41706_1080p-full-hd.jpg",
            "https://www.wallpapertip.com/wmimgs/15-154305_hd-wallpaper-ocean-animals-wallpaper-hd.jpg",
            "https://www.wallpapertip.com/wmimgs/15-154483_453446-title-religious-zen-wallpaper-meditation-hd-wallpaper.jpg",
            "https://www.wallpapertip.com/wmimgs/15-154303_space-wallpaper-widescreen-awesome-pics-of-space.jpg",
            "https://www.wallpapertip.com/wmimgs/15-154445_funny-cat-backgrounds.jpg"
        ];
    return (
        <div>
            <Header />
            {images.map((img, index) => (
                <div key={index}>
                    <Image img={img} />
                </div >
            ))}
        </div>
    );
};
