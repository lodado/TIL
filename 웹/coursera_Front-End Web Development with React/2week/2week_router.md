아.. 다썼는데 500 에러로 날라가버렸네요..

요약해서 매우 간략하게 다시 씁니다

# react router

 react-router 는, 써드파티 라이브러리로 
 
 마치 view의 라우터같은 기능을 합니다.
 
 여러 화면으로 구성된 웹 어플리케이션을 만들게 된다면, react-router 는 필수 라이브러리입니다.
 
 다운로드
 
 ```
 yarn add react-router-dom
 ```
 
 ```
 import { BrowserRouter } from 'react-router-dom';

    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
 ```
 
 app.js의 기본 설정은 다음과 같이 browserRouter 설정을 해줍니다.
 
 main은 presetational component입니다.
 

 main에선 다음과 같습니다.
 
```
import { Switch, Route, Redirect } from 'react-router-dom';
          <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
          </Switch>
```

switch를 통해 경로 요청이 들어오면 알맞은 component를 보여줍니다.

 presetational component에서 마치 MVC모델의 C 같은 역할을 합니다.


헤드에 메뉴가 있고, 메뉴를 누르면 

```
<Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/menu'><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
```
 
알맞은 경로로 보내는 작용을 해줍니다.

switch에서 적용 안된 path는 /home으로 작용될것입니다.

NavbarToggler는 누르면 하이라이트 처리되는 메뉴바인듯 싶습니다. 

# router parameter

ex) /menu/42 

42가 파라미터다.

token형태로 parameter를 받는다

path : 'menu/:id' where id is the token


### specifying the link(Nav-link 등에 사용)

=> <Link to {\`/menu/${dish.id}\`}>

*js 백틱 방법

router는 3개 props를 컴포넌트에 전달한다. when is it rendered

* match : 라우트 파라미터를 해당 properties에 전달한다.

* location : URL location

* history : : allow you go to back

### match Object

match Object 는 route path가 지금 URL가 알맞은 URL인지 정보를 제공한다.

params은 key/value pair로 주어진 url이 알맞게 주어졌는지 동적으로 잘라서 구별한다.

ex) 

/menu/:id로 지금 path가 되있다면

/menu/42에서 "42"는 match.params.id 와 비교된다.



### 쿼리 : /menu?details=true

일반적으로는 파라미터는 특정 id 나 이름을 가지고 조회를 할 때 사용하고,

쿼리의 경우엔 어떤 키워드를 검색하거나, 요청을 할 때 필요한 옵션을 전달 할 때 사용



 
reference 

https://velopert.com/3417

파라미터 & 쿼리

https://velog.io/@bigbrothershin/%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EC%99%80-%EC%BF%BC%EB%A6%AC
