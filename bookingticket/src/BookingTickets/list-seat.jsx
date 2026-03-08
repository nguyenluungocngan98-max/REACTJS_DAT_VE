import RowSeat from "./row-seat";
import { useSelector } from "react-redux";

export default function ListSeat() {
    const listSeats = useSelector(
        (state) => state.bookingMovieReducer.listSeats,
    )

    const renderListSeats = () => {
        return listSeats.map((item, index) => {
            return <RowSeat 
            key={index}
            rowSeatProps = {item}
            />
        })
    }
    return (
        <div>
            <div className="screen text-center">Màn hình</div>
            {renderListSeats()}
        </div>
    )
};