import axios from 'axios';

const API2 = axios.create({
    baseURL: 'https://covid-193.p.rapidapi.com',
    headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': 'bd52c7831bmsh885f8cdd1f00f06p13ec79jsn09e6320cff58'
      }
  });

export default API2;