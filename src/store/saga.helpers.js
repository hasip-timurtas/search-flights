import _ from "lodash";
import axios from 'axios';

export const dateTimeNow = () => {
    const date = new Date();
    let currentMonth = date.getMonth() + 1;
    currentMonth = currentMonth < 10 ? '0' + currentMonth : currentMonth;
    let currentDate = date.getDate();
    currentDate = currentDate < 10 ? '0' + currentDate : currentDate;
    const currentYear = date.getFullYear();

    return (currentYear + '-' + currentDate + '-' + currentMonth + 'T01:00').toString();
}


const mapCheapFlights = (cheap) => {
    let departureTime, arrivalTime;
    const mapped = _.map(cheap.data.data, function (item) {
        const endpoints = _.split(item.route, '-');
        departureTime = new Date(item.departure);
        arrivalTime = new Date(item.arrival);
        return {
            id: item.uuid,
            departure: _.trim(endpoints[0]),
            departureTime: departureTime.toString(),
            arrival: _.trim(endpoints[1]),
            arrivalTime: arrivalTime.toString(),
            type: 'cheap'
        }
    });
    return mapped;
}

const mapBusinessFlights = (business) => {
    let departureTime, arrivalTime;
    const mapped = _.map(business.data.data, function (item, index) {
        departureTime = new Date(item.departureTime);
        arrivalTime = new Date(item.arrivalTime);
        return {
            id: item.id,
            departure: item.departure,
            departureTime: departureTime.toString(),
            arrival: item.arrival,
            arrivalTime: arrivalTime.toString(),
            type: 'business'
        }
    });

    return mapped;
}

export const mergeFlightLists = (cheap, business) => {
    const flightsArray = _.concat(mapCheapFlights(cheap), mapBusinessFlights(business));
    return flightsArray.sort((a, b) => new Date(a.departureTime) - new Date(b.departureTime));
}


export const getFlights = type =>{
    const url = 'https://cors-anywhere.herokuapp.com/https://tokigames-challenge.herokuapp.com/api/flights/' + type;
    return axios.get(url);
}