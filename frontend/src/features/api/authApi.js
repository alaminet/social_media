import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  endpoints: (builder) => ({
    addUser: builder.query({
      query: (body) => ({
        url: "/v1/api/auth/registration",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const { useAddUserMutation } = authApi;
