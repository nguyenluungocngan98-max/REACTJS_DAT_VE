import { useDispatch, useSelector } from "react-redux";
import { selectedAction } from "./slice";

export default function Seat(props) {

  const dispatch = useDispatch();

  const { seatProps } = props;

  const seatsSelected = useSelector(
    (state) => state.bookingMovieReducer.seatsSelected
  );

  let cssSeat = "ghe";

  if (seatProps.daDat) {
    cssSeat = "ghe gheDuocChon";
  }

  const index =
    seatsSelected?.findIndex(
      (item) => item.soGhe === seatProps.soGhe
    ) ?? -1;

  if (index !== -1) {
    cssSeat = "ghe gheDangChon";
  }

  return (
    <button
      className={cssSeat}
      disabled={seatProps.daDat}
      onClick={() => dispatch(selectedAction(seatProps))}
    >
      {seatProps.soGhe}
    </button>
  );
}