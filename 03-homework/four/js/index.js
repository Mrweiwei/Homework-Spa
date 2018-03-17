 var map = new BMap.Map("allmap");
 var point = new BMap.Point(114.527095,38.003090);
 var marker = new BMap.Marker(point);  // 创建标注
 map.addOverlay(marker);              // 将标注添加到地图中
 map.centerAndZoom(point, 25);
 map.enableScrollWheelZoom(true);//可否滚轮缩放
 map.setMapType(BMAP_HYBRID_MAP);//地图类型
 marker.setAnimation(BMAP_ANIMATION_BOUNCE);//标注跳动


             var opts = {
                     width: 200,     // 信息窗口宽度
                     height: 70,     // 信息窗口高度
                     title : "河北师范大学时光塔" , // 信息窗口标题
                     enableMessage:true,//设置允许信息窗发送短息
                                    
                }
  var infoWindow = new BMap.InfoWindow("地址：河北省石家庄市南二环东路20号", opts);   
    
 marker.addEventListener("click", function(){
                     map.openInfoWindow(infoWindow,point); //开启信息窗口
          
  });
                     map.openInfoWindow(infoWindow,point)

