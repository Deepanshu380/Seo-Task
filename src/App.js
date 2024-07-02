import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./database/db";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [priceRange, setPriceRange] = useState({ minPrice: 0, maxPrice: Infinity });
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.breed.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    const { value } = event.target;
    let minPrice = 0;
    let maxPrice = Infinity;

    if (value) {
      const [min, max] = value.split('-');
      minPrice = parseInt(min, 10);
      maxPrice = max ? parseInt(max, 10) : Infinity;
    }

    setPriceRange({ minPrice, maxPrice });
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selectedCategory, priceRange, query) {
    let filteredProducts = products;

    // Filtering by input query
    if (query) {
      filteredProducts = filteredItems;
    }

    // Filtering by selected category
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.breed === selectedCategory
      );
    }

    // Filtering by price range
    filteredProducts = filteredProducts.filter(
      (product) => {
        const productPrice = parseInt(product.price, 10);
        return productPrice >= priceRange.minPrice && productPrice <= priceRange.maxPrice;
      }
    );

    return filteredProducts.map(
      ({ name, img, title, price, lactation, breed, capacity }) => (
        <Card
          key={Math.random()}
          name={name}
          img={img}
          title={title}
          price={price}
          lactation={lactation}
          breed={breed}
          capacity={capacity}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, priceRange, query);

  return (
    <>
     <Sidebar handleCategoryChange={handleCategoryChange} handlePriceChange={handlePriceChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;