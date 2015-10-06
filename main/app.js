'use strict';

angular.module('angularScratchblocks',[]).directive('scratchblock',function(){

	function link(scope, element, attrs){
		console.log('Created',scope);
	};

	return {
		restrict: 'AE',
		template: '<pre class="blocks">{{code}}</pre>',
		link: link,
		scope: {
			code: "=code"
		}
	};

});

