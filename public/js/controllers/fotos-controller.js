angular.module('alurapic').controller('FotosController', function ($scope, $http) {

    /*$scope.fotos = [
        {
            titulo: 'Leão 1',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        },
        {
            titulo: 'Leão 2',
            url: 'http://www.fundosanimais.com/Minis/leoes.jpg'
        }
    ];*/

    /* Pegando fotos do banco e enviando para o front por 'fotos' */
    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http.get('v1/fotos').success(function (fotos) {
        $scope.fotos = fotos;
    }).error(function () {
        console.log(erro);
    });

    $scope.remover = function (foto) {
        $http.delete('/v1/fotos/' + foto._id)
            .success(function () {

                var indicefoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indicefoto, 1);
                $scope.mensagem = 'Foto ' + foto.titulo + ' foi removida com sucesso';

            }).error(function (erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
        });
    };

});
