# presentational & container 디자인 패턴

## presetational component

사용자가 직접 보고, 조작하는 컴포넌트

Mainly concerned with rendering the View => markup, styles

container component가 내려준 prop의 함수에 의해 state를 변경

(자체 state를 가지지 않는다.)


## container component

어떻게 동작하는지, 어떤 로직을 수행하는지

responsible for making things work => data fetching, state updates

markup, styles X 

state를 관리하고 data source와 통신한다. 

# Functional Components

보통 class extends Component{} 방식으로 많이 쓰는데

심플한 형식이면 그냥 functional Component으로 사용해도 된다.

props를 파라미터로 받아 사용하지만 local state은 없어서

lifecycle hooks을 사용한다.

##### lifecycle hook 

컴포넌트의 생명 주기를 뜻하며, 함수를 오버라이딩해서 사용 가능하다.

(나중 설명 추가해준다고 하심)
