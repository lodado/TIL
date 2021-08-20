100 % 다 언제나 외우고 있을수는 없을꺼 같네요. 필요할때 찾아 쓰는것이 바람직해 보입니다. 

## flex

호환문제 - 인터넷 익스플로러(IE)같은 경우는 Flex는 표준 스펙을 지원하지만 Grid는 legacy(고인물) 버전만 지원

```
<div class="container">
	<div class="item">helloflex</div>
	<div class="item">abc</div>
	<div class="item">helloflex</div>
</div>
```

부모 요소인 div.container를 Flex Container(플렉스 컨테이너)

자식 요소인 div.item들을 Flex Item(플렉스 아이템)

![image](https://user-images.githubusercontent.com/40421183/130234879-87d67f2e-6118-40ee-aef8-c4ae7fe2886c.png)

컨테이너가 Flex의 영향을 받는 전체 공간이고, 설정된 속성에 따라 각각의 아이템들이 어떤 형태로 배치되는 것

### Flex의 속성

## 컨테이너에 적용하는 속성

##### display : flex;

Flex 컨테이너에 display: flex;를 적용하는게 시작

```
.container {
	display: flex;
	/* display: inline-flex; */
}
```

![image](https://user-images.githubusercontent.com/40421183/130235797-a274eccf-586e-43fe-aad6-c0b48d737702.png)

inline 요소들 처럼 Flex 아이템들은 가로 방향으로 배치되고, 자신이 가진 내용물의 width 만큼만 차지

height는 컨테이너의 높이만큼
 
inline-flex는 inline-block처럼 동작
 
##### 축 

아이템들이 배치된 방향의 축을 메인축(Main Axis),

메인축과 수직인 축을 수직축 또는 교차축(Cross Axis)

![image](https://user-images.githubusercontent.com/40421183/130239751-8ef1882a-76af-4736-ace4-e7fdd427154d.png)


##### flex-direction

배치 방향 설정

```
.container {
	flex-direction: row;
	/* flex-direction: column; */
	/* flex-direction: row-reverse; */
	/* flex-direction: column-reverse; */
}
```

![image](https://user-images.githubusercontent.com/40421183/130239970-dc421deb-c16f-4b84-a155-031879ca3905.png)

##### flex-wrap

컨테이너가 더 이상 아이템들을 한 줄에 담을 여유 공간이 없을 때
아이템 줄바꿈을 어떻게 할지 결정하는 속성

```
.container {
	flex-wrap: nowrap; => 삐져나감
	/* flex-wrap: wrap; */ => 아래로
	/* flex-wrap: wrap-reverse; */ => 위로..?
}

```

##### flex-flow

flex-direction과 flex-wrap을 한꺼번에 지정할 수 있는 단축 속성

flex-direction, flex-wrap의 순으로 한 칸 떼고 써주면 된다.

```
.container {
	flex-flow: row wrap;
	/* 아래의 두 줄을 줄여 쓴 것 */
	/* flex-direction: row; */
	/* flex-wrap: wrap; */
}
```


##### justify-content

메인축 방향 정렬

```
.container {
	justify-content: flex-start;
	/* justify-content: flex-end; */
	/* justify-content: center; */
	/* justify-content: space-between; */
	/* justify-content: space-around; */
	/* justify-content: space-evenly; */ => IE 지원 X 
	
	align-items: stretch;
	/* align-items: flex-start; */
	/* align-items: flex-end; */
	/* align-items: center; */
	/* align-items: baseline; */
}
```

“justify”는 메인축(오뎅꼬치) 방향으로 정렬

“align”은 수직축(오뎅을 뜯어내는) 방향으로 정렬

ex: 

justify-content: center;
align-item: center;

![image](https://user-images.githubusercontent.com/40421183/130240768-e7ed5ab6-7806-4fb1-84b7-c1ad37e85353.png)



## 아이템에 적용하는 속성들

##### 유연한 박스의 기본 영역

flex-basis

flex-basis는 Flex 아이템의 기본 크기를 설정
```
.item {
	flex-basis: auto; /* 기본값 */
	/* flex-basis: 0; */
	/* flex-basis: 50%; */
	/* flex-basis: 300px; */
	/* flex-basis: 10rem; */
	/* flex-basis: content; */
}
```

##### flex-grow

유연하게 늘리기

flex-grow는 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성
```
.item {
	flex-grow: 1;
	/* flex-grow: 0; */ /* 기본값 */
}
```

들어가는 숫자의 의미는, 아이템들의 flex-basis를 제외한 여백 부분을 flex-grow에 지정된 숫자의 비율로 나누어 가진다고 생각하시면 됩니다.

/* 1:2:1의 비율로 세팅할 경우 */

.item:nth-child(1) { flex-grow: 1; }

.item:nth-child(2) { flex-grow: 2; }

.item:nth-child(3) { flex-grow: 1; }


##### flex-shrink

유연하게 줄이기

```
.item {
	flex-basis: 150px;
	flex-shrink: 1; /* 기본값 */
}
```

flex-shrink에는 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible)

박스로 변하고 flex-basis보다 작아집니다.

flex-shrink를 0으로 세팅하면 아이템의 크기가 flex-basis보다 작아지지 않기 때문에 고정폭의 컬럼을 쉽게 만들 수 있어요. 

고정 크기는 width로 설정합니다.

##### flex

flex-grow, flex-shrink, flex-basis를 한 번에 쓸 수 있는 축약형 속성

```
.item {
	flex: 1;
	/* flex-grow: 1; flex-shrink: 1; flex-basis: 0%; */
	flex: 1 1 auto;
	/* flex-grow: 1; flex-shrink: 1; flex-basis: auto; */
	flex: 1 500px;
	/* flex-grow: 1; flex-shrink: 1; flex-basis: 500px; */
}
```

##### align-self

수직축으로 아이템 정렬

아이템의 축 버젼

```
.item {
	align-self: auto;
	/* align-self: stretch; */
	/* align-self: flex-start; */
	/* align-self: flex-end; */
	/* align-self: center; */
	/* align-self: baseline; */
}
```


##### order

각 아이템들의 시각적 나열 순서를 결정하는 속성이예요.

```
.item:nth-child(1) { order: 3; } /* A */
.item:nth-child(2) { order: 1; } /* B */
.item:nth-child(3) { order: 2; } /* C */
```

숫자값이 들어가며, 작은 숫자일 수록 먼저 배치됩니다. “시각적” 순서일 뿐, HTML 자체의 구조를 바꾸는 것은 아니므로 접근성 측면에서 사용에 주의

### z-index
```
.item:nth-child(2) {
	z-index: 1;
	transform: scale(2);
}
```


reference 

flex

https://studiomeal.com/archives/197

grid 

https://studiomeal.com/archives/533
