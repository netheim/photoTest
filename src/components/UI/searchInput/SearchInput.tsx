import {FC} from "react";


interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const SearchInput:FC<SearchBarProps> = ({setSearchQuery, searchQuery}) => {
    return (
        <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className='w-72 h-10 mb-3 px-2 rounded-xl bg-transparent outline-0 border-1 border-gray-600'
            placeholder='Search'
        />
    );
};

export default SearchInput;