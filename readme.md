1- Name and describe the two main operations of a stack (to add and remove data).

  -push(element) to add an element to the stack
  -pop() to remove (and return) the last inserted element from the stack

2- Name and describe the two main operations of a queue (to add and remove data).

  -enqueue(element) to add an element to the queue
  -dequeue() to remove (and return) the first remaining enqueued element from the queue

3- Draw the tree resulting from adding the following sequence of numbers to an empty tree: 30, 45, 15, 10, 50, 40, 20, 27

  <!--                           30
                              /      \
                            15       45
                          /   \     /   \
                        10    20  40     50
                               \
                               27
-->

4- Is this tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

  -Yes, the tree is balanced because there is no sub-tree with a height difference of 2 or more between its left and right sub-trees

5- Now add 29. Is the tree balanced? If not, which rotation needs to be done? (Use the following rotation as an example: rightRotation(30), or leftRotation(10))

  -The node 29 goes as the right child of the node 27. In this case, after doing it, the tree is NOT balanced anymore, because the height difference between the right sub-tree and the left sub-tree in the node 15 is 2. In this kind of cases you only normally need a simple rotation around the middle node of the unbalanced branch (which is 27). So, you can perform a left rotation around 27 and your tree will be balanced again.

6- Consider the following tree: ------5 ---2-----8 -1---3
