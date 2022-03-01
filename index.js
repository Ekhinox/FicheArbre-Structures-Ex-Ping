import fetch from 'node-fetch';
let url = 'https://wikipedia.org';
async function testUrl(url){
    let start = new Date();
    let response = await fetch(url)
    let end = new Date();
    //    return end;
     console.log('ça marche');
     console.log(`${url} a mis ${end - start} ms à s'afficher`)
}
testUrl(url);