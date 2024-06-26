<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: currentPage === 1 }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="changePage(currentPage - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
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