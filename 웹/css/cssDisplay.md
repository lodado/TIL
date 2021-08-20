## inline

전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치

다음은 모두 한줄로

![image](https://user-images.githubusercontent.com/40421183/130237446-13dd3b57-1f9c-4e7e-90a5-543dfbd62d0b.png)

대표적인 inline 엘리먼트로 ```<span>```이나 ```<a>```, ```<em>``` 태그 

 *width와 height 속성을 지정해도 무시


## block

display 속성이 block으로 지정된 엘리먼트는 전후 줄바꿈이 들어가 다른 엘리먼트들을 다른 줄로 밀어내고 혼자 한 줄을 차지

다음은 보이는 그대로

![image](https://user-images.githubusercontent.com/40421183/130237446-13dd3b57-1f9c-4e7e-90a5-543dfbd62d0b.png)

block 엘리먼트로 ```<div>```이나 ```<p>```, ```<h1>``` 등이 있다.

*width, height, margin, padding 속성이 모두 반영

## inline-block

inline 엘리먼트처럼 전후 줄바꿈 없이 한 줄에 다른 엘리먼트들과 나란히 배치됩니다.

하지만 inline 엘리먼트에서 불가능하던 width와 height 속성 지정 및 margin과 padding 속성의 상하 간격 지정이 가능해 집니다.

inline-block 엘리먼트로 ```<button>```이나 ```<input>```, ```<select>```

<span>로 마크업된 엘리먼트가 inline 속성값을 가지고, <div>로 마크업된 엘리먼트가 block 속성값을 가지는 이유는 
  
소위 user agent stylesheet라고 불리는 브라우저의 내장 스타일이 적용되서 그렇습니다. 
  
이렇게 HTML 태그 별로 기본적으로 적용되어 있는 display 속성값은 원하는 값으로 CSS를 이용하서 자유롭게 변경이 가능

reference

display

https://www.daleseo.com/css-display-inline-block/
