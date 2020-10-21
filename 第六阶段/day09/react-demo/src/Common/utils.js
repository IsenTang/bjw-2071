export function setStorage (key, data) {
   if(!key) return;
   localStorage.setItem(key, JSON.stringify(data));
}

export function getStorage (key) {
   if(!key) return;
   let res = localStorage.getItem(key);
   try {
      return JSON.parse(res);
   } catch (err) {
      return res;
   }
}