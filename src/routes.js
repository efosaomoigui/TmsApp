import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import Trucks from "views/Trucks.jsx";
import Drivers from "views/Drivers.jsx";
import lafargeLocator from "views/lafargeLocator.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/trucks",
    name: "Trucks",
    icon: "pe-7s-note2",
    component: Trucks,
    layout: "/admin"
  },
  {
    path: "/drivers",
    name: "Drivers",
    icon: "pe-7s-note2",
    component: Drivers,
    layout: "/admin"
  },
    {
    path: "/lafargeLocator",
    name: "lafargeLocator",
    icon: "pe-7s-note2",
    component: lafargeLocator,
    layout: "/admin"
  },
  // {
  //   path: "/typography",
  //   name: "Typography2",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  {
    path: "/maps",
    name: "Maps",
    icon: "pe-7s-map-marker",
    component: Maps,
    layout: "/admin"
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },

];

export default dashboardRoutes;
