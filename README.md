# valid.js


# what is valid js

valid.js is the simple javascript framework made for HTML form validation during submitting a request.


## Examples index.html

```html

<!- form name attributes is important for search perfect form ->
<form action="recive.link" method="POST" name="login">
  <div>
    <label for="name">Email:</label>
    <input type="email" name="email" id="" minlength="5" maxlength="32" required="required">
    <p class="email"></p>
    <!- class requir for error message->
  </div>
  <div>
     <label for="name">Password:</label>
     <input type="password" name="password" id="" minlength="4" maxlength="32" required="required">
     <p class="password"></p>
  </div>                              
  <div>
      <!- class check for click event don't use submit button->
    <a class="check" data-id="login" name="submit" value="submit">submit</a>
  </div>
  <!- class defaut calass allways use inside in form ->
  <div class="default"></div>
</form>
<script type="module" src="log.js"></script>
```

## javascript log.js example 1.

```javascript

import {Valid} from './valid.min.js';
/*-----import link-----*/
document.querySelector(".check").addEventListener("click",test);
function test(e){
    var valid, obj, atbt;
    atbt = e.target.getAttribute("data-id");
    obj = {
            "name":"login",
            "request":["html"],
            "class":"default",
            "input":[
                {
                    "class":"email"
                },
                {
                    "class":"password"
                }
            ]
        }
    valid = new Valid(obj);
    valid.check();
}

```

# HTML Rolls

1. set 3 "attributes" inside the form that is (action, method, named).


```html

<form action="recive.link" method="POST" name="login"></form>


```

2. don't use input type submit inside in the form.

```html
<input type="submit">
```
3. for error messages use a "p" tag with a "class" attribute.


```
<div>
    <input type="email" name="email" id="" minlength="5" maxlength="32" required="required">
    <p class="email"></p>
    <!- class requir for error message->
</div>
```

4. set a blank tag "div" or anything with a "class" attributes.

```
<div class="default"></div>
```
bring together.

```html
<form action="link" method="POST" name="login">
       <input type="email" name="email" id="" minlength="5" maxlength="32" required="required">
       <p class="email"></p>
       <input type="password" name="password" id="" minlength="4" maxlength="32" required="required">
       <p class="password"></p>                             
    <div>
       <a class="check" data-id="login" name="submit" value="submit">submit</a>
    </div>
  <div class="default"></div>
</form>
```
## JavaScript Rolls

1. create object. attribute names set in the object.

```javascript

obj = {
    "name":"login"
}

```

2. set each of the CSS class like this. for error mesage set.

```javascript

obj = {
    "class":"default",
    "input":[
        {
            "class":"email"
        },
        {
            "class":"password"
        }
    ]
}

```
3. set request type. there have two type request [ajax or html].

```javascript
obj = {
    "request":["html"]
}
```

if create html request use example 1.

or

```javascript
obj = {
    "request":["ajax"]
}
```
bring together.

```javascript

obj = {
    "name":"login",
    "request":["html"],
    "class":"default",
    "input":[
        {
            "class":"email"
        },
        {
            "class":"password"
        }
    ]
}

```

## javascript example 2 log.js for ajax request.

```javascript

function test(e){
    var valid, obj, atbt;
    atbt = e.target.getAttribute("data-id");
    obj = {
        "name":"login",
        "request":["ajax"],
        "class":"default",
        "input":[
            {
                "class":"email"
            },
            {
                "class":"password"
            }
        ]
    }
    valid = new Valid(obj);
    var output= valid.check();
    var opt = JSON.stringify(output);
    console.log(output);
    if(output != undefined){
        console.log("that is define");
        if(output.valid==true){
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.open(output.method,output.action,true);
            xmlhttp.getResponseHeader('Content-Type','application/json');
            xmlhttp.onload = function(){
                console.log(this.response);
            }
            xmlhttp.send(opt);
        }
    }
}

```
