
function twittarAlgo(){

  let parametros_post = {status: "Iniciarei em breve as postagens #vaporwave"};

  cliente.post("statuses/update", parametros_post, (error,objeto,response) => {
    if(error) throw error;
    console.log("Enviado!");
  } );

}

setInterval(twittarAlgo, 1000 * 60 * 5);


let parametros = {
  q: "Lula since:2022-08-08",
  count: 10
};

let tweets_texto = []

cliente.get("search/tweets",parametros, (error, objeto, response) => {
  if(error) throw error;

  let tweets = objeto.statuses;

  for(let i =0; i< tweets.length; i++){
    tweets_texto.push(tweets[i].text)
  }
  console.log(tweets_texto);
} );
