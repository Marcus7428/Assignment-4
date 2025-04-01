import { useState } from 'react';
import './polynomial.css';

function Polynomial() {
    const [coefficientsAsStr, setcoefficientsAsStr] = useState("");
    const [exponentsAsStr, setexponentsAsStr] = useState("");
    const [xValue, setxValue] = useState("");
    const [polynomialFunction, setpolynomialFunction] = useState("");
    const [polynomialEvaluation, setpolynomialEvaluation] = useState("");

    function calculatePolynomial(event) {
        event.preventDefault();
        const coefficients = coefficientsAsStr.split(" ");
        const exponents = exponentsAsStr.split(" ");
        let polynomialFunction = "f(x) = ";

        for (let i = 0; i < coefficients.length; i++) {
            let tempValue = parseFloat(coefficients[i]);
        
            if (tempValue < 0) {
                polynomialFunction += coefficients[i] + "x^" + exponents[i];
            } else if (i !== 0) {
                polynomialFunction += "+" + coefficients[i] + "x^" + exponents[i];
            } else {
                polynomialFunction += coefficients[i] + "x^" + exponents[i];
            }
        }
        let yValue = 0;

        for (let i = 0; i < coefficients.length; i++) {
            yValue += parseFloat(coefficients[i]) * Math.pow(xValue, parseFloat(exponents[i]));
        }

        setpolynomialFunction(polynomialFunction);
        setpolynomialEvaluation("f(" + xValue + ") = " + yValue);
    }
    return (
        <form className="polynomialCalculator" onSubmit={(event) => { calculatePolynomial(event) }}>
            <h2>Polynomial Function</h2>
            <label className="coefficients">Coefficients:</label>
            <input type="text" value={coefficientsAsStr} onChange={(event) => { setcoefficientsAsStr(event.target.value) }} required />
            <label className="exponents">Exponents:</label>
            <input type="text" value={exponentsAsStr} onChange={(event) => { setexponentsAsStr(event.target.value) }} required />
            <label className="xValue">X value:</label>
            <input type="number" value={xValue} onChange={(event) => { setxValue(Number(event.target.value)) }} required />
            <label className="polynomialFunction">Polynomial Function (Result):</label>
            <input type="text" value={polynomialFunction} readOnly />
            <input type="submit" value="Calculate" />
            <label className="polynomialEvaluation">Polynomial Evaluation (Result):</label>
            <input type="text" value={polynomialEvaluation} readOnly />
        </form>
    );
}
export default Polynomial;