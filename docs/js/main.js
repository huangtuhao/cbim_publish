;

(function () {
  var tool = {};

  tool.joinUrl = function (name, data) {
    var q = $.param(data || {});
    return CBIM.root + name + '.html' + (q ? '?' + q : '');
  };

  tool.parseStyle = function (info, keys) {
    function getk(key) {
      return keys[key] || key;
    }

    keys = keys || {};
    var ptStyle = info[getk('ptStyle')];
    info._detailStyle = 0;

    if (ptStyle) {
      info._detailStyle = ptStyle;
    } else {
      var details = info[getk('details')];

      if (details) {
        for (var j = 0; j < details.length; j++) {
          var detail = details[j];

          if (detail[getk('pdTitle')] || detail[getk('pdElTitle')]) {
            info._detailStyle = 3;
            break;
          }
        }
      }
    }
  };

  CBIM.tool = tool;
})();