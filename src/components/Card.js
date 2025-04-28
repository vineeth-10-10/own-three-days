import { useNavigate } from "react-router-dom";

const Card= ({
  name,
  imageUrl,
  recipeName,
  recipeImageUrl,
  recipeDescription,
  price,
  disableClick = false,
  type="category" // Default to false, meaning the card is clickable by default
}) => {
  const navigate = useNavigate();

  // This function handles navigation on category card click
  const handleClick = () => {
    if (!disableClick) {
      navigate(`/category/${name}`);
    }
  };

  const immageSrc = recipeImageUrl || imageUrl;

  return (
    <div
      className="card shadow-sm"
      style={{
        width: "18rem",
        margin: "10px",
        borderRadius: "10px",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s", // Smooth hover animation
        cursor: disableClick ? "default" : "pointer", // If disabled, no pointer cursor
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.03)";
        e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.3)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
      }}
      onClick={handleClick} // Only triggers handleClick if not disabled
    >
      <img
        src={immageSrc}
        className="card-img-top"
        alt={name}
        style={{
          height: "180px",
          objectFit: "cover",
          width: "100%",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <div className="card-body text-center">
        <h4 className="card-title">{recipeName || name}</h4>
        {recipeDescription && <h5>{recipeDescription}</h5>}
        {}
        {price && <h6>Price: ₹{price}</h6>}
      </div>
    </div>
  );
};

export default Card;
