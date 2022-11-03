const SERVER_BASE_URL = 'http://localhost:3000/comments';

export const getComments = () => {
    return fetch(SERVER_BASE_URL)
        .then(response => response.json())
        .then(data => {
            return data;
        })
}


