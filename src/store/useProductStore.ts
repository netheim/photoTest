import {create} from "zustand";
import axios from "axios";
import {ProductStore} from "../types/product.types.ts";


export const useProductStore = create<ProductStore>((set, get) => ({
    products: JSON.parse(localStorage.getItem("products") || "[]"),
    searchQuery: "",
    selectedCategory: "all",
    priceRange: [1, 1000],
    fetchProducts: async () => {
        const cachedProducts = localStorage.getItem("products");

        if (cachedProducts) {
            set({ products: JSON.parse(cachedProducts) });
            return;
        }

        const { data } = await axios.get("https://fakestoreapi.com/products");
        set({ products: data });
        localStorage.setItem("products", JSON.stringify(data));
    },

    setSearchQuery: (query: string) => {
        set({ searchQuery: query });
    },
    setSelectedCategory: (category: string) => {
        set({ selectedCategory: category });
    },

    setPriceRange: (range: [number, number]) => {
        set({ priceRange: range });
    },

    filteredProducts: () => {
        const { products, searchQuery, selectedCategory, priceRange } = get();
        return products
            .filter((product) =>
                product.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .filter((product) =>
                selectedCategory === "all" ? true : product.category === selectedCategory
            )
            .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);
    },
    getCategories: () => {
        const { products } = get();
        return ["all", ...new Set(products.map((p) => p.category))];
    }
}));

