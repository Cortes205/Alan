import renderHeader from './helpers/renderHeader.tsx'
import currencypic from "../assets/currencyapp.png"

export default function Projects() {
    return (
        <>
            {renderHeader('~$ Projects', 'h2', 20)}

            <ul>
                <li>
                    <div>
                        <h3><a target="_blank" href="https://github.com/Cortes205/Currency-Conversion-App">Currency Conversion App</a></h3>
                        <img src={currencypic} alt="currency-conversion-application" />
                        <p>Interactive command line interface application used to convert currencies with live exchange rates</p>
                    </div>
                </li>
            </ul>

        </>
    );
}