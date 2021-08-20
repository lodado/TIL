## flex

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

##### 컨테이너에 적용하는 속성

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
 

##### 아이템에 적용하는 속성









reference 

flex

https://studiomeal.com/archives/197

grid 

https://studiomeal.com/archives/533
