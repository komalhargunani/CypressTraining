const map = new Map();

const key1='mystr', key2='mystr2', key3 ='mystr3'

map.set(key1,"val1")
map.set(key2,"val2")
map.set(key3,"val3")


/*for(let[key, value] of map){
    console.log('key is' , key,value)
}*/

map.forEach((value, key )=>{

    console.log('key is' , key)
    console.log('value is', value)
    
})

console.log(map)
