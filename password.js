//key to password
const holder =[7,3,2]
//
const check = [0,1,2,3,4,5,6,7,8,9]
let collect = []

for(i=0; i<holder.length; i++){
    let store = holder[i]
    for(h=0; h<check.length;){
        let checker=check[h]
        if(store===check[h]){
            collect.push(checker)
            break;
        }else{
            h++
        }
    }
}
console.log(collect)