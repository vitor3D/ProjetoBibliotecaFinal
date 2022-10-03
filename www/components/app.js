window.onload = ()=>{
    const url = 'https://virtuallibrary.profrodolfo.com.br/src/components/livro.php';
    const insert = document.querySelector('.dados');
    
    function ExibirAcervo(){
         fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
            		insert.innerHTML+= `
                        <div class="productBox">
                            <div class="bookBox">
                                <img src="${json[i].capa}">
                                <h2>${json[i].titulo}</h2>
                            </div>
                            <div class="down">
                                <div class="btnBox">
                                    <button>Ver Mais</button>
                                </div> 
                            </div>
                        </div>
                	`;
            }
        }).catch();
    }
        ExibirAcervo();
      header.style.display = "none";
        
}


            