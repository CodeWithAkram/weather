import React, { useEffect, useState } from 'react';

const Temp = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Delhi");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3244c9d10790d15bd14d3e4a2426a236`
            const response = await fetch(url);
            const resJason = await response.json();

            setCity(resJason.main);
        };
        fetchApi();
    }, [search] )

    return (
        <>
            <div className="container">
                <div className="container_box">
                    <div className="input_feild">
                        <input
                            type="search"
                            value={search}
                            placeholder="Search City..."
                            onChange={(event) => { setSearch(event.target.value) }}
                        />
                    </div>
                    {!city ? (
                        <p className="nodata">No Data Found </p>
                    ) : (
                        <div>
                            <div className="info">
                                <h2 className="location"><i className="fas fa-street-view"></i> {search}</h2>
                                <h1 className="temp">{city.temp} Cel</h1>
                                <h3 className="temp_min">Min: {city.temp_min}  Cel | Max: {city.temp_max}  Cel</h3>
                            </div>

                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                    )}

                </div>

            </div>


        </>
    )
}

export default Temp;
