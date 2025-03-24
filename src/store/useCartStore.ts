import {create} from "zustand";
import {persist} from "zustand/middleware";
import {CartStore, Product} from "../types/cart.types";

const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            cart: [] as Product[],
            searchQuery: "",
            totalPrice: 0,
            toggleCart: (product: Product) => {
                const currentCart = get().cart;
                if (currentCart.find(item => item.id === product.id)) {
                    set({ cart: currentCart.filter(item => item.id !== product.id) });
                } else {
                    set({ cart: [...currentCart, product] });
                }
            },
            clearCart: () => set({ cart: [] }),
            setSearchQuery: (query: string) => {
                set({ searchQuery: query });
            },

            setTotalPrice: () => {
                const currentCart = get().cart;
                return [...new Set(currentCart.map((item) => item.price))].reduce((a, b) => a + b, 0)
            },

            filteredCart: () => {
                const { cart, searchQuery } = get();
                return cart.filter((product) =>
                    product.title.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }
        }),

        {
            name: "cart-storage" // ключ для localStorage
        }
    )
);

export default useCartStore;