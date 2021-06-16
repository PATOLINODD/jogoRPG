	const contexto = document.querySelector('section');
	let escolha;
		
		contexto.innerHTML = 	"Você está fora da base e precisa chegar até o destino para desativar a bomba."+
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
							contexto.innerHTML = 	"Você tem dois poderes, qual deles você vai usar?"+
										"<button id='chamas'>chamas</button> ou <button id='eletrocutar'>eletrocutar</button>";
							document.querySelector("#chamas").onclick = () => {

								contexto.innerHTML = 	"<p> você matou todos eles, e chegou no seu destino</p>"+
											"É preciso matar o monstro suicida que guarda a bomba para ninguém desativar enquanto a contagem está sendo feita, para que os cridores dela consigam fugir a tempo."+
											"<p>o que vai fazer? ATACAR ou CORRER?</p>"+
											"<button> escolha </button>";
								document.querySelector('button').onclick = () => {
									escolha = prompt('ATACAR ou CORRER?');
										if(escolha.toLowerCase() === "atacar"){
											contexto.innerHTML = "Qual poder atacar??"+
												"<button id='chamas'> chamas </button> ou <button id='eletrocutar'>eletrocutar</button>";
										document.querySelector('#chamas').onclick = () => {
											contexto.innerHTML = "você matou o mostro e dastivou a bomba"+
												"<h1> FIM DE JOGO </h1>"+
												"<button> OK </button>";
											document.querySelector('#chamas').onclick = () => {
												location.onload('index.html');
											}
										}
										document.querySelector('#eletrocutar').onclick = () => {
											contexto.innerHTML = "você matou o mostro e dastivou a bomba"+
												"<h1> FIM DE JOGO </h1>"+
												"<button><a href='index.html'> OK </a> </button>";
											
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
							document.querySelector('#eletrocutar').onclick = () => {
								let vidaGoblins = 5;
								alert('agora você está prestes a eletrocutar esses goblins!');

								while(vidaGoblins > 0){
									alert('vida dos goblins '+ vidaGoblins);
									vidaGoblind -= 1;
								}
								contexto.innerHTML = 	"<p> você matou todos eles, e chegou no seu destino</p>"+
											"É preciso matar o monstro suicida que guarda a bomba para ninguém desativar, enquanto a contagem está sendo feita, para que os cridores dela consigam fugir a tempo."+
											"<p>o que vai fazer? ATACAR ou CORRER?</p>"+
											"<button> escolha </button>";
								document.querySelector('button').onclick = () => {
									escolha = prompt('ATACAR ou CORRER?');
										if(escolha.toLowerCase() === "atacar"){
											contexto.innerHTML = "Qual poder atacar??"+
												"<button> chamas </button> ou <button>eletrocutar</button>";
										}else if(escolha.toLowerCase() === "correr"){
											contexto.innerHTML = "você não conseguiu fugir, o monstro te matou"+
													"<h1>GAME OVER</h1>"+"<button> ok </button>";
											document.querySelector('button').onclick = () => {
												location.reload();
											}
										}
								}
							}
						}
					}
				}else if(escolha.toLowerCase() === "esquerda"){
					contexto.innerHTML = 'você deu de cara com um bando de goblins furiosos e não conseguiu fugir.'+
								"<h1> GAME OVER </h1>"+
								"<button><a href='index.html'> OK </a></button>";
				}
		}