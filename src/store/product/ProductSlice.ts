// src/redux/counterSlice.ts
import {ActionReducerMapBuilder, createSlice} from '@reduxjs/toolkit';
import {ProductsState} from "./types.ts";
import {getProductsThunk} from "./ProductThunk.ts";


export const initialState: ProductsState = {
    products: [],
    loading: false,
    errorMessage: ''
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        reset: () => {
            return initialState
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<ProductsState>) => {
        builder
            .addCase(getProductsThunk.pending, (state) => {
                state.loading = true;
                state.errorMessage = '';
            })
            .addCase(getProductsThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload?.products || []
            })
            .addCase(getProductsThunk.rejected, (state, action) => {
                state.loading = false;
                state.errorMessage = action.payload
            })
    }
});

export const {reset} = productSlice.actions;
export const ProductReducer = productSlice.reducer;
