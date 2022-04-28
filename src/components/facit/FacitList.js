import { useEffect, useState } from "react";
import FacitItem from "./FacitItem";
import { RESERVATIONBACKEND } from "../../_actions/types";
import axios from "axios";

function FacitList() {
    
  const [facits, setFacits] = useState([]);

  useEffect(() => {
    axios.get(`${RESERVATIONBACKEND}/tbfacit/getAll`)
      .then((res) => res.data)
      .then((res) => {
        setFacits(res);
      });
  }, []);

  return ( 
      <div>
          {facits.map((facits) => (
        <FacitItem key={facits.fcSeq} facit={facits} />
      ))}
      </div>
    );
}

export default FacitList;