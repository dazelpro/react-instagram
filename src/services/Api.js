import axios from 'axios';

// const rootUrl = 'http://10.0.2.2:8080/'; //Emulator
const rootUrl = 'http://10.29.87.8:8080/'; //Real

const getHeader = () => {
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjo0MCwiZW1haWwiOiJkYXplbHByb0BnbWFpbC5jb20iLCJuYW1lIjoiWmVsZGlhbnRvIiwiaWF0IjoxNjUyNTE3MDg3fQ.gOdistqsR9xr7-4eX8QAigOc4ISrrM6p0JpsJJj7wzI';

    // let headers = {};
    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');

    // return token ? headers.append('Authorization', token) : null;

    return {
        headers: {
            'Authorization': `${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*',
        }
    };
}

const auth = (data) => {
    return axios.post(`${rootUrl}login`, data).then(async res => {
        return res;
    }).catch(err => {
        return err;
    });
};

const addUser = (data) => {
    return axios.post(`${rootUrl}users`, data).then(async res => {
        return res;
    }).catch(err => {
        return err;
    });
};

const getUsers = () => {
    return axios.get(`${rootUrl}users`, getHeader() ).then(async res => {
        return res.data;
    }).catch(err => {
        return err;
    });
};

export {auth, addUser, getUsers};
