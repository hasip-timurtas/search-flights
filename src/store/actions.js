export const getFlights = () => ({
    type: 'GET_FLIGHTS',
});

export const createFlight = (formData) => ({
    type: 'CREATE_FLIGHT',
    data : formData
});