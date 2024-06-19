<script>
export default {
  props: {
    ActiveSlide: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      pagination: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
        {
          id: 5,
        },
        {
          id: 6,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div class="wrapper-slider d-flex justify-content-around position-relative">
      <div class="line"></div>
      <div v-for="item in pagination" :key="index" class="d-flex align-items-center justify-content-center flex-column">
        <div
          :class="{
            'wrapper-slider-item-back': ActiveSlide === item.id,
            'wrapper-slider-item':
              ActiveSlide !== item.id && ActiveSlide < item.id,
            'last-active': ActiveSlide > item.id,
          }"
        >
          <div
            class="d-flex align-items-center justify-content-center h-100 w-100"
          >
            <div
              :class="{
                'wrapper-slider-item-text-white':
                  ActiveSlide === item.id || ActiveSlide > item.id,
                'wrapper-slider-item-text':
                  ActiveSlide !== item.id && ActiveSlide < item.id,
              }"
            >
              {{ item.id }}
            </div>
          </div>
        </div>
        <div class="slider-text">
          <h3>
            Раздел
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.line{
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate( -50%, -50%);
  height: 1px;
  width: 80%;
  background: var(--color-light-green);
}
.slider-text {
  font-weight: 500;
  color: var(--text-color);
  font-size: 21px;
}
.wrapper-slider-item-circle {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.wrapper-slider-item-circle-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 1px solid var(--bg-color-green-btn);
  border-radius: 50%;
}
.wrapper-slider-item-text {
  font-size: 24px;
  font-weight: 550;
  color: var(--bg-color-green-btn);
}
.wrapper-slider-item-text-white {
  font-size: 24px;
  font-weight: 550;
  color: #ffffff;
}
.wrapper-slider {
  margin: 0 auto;
  max-width: 782px;
  margin-top: 170px;
}
.wrapper-slider-item {
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #ffffff;
  border: 1px solid var(--bg-color-green-btn);
}
.last-active {
  background: rgba(1, 84, 88, 1);
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.wrapper-slider-item-back {
  background: linear-gradient(135deg, #cbce55 0.69%, #217b4f 100.69%);
  position: relative;
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
</style>
