<template>
      <section class="home">
        <items-filter></items-filter>
        <items-list></items-list>
      </section>
</template>

<script>
import itemsFilter from '../components/Filter';
import itemsList from '../components/ItemsList';
export default {
  name: 'home',
    components: {
    itemsFilter,
    itemsList
  }
}
</script>
