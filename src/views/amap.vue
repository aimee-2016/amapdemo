<template>
  <div>
    <!-- <div id="container">
      <el-amap class="amap-box" :vid="amap-vue"></el-amap>
    </div> -->
  </div>
</template>
<script>
import amapData from "./data.json"
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {
    console.log(amapData)
  },
  methods: {}
};
</script>
<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>