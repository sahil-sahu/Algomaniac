/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */
const routes = [
  // {
  //   path: "/app/dashboard", // the url
  //   icon: "HomeIcon", // the component being exported from icons/index.js
  //   name: "QR-FILL USER DATA", // name that appear in Sidebar
  // },
  {
    path: "/app/UserHistory",
    icon: "FormsIcon",
    name: "User History",
  },
  {
    path: "/app/NearbyBin",
    icon: "FormsIcon",
    name: "Nearby Bin",
  },
  {
    path: "/app/PickUpRequest",
    icon: "CardsIcon",
    name: "Pick-up Request",
  },
  {
    path: "/app/AddComplaint",
    icon: "ChartsIcon",
    name: "Add complaint",
  },
  {
    path: "/app/CheckCreditPoint",
    icon: "ButtonsIcon",
    name: "Check Credit Points",
  },
  // {
  //   path: "/app/modals",
  //   icon: "ModalsIcon",
  //   name: "Modals",
  // },
  // {
  //   path: "/app/tables",
  //   icon: "TablesIcon",
  //   name: "Tables",
  // },
  // {
  //   icon: "PagesIcon",
  //   name: "Pages",
  //   routes: [
  //     // submenu
  //     {
  //       path: "/login",
  //       name: "Login",
  //     },
  //     {
  //       path: "/create-account",
  //       name: "Create account",
  //     },
  //     {
  //       path: "/forgot-password",
  //       name: "Forgot password",
  //     },
  //     {
  //       path: "/app/404",
  //       name: "404",
  //     },
  //     {
  //       path: "/app/blank",
  //       name: "Blank",
  //     },
  // ],
  // },
];

export default routes;
