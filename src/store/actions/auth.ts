import { AuthResponse, LoginPayload, SignupPayload } from '../../utils/types/auth';

import { baseAPI } from '../api';

const authEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginPayload>({
      query: (body) => ({
        url: 'users/login',
        method: 'POST',
        body,
      }),
    }),
    signup: builder.mutation<AuthResponse, SignupPayload>({
      query: (body) => ({
        url: 'users/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authEndpoints;
