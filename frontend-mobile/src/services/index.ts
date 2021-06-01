import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
    baseURL: "https://mestresistemico-dsmovieflix.herokuapp.com/"

})

export const TOKEN = 'Basic ZHNtb3ZpZWZsaXg6ZHNtb3ZpZWZsaXgxMjM='

export async function userToken() {
    const token = AsyncStorage.getItem("@token");
    return token;
}

export function getMovies() {
    const res = api.get(`/movies?page=0&linesPerPage=20&orderBy=title&direction=ASC&genreId=0`);
    return res;
}

export async function createReview(data: object) {
    const authToken = await userToken();
    const res = api.post(`/reviews`, data, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    return res;
}

export function getGenres() {
    const res = api.get(`/genres`);
    return res;
}

export async function getMovie(id: number) {
    const authToken = await userToken();
    const res = api.get(`/products/${id}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
        },
    });
    return res;
}