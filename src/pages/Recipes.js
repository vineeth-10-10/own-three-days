import axios from 'axios'; 
import { useEffect, useState } from 'react';
import CardEditDelete from '../components/CardEditDelete';
import { Modal } from 'react-bootstrap';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    categoryName: "",
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(
        'https://ownthreedays-default-rtdb.firebaseio.com/recipe.json'
      );
      const data = await response.data;

      if (data) {
        const recipesList = Object.keys(data).map((key) => ({
          id: key,
          name: data[key].recipeName,
          description: data[key].description,
          price: data[key].price,
          imageUrl: data[key].imageUrl,
          categoryName: data[key].categoryName,
        }));
        setRecipes(recipesList);
      }
    };
    fetchRecipes();
  }, []);

  const handleEditRecipe = (id, name, description, price, imageUrl, categoryName) => {
    setCurrentRecipe({ id, name, description, price, imageUrl, categoryName });
    setShowModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `https://ownthreedays-default-rtdb.firebaseio.com/recipe/${currentRecipe.id}.json`,
        {
          recipeName: currentRecipe.name,
          description: currentRecipe.description,
          price: currentRecipe.price,
          imageUrl: currentRecipe.imageUrl,
          categoryName: currentRecipe.categoryName,
        }
      );
      // Update recipe in the local state after saving
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) =>
          recipe.id === currentRecipe.id ? { ...recipe, ...currentRecipe } : recipe
        )
      );
      setShowModal(false); // Close the modal
      alert("Recipe updated successfully");
    } catch (error) {
      console.log("Error saving the recipe", error);
    }
  };

  const handleDeleteRecipe = async (id) => {
    try {
      await axios.delete(`https://ownthreedays-default-rtdb.firebaseio.com/recipe/${id}.json`);
      setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
      alert("Recipe Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Recipes</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {recipes.length === 0 ? (
          <p>No recipes available.</p>
        ) : (
          recipes.map((recipe) => (
            <CardEditDelete
              key={recipe.id}
              recipeName={recipe.name}
              recipeImageUrl={recipe.imageUrl}
              recipeDescription={recipe.description}
              price={recipe.price}
              disableClick={true}
              type="recipe"
              onEdit={() =>
                handleEditRecipe(
                  recipe.id,
                  recipe.name,
                  recipe.description,
                  recipe.price,
                  recipe.imageUrl,
                  recipe.categoryName
                )
              }
              onDelete={() => handleDeleteRecipe(recipe.id)}
            />
          ))
        )}
      </div>

      {/* Modal for editing recipe */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Recipe Name</label>
            <input
              type="text"
              className="form-control"
              value={currentRecipe.name}
              onChange={(e) => setCurrentRecipe({ ...currentRecipe, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              value={currentRecipe.description}
              onChange={(e) =>
                setCurrentRecipe({ ...currentRecipe, description: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              value={currentRecipe.price}
              onChange={(e) => setCurrentRecipe({ ...currentRecipe, price: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              className="form-control"
              value={currentRecipe.imageUrl}
              onChange={(e) => setCurrentRecipe({ ...currentRecipe, imageUrl: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              value={currentRecipe.categoryName}
              onChange={(e) =>
                setCurrentRecipe({ ...currentRecipe, categoryName: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
            Close
          </button>
          <button className="btn btn-primary" onClick={handleSaveEdit}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Recipes;

import axios from 'axios'; 
import { useEffect, useState } from 'react';
import CardEditDelete from '../components/CardEditDelete';
import { Modal } from 'react-bootstrap';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    categoryName: "",
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await axios.get(
        'https://ownthreedays-default-rtdb.firebaseio.com/recipe.json'
      );
      const data = await response.data;

      if (data) {
        const recipesList = Object.keys(data).map((key) => ({
          id: key,
          name: data[key].recipeName,
          description: data[key].description,
          price: data[key].price,
          imageUrl: data[key].imageUrl,
          categoryName: data[key].categoryName,
        }));
        setRecipes(recipesList);
      }
    };
    fetchRecipes();
  }, []);

  const handleEditRecipe = (id, name, description, price, imageUrl, categoryName) => {
    setCurrentRecipe({ id, name, description, price, imageUrl, categoryName });
    setShowModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      await axios.put(
        `https://ownthreedays-default-rtdb.firebaseio.com/recipe/${currentRecipe.id}.json`,
        {
          recipeName: currentRecipe.name,
          description: currentRecipe.description,
          price: currentRecipe.price,
          imageUrl: currentRecipe.imageUrl,
          categoryName: currentRecipe.categoryName,
        }
      );
      // Update recipe in the local state after saving
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) =>
          recipe.id === currentRecipe.id ? { ...recipe, ...currentRecipe } : recipe
        )
      );
      setShowModal(false); // Close the modal
      alert("Recipe updated successfully");
    } catch (error) {
      console.log("Error saving the recipe", error);
    }
  };

  const handleDeleteRecipe = async (id) => {
    try {
      await axios.delete(`https://ownthreedays-default-rtdb.firebaseio.com/recipe/${id}.json`);
      setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
      alert("Recipe Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Recipes</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {recipes.length === 0 ? (
          <p>No recipes available.</p>
        ) : (
          recipes.map((recipe) => (
            <CardEditDelete
              key={recipe.id}
              recipeName={recipe.name}
              recipeImageUrl={recipe.imageUrl}
              recipeDescription={recipe.description}
              price={recipe.price}
              disableClick={true}
              type="recipe"
              onEdit={() =>
                handleEditRecipe(
                  recipe.id,
                  recipe.name,
                  recipe.description,
                  recipe.price,
                  recipe.imageUrl,
                  recipe.categoryName
                )
              }
              onDelete={() => handleDeleteRecipe(recipe.id)}
            />
          ))
        )}
      </div>

      {/* Modal for editing recipe */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Recipe Name</label>
            <input
              type="text"
              className="form-control"
              value={currentRecipe.name}
              onChange={(e) => setCurrentRecipe({ ...currentRecipe, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              className="form-control"
              value={currentRecipe.description}
              onChange={(e) =>
                setCurrentRecipe({ ...currentRecipe, description: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              value={currentRecipe.price}
              onChange={(e) => setCurrentRecipe({ ...currentRecipe, price: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              type="text"
              className="form-control"
              value={currentRecipe.imageUrl}
              onChange={(e) => setCurrentRecipe({ ...currentRecipe, imageUrl: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input
              type="text"
              className="form-control"
              value={currentRecipe.categoryName}
              onChange={(e) =>
                setCurrentRecipe({ ...currentRecipe, categoryName: e.target.value })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={() => setShowModal(false)}>
            Close
          </button>
          <button className="btn btn-primary" onClick={handleSaveEdit}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Recipes;
