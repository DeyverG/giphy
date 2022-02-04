import { LazyLoadImage } from 'react-lazy-load-image-component';

interface imgProps {
    img: string
}

export const Image = ({ img }: imgProps) => {

    return (
        <>
            <LazyLoadImage
                src={img}
                className="size"
            />
        </>
    );
};
