import React , {useState} from 'react'





const Search = () => {
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
    <div className="search-container">
    <input type="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search Here" />
    
    
    
    
    </div>
    </>
  )
}

export default Search