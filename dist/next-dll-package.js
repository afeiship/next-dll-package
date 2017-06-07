(function () {

  var global = global || this;

  var nx = global.nx || require('next-js-core2');
  var env = process.env.NODE_ENV;
  var defaultMap = require('./const');

  var DllPackage = nx.declare('nx.DllPackage', {
    statics:{
      _cache:{},
      init: function(){
        nx.each(defaultMap,function( key ,value){
          this.set(key,value);
        },this);
      },
      set: function(inKey,inMap){
        this._cache[inKey] = inMap || defaultMap[inKey];
      },
      get: function(inKey) {
        if(!nx.isUndefined(env)){
          return this._cache[inKey][env];
        }else{
          nx.error('Please set NODE_ENV first!');
        }
      }
    }
  });

  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DllPackage;
  }

}());
