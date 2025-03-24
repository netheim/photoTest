import {Product} from "../../types/product.types.ts";
import {FC} from "react";
import useCartStore from "../../store/useCartStore.ts";

const ProductItem:FC<Product> = ({title, description, price, id, image, category}) => {

    const cart = useCartStore(state => state.cart);
    const toggleCart = useCartStore(state => state.toggleCart);

    const inCart = cart.find(item => item.id === id) !== undefined;

    return (
        <div className='w-68 h-87 bg-gray-600 rounded-xl px-3.5 py-3 text-white'>
            <div className='w-full h-full flex flex-col justify-between'>
                <div>
                    <span className='font-medium text-xl'>
                        {title.split(' ').slice(0, 5).join(' ')}...
                    </span>
                    <p className='text-[14px] mt-3.5 mb-5'>
                        {description.split(' ').slice(0, 10).join(' ')}...
                    </p>
                    <span className=''>{category}</span>
                </div>
                <div className='flex justify-between items-center'>
                    <span className='text-xl font-medium'>
                        ${price}
                    </span>
                    <button className='cursor-pointer mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700' onClick={() => toggleCart(
                        {id: id, title: title, description: description, price: price, image: image, category: category}
                    )}>
                        {inCart ? 'Удалить' : 'Добавить'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;