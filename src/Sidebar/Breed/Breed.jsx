import "./Breed.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Breed</h2>

      <div>
      <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
       
        <Input
          handleChange={handleChange}
          value="Brown Swiss"
          title="Brown Swiss"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Desi"
          title="Desi"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Jersey"
          title="Jersey"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="American"
          title="American"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Gir"
          title="Gir"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="American Cross"
          title="American Cross"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Desi-Cross"
          title="Desi-Cross"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Red Dane"
          title="Red Dane"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="HF Cross"
          title="HF Cross"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Sahiwal"
          title="Sahiwal"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Haryanvi"
          title="Haryanvi"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Marwari"
          title="Marwari"
          name="test"
        />
        
      </div>
    </div>
  );
}

export default Category;