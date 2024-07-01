import Repository from "@/core/models/Repository";

export default class AnimeRepository extends Repository {

    constructor(uri) {
        super(uri)
    }

    async getAll(page = 1, itemsPerPage = 6) {

        try {
            const response = await fetch(`${this.uri}?page=${page}&limit=${itemsPerPage}`)
            const data = await response.json()
            return data
        } catch (error) {
            throw new Error('Error loading Anime API ' + error.message)
        }
    }

    // async getAnimesByGenre(genre, page = 1, itemsPerPage = 6) {
    //     try {
    //         const response = await fetch(`${this.uri}?genre=${genre}&${page}&limit=${itemsPerPage}`);
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         throw new Error('Error loading Anime API ' + error.message);
    //     }
    // }
}