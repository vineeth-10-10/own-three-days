import { useState, useEffect } from "react";
import axios from "axios";
import CardEditDelete from "../components/CardEditDelete";

const Categories = () => {
  const [categories, setCategories] = useState([]);

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

  const handleEditCategory = (id) => {
    console.log(`Edit recipe with ID: ${id}`);
  }
  const handleDeleteCategory = async (id) => {
    const confirmDelete = window.confirm("Are You Sure You Want To Delte?")
    if(confirmDelete){
        try{
            await axios.delete(`https://ownthreedays-default-rtdb.firebaseio.com/category/${id}.json`);
            setCategories((previousCategories)=>previousCategories.filter((category)=> category.id !==id))
            alert("Category Deleted Successfully")
        }
        catch(error){
            console.log(error);
        }
    }
  }

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
            onEdit={() => handleEditCategory(category.id)}
            onDelete={() => handleDeleteCategory(category.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
