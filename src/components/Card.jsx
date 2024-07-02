import { BsFillBagFill } from "react-icons/bs";

const Card = ({ name,img, title, lactation,price,breed ,capacity}) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <div className="card-details-owner">
          <img className="card-details-owner-img" src="https://static-assets.animall.in/static/images/farmer.png" alt="owner-icon"/>
          <h5 className="card-name">{name}</h5>
          </div>
          <h3 className="card-title">{title}</h3>
         
            <section className="card-attributes">
            <div className="attribute">
              <img
                 src="https://static-assets.animall.in/static/images/assessment-monetization/udder-icon.svg"
                alt="Milk Capacity Icon"
                className="attribute-icon"
              />
              <span className="attribute-value">{capacity} Litre</span>
            </div>
            <div className="attribute">
              <img
               src="https://static-assets.animall.in/static/images/assessment-monetization/breed-icon.svg"
                alt="Breed Icon"
                className="attribute-icon"
              />
              <span className="attribute-value">{breed}</span>
            </div>
            <div className="attribute">
              <img
               src="https://static-assets.animall.in/static/images/smart-filters-v2/filter-lactation.svg"
                alt="Lactation Icon"
                className="attribute-icon"
              />
              <span className="attribute-value">{lactation}</span>
            </div>
          </section>

          <section className="card-price">
            <div className="price">
            ₹ {price}
            </div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Card;