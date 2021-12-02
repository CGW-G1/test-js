import React, { useState, useEffect } from 'react';
import API2 from '../API2';


function SingleDisplay() {

    // const [outputCountry, setOutputCountry] = useState('');


    const [countries, setCountries]= useState([]);
    const [country, setCountry] = useState('Singapore');
    const [countryCases, setCases] = useState({});
    const [countryDeaths, setDeaths] = useState({});
    const [countryDay, setDay] = useState('');
    
    let cases = '';
    let deaths = '';

    useEffect(() => {
        getAllCountries();      
    },[]);

    async function getAllCountries() {

        const response = await API2.get('/countries');
        console.log('Response from get - list of countries: ', response)

        let extractCountries = [];

        if (response.status === 200) {
            extractCountries = response.data.response;
            console.log('Extracted owners', extractCountries);
            setCountries(extractCountries);
        }
    }

    const countryList = () => {
        
        console.log('inside render: ', countries);
        if (countries.length === 0) {
            return (
                <p>no countries listed</p>
            )
        }

        const optionCountries = countries.map((x,i) => {
            return (                
                <option key={`${x}-${i}`}>{x}</option>
            )
        })

        return (
            <select id='countries' name='countries' onChange={handleChange} defaultValue='Singapore'>
                {optionCountries}
            </select>
        )
    }

    function handleChange(e) {        
        setCountry(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        
        console.log('submitted country', country);

        const response = await API2.get(`/statistics?country=${country}`);
            if (response.status === 200) {
                console.log('200 ok');

                let extractStat = response.data.response[0];
                // cases = extractStat.cases;
                // deaths = extractStat.deaths;
                console.log('Extracted Stat: ', extractStat);
                console.log('Extracted Cases: ', cases);
                console.log('Extracted Cases: ', cases.new);
                console.log('Extracted Deaths: ', deaths);
                setCases(extractStat.cases);
                setDeaths(extractStat.deaths);
                setDay(extractStat.day);
            }

        // testing historical
        const response2 = await API2.get(`/history?country=${country}&day=2021-03-21`);
        if (response2.status === 200) {
            console.log('200 ok - history:', response2);
        }


    }
    
    return (
        <div className='canvass'>
            <div className='displayWindow2'>
                <form onSubmit={handleSubmit}>
                    <h3>Choose a country</h3>
                    {countryList(countries)}
                    <input type='submit' value='Submit' />
                </form>                
            </div>
            <div className='displayWindow2'>
                <div className='displayCell'>
                    {`Date of update: ${countryDay}`}
                    <br/>
                    <br/>
                    Cases
                    <ul>
                        <li>New: {(countryCases.new === null) ? 0 : countryCases.new}</li>
                        <li>Active: {countryCases.active}</li>
                        <li>Critical: {countryCases.critical}</li>
                        <li>Recovered: {countryCases.recovered}</li>
                        <li>Total: {countryCases.total}</li>                        
                    </ul>
                    <br/>
                    <br/>
                    Deaths
                    <ul>                        
                        <li>New: {(countryDeaths.new === null) ? 0 : countryDeaths.new}</li>
                        <li>Total: {countryDeaths.total}</li>
                    </ul>

                </div>
              
            </div>
        </div>
    )    
}

export default SingleDisplay;