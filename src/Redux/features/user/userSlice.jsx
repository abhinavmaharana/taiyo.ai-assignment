import { createSlice } from "@reduxjs/toolkit";
import { userList } from '../sampleData/Data';

export const userSlice = createSlice(
    {
        name: "users",
        initialState: userList,
        reducers: {
            addUser: (state, action) => {
                console.log(action, "test15");
                state.push(action.payload);
            },
            updateUser: (state, action) => {
                const { id, firstName, lastName } = action.payload;
                const uu = state.find((user) => user.id == id);
                if (uu) {
                    uu.firstName = firstName;
                    uu.lastName = lastName;
                }
            },
            deleteUser: (state, action) => {
                const { id } = action.payload;
                const uu = state.find((user) => user.id == id);
                if (uu) {
                    return state.filter((f) => f.id !== id);
                }
            },
        },
    }
)

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;