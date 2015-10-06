'use strict';

angular.module('demo',['angularScratchblocks']).controller('DemoController',function($scope){

	$scope.code = "define dance (speed)\n\t\tset [dist v] to ((speed) * (distance to [mouse-pointer v]))\n\t\trepeat until ((timer) &gt; [10])\n\t\t\tmove (dist) steps\n\t\t\twait (1) secs // Pause for a moment\n\t\t\tmove (() - (dist)) steps\n\t\t\tplay note (42 v) for (0.5) beats\n\t\t\tif &lt;mouse down?&gt;\n\t\t\t\tsay [Whoops!]\n\t\t\tend\n\t\tend";

});