import ListSeat from "./list-seat";
import BookingInfo from "./booking-info";

export default function BookingTickets() {
  return (
    <div className="bookingMovie">
      <h1 className="text-warning text-center">
        ĐẶT VÉ XEM PHIM CYBERLEARN
      </h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2"><ListSeat /></div>
        <div><BookingInfo /></div>
      </div>
    </div>
  )
}
