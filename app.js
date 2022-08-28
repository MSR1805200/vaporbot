
let Twitter = require('twitter');

let config = require("./config");

let imagem = require("./buscador_imagens");

let cliente = new Twitter(config);

async function postarImagem(){

  let img = await imagem();

  let postagem = await cliente.post("statuses/update", {status: img } )

  return postagem;
}

function rodarCodigo(){
  postarImagem()
  .then( (resultado) => console.log("postagem enviada") )
  .catch( (erro) => console.log(erro) );
}

setInterval(postarImagem, 86400000);

//setInterval(postarImagem, 1000 * 60 * 2);
