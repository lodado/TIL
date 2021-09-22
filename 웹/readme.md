# 웹의 특징 

- WWW = World Wide Web: 팀 버너스리에 의해 개발되었다.
 
- 웹과 인터넷은 다르다.
 
- 웹의 3요소는 HTTP, HTML, URL이다.

## HTTP = HyperText Transfer Protocol

WWW 상에서 정보를 주고받을 수 있는 프로토콜

TCP와 UDP(http 3 - Quic)를 사용하며, 80번 포트 사용

## HTTP의 특징

비교적 간단하며 확장 가능하다.

상태가 없다(= stateless).
 
HTTP1 --> HTTP/1.1 --> HTTP/2 로 버전이 변경되었으며, 계속 발전하는 중이다.
 
## 브라우저 로딩 과정

![image](https://user-images.githubusercontent.com/40421183/134370379-4e7a5854-c99b-4c68-8449-fd1294abc2b9.png)

브라우저는 파싱 → 스타일 → 레이아웃 → 페인트 → 합성 → 렌더 등의 과정을 거치고, 

DOM이나 CSS에 변화가 생길경우 reflow or repaint의 과정을 수행한다.


references 

브라우저 로딩 과정 

https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Virtual-DOM/#_1-%E1%84%87%E1%85%B3%E1%84%85%E1%85%A1%E1%84%8B%E1%85%AE%E1%84%8C%E1%85%A5-%E1%84%85%E1%85%A9%E1%84%83%E1%85%B5%E1%86%BC-%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%BC
