<template>
    <section class="filter">
        <div class="search-items"><span>Serach: </span><input type="text" v-model="filterBy.name" @input="changeFilter" placeholder="Input city / Place name ..." /></div>
    </section>
</template>

<script>
export default {
    data() {
    return {
      filterBy: {name: ''}
    }
  }, methods: {
      changeFilter() {
          this.$emit('changeFilter', this.filterBy)
      }
  }
}
</script>

<style scoped>

    span {
        font-weight: bold;
    }
    .filter {
        width: 90vw;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }

    .filter input {
        outline: none;
        width: 15vw;
        height: 4vh;
        font-weight: bold;
        font-size: 14px;
    }
    
</style>
