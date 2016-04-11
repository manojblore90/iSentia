(function(angular) {
    'use strict';

    var app = angular.module('puzzleApp', ['ImagePuzzle']);

    // puzzle types
    var types = [
        { id: 'sliding-puzzle', title: 'Isentia puzzle' }];

    /**
     * Startup
     */
    app.run(function($rootScope, $route, $filter) {
        $rootScope.types = types;
        $rootScope.type = types[0].id;

        // set type on route change
        $rootScope.$on('$routeChangeSuccess', function(event, route) {
            $rootScope.type = ($filter('filter')(types, { id: route.params.type }).length ? route.params.type : types[0].id);
        });
    });

    /**
     * Advanced sliding puzzle controller
     */
    app.controller('slidingCtrl', function($scope) {
        $scope.puzzles = [
            { src: './img/isentia.jpg', title: 'Isentia Puzzle', rows: 3, cols: 3 }];
    });

})(window.angular);