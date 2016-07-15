# jquery-dice-menu
Fixed location floating menu (expandable)

Usage:
```css
<!-- CSS : Dice Menu Style Sheet -->
<link rel="stylesheet" href="dice-menu.min.css">
```

```javascript
<!-- JavaScript -->
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<!-- jQuery extension `Dice Menu` -->
<script src="dice-menu.min.js"></script>
```

```html
<!-- List : Dice Menu Item List -->
<body>
	<!-- Dice Menu -->
	<ul class="dice-menu">
		<li><span class="fa fa-circle-o-notch"></span></li>
		<!-- internal link -->
		<li><span class="fa fa-comment-o" href="#para2"></span></li>
		<li><span class="fa fa-envelope" href="#para3"></span></li>
		<!-- external link (blank page) -->
		<li><span class="fa fa-coffee" href="https://www.gmail.com" target="_blank"></span></li>
		<!-- external link (self page) -->
		<li><span class="fa fa-cc-amex" href="https://www.yahoo.com"></span></li>
		<li><span class="fa fa-google-wallet" href="https://www.hotmail.com"></span></li>
		<li><span class="fa fa-money" href="https://www.gmail.com"></span></li>
		<li><span href="https://www.gmail.com">12</span></li>
		<li><span href="https://www.gmail.com">34</span></li>
	</ul>
...
```