import Users from "pages/users";
import MainLayout from "../layout/MainLayout";
import AuthGuard from "../utils/route-guard/AuthGuard";


const MainRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <AuthGuard>
          <MainLayout />
        </AuthGuard>
      ),
      children: [
        {
          path: "sample-page",
          element: <>Sample page</>,
        },
        {
          path: "users",
          element: <Users />,
        },
      ],
    },
  ],
};

export default MainRoutes;
