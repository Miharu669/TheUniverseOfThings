import { ref, onMounted } from 'vue';
import AnimeRepository from '@/core/apis/anime/animeRepository';
import AnimeService from '@/core/apis/anime/animeService';

export function useFetchAnimes(apiEndpoint) {
    const animes = ref([]);
    const isLoading = ref(true);
    const error = ref(null);

    const repo = new AnimeRepository(apiEndpoint);
    const service = new AnimeService(repo);

    const fetchAnimes = async () => {
        try {
            isLoading.value = true;
            const data = await service.getAllAnimes();
            animes.value = data;
        } catch (err) {
            error.value = err;
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(() => {
        fetchAnimes();
    });

    return { animes, isLoading, error };
}
