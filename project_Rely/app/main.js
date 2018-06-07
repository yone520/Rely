require("babel-polyfill");
import { setCookie, getCookie, removeCookie, isLogin, Register} from "./js/user"
import { getParams, uploadImage } from "./js/browser"
// document.onclick = function() {
//     let t = prompt("请输入要获取的cookie名称");
//     if (t) {
//         console.log(getCookie(t))
//     }
// }

// document.getElementById("app").onclick = function(e) {
//     removeCookie("name2",-1);
//     e.stopPropagation();
// }

// uploadImage("app1")

// isLogin()

document.onclick = function() {
    Register("李永辉","123123","男").then(ret => {
        console.log(ret)
    }).catch(err => {
        console.log(err)
    })
}