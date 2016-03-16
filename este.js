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
      {'img': 'imgs/WD_view_01.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''},
      {'img': 'imgs/WD_view_02.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''},
      {'img': 'imgs/WD_window_1.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''},
      {'img': 'imgs/WD_YesSolid_Plot_JJZ_2016_a.jpg', 'titulo': 'Jiajia Zhang, 2016 (In collaboration with a Mexican Singwriter)', 'autor': 'Yes, Solid (Plot)', 'materiales':'Sharpie, adhesive vinyl, acrylic glass, wall mount.','fecha': ''},
      {'img': 'imgs/WD_YesSolid_Plot_Detail_JJZ.jpg', 'titulo': 'Jiajia Zhang, 2016,', 'autor': 'Yes, Solid (Plot)', 'materiales':'(Detail).','fecha': ''},
      {'img': 'imgs/WD_Definition_2016.jpg', 'titulo': 'Jiajia Zhang - Victor Esther, 2016', 'autor': 'Definition', 'materiales': 'Drywall, wall mount. ','fecha': ''},
      {'img': 'imgs/WD_Spine_Two_VE.jpg', 'titulo': 'Victor Esther, 2016', 'autor': 'Spine (Artforum - November 2013) ', 'materiales': 'Spine (Art in America - February 2016) ','fecha': 'Magazines, wall mount.'},
      {'img': 'imgs/WD_ Math&Biology_VE_2016.jpg', 'titulo': 'Victor Esther, 2016', 'autor': 'Math & Biology', 'materiales': '','fecha': 'Magazine covers, office supplies, hardware.'},
      {'img': 'imgs/WD_Math&Biology_detail.jpg', 'titulo': 'Victor Esther, 2016', 'autor': 'Math & Biology', 'materiales': '(Detail).','fecha': ''},
      { 'img': 'imgs/WD_View_03.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''},
      {'img': 'imgs/WD_Visitor_JJZ_2016.jpg', 'titulo': 'Jiajia Zhang, 2016', 'autor': 'Visitor', 'materiales': 'C-print, artist frame.','fecha': ''},
      {'img': 'imgs/WD_YesSolid_Snails_JJZ_2016.jpg', 'titulo': 'Jiajia Zhang, 2016 (In collaboration with a Chinese Singwriter)', 'autor': 'Yes, Solid (Snails)', 'materiales': 'Sharpie, adhesive  vinyl, acrylic glass, wall mount.','fecha': ''},
      {'img': 'imgs/WD_JJZ_Resident_view_2016.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''},
      {'img': 'imgs/WD_JJZ_Resident_2016.jpg', 'titulo': 'Jiajia Zhang, 2016', 'autor': 'Resident', 'materiales': 'C-print, artist frame.','fecha': ''},
      {'img': 'imgs/WD_ TExt&Image_VE_S.jpg', 'titulo': 'Victor Esther, 2016', 'autor': 'Text & Image', 'materiales': 'Custom made earrings.','fecha': ''},
      {'img': 'imgs/WD_IamNobody_View.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''},
      {'img': 'imgs/WD_Iamnobody_2016.jpg', 'titulo': 'Jiajia Zhang - Victor Esther, 2016', 'autor': 'I am Nobody, who are you?', 'materiales': '(Nobody asks the poet why he wrote the poem)','fecha': 'Drywall, hardware, floor & patio paint.'},
      {'img': 'imgs/WD_ Spines_VE_Four_2016.jpg', 'titulo': 'Victor Esther, 2016', 'autor': 'Spine (Frieze - October 2015),Spine (Artforum - February 2016),', 'materiales': 'Spine (Frieze - October 2014), Spine (Frieze - February 2016)','fecha': 'Magazines, wall mount.'},
      {'img': 'imgs/WD_ Add_VE_2016.jpg', 'titulo': '', 'autor': '', 'materiales': '','fecha': ''},
      {'img': 'imgs/WD_Add_VE_Detail_2016.jpg', 'titulo': 'Victor Esther, 2012', 'autor': 'Ad (Artforum)', 'materiales': '','fecha': 'Tempera on magazine page, frame, wall mount.'},




    ]
  },
    {
      "id": 1,
      "title": "Buscando Invisibles",
      "artist": "David Garcia Casado / Book launch",
      "location": "La Fabrica, Madrid - Friday January 15 2016",
      "location2": "",
      "image": [
        {'img': 'imgs/Invisibles.jpg', 'titulo': 'Buscando Invisibles, 2016', 'autor': 'A collection of essays by David García Casado', 'materiales': 'Spanish edition, 143p','fecha': 'order by email - $15'},
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