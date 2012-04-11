var TurntableProBase = $('#turntable-pro').data('base');
var TTPLog  = function(a) { console.log(util.nowStr()+' Turntable Pro >> '+a); };


//DEBUG_MODE=1;

var inuloadJavascript = function(f,g,h) {
  var d = new jQuery.Deferred();
  
  var js = document.createElement('script');
  js.src = TurntableProBase + 'js/'+f+'.js?v=' + Date.now();
  if (h&&h.url) {
    js.src = h.url+f+'.js';
  }
  
  //TTPLog("Loading " + js.src);
  
  document.body.appendChild(js);

  setTimeout(function() {
    if (!h && window[g]) {
      d.resolve();
    }
    else if (h && !h.false && window[g]) {
      d.resolve();
    }
    else if (h && h.false && !window[g]) {
      d.resolve();
    }
    else {
      setTimeout(function(a) { a(); }, 50, arguments.callee)
    }
  }, 50)
  return d.promise(); 
}

TTPLog("Initializing");
$.when(
  inuloadJavascript('reset', 'reset')
).then(function(){
  TTPLog('reset.js loaded..')
  $.when(
    inuloadJavascript('underscore', '_')
  ).then(function() {
    TTPLog('underscore.js loaded..');
    $.when(
          inuloadJavascript('script', 'mConstObject')
    ).then(function() {
          TTPLog('custom avatars loaded :D')
    })
  })
})