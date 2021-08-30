
## querySelector, getElement

```
Function               | Live? | Type           | Time Complexity
querySelector          |       | Element        |  O(n)
querySelectorAll       |   N   | NodeList       |  O(n)
getElementById         |       | Element        |  O(1)
getElementsByClassName |   Y   | HTMLCollection |  O(1)
getElementsByTagName   |   Y   | HTMLCollection |  O(1)
getElementsByName      |   Y   | NodeList       |  O(1)
```
출처

https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid


querySelector 빅오가 n이긴 하나 more useful when you want to use more complex selectors. (css3등도 유용하다.-  CSS(3)-Selector with IDs and Classes and Pseudo-Classes)

클래스 이름, id등 여러개를 쓸 수 있고 

가장 유용해서 querySelector를 많이 쓰라고 추천하는듯 싶다.

다만 속도는 getElementBy 계열이 빠르다. 


```
document.querySelectorAll(".class1.class2") will return a static collection (you can use that at the moment the method was called.)

can be rewritten as

document.getElementsByClassName("class1 class2") getElementsByClassName returns a live collection. 
```

## CSS var

### 1. css 변수 선언
```
--color: rebeccapurple; /* 변수명: 값; */ 

--mint:;		/* X */

--mint: ;		/* O */

--mint != --MINT

```

### defalut 값

color: var(--color, yellow); /* 속성: var(--변수명, default 값); */

yellow 자리에 --color 변수가 선언 안되있을걸 대비해서 default값을 넣을수 있다. 

물론 변수도 가능하다.

### html에서 css 변수 변경
```
<div style="--color: blue"> css Variable </div>
```

### 숫자를 단위랑 같이 쓸때 
```

.block {
  --p: 33; 
  width: calc(var(--p) * 1vw); 
  height: calc(var(--p) * 1vh); 
}

```

calc를 사용한다.

다만 숫자+단위 자체로 이루어진 변수는 사용 불가능하다.

### css 변수 지원 안할경우?

```
background: red;
background: var(--accent-color, orange);
```

css 변수를 지원하지 않는 브라우저: red

--accent-color의 값이 지정되지 않은 경우: orange

--accent-color: yellowgreen으로 지정되어 있는 경우: yellowgreen

만약, 변수 속성이 형식에 맞지 않는다면 transparent의 속성으로 돌아간다.

```
:root { /* 어디서나 읽을 수 있도록 함 */ --accent: 20px; } 

body { background: red; }

h1 { background: blue; background: var(--accent, orange); }
```

### js와 같이 

```
element.style.getPropertyValue("--color");

getComutedStyle(element).getPropertyValue("--color");

```


reference 

querySelector, getElement

https://stackoverflow.com/questions/14377590/queryselector-and-queryselectorall-vs-getelementsbyclassname-and-getelementbyid

css var 

출처: https://fresh-mint.tistory.com/entry/css-variable-변수-총-정리 [민트코딩]


