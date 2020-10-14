export interface UseFindAllResponse {
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

export interface CreateResponse {
  message: string;
  created: boolean;
}

export interface LoginResponse {
  result: LoginInfo;
  find: boolean;
}

interface LoginInfo {
  userName: string;
}

