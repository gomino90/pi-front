import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import React, {useState} from 'react';
import { RESERVATIONBACKEND } from "../../_actions/types";

function FacitItem(props) {

    const { fcSeq, faciNm, faciGbNm, fcobNm, ftypeNm, fmngTypeGbNm, fmngCpNm, fmngCpbNm, fmngUserTel, faciRoadAddr1, faciHomepage, 
        faciStat, totFaciArea, mdfr, nationYn, stat, updated} = props.facit;

    return ( 
        <div>
            <Table striped bordered hover variant="dark" style={{textAlign: "center", margin: "0px", padding: "0px"}}>
                <tbody>
                    <tr>
                    <td>{fcSeq}</td>
                    <td> <Link to={"/facit/" + fcSeq} variant="primary" style={{color: "white", textDecoration: 'none'}} >{faciNm}</Link></td>
                    <td>{faciGbNm}</td>
                    <td>{fcobNm}</td>
                    <td>{ftypeNm}</td>
                    <td>{fmngTypeGbNm}</td>
                    <td>{fmngCpNm}</td>
                    <td>{fmngCpbNm}</td>
                    <td>{fmngUserTel}</td>
                    <td>{faciRoadAddr1}</td>
                    <td>{faciHomepage}</td>
                    <td>{faciStat}</td>
                    <td>{totFaciArea}</td>
                    <td>{mdfr}</td>
                    <td>{nationYn}</td>
                    <td>{updated}</td>
                    <td>{stat}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
     );
}

export default FacitItem;