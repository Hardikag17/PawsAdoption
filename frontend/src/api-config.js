export const API_ROOT =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8081/' //dev
    : 'http://localhost:8081/'; //prod
