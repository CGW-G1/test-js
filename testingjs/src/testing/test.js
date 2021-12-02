import React, { useState } from 'react';
import API from '../API';

function Testing() {

    const [textSubmitting, settextSubmitting] = useState("");
    const [rcvAudio, setrcvAudio] = useState("");    

    function handleInputChange (e) {
        settextSubmitting(e.target.value);
    }

    async function handleSubmit (e) {
        e.preventDefault();
        console.log('Submitting text: ', textSubmitting);

        if (textSubmitting === '') {
            alert('string empty!');
            return;
        } // dont waste GET attempt with empty string, daily 350 limit
        
        if (textSubmitting.length > 49000) {
            alert('string too long!');
            return;
        } // dont waste GET attempt with string exceed 100kb limit

        let apikey = "5";
        // let apikey = "52b16d4b4f1246ee800ea25d1b9fe536";
        let apilang = "en-us";
        let apicodec = "MP3";
        let apiformat = "8khz_8bit_mono"; // default is 8khz_8bit_mono
        let apiB64Status = true; // default is false, true for output as Base64 string format

        const response = await API.get(`/?key=${apikey}&hl=${apilang}&c=${apicodec}&f=${apiformat}&src=${textSubmitting}&b64=${apiB64Status}`);

        if (response.status === 200) {
            console.log('200 ok');
            console.log('Response: ', response);
            console.log('Response.data: ', response.data);

            setrcvAudio(response.data);
            
            // setrcvAudio("https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3");

            // let audioReturn = new Audio(response.data);
            // audioReturn.play();

        } else {
            console.log('error: ',response.status);
            return;
            }
    }

    const playAudio = () => {

        if (rcvAudio==="") {
            return (
                <p>no audio currently</p>
            )
        }

        if (rcvAudio.substring(0,5) === "ERROR") {
            return (
                <p>{rcvAudio}</p>
            )
        } // api has its own defined error set

        return (
            <div>
            <p>have audio</p>
            <audio id="audioPlayer" src={rcvAudio} autoPlay="autoplay">audio not supported</audio>
            </div>
        )

    }

    return (
        <div className='canvass'>
            <div className='displayWindow'>
                <form onSubmit={handleSubmit}>
                    <h3>Input text for speech return</h3>                    
                    <textarea name="audiotext" rows="4" cols="50" placeholder='Punctuation/numerals ok.' onChange={handleInputChange}></textarea>
                    <input type='submit' value='Submit' />
                </form>
                {playAudio(rcvAudio)}
            </div>
        </div>
    )
}

export default Testing;