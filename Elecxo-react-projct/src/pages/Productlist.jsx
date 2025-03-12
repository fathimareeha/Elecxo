


// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import electronicProducts from '../assets/data/products';
// import Horizontalcard from '../components/Horizontalcard';
// import Filtertab from '../components/filtertab';

// function Productlist() {
//     const { category } = useParams(); // Get the category from the URL
//     const [selectedFilters, setSelectedFilters] = useState([]);
//     const [sortorder, setsortorder] = useState('asc');

//     // Filter products based on the category from the URL and selected brands
//     const filteredProducts = electronicProducts.filter((item) => {
//         const matchesCategory = item.category === category;
//         const matchesBrand = selectedFilters.length === 0 || selectedFilters.includes(item.brand);
//         return matchesCategory && matchesBrand;
//     });

  
//     const sortedProducts = [...filteredProducts].sort((a, b) => 
//         sortorder === 'asc' ? a.rate - b.rate : b.rate - a.rate
//     );


//     return (
//         <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
//             <div className='col-span-1'>
//                 <Filtertab onFilterChange={setSelectedFilters} />
//             </div>
//             <div className='col-span-3 space-y-4'>
//                 <h2 className="text-lg font-semibold">Products in {category}</h2>
//                 <div className="grid gap-4">
//                     {filteredProducts.map((item) => (
//                         <Horizontalcard key={item.id} product={item} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Productlist;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import electronicProducts from '../assets/data/products';
import Horizontalcard from '../components/Horizontalcard';
import Filtertab from '../components/filtertab';

function Productlist() {
    const { category } = useParams(); // Get the category from the URL
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order

    // Filter products based on the category and selected brands
    const filteredProducts = electronicProducts.filter((item) => {
        const matchesCategory = item.category === category;
        const matchesBrand = selectedFilters.length === 0 || selectedFilters.includes(item.brand);
        return matchesCategory && matchesBrand;
    });

    // Sort products based on price
    const sortedProducts = [...filteredProducts].sort((a, b) => 
        sortOrder === 'asc' ? a.rate - b.rate : b.rate - a.rate
    );

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <div className='col-span-1'>
                <Filtertab onFilterChange={setSelectedFilters} onSortChange={setSortOrder} />
            </div>
            <div className='col-span-3 space-y-4'>
                <h2 className="text-lg font-semibold">Products in {category}</h2>
                <div className="grid gap-4">
                    {sortedProducts.map((item) => (
                        <Horizontalcard key={item.id} product={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Productlist;
