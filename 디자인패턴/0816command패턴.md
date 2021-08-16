# command 패턴 (Behavioral)

어떤 객체(A)에서 다른 객체(B)의 메서드를 실행하려면 그 객체(B)를 참조하고 있어야 하는 의존성이 발생

커맨드 패턴을 적용하면 의존성을 제거

![image](https://user-images.githubusercontent.com/40421183/129578685-dd9bd7ae-801c-4204-86b4-faf12a4e38d9.png)

개인적으로는 뭔가 대단한게 있나? 했는데 의존성 제거를 위한 간단한 방법을 사용한다.

그냥 코드로 보는게 빠르다

![image](https://user-images.githubusercontent.com/40421183/129578821-a2e8f392-9707-4a3f-bdc5-51f35ce3eae1.png)


talk()함수 안은 이런식으로 되어서 커맨드의 메소드를 실행한다.

커맨드는 인터페이스로 형식을 명시해 정의해야한다.

![image](https://user-images.githubusercontent.com/40421183/129578879-31a57ba6-6eec-4bb1-8e17-0515d13a84c1.png)

이 방식은


```
   public void talk(){
        switch(this.mode){
            case "heater":
                this.heater.powerOn();
                break;
            case "lamp":
                this.lamp.turnOn();
                break;
        }

    }
```

talk를 계속 command마다 붙여나가면 OCP(확장에 대해 열려 있어야 하고, 수정에 대해서는 닫혀 있어야 한다)를 위배해서 

커맨드 패턴을 활용한다 한다.










reference 

https://victorydntmd.tistory.com/295
