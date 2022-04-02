import React from 'react';
import { useState, useEffect } from 'react';
import "./css/style.css";
import { Line } from 'react-chartjs-2';

const Temp = () => {

    const [city, setcity] = useState("");
    const [query, setquery] = useState("Mumbai");
    const [text, settext] = useState("Mumbai");
    const [temp, settemp] = useState([]);
    const [feel, setfeel] = useState([]);

    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=cb3480ffc0fe36eb40d985fa3f8cc4f8&units=metric`
            const response = await fetch(url);
            const resjson = await response.json();
            setcity(resjson.main);
            settemp(temp.concat(resjson.main.temp));
            setfeel(feel.concat(resjson.main.feels_like));
        }
        fetchApi();
    }, [query])


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="left col-md-6">
                        <div className="box">
                            {!city ? (<p>Please enter a precise location</p>) :
                                (
                                    <div className="info">
                                        <h2 className="location">
                                            <i className="fa-solid fa-location-dot"></i>
                                            {capitalize(query)}
                                        </h2>
                                        <h4 className="localtemperature">
                                            Local Temperature - {city.feels_like}
                                        </h4>
                                        <h4 className="devicetemperature">
                                            Device Temperature - {city.temp}
                                        </h4>
                                    </div>
                                )
                            }
                            <div className="inputData">
                                <input type="search" className="inputField" value={text}
                                    onChange={(event) => { settext(event.target.value) }} />
                            </div>
                            <button className="btn" onClick={() => { setquery(text) }}>
                                Submit
                            </button>
                        </div>
                    </div>
                    <div className="right col-md-6">
                        <div className="chrt">
                            <Line
                                data={{
                                    labels: temp,
                                    datasets: [{
                                        label: 'Ambient Room Temperature',
                                        data: feel,
                                        backgroundColor: [
                                            'rgba(255, 99, 132, 0.2)',
                                            'rgba(54, 162, 235, 0.2)',
                                            'rgba(255, 206, 86, 0.2)',
                                            'rgba(75, 192, 192, 0.2)',
                                            'rgba(153, 102, 255, 0.2)',
                                            'rgba(255, 159, 64, 0.2)'
                                        ],
                                        borderColor: [
                                            'rgba(255, 99, 132, 1)',
                                            'rgba(54, 162, 235, 1)',
                                            'rgba(255, 206, 86, 1)',
                                            'rgba(75, 192, 192, 1)',
                                            'rgba(153, 102, 255, 1)',
                                            'rgba(255, 159, 64, 1)'
                                        ],
                                        borderWidth: 1
                                    }]
                                }}
                            />  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Temp