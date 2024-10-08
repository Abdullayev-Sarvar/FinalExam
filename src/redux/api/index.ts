import { createApi, retry, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = async (args: any, api: any, extraOptions: any) => {
   const { dispatch } = api;
   const rawBaseQuery = fetchBaseQuery({
      baseUrl: import.meta.env.VITE_BASE_URL,
      prepareHeaders: (headers) => {
         return headers;
      },
   });

   const response = await rawBaseQuery(args, api, extraOptions);

   if (response.error) {
      const { status } = response.error;

      if (status === 401 || status === 403) {
         dispatch({ type: "LOGOUT" });
      }
   }

   return response;
};

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 });

export const api = createApi({
   reducerPath: "api",
   baseQuery: baseQueryWithRetry,
   tagTypes: ["PRODUCTS", "CART"],
   endpoints: () => ({}),
});