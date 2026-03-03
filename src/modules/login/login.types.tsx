export interface Credentials {
  username: string;
  password: string;
}

export interface User {
  id: number;
  name: string;
  role: 'admin' | 'manager' | 'staff';
  branches: number[];
}

export interface LoginState {
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}