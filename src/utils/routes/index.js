const routes = [
  {
    path: "/overview",
    context: "Overview",
    role: 'all'
  },
  {
    path: "/projects",
    context: "Projects",
    role: 'Contractor'
  },
  {
    path: "/explore",
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