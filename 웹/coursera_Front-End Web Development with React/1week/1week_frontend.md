## js 프레임워크&라이브러리를 사용하는 이유?

데이터와 dom을 효율적으로 활용하기 위해서

mvvm & vmc 등 활용

## 프레임워크 &라이브러리 차이

##### 라이브러리 

특정 기능에 대한 도구 또는 함수들의 집합, 알맞은곳에 호출하여 사용 (your code in charge and it calls into the
library when it sees fit)

ex) jQuery? React is also library

##### 프레임워크

프레임워크는 뼈대나 기반구조를 뜻하며 

프레임워크 뼈대 위에서 코드를 작성하여 프로그램을 개발

(the framework is in charge and it calls into your code when it needs something app specific)

ex) angular 등

# framework principle

### Hollywood principle

=> dont call us, we'll call you

흔히  IoC( 제어의 역전 - Inversion of Control) 혹은 DI(의존성 삽입 - DependencyInjection)로 불린다.

* Inversion of Control

=> framework decides when and where to call your customized code.

* DependencyInjection

=> 하나의 객체가 다른 객체의 의존성을 제공하는 테크닉


즉, 객체지향 프레임워크와 클래스 라이브러리의 큰 차이점은 프레임워크가 애플리케이션 코드를 호출한다는 것이다.

헤드퍼스트에 따르면 

헐리우드 원칙을 활용하면 "의존성 부패(dependency rot)"를 방지 가능하다.

어떤 고수준 구성요소가 저수준 구성요소에 의존하고, 그 저수준 구성요소는 다시 고수준 구성요소에 의존하고, 그 고수준 구성요소는 다시 또 다른 구성요소에 의존하고, 그 다른 구성요소는 

또 저수준 구성요소에 의존하는 것과 같은 식으로 의존성이 복잡하게 꼬여있는 것을 의존성 부패라고 한다.

할리우드 원칙을 활용시 저수준 구성요소에서 시스템에 접속을 할 수는 있지만, 언제 어떤 식으로 그 구성요소들을 사용할지는 
고수준 구성요소에서 결정하게 된다.

<hr>

* Imperative vs Declarative

Imperative : how it needs to be accomplished

Declarative : what needs to be accomplished

* single page Application

=> rich internet Applications

* MVC, MVVM, MVW(whatever)등 사용 

=> data binding, routing

(리엑트는 V만을 맡는다?)


reference 

https://www.coursera.org/learn/front-end-react/lecture/lCGX5/front-end-javascript-frameworks-and-libraries-overview

할리우드 법칙

https://johngrib.github.io/wiki/hollywood-principle/

