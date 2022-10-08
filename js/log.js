import {Valid} from './valid.min.js';
console.log("log.js works");
document.querySelector(".check").addEventListener("click",test);
function test(e){
    var valid, obj, atbt;
    atbt = e.target.getAttribute("data-id");
    switch (atbt){
        case "login":
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
            break;
        case "signup":
            obj = {
               "name":"signup",
               "request":["html"],
               "class":"default",
               "input":[
                  {
                      "class":"name"
                  },
                  {
                      "class":"email"
                  },
                  {
                      "class":"password"
                  },
                  {
                      "class":"re-password"
                  }
                ]
            }
            break;
        default:
            console.log("data-id not active");
            break;
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