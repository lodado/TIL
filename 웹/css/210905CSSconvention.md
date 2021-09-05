## 공부 동기? 

css 나 html 네이밍 규칙이라던지 뭔가 효율적인 방법이 없을까 고민했는데

팀원분이 이걸 보셨길래 이번에 공부해보려고 한다.

# General Style

<br>

### Protocol

```https://```를 명시한다.

```
<!-- Not recommended: omits the protocol -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- Not recommended: uses HTTP -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

<!-- Recommended -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
```

###  Indentation

스페이스바 2개, 혼용 금지!

```
<ul>
  <li>Fantastic
  <li>Great
</ul>
```

###  Capitalization

모두 소문자

```
<!-- Not recommended -->
<A HREF="/">Home</A>

<!-- Recommended -->
<img src="google.png" alt="Google">

/* Not recommended */
color: #E5E5E5;

/* Recommended */
color: #e5e5e5;
```

### Trailing Whitespace

화이트스페이스(빈칸)는 예기치 않은 오작동을 불러올 수 있어서 가능한 제거한다.

# General Meta rules
<br>
###  Encoding

Use UTF-8 (no BOM).

```
<meta charset="utf-8">
```

### Comments

Explain code as needed, where possible.

### Action Items

Mark todos and action items with TODO.

나중 해야될일을 TODO로 표시하는듯 싶다.

# HTML style rules

<br>

### Document Type

Use HTML5

(It’s recommended to use HTML, as text/html. Do not use XHTML. XHTML, as application/xhtml+xml => 모든 브라우저들이 xhtml이랑 호환이(지원이) 잘 안됨)

### HTML Validity

Use valid HTML where possible.
```
<!-- Not recommended -->
<title>Test</title>
<article>This is only a test.

<!-- Recommended -->
<!DOCTYPE html>
<meta charset="utf-8">
<title>Test</title>
<article>This is only a test.</article>
```

Use valid HTML code unless that is not possible due to otherwise unattainable performance goals regarding file size.

가능하면 형식을 맞춰 정확하게 작성하라는듯 싶다. 특히 <!DOCTYPE html> 이랑 meta charset을 명시해주는것이 좋다. 

### Semantics

Use HTML according to its purpose.

For example, use heading elements for headings, p elements for paragraphs, a elements for anchors, etc.

용도에 맞게 써라는 권장인듯 싶다.
```
<!-- Not recommended -->
<div onclick="goToRecommendations();">All recommendations</div>

<!-- Recommended -->
<a href="recommendations/">All recommendations</a>
```

특히 html 기능으로 처리 가능한건 굳이 다른거 쓰지 마라? 라고 예시 보여준것 같다. 

### Multimedia Fallback

```
<!-- Not recommended -->
<img src="spreadsheet.png">

<!-- Recommended -->
<img src="spreadsheet.png" alt="Spreadsheet screenshot.">
```

모든 브라우저가 호환성이 맞지 않을텐데 그때를 대비하여 altnative 를 명시해두라는것 같다.
특히 비디오, 오디오 등에서 호환이 안되 작동이 안될경우를 대비해 txt로 description을 적어두자.

### Separation of Concerns
```
<!-- Not recommended -->
<!DOCTYPE html>
<title>HTML sucks</title>
<link rel="stylesheet" href="base.css" media="screen">
<link rel="stylesheet" href="grid.css" media="screen">
<link rel="stylesheet" href="print.css" media="print">
<h1 style="font-size: 1em;">HTML sucks</h1>
<p>I’ve read about this on a few sites but now I’m sure:
  <u>HTML is stupid!!1</u>
<center>I can’t believe there’s no way to control the styling of
  my website without doing everything all over again!</center>
  
<!-- Recommended -->
<!DOCTYPE html>
<title>My first CSS-only redesign</title>
<link rel="stylesheet" href="default.css">
<h1>My first CSS-only redesign</h1>
<p>I’ve read about this on a few sites but today I’m actually
  doing it: separating concerns and avoiding anything in the HTML of
  my website that is presentational.
<p>It’s awesome!
```

structure(html), style(css), scripting(js) 세가지를 분리하고 try to keep the interaction between the three to an absolute minimum.

In addition, keep the contact area as small as possible by linking as few style sheets and scripts as possible from documents and templates.

약간 어려운데 html, css, js를 명확히 분리하고 link되는곳을 최소화하라는것 같다. 원소를 바꾸는것보다 style, script를 바꾸는 비용이 더 싸다고 한다.

링크를 최소화 하란거는 링크 과정에서 불필요한 오버헤드가 많은가..? 추측된다


### Entity References
```
<!-- Not recommended -->
The currency symbol for the Euro is &ldquo;&eur;&rdquo;.

<!-- Recommended -->
The currency symbol for the Euro is “€”.
```

특수문자는 ```&mdash;, &rdquo;, or &#x263a;```, assuming the same encoding (UTF-8) 같이 utf-8로 처리할수 있는 문자로 표현

special meaning in HTML (like < and &) 는 예외

### Optional Tags

Omit optional tags (optional).

The HTML5 specification defines what tags can be omitted.

=>html5는 head, html 등 생략가능한데 장점은 파일크기 줄이기..? 선택사항인것 같다.

```
<!-- Recommended -->
<!DOCTYPE html>
<title>Saving money, saving bytes</title>
<p>Qed.

```
### type Attributes

Omit type attributes for style sheets and scripts.

HTML5 implies text/css and text/javascript as defaults. This can be safely done even for older browsers.
 
<!-- Not recommended -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css"
    type="text/css">
<!-- Recommended -->
<link rel="stylesheet" href="https://www.google.com/css/maia.css">

물론 css나 js가 아닌 특이한걸 쓸땐 명시한다.





reference

구글 html/css 스타일 컨벤션

https://google.github.io/styleguide/htmlcssguide.html
