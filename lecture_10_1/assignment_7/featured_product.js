
function shop(arr){
    arr.sort()
 
    const map = {}

    let max = 0;
    let products = []

    for (const item of arr) {
        map[item] = (map[item] || 0)+1
        
    }

    for (const key in map) {
            if(max < map[key]){
                max = map[key]
            }
       
    }

    for ([key,values] of Object.entries(map)){

    if(max == values ){
        products.push(key)
    }
    }

    return products[products.length-1]

}

const arr = ['yellowShirt', 'redHat', 'blackShirt', 'bluePants', 'redHat','pinkHat', 'blackShirt', 'yellowShirt',
'greenPants', 'greenPants','greenPants']
const result = shop(arr)
console.log(result)

greenPants
