import axios from "axios";
import { useState } from "react";

const useMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loading, setLoading] = useState(true);
  axios.get("http://localhost:5000/menu").then((data) => {
    setMenus(data.data);
    setLoading(false);
  });
  return [menus, loading];
};
export default useMenu;
