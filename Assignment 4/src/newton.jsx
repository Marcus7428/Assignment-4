function newtonMethod(g) {
    return g - ((6 * Math.pow(g, 4) - 13 * Math.pow(g, 3) - 18 * Math.pow(g, 2) + 7 * g + 6) / (24 * Math.pow(g, 3) - 39 * Math.pow(g, 2) - 36 * g + 7));
}

import { useState } from 'react';
import './heron.css';

function Heron() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [c, setC] = useState("");
    const [result, setResult] = useState("");

    function calculateHeron(event) {
        event.preventDefault();
        const s = (a + b + c) / 2;
        if ((a < b + c) && (b < a + c) && (c < a + b)) {
            setResult(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
        } else {
            setResult("This triangle is not valid");
        }
    }

    return (
        <form className="calculator" onSubmit={(event) => { calculateHeron(event) }}>
            <h2>Heron's Formula</h2>
            <label className="a">Side A:</label>
            <input type="number" id="a" name="a" value={a} onChange={(event) => { setA(Number(event.target.value)) }} required />
            <label className="b">Side B:</label>
            <input type="number" id="b" name="b" value={b} onChange={(event) => { setB(Number(event.target.value)) }} required />
            <label className="c">Side C:</label>
            <input type="number" id="c" name="c" value={c} onChange={(event) => { setC(Number(event.target.value)) }} required />
            <label className="result">Area:</label>
            <input type="text" id="result" name="result" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    );
}

export default Heron;