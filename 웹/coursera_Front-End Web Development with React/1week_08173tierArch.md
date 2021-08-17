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



reference

다층 구조

https://ko.wikipedia.org/wiki/%EB%8B%A4%EC%B8%B5_%EA%B5%AC%EC%A1%B0

coursera

https://www.coursera.org/learn/front-end-react/lecture/77jgw/what-is-full-stack-web-development

serverless

https://velog.io/@logic/serverless-BaaS-FaaS

https://raptor-hw.net/xe/know/17236
