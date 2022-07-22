import { IconContext } from "react-icons";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function BackButton({ path }) {
  return (
    <IconContext.Provider value={{ size: "2.3em", color: "white" }}>
      <Link to={path}>
        <FaArrowLeft />
      </Link>
    </IconContext.Provider>
  );
}

export default BackButton;
