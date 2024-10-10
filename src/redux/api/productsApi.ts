import { api } from "./index";
import { productProps } from "../../types/type";

const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<productProps[], void>({
      query: () => ({
        url: "/products.json",
        providesTags: ["PRODUCTS"],
      })
    }),
    detailsProduct: build.query<productProps, string>({
      query: (id) => ({
        url: `/products/${id}.json`,
        providesTags: ["PRODUCTS"],
      }),
    }),
    getBrandProducts: build.query<productProps[], string>({
      query: (brand) => ({
        url: `/products.json?brand=${brand}`,
        providesTags: ["PRODUCTS"],
      }),
    }),
    getCategoryProducts: build.query<productProps[], string>({
      query: (product_type) => ({
        url: `/products.json?product_type=${product_type}`,
        provideTags: ['PRODUCTS'],
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useDetailsProductQuery,
  useGetBrandProductsQuery,
  useGetCategoryProductsQuery
} = productsApi;