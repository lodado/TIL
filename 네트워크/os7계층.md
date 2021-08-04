### Base64 인코드/디코드

바이너리 데이터를 텍스트 문자열 형식으로 바꾸는 가장 고전적인 방식은 Base64 인코딩/디코딩 방식이다. 여전히 메일이나 웹에서 사용하는 MIME 형식에 Base64 방식을 사용한다. 통계적으로 33-36% 정도 오버헤드가 발생할 수 있다.

알고리즘

https://base64.guru/learn/base64-algorithm/decode

구현?

https://github.com/lodado/TIL/blob/main/%EC%9B%B9/base64.js



### UUID v4

컴퓨터 정보 중에 고유한 값을 부여하기 위해서 사용하는 128비트 ID를 말한다. RFC 4122 규격 표준안으로 만들어졌다.

# OSI 7 계층

![image](https://user-images.githubusercontent.com/40421183/128204858-415d4001-0d2a-4590-929e-a508e957f3f0.png)

각 계층은 독립적, 상위 계층은 하위 계층을 통해 통신 수행

### 7	응용 계층

(Application Layer)	Data	텔넷(Telnet), 구글 크롬, 이메일, 데이터베이스 관리	HTTP, SMTP, FTP, Telnet, DNS, modbus, SIP, AFP, APPC, MAP	

계층 7은 최종적으로 사용자가 볼 수 있는 유일한 계층으로 모든 네트워크 활동의 기반이 되는 인터페이스를 제공

### 6	표현 계층

(Presentation Layer)	Data	인코딩, 디코딩, 암호화, 복호화	ASCII, MPEG, JPEG, MIDI, EBCDIC, XDR, AFP, PAP	

표현 계층(Presentation Layer, 6계층)에서는 응용 계층으로부터 전달받은 데이터를 읽을 수 있는 형식으로 변환=> 인코딩, 디코딩 제공 

### 5	세션 계층

(Session Layer)	Data		NetBIOS, SAP, SDP, PIPO, SSH, TLS, NWLink, ASP, ADSP, ZIP, DLC	

세션 계층(Session Layer, 5계층)에서는 두 컴퓨터 간의 대화나 세션을 관리하며, 포트(Port)연결

반이중/전이중인지도 체크 

계층에서는 TCP/IP 세션을 만들고 없애고 통신하는 사용자들을 동기화하고 오류 복구 명령들을 일괄적으로 다루며 통신을 하기 위한 세션을 확립, 유지, 중단하는 작업을 수행한다.

### 4	전송 계층

(Transport Layer)	TCP-Segment, UDP-datagram	특정 방화벽 및 프록시 서버	TCP, UDP, SPX, SCTP, NetBEUI, RTP, ATP, NBP, AEP, OSPF	게이트웨이

전송 계층(Transport Layer, 4계층)의 주목적은 하위 계층에 신뢰할 수 있는 데이터 전송 서비스를 제공

전송 계층은 연결형 프로토콜과 비 연결형 프로토콜을 모두 사용한다. 전송 계층의 예로는 특정 방화벽이나 프록시 서버.

가장 까다로운 계층이라 모든 OS계층 능력을 사용한다.

### 3	네트워크 계층

(Network Layer)	Packet	라우터	IP, IPX, IPsec, ICMP, ARP, NetBEUI, RIP, BGP, DDP, PLP	라우터

네트워크 계층(Network Layer, 3계층)에서는 2홉 이상의 통신(멀티 홉 통신)을 담당한다. OSI 7 계층에서 가장 복잡한 계층 중 하나

라우팅 : 어떤 네트워크 안에서 통신 데이터를 짜여진 알고리즘에 의해 최대한 빠르게 보낼 최적의 경로를 선택하는 과정

### 2	데이터링크 계층

(DataLink Layer)	Frame	MAC 주소, 브리지 및 스위치	Ethernet, Token Ring, AppleTalk, PPP, ATM, MAC, HDLC, FDDI, LLC, ALOHA	브릿지, 스위치

데이터링크 계층(DataLink Layer, 2계층)은 물리적인 네트워크를 통해 데이터를 전송하는 수단

1홉 통신이라고도 한다

주목적은 물리적인 장치를 식별하는 데 사용할 수 있는 주소 지정 체계를 제공 - 브리지 및 스위치 그리고 이더넷 등

### 1	물리 계층

(Physical Layer)	Bit	전압, 허브, 네트워크 어댑터, 중계기 및 케이블 사양, 신호 변경(디지털,아날로그)	10BASE-T, 100BASE-TX, ISDN, wired, wireless, RS-232, DSL, Twinax	허브,
리피터

물리 계층(Physical Layer, 1계층)은 OSI 모델의 맨 밑에 있는 계층으로서, 네트워크 데이터가 전송되는 물리적인 매체

모든 하드웨어의 물리적 및 전기적 특성 고려 

물리의 영역..

# TCP 3-way handshaking 


TCP 규격은 전송 계층에서 흐름 제어와 혼잡 제어 역할을 담당한다.

client SYN 전달,

server SYN 받고 SYN+ACK 전달

clinet ack 보내고 바로 데이터 전송

데이터 다 전송할때까지 일정한 단위(세그먼트)로 나누어서 보내고 각각 ack를 받는다

+ 4-way

여기에 종료 확인용으로 fin을 추가한다.

세션이 종료될때 fin을 보내 더이상 보낼게 없다는것을 서버에 확인시킨다.

다만 바로 끝나진 않는다. 

** 공식 문서에 따르면

보통 ack를 보낼때 상대의 끝 세그먼트 바로 앞 주소를 보낸다고 알고 있는데

그건 변형 기법이고 원래는 ack가 1씩 증가하는 방식으로 작동한다고 함.

https://datatracker.ietf.org/doc/html/rfc793#page-30

# 정지 - 대기 

(하나씩 주고받음)

# 슬라이딩 윈도우

윈도우의 크기 = (가장 최근 ACK로 응답한 프레임의 수) - (이전에 ACK 프레임을 보낸 프레임의 수)

윈도우의 크기만큼 전송 

# Go-Back-n ARQ (GBn ARQ)

잘못된 패킷부터 다시 쭉 보내는 방법

# Selective-Reject(SR) ARQ

잘못된 것만 보내기

*정보 저장하기 위해서 추가 cost 



reference 

base 64

https://en.wikipedia.org/wiki/Base64

7계층

http://wiki.hash.kr/index.php/OSI_7_%EA%B3%84%EC%B8%B5

패킷 보내는 방법

https://goodgid.github.io/Error-Flow-Control/
