export const fun = (str: string) => {
  return new Promise(() => {
    return `param: ${str}`;
  });
};
