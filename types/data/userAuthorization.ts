export type User = {
  email: string;
  password: string,
};

export type Users = {
  [key: string]: User;
};