import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Estado inicial sin usuario
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});

// Exporta las acciones
export const { setUser, clearUser } = userSlice.actions;

// Exporta el reducer
export default userSlice.reducer;
