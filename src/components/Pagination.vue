<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style scoped>
nav{
  font-family: "Poppins", sans-serif;
}
.pagination {
  display: flex;
  justify-content: center;
  list-style-type: none;
   padding: 0;
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

