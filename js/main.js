var splash, home_menu_restaurante, bebidas, sandwichs, hamburguesas, ver_pedido, iniciarSesion, crearMiCuenta, ingresarComoInvitado, login; /*Estas son las secciones face,*/
			var btn_bebidas, btn_sandwichs, btn_hamburguesas, btn_ver_pedido, btn_appi, btns_volver, btns_iniciarSesion, btns_crearMiCuenta, btn_ingresarComoInvitado; /*btns_volver es un ARRAY de botones*/
			var secciones;
			var flipCheck = 0;

			window.onload = ()=>{
				crearReferencias();
				agregarEventos();
				setTimeout(irAlHome_menu,1500);
			}

			function crearReferencias(){
				splash = document.getElementById("splash");
				home_menu_restaurante = document.getElementById("home_menu_restaurante");
				bebidas = document.getElementById("bebidas");
				sandwichs = document.getElementById("sandwichs");
				hamburguesas = document.getElementById("hamburguesas");
				/*ver_pedido = document.getElementById("ver_pedido");
				login = document.getElementById("login");
				face = document.getElementById("face");*/
				
				/*iniciarSesion = document.getElementById("iniciarSesion");
				crearMiCuenta = document.getElementById("crearMiCuenta");
				ingresarComoInvitado = document.getElementById("ingresarComoInvitado");*/
				secciones = [splash, home_menu_restaurante, bebidas, sandwichs, hamburguesas, /* ver_pedido, login, iniciarSesion, crearMiCuenta, ingresarComoInvitado*/];
				btn_bebidas = document.getElementById("btn_bebidas");
				btn_sandwichs = document.getElementById("btn_sandwichs");
				btn_hamburguesas = document.getElementById("btn_hamburguesas");
				//btn_ver_pedido = document.getElementById("btn_ver_pedido");
				/*btn_app = document.getElementById("btn_app");*/
				/*btn_iniciarSesion = document.getElementById("btn_iniciarSesion");
				btn_crearMiCuenta = document.getElementById("btn_crearMiCuenta");*/
				btn_ingresarComoInvitado = document.getElementById("btn_ingresarComoInvitado");
				btns_volver = document.querySelectorAll(".volver");
				//btn_appi = document.querySelectorAll(".inicio");
				

			}

			function agregarEventos(){
				btn_bebidas.addEventListener("click",()=>{irA(bebidas);});
				btn_sandwichs.addEventListener("click",()=>{irA(sandwichs);});
				btn_hamburguesas.addEventListener("click",()=>{irA(hamburguesas);});
				//btn_ver_pedido.addEventListener("click",()=>{irA(ver_pedido);});
				/*btn_app.addEventListener("click",()=>{irA(face);});*/
				/*btn_iniciarSesion.addEventListener("click",()=>{irA(iniciarSesion);});
				btn_crearMiCuenta.addEventListener("click",()=>{irA(crearMiCuenta);});
				btn_ingresarComoInvitado.addEventListener("click",()=>{irA(ingresarComoInvitado);});*/
				
				//btn_volver.addEventListener("click",()=>{irA(home_menu_restaurante);});

				for (var i=0;i<=3;i++) 
				{
					//console.log(btns_volver,i);
					
					btns_volver[i].addEventListener("click",()=>{irA(home_menu_restaurante);});
					
				}
				
				/*
				for (var i=0;i<=6;i++) 
				{
					//console.log(btns_volver,i);
					btn_appi[i].addEventListener("click",()=>{irA(ver_pedido);});
				}
				*/
				
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
			function mostrar() {
			  document.getElementById("sidebar").style.width="200px";
			  document.getElementById("btn-main").style.marginLeft="200px";
			  document.getElementById("open").style.display="none";
			}

			function ocultar() {
			  document.getElementById("sidebar").style.width="0";
			  document.getElementById("btn-main").style.marginLeft="0";
			  document.getElementById("open").style.display="inline";
			}


			/*Aqui comienza carrito de compras*/
			


			/*Aqui comienza carrito de compras*/