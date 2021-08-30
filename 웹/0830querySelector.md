https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid

```
Function               | Live? | Type           | Time Complexity
querySelector          |       | Element        |  O(n)
querySelectorAll       |   N   | NodeList       |  O(n)
getElementById         |       | Element        |  O(1)
getElementsByClassName |   Y   | HTMLCollection |  O(1)
getElementsByTagName   |   Y   | HTMLCollection |  O(1)
getElementsByName      |   Y   | NodeList       |  O(1)
```

querySelector 빅오가 n이긴 하나 more useful when you want to use more complex selectors. (css3등도 유용하다.-  CSS(3)-Selector with IDs and Classes and Pseudo-Classes)

클래스 이름, id등 여러개를 쓸 수 있고 

가장 유용해서 querySelector를 많이 쓰라고 추천하는듯 싶다.

다만 속도는 getElementBy 계열이 빠르다. 


```
document.querySelectorAll(".class1.class2") will return a static collection (you can use that at the moment the method was called.)

can be rewritten as

document.getElementsByClassName("class1 class2") getElementsByClassName returns a live collection. 
```
=



