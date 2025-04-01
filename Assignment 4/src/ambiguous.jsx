import { useState } from 'react';
import './ambiguous.css';

function Ambiguous() {
    const [a, setA] = useState("");
    const [b, setB] = useState("");
    const [aa, setAA] = useState("");
    const [result, setResult] = useState("");

    function calculateAmbiguous(event) {
        event.preventDefault();
        let h = b * (Math.sin(aa * Math.PI / 180));
        h = parseFloat(h.toFixed(2));
        if (aa <= 90) {
            if (a < h) {
                setResult("No triangle");
            }
            else if (a == h) {
                setResult("Right triangle");
            }
            else if (a > b) {
                setResult("One Triangle");
            }
            else {
                setResult("Two triangles (ambiguous case)");
            }
        }
        else {
            if (a < b || a == b) {
                setResult("No triangle");
            }
            else if (a > b) {
                setResult("One triangle");
            }
        }
    }

    return (
        <form className="ambiguousCalculator" onSubmit={(event) => { calculateAmbiguous(event) }}>
            <h2>Ambiguous Case</h2>
            <label className="a">Length of side A:</label>
            <input type="number" id="a" name="a" value={a} onChange={(event) => { setA(Number(event.target.value)) }} required />
            <label className="b">Length of side B:</label>
            <input type="number" id="b" name="b" value={b} onChange={(event) => { setB(Number(event.target.value)) }} required />
            <label className="c">Angle a:</label>
            <input type="number" id="aa" name="aa" value={aa} onChange={(event) => { setAA(Number(event.target.value)) }} required />
            <label className="result">Triangle Type (Result):</label>
            <input type="text" id="result" name="result" value={result} readOnly />
            <input type="submit" value="Calculate" />
        </form>
    );
}

export default Ambiguous;