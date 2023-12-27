
import Todos from "../pages/Todos";

export const publicRouters = [
  { path: "/todos", component: Todos },
  { path: "/todos/delete/:id", component: Todos },
  { path: "/todos/update/:id", component: Todos },
];
