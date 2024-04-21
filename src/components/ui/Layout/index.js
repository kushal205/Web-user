import Navbar from "../navbar";
import "../../../App.css";
import "../../../components/pages/index.css";

export default function Layout({ children }) {
  return (
    <div className="layout_container">
      <Navbar />
      {children}
    </div>
  );
}
