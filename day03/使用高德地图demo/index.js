//获取地图地图
var map = new AMap.Map('map', {
    resizeEnable: true,
    center: [ 121.88202, 30.88891],
    zoom: 10,
  });

  // 创建1个点标记
var m1 = new AMap.Marker({
    position: [ 121.88202, 30.88891],
    icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png"
});

map.add(m1);

  
// 点击坐标点拉近距离
// map.setFitView();