import axios from "axios";

export const client =  axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Accept: "application/json",
    'Content-type': 'application/json; charset=UTF-8'
  },
});

export enum Endpoints{
  TODO='/todos'
}
