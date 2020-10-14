export interface UserResponse {
  result: User[];
  findAll: boolean;
}

export interface User {
  deleted: boolean;
  _id: string;
  userName: string;
  password: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}
