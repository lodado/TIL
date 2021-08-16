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

## 타입 정의 (interface)

```

const user = {
  name: "Hayes",
  id: 0,
};

```

위 코드의 타입을 interface를 써서 아래 방식으로 정의 가능하다


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

인터페이스의 모든 프로퍼티가 필요한 것은 아니다.

어떤 조건에서만 존재하거나 아예 없을 수도 있다. => 선택적 프로퍼티

```
interface SquareConfig {
    color?: string;
    width?: number;
}
```

읽기 전용 프로퍼티

```
interface Point {
    readonly x: number;
    readonly y: number;
}
```

또한, 모든 변경 메서드(Mutating Methods)가 제거된 Array<T>와 동일한 ReadonlyArray<T> 타입을 제공
 
변수는 const를 사용하고 프로퍼티는 readonly를 사용합니다
 
함수 타입 
 
```
 
interface SearchFunc {
    (source: string, subString: string): boolean;
}
 
```

클래스도 동일 방식으로 선언 가능

```

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
```
 
```
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
} 
```
 
다른 인터페이스처럼 함수 강제도 가능

클래스와 인터페이스를 다룰 때, 클래스는 두 가지 타입을 가진다는 것을 기억하는 게 좋습니다: 스태틱 타입과 인스턴스 타입
 

* 클래스가 인터페이스를 implements 할 때, 클래스의 인스턴스만 검사 => 생성자가 스태틱이기 때문에, 이 검사에 포함 X.
 
```
interface ClockConstructor {
  new (hour: number, minute: number);
}

interface ClockInterface {
  tick();
}

const Clock: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
      console.log("beep beep");
  }
} 
```
 다음 방식으로 static 타입도 검사
 
 
* 클래스처럼, 인터페이스들도 확장(extend)이 가능
 

인터페이스 타입이 클래스 타입을 확장하면, 클래스의 멤버는 상속받지만 구현은 상속받지 않는다. 
 
 기초 클래스의 private과 protected 멤버도 상속받습니다. 이것은 인터페이스가 private 혹은 protected 멤버를 포함한 클래스를 확장할 수 있다는 뜻이고, 
 
 인터페이스 타입은 그 클래스나 하위클래스에 의해서만 구현
 
 
 
 
### 인덱서블 타입 (Indexable Types)

 ```
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
 
 ```
 인덱스 서명을 지원하는 타입에는 두 가지가 있습니다: 문자열과 숫자.

두 타입의 인덱서(indexer)를 모두 지원하는 것은 가능하지만, 숫자 인덱서에서 반환된 타입은 반드시 문자열 인덱서에서 반환된 타입의 하위 타입(subtype)
 
=> js에서 string으로 변환해 처리하기 때문
 
 
 문자열 인덱스 시그니처는 "사전" 패턴을 기술하는데 강력한 방법이지만, 모든 프로퍼티들이 반환 타입과 일치하도록 강제
 
 ```
 interface NumberDictionary {
    [index: string]: number;
    length: number;    // 성공, length는 숫자입니다
    name: string;      // 오류, `name`의 타입은 인덱서의 하위타입이 아닙니다
}
 ```
 
 다음방식으로 개선(유니온)
 ```
 interface NumberOrStringDictionary {
    [index: string]: number | string;
    length: number;    // 성공, length는 숫자입니다
    name: string;      // 성공, name은 문자열입니다
}
 ```
 
 
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


```

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
```

생성자의 인수에 public을 사용하는 것은 그 인수의 이름으로 프로퍼티를 자동으로 생성하는 축약형

# types


* 불리언 (Boolean)

가장 기본적인 데이터 타입은 JavaScript, TypeScript에서 boolean 값이라고 일컫는 참/거짓(true/false) 값입니다.

* 숫자 (Number)

JavaScript처럼, TypeScript의 모든 숫자는 부동 소수 값입니다. 부동 소수에는 number라는 타입이 붙혀집니다.

TypeScript는 16진수, 10진수 리터럴에 더불어, ECMAScript 2015에 소개된 2진수, 8진수 리터럴도 지원합니다.

* 문자열 (String)

