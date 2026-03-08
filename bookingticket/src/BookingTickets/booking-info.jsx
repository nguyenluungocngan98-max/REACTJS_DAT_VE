import { useDispatch, useSelector } from "react-redux";
import { removeSeatAction } from "./slice";

export default function BookingInfo() {
    const dispatch = useDispatch();

    const seatsSelected = useSelector(
        (state) => state.bookingMovieReducer.seatsSelected
    );

    const total = seatsSelected?.reduce((sum, seat) => {
        return sum + seat.gia;
    }, 0) || 0;

    const renderSeatsSelected = () => {
        return seatsSelected.map((seat) => {
            return (
                <tr className="border-b-2" key={seat.soGhe}>
                    <td className="border-r-2 p-2">{seat.soGhe}</td>

                    <td className="border-r-2 p-2">{seat.gia.toLocaleString()}</td>

                    <td>
                        <button
                            className="text-red-500"
                            onClick={() => dispatch(removeSeatAction(seat.soGhe))}
                        >
                            X
                        </button>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div>
            <h3 className="font-bold">DANH SÁCH GHẾ BẠN CHỌN</h3>

            <table className="table text-white">
                <thead>
                    <tr className="border-b-2">
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>

                <tbody>{renderSeatsSelected()}</tbody>

                <tfoot>
                    <tr>
                        <td className="border-r-2 p-2">Tổng tiền</td>
                        <td>{total.toLocaleString()}</td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}