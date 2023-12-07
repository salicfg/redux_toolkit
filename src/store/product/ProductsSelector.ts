import {RootState} from "../index.ts"
import {ProductSelector} from "./types.ts";

export const productsSelector = (state: RootState): ProductSelector => ({
    products: state.product.products,
    loading: state.product.loading
})