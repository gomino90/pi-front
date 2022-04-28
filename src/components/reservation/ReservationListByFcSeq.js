import { useEffect, useState } from "react";
import ReservationItems from "./ReservationItems";
import {useParams} from "react-router-dom";
import { RESERVATIONBACKEND } from "../../_actions/types";
import axios from "axios";


const ReservationListByFcSeq = () => {
    const [reservations, setReservations] = useState([]);
    const fcSeq = useParams().fcSeq;
  
    useEffect(() => {
      axios.get(`${RESERVATIONBACKEND}/reservation/getAll/${fcSeq}`)
        .then((res) => res.json())
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
  
  export default ReservationListByFcSeq;

