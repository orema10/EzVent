<template>
  <section class="items-list">
    <h1>Items List</h1>
    <ul>
      <li v-for="hall in halls"><item-preview :hall="hall"></item-preview></li>
    </ul>
  </section>
</template>

<script>
import itemPreview from './ItemPreview';
export default {
  props: ['halls'],
  components: {
  itemPreview
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
}
</style>
