import React from "react";
import '../css/search_bar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import {useState} from "react";
function SearchBar(props) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState('');

    const handleFilter = (event) => {
        const entered_word = event.target.value;
        setWordEntered(entered_word);
        const new_filter = props.data.filter((data) => {
            return data.name.toLowerCase().includes(entered_word.toLowerCase())
            || data.symbol.toLowerCase().includes(entered_word.toLowerCase());
        });

        if(entered_word.length === 0)
        {
            setFilteredData([]);
        }
        else
        {
          setFilteredData(new_filter);
        }
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered('');
    }

    const fillInput = (item) => {
        setWordEntered(item);
        setFilteredData([]);
    }
  return (
    <div className="search-bar">
        <div className="search-input">
            <input type="text" placeholder={props.placeholder} value={wordEntered} onChange={handleFilter}/>
            <div className="search-icon">
                {
                filteredData.length > 0 ?
                 <CloseIcon id='clear-button'  onClick={clearInput}/>
                  : 
                  <SearchIcon />
                  }
            </div>
        </div>

        {filteredData.length > 0 &&(
        <div className="search-data-result">
            {filteredData.slice(0,15).map((item, index) => {
                return (
                    <div className="search-data-item" key={index} onClick={() => fillInput(item.name)}>
                        {item.logo}
                        &ensp;
                        {item.name}
                        &ensp;
                        {item.symbol}
                        &ensp;
                        {item.marketValue}

                    </div>
                );
            }
            )}
        </div>
        )}
    </div>
  );
}

export default SearchBar;
