import {FC} from "react";
import {Product} from "../../types/cart.types.ts";
import ProductItem from '../product/ProductItem.tsx'
import SearchInput from "../UI/searchInput/SearchInput.tsx";
import PriceFilter from "../UI/priceFilter/PriceFilter.tsx";
import CategoryFilter from "../UI/categoryFilter/CategoryFilter.tsx";

type MainTypes = {
    title: string,
    products: Product[],
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    totalPrice?: number;

}

const Main:FC<MainTypes> = ({products, title, searchQuery, setSearchQuery, totalPrice}) => {

    return (
        <div className='w-full  px-28 py-10'>
            <div className='flex items-center gap-3'>
                <h1 className='text-4xl font-bold mb-3'>{title}</h1>
                {title === 'Корзина' ? <span>Общая стоимость - ${totalPrice}</span> : null}
            </div>
            <SearchInput searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            {title === 'Каталог' ?
                <CategoryFilter /> : null
            }
            {title === 'Каталог' ?
                <PriceFilter /> : null
            }
            <div className='w-full h-full flex flex-wrap gap-20'>

                {products?.map(item => (
                    <ProductItem
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        id={item.id}
                        category={item.category}
                        image={item.image}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
};

export default Main;