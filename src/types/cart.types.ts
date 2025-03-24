export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

export type CartStore = {
    cart: Product[];
    toggleCart: (product: Product) => void;
    clearCart: () => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredCart: () => Product[],
    totalPrice: number;
    setTotalPrice: () => number;

}