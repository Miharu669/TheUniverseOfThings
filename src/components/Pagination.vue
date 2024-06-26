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

<style lang="scss" scoped>
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
  color: $ligth;
  text-decoration: none;
  background-color: $main; 
  padding: 10px; 
  border-radius: 5px; 
  box-shadow: none !important;
}

.page-link:hover {
  background-color: $orange !important;
  box-shadow: none !important;
}

.page-link.active {
 color: $orange; 
}

.page-item:first-child .page-link,
.page-item:last-child .page-link {
  background-color: #D9D9D9; 
}
</style>

