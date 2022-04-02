import React, {useState, useEffect} from 'react';
import {Calendar} from "react-multi-date-picker";
import "react-datepicker/dist/react-datepicker.css";
import {ko} from "date-fns/esm/locale"
import { Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import addDays from "date-fns/addDays";

function FacitDetailDatePicker() {
    const fcSeq = useParams().fcSeq;
    const [startDate, setStartDate] = useState(new Date());
    const [disableDate, setDisableDate] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:8080/hldy/getAllByhldySeq/${fcSeq}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.length);
            for(let i = 0; i < data.length; i++){
                setDisableDate(data.tcbizBgngYmd)
                console.log(data[i].tcbizBgngYmd);
            }
        setDisableDate(data);
        });
    }, [fcSeq]);

    return ( 
        <Form className="container" style={{alignItems:"center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
                <Calendar value={startDate} onChange={setStartDate}
                minDate={addDays(new Date(), 1)} maxDate={addDays(new Date(), 14)} />
            </div>
        </Form>
     );
}

export default FacitDetailDatePicker;