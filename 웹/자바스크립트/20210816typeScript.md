# typescript란

TypeScript는 JS의 구문이 허용되는, JavaScript의 상위 집합 언어입니다. 

그러나 TypeScript는 다른 종류의 값들을 사용할 수 있는 방법이 추가된, 타입이 있는 상위 집합입니다.

즉, 동적 타입 언어들(자바스크립트, 파이썬 등)에게 없는 타입 체크를 넣어주는 자바스크립트의 추가적 라이브러리


### 특성

- TypeScript: 정적 타입 검사자 (TypeScript: A Static Type Checker)

-  타입이 있는 JavaScript의 상위 집합

- 자바스크립트의 런타임 특성 === 타입스크립트의 런타임 특성

* TypeScript의 컴파일러가 코드 검사를 마치면 타입을 삭제해서 결과적으로 "컴파일된" 코드

결과적으로 js와 차이가 없다
 

### 타입 추론

```
let helloWorld = "Hello World";
//  ^?
```

자동 타입 추론

## 타입 정의

```

const user = {
  name: "Hayes",
  id: 0,
};

```

위 코드의 타입을 아래 방식으로 정의 가능하다


```
interface User {
  name: string;
  id: number;
}

// ---cut---
const user: User = {
  name: "Hayes",
  id: 0,
};
```

클래스도 동일 방식으로 선언 가능

'''

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

'''


## 타입 구성 (Composing Types)

방식 - 유니온, 제네릭


### 유니언 (Unions)

유니언은 타입이 여러 타입 중 하나일 수 있음을 선언

```
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

이런 방식으로 타입을 여러개중 하나임을 골라낼 수 있다.

![image](https://user-images.githubusercontent.com/40421183/129527181-48a37ac9-94d0-477d-bb46-42fc763d980c.png)

교집합도 가능
```
type Combined = { a: number } & { b: string };
type Conflicting = { a: number } & { a: string };
```

### 제네릭

제네릭은 타입에 변수를 제공하는 방법.

```
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

자바의 제네릭과 유사?


### 구조적 타입 시스템 (Structural Type System) (덕 타이핑)


타입 검사가 값이 있는 형태에 집중 =>  "덕 타이핑(duck typing)" 또는 "구조적 타이핑" 이라 불린다


구조적 타입 시스템에서 두 객체가 같은 형태를 가지면 같은 것으로 간주

(자바스크립트는 객체의 주소 비교)


## TS for OOP

TypeScript의 타입에 대한 이해는 사실 C#이나 Java와 상당히 다르다

=> 

- 이름으로 구체화된 타입 시스템 

C#과 Java에서 주어진 값과 객체는 ‘null’, 원시 타입, 또는 정의된 클래스 타입 중 정확하게 하나의 타입 <=> 코드에서 사용한 타입은 런타임 시점에 존재하며, 타입은 구조가 아닌 선언

- 집합으로서의 타입 (Types as Sets)

C# 또는 Java에서 런타임 타입과 해당 컴파일 타임 선언 사이의 일대일 대응관계 <=> TypeScript에서 모든 타입이 단순히 집합

- 삭제된 구조적 타입(Erased Structural Types)

TypeScript에서, 객체는 정확히 단일 타입이 아니다

TypeScript의 타입 시스템은 또한 구체화되지 않았다 런타임에 obj가 어떤 객체임을 알려주지 않는다.

=> 집합의 멤버로 간주하여 해당 집합의 연산을 수행할수 있다면 실행 가능 

```
interface Pointlike {
  x: number;
  y: number;
}
interface Named {
  name: string;
}

function printPoint(point: Pointlike) {
  console.log("x = " + point.x + ", y = " + point.y);
}

function printName(x: Named) {
  console.log("Hello, " + x.name);
}

const obj = {
  x: 0,
  y: 0,
  name: "Origin",
};

printPoint(obj);
printName(obj);
```

# 구조적 타입화의 결과 (Consequences of Structural Typing)

? 위에서 삭제된 구조적 타입이라고 했는데 여기선 구조적 타입화의 결과라고 하는걸 보니 어느 한가지는 번역이 제대로된게 아닌거 같다.

