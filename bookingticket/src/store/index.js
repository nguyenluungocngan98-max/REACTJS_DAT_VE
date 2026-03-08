import { configureStore } from "@reduxjs/toolkit";
import bookingMovieReducer from "../BookingTickets/slice";

const store = configureStore({
    reducer: {
        bookingMovieReducer,
    },
});

export default store;