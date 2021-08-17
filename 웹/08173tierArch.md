  # 3계층 구조
  
![image](https://user-images.githubusercontent.com/40421183/129676332-712d4b3a-7e9d-4522-8aaa-4d1e7ca6bbdf.png)

### 프레젠테이션 계층 - HTML, CSS, Javascript등 frontend

프레젠테이션 계층은 응용 프로그램의 최상위에 위치하고 있는데 이는 서로 다른 층에 있는 데이터 등과 커뮤니케이션을 한다.

### 애플리케이션(비즈니션 로직) 계층 - java, php 등 backend

이 계층은 비즈니스 로직 계층 또는 트랜잭션 계층이라고도 하는데, 비즈니스 로직은 워크스테이션으로부터의 클라이언트 요청에 대해 마치 서버처럼 행동한다. 

그것은 차례로 어떤 데이터가 필요한지를 결정하고, 메인프레임 컴퓨터 상에 위치하고 있을 세 번째 계층의 프로그램에 대해서는 마치 클라이언트처럼 행동한다.

위 계층에 server-side rendering을 보낸다.

js에선 Restful api, serving JSON 등

### 데이터 계층 - DBMS

데이터 계층은 데이터베이스와 그것에 액세스해서 읽거나 쓰는 것을 관리하는 프로그램을 포함한다. 

애플리케이션의 조직은 이것보다 더욱 복잡해질 수 있지만, 3계층 관점은 대규모 프로그램에서 일부분에 관해 생각하기에 편리한 방법이다.


reference

다층 구조

https://ko.wikipedia.org/wiki/%EB%8B%A4%EC%B8%B5_%EA%B5%AC%EC%A1%B0

coursera

https://www.coursera.org/learn/front-end-react/lecture/77jgw/what-is-full-stack-web-development
