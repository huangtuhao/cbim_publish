;

(function () {
  var host = '/api/';
  var host = 'http://47.107.113.27:8080/';
  var _cache = {};

  var ajax = function ajax(obj, cache) {
    if (cache) {
      if (!_cache[obj.url]) {
        _cache[obj.url] = $.ajax(obj).then(function (list) {
          if ($.isPlainObject(list)) {
            return JSON.parse(JSON.stringify(list));
          }

          return list;
        });
      }

      return _cache[obj.url];
    }

    _cache[obj.url] = null;
    return $.ajax(obj);
  };

  var api = {
    platformTool: {
      //工具与平台
      Get: function Get(pId) {
        return ajax({
          type: 'GET',
          url: host + 'PlatformTool/Get/' + (pId || '')
        });
      },
      titleList: function titleList(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'PlatformTool/Get/titleList'
        }, !noCache);
      },
      pageName: function pageName(_pageName, data) {
        return ajax({
          type: 'GET',
          url: host + 'PlatformTool/Get/pageName/' + _pageName + '?' + $.param(data || {})
        });
      },
      titleS: function titleS(data) {
        if (!data.titleS) {
          delete data.titleS;
        }

        return ajax({
          type: 'GET',
          url: host + 'PlatformTool/Get/titleS?' + $.param(data)
        });
      }
    },
    solution: {
      // 解决方案
      Get: function Get(pId) {
        return ajax({
          type: 'GET',
          url: host + 'Solution/Get/' + (pId || '')
        });
      },
      list: function list(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'Solution/Get/list'
        }, !noCache);
      }
    },
    case: {
      // 案例
      findAllCategory: function findAllCategory(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'case/findAllCategory'
        }, !noCache);
      },
      findAllPreview: function findAllPreview(data) {
        return ajax({
          type: 'GET',
          url: host + 'case/findAllPreview?' + $.param(data)
        });
      },
      findCounts: function findCounts(data) {
        return ajax({
          type: 'GET',
          url: host + 'case/findCounts?' + $.param(data)
        });
      },
      findDetails: function findDetails(id) {
        return ajax({
          type: 'GET',
          url: host + 'case/findDetails/' + (id || '')
        });
      },
      findPreview: function findPreview(data) {
        return ajax({
          type: 'GET',
          url: host + 'case/findPreview?' + $.param(data)
        });
      }
    },
    consult: {
      //咨询
      findDetails: function findDetails(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'consult/findDetails'
        }, !noCache);
      }
    },
    DesignManager: {
      //设计与管理模块
      findAllDetails: function findAllDetails(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'DesignManager/findAllDetails'
        }, !noCache);
      }
    },
    link: {
      findAll: function findAll(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'link/findAll'
        }, !noCache);
      }
    },
    company: {
      findDetails: function findDetails(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'company/findDetails'
        }, !noCache);
      },
      findClientsService: function findClientsService(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'company/findClientsService'
        }, !noCache);
      }
    },
    Training: {
      Get: function Get(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'Training/Get'
        }, !noCache);
      }
    },
    focus: {
      findAllCategory: function findAllCategory(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'focus/findAllCategory'
        }, !noCache);
      },
      findAllPreview: function findAllPreview(data) {
        return ajax({
          type: 'GET',
          url: host + 'focus/findAllPreview?' + $.param(data)
        });
      },
      findCountById: function findCountById(data) {
        return ajax({
          type: 'GET',
          url: host + 'focus/findCountById?' + $.param(data)
        });
      },
      findContent: function findContent(id) {
        return ajax({
          type: 'GET',
          url: host + 'focus/findContent/' + (id || '')
        });
      },
      findPreview: function findPreview(data) {
        return ajax({
          type: 'GET',
          url: host + 'focus/findPreview?' + $.param(data)
        });
      }
    },
    recruitment: {
      //招聘
      departmentS: function departmentS(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'recruitment/Get/departmentS'
        }, !noCache);
      },
      jobNatureS: function jobNatureS(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'recruitment/Get/jobNatureS'
        }, !noCache);
      },
      jobTypeS: function jobTypeS(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'recruitment/Get/jobTypeS'
        }, !noCache);
      },
      newestJobS: function newestJobS(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'recruitment/Get/newestJobS'
        }, !noCache);
      },
      recruitment: function recruitment(id) {
        return ajax({
          type: 'GET',
          url: host + 'recruitment/Get/recruitment/' + (id || '')
        });
      },
      recruitmentS: function recruitmentS(data) {
        return ajax({
          type: 'GET',
          url: host + 'recruitment/Get/recruitmentS?' + $.param(data)
        });
      },
      workSiteS: function workSiteS(noCache) {
        return ajax({
          type: 'GET',
          url: host + 'recruitment/Get/workSiteS'
        }, !noCache);
      }
    }
  };
  CBIM.api = api;
})();