import { Outlet } from "react-router-dom";
import NavigationBar from "../components/ui/NavigationBar/NavigationBar";

/**
 * TODO: useNavigation
 */
const Root = () => {
  return (
    <div>
      <Outlet />
      <NavigationBar />
    </div>
  );
};

export default Root;
