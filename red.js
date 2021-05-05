let arr = ["jedan", "dva"];
let token= "+";


function join(arr,token){
    const zbroj = arr.reduce((akumulator, curr) => akumulator + token + curr);
    console.log(zbroj);
};
join(arr,token);

let array = [2,3,1]
let povrce = ["mrkva", "rajčica", "salata", "krumpir"]
let m = array.map(value=>povrce[value])
console.log(m)


const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
