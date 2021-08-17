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


# Words

One-way data flow

<hr size="1">

JSX

<hr size="1">

state : 어떻게 나의 코드와 

<hr size="1">

props

<hr size="1">

##### virtual dom(ReactDom)

![image](https://user-images.githubusercontent.com/40421183/129732145-dee8a6ca-298e-4ceb-a4f0-c06310f077e2.png)

이런식으로 real dom과 attach

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









<br>

reference

declarative

https://ko.wikipedia.org/wiki/%EC%84%A0%EC%96%B8%ED%98%95_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D
