export function getClassAttr() {
    let class_attr_ar = [];
    for (let param of arguments) {
        if(param !== undefined && param !== false) {
            class_attr_ar.push(param);
        }
    }

    return class_attr_ar.join(' ');
}

export function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]'
}