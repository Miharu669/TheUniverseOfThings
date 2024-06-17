import Repository from "@/core/models/Repository";

export default class AnimeRepository extends Repository {

    constructor(uri) {
        super(uri)
    }

    async getAll() {

        try {
            const response = await fetch(this.uri)
            const data = await response.json()
            return data
        } catch (error) {
            throw new Error('Error loading Anime API')
        }
    }
}