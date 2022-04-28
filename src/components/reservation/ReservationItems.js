import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Button } from "react-bootstrap";
import React, {useState} from 'react';
import { RESERVATIONBACKEND } from "../../_actions/types";
import { useSelector } from 'react-redux';
import { selectUser } from '../../_reducers';
import axios from "axios";


const ReservationItems = (props) => {
    const { rsvtSeq, fcSeq, userId, userTel, rsvtYmd, rsvtHr, rsvtPdt, rsvtRtrchDt, rsvtAprvDt, rsvtRcptDt, rsvtMdfcnDt, operHr, stat} = props.reservation;
    const [message, setMessage] = useState("");

    const user = useSelector(selectUser);

    const deleteReservation = () => {
        axios.post(`${RESERVATIONBACKEND}/reservation/delete/${rsvtSeq}`)
        .then(response => response.text())
        .then(message => {
            setMessage(message);
        });
        window.location.reload();
    };

    const approvalReservation = () => {
        axios.post(`${RESERVATIONBACKEND}/reservation/approval/${rsvtSeq}`)
        .then(response => response.text())
        .then(message => {
            setMessage(message);
        });
        window.location.reload();
    };

    const noapprovalReservation = () => {
        axios.post(`${RESERVATIONBACKEND}/reservation/noapproval/${rsvtSeq}`)
        .then(response => response.text())
        .then(message => {
            setMessage(message);
        });
        window.location.reload();
    };


    return (
        <div className="container mx-auto my-3 py-3 rounded-4 shadow" style={{textAlign: "center"}} >
            <Table striped bordered hover variant="dark" style={{textAlign: "center", margin: "0px", padding: "0px"}}>
            <tbody className="container">
                <tr>
                <td>{rsvtSeq}</td>
                <td>{fcSeq}</td>
                <td>{userId}</td>
                <td>{userTel}</td>
                <td>{rsvtYmd}</td>
                <td>{rsvtHr}</td>
                <td>{rsvtPdt}</td>
                <td>{rsvtRtrchDt}</td>
                <td>{rsvtAprvDt}</td>
                <td>{rsvtRcptDt}</td>
                <td>{rsvtMdfcnDt}</td>
                <td>{operHr}</td>
                <td>{stat}</td>
                    {
                        user.userId === {userId} ? (
                            <div>
                                <td>
                                    <Button type="button" onClick={deleteReservation} className="btn btn-primary" variant="primary">예약취소</Button>
                                </td>
                            </div>
                        ):(
                            <></>
                        )
                    }
                    {
                        user.role === "Admin" ? (
                            <>
                            <div>
                                <td>
                                    <Button type="button" onClick={approvalReservation} className="btn btn-primary" variant="primary">예약승인</Button>
                                </td>
                                <td>
                                    <Button type="button" onClick={noapprovalReservation} className="btn btn-primary" variant="primary">예약거절</Button>
                                </td>
                            </div>
                            </>
                        ):(
                            <>
                            </>
                        )
                    }
                </tr>
            </tbody>
            </Table>
        </div>
    );
};

export default ReservationItems;