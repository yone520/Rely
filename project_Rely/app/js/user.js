/**
 * 设置cookie，本地设置cookie不成功，请起一个服务器
 * @param {*} name 
 * @param {*} value 
 * @param {*} day 
 */
export function setCookie(name, value, exdays) {
    let d = new Date();  
    d.setTime(d.getTime() + (exdays*24*60*60*1000));  
    let expires = "expires="+d.toUTCString();  
    document.cookie = name + "=" + escape(value) + "; " + expires;  
}

/**
 * 获取cookie，获取到的是一个数组，减值都在里面，请使用split分割得到自己想要的值
 * @param {*} name 
 */
export function getCookie(name) {
    if (document.cookie) {
        let arr = document.cookie.split("; ");
        let cookieValue = arr.filter((item, i, arr) => {
            return item.split("=")[0] == name;
        })
        return cookieValue.length ? cookieValue : false;
    } else {
        return false;
    }
}

/**
 * 传入你需要删除的cookie名字就可以了
 * @param {*} name 
 */
export function removeCookie(name) {
    setCookie(name, "", -1);
}

/**
 * 登录，返回promise
 * @param {*} username 
 * @param {*} password 
 */
export function Login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 请求登录接口，ret模拟的是返回的数据
            if (1) { // 代表请求成功
                let ret = {
                    code: "1",
                    msg: "登录成功啦",
                    username: "张三",
                    token: "asdfasdfasdfsadfasdf"
                }
                resolve(ret)
            } else {
                reject("登录失败鸟")
            }
        }, 1000)
    })
}

/**
 * 注册，返回promise
 * @param {*} args 
 */
export function Register(...args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // 请求注册接口,args是需要的所有参数，是一个数组
            if (1) { 
                let ret = {
                    code: "1",
                    msg: "注册成功"
                }
                resolve(ret)
            } else {
                reject("注册失败鸟")
            }
        })
    })
}

/**
 * 判断是否登录
 */
export function isLogin() {
    // 先判断是否存在token这个cookie
    if (getCookie("token")) {
        alert("存在token")
    } else {
        alert("不存在token")
    }
}