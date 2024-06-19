<script>
export default {
  props: {
    isActiveSlide: {
      type: Number,
      required: true
    }
  },
  data(){
    return{

    }
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-slider d-flex justify-content-around">
      <div :class=" isActiveSlide === 1 ? 'wrapper-slider-item-back' : 'wrapper-slider-item'">
        <div :class="isActiveSlide === 1 ? 'wrapper-slider-item-circle' : 'wrapper-slider-item-circle-border'">
        </div>
        <div :class="isActiveSlide === 1 ? 'wrapper-slider-item-text-white' : 'wrapper-slider-item-text'">
          1
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>
      <div :class=" isActiveSlide === 2 ? 'wrapper-slider-item-back' : 'wrapper-slider-item'">
        <div :class="isActiveSlide === 2 ? 'wrapper-slider-item-circle' : 'wrapper-slider-item-circle-border'">
        </div>
        <div :class="isActiveSlide === 2 ? 'wrapper-slider-item-text-white' : 'wrapper-slider-item-text'">
          2
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>
      <div :class=" isActiveSlide === 3 ? 'wrapper-slider-item-back' : 'wrapper-slider-item'">
        <div :class="isActiveSlide === 3 ? 'wrapper-slider-item-circle' : 'wrapper-slider-item-circle-border'">
        </div>
        <div :class="isActiveSlide === 3 ? 'wrapper-slider-item-text-white' : 'wrapper-slider-item-text'">
          3
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>
      <div :class=" isActiveSlide === 4 ? 'wrapper-slider-item-back' : 'wrapper-slider-item'">
        <div :class="isActiveSlide === 4 ? 'wrapper-slider-item-circle' : 'wrapper-slider-item-circle-border'">
        </div>
        <div :class="isActiveSlide === 4 ? 'wrapper-slider-item-text-white' : 'wrapper-slider-item-text'">
          4
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>
      <div :class=" isActiveSlide === 5 ? 'wrapper-slider-item-back' : 'wrapper-slider-item'">
        <div :class="isActiveSlide === 5 ? 'wrapper-slider-item-circle' : 'wrapper-slider-item-circle-border'">
        </div>
        <div :class="isActiveSlide === 5 ? 'wrapper-slider-item-text-white' : 'wrapper-slider-item-text'">
          5
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>
      <div :class=" isActiveSlide === 6 ? 'wrapper-slider-item-back' : 'wrapper-slider-item'">
        <div :class="isActiveSlide === 6 ? 'wrapper-slider-item-circle' : 'wrapper-slider-item-circle-border'">
        </div>
        <div :class="isActiveSlide === 6 ? 'wrapper-slider-item-text-white' : 'wrapper-slider-item-text'">
          6
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slider-text{
  position: absolute;
  left: -13px;
  top: 50px;
  font-weight: 500;
  color: var(--text-color);
  font-size: 21px;
}
.wrapper-slider-item-circle{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.wrapper-slider-item-circle-border{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--bg-color-green-btn);
  border-radius: 50%;
}
.wrapper-slider-item-text{
  position: absolute;
  top: 60%;
  left: 53%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 550;
  color: var(--bg-color-green-btn);
}
.wrapper-slider-item-text-white{
  position: absolute;
  top: 55%;
  left: 53%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: 550;
  color: #FFFFFF;
}
.wrapper-slider{
  margin: 0 auto;
  max-width: 782px;
  margin-top: 170px;

}
.wrapper-slider-item{
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.wrapper-slider-item-back{
  background: linear-gradient(135deg, #CBCE55 0.69%, #217B4F 100.69%);
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
</style>