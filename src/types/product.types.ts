export type Product = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string

}

export type ProductStore = {
    products: Product[];
    fetchProducts: () => Promise<void>;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    filteredProducts: () => Product[];
    selectedCategory: string;
    priceRange: number[];
    setSelectedCategory: (selectedCategory: string) => void;
    setPriceRange: (range: [number, number]) => void;
    getCategories: () => string[];
}