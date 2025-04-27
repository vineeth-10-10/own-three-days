import Header from "./components/Header";
import Footer from "./components/Footer";
import AddCategory from "./pages/AddCategory";
import AddRecipe from "./pages/AddRecipe";
import Dashboard from "./components/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import Auth from "./pages/Auth";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Full viewport height
      }}
    >
      <Header />
      <main style={{ flex: 1 }}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/add-recipe" element={<AddRecipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/category" element={<Categories />} />
        {/* Dynamic route for category name */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
