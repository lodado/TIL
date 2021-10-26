# css in JS

그냥 css,scss를 쓰는것에 비하여 장점 = 변수를 받아와서 css에 적용하기 편하다!

내부적으로 원리는 data-src 같은걸로 tag에서 받아와서 사용하는게 아닐까라고 추측한다


## 기본 사용법

``` javascript
import styled from 'styled-components';

export const StyledLogo = styled.img`
  max-width: 300px;
  margin: 0 auto 2.4rem auto;
  display: block;
`;

```
styled.tag명

하고 아래에 css 값을 넣어주면 된다

### 변수 사용

``` javascript
export const MyCharacter = styled.div`
  background-image: url('${boldGuy}');
  left: ${(props) => (props.x || 32) - 32}px;
  top: ${(props) => (props.y || 0) - 32}px;
  &::after {
    content: '${(props) => props.name}';
    text-align: center;
    bottom: 32px;
    display: block;
    width: max-content;
    font-size: 0.8rem;
    position: absolute;
    margin: 0 auto;
    right: ${(props) => parseInt((-props.name.length * 10) / 3 + 44 / 3)}px;
  }
`;
```

리엑트에서 props 넘겨주는거처럼 넘겨주면 styled-component에서 변수 처럼 사용 가능하다.
& 같은거 사용가능한거 보니 scss 처럼 전처리해서 작동하는거로 추측

### mixin
``` javascript
export const Character = css`
  position: relative;
  height: 32px;
  width: 32px;
  background-repeat: no-repeat;
  background-position: ${(props) => parseInt(props.direction ?? 0)}px 0px;
`;
``` 
위 코드를 

``` javascript
export const MyCharacter = styled.div`
  ${mixin.Character}
`
```

안에서 그냥 받아와 mixin처럼 사용 가능

## styled-component의 단점

font 의 경우 계속 load되서 화면이 깜빡이는 문제가 발생할 수도 있다고 한다.
그래서 따로 css로 @import 설정해서 사용을 추천한다고 한다.

관련 링크 

https://ryublock.tistory.com/37

reference


font 문제

https://github.com/styled-components/styled-components/issues/1593
https://ryublock.tistory.com/37
