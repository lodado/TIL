# 타인 원격 remote에서 fork후 push하고 다시 받아오기

우선 fork 후 타인의 원격 레포지토리에서 클론을 한다.


```
git clone -b {브랜치 이름} --single-branch https://github.com/{본인_아이디}/{저장소 아이디}
```

그 후 브랜치를 생성한다.

나중 PR날릴때 충돌관리 잘하려면 브랜치 생성해서 하는게 낫다. 

```
git checkout -b 생성하고 싶은 브랜치이름
```

내 로컬에서 작업후 내 fork 레포지토리에 작업물을 올린다.

```

add . 

git commit -m "~~~" 혹은 git commit 

git push origin 브랜치이름

```

PR을 날린 후 타인 원격 레포지토리에서 merge가 잘된지 확인한다.

그 후 그 타인 레포지토리와 연결한다.
저장소 별칭은 보통 upstream을 쓴다.

이때 생성한 브랜치가 아닌 본래 main이라던지 git checkout -b 생성 당시의 브랜치로 되돌아가서 실행한다.

```
git remote add -t {본인_아이디} {저장소_별칭} base_저장소_url

```
git remote -v 로 연결됬나 확인


원격 정보 받아오기 

```

git fetch upstream 브랜치이름 

```

동기화

```
git rebase upstream/javajigi
```

* 충돌이 일어나면 알아서 손질

문제가 생기면 최후의 수단으로 cherry-pick을 사용한다.


# cherry-pick 실행

```
  git cherry-pick b8ffcad(가져 가고 싶은 커밋넘버)
```

# 언제쓰나?

rebase나 merge 도중 원하는 commit만 가져오고 싶을때


<h3> 체리픽 커밋은 다른 브랜치를 내가 작업한 브랜치로 합치는 커밋 </h3>


```
  get reset --hard 2312.. (롤백하고 싶은 커밋 넘버)
  
  git cherry-pick 4352....(넣고싶은 커밋 넘버
  ...
  ...
  git cherry-pick -m 1 23123... (merge의 경우 merge 앞 head에서 이렇게 처리) 
  
  git push ~~

```

# git log 와 branch 정보를 그래프로 볼 수 있는 명령어
```
git log --graph
```

혹은 소스트리를 쓰자!



reference

merge & rebase

https://github.com/code-squad/codesquad-docs/blob/master/codereview/README.md

체리픽

https://medium.com/react-native-seoul/git-cherry-pick-%EC%82%AC%EC%9A%A9%EB%B2%95-fe1a3346bd27
