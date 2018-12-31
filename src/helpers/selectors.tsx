export const hasErrors = (fieldsError: any) =>
  Object.keys(fieldsError).some(field => fieldsError[field]);
