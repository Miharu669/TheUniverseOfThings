import { ref, onMounted } from 'vue';
import AnimeRepository from '@/core/apis/anime/animeRepository';
import AnimeService from '@/core/apis/anime/animeService';

export function useFetchAnimes(apiEndpoint) {
    const animes = ref([]);
    const isLoading = ref(true);
    const error = ref(null);
    const currentPage = ref(1);
    const itemsPerPage = 6;

    const repo = new AnimeRepository(apiEndpoint);
    const service = new AnimeService(repo);

    const fetchAnimes = async () => {
        try {
            isLoading.value = true;
            const data = await service.getAllAnimes(currentPage.value, itemsPerPage);
            animes.value = data;
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
        }
    };

    const setPage = (page) => {
        currentPage.value = page;
        fetchAnimes();
    }

    onMounted(() => {
        fetchAnimes();
    });

    return { animes, isLoading, error, currentPage, setPage };
}
