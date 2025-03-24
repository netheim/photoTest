import React from "react";
import { useProductStore } from "../../../store/useProductStore";

const CategoryFilter: React.FC = () => {
    const { selectedCategory, setSelectedCategory, getCategories } = useProductStore();

    return (
        <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border p-2 rounded w-80 ml-4"

        >
            {getCategories().map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default CategoryFilter;