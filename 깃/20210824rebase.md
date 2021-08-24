### remote branch 삭제하는 방법

git push origin --delete utility

# Rebase와 Merge의 차이점

Git에서 한 브랜치에서 다른 브랜치로 합치는 방법은 Merge와 Rebase

### merge

![image](https://user-images.githubusercontent.com/40421183/130629590-819442ce-1c06-47c1-971e-562858fb6a74.png)

이때 가장 쉬운 방법은 공통 조상인 c2에서 merge하는 방법 (3-way Merge)

충돌을 관리해줘야 한다

![image](https://user-images.githubusercontent.com/40421183/130629838-45119202-ca2d-4c6c-9524-6378f18409cf.png)


### rebase

![image](https://user-images.githubusercontent.com/40421183/130629590-819442ce-1c06-47c1-971e-562858fb6a74.png)

똑같은 상황에서 experiment 브랜치로 이동해 master를 base삼아 Rebase 


![image](https://user-images.githubusercontent.com/40421183/130630221-2c14ca0d-c1e9-42c7-a236-5cf52eb2078d.png)



내부에서는 master가 base가 되고, C3과 C4의 차이를 임시 저장하는 공간에 저장합니다. 이 임시저장 공간을 Patch라고 합니다.

base가 되는 master에 Patch들이 적용

![image](https://user-images.githubusercontent.com/40421183/130630193-5cf77328-45e8-429c-8342-724ab724ad5e.png)


공통 커밋(C2)에서 시작해서 현재 체크아웃한 experiment 브랜치가 가리키는 커밋까지 diff를 차례대로 만들어 Patch에 저장

experiment브랜치가 master브랜치를 가리키게 함

C3에 Patch를 순서대로 적용

즉, 일종의 되감기라고 할 수 있다.

![image](https://user-images.githubusercontent.com/40421183/130630372-e5d14b16-8bae-4d07-93a9-185a6e932285.png)

Merge의 결과에서의 C5가 위 사진의 C4'는 내용이 같다.


##팁?

언제 사용할지 모르겠다면 push하기전에만 rebase를 사용



reference 

https://velog.io/@kwonh/Git-Rebase%EB%9E%80



