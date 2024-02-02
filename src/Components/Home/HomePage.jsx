import React from "react";
import { useNavigate } from "react-router-dom"; 
import { useUserAuth } from "../../Context/UserAuthContext";
import Products from "../Product/Products";

const HomePage = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="hero">
        <div className="d-grid gap-2">
          <button className="btn btn-primary" onClick={handleLogout}>
            Log out
          </button>
        </div>
        <div className="card bg-dark text-white border-0 position-relative">
          {/* Add a blurred background image */}
          <img
            src="/assets/bg.jpg"
            className="card-img"
            alt="Background"
            height="550px"
            style={{ filter: "blur(8px)" }}
          />
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container text-center">
              <h5 className="card-title display-3 fw-bolder mb-0">Coming Soon</h5>
              <p className="card-text lead fs-2">
                Exciting new features are on the way. Stay tuned!
              </p>
            </div>
          </div>
        </div>
        {/* <Products /> */}
      </div>
    </>
  );
};




export default HomePage;
