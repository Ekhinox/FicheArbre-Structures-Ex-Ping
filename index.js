import fetch from 'node-fetch';
let urlz = ['https://wikipedia.org','http://google.com','http://google.com','http://google.com','http://google.com'];

async function testUrl(url){
    let start = new Date();
    let response = await fetch(url)
    let end = new Date();
     console.log('ça marche');
     return(`${url} a mis ${end - start} ms à s'afficher`)
}

//let test = [];

//option 1 avec let test
//urlz.forEach(url => test.push(testUrl(url)));

//option 2 avec let test
/*urlz.forEach(async (url) => {
    const result = testUrl(url);
    test.push(result)
})*/
//console.log(test);

//Option 3 avec let test2 et .map 
let test2 = urlz.map(url => testUrl(url)); 


async function requestUrl(){
    let allPromise = await Promise.all(test2) //ou (test) si option 1 et 2
    return allPromise;
}

let resultat = await requestUrl();
console.log(resultat);