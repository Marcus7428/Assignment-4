import { useState } from 'react';
import './newton.css';

function Newton() {
    const [g, setG] = useState("");
    const [result, setResult] = useState("");

    function calculateNewton(event) {
        event.preventDefault();

        let currentGuess = g;
        let nextGuess;

        while (true) {
            nextGuess = currentGuess - ((6 * Math.pow(currentGuess, 4) - 13 * Math.pow(currentGuess, 3) - 18 * Math.pow(currentGuess, 2) + 7 * currentGuess + 6) / (24 * Math.pow(currentGuess, 3) - 39 * Math.pow(currentGuess, 2) - 36 * currentGuess + 7));
            
            if (Math.abs(nextGuess - currentGuess) > 0.0001) {
                currentGuess = nextGuess;
            } else {
                break;
            }
        }
        setResult(nextGuess.toFixed(3));
    }
    return (
        <form className="newtonCalculator" onSubmit={(event) => { calculateNewton(event) }}>
            <h2>Newton's Method</h2>
            <label className="g">Root Guess:</label>
            <input type="number" id="g" name="g" value={g} onChange={(event) => { setG(Number(event.target.value)) }} required />
            <label className="result">Root Approximation (Result):</label>
            <input type="text" id="result" name="result" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    );
}

export default Newton;