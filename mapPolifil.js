Array.prototype.map = function(cb){
    let temp = [];
    for(i = 0; i < this.length ; i++ ){
        const value = cb(this[i]);
        temp.push(value);
    }
    return temp;
}

const arr = [2,3,4,5,6];

const mappedArray =arr.map((num) => {
    return num * 2;
})

console.log(mappedArray);