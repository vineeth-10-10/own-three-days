import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";
import CardEditDelete from "../components/CardEditDelete";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentCategory, setCurrentCategory] = useState({
    id: "",
    name: "",
    imageUrl: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://ownthreedays-default-rtdb.firebaseio.com/category.json"
        );
        const data = response.data;
        if (data) {
          const CatList = Object.keys(data).map((key) => ({
            id: key,
            name: data[key].categoryName,
            imageUrl: data[key].imageUrl,
          }));
          setCategories(CatList);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const handleEditCategory = (id, name, imageUrl) => {
    setCurrentCategory({ id, name, imageUrl });
    setShowModal(true);
  };

  const handleSaveEditCategory = async () => {
    try{
      await axios.put(
        `https://ownthreedays-default-rtdb.firebaseio.com/category/${currentCategory.id}.json`,
        {
          categoryName: currentCategory.name,
          imageUrl: currentCategory.imageUrl,
        }
      );
      setCategories((previousCategories) =>
        previousCategories.map((category) =>
          category.id === currentCategory.id
            ? { ...category, name: currentCategory.name, imageUrl: currentCategory.imageUrl }
            : category
        )
      );
      alert("Category Updated Successfully");
      setShowModal(false);
    }
    catch(error){
      console.log(error);
    }
  }
  

  const handleDeleteCategory = async (id) => {
    const confirmDelete = window.confirm("Are You Sure You Want To Delte?");
    if (confirmDelete) {
      try {
        await axios.delete(
          `https://ownthreedays-default-rtdb.firebaseio.com/category/${id}.json`
        );
        setCategories((previousCategories) =>
          previousCategories.filter((category) => category.id !== id)
        );
        alert("Category Deleted Successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container mt-s">
      <h2 className="mb-4">Categories</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {categories.map((category) => (
          <CardEditDelete
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
            disableClick={true}
            type="category"
            onEdit={() =>
              handleEditCategory(category.id, category.name, category.imageUrl)
            }
            onDelete={() => handleDeleteCategory(category.id)}
          />
        ))}
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label>Category Name</label>
            <input
              className="form-control"
              type="text"
              value={currentCategory.name}
              onChange={(e)=>setCurrentCategory({...currentCategory,name:e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Image URL</label>
            <input
              className="form-control"
              type="url"
              value={currentCategory.imageUrl}
              onChange={(e)=>setCurrentCategory({...currentCategory,imageUrl:e.target.value})}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={()=>setShowModal(false)}>Close</button>
          <button className="btn btn-danger" onClick={handleSaveEditCategory}>Save Changes</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Categories;
