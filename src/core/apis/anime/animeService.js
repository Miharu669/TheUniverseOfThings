import Anime from "@/core/models/AnimeModel";

export default class AnimeService {

    #repo

    constructor(repository) {
        this.#repo = repository
    }

    async getAllAnimes() {
        const response = await this.#repo.getAll()
        const animes = response.data.map(item => new Anime(
            item.title,
            item.images.jpg.image_url,
            item.year,
            item.type,
            item.genres
        ))
        return animes
    }
}