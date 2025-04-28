<<<<<<< HEAD
import { useNavigate } from "react-router-dom";

const CardEditDelete = ({
  name,
  imageUrl,
  recipeName,
  recipeImageUrl,
  recipeDescription,
  price,
  disableClick = false,
  onEdit,
  onDelete,
  type="category" // Default to false, meaning the card is clickable by default
}) => {
  const navigate = useNavigate();

  // This function handles navigation on category card click
  const handleClick = () => {
    if (!disableClick) {
      console.log(name);
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
        <h5 className="card-title">{recipeName || name}</h5>
        {recipeDescription && <p>{recipeDescription}</p>}
        {price && <p>Price: ₹{price}</p>}
        {(type==="recipe" || type==="category") && (
            <div className="mt-3">
                <button className="btn btn-primary" onClick={onEdit}>Edit</button>
                <button className="btn btn-danger ms-2" onClick={onDelete}>Delete</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default CardEditDelete;
=======
import { useNavigate } from "react-router-dom";

const CardEditDelete = ({
  name,
  imageUrl,
  recipeName,
  recipeImageUrl,
  recipeDescription,
  price,
  disableClick = false,
  onEdit,
  onDelete,
  type="category" // Default to false, meaning the card is clickable by default
}) => {
  const navigate = useNavigate();

  // This function handles navigation on category card click
  const handleClick = () => {
    if (!disableClick) {
      console.log(name);
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
        <h5 className="card-title">{recipeName || name}</h5>
        {recipeDescription && <p>{recipeDescription}</p>}
        {price && <p>Price: ₹{price}</p>}
        {(type==="recipe" || type==="category") && (
            <div className="mt-3">
                <button className="btn btn-primary" onClick={onEdit}>Edit</button>
                <button className="btn btn-danger ms-2" onClick={onDelete}>Delete</button>
            </div>
        )}
      </div>
    </div>
  );
};

export default CardEditDelete;
>>>>>>> 51a939b4043f027cdd28a974ccf1720295a1a9a3
