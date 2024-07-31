import { useState } from "react"
import "./Tempapp.css"
import { useEffect } from "react";

const Tempapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("pune");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=bf734ae553b1454f77aaa7cd3c9e86e5`;
            const response = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main)
            console.log(resJson);
        }
        fetchApi();
    }, [search])

    return (
        <div className="container flex justify-center items-center h-screen">
            <div className="box flex justify-center items-center flex-col gap-24  ">
                {/* <div className="inputData flex items-center gap-24 text-xl flex-col bg-blue-200 h-1/2  p-2 w-80 rounded text-center"> */}
                <input
                    type="search"
                    className="inputField
                        bg-white border border-black rounded-3xl p-2 -mt-36 outline-none"
                    placeholder="search...."
                    onChange={(e) => { setSearch(e.target.value) }}
                    value={search}
                />

                {!city ? (
                    <p>No Data Found</p>
                ) : (
                    <div>

                        <div className="info">
                            <h2 className="location font-normal text-5xl">
                                <i className="fas fa-street-view text-black-50"></i>
                                {search}
                            </h2>
                            <h1 className="temp font-medium mt-5"> {city.temp}°Cel </h1>
                            <h3 className="tempmin_max font-extralight mt-1"> Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel </h3>

                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )
                }

                {/* </div> */}
            </div>


        </div>

    )
}

export default Tempapp