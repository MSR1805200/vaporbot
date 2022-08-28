const { GOOGLE_IMG_SCRAP , GOOGLE_QUERY } = require('google-img-scrap');

async function pegarImagens(){

    let lista_urls = [];

    let requisicao = await GOOGLE_IMG_SCRAP({search: "vaporwave",  limit: 365});

    let imagens = requisicao.result;

    for(let i = 0; i < imagens.length; i++){
      lista_urls.push(imagens[i].url);
    };

    let numero_aleatorio = Math.floor(Math.random() * imagens.length) ;

    return new Promise( (resolve, reject) => {

        if( lista_urls[numero_aleatorio] !== undefined ){
          resolve(lista_urls[numero_aleatorio]);
        }else{
          reject("Erro ao carregar a imagem");
        }
    });

};

module.exports = pegarImagens;
