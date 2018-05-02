<template>
      <section class="home-page">
        <!-- <img :src="'./static/event1.jpg'" /> -->
        <div class="bg-img" :style="{ backgroundImage: 'url(' + './static/' + 'bg-event.jpg' + ')' }"></div>      
      <div class="home">
        <items-filter @changeFilter="changeFilter"></items-filter>
        <items-list :halls="halls"></items-list>
      </div>
      </section>
</template>

<style scoped>
.bg-img {
  width: 100vw;
  height: 220px;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: .8;
  /* margin-top: -70px; */
}
 .home {
   width: 90vw;
   margin: 0 auto;
 }

 img {
   width: 100%;
   height: 400px;
 }
</style>


<script>
import itemsFilter from '../components/Filter';
import itemsList from '../components/ItemsList';

export default {
  name: 'home',
    components: {
    itemsFilter,
    itemsList
  },
  data() {
    return {
      filterBy: {name: 'The Queen blabla'}
    }
  }, 
  computed: {
    halls() {
      return this.$store.getters.halls;
    }
   },
  created() {
      this.$store.dispatch({type:'setHalls'})
      .then(() => {
        console.log('Halls Loaded!');
      })
    },
    methods: {
      changeFilter(filterBy) {
        this.filterBy = filterBy;
        this.$store.commit({type: 'changeFilter', filterBy});
      }
    }
  }
</script>
