import Input from '../../components/Input';
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value="" name="test2" />
      </label>
      <Input
        handleChange={handleChange}
        value="10000-20000"
        title="₹10,000 - ₹20,000"
        name="test2"
        minPrice={10000} 
        maxPrice={20000} 
      />
      <Input
        handleChange={handleChange}
        value="20000-30000"
        title="₹20,000 - ₹30,000"
        name="test2"
        minPrice={20000} 
        maxPrice={30000} 
      />
      <Input
        handleChange={handleChange}
        value="30000-40000"
        title="₹30,000 - ₹40,000"
        name="test2"
        minPrice={30000} 
        maxPrice={40000} 
      />
      <Input
        handleChange={handleChange}
        value="40000-50000"
        title="₹40000-₹50000"
        name="test2"
        minPrice={40000} 
        maxPrice={50000} 
      />
      <Input
        handleChange={handleChange}
        value="51000-"
        title="Over ₹50,000"
        name="test2"
        minPrice={51000}
      />
    </div>
  );
};

export default Price;