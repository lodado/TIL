  # 3계층 구조
  
![image](https://user-images.githubusercontent.com/40421183/129676332-712d4b3a-7e9d-4522-8aaa-4d1e7ca6bbdf.png)

### 프레젠테이션 계층 - HTML, CSS, Javascript등 frontend

프레젠테이션 계층은 응용 프로그램의 최상위에 위치하고 있는데 이는 서로 다른 층에 있는 데이터 등과 커뮤니케이션을 한다.

### 애플리케이션(비즈니션 로직) 계층 - java, php 등 backend

이 계층은 비즈니스 로직 계층 또는 트랜잭션 계층이라고도 하는데, 비즈니스 로직은 워크스테이션으로부터의 클라이언트 요청에 대해 마치 서버처럼 행동한다. 

그것은 차례로 어떤 데이터가 필요한지를 결정하고, 메인프레임 컴퓨터 상에 위치하고 있을 세 번째 계층의 프로그램에 대해서는 마치 클라이언트처럼 행동한다.

위 계층에 server-side rendering을 보낸다.

js에선 Rest api, serving JSON 등

### 데이터 계층 - DBMS

데이터 계층은 데이터베이스와 그것에 액세스해서 읽거나 쓰는 것을 관리하는 프로그램을 포함한다. 

애플리케이션의 조직은 이것보다 더욱 복잡해질 수 있지만, 3계층 관점은 대규모 프로그램에서 일부분에 관해 생각하기에 편리한 방법이다.

![image](https://user-images.githubusercontent.com/40421183/129677660-80ad7521-6935-4e84-a893-9a2bd05ff2b0.png)


### serverless 

serverless란 개발자가 서버를 관리할 필요 없이 애플리케이션을 빌드하고 실행할 수 있도록 하는 클라우드 네이티브 개발 모델을 뜻한다.

* BaaS(BACKED-AS-A-SERVIECE)

애플리케이션 개발 시 요구되는 복잡한 백엔드 기능들을 개발자가 직접 개발하지 않고 클라우드 공급자가 제공하는 서비스를 이용해 쉽고 안정적으로 구현 하는 것

단일 웹페이지나 모바일 앱 기반의 서비스에서 필요한 서버 기능들을 사용하기 위해 이용하는 써드파티(Third Party) 애플리케이션이지만 클라우드 서비스

* FaaS(Function-as-a-Service)
 
개발자가 사용자 정의 서버 측 로직을 작성하지만 클라우드 제공 업체가 관리를 전담하는 서버 컨테이너에서 실행 되는 서비스 기능

서버 측 로직을 개발자가 직접 작성

* IaaS (Infrastructure as a Service)

기존에 제공되는 서버 기반의 호스팅이 클라우드로 제공되는 형태라고 생각 할 수 있다. 가상의 하드웨어상에 OS나 필요 애플리케이션을 설치하여 사용한다.

인프라(서버, 스토리지, 네트워크 등)를 서비스로 제공한다.

* PaaS (Platform as a Service)

플랫폼을 제공하는 서비스로 사용자는 데이터나 애플리케이션을 이용할 수 있다. 예를 들면 결제 시스템이 필요한 경우 결제 시스템의 PaaS 결제 서비스를 사용하면 된다.

* SaaS (Software as a Service)

하드웨어 및 소프트웨어를 모두 제공하는 서비스로 기존의 호스팅 서비스에서는 필요한 프로그램을 사용하기 위해서는 프로그램을 사야 했지만

클라우드 환경에서는 그 프로그램이 서비스의 형태로 제공된다.

ex) Amazon RDS : 아마존 클라우드 + 데이터베이스

* HaaS (Hardware as a Service)

특정 하드웨어가 필요한 경우 제공 업체로부터 하드웨어를 서비스 받는 것. 특정 하드웨어를 자체 구축이 어려운 경우 서비스를 받을 수 있다.

# Node

![image](https://user-images.githubusercontent.com/40421183/129685786-2555d4dc-a995-4464-b66e-a325ded9320f.png)

### 노드 표준 라이브러리(Node standard library)

실질적으로 V8과 연결되어 특정 기능들을 수행할 수 있도록 도와주는 자바스크립트 기본 라이브러리입니다. 

자바스크립트 언어로 작성되었으며, 이를 통해 노드 바인딩과 연결됩니다.

### 노드 바인딩(Node bindings)

C/C++로 구성된 시스템 바인딩 레이어입니다. C/C++ 로 작성된 라이브러리를 자바스크립트에서 사용할 수 있도록 결합하는 핵심 요소입니다. 

소켓, http 등의 통신 기능이 제공되지만, DOM에 관한 기능은 제공되고 있지 않습니다. 소켓이나 http 등에 대한 노드 바인딩이 노드 표준 라이브러리와의 인터페이스 역할을 합니다. 


### V8 엔진

V8 자바스크립트 엔진은 구글에서 개발된 오픈소스 JIT 가상머신 형식의 자바스크립트 엔진입니다

### 쓰레드 풀(thread pool)

쓰레드풀은 libeio라는 비동기 I/O 라이브러리로 구성되어 있습니다. 즉, 파일 관련 작업을 수행한다고 보면 됩니다. 이벤트 기반이 모든 게 비동기로 동작하는 C언어용 I/O 라이브러리입니다.

모두 비동기로 처리합니다. 노드에서의 비동기 입출력 작업들은 모두 이 라이브러리로 동작한다고 생각하면 됩니다.
 
Node.js도 싱글 쓰레드만 사용하는 것이 아니라 내부적으로 멀티 쓰레드 풀을 사용하기는 합니다. 

### 이벤트 루프(event loop)

이벤트 루프는 libev를 이용하여 구성되어 있습니다. 다양한 기능을 가진 고성능 이벤트 루프 라이브러리로, 

libevent라는 라이브러리와 유사합니다. 노드의 이벤트 루프가 이것으로 구성되어 있습니다.

(추가정보) 

![image](https://user-images.githubusercontent.com/40421183/129685536-28bb2f20-43a8-4421-9b62-6f2226806ac8.png)


reference

다층 구조

https://ko.wikipedia.org/wiki/%EB%8B%A4%EC%B8%B5_%EA%B5%AC%EC%A1%B0

coursera

https://www.coursera.org/learn/front-end-react/lecture/77jgw/what-is-full-stack-web-development

serverless

https://velog.io/@logic/serverless-BaaS-FaaS

https://raptor-hw.net/xe/know/17236

node.js

https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90
