# 깨달은 지식

- reset.css

- SPA 라우터 작동 방식

- CSR 렌더링 방식 

- webpack 

- 바닐라 js에서 리엑트 비슷하게 구현

- 리엑터에서 prop과 state의 사용 이유, 그리고 변경시 setState를 사용하는 이유 

*직접 구현해보니 state에서 함수형 프로그래밍 개념을 사용한거 같다는 인상을 받았다.

<br>

## 클래스의 원형은 Object, 생성된 인스턴스는 객체 리터럴?

![image](https://user-images.githubusercontent.com/40421183/132973361-b450b5e2-7c2f-4686-bb3f-d2ef0bec8b7e.png)

function이라고 뜨는데 toString.call(Object)를 하면 object도 function으로 뜬다.
```
function array{

}
```
객체들은 내부를 들여다보면 이런 형식으로 구성된것 같다.

클래스의 내부 변수들은 객체 자체에,
메소드들은 [[prototype]]에 저장된다.

그리고 상속은 prototype chain을 통하여 구현된다. 최상위까지 가서 내려오며 참조하며 구현되는걸까? 

그래서 함수 안에서 this를 써보면

this.now === this["now"]

ES6에서 추가된 클래스는 다른 언어에는 기본적으로 제공되는 클래스 자체가 아니고, 

문법적 설탕을 사용해 기존에 있던 Object, 객체 리터럴 내용들을
재조합해서 구성한거인듯 싶다.

## 의존성 주입(DI)

할리우드 원칙

=> 상위 클래스에선 기본 로직 뼈대만 구현하고

구체적인 함수들은 하위 클래스에서 구체화

그리고 무언가 계속 바뀌는 변수나 객체가 있고, 계속 사용한다면 

자체 parameter를 만들어서 제어하지 말고 최상위 클래스에서 constructor 인자로 넣어줘서 사용하게 만든다.

<br>

## resolve로 경로 alias

https://webpack.js.org/configuration/resolve/

import 해줄때 폴더 구조가 복잡해지면 ```import ../../``` 이런식으로 계속 쓰는 경우가 생긴다.

그래서 alias를 사용해주면 경로를 간단히 표현 가능하다. 

```
const path = require('path');

module.exports = {
  //...
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, 'src/utilities/'),
      Templates: path.resolve(__dirname, 'src/templates/'),
    },
  },
};
```
webpack의 webpack.config.js 안에 resolve를 넣어준다.


```
import Utility from '../../utilities/utility';
```
위 링크가 
```
import Utility from 'Utilities/utility';
```

이제 아래처럼 alias를 사용해 사용 가능 

# review 요약

https://github.com/boostcampwm-2021/javascript-p2-airbnb/pull/430

(권한이 있어야 볼 수 있습니다. 프로젝트 자체가 비밀적인 내용이라 리뷰를 public 하긴 힘들것 같습니다.)

## EOF 설정

https://minz.dev/19

vscode의 editorconfig 사용

*바닐라에선 EOF를 자동적으로 안붙여줌

## Boolean convention

https://soojin.ro/blog/naming-boolean-variables

ON/OFF 하는 toggle같은건 boolean으로 사용,

boolean convention 사용


ex) isEdited, isclicked

영어 의문문에서 주어빼고 사용

##  css property order convention
참고 - https://9elements.com/css-rule-order/

https://css-tricks.com/poll-results-how-do-you-order-your-css-properties/

css를 가독성 있게 작성하는 규칙

규칙이고 "강제"는 아니지만 협업을 위해 배우면 좋을것 같다. 

## 컴포넌트 패턴

https://ansohxxn.github.io/design%20pattern/chapter1/

A has B

atomic design 적인 구현

## 네이밍 신경쓰기

많이 쓰이고, 통일성 있는 변수 이름를 쓰면 가독성이 좋을것 같다.


## 이벤트 헨들링 위치

보통 부모 클래스에서 조합 후 이벤트 핸들링 해주는거 같다. 



 
