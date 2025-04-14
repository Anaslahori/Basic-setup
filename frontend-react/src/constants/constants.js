export default {
  API_HOST: process.env.REACT_APP_HOST || '',
  API_BASE: '/api',
  API_VERSION: '/v1',
  API: {
    SAMPLE: '/sample'
  }
};

export const REQUEST_TIMEOUT = 30000;

export const DEFAULT_ERROR = {
  message: 'Request has been failed',
  code: 500
};

export const TIMEOUT_ERROR = {
  message: 'Your request is failed due to timeout',
  code: 500
};

export const PAGINATION_CONST = {
  pageIndex: 1,
  pageSize: 25,
  sortBy: 'updatedAt',
  sortOrder: 'DESC'
};
