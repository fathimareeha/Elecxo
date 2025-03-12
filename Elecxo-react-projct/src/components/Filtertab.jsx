
// import React, { useState } from 'react';
// import electronicProducts from '../assets/data/products';

// function Filtertab({ onFilterChange }) {
//   const [filterbrand, setFilterbrand] = useState([]);
//   const [sortorder,setsortorder]=useState('asc')

//   // Extract unique brands from electronicProducts
//   const uniqueBrands = [
//     ...new Set(electronicProducts.map((product) => product.brand)),
//   ];

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;

//     setFilterbrand((prevSelected) => {
//       const updatedFilters = checked
//         ? [...prevSelected, value] // Add brand if checked
//         : prevSelected.filter((brand) => brand !== value); // Remove brand if unchecked

//       onFilterChange(updatedFilters); // Pass updated filters to parent
//       return updatedFilters;
//     });
//   };
//   const handleSortChange = (e) => {
//     const selectedOrder = e.target.value;
//     setsortorder(selectedOrder);
//     onsortchange(selectedOrder); // Pass sorting order to parent
//   };

//   return (
//     <div className="border h-[100vh] p-4">
//       <h1 className="font-bold text-2xl text-center">Filter</h1>
//       <h2 className="ml-6">Categories</h2>
//       <form className="mx-auto w-fit space-y-2">
//         {uniqueBrands.map((brand, index) => (
//           <label key={index} className="block">
//             <input
//               type="checkbox"
//               value={brand}
//               onChange={handleCheckboxChange}
//             />{' '}
//             {brand}
//           </label>

//         ))}
//       </form>
//       <h2 className="mt-4">Sort by Price</h2>
//       <select className="border p-2 w-full" value={sortorder} onChange={handleSortChange}>
//         <option value="asc">Low to High</option>
//         <option value="desc">High to Low</option>
//       </select>

     
//     </div>
//   );
// }

// export default Filtertab;



import React, { useState } from 'react';
import electronicProducts from '../assets/data/products';

function Filtertab({ onFilterChange, onSortChange }) {
  const [filterbrand, setFilterbrand] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Default to ascending order

  // Extract unique brands from electronicProducts
  const uniqueBrands = [...new Set(electronicProducts.map((product) => product.brand))];

  // Handle brand filter change
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFilterbrand((prevSelected) => {
      const updatedFilters = checked
        ? [...prevSelected, value]
        : prevSelected.filter((brand) => brand !== value);
      onFilterChange(updatedFilters); // Pass updated filters to parent
      return updatedFilters;
    });
  };

  // Handle sorting change
  const handleSortChange = (e) => {
    const selectedOrder = e.target.value;
    setSortOrder(selectedOrder);
    onSortChange(selectedOrder); // Pass sorting order to parent
  };

  return (
    <div className="border h-[100vh] p-4">
      <h1 className="font-bold text-2xl text-center">Filter</h1>

      {/* Brand Filtering */}
      <h2 className="ml-6">Categories</h2>
      <form className="mx-auto w-fit space-y-2">
        {uniqueBrands.map((brand, index) => (
          <label key={index} className="block">
            <input type="checkbox" value={brand} onChange={handleCheckboxChange} /> {brand}
          </label>
        ))}
      </form>

      {/* Sorting by Price */}
      <h2 className="mt-4">Sort by Price</h2>
      <select className="border p-2 w-full" value={sortOrder} onChange={handleSortChange}>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>
    </div>
  );
}

export default Filtertab;


