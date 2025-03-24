import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className='w-full h-28 bg-gray-500 px-28 text-white'>
            <div className='w-full h-full flex items-center justify-between'>
                <h1 className='text-5xl font-medium'>Footer</h1>
                <nav className='flex items-center gap-4'>
                    <Link to={'/'} className='text-xl uppercase cursor-pointer opacity-60 hover:opacity-100'>
                        Каталог
                    </Link>
                    <Link to={'/basket'} className='text-xl uppercase cursor-pointer opacity-60 hover:opacity-100'>
                        Корзина
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default Footer;