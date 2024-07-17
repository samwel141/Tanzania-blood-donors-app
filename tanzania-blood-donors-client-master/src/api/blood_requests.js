// api.js
import axios from 'axios';

const API_URL = 'https://dev-api-hazel.vercel.app/api'; 

export const getBloodRequests = async () => {
    try {
        const response = await axios.get(`${API_URL}/request_blood`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("There was an error retrieving the blood requests!", error);
        throw error;
    }
};


export const getBloodSubmits = async () => {
    try {
        const response = await axios.get(`${API_URL}/submit_blood`);
        return response.data;
    } catch (error) {
        console.error("There was an error retrieving the blood requests!", error);
        throw error;
    }
};

export const getAllDonors = async () => {
    try {
        const response = await axios.get(`${API_URL}/donors`);
        return response.data;
    } catch (error) {
        console.error("There was an error retrieving the blood requests!", error);
        throw error;
    }
};


export const getAllCenters = async () => {
    try {
        const response = await axios.get(`${API_URL}/centers`);
        console.log('Centers')
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("There was an error retrieving the blood requests!", error);
        throw error;
    }
};