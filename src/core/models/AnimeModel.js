export default class Anime {

    title
    img
    year
    type
    genres

    constructor(title, img, year, type, genres) {
        this.title = title
        this.img = img
        this.year = year || 'Unknown Year';
        this.type = type || 'Unknown Type';
        this.genres = genres || [];
    }

    getTitle() {
        return this.title
    }

    getImg() {
        return this.img
    }

    getYear() {
        return this.year
    }

    getType() {
        return this.type
    }

    getGenres() {
        if (Array.isArray(this.genres)) {
            return this.genres.map(genre => genre.name).join(', ');
        } else {
            return 'Unknown Genres';
        }
    }
}