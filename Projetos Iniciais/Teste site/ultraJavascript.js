var app = angular.module("myApp",['ngSanitize']);
    	app.controller ("control", function($scope){
    		$scope.anoAtual = 2019;
    		$scope.nomePrincipal = ''; 
    		$scope.anoNasc = '';
    		$scope.textEmail = '';
        $scope.procura='';
        $scope.erroBusca1 = true;
        $scope.erroBusca2 = true;
        $scope.buscaVazia = "Você deve preencher o nome!";
        $scope.errorPreenc = "Você deve preencher todos os campos do formulário!";
    		$scope.fichaTec = true; 
    		$scope.menu1 = true;
  			$scope.menu2 = true;
        $scope.procResult = true;
        $scope.fichas = [
        {name:'Jane', anoN:'1990', tEmail:'jane@job.com'},
        {name:'Larry', anoN:'2000', tEmail:'lary@job.com'},
        {name:'Robin', anoN:'1996', tEmail:'robin@job.com'},
        {name:'Sanji', anoN:'1998', tEmail:'sanji@job.com'}
        ];
			$scope.mudaStatus = function() {
  				if($scope.nomePrincipal=='' || $scope.textEmail=='' || $scope.anoNasc==''){
  					$scope.erroBusca2 = false;
  					$scope.fichaTec = true;
  				} else {
  					$scope.fichaTec = false;
  					$scope.erroBusca2 = true;
  					}
  			};
  			$scope.opcoes = function(x){
  				if (x == "procurar") {
  					$scope.menu1 = false;
						$scope.menu2 = true;
						$scope.fichaTec = true;
  				} else if (x== "cadastro") {
  					$scope.menu2 = false;
						$scope.menu1 = true;
						$scope.procResult = true;
  				}
  			};
  			$scope.procuraCadastro = function (){
          if ($scope.procura==''){
            $scope.erroBusca1 = false;
            $scope.procResult = true;
          } else {
            $scope.procResult = false;
            $scope.erroBusca1 = true;
          }
  			};
			});
			
			