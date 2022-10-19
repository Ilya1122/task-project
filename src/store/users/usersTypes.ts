export interface IUser {
  name: string;
  age: number;
  id: string;
  aboutPerson: string;
}

export type EditUser = Omit<IUser, "id">;
