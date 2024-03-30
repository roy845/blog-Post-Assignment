import { USERS } from "@/constants/usersConstants";
import { LoginUserAction } from "@/types/actions/userActionTypes";
import { UserState } from "@/types/userTypes";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  users: USERS,
  selected: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginUser(state, action: LoginUserAction) {
      const index = state.users.findIndex((user) => user === action.payload);

      if (index !== -1) {
        state.selected = action.payload;
      } else {
        throw new Error("Unauthorized");
      }
    },

    logoutUser(state, action) {
      state.selected = "";
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
