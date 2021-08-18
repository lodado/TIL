
# React Virtual Dom

browser dom 은 browser object이다. 

virtual Dom 은 React object이다.

- Browser Dom의 경량화

- in-memory tree data structure of plain JS object

- browser dom을 조작하는거보다 virtual dom을 조작하는게 상당히(extremely) 빠르다.

- created compleltely from scratch on every setState

![image](https://user-images.githubusercontent.com/40421183/129897424-80b49051-d35d-4c38-8ca5-38841136b5d9.png)

영향받은 부분만 update한다.

Diffing algorithm will detect those nodes that are changed

=> 이때 "key"를 사용한다. (you can hint child elements as stable)

### React Fiber: new reconciliation algorithm in React 16

– Incremental rendering

### Header and Footer

모든 홈페이지에는 header랑 footer가 들어가는데 

그때마다 만드는게 아니고 미리 만들어뒀다 필요할때마다 불러오면 쓸만하다.

ex) 라이브러리 쓰기

```
yarn add font-awesome@4.7.0
yarn add bootstrap-social@5.1.1
```

이후 index.js 파일에
```
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
```
그 후 header와 footer 작성 후 불러올곳에 불러오면 완성!



reference

https://www.coursera.org/learn/front-end-react/lecture/adbYS/react-virtual-dom

react fiber

https://codesquad-yoda.medium.com/%EB%82%A8%EB%8B%A4%EB%A5%B8-%EA%B0%9C%EC%84%A0%EB%B0%A9%EB%B2%95%EC%9D%84-%EB%8B%A4%EC%8B%9C-%EB%B3%B4%EC%97%AC%EC%A4%80-%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81%EC%9D%98-react-fiber-80b7ca5bd9bb
