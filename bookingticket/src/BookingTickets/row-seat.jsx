import Seat from "./seat";

export default function RowSeat(props) {

  const { rowSeatProps } = props;

  const renderSeats = () => {
    return rowSeatProps.danhSachGhe.map((seat) => {
      return (
        <Seat
          key={seat.soGhe}
          seatProps={seat}
        />
      );
    });
  };

  return (
    <div>
      <span className="firstChar">{rowSeatProps.hang}</span>
      {renderSeats()}
    </div>
  );
}