# 1110 더하기 사이클

input = 26일때

```
26 -> 8(2+6) -> 68
68 -> 14(6+8) -> 84
84 -> 12(8+4) -> 42
42 ->  6(4+2) -> 26
```

단어로 접근하지말고 숫자로 접근할 것

- 아래와 같이 작성시, currentNumber에 맞춰 예외처리를 해야함
- 결국 시간 초과 뜸
  `currentNumber[0] + currentNumber[1]`

- 이렇게 작성해야 함
  `(currentNumber % 10) * 10, Math.floor(currentNumber /10)`

# 2562 백준 문제 풀이 이슈

```
9개의 서로 다른 자연수가 주어질 때,
이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
```

- 자연수를 받아올 떄

변수 input에 자연수 배열을 할당할 떄, 문자열을 받아옴 = 틀림

`array.map(Number)` 해줘야 함

- 출력할 떄

문자 타입이 string이다 = 틀림

- index에 숫자를 더할 때

최댓값이 8번쨰 index일 경우, array.indexOf("최댓값") = 7임

이떄, `index = array.indexOf("최댓값") + 1` 하면 틀림

마지막 출력할때 `console.log(index + 1)`해야 맞음.. ^^? 왤까..
