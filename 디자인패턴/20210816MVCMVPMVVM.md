# MVC

MVC 패턴은 Model + View + Controller를 합친 용어

=> 각각의 역할을 나눠 코드 관리를 하자!

![image](https://user-images.githubusercontent.com/40421183/129574711-d764e76c-1e09-45fb-bd73-364e1007f6c5.png)

Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분.

View : 사용자에서 보여지는 UI 부분.

Controller : 사용자의 입력(Action)을 받고 처리하는 부분.

### 동작 순서

1. 사용자의 Action들은 Controller에 들어오게 됩니다.
2. Controller는 사용자의 Action를 확인하고, Model을 업데이트합니다.
3. Controller는 Model을 나타내줄 View를 선택합니다.
4. View는 Model을 이용하여 화면을 나타냅니다.

### 특징및 장점 

- Controller는 여러개의 View를 선택할 수 있는 1:n 구조입니다.

- Controller는 View를 선택할 뿐 직접 업데이트 하지 않습니다. (View는 Controller를 알지 못합니다.)

- 가장 단순한 구조

### 단점

MVC 패턴의 단점은 View와 Model 사이의 의존성이 높다.

=> 스케일이 커질경우 유지보수가 어렵다.

# MVP

MVP 패턴은 Model + View + Presenter를 합친 용어

![image](https://user-images.githubusercontent.com/40421183/129575137-51494758-f64c-4a50-a8bf-e0c25004b506.png)

model, view는 MVC와 동일하다.

Presenter의 역할 :

View에서 요청한 정보로 Model을 가공하여 View에 전달해 주는 부분입니다. View와 Model을 붙여주는 접착제..? 역할

#### 동작 순서

1/ 사용자의 Action들은 View를 통해 들어오게 됩니다.

2. View는 데이터를 Presenter에 요청합니다.

3. Presenter는 Model에게 데이터를 요청합니다.

4. Model은 Presenter에서 요청받은 데이터를 응답합니다.

5. Presenter는 View에게 데이터를 응답합니다.

6. View는 Presenter가 응답한 데이터를 이용하여 화면을 나타냅니다.

Presenter와 View는 1:1 관계

### 특징 및 장점 

MVP 패턴의 장점은 View와 Model의 의존성이 없다.

### 단점

MVC 패턴의 단점인 View와 Model 사이의 의존성은 해결되었지만, View와 Presenter 사이의 의존성이 높은 가지게 되는 단점 (조삼모사야?)

어플리케이션이 복잡해 질 수록 View와 Presenter 사이의 의존성이 강해지는 단점


# MVVM

MVVM 패턴은 Model + View + View Model

![image](https://user-images.githubusercontent.com/40421183/129575621-ca51b838-d2cb-4848-9988-f0655efcfd71.png)

Model : 어플리케이션에서 사용되는 데이터와 그 데이터를 처리하는 부분입니다.

View : 사용자에서 보여지는 UI 부분입니다.

View Model : View를 표현하기 위해 만든 View를 위한 Model입니다. View를 나타내 주기 위한 Model이자 View를 나타내기 위한 데이터 처리를 하는 부분입니다.

### 동작

MVVM 패턴의 동작 순서는 아래와 같습니다.

1. 사용자의 Action들은 View를 통해 들어오게 됩니다.

2. View에 Action이 들어오면, Command 패턴으로 View Model에 Action을 전달합니다.

3. View Model은 Model에게 데이터를 요청합니다.

4. Model은 View Model에게 요청받은 데이터를 응답합니다.

5. View Model은 응답 받은 데이터를 가공하여 저장합니다.

6. View는 View Model과 Data Binding하여 화면을 나타냅니다.

### 특징

MVVM 패턴은 Command 패턴과 Data Binding 두 가지 패턴을 사용하여 구현되었다.

Command 패턴과 Data Binding을 이용하여 View와 View Model 사이의 의존성을 없엤다.

View Model과 View는 1:n 관계.

(약간 publisher-subscriber 관계도 비슷?)

### 장점

MVVM 패턴은 View와 Model 사이의 의존성이 없습니다. 

또한 Command 패턴과 Data Binding을 사용하여 View와 View Model 사이의 의존성 또한 없앤 디자인패턴 

각각의 부분은 독립적이기 때문에 모듈화 하여 개발 가능.

### 단점

설계가 어렵다.(특히  View Model의 설계)

reference 

https://beomy.tistory.com/43
