import React from "react";
import { MdOutlineManageSearch } from 'react-icons/md'
const SearchItems = ({search, setSearchItems, performSearch}) =>{
    const handleSubmit = (e) =>{
        e.preventDefault()
        performSearch()
    }
    
    return(
        <form action="search" className="searchItem" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="search">
                <input type="text"
                id="searchitem"
                role="searchbox"
                placeholder="Search Items.." 
                value={search}
                onChange={(e)=>{setSearchItems(e.target.value)}}
                


                />
            </label><button id="searchButton" onSubmit={handleSubmit}><MdOutlineManageSearch/></button>
            </div>
        </form>
    )
}
export default SearchItems