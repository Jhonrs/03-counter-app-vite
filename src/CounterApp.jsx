import { useState } from "react";
import PropsTypes from "prop-types";

export const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(value);
    const handleAdd = () => {
        setCounter(counter + 1);
        //setCounter( (c) => c + 1 );
    };
    const handleRemove = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>

            <h2>{counter}</h2>
            <button data-testid="btn-increase" onClick={handleAdd}>+1</button>
            <button data-testid="btn-decrease" onClick={handleRemove}>-1</button>
            <button data-testid="btn-reset" onClick={handleReset}>Reset</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropsTypes.number.isRequired,
};
