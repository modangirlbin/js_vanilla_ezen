# 요소제어

## HTML 제어

### HTML요소를 객체로 생성하기
```javascript
var mytag = document.getElementById("id속성값");
```

### 획득한 객체의 내부에 대한 내용 접근
```javascript
// 내용 적용하기
mytag.innerHTML = "... 적용할 내용 ...";

// 적용된 내용 조회하기
var content = mytag.innerHTML;
```

### `<img>`요소 제어
```javascript
var myimg = document.getElementById("img요소의 id");

myimg.src = "이미지파일경로";
myimg.width = "200px";
myimg.height = "100px"
```

## CSS 제어

### 획득한 객체 CSS속성 접근
```javascript
// 내용 적용하기
mytag.style.css관련_프로퍼티 = "값";

// 적용된 내용 조회하기
var css = mytag.style.css관련_프로퍼티
```

> css관련_프로퍼티의 이름 규칙은 css에서 `-`로 표시되던 부분이 없어지고 대문자가 사용됨<br/>
> ex) [css] background-color  --> [js] backgroundColor


### 획득한 객체의 CSS클래스 접근
```javascript
// 내용 적용하기
mytag.className = "값";

// 적용된 내용 조회하기
var cls = mytag.className;
```