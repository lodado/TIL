# CRUD

Create(생성), Read(읽기), Update(갱신), Delete(삭제)

이러한 4개의 조작을 모두 할 수 없다면 그 소프트웨어는 완전 하다 할 수 없다.

![image](https://user-images.githubusercontent.com/40421183/129029558-941038e3-d7c5-4c7c-b466-bffe4cb3e7ad.png)


# DB 업데이트 방법

inplace update : 직접 업데이트

outplace update : 그 자리가 아닌 다른자리에 업데이트

(String 대부분 immutable한데 바꾸면 메모리 자리는 바뀌어서 '바뀌는것처럼 구현'하는거처럼 보면 되는것 같다)

Soft deletes: marking data as deleted, 나중 가비지컬렉션 같은게 필요

Hard deletes: performing a DELETE on a table

# 동시성 제어 

동시성 제어란 DBMS가 다수의 사용자 사이에서 동시에 작용하는 다중 트랜잭션의 상호간섭 작용에서 Database를 보호하는 것을 의미한다. 일반적으로 동시성을 허용하면 일관성이 낮아지게 되며 이를 그래프로 나타내면 아래와 같다.

![image](https://user-images.githubusercontent.com/40421183/129030896-f61be036-18a9-41b5-ad9f-3bebf611d9d3.png)

다수 사용자의 동시 접속을 위해 DBMS는 동시성 제어를 할 수 있도록 Lock 기능과 SET TRANSACTION 명령어 사용

동시성을 제어하는 방법에는 비관적 동시성 제어와 낙관적 동시성 제어

### 비관적 동시성 제어(Pessimistic Concurrency Control)

사용자들이 같은 데이터를 동시에 수정할 것이라고 가정 -> 세마포어

SELECT 시점에 Lock을 거는 비관적 동시성 제어는 시스템의 동시성을 심각하게 떨어뜨릴 수 있어서 

wait 또는 nowait 옵션과 함께 사용

### 낙관적 동시성 제어(Optimistic Concurrency Control)

사용자들이 같은 데이터를 동시에 수정하지 않을 것이라고 가정

데이터를 읽는 시점에 Lock을 걸지 않는 대신 수정 시점에 값이 변경됐는지를 반드시 검사

### MVCC(Multi-Version Concurrency Control, 다중 버전 동시성 제어)

사용자는 접근한 시점에서 데이터베이스의 Snapshot을 읽는다.


사용자가 데이터를 업데이트하면 이전의 데이터를 덮어 씌우는게 아니라 

새로운 버전의 데이터를 UNDO 영역에 생성한다. 대신 이전 버전의 데이터와 비교해서 변경된 내용을 기록한다.

이렇게 해서 하나의 데이터에 대해 여러 버전의 데이터가 존재하게 되고, 사용자는 마지막 버전의 데이터를 읽게 된다.

git이랑 비슷?

오라클의 롤백 세그먼트 -  업데이트문이 실행되면 기존 데이터 블록 내의 데이터 레코드를 

새로운 버전(New Version)으로 변경하고, 이전 버전(Old Version)을 별도의 저장소인 롤백 세그먼트에 보관

렉트 SCN과 데이터 블록의 SCN을 비교해 읽기 일관성(Consistent Read)이 필요하다고 판단되면 

롤백 세그먼트의 이전 버전을 읽어서 버퍼 캐시에 CR블록

한계 : ORA-1555(Snapshot too old)

### 장점 

일반적인 RDBMS보다 매우 빠르게 작동

사용하지 않는 데이터가 계속 쌓이게 되므로 데이터를 정리하는 시스템이 필요

데이터 버전이 충돌하면 애플리케이션 영역에서 이러한 문제를 해결해야 함

### 단점 

MVCC 모델은 하나의 데이터에 대한 여러 버전의 데이터를 허용하기 때문에 

데이터 버전이 충돌될 수 있으므로 애플리케이션 영역에서 이러한 문제를 해결

UNDO 블록 I/O, CR Copy 생성, CR 블록 캐싱 같은 부가적인 작업의 오버헤드 발생

대표적 -> 오라클, postgreSQL 등

### REDo, undo

redo 복구를 할때 사용자가 했던 작업을 그대로 다시 한다 - 복구 

undo 사용자가 했던 작업을 반대로 한다. 즉 사용자가 작업을 원상태로 돌린다. - 되돌리기

# RDBMS (관계형) 특성

페이지 단위 IO (부분 업데이트 가능)

clustering index

B+tree index로 효율적 레코드 검색

soft delete & outplace update에 가까움

동시성 높이고 트랜젝션 지원 -> MVCC 메커니즘 


# ACID

ACID(원자성, 일관성, 고립성, 지속성)

데이터베이스 트랜잭션이 안전하게 수행된다는 것을 보장하기 위한 성질

원자성(Atomicity) : 트랜잭션과 관련된 작업들이 부분적으로 실행되다가 중단되지 않는 것을 보장하는 능력

일관성(Consistency) : 트랜잭션이 실행을 성공적으로 완료하면 언제나 일관성 있는 데이터베이스 상태로 유지

독립성(Isolation) : 트랜잭션을 수행 시 다른 트랜잭션의 연산 작업이 끼어들지 못하도록 보장하는 것

지속성(Durability) : 성공적으로 수행된 트랜잭션은 영원히 반영되어야 함

네트워크 환경에서 ACID특성을 보장하는 것은 어렵다. 연결이 끊길 수도 있고 두 

사용자가 동시에 DB의 동일한 부분을 접근할 수도 있다


### Metadata

데이터에 관한 구조화된 데이터로, 다른 데이터를 설명해 주는 데이터
상위레벨에서 하위레벨 데이터에 대한 각종 정보(자원의 속성)를 담고있는 데이터

reference

crud, acid

https://ko.wikipedia.org/wiki/CRUD

mvcc 
https://mangkyu.tistory.com/53
데이터넷(http://www.datanet.co.kr)
