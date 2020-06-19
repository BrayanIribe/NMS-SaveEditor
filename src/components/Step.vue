<template>
  <div>
      <h4 class="text-primary">{{ data.title }}</h4>
      <hr/>
      <p>{{ data.body }}</p>
      <div class="w-100 text-center">
      <img class="step-image" :src="data.img" v-if="data.img" />
      </div>
  </div>
</template>

<script>
export default {
  name: "Step",
  props: {
    data: {
      type: Object,
      default: null
    }
  }
};
</script>

<style>
.step-image {
    max-height:400px;
}
</style>