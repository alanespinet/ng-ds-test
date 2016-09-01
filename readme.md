1- Name and describe the two main operations of a stack (to add and remove data).

  -push(element) to add an element to the stack
  -pop() to remove (and return) the last inserted element from the stack

2- Name and describe the two main operations of a queue (to add and remove data).

  -enqueue(element) to add an element to the queue
  -dequeue() to remove (and return) the first remaining enqueued element from the queue

3- Draw the tree resulting from adding the following sequence of numbers to an empty tree: 30, 45, 15, 10, 50, 40, 20, 27

  -See the image "tree.jpg"

4- Is this tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

  -Yes, the tree is balanced because there is no sub-tree with a height difference of 2 or more between its left and right sub-trees

5- Now add 29. Is the tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

  -The node 29 goes as the right child of the node 27. In this case, after doing it, the tree is NOT balanced anymore, because the height difference between the right sub-tree and the left sub-tree in the node 15 is 2. In this kind of cases you only normally need a simple rotation around the middle node of the unbalanced branch (which is 27). So, you can perform a left rotation around 27 and your tree will be balanced again.

  leftRotation(27)

6- Consider the following tree:
------5
---2-----8
-1---3

7- Now add 0 to the tree. Which one is the first node to go out of balance?

  -The 0 is inserted as the left child of the node 1. This leaves the node 5 (the root) out of balance because its left sub-tree height is 3 and its right sub-tree is 1 (and then the difference is 2).

8- How do you fix this node? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

  -To solve this you can NOT use a simple rotation. If you try to fix the problem in a single rotation, you will end with a modified but unbalanced (again) tree. However, you CAN do a double rotation left-right like this:

   leftRotation(5) -- the tree ends unbalanced in the node 0 but balanced in the recent rotated node
   rightRotation(2) -- the entire tree is now balanced

9- What are the four main steps of mergesort?

  -divide the array in two halves: leftHalf and rightHalf
  -call mergesort(leftHalf)
  -call mergesort(rightHalf)
  -merge the results of the two previous (and recursive) calls

10- What are the four main steps of quicksort?

  -choose a pivot
  -create two arrays: left and right and put in left all values less or equal to the pivot, and put in right all values higher than the pivot
  -call quicksort(left) and quicksort(right)
  -concat the results of this calls like this: 'orderLeft + pivot + orderRight'

11- What is an angular directive?

  -A directive tells an element in HTML how it should behave, teaches HTML new ways an element and its childs will function. With a directive you can stablish where your application will be placed in your HTML, which controller an element will respond to, etc.

12- When specifying an angular directive, you write a function which must return an object called: a. Directive Constructor b. Fidel y Chavez Object c. Directive Definition object d. Directive Object

  -I think it is (c), Directive Definition Object, because it takes a configuration rol in the creation process.   

13- What is the relationship between html, the $scope construct, and angular expressions? (Expressions are the ones that are written like so: {{quote}} ).

  -The $scope object acts like a bind (or glue) between the html element and the controller. The properties inside this $scope are used in the view within expressions. The bind works in both directions.

14- In order to send ajax requests in Angular, you need to create an angular: a. Module
b. Service c. Controller d. $http

  -You need to create a Service. Then, you can use $http (or you can use $http without creating the Service, but it's not recommended)

15- In order to create a service, you must use the following angular function: a. angularApp.controller b. angularApp.module c. angularApp.directive d. angularApp.factory

  -d.  angularApp.factory

16- Go to my angular projects github repo and do one of them. Don't clone the repository, but rather add all the files to the folder which corresponds to your github repo. Add the files right at the root of your repo, not within a subfolder.
