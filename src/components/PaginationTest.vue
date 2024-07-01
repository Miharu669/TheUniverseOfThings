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

const maxVisiblePages = 2;

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

<template>
  <div class="pagination-container">
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
  </div>
</template>



<style lang="scss" scoped>
nav{
  font-family: "poppins", sans-serif;
}
.pagination-container {
  display: flex;
  justify-content: center;
  width: 100%; /* Asegúrate de que el contenedor ocupe el ancho completo */
  grid-column: span 2;
}

.pagination {
  display: flex;
  justify-content: center;
  border-color:none !important
}

.page-item {
  margin: 0 5px;
}

.page-link {
  color: $ligth !important;
  text-decoration: none;
  background-color: $main !important;
  padding: 10px;
  border-radius: 5px;
  box-shadow: none !important;

}

.page-link:hover {
  background-color: $orange !important;
  box-shadow: none !important;
}
.page-link:active{
  border-color:none;
}

.page-link.active {
  color: $orange;
}

.page-item:first-child .page-link,
.page-item:last-child .page-link {
  background-color: $ligth-p !important;
  color: $dark !important;
}
</style>