TypeScript에서는 텍스트 데이터 타입을 string으로 표현합니다. JavaScript처럼 TypeScript도 큰따옴표 (")나 작은따옴표 (')를 문자열 데이터를 감싸는데 사용합니다.

* 배열 (Array)

TypeScript는 JavaScript처럼 값들을 배열로 다룰 수 있게 해줍니다. 배열 타입은 두 가지 방법으로 쓸 수 있습니다. 첫 번째 방법은, 배열 요소들을 나타내는 타입 뒤에 []를 쓰는 것입니다:

```
let list: number[] = [1, 2, 3];
```

두 번째 방법은 제네릭 배열 타입을 쓰는 것입니다.

```
let list: Array<number> = [1, 2, 3];
```

* 튜플 (Tuple)

튜플 타입을 사용하면, 요소의 타입과 개수가 고정된 배열을 표현할 수 있습니다. 단 요소들의 타입이 모두 같을 필요는 없습니다. 예를 들어, number, string 이 쌍으로 있는 값을 나타내고 싶을 수 있습니다:

```
// 튜플 타입으로 선언
let x: [string, number];
// 초기화
x = ["hello", 10]; // 성공
// 잘못된 초기화
x = [10, "hello"]; // 오류

```

* 열거 (Enum)

JavaScript의 표준 자료형 집합과 사용하면 도움이 될만한 데이터 형은 enum입니다. C# 같은 언어처럼, enum은 값의 집합에 더 나은 이름을 붙여줄 수 있습니다.

*js엔 없다

* Any

생략

* Void

void는 어떤 타입도 존재할 수 없음을 나타내기 때문에, any의 반대 타입 같습니다. void는 보통 함수에서 반환 값이 없을 때 반환 타입을 표현하기 위해 쓰이는 것을 볼 수 있습니다:

void를 타입 변수를 선언하는 것은 유용하지 않은데, 왜냐하면 그 변수에는 null(--strictNullChecks을 사용하지 않을 때만 해당, 자세한 건 다음 섹션을 참고)또는 undefined 만 할당할 수 있기 때문입니다:


* Null and Undefined

기본적으로 null 과 undefined는 다른 모든 타입의 하위 타입니다. 이건, null과 undefined를 number 같은 타입에 할당할 수 있다는 것을 의미합니다.

하지만, --strictNullChecks를 사용하면, null과 undefined는 오직 any와 각자 자신들 타입에만 할당 가능합니다. (예외적으로 undefined는 void에 할당 가능합니다) 이건 많은 일반적인 에러를 방지하는

데 도움을 줍니다. 이 경우, string 또는 null 또는 undefined를 허용하고 싶은 경우 유니언 타입인 string | null | undefined를 사용할 수 있습니다.

* Never

never 타입은 절대 발생할 수 없는 타입을 나타냅니다. 예를 들어, never는 함수 표현식이나 화살표 함수 표현식에서 항상 오류를 발생시키거나 절대 반환하지 않는 반환 타입으로 쓰입니다. 

변수 또한 타입가드에 의해 아무 타입도 얻지 못하게 좁혀지면 never 타입을 얻게 될 수 있습니다.

never타입은 모든 타입에 할당 가능한 하위 타입입니다. 하지만 어떤 타입도 never에 할당할 수 있거나, 하위 타입이 아닙니다.(never 자신은 제외) 심지어 any 도 never에 할당할 수 없습니다.

// never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.


* 객체 (Object)

object는 원시 타입이 아닌 타입을 나타냅니다. 예를 들어, number, string, boolean, bigint, symbol, null, 또는 undefined 가 아닌 나머지를 의미합니다.


* 타입 단언 (Type assertions)

가끔, TypeScript보다 개발자가 값에 대해 더 잘 알고 일을 때가 있습니다. 대개, 이런 경우는 어떤 엔티티의 실제 타입이 현재 타입보다 더 구체적일 때 발생합니다.

타입 스크립트는 개발자가 필요한 어떤 특정 검사를 수행했다고 인지합니다.

타입 단언에는 두 가지 형태가 있습니다. 하나는, "angle-bracket" 문법입니다:
```
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```
다른 하나는 as-문법 입니다.
```
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```



reference

typescript 

https://typescript-kr.github.io/pages/tutorials/ts-for-the-new-programmer.html

