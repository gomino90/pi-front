import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHERAPI } from "../../_actions/types";

function Weather() {
  const city = "Busan";
  const lang = "kr";
  const url = `${WEATHERAPI.base}weather?q=${city}&appid=${WEATHERAPI.key}&lang=${lang}&units=metric`;
  const [weather, setWeather] = useState("");

  useEffect(() => {
      // 날씨 가져오기
    axios.get(url).then((responseData) => {
        const data = responseData.data;
        setWeather({
        temperature: data.main.temp.toFixed(1),
        main: data.weather[0].description,
        loading: false,
        });
    });
  }, []);

  return (
    <Wrapper>
      <div>
        <WeatherDiv>맑음</WeatherDiv>
        <WeatherDiv>18.8℃</WeatherDiv>
      </div>
    </Wrapper>
  );
}
export default Weather;

const Wrapper = styled.div``;

const WeatherDiv = styled.div`
  color: white;
  font-size: 17px;
  text-align: center;
`;