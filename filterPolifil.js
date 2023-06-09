Array.prototype.filter = function(cb){
    const temp = [];
    for(i = 0; i < this.length ; i++ ){
        if(cb(this[i]))
             temp.push(this[i]);
    }
    return temp ;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = arr.filter((num) => {
    return num >3;
})
console.log(filteredArray);


