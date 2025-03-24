import Header from "../../components/header/Header.tsx";
import Footer from "../../components/footer/Footer.tsx";
import Main from "../../components/main/Main.tsx";
import useCartStore from "../../store/useCartStore.ts";

const Basket = () => {

    const {cart, filteredCart, setSearchQuery, searchQuery, setTotalPrice} = useCartStore()

    const totalPrice = setTotalPrice();

    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            <Header/>
            {cart.length > 0 ? <Main
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                products={filteredCart()}
                title={'Корзина'}
                totalPrice={totalPrice}
            />: <h1 className='text-3xl uppercase font-bold text-center'>
                    Корзина пуста
                </h1>
            }

            <Footer/>
        </div>
    );
};

export default Basket;