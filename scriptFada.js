	const contexto = document.querySelector('section');
	let escolha;
		
		contexto.innerHTML = 	"Você está fora da base e precisa chegar até o destino para desativar a bomba."+
					"Lembre-se, Você tem uma arma e uma faca!"+
					"<p> qual caminho você escolhe? DIREITA ou ESQUERDA?"+
					"<button> escolha </button>";
		document.querySelector('button').onclick = () => {
			escolha = prompt('DIREITA ou ESQUERDA?');

				if(escolha.toLowerCase() === "direita"){
					contexto.innerHTML =	"Certo, você se deparou com um bando de goblins!"+
								"O que vai fazer? ATACAR ou CORRER?"+
								"<button> escolha </button>";
					document.querySelector('button').onclick = () => {
						escolha = prompt('ATACAR ou CORRER?');
						if(escolha.toLowerCase() === "atacar"){
							contexto.innerHTML = 	"Você tem duas armas, qual delas você vai usar?"+
										"<button id='atirar'>Atirar</button> ou <button id='esfaquear'>esfaquear</button>";
							document.querySelector("#atirar").onclick = () => {

								contexto.innerHTML = 	"<p> você matou todos eles, e chegou no seu destino</p>"+
											"É preciso matar o monstro suicida que guarda a bomba para ninguém desativar enquanto a contagem está sendo feita, para que os cridores dela consigam fugir a tempo."+
											"<p>o que vai fazer? ATACAR ou CORRER?</p>"+
											"<button> escolha </button>";
								document.querySelector('button').onclick = () => {
									escolha = prompt('ATACAR ou CORRER?');
										if(escolha.toLowerCase() === "atacar"){
											contexto.innerHTML = "Qual arma usar??"+
												"<button id='atirar'>Atirar</button> ou <button id='esfaquear'>esfaquear</button>";
										document.querySelector('#atirar').onclick = () => {
											contexto.innerHTML = "você matou o mostro e dastivou a bomba"+
												"<h1> FIM DE JOGO </h1>"+
												"<button><a href='index.html'> OK</a> </button>";
										}
										document.querySelector('#esfaquear').onclick = () => {
											contexto.innerHTML = "você tentou matar o monstro, mas não consegiu"+
												"Tente novamente!<button> <a href='index.html'> tentar</a> </button>";
											
										}
										}else if(escolha.toLowerCase() === "correr"){
											contexto.innerHTML = "você não conseguiu fugir, o monstro te matou"+
													"<h1>GAME OVER</h1>"+"<button> ok </button>";
											document.querySelector('button').onclick = () => {
												location.reload();
											}
										}
								
								}
							}
							document.querySelector('#esfaquear').onclick = () => {
								contexto.innerHTML = "Não dá pra esfaquear um grupo de goblins armados!"+
											"<button><a href='index.html'> OK </a></buuton>";
							}
						}else if(escolha.toLowerCase() === "correr"){
							contexto.innerHTML = "Você tentou fugir, mas os goblins começaram a atrirar!"+
										"<h1>GAME OVER</h1>"+
										"<button> jogar novamente </button>";
							document.querySelector('button').onclick = () => {
										location.reload();
							}
						}
					}
				}else if(escolha.toLowerCase() === "esquerda"){
					contexto.innerHTML = 'você deu de cara com um bando de goblins furiosos e não conseguiu fugir.'+
								"<h1> GAME OVER </h1>"+
								"<button><a href='index.html'> OK </a></button>";
				}
		}