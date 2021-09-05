## css 상속 순서 - Specificity

1. css의 표현방식 inline 방식 > internal 방식 > external 방식 순으로 우선순위가 높다.

2. 같은 방식 사이에서는 더 후자에 쓰여진 순으로 우선순위가 높다.

3. 상속이나 자식 부모 관계 같이 구체적으로 쓰여졌을 수록 우선순위가 높다.

## css 네이밍 규칙
```
.data-box{
  ...
} 
```

보통 변수 같은건 카멜케이스를 많이 쓰는데 css는 하이픈(-)를 사용해서 표현

보고 이것이 무엇인지 명확하게 알아볼 수 있게 해야한다.

그리고 나중 유지보수를 위해 js에서 참조해서 사용하는 css들은

```
<div class="site-navigation js-site-navigation">
</div>
```
처럼 js-를 붙여서 따로 선언해주고

```
//the JavaScript code
const nav = document.querySelector('.js-site-navigation')
```

로 써서 나중 혼동을 방지하는것도 추천한다고 한다. 


참고 : 

https://yeoseon.kr/joheun-css-neiming-pyojun-gyucig/
