import './Header.css'
import {
    Link
} from "react-router-dom";

export const Header = () => {

    return (
        <>
            <div className="contenedor">
                <div className="item">
                    <Link to="/" className='link'>
                        <span>Home</span>
                    </Link>

                </div>
                <div className="item">
                    <Link to="images" className='link'>
                        <span>Imagenes</span>
                    </Link>

                </div>
            </div>
        </>
    );
};
