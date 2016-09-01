app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic,tomatoes,olive oil.',
      price: 4.95
    }
  ];

  $scope.mains = [
    {
      name: 'Milanessa Fish',
      description: 'Fried fish with cheese and ham over it.',
      price: 7.85
    },
    {
      name: 'Cuban Special',
      description: 'Rise and beans and pork meat',
      price: 9.95
    },
    {
      name: 'Vegan mix',
      description: 'The best salad you can eat',
      price: 12.55
    }
  ];

  $scope.extras = [
    {
      name: 'White Rice',
      description: 'Just white rice. No salt added',
      price: 1.25
    },
    {
      name: 'French fries',
      description: 'Exactly what you are thinking... junk food',
      price: 2.05
    },
    {
      name: 'Light salad',
      description: 'Some salad and aromatic herbs',
      price: 4.15
    }
  ];

}]);
