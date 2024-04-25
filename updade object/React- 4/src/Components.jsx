/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function MyComponents() {
    const [cars, setCars] = useState([]);
    const [caryears, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {
        const newCar = {
            year: caryears,
            make: carMake,
            model: carModel,
        };
        setCars([...cars, newCar]);
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index) {
        setCars((prevCars) => prevCars.filter((_, i) => i !== index));
    }

    function handleYearChange(event) {
        setCarYear(event.target.value);
    }

    function handleMakeChange(event) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event) {
        setCarModel(event.target.value);
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>
            <input
                type="number"
                placeholder="year"
                value={caryears}
                onChange={handleYearChange}
            />
            <br />
            <input
                type="text"
                placeholder="car company"
                value={carMake}
                onChange={handleMakeChange}
            />{" "}
            <br />
            <input
                type="text"
                placeholder="car model"
                value={carModel}
                onChange={handleModelChange}
            />{" "}
            <br />
            <button onClick={handleAddCar}>Add Car</button>
        </div>
    );
}

export default MyComponents;
