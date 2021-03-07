var splash, home_menu_restaurante, perros, sandwichs, hamburguesas, ver_pedido; /*Estas son las secciones*/
			var btn_perros, btn_sandwichs, btn_hamburguesas, btn_ver_pedido, btns_volver; /*btns_volver es un ARRAY de botones*/
			var secciones;

			window.onload = ()=>{
				crearReferencias();
				agregarEventos();
				setTimeout(irAlHome_menu,1500)
			}

			function crearReferencias(){
				splash = document.getElementById("splash");
				home_menu_restaurante = document.getElementById("home_menu_restaurante");
				perros = document.getElementById("perros");
				sandwichs = document.getElementById("sandwichs");
				hamburguesas = document.getElementById("hamburguesas");
				ver_pedido = document.getElementById("ver_pedido");
				secciones = [splash, home_menu_restaurante, perros, sandwichs, hamburguesas, ver_pedido];
				btn_perros = document.getElementById("btn_perros");
				btn_sandwichs = document.getElementById("btn_sandwichs");
				btn_hamburguesas = document.getElementById("btn_hamburguesas");
				btn_ver_pedido = document.getElementById("btn_ver_pedido");
				btns_volver = document.querySelectorAll(".volver");
			}

			function agregarEventos(){
				btn_perros.addEventListener("click",()=>{irA(perros);});
				btn_sandwichs.addEventListener("click",()=>{irA(sandwichs);});
				btn_hamburguesas.addEventListener("click",()=>{irA(hamburguesas);});
				btn_ver_pedido.addEventListener("click",()=>{irA(ver_pedido);});
				//btn_volver.addEventListener("click",()=>{irA(home_menu_restaurante);});

				for (var i=0;i<=3;i++) {
					//console.log(btns_volver,i);
					btns_volver[i].addEventListener("click",()=>{irA(home_menu_restaurante);});
				}
				
				//btns_volver.addEventListener("click",()=>{irA(home_menu_restaurante);});

				//for(var i=0; i<=2;i++){

					//console.log(btns_volver, i); //Para probar si es correcto
					//btns_volver[i].addEventListener("click",()=>{irA(home_menu_restaurante);});
				//}

			}



			function ocultarSecciones(){
				for (i in secciones){
					secciones[i].classList.add("ocultar");
				}

			}

			function irA(seccion){
				ocultarSecciones();
				seccion.classList.remove("ocultar");
			}


			function irAlHome_menu(){
				/*alert("Cambiar de seccion");*/
				splash.classList.add("ocultar");
				home_menu_restaurante.classList.remove("ocultar");

			}
