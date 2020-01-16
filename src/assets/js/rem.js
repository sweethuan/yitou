// (function(doc, win) {
// 	var docEl = doc.documentElement,
// 		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
// 		recalc = function() {
// 			var clientWidth = docEl.clientWidth;
// 			if(!clientWidth) return;
// 			docEl.style.fontSize =200* (clientWidth / 750) + 'px';
// 		};
//
//
// 	if(!doc.addEventListener) return;
// 	win.addEventListener(resizeEvt, recalc, false);
// 	doc.addEventListener('DOMContentLoaded', recalc, false);
// })(document, window);

// (function(win, lib) {
//        var doc = win.document;
//        var docEl = doc.documentElement;
//        var metaEl = doc.querySelector('meta[name="viewport"]');
//        var flexibleEl = doc.querySelector('meta[name="flexible"]');
//        var dpr = 0;
//        var scale = 0;
//        var tid;
//        var flexible = lib.flexible || (lib.flexible = {});
//
//        if (metaEl) {
//           //将根据已有的meta标签来设置缩放比例
//            var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
//            if (match) {
//                scale = parseFloat(match[1]);
//                dpr = parseInt(1 / scale);
//            }
//        } else if (flexibleEl) {
//          var content = flexibleEl.getAttribute('content');
//           if (content) {
//               var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
//                var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
//                if (initialDpr) {
//                    dpr = parseFloat(initialDpr[1]);
//                    scale = parseFloat((1 / dpr).toFixed(2));
//                }
//                if (maximumDpr) {
//                    dpr = parseFloat(maximumDpr[1]);
//                    scale = parseFloat((1 / dpr).toFixed(2));
//                }
//            }
//        }
//
//       if (!dpr && !scale) {
//            var isAndroid = win.navigator.appVersion.match(/android/gi);
//            var isIPhone = win.navigator.appVersion.match(/iphone/gi);
//            var devicePixelRatio = win.devicePixelRatio;
//            if (isIPhone) {
//                // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
//                if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
//                    dpr = 3;
//                } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
//                    dpr = 2;
//                } else {
//                    dpr = 1;
//                }
//            } else {
//                // 其他设备下，仍旧使用1倍的方案
//                dpr = 1;
//            }
//           scale = 1 / dpr;
//        }
//
//        docEl.setAttribute('data-dpr', dpr);
//        if (!metaEl) {
//           metaEl = doc.createElement('meta');
//            metaEl.setAttribute('name', 'viewport');
//            metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
//            if (docEl.firstElementChild) {
//               docEl.firstElementChild.appendChild(metaEl);
//            } else {
//                var wrap = doc.createElement('div');
//                wrap.appendChild(metaEl);
//                doc.write(wrap.innerHTML);
//            }
//       }
//
//        function refreshRem(){
//            var width = docEl.getBoundingClientRect().width;
//           if (width / dpr > 540) {
//                width = 540 * dpr;
//            }
//            var rem = width / 10;
//           docEl.style.fontSize = rem + 'px';
//            flexible.rem = win.rem = rem;
//        }
//
//        win.addEventListener('resize', function() {
//            clearTimeout(tid);
//            tid = setTimeout(refreshRem, 300);
//        }, false);
//        win.addEventListener('pageshow', function(e) {
//            if (e.persisted) {
//                clearTimeout(tid);
//                tid = setTimeout(refreshRem, 300);
//            }
//        }, false);
//        if (doc.readyState === 'complete') {
//            doc.body.style.fontSize = 12 * dpr + 'px';
//        } else {
//            doc.addEventListener('DOMContentLoaded', function(e) {
//                doc.body.style.fontSize = 12 * dpr + 'px';
//           }, false);
//        }
//
//
//        refreshRem();
//
//       flexible.dpr = win.dpr = dpr;
//       flexible.refreshRem = refreshRem;
//       flexible.rem2px = function(d) {
//           var val = parseFloat(d) * this.rem;
//           if (typeof d === 'string' && d.match(/rem$/)) {
//               val += 'px';
//           }
//           return val;
//       }
//       flexible.px2rem = function(d) {
//           var val = parseFloat(d) / this.rem;
//           if (typeof d === 'string' && d.match(/px$/)) {
//               val += 'rem';
//           }
//           return val;
//       }
//
//   })(window, window['lib'] || (window['lib'] = {}));
!function(win, option) {
  var count = 0,
      designWidth = option.designWidth,
      designHeight = option.designHeight || 0,
      designFontSize = option.designFontSize || 20,
      callback = option.callback || null,
      root = document.documentElement,
      body = document.body,
      rootWidth, newSize, t, self;
  //返回root元素字体计算结果
  function _getNewFontSize() {
    var scale = designHeight !== 0 ? Math.min(win.innerWidth / designWidth, win.innerHeight / designHeight) : win.innerWidth / designWidth;
    return parseInt( scale * 10000 * designFontSize ) / 10000;
  }
  !function () {
    rootWidth = root.getBoundingClientRect().width;
    self = self ? self : arguments.callee;
    //如果此时屏幕宽度不准确，就尝试再次获取分辨率，只尝试20次，否则使用win.innerWidth计算
    if( rootWidth !== win.innerWidth &&  count < 20 ) {
      win.setTimeout(function () {
        count++;
        self();
      }, 0);
    } else {
      newSize = _getNewFontSize();
      //如果css已经兼容当前分辨率就不管了
      if( newSize + 'px' !== getComputedStyle(root)['font-size'] ) {
        root.style.fontSize = newSize + "px";
        return callback && callback(newSize);
      };
    };
  }();
  //横竖屏切换的时候改变fontSize，根据需要选择使用
  win.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function() {
    clearTimeout(t);
    t = setTimeout(function () {
      self();
    }, 300);
  }, false);
}(window, {
  designWidth: 750,
  // designHeight: 1136,
  designFontSize: 100,
  callback: function (argument) {
    // console.timeEnd("test")
  }
});
