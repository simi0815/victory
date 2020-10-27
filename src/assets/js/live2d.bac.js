/*
* 黑猫：https://unpkg.com/live2d-widget-model-hijiki@1.0.5/assets/hijiki.model.json
*萌娘：https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json
*白猫：https://unpkg.com/live2d-widget-model-tororo@1.0.5/assets/tororo.model.json
*狗狗：https://unpkg.com/live2d-widget-model-wanko@1.0.5/assets/wanko.model.json
*小可爱：https://unpkg.com/live2d-widget-model-z16@1.0.5/assets/z16.model.json
*小可爱：https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json*
*/




const s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = 'https://eqcn.ajz.miesnfu.com/wp-content/plugins/wp-3d-pony/live2dw/lib/L2Dwidget.min.js';
  document.body.appendChild(s);


  window.onload = function () {
      L2Dwidget.init({
        "model": {
            jsonPath: "https://unpkg.com/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json",
            "scale": 1
        },
        "display": {
            "position": "left",
            "width": 100,
            "height": 200,
            "hOffset": 0,
            "vOffset": 0
        },
        "mobile": {
            "show": true,
            "scale": 0.1,
        },
        "react": {
            "opacityDefault": 0.9,
            "opacityOnHover": 0.2
        }
    });
  }


