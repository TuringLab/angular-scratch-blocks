'use strict';

angular.module('angularScratchblocks',[]).directive('scratchblock',function(){

  function link(scope, element, attrs){

    scope.$watch(function(){ return scope.code },function(code){

      var $el = $(element);
      var $container = $('<div>');

      code = code.replace(/<br>\s?|\n|\r\n|\r/ig, '\n');
      var scripts = scratchblocks2.parse_scripts(code);


      $el.text("");
      $el.append($container);
      $container.addClass("sb2");

      for (var i=0; i<scripts.length; i++) {
          var $script = scratchblocks2.render_stack(scripts[i]).addClass("script");
          $container.append($script);
      }
      
    });

  };

  return {
      restrict: 'AE',
      template: '',
      link: link,
      scope: {
          code: "=code"
      }
  };

});

