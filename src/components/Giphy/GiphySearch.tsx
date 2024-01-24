import React, { useState } from 'react';
import { SearchBar, SearchContextManager } from '@giphy/react-components';
function GiphySearch() {
    const [searchValue, setSearchValue] = useState('');
    const handleSearch = (value: any) => {
        setSearchValue(value);
        // Handle search functionality
    };
    return (
        <div className="mb-2">
            <SearchBar
                placeholder="Search for GIFs"
                autoFocus={true}
                autoComplete="off"
                style={{ height: '40px', fontSize: '16px', border: '2px solid red' }}
            />
        </div>
    );
}

export default GiphySearch;
