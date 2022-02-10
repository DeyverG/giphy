import { LazyLoadImage } from 'react-lazy-load-image-component';
import useNearScreen from '../../hooks/useLazyLoad';
import { MutableRefObject, useRef } from 'react';

interface imgProps {
    img: string
}

export const Image = ({ img }: imgProps) => {

    const elementRef = useRef() as MutableRefObject<HTMLDivElement>;
    const loading = useNearScreen(elementRef, 10)

    return (
        <>
            <div ref={elementRef as React.RefObject<HTMLDivElement>} className="container-img" >
                {loading &&
                    <img
                        src={img}
                        className="size"
                        alt=''
                    />
                }
            </div>

        </>
    );
};
