# React란

![image](https://user-images.githubusercontent.com/40421183/129701841-6fbea7d5-9a76-48b7-a576-47471935dd74.png)

A javascript library for building user interfaces

* Declarative approach

프로그램이 어떤 방법으로 해야 하는지를 나타내기보다 무엇과 같은지를 설명하는 경우에 "선언형"

* Component-Based

behaviors를 작은 unit 단위로 쪼개어 캡슐화하는것을 Components라고 부른다. 

* technology stack agnostic 

no assumptions(가정X) => technology stack는 명확하다

어떻게 설계하고 백엔드를 설계할지는 개발자의 자유다.

(flux, redux, fetch 등 아무거나 써도됨)


# Words - 계속 배우는대로 업데이트

One-way data flow

단방향 데이터 흐름 => 모든걸 모듈화하고 단순하고 빠르게 만들어준다.

<hr size="1">

JSX

```
  const element = <h1 className="greeting">Hello world!</h1>
```
html 태그들을 값으로 다룰 수 있다. 

```
const element = React.createElement('h1',{className:"greeting"}, 'hello world!'};
```
와 동일 
이것은 아래처럼 바뀐다.
```
const element = React.createElement(type:'h1',props:{className:"greeting", children:'hello world!'}};
```

<hr size="1">

state : UI를 상호작용하게 만들려면 기반 데이터 모델을 변경할 수 있는 방법이 있어야 합니다. 이를 React는 state를 통해 변경한다.

<hr size="1">

props

props는 부모가 자식에게 데이터를 넘겨줄 때 사용할 수 있는 방법

props는 (함수 매개변수처럼) 컴포넌트에 전달되는 반면 state는 (함수 내에 선언된 변수처럼) 컴포넌트 안에서 관리된다.

<hr size="1">

##### virtual dom(ReactDom)

![image](https://user-images.githubusercontent.com/40421183/129732145-dee8a6ca-298e-4ceb-a4f0-c06310f077e2.png)

이런식으로 real dom과 attach 

virtual dom을 쓰는 이유는 dom을 직접 다루면 오버헤드가 심하니 virtual dom의 최종 결과만 전달하는

식으로 구현하고, 그리고 바뀐부분이 있다면 바뀐 dom만 참조해 수정하는식으로 하여
성능 개선을 이끌어냈다고 한다.

<hr size="1">

##### Element

smallest building block of react apps

cheaps to create

ex) 
```
  const ele = <h1>welcometo React</h1>
```
<hr size="1">
##### components

components are 'made of' elements

```
class app extends Component {
  render(){return ...
  }
}
혹은

function App(){return ...}
```

return 안엔 element들의 조합이 있다. 

<hr size="1">

Flux/ Redux

나중 소개?


# react-bootstrap
![image](https://user-images.githubusercontent.com/40421183/129743084-5705ca45-457e-42a3-8e36-37ba8883a54e.png)

다양한 형태의 요소가 Component로 제공된다.

boostrap 이외에 다른 MaterialUI, SemanticUI 같은거도 사용 가능




<br>

reference

declarative

https://ko.wikipedia.org/wiki/%EC%84%A0%EC%96%B8%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D
