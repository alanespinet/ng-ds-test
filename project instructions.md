1. Create a new module named PizzaPlanetApp in js/app.js, and then attach it to the <body> element in the view.

2. Add the following upject to the appetizers property of the scope:
  ```Javascript
  {
    name: 'Bruschetta',
    description: 'Grilled bread garlic,tomatoes,olive oil.',
    price: 4.95
  }

  ```

3. Inside div.appetizer.row, use ng-repeat to loop through the appetizers array. Display each appetizer's name, description, and price using expressions.

4. Use the currency filter to format the appetizers class.

5. Add a new property called $scope.mains and fill it with at least 3 made up main courses of your choice.

6. In the view, adapt the <div class="appetizer row"> element to create a <div class="mains row"> element. Loop through the mains and display each item using expressions and filters. View the result in the browser.

7. In the controller, add another property called $scope.extras containing an array of three objects. Feel free to use your favorite sides.

8. In the view, loop through the extras and display each item. View the result in the browser.
