import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (body) => ({
        url: "/v1/api/auth/registration",
        method: "POST",
        body,
      }),
    }),
    loginUser: builder.mutation({
      query: (body) => ({
        url: "/v1/api/auth/login",
        method: "POST",
        body,
      }),
    }),
    otpVerify: builder.mutation({
      query: (body) => ({
        url: "/v1/api/auth/otpverify",
        method: "POST",
        body,
      }),
    }),
    resendOTP: builder.mutation({
      query: (body) => ({
        url: "/v1/api/auth/resendotp",
        method: "POST",
        body,
      }),
    }),
    tokenVerify: builder.mutation({
      query: (body) => ({
        url: "/v1/api/auth/token",
        method: "POST",
        body,
      }),
    }),
    findUser: builder.mutation({
      query: (body) => ({
        url: "/v1/api/auth/finduser",
        method: "POST",
        body,
      }),
    }),
    forgotUserOTP: builder.mutation({
      query: (body) => ({
        url: "/v1/api/auth/finduserotpverify",
        method: "POST",
        body,
      }),
    }),
    restPass: builder.mutation({
      query: (body) => ({
        url: "/v1/api/auth/restpass",
        method: "POST",
        body,
      }),
    }),
  }),
});
export const {
  useAddUserMutation,
  useLoginUserMutation,
  useOtpVerifyMutation,
  useResendOTPMutation,
  useTokenVerifyMutation,
  useFindUserMutation,
  useForgotUserOTPMutation,
  useRestPassMutation,
} = authApi;
