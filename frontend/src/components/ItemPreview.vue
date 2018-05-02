<template>
    <section class="item-preview">
        <!-- <div class="item-bg-img" v-bind:style="{ backgroundImage: 'url(' + './static/' + hall.imgUrl + ')' }"></div> -->
        
    <div class="w3-content w3-display-container">
        <img class="mySlides" src="img_nature.jpg">
        <img class="mySlides" src="img_fjords.jpg">
        <img class="mySlides" src="img_mountains.jpg">
        <div class="w3-center w3-display-bottommiddle" style="width:100%">
            <div class="w3-left" onclick="plusDivs(-1)">&#10094;</div>
            <div class="w3-right" onclick="plusDivs(1)">&#10095;</div>
            <span class="w3-badge demo w3-border" @click="currentDiv(1)"></span>
            <span class="w3-badge demo w3-border" @click="currentDiv(2)"></span>
            <span class="w3-badge demo w3-border" @click="currentDiv(3)"></span>
        </div>
    </div>
        
        <div class="item-details">
            <p class="item-details-type">{{hall.type}}</p>
            <p class="item-details-name">{{hall.name}}</p>
        </div>
        <!-- <item-details></item-details> -->
    </section>
</template>

<script>
import itemDetails from "./ItemDetails";
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}
export default {
  props: ["hall"],
  components: {
    itemDetails
  },
    methods: {
        showDivs(n) {
            var i;
            var x = document.querySelector('.mySlides');
            if (n > x.length) {slideIndex = 1} 
            if (n < 1) {slideIndex = x.length} ;
            for (i = 0; i < x.length; i++) {
                x[i].style.display = "none"; 
            }
            x[slideIndex-1].style.display = "block"; 
        }
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
