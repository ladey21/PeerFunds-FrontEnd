const routes = [
  {
    path: "/overview",
    context: "Overview",
    role: 'all'
  },
  {
    path: "/projects",
    context: "Groups",
    role: 'all'
  },
  {
    path: "/All groups",
    context: "Explore",
    role: 'Worker'
  },
  {
    path: "/requests",
    context: "Requests",
    role: 'Worker'
  },
  {
    path: "/my-profile",
    context: "My Profile",
    role: 'all'
  }
];

export default routes;