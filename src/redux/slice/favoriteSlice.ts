import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
};

const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            const product = state.favorites.find((item: any) => item.id === action.payload.id);
            if (!product) {
                state.favorites.push({ ...action.payload, quantity: 1 });
            } else {
                product.quantity += 1;
            }
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter((item: any) => item.id !== action.payload);
            localStorage.setItem("favorites", JSON.stringify(state.favorites));
        }
    }
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;