엄격한 구조적 타입이 아닌 유연화된 결과라고 난 이해했다. 

자바의 oop와 typescript의 집합 타입을 비교했을때 typescript가 좀 더 유연하고 상위집합으로 표현 가능하다면 허용하다고 하였으므로

typescript가 약간 더 포괄적이다.

### 빈 타입

```
class Empty {}

function fn(arg: Empty) {
  // 무엇인가를 하나요?
}

// 오류는 없지만, '빈' 타입은 아니지 않나요?
fn({ k: 10 });
```

TypeScript는 주어진 인수가 유효한 Empty인지 확인하여 fn의 호출이 유효한지를 검사합니다 { k: 10 }과 class Empty { }의 구조를 확인하여 유효성을 검사합니다.

Empty에 프로퍼티가 없으므로 Empty가 수행하는 모든_ 프로퍼티가 { k: 10 }에 속해있습니다. 그러므로, 유효한 호출입니다


즉, 명목적인 객체지향프로그래밍 언어와 매우 비슷하게 사용되며

파생 클래스와 파생 클래스의 기본 사이의 자연스러운 하위 타입 관계가 파괴되기 때문에, 하위 클래스는 삭제할 수 없다.

=> 집합이라 생각하면 자연스럽긴 하다..

### 동일한 타입 (Identical Types)

*덕 타입?

타입 이름이 달라도 동일한 구조와 타입이면 같은 타입으로 취급하는것 같다. 

```
class Car {
  drive() {
    // hit the gas
  }
}
class Golfer {
  drive() {
    // hit the ball far
  }
}
```

### 반영 (Reflection)

객체지향 프로그래머는 제네릭을 포함하여 어떤 값의 유형이라도 다룰(query)수 있음에 익숙하다

다만, TypeScript의 타입 시스템이 완벽히 지워졌으므로, 제네릭 타입 인자의 인스턴스화와 같은 정보는 런타임에 사용할 수 없다.

JavaScript에는 typeof와 instanceof와 같은 제한된 원시요소가 있지만, 이런 연산자는 타입이 지워진 코드의 출력에 존재하므로 여전히 작동한다. 

예를 들어, typeof (new Car())는 Car나 "Car"가 아닌 "object"이다.


# fp for typescript

![image](https://user-images.githubusercontent.com/40421183/129527301-bdd5bdef-aa04-4e9c-b4d1-b75a2d89308b.png)

![image](https://user-images.githubusercontent.com/40421183/129527471-f70b3c26-4024-49cf-8790-6291e4223802.png)

이건 써봐야 이해할거 같다. 자바의 fp 기능과 유사하게 취급?


### 점진적인 타이핑 (Gradual typing)

TypeScript는 표현식의 타입을 알 수 없을 때마다 any 타입을 사용


```
const anys = []; //type anys : any[]

```


그리고 any 타입은 어디서든 간에 사용가능

any 전염될 수 있는데, 역시 — 만약에 any 타입의 표현식과 함께 변수를 초기화하면, 변수 역시 any 타입


* TypeScript는 any를 제공할 때 에러가 발생되면, tsconfig.json에서 "noImplicitAny": true 또는 "strict": true를 설정


# 설치방법

npm을 이용한 설치 (Node.js 패키지 매니저

> npm install -g typescript

TypeScript의 Visual Studio 플러그인 설치


.ts 확장자를 가진 typescript 코드 실행

```
tsc greeter.ts
```

그럼 .js 확장자를 가진 코드 생성 

* 타입 체크때 코드에 오류가 존재하더라도 TypeScript를 사용할 수 있습니다. 그러나 TypeScript는 코드가 예상대로 작동하지 않을 것이라는 경고를 호출


### 클래스 

interface Person {
    firstName: string;
    lastName: string;
}

```

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
```

생성자의 인수에 public을 사용하는 것은 그 인수의 이름으로 프로퍼티를 자동으로 생성하는 축약형


reference

typescript 

https://typescript-kr.github.io/pages/tutorials/ts-for-the-new-programmer.html

