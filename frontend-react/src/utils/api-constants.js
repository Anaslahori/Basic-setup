const config = {
  // create API routes here and pass that in tables component.
  '/login': '/auth/login',
  '/sign-up': '/auth/sign-up',
  '/update-password': '/auth/update-password/',
  '/users-list': '/users/list',
   "/users-create":"/users/create"
};
export default Object.freeze(config);
export const apiVersion = '/api/v1';
