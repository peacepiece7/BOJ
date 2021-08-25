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
