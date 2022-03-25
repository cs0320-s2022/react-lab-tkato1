import TextBox from "./Textbox";
import React, {useState} from 'react';
import axios from "axios";
// @ts-ignore
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function Horoscope() {

    //TODO: Fill in the ? with appropriate names/values for a horoscope.
//HINT: Look at the HoroscopeHandler's response in Main.java to choose a default useState value.
    const [horoscope, setHoroscope] = useState([])

    const requestHoroscope = () => {
        const toSend = {
                //TODO: Pass in the values for the data. Follow the format the route expects!
            sun: sunInfo,
            moon: moonInfo,
            rising: risingInfo
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post("http://localhost:4567/horoscope", toSend, config)
            .then((response: { data: { [x: string]: React.SetStateAction<never[]>; }; }) => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data['horoscope']);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    const [sunInfo, setSun] = useState("");
    const [moonInfo, setMoon] = useState("");
    const [risingInfo, setRising] = useState("");

    return (
        <div className="App">
            <header className="App-header">

                <TextBox label={"Sun Sign"} change={setSun}/>
                <TextBox label={"Moon Sign"}  change={setMoon}/>
                <TextBox label={"Rising Sign"}  change={setRising}/>
                <AwesomeButton onPress={requestHoroscope} type={"primary"}>
                    Submit
                </AwesomeButton>
                {horoscope.map(element => <div>{element}</div>)}
            </header>
        </div>
    );
}

export default Horoscope