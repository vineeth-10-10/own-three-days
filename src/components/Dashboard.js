<<<<<<< HEAD
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Dashboard = () => {
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

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Categories</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {categories.map((category) => (
          <Card
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
            type="category"
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
=======
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

const Dashboard = () => {
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

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Categories</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {categories.map((category) => (
          <Card
            key={category.id}
            name={category.name}
            imageUrl={category.imageUrl}
            type="category"
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
>>>>>>> 51a939b4043f027cdd28a974ccf1720295a1a9a3
