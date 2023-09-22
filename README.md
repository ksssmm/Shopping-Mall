# ShoppingMall

![shoppingMall](/contents/shoppingMall-1.gif)

![shoppingMall](/contents/shoppingMall-2.gif)







- react를 이용한 쇼핑몰
- Redux를 이용한 상태 관리
- 파이어베이스를 이용한 인증 서비스로 로그인 기능 구현
- fakestoreapi를 이용한 상품 데이터 구현


----
로그인 기능을 구현할때 옛날 문법을 사용하여 애를 먹었다.

signInWithEmailAndPassword이 함수가 아니다라는 오류가 발생해서,

firebaseConfig 초기화 부터 npm 재설치등 오류를 잡기위해 많은 노력을 했다.

결국 서치를 통해 오류를 잡긴 했지만, 이 부분 때문에 상당한 시간이 걸렸다.

```
await auth.signInWithEmailAndPassword(email, password);->구버전
await signInWithEmailAndPassword(auth, email, password);->신버전
```
