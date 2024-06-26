<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage(currentPage - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" :class="{ active: currentPage === 1 }">
        <a class="page-link" href="#" @click.prevent="changePage(1)">1</a>
      </li>
      <li class="page-item" v-if="showLeftEllipsis">
        <span class="page-link">...</span>
      </li>
      <li class="page-item" v-for="page in visiblePages" :key="page" :class="{ active: currentPage === page }">
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
      </li>
      <li class="page-item" v-if="showRightEllipsis">
        <span class="page-link">...</span>
      </li>
      <li class="page-item" :class="{ active: currentPage === totalPages }">
        <a class="page-link" href="#" @click.prevent="changePage(totalPages)">{{ totalPages }}</a>
      </li>
      <li class="page-item" :class="{ disabled: currentPage === totalPages }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="changePage(currentPage + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    default: 1076, 
  },
});

const emits = defineEmits(['changePage']);

const changePage = (page) => {
  if (page > 0 && page <= props.totalPages) {
    emits('changePage', page);
  }
};

const maxVisiblePages = 5; // Number of pages to display around the current page

const visiblePages = computed(() => {
  const pages = [];
  const half = Math.floor(maxVisiblePages / 2);

  let start = props.currentPage - half;
  let end = props.currentPage + half;

  if (start < 2) {
    start = 2;
    end = Math.min(2 + maxVisiblePages - 1, props.totalPages - 1);
  } else if (end >= props.totalPages) {
    start = Math.max(props.totalPages - maxVisiblePages + 1, 2);
    end = props.totalPages - 1;
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
});

const showLeftEllipsis = computed(() => {
  return visiblePages.value[0] > 2;
});

const showRightEllipsis = computed(() => {
  return visiblePages.value[visiblePages.value.length - 1] < props.totalPages - 1;
});
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
}

.page-item {
  margin: 0 5px;
}

.page-link {
  color: #F6E9E9;
  text-decoration: none;
  background-color: #363333; /* Color de fondo para los números de paginación */
  padding: 10px; /* Agregar padding para hacer el fondo más visible */
  border-radius: 5px; /* Bordes redondeados para una mejor apariencia */
}

.page-link:hover {
  background-color: #E16428;
}

.page-link.active {
 color: #E16428; /* Color de fondo cuando el número está seleccionado */
}

.page-item:first-child .page-link,
.page-item:last-child .page-link {
  background-color: #D9D9D9; /* Color para los enlaces "Previous" y "Next" */
}
</style>