import React from 'react'
import electronicProducts from '../assets/data/products';
import { Link } from 'react-router-dom';

function Searchbar({search,setSearch,setShowDropdown}) {
    const searchbar = search.toLowerCase().trim();
    const filterdeproducts = electronicProducts.filter((item)=>
        item.name.toLowerCase().startsWith(searchbar)
);

const handleSelectProduct = (name)=>{
    setSearch(name);
    setShowDropdown(false);
};
  return (
    <div className={`bg-white p-4 rounded-b-xl shadow-2xl ${
        search? '': 'hidden'
    } max-h-60 overflow-auto`}
    >
        {filterdeproducts.length>0 ?(
            filterdeproducts.map((item) =>(
                <Link to={`/productdetails/${item.id}`}
                key={item.id}
                onClick={()=>handleSelectProduct(item.name)}
             >
                <div>{item.name}</div>
             </Link>   
            ))
        ):(
            <div>No results found</div>

        )
        }

    </div>
  )
}

export default Searchbar