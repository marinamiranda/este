var app = angular.module('Este', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'evento.html',
      title: 'Portfolio'
    })
    .when('/:id/', {
      templateUrl: 'partials/current.html',
      title: 'Unit',
      controller: 'mainCtlr',
    })
}
]);

app.controller('mainCtlr', function ($scope,$location,$routeParams) {
  $scope.id = $routeParams.id;
  $scope.go = function ( path ) {
    $location.path( path );
  };


  // ---------------------------------------------------------------
  // Listado de eventos:
  $scope.shows = [{
    "id": 0,
    "title": "Wrong Doing",
    "artist": "Jiajia Zhang, Victor Esther",
    "location": "February 13 - March 25 2016" ,
    "location2": "" ,
    "image" : [
      {'img': 'imgs/Wrong_Doing_View_01.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''},
      {'img': 'imgs/Wrong_Doing_View_02.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''},
      {'img': 'imgs/Wrong_Doing_View_03.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''},
      {'img': 'imgs/Wrong_Doing_YesSolid_Plot_JJZ_a.jpg', 'titulo': 'Jiajia Zhang, 2016', 'autor': 'Yes, Solid (Plot)', 'materiales':'Sharpie on printed adhesive vinyl, acrylic glass, wall mount.','fecha': ''},
      {'img': 'imgs/Wron_Doing_Visitor_JJZ_2016.jpg', 'titulo': 'Jiajia Zhang, 2016', 'autor': 'Visitor', 'materiales':'C-print, artist frame.','fecha': ''},
      {'img': 'imgs/Wrong_Doing_ SpineS_VE.jpg', 'titulo': 'Victor Esther, 2016', 'autor': 'Spine (Frieze - October 2015), Spine (Artforum - February 2016)', 'materiales': '', 'fecha': 'Spine (Frieze - October 2014), Spine (Frieze - February 2016)'},
      {'img': 'imgs/Spine_AF_AA.jpg', 'titulo': '#Spine (Artforum - November 2013)', 'autor': '#Spine (Art in America - February 2016)', 'materiales': '','fecha': ''},


    ]
  },
    {
      "id": 1,
      "title": "Buscando Invisibles",
      "artist": "David Garcia Casado / Book launch",
      "location": "La Fabrica, Madrid - Friday January 15 2016",
      "location2": "",
      "image": [
        {'img': 'imgs/Invisibles.jpg', 'titulo': 'Buscando Invisibles', 'autor': 'A collection of essays by David García Casado', 'materiales': 'Spanish edition, 143p','fecha': 'Order by email - $15'},
        //{'img': 'imgs/image.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': 'January 2016'},

      ]
    }
  ];

  // ---------------------------------------------------------------
  $scope.showEvento = function(show){
    console.log(show);
    $scope.showEventoIndividual = true;
    for(var x = 0; x< $scope.shows.length; x++){
      if(show == $scope.shows[x].id){
        $scope.current = $scope.shows[x];
      }
    }
  }
  $scope.init= function(){
    $scope.showLines = true;
    $scope.showForm = false;
  }
  $scope.inicio = function(){
    console.log("inicio");
    $scope.showEventoIndividual = false;
    $scope.showSubscribe = !$scope.showSubscribe;
    $scope.showForm = false;
    $scope.showLines = true;
  }

  $scope.toggleSignup = function(){
    if($scope.showLines == true){
      $scope.showLines = false;
      $scope.showForm = true;
    }else if($scope.showLines == false){
      $scope.showLines = true;
      $scope.showForm = false;
    }
  }
});