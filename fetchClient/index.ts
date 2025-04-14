//реализация через класс
class FetchClient {
    url: string;
    constructor(url: string) {
        this.url = url;
    }

    async request(method: string, url: string, body:object = {}) {
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

    async get(url: string) {
        return await this.request('GET', url);
    }

    async post(url:string, body:object) {
        return await this.request('POST', url, body);
    }

    async delete(url:string) {
        return await this.request('DELETE', url);
    }

    async patch(url:string, body:object) {
        return await this.request('PATCH', url, body);
    }
}


// реализация через объект 
const fetchClient = {
    async request(method:string, url:string, body: object = {}) {
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
    get(url:string) {
        return this.request('GET', url);
    },
    post(url:string, body:object) {
        return this.request('POST', url, body);
    },
    delete(url:string) {
        return this.request('DELETE', url);
    },
    patch(url:string, body:object) {
        return this.request('PATCH', url, body);
    }
}

