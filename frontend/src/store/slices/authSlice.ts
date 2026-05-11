import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type Role = 'guest' | 'customer' | 'vendor' | 'admin';

export interface UserState {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: UserState;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: {
    id: 'guest',
    name: 'Guest User',
    email: '',
    role: 'guest',
    avatar: '',
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<UserState>) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = initialState.user;
    },
    updateUser(state, action: PayloadAction<Partial<UserState>>) {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;
