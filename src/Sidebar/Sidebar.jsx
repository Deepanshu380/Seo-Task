import Category from "./Breed/Breed";
import Price from "./Price/Price";
// import Colors from "./Colors/Colors";
import "./Sidebar.css";

const Sidebar = ({handleCategoryChange,handlePriceChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleCategoryChange} />
        <Price handleChange={handlePriceChange} />
        {/* <Colors handleChange={handleChange} /> */}
      </section>
    </>
  );
};

export default Sidebar;
