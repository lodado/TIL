
## 화면 크기 및 픽셀 수에 따른 렌더링 시간(rendering time)

![image](https://user-images.githubusercontent.com/40421183/131690950-457c8c24-b086-4cf1-a2bf-116563a8ae31.png)

- canvas 요소의 성능은 화면이 작거나, 픽셀 수가 많을 경우(>10k)에 좋습니다.

- svg 요소의 성능은 화면이 크거나, 픽셀 수가 적을 경우(<10k)에 좋습니다.

## 선택 기준 

![image](https://user-images.githubusercontent.com/40421183/131691077-ed983359-b1de-4880-bf13-6d5ce3694ad7.png)

즉, canvas는 3d 작업(애니메이션 등)에 유리하다.

svg는 정적이고 문서 작업에 어울린다.

### 결론

![image](https://user-images.githubusercontent.com/40421183/131691252-1ffc3b3f-d4b6-4353-8abf-29d535ea2308.png)

reference 

http://tcpschool.com/html/html5_graphic_canvasVsSvg
