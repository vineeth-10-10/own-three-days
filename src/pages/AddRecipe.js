<<<<<<< HEAD
import { useState, useEffect } from "react";
import axios from "axios";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://ownthreedays-default-rtdb.firebaseio.com/category.json"
        );
        const data = response.data;
        if (data) {
          const catList = Object.keys(data).map((key) => ({
            id: key,
            name: data[key].categoryName,
          }));
          setCategories(catList);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const categorySubmit = async (e) => {
    e.preventDefault();

    const payload = {
      recipeName,
      description,
      price,
      categoryName,
      imageUrl,
    };

    try {
      const response = await axios.post(
        "https://ownthreedays-default-rtdb.firebaseio.com/recipe.json",
        payload
      );
      const data = response.data;
      console.log(data);
      alert("Recipe Added Successfully");
    } catch (error) {
      console.error(error);
      alert("Error Adding Recipe");
    }

    // Clear form
    setRecipeName("");
    setDescription("");
    setCategoryName("");
    setPrice("");
    setImageUrl("");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={categorySubmit}>
        <div className="mb-3">
          <label htmlFor="recipeName" className="form-label">
            Recipe Name
          </label>
          <input
            type="text"
            className="form-control"
            id="recipeName"
            placeholder="Enter Recipe Name"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Category Name
          </label>
          <select
            className="form-control"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map(category =>( 
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="url"
            className="form-control"
            id="imageUrl"
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
=======
import { useState, useEffect } from "react";
import axios from "axios";

const AddRecipe = () => {
  const [recipeName, setRecipeName] = useState("");
  const [description, setDescription] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://ownthreedays-default-rtdb.firebaseio.com/category.json"
        );
        const data = response.data;
        if (data) {
          const catList = Object.keys(data).map((key) => ({
            id: key,
            name: data[key].categoryName,
          }));
          setCategories(catList);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const categorySubmit = async (e) => {
    e.preventDefault();

    const payload = {
      recipeName,
      description,
      price,
      categoryName,
      imageUrl,
    };

    try {
      const response = await axios.post(
        "https://ownthreedays-default-rtdb.firebaseio.com/recipe.json",
        payload
      );
      const data = response.data;
      console.log(data);
      alert("Recipe Added Successfully");
    } catch (error) {
      console.error(error);
      alert("Error Adding Recipe");
    }

    // Clear form
    setRecipeName("");
    setDescription("");
    setCategoryName("");
    setPrice("");
    setImageUrl("");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4 text-center">Add New Recipe</h2>
      <form onSubmit={categorySubmit}>
        <div className="mb-3">
          <label htmlFor="recipeName" className="form-label">
            Recipe Name
          </label>
          <input
            type="text"
            className="form-control"
            id="recipeName"
            placeholder="Enter Recipe Name"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="categoryName" className="form-label">
            Category Name
          </label>
          <select
            className="form-control"
            id="categoryName"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map(category =>( 
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            placeholder="Enter Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">
            Image URL
          </label>
          <input
            type="url"
            className="form-control"
            id="imageUrl"
            placeholder="Enter Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
>>>>>>> 51a939b4043f027cdd28a974ccf1720295a1a9a3
