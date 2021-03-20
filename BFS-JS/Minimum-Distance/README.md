Amazon Interview Question

# Problem Statement
Find the minimum distance for a Robot to reach the obstacle in a land of trenches and flat surfaces.

Duo, an efficient robot needs to get to the obstacle and remove it while he can only run on flat surfaces. The land also contains trenches where Duo is not compatible yet.

# Example

Input: 

1 0 1 1 1 1 1
1 0 0 1 0 0 0
1 0 1 0 0 1 0
1 0 0 0 1 1 0
1 0 1 1 1 1 0
1 1 1 0 0 1 0
1 1 0 1 0 1 0
1 1 1 1 1 1 0
1 1 0 0 0 1 9

In the given example, the best way to reach the destination 9 would be 


* 0 1 1 1 1 1
* 0 0 1 0 0 0
* 0 1 0 0 1 0
* 0 0 0 1 1 0
* 0 1 1 1 1 0
* 1 1 0 0 1 0
* 1 0 1 0 1 0
* * * * * * 0
1 1 0 0 0 * *

Minimum Distance = 14


# Solution

This is a basic BFS Problem and can be implemented easily through JS which we will be seeing in the code.