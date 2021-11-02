# Form

## `<form>`요소의 객체 획득하기
### id속성값으로 접근하는 경우
```javascript
// form의 id속성값이 `form_id`인 경우
var myform = document.getElementById("form_id");
```
### name속성값으로 접근하는 경우
```javascript
// form의 name속성값이 `form_name`인 경우
var myform = document.form_name;
```

## 획득한 `<form>` 안의 `<input>`요소 접근
### id속성값으로 접근하는 경우
```javascript
var hello = document.getElementById("input_id");
```
### name속성값으로 접근하는 경우
```javascript
var myform = document.form_name;
var hello = myform.input_name;
```
name속성값을 사용하는 경우 아래와 같이 축약도 가능함.
```javascript
var hello = document.form_name.input_name;
```
## 획득한 `<input>`요소의 입력값 처리
```javascript
var myform = document.form_name;
var hello = myform.input_name;
hello.value = "hello world";	// 값의 설정
var msg = hello.value;			// 값의 조회
```

name속성값을 사용하는 경우 아래와 같이 축약도 가능함.
```javascript
document.form_name.input_name.value = "hello world";
var msg = document.form_name.input_name.value;
```

획득한 `<input>`요소에 대한 값의 입력여부 조회
```javascript
if (!document.form_name.input_name.value) {
	// 값이 입력되지 않은 경우의 처리
	alert("내용을 입력하세요.");
	document.form_name.input_name.focus();
	return;
}
```

## checkbox, radio의 제어
name속성이 동일한 요소들끼리 하나의 배열로 그룹화 됨.
```javascript
var foo = document.form1.myradio[0].value;
```

checked 프로퍼티를 사용하여 선택 여부를 조회하거나 선택 상태를 강제 설정 할 수 있음.
```javascript
// 선택 여부 검사
var foo = document.form1.myradio[0].chekcked;
if (foo) {
	... 선택된 경우의 처리 ...
}

// 강제 선택
document.form1.myradio[0].checked = true;
```

배열이라는 특성 때문에 반복문을 통한 제어가 가능.
```javascript
var checkbox = document.form_name.checkbox_name;
var count = 0;	// 선택된 항목의 수

for (var i=0; i<checkbox.length; i++) {
	if (checkbox[i].checked) {
		count++;
	}
}
```

## 드롭다운의 제어
- `<select>`태그로 표현되는 드롭다운 요소는 그 자체가 배열이며<br/>`<option>`태그들이 배열의 요소가 된다.
- 드롭다운 객체에 대한 selectedIndex는 선택된 요소의 배열 인덱스를 의미

```javascript
var dropdown = document.form_name.select_name;

// 특정 위치 강제 선택
dropdown.selectedIndex = 2;

// 현재 선택된 요소의 위치
var choice_index = dropdown.selectedIndex;

// 현재 선택된 요소의 value값
var choice_value = dropdown[choice_index].value;
```

주로 첫 번째 `<option>`요소는 선택을 요구하기 위한<br/>
안내문이 표시되는 경우가 많기 때문에<br/>
selectedIndex값이 0인 경우는 선택한 것으로 간주하지 않는다.

```javascript
if (dropdown.selectedIndex == 0) {
	... 선택되지 않은 경우의 처리 ...
}
```

## `<form>`의 reset, submit 처리

### reset
```javascript
document.form_name.reset();
```

### submit
- `<form>`요소의 action속성에 지정된 페이지로 사용자의 입력내용을 전송하는 기능.
- `<input type="submit"/>`요소를 클릭하거나 아래의 자바스크립트 구문의 호출을 통해서 구현된다.
```javascript
document.form_name.submit();
```

### submit 이벤트
`<form>`요소에 onsubmit 이벤트 적용후 return false; 처리

```html
<form name="form_name" method="post/get" action="웹프로그램 URL"
	onsubmit="JS함수(); return false;">
</form>
````

submit 이벤트를 통해서 JS함수를 호출할 경우 <br/> JS함수에서는 맨 마지막에 강제로 submit 처리를 해야만 한다.

```javascript
function JS함수() {
	... 입력값 검사 ...

	document.form_name.submit();
}
```

> JS함수 안에 에러가 있을 경우 그 이후 부분은 실행되지 않기 때문에<br/>페이지가 새로고침되는 현상이 발생한다.<br/> 이 경우 한 블록씩 코드를 지워가면서 에러가 발생하는 위치를 찾아야 한다.
