import { createSlice } from "@reduxjs/toolkit";
import data from "./data.json";

const initialState = {
    listSeats: data,
    seatsSelected: [],
};

const findSeatIndex = (list, soGhe) => {
    return list.findIndex((item) => item.soGhe === soGhe);
};

const bookingMovieSlice = createSlice({
    name: "bookingMovieSlice",
    initialState,
    reducers: {

        selectedAction: (state, action) => {
            const seat = action.payload;

            const seatsUpdate = [...state.seatsSelected];

            const index = findSeatIndex(seatsUpdate, seat.soGhe);

            if (index !== -1) {
                seatsUpdate.splice(index, 1);
            } else {
                seatsUpdate.push(seat);
            }

            state.seatsSelected = seatsUpdate;
        },

        removeSeatAction: (state, action) => {

            const soGhe = action.payload;

            const seatsUpdate = [...state.seatsSelected];

            const index = findSeatIndex(seatsUpdate, soGhe);

            if (index !== -1) {
                seatsUpdate.splice(index, 1);
            }

            state.seatsSelected = seatsUpdate;
        },

    }
})

export const { selectedAction, removeSeatAction } = bookingMovieSlice.actions;

export default bookingMovieSlice.reducer;