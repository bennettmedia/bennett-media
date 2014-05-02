var app = angular.module("app", ['ngRoute', 'ui.bootstrap', 'angulartics', 'angulartics.google.analytics']);

/*
Configure the angular module
*/
app.config(['$routeProvider',
            function($routeProvider) {
                $routeProvider.
                    when('/home', {
                        templateUrl: 'home.html',
                        controller: 'HomeController'
                    }).
                    when('/portfolio', {
                        templateUrl: 'portfolio_angular.html',
                        controller: 'PortfolioController'
                    }).
                    when('/services', {
                        templateUrl: 'services.html',
                        controller: 'ServicesController'
                    }).
                    when('/order', {
                        templateUrl: 'order.html',
                        controller: 'OrderController'
                    }).
                    when('/thankyou', {
                        templateUrl: 'thankyou.html',
                        controller: 'ThankYouController'
                    }).
                    otherwise({ redirectTo: '/home' });
}]);


app.config(['$locationProvider', function($locationProvider) {
    //$locationProvider.html5Mode(true);
  //$locationProvider.hashPrefix('!');
}]);


/******************

ANGULAR CONTROLLERS

*******************/


/*
Portfolio Controller
*/
app.controller('PortfolioController', function($scope) {
    
        
    //Start 'final-tiles-gallery.js'
    $('#gallery').finalTilesGallery({
            //eventually add options here
            'gridCellSize' : 20,
            'minTileWidth' : 100,
            'enableTwitter' : true,
            'enableFacebook' : true,
            'margin' : 5,
            'hoverEffectDuration' : 250,
            'hoverEffect' : 'fade',
        });
    
    //$analytics.pageTrack('/portfolio');
    
    $('html, body').animate({ scrollTop: 0 }, 'slow'); //set the page to the top
    $('.nav li').removeClass('active'); //remove active classes from navigation links
    $('#portfoliolink').addClass('active'); //add active class to portfolio link

    
});


/*
Home Controller
*/
app.controller('HomeController', function($scope) {

    $('html, body').animate({ scrollTop: 0 }, 'slow'); //set the page to the top
    $('.nav li').removeClass('active'); //remove active classes from navigation links
    $('#home').addClass('active'); //add active class to home link

});


/*
Services Controller
*/
app.controller('ServicesController', function($scope, $http, $location) {
    
    $('html, body').animate({ scrollTop: 0 }, 'slow'); //set the page to the top
    $('.nav li').removeClass('active'); //remove active classes from navigation links
    $('#services').addClass('active'); //add active class to services link
    
     $scope.orderForm = {};
    
    
        // process the form
        $scope.orderSubmit = function() {
            $http({
                method  : 'POST',
                url     : 'order.php',
                data    : $.param($scope.orderForm),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data) {
                
                $location.path('/thankyou');
                console.log(data);


             });
        };
        // end orderSubmit() function
    
});


/*
Order Controller
*/
app.controller('OrderController', function($scope, $http, $location) {
    
    $('html, body').animate({ scrollTop: 0 }, 'slow'); //set the page to the top
    $('.nav li').removeClass('active'); //remove active classes from navigation links
    $('#contact').addClass('active'); //add active class to contact link
    
    $scope.orderForm = {};
    
    
    // process the form
$scope.orderSubmit = function($routeParams) {
    
	$http({
        method  : 'POST',
        url     : 'order.php',
        data    : $.param($scope.orderForm),  // pass in data as strings
        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
    })
    .success(function(data) {
        
        $location.path('/thankyou');
        console.log(data);

         
     });
};
    
});


/*
Thank you page controller
*/
app.controller('ThankYouController', function() {
    $('html, body').animate({ scrollTop: 0 }, 'slow'); //set the page to the top
});
 

/**********************

END ANGULAR CONTROLLERS

*******************************************/





/*
Collapse the navbar on mobile devices when a link is clicked
*/

$(document).on('click','.navbar-collapse.in',function(e) {
    
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
        
    }
});



function HomeCarousel($scope) {
  $scope.myInterval = 5000;
  var slides = $scope.slides = [];
  
    
    $scope.slides = [{
      image: 'img/slide1.png',
      text: 'Lots of cats'
    },
    {
      image: 'img/slide2.png',
      text: 'Lots of cats'
    },
    {
      image: 'img/slide3.png',
      text: 'Lots of cats'
    }];

}
