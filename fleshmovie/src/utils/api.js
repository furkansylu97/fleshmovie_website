import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";


const headers = {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOTdkMGUzN2ZhNzllOWZiMzAyMDZjY2Q2YTk3YWEwMSIsInN1YiI6IjY2NDExZjQ2ODQ1YjQzNmViZTM2ZTE2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V9_x0pw7Dfvo5QI_N_LOlOcD0LHKztjDUUQuBXWovFY",
    accept: 'application/json',
};

 const fetchDataFromApi = async (url, params) => {
    try {
        const response = await axios.get(BASE_URL + url, { headers, params });
        return response.data;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export default fetchDataFromApi;