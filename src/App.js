import Header from "./components/Header";
import Footer from "./components/Footer";
import AddCategory from "./pages/AddCategory";
import AddRecipe from "./pages/AddRecipe";
import Dashboard from "./components/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import Auth from "./pages/Auth";
import Recipes from "./pages/Recipes";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoginStatus } from "./store/authSlice";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LoginStatus());
  });
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
          <Route path="/auth" element={<Auth />} />
          {isLoggedIn && (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/add-category" element={<AddCategory />} />
              <Route path="/add-recipe" element={<AddRecipe />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/category" element={<Categories />} />
              <Route path="/orders" element={<Orders />} />
              {/* Dynamic route for category name */}
              <Route
                path="/category/:categoryName"
                element={<CategoryPage />}
              />
            </>
          )}
        </Routes>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
