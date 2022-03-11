<template>
  <div>
    <div id="container"></div>
  </div>
</template>
<script>
import amapData from "./data.json"
export default {
  name: "",
  components: {},
  data() {
    return {
      allData:'',
      riskHome:'',
      riskUser:'',
      safeHome:'',
      safeUser:'',
      allHome: '',
      allUser: '',
      markerlayer: null,
      map: null,
      allMarkers: [],
      homeMark: require("../assets/icon_sel/icon1.png"),
      userMark: require("../assets/icon_sel/icon2.png"),
      homeRisk: require("../assets/icon_sel/icon3.png"),
      userRisk: require("../assets/icon_sel/icon4.png"),
      homeMark8: require("../assets/icon_sel/icon1_l.png"),
      userMark8: require("../assets/icon_sel/icon2_l.png"),
      homeRisk8: require("../assets/icon_sel/icon3_l.png"),
      userRisk8: require("../assets/icon_sel/icon4_l.png"),
      currentElement: null
    };
  },
  computed: {},
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      let that = this;
      this.map = new AMap.Map("container", {
        resizeEnable: true,
        zoom: 10,
        zooms:[3,20],
        expandZoomRange: true, // 是否支持可以扩展最大缩放级别,和zooms属性配合使用,可以扩展到20级
        center: [106.631155, 29.718087],
        mapStyle: "amap://styles/blue"
      });
      this.markerlayer = new AMap.LabelsLayer({
            zooms: [3, 20],
            zIndex: 112,
            collision: false
        });
        this.getMapLoad();
    },
    getMapLoad() {
          this.riskHome = amapData.riskHome;
          this.riskUser = amapData.riskUser;
          this.safeHome = amapData.safeHome;
          this.safeUser = amapData.safeUser;
          this.allHome = this.riskHome.concat(this.safeHome);
          this.allUser = this.riskUser.concat(this.safeUser);
          this.safeHome.forEach(item => {
            item.type = 1;
          });
          this.safeUser.forEach(item => {
            item.type = 2;
          });
          this.riskHome.forEach(item => {
            item.type = 3;
          });
          this.riskUser.forEach(item => {
            item.type = 4;
          });
          this.allData = [...this.safeHome,...this.safeUser,...this.riskHome,...this.riskUser]
          this.setLabelMark()
    },
    setLabelMark() {
        this.allData.forEach(item=>{
          let curPosition = [Number(item.lon),Number(item.lat)]
          let icon = this.setIconInit(item.type)
          let zIndex = this.zIndexM(item.type).zIndex
          let rank = this.zIndexM(item.type).rank
          let curData = {
            position:curPosition,
            icon,
            zIndex:zIndex,
            rank: rank
          }
          let labelMarker = new AMap.LabelMarker(curData);
          labelMarker.setExtData(item)
          this.addMarkOn(labelMarker)
          this.allMarkers.push(labelMarker)
        })
        this.markerlayer.add(this.allMarkers);
        this.map.add(this.markerlayer);
    },
    addMarkOn(marker) {
      marker.on("click", e => {
        // console.log(e.target.getExtData())
        // 当前元素的数据对象
        let currentMarkerD = e.target.getExtData()
        this.setStyle(e.target)
      });
    },
    // 移除前一个元素的样式，设置现在元素的高亮
    setStyle(marker) {
      if (this.currentElement) {
        let originIcon = this.setIconInit(this.currentElement.getExtData().type)
        this.currentElement.setIcon(originIcon);
      }
      // 点击给图标设置高亮
      let newIcon = this.setIconSelected(marker.getExtData().type)
      marker.setIcon(newIcon);
      this.currentElement = marker;
    },
    zIndexM(type) {
      let zIndex = 112
      let rank = 1
      switch (type) {
        case 1:
          zIndex = 112;
          rank = 1;
          break;
        case 2:
          zIndex = 113;
          rank = 2;
          break;
        case 3:
          zIndex = 114;
          rank = 3
          break;
        case 4:
          zIndex = 115;
          rank = 4
          break;
        default:
          break;
      }
      return {zIndex,rank}
    },
    setIconInit(type) {
      let img = ''
      let size = 20
      switch (type) {
        case 1:
          img = this.homeMark;
          break;
        case 2:
          img = this.userMark;
          break;
        case 3:
          img = this.homeRisk;
          size = 30
          break;
        case 4:
          img = this.userRisk;
          size = 30
          break;
        default:
          break;
      }
      let icon = {
            type: 'image',
            image: img,
            size: [size, size],
            anchor: 'center'
        };
      return icon
    },
    setIconSelected(type) {
      let img = ''
      let size = 20
      switch (type) {
        case 1:
          img = this.homeMark8;
          break;
        case 2:
          img = this.userMark8;
          break;
        case 3:
          img = this.homeRisk8;
          size = 30
          break;
        case 4:
          img = this.userRisk8;
          size = 30
          break;
        default:
          break;
      }
      let icon = {
            type: 'image',
            image: img,
            size: [size, size],
            anchor: 'center'
        };
      return icon
    },
  }
};
</script>
<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>