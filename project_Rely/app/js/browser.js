/**
 * 获取一切关于浏览器的信息，和浏览器相关的功能
 */

class Img {
    constructor(...args) {
        if (args[0]) {
            this.init(args[0])
        } else {
            throw "请传入input[file]框的id值"
        }
    }
    init (id) {
        let d = document.getElementById(id);
        d.addEventListener("change", function(e) {
            let file = e.target.files[0];
            let reader,url,image;
            if (!/image\/\w+/.test(file.type)) {
                e.target.outerHTML = e.target.outerHTML;
                alert("请上传图片！");return;
            }
            reader = new FileReader();
            reader.readAsDataURL(file)
            reader.onload = () => {
                image = new Image();
                image.src = reader.result;
                document.getElementsByClassName(id)[0].appendChild(image)
            }
        })
    }
}

/**
 * 获取浏览器参数
 */
export function getParams(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    let r = window.location.search.substr(1).match(reg);
    if (r) {
        return unescape(r[2]);
    } else {
        return null;
    }
}

/**
 * 上传图片
 * @param {*} id 
 */
export function uploadImage(id) {
    new Img(id);
}