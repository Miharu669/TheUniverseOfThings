<template>
    <div class="d-flex justify-content-center mt-5">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Spinner'
}
</script>
<style lang="scss" scoped>
.spinner-border{
    color: $orange;
 display: inline-block; 
 width: 2rem; 
 height: 2rem; 
 vertical-align: text-bottom; 
 border: 0.25em solid currentColor; 
 border-right-color: transparent; 
 border-radius: 50%; 
 animation: spinner-border 0.75s linear infinite;
   } 
  @keyframes spinner-border { 
    to { transform: rotate(360deg); } } 
    .visually-hidden {
         position: absolute; 
         width: 1px; 
         height: 1px; 
         padding: 0; 
         margin: -1px; 
         overflow: hidden; 
         clip: rect(0, 0, 0, 0); 
         border: 0; }
</style>