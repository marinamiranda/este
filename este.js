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
    "title": "Buscando Invisibles",
    "artist": "David Garcia Casado / Book launch",
    "location": "La Fabrica, Madrid - Friday January 15 2016",
    "location2": "",
    "image": [
      {'img': 'imgs/Invisibles.jpg', 'titulo': 'Buscando Invisibles', 'autor': 'David Garcia Casado', 'materiales': '','fecha': '2016'},
      //{'img': 'imgs/Invisibles.jpg', 'titulo': 'Buscando Invisibles', 'autor': 'David Garcia Casado', 'materiales': '142pg','fecha': '2016'}
    ]
  },
    {
      "id": 1,
      "title": "Wrong Doing",
      "artist": "Jiajia Zhang, Victor Esther",
      "location": "February 13 - March 25 2016" ,
      "location2": "" ,
      "image" : [
        {'img': 'imgs/EsteShow.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''}

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
  $scope.inicio = function(){
    console.log("inicio");
    $scope.showEventoIndividual = false;
    $scope.showSubscribe = false;
  }
});