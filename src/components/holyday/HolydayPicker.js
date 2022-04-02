import React, {useState} from 'react';
import DatePicker from "react-multi-date-picker";
import { Button, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import opacity from "react-element-popper/animations/opacity"
import "react-multi-date-picker/styles/layouts/mobile.css"


function HolydayPicker() {
    const fcSeq = useParams().fcSeq;
    const [startDate, setStartDate] = useState([]);
    const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
    const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];

    const [holyDay, setHolyDay] = useState({
        hldySeq:0,
        fcSeq:0,
        tcbizBgngYmd: "",
        tcbizEndTmd: "",
        stat: 1,
    });

    const addHolyDay = (e) => {
        e.preventDefault();
        for (let i = 0; i < startDate.length; i++) {
            holyDay.tcbizBgngYmd = startDate[i];
            holyDay.fcSeq=fcSeq;
            fetch("http://localhost:8080/hldy/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8",
            },
            body: JSON.stringify(holyDay),
            })
        }
        console.log(holyDay);
        console.log(startDate[0]);
    };

    return ( 
        <Form onSubmit={addHolyDay} className="container" style={{alignItems:"center", justifyContent: "center"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",}}>
                <DatePicker className="rmdp-mobile" value={setStartDate} onChange={date => setStartDate(date)} 
                minDate={new Date()} animations={[opacity()]} format="YYYY-MM-DD" multiple="true" style={{width:"600px"}} 
                plugins={[<DatePanel />]} portal disableYearPicker disableMonthPicker />
            </div>
            <Button variant="primary" type="submit">
                확인
            </Button>
        </Form>
     );
}

export default HolydayPicker;