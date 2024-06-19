<script>
export default {
  props: {
    ActiveSlide: {
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

      <div :class="{
        'wrapper-slider-item-back': ActiveSlide === 1,
        'wrapper-slider-item': ActiveSlide !== 1 && ActiveSlide < 1,
        'last-active': ActiveSlide > 1
      }">
        <div :class="{
        'wrapper-slider-item-circle': ActiveSlide === 1 || ActiveSlide > 1,
        'wrapper-slider-item-circle-border': ActiveSlide !== 1 && ActiveSlide < 2,
      }">
        </div>
        <div :class="{
        'wrapper-slider-item-text-white': ActiveSlide === 1 || ActiveSlide > 1,
        'wrapper-slider-item-text': ActiveSlide !== 1 && ActiveSlide < 1
       }">
          1
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>

      <div :class="{
        'wrapper-slider-item-back': ActiveSlide === 2,
        'wrapper-slider-item': ActiveSlide !== 2 && ActiveSlide < 2,
        'last-active': ActiveSlide > 2
      }">
        <div :class="{
        'wrapper-slider-item-circle': ActiveSlide === 2 || ActiveSlide > 2,
        'wrapper-slider-item-circle-border': ActiveSlide !== 2 && ActiveSlide < 3,
      }">
        </div>
        <div :class="{
        'wrapper-slider-item-text-white': ActiveSlide === 2 || ActiveSlide > 2,
        'wrapper-slider-item-text': ActiveSlide !== 2 && ActiveSlide < 2
       }">
          2
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>


      <div :class="{
        'wrapper-slider-item-back': ActiveSlide === 3,
        'wrapper-slider-item': ActiveSlide !== 3 && ActiveSlide < 3,
        'last-active': ActiveSlide > 3
      }">
        <div :class="{
        'wrapper-slider-item-circle': ActiveSlide === 3 || ActiveSlide > 3,
        'wrapper-slider-item-circle-border': ActiveSlide !== 3 && ActiveSlide < 4,
      }">
        </div>
        <div :class="{
        'wrapper-slider-item-text-white': ActiveSlide === 3 || ActiveSlide > 3,
        'wrapper-slider-item-text': ActiveSlide !== 3 && ActiveSlide < 3
       }">
          3
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>

      <div :class="{
        'wrapper-slider-item-back': ActiveSlide === 4 ,
        'wrapper-slider-item': ActiveSlide !== 4 && ActiveSlide < 4,
        'last-active': ActiveSlide > 4
      }">
        <div :class="{
        'wrapper-slider-item-circle': ActiveSlide === 4 || ActiveSlide > 4,
        'wrapper-slider-item-circle-border': ActiveSlide !== 4 && ActiveSlide < 5,
      }">
        </div>
        <div :class="{
        'wrapper-slider-item-text-white': ActiveSlide === 4 || ActiveSlide > 4,
        'wrapper-slider-item-text': ActiveSlide !== 4 && ActiveSlide < 4
       }">
          4
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>

      <div :class="{
        'wrapper-slider-item-back': ActiveSlide === 5 || ActiveSlide > 5,
        'wrapper-slider-item': ActiveSlide !== 5 && ActiveSlide < 5,
        'last-active': ActiveSlide > 5
      }">
        <div :class="{
        'wrapper-slider-item-circle': ActiveSlide === 5 || ActiveSlide > 5,
        'wrapper-slider-item-circle-border': ActiveSlide !== 5 && ActiveSlide < 6,
      }">
        </div>
        <div :class="{
        'wrapper-slider-item-text-white': ActiveSlide === 5 || ActiveSlide > 5,
        'wrapper-slider-item-text': ActiveSlide !== 5 && ActiveSlide < 5
       }">
          5
        </div>
        <div class="slider-text">
          Раздел
        </div>
      </div>

      <div :class="{
        'wrapper-slider-item-back': ActiveSlide === 6 || ActiveSlide > 6,
        'wrapper-slider-item': ActiveSlide !== 6 && ActiveSlide < 6,
        'last-active': ActiveSlide > 6
      }">
      <div :class="{
        'wrapper-slider-item-circle': ActiveSlide === 6 || ActiveSlide > 6,
        'wrapper-slider-item-circle-border': ActiveSlide !== 6 && ActiveSlide < 7,
      }">
      </div>
       <div :class="{
        'wrapper-slider-item-text-white': ActiveSlide === 6 || ActiveSlide > 6,
        'wrapper-slider-item-text': ActiveSlide !== 6 && ActiveSlide < 6
       }">
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
.last-active{
  background: rgba(1, 84, 88, 1);
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