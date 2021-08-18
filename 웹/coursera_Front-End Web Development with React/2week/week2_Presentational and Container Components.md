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


