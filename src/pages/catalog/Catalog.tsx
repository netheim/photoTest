import {useEffect} from "react";
import '../../index.css'
import Header from "../../components/header/Header.tsx";
import Footer from "../../components/footer/Footer.tsx";
import Main from "../../components/main/Main.tsx";
import {useProductStore} from "../../store/useProductStore.ts";

const Catalog = () => {

    const { filteredProducts, fetchProducts, setSearchQuery, searchQuery } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, []);



    return (
        <div className="w-full min-h-screen flex flex-col justify-between">
            <Header />
            <Main products={filteredProducts()} title={'Каталог'} setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
            <Footer />
        </div>
    );
};

export default Catalog;