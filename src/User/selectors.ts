export const saveToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getToken = () => {
  return localStorage.getItem('token') || '';
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const hasErrors = (fieldsError: object) =>
  Object.keys(fieldsError).some(field => fieldsError[field]);
