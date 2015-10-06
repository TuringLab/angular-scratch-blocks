'use strict';

angular.module('angularScratchblocks',[]).directive('scratchblock',function(){

	function link(scope, element, attrs){

    angular.element(element).ready(function () {
			scratchblocks2.parse('pre.scratchblocks');
    });

	};

	return {
		restrict: 'AE',
		template: '<pre class="scratchblocks">{{code}}</pre>',
		link: link,
		scope: {
			code: "=code"
		}
	};

});

