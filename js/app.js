var ajinkyaApp = angular.module('ajinkyaApp', []);

ajinkyaApp.controller('tenantsCtrl', function($scope){
    $scope.tenants = [
        {
            "name": "Ernie Bass",
            "email1": "ernie@shuckle.com",
            "email2": "bassmaster@yahoo.com",
            "favorite": true,
            "time": "00/00/0000",
            "userpic": "img/uploads/ernie.jpg",
            "homephone": "(000) 000-0000",
            "workphone": "(000) 000-0000"
        },
        {
            "name": "Gerry Gilbratens",
            "email1": "gerry@shuckle.com",
            "email2": "gerry4589@yahoo.com",
            "favorite": false,
            "time": "00/00/0000",
            "userpic": "img/uploads/gerry.jpg",
            "homephone": "(000) 000-0000",
            "workphone": "(000) 000-0000",
            "mobile": "(000) 000-0000"
        }
    ];
    $scope.formerTenants = [
        {
            "name": "Bill Shuckle",
            "email1": "bill@shuckle.com",
            "email2": "bshuck@yahoo.com",
            "favorite": false,
            "time": "00/00/0000",
            "timeEnd": "00/00/0000",
            "userpic": "img/uploads/nopic.jpg",
            "homephone": "(000) 000-0000",
            "workphone": "(000) 000-0000"
        }
    ];
});