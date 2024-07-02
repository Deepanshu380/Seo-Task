import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Brown Swiss" title="Brown Swiss" />
          <Button onClickHandler={handleClick} value="HF Cross" title="HF Cross" />
          <Button onClickHandler={handleClick} value="Haryanvi" title="Haryanvi" />
          <Button onClickHandler={handleClick} value="Jersey" title="Jersey" />
        </div>
      </div>
    </>
  );
};

export default Recommended;