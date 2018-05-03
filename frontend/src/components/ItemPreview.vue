<template>
    <section class="item-preview">
        <div class="item-bg-img" v-bind:style="{ backgroundImage: 'url(' + './static/' + hall.imgUrl + ')' }"></div>
        
        <div class="item-details">
            <p class="item-details-type">{{hall.type}}</p>
            <p class="item-details-name">{{hall.name}}</p>
        </div>
        <!-- <item-details></item-details> -->
    </section>
</template>

<script>
import itemDetails from "./ItemDetails";

export default {
  props: ["hall"],
  components: {
    itemDetails
  }
};
</script>

<style scoped>
@import "../css/Fonts/fonts.css";
* {
  text-align: left;
  font-family: "Russo One";
}
.item-preview {
  width: 100%;
  height: 330px;
}

.item-bg-img {
  width: 100%;
  height: 65%;
  background-repeat: no-repeat;
  background-size: cover;
}

.item-details {
  padding-top: 8px;
  height: 35%;
}

.item-details-type {
  word-wrap: break-word;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #484848;
  font-weight: 700;
}

.item-details-name {
  word-wrap: break-word;
  font-size: 22px;
  line-height: 22px;
  color: #484848;
  font-weight: 700;
}
</style>
