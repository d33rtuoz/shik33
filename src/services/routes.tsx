import Home from "../pages/Home";
import List from "../pages/List";
import Profile from "../pages/Profile";
import Search from "../pages/Search";

const routes = [
  {
    name: "Home",
    path: "/",
    element: <Home />,
  },
  {
    name: "Library",
    path: "/list",
    element: <List />,
  },
  {
    name: "Search",
    path: "/anime",
    element: <Search />,
  },
  {
    name: "Profile",
    path: "/:user",
    element: <Profile />,
  },
];

export default routes;
