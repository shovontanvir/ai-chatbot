import Authentication from "../pages/Authentication/Authentication";
import Dashboard from "../pages/Dashboard/Dashboard";
import UserProfile from "../pages/UserProfile/UserProfile";

export const routes = [
  {
    id: 1,
    name: "Dashboard",
    path: "/",
    element: <Dashboard />,
  },
  {
    id: 2,
    name: "Authentication",
    path: "/authentication",
    element: <Authentication />,
  },
  {
    id: 3,
    name: "User Profile",
    path: "/user-profile",
    element: <UserProfile />,
  },
];
