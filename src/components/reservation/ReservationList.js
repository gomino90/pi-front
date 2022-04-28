import { useEffect, useState } from "react";
import ReservationItems from "./ReservationItems";
import { RESERVATIONBACKEND } from "../../_actions/types";
import axios from "axios";

const ReservationList = () => {
    const [reservations, setReservations] = useState([]);
  
    useEffect(() => {
      axios.get(`${RESERVATIONBACKEND}/reservation/getAll`)
        .then((res) => res.data)
        .then((res) => {
          setReservations(res);
        });
    }, []);
  
    return (
      <div>
        {reservations.map((reservation) => (
          <ReservationItems key={reservation.rsvtSeq} reservation={reservation}/>
        ))}
      </div>
    );
  };
  
  export default ReservationList;

