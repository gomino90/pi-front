import React, {useState, useEffect} from "react";
import Filter from "../layout/Filter";
import MapContainer from "../layout/MapContainer ";


export const Home = () => {
  const [Place, setPlace] = useState();

  const [faci, setFaci] = useState(false);  // 메뉴의 초기값을 false로 설정
  const [pharmacy, setPharmacy] = useState(false);  // 메뉴의 초기값을 false로 설정
  const [parking, setParking] = useState(false);  // 메뉴의 초기값을 false로 설정

  const [faciSearch, setFaciSearch] = useState();
  const [faciSearchBool, setFaciSearchBool] = useState(false);

  
  const toggleFaci = (faci) => {
    setFaci(faci); // on,off 개념 boolean
  }
  const togglePharmacy = (pharmacy) => {
    setPharmacy(pharmacy); // on,off 개념 boolean
  }
  const toggleParking = (parking) => {
    setParking(parking); // on,off 개념 boolean
  }
  
  const searchFaci = (faciSearch) =>{
    setFaciSearch(faciSearch);
  }

  return (
    <>
      <Filter faci={faci} toggleFaci={toggleFaci} pharmacy={pharmacy} togglePharmacy={togglePharmacy} parking={parking} faciSearchBool={faciSearchBool}
        toggleParking={toggleParking} searchFaci={searchFaci} setFaciSearchBool={setFaciSearchBool} />
    
      <MapContainer faci={faci} pharmacy={pharmacy} parking={parking} searchPlace={Place} faciSearch = {faciSearch} faciSearchBool={faciSearchBool}/>
    </>
  );
};
