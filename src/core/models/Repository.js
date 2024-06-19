export default class Repository {

    constructor(uri) {
        this.uri = uri
    }

    getUri() {
        return this.uri
    }

    async get() {
        try {
            const response = await fetch(this.uri)
            const data = await response.json()
            return data
        } catch (error) {
            throw new Error('Error loading API')
        }
    }
}