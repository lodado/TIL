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


 
reference 

https://velopert.com/3417
