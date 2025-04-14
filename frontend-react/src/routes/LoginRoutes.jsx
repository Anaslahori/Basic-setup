import CommonLayout from "../layout/CommonLayout";
import Login from "../pages/auth/Login";
import GuestGuard from "../utils/route-guard/GuestGuard";

const LoginRoutes = {
  path: "/",
  children: [
    {
      path: "/",
      element: (
        <GuestGuard>
          <CommonLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: "/",
          element: <Login />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ],
};

export default LoginRoutes;
