import {FC, useEffect} from 'react';
import {useSelector} from "react-redux";

import {productsSelector} from "../../store/product/ProductsSelector.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.tsx";
import {getProductsThunk} from "../../store/product/ProductThunk.ts";
import ProductCardComponent from "../../components/ProductCardComponent";
import {reset} from "../../store/product/ProductSlice.ts";


const ProductsContainer: FC = () => {
    const {products, loading} = useSelector(productsSelector)
    // TypeScript miatt letre kell hozni a dispatch-nak egy kulon hook-et, mert automatikusan nem ismeri fel hogy o egy thunk -ot fog kapni.
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductsThunk());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleResetOrFetch = () => {
        dispatch(products.length ? reset() : getProductsThunk())
    }

    if (loading) {
        return <h2>Please wait...</h2>
    }

    return (
        <>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: 15}}>
                {products.map((product) => <ProductCardComponent key={product.id} {...product}/>)}
            </div>
            <button onClick={handleResetOrFetch}>{products.length ? 'RESET' : 'FETCH'}</button>
        </>

    )
}

export default ProductsContainer;