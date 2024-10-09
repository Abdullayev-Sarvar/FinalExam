import { api } from "./index";
import { productProps } from "../../types/type";

const productsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query<productProps[], void>({
            query: () => "products",
            providesTags: ["PRODUCTS"],
        }),
    }),
});

export const {
    useGetProductsQuery,
} = productsApi;