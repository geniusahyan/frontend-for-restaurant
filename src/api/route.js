import axios from 'axios';
const url = import.meta.env.REACT_APP_API_URL;

export const addUser = async (data)=>{
    try {
        await axios.post(`${url}/user`,data);
    } catch (error) {
        console.log("data fetching error", error);
    }
}

export const getUser = async (data)=>{
    try {
        const users = await axios.post(`${url}/getuser`, data);
        return users;
    } catch (error) {
        console.log("data fetching error", error);
    }
}

export const sendContact = async (data)=>{
    try {
        await axios.post(`${url}/contact`,data);
    } catch (error) {
        console.log("data fetching error", error);
    }
}

export const getMenu = async (data)=>{
    // data from database
    try {
        const  menuList = await axios.get(`${url}/menu`);
        return menuList.data;
    } catch (error) {
        console.log("data fetching error", error);
    }
}