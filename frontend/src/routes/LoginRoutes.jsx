import CommonLayout from '../layout/CommonLayout';
import GuestGuard from '../utils/route-guard/GuestGuard';

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: (
        <GuestGuard>
          <CommonLayout />
        </GuestGuard>
      ),
      children: [
        {
          path: '/',
          element: <>Login page</>
        }
      ]
    }
  ]
};

export default LoginRoutes;
