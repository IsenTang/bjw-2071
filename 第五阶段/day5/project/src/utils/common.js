function setStorage (key, data) {
    if(!key) return
    localStorage.setItem(key, JSON.stringify(data))
}

function getStorage (key) {
    if(!key) return
    let res = localStorage.getItem(key);
    try {
        return JSON.parse(res)
    } catch (err) {
        return res
    }
}

function returnString (str) {
    return '字符串' + str
}

export default {
    setStorage,
    getStorage,
    returnString
}