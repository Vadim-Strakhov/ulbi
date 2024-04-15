import { IUser } from "../../models/IUser";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//_ обычный reducers
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (e) {
//     dispatch(userSlice.actions.usersFetchingError(e.message));
//   }
// };

export const fetchUsers = createAsyncThunk(
  //_ extraReducers
  "user/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users?_limit=5"
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Не удалось загрузить пользователей");
    }
  }
);
