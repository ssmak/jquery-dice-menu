<h1 align="center">jquery-dice-menu</h1>

<h5 align="center">Expandable and Fixed location side menu bar.</h5>
<br />
<div align="center">
  <a href="https://nodei.co/npm/jquery-dice-menu/">
    <img src="https://nodei.co/npm/jquery-dice-menu.png?compact=true">
  </a>
</div>
<br />

## History
It's a big challenge for the website navigation on mobile which is limited and ralatively small screen size and tapped by finger.<br />
**jquery-dice-menu** targets on maxmize the screen usage by collapsing the menu to a small size dice and can be expanded to a full menu bar on demand.

<br /><br />
<div align="center">
  <a href="https://paypal.me/ssmak">
    <img src="https://img.shields.io/badge/Donate-PayPal-green.svg" alt="PayPal Donation" />
  </a>
  <br />
  <a href="https://paypal.me/ssmak">
    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" alt="PayPal" />
  </a>
</div>

## Features
By supporting the optional attributes, you can customize the menu by:
#### 1. Layout (Default: column)
Menu items will be arranged on a row or column.
#### 2. Reverse Order (Default: false)
Menu items can be arranged in reverse order.
#### 3. Location (Default: right)
Menu can be sticked on top, right, bottom or left.
#### 4. Offset (Default: 35%)
If the menu is sticked on left/right, then the offset is used in the top: ?(px|%). Otherwise, it's left: ?(px|%)
#### 5. Hints (Default: true)
Hints can be enabled or disabled.
#### 6. Hints Order (Default: bottom)
The location of the hints.
#### 7. Menu toggle status (Default: false)
Is the menu opened by default?

## Demonstration on CodePen
https://codepen.io/ssmak/pen/jKMaeV

## Installation + Use
1. Install to your project as dependency from NPM (https://www.npmjs.com/package/jquery-dice-menu)
``` bash
npm install jquery-dice-menu --save
```
2. Load the dependency
``` html
<!-- // HEAD -->
<!-- put below stylesheets between the 'head' tag in below order -->
<!-- font awesome 4 - optional, but I use it in my test page. -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<!-- jquery-dice-menu, css(default) - provide default rendering -->
<link rel="stylesheet" href="/node_modules/jquery-dice-menu/dist/jq.dice-menu.min.css">
<!-- // BODY -->
<!-- jquery-dice-menu - put below script tag above the close tag of 'body' -->
<script src="/node_modules/jquery-dice-menu/dist/jq.dice-menu.js"></script>
```
3. Construct your dice menu
``` html
<!-- Dice Menu, we use font-awesome 4 here -->
<ul class="jq-dice-menu" default-open="false" layout="column" reverse="false" snap-to="right" offset="35%" show-hints="true" hints-order="footer">
	<div class="jq-items">
		<!-- first element as a switch button -->
		<li state="close"><span class="fa fa-th-large"></span></li>
		<!-- page anchor to paragraph 2 -->
		<li><span class="fa fa-header" href="#para2" hint="para2"></span></li>
		<!-- page anchor to paragraph 3 -->
		<li><span class="fa fa-arrows-v" href="#para3" hint="para3"></span></li>
		<!-- open a page in a new window -->
		<li><span class="fa fa-google-plus" href="https://plus.google.com/discover" target="_blank" hint="Google Plus"></span></li>
		<!-- open a page in current window -->
		<li><span class="fa fa-github" href="https://github.com" hint="Github"></span></li>
		<!-- page link without hint -->
		<li><span class="fa fa-yahoo" href="https://hk.yahoo.com"></span></li>
		<!-- link to phone number -->
		<li><span class="fa fa-phone" href="tel:+85299887766" hint="Call to hotline"></span></li>
		<!-- link to email address -->
		<li><span class="fa fa-envelope" href="mailto:donotreply@github.com" hint="Email for support"></span></li>
		<!-- page anchor to the top of the page -->
		<li><span class="fa fa-angle-double-up" href="#top"></span></li>
	</div>
	<!-- hints of button -->
	<div class="jq-hints">
		<div class="hint">&nbsp;</div>
	</div>
</ul>
```

## Test
A demo page is located in the /test folder. You can test it with the live reload by using lite-server which can be installed by
``` bash
npm install lite-server -g
cd /project_root && lite-server
```

## Customization
By supporting the optional attributes, you can customize the menu by:
``` html
<ul class="jq-dice-menu" default-open="false" layout="column" reverse="false" snap-to="right" offset="35%" show-hints="true" hints-order="footer"></ul>
```
#### 1. Layout (Default: column, Supported: row | column)
Menu items will be arranged on a row or column.
#### 2. Reverse Order (Default: false, Supported: true | false)
Menu items can be arranged in reverse order.
#### 3. Location (Default: right, Supported: top | right | bottom | left)
Menu can be sticked on top, right, bottom or left.
#### 4. Offset (Default: 35%, Supported: ?px | ?%)
If the menu is sticked on left/right, then the offset is used in the top: ?(px|%). Otherwise, it's left: ?(px|%)
#### 5. Hints (Default: true, Supported: true | false)
Hints can be enabled or disabled.
#### 6. Hints Order (Default: footer, Supported: header | footer)
The location of the hints.
#### 7. Menu toggle status (Default: false, Supported: true | false)
Is the menu opened by default?

## License
MIT
