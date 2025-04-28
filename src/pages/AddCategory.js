<<<<<<< HEAD
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  //   const navigate = useNavigate();

  const categorySubmit = async (e) => {
    e.preventDefault();

    const payload = {
      categoryName,
      imageUrl,
    };

    try {
      const response = await axios.post(
        "https://ownthreedays-default-rtdb.firebaseio.com/category.json",
        payload
      );
      console.log(response.data);
      alert("Category Added Successfully");
    } catch (error) {
      console.log(error);
      alert("Error Adding Category");
    }
    setCategoryName("");
    setImageUrl("");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <form onSubmit={categorySubmit}>
        <div className="mb-3">
          <label for="descriptionName" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            id="descriptionName"
            placeholder="Enter Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label for="imageUrl" className="form-label">
            Enter Image URL
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
        <div>
          <img
            src={imageUrl}
            alt="Category"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
=======
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCategory = () => {
  const [categoryName, setCategoryName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  //   const navigate = useNavigate();

  const categorySubmit = async (e) => {
    e.preventDefault();

    const payload = {
      categoryName,
      imageUrl,
    };

    try {
      const response = await axios.post(
        "https://ownthreedays-default-rtdb.firebaseio.com/category.json",
        payload
      );
      console.log(response.data);
      alert("Category Added Successfully");
    } catch (error) {
      console.log(error);
      alert("Error Adding Category");
    }
    setCategoryName("");
    setImageUrl("");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <form onSubmit={categorySubmit}>
        <div className="mb-3">
          <label for="descriptionName" className="form-label">
            Category Name
          </label>
          <input
            type="text"
            className="form-control"
            id="descriptionName"
            placeholder="Enter Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label for="imageUrl" className="form-label">
            Enter Image URL
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
        <div>
          <img
            src={imageUrl}
            alt="Category"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
>>>>>>> 51a939b4043f027cdd28a974ccf1720295a1a9a3
