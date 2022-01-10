import axios from "axios";
//const baseLink = "https://jsonplaceholder.typicode.com/";
const baseLink = "http://danillittle.tk/api/";


export const query = async(url, method ='GET', data, headers) => {
    const response = await axios({
        
        url: baseLink + url,
        method: method,
        data,
        headers: { "Content-Type": "application/json",  ...headers }
    });
    return response.data;
};

// axios({
//     method: 'post',
//     url: '/user/12345',
//     data: {
//       firstName: 'Fred',
//       lastName: 'Flintstone'
//     }
//   });