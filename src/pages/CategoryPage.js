import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import axios from "axios";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get(
          "https://ownthreedays-default-rtdb.firebaseio.com/recipe.json"
        );
        const data = await response.data;

        if (data) {
          const recipesList = Object.keys(data)
            .filter((key) => data[key].categoryName === categoryName)
            .map((key) => ({
              id: key,
              name: data[key].recipeName,
              description: data[key].description,
              price: data[key].price,
              imageUrl: data[key].imageUrl,
              categoryName: data[key].categoryName,
            }));

          setRecipes(recipesList);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecipes();
  }, [categoryName]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">{categoryName}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {recipes.length === 0 ? (
          <p>No recipes available in this category.</p>
        ) : (
          recipes.map((recipe) => (
            <Card
              key={recipe.id}
              recipeName={recipe.name}
              recipeImageUrl={recipe.imageUrl}
              recipeDescription={recipe.description}
              price={recipe.price}
              disableClick={true}
            />
          ))
        )}
      </div>
    </div>
  );
};
export default CategoryPage;
