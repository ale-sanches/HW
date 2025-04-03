//реализация через класс
class FetchClient {
    constructor(url) {
        this.url = url;
    }

    async request(method, url, body) {
        try {
            const response = await fetch(url, {
                method: method,
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const data = await response.json();
            if (!response.ok) {
                throw {code: response.status, body: data}
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    }

    async get(url) {
        return await this.request('GET', url);
    }

    async post(url, body) {
        return await this.request('POST', url, body);
    }

    async delete(url) {
        return await this.request('DELETE', url);
    }

    async patch(url, body) {
        return await this.request('PATCH', url, body);
    }
}

// const r = new FetchClient();
//
// async function getData() {
//     try {
//         const response = await r.get('https://jsonplaceholder.typicode.com/posts/1');
//         console.log('Response:', response);
//     } catch (error) {
//         console.log(`Ошибка ${error.code}:`, error.body);
//     }
// }

// реализация через объект 
const fetchClient = {
    async request(method, url, body) {
        try {
            const response = await fetch(url, {
                method: method,
                body: JSON.stringify(body),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            })
            const data = await response.json();
            if (!response.ok) {
                throw {code: response.status, body: data}
            }
            return data;
        } catch (error) {
            console.log(error);
        }
    },
    get(url) {
        return this.request('GET', url);
    },
    post(url, body) {
        return this.request('POST', url, body);
    },
    delete(url) {
        return this.request('DELETE', url);
    },
    patch(url, body) {
        return this.request('PATCH', url, body);
    }
}

// async function getData() {
//     try {
//         const response = await fetchClient.get('https://jsonplaceholder.typicode.com/posts/1');
//         console.log('Response:', response);
//     } catch (error) {
//         console.log(`Ошибка ${error.code}:`, error.body);
//     }
// }
//
// await getData()
