import { useNavigate } from "react-router-dom";
import "./index.css";
import logo from "../../../assets/logo-tech.png";

const navbar_header = [
  { name: "Home", route: "/" },
  { name: "Booking", route: "/booking" },
];
export default function Navbar() {
  const router = useNavigate();
  return (
    <div className="navbar_container nav_flex">
      <div className="pointer" onClick={() => router("/")}>
        <img src={logo} height={40} />
      </div>
      <div className="nav_details_flex">
        {navbar_header.map((item) => {
          return (
            <div
              className="pointer ani_button"
              onClick={() => {
                if (item.route) router(item.route);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div
        className="pointer logout ani_button"
        onClick={() => router("/login")}
      >
        logout
      </div>
    </div>
  );
}
