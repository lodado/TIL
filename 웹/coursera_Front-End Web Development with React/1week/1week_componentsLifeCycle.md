# Life cycle

리엑트는 여러개의 component의 결합으로 이루어져 있다.

1. 처음에 components 생성

2. 생성 후 render로 컴포넌트를 dom에 부착(계층적 구조를 이뤄서 존재)

3. 호출이 끝나고 안쓰이는순간 계층적 구조에서 탈퇴

# react component Lifecycle

## 1. Mounting

만들어지고 DOM에 삽입되는 단계(아래 순서대로 생성)

constructor()

getDerivedStateFromProps()

render() 

* 마운트중엔 props나 state를 바꾸면 안된다.

compoenentDidMount()

* componentDidMount에서는 DOM에 접근 가능. 그래서 여기에서는 주로 AJAX 요청을 하거나, setTimeout, setInterval같은 행동

처음 쓰던건 deprecated?(componentwillMount())

* 랜더링 순서 : 생성자 -> render -> mount

## Updating

업데이트 : props 또는 state가 변경되면 갱신이 발생한다.

static getDerivedStateFromProps()

shouldComponentUpdate()

shouldcomponentUpdate에서는 아직 render하기 전이기 때문에

return false를 하면 render을 취소할 수 있습니다. 쓸데없는 update가 일어나면 취소하는 방식으로 주로 여기서 성능 최적화를 합니다. 

render()

getSnapshotBeforeUpdate()

componentDidUpdate()

componentDidUpdate에서는 render이 완료되었기 때문에 DOM에 접근 가능.

## Unmounting

아래 메서드는 컴포넌트가 DOM 상에서 제거될 때에 호출된다.

오류 처리

static getDerivedStateFromError()

componentDidCatch()

reference 

https://ko.reactjs.org/docs/react-component.html

생명주기 

https://www.zerocho.com/category/React/post/579b5ec26958781500ed9955
