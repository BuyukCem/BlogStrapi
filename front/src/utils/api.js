/**
 * @param {string} endpoint
 * @param {object} options
 * **/
import {ApiErrors} from "../Errors/apiErrors";

export async function apiFetch(endpoint, options = {}) {
    const response = await fetch('http://0.0.0.0:3001' + endpoint, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        ...options
    })
    if (response.status === 204) {
        return null;
    }
    const responseData = await response.json()
    if (response.ok) {
        return responseData;
    } else {
        if (responseData.message) {
            throw new ApiErrors(responseData.message)
        }
    }
}