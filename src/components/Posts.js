import React, { useContext } from "react";
import { Cotext } from "../context/Context";

const Posts = () => {
    const { theme, handleOnClick } = useContext(Cotext)
    return (
        <div>
            <h4>My Post With {theme}</h4>
            <button
                className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"}`}
                onClick={handleOnClick}
            >
                {theme === "dark" ? "light" : "dark"}
            </button>
        </div>
    );
}
export default Posts; 