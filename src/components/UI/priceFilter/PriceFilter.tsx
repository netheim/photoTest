import React from "react";
import { useProductStore } from "../../../store/useProductStore";

const PriceFilter: React.FC = () => {
    const { priceRange, setPriceRange } = useProductStore();

    return (
        <div className="mb-4 flex flex-col gap-2">
            <label className="block text-sm font-medium">Цена: ${priceRange[0]} - ${priceRange[1]}</label>
            <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-80"
            />
            <input
                type="range"
                min="0"
                max="1000"
                step="10"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-80"
            />
        </div>
    );
};

export default PriceFilter;
