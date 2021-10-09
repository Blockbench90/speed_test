const a = [{SCSS: 101520, JavaScript: 72842, CSS: 5015, HTML: 1050},


     {SCSS: 101520, JavaScript: 72842, CSS: 5015, HTML: 1050}]


let c = a.reduce((acum, item) => {
    const keys = Object.keys(item)
    console.log(keys);
    keys.forEach(el => {
        if(acum[el]){
            acum[el].push(item[el])
        } else {
            acum[el] = [item[el]]
        }
    })
    
    return acum
},{})

for(let i in c){
    let count = 0
    c[i].map(item => {
        count += item
    })
    c[i] = count
}

console.log(c);