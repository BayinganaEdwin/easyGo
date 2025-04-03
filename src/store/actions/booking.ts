import { GenericResponse } from '@utils/types/global';

import { baseAPI } from '../api';

const bookingEndpoints = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getMyBookings: builder.query<any, void>({
      query: () => ({
        url: 'booking/my-bookings',
        method: 'GET',
      }),
    }),
    getSchedules: builder.query<any, void>({
      query: () => ({
        url: 'schedule',
        method: 'GET',
      }),
    }),
    bookTicket: builder.mutation<GenericResponse<any>, { schedule_id: string }>({
      query: (body) => ({
        url: 'booking',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetMyBookingsQuery, useBookTicketMutation, useGetSchedulesQuery } =
  bookingEndpoints;
