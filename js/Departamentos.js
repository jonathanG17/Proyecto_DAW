/*------------------------Declaracion de las variables he inicio del index--------------------------*/
window.addEventListener('load', map, false);

var body = document.getElementById('cuerpo');
var departa=new Array();



/*------------------------UTILIZACION DE DOM--------------------------*/

document.getElementById('d1').addEventListener("click",function(){
depar1();
},false);

document.getElementById('d2').addEventListener("click",function(){
depar2();
},false);

document.getElementById('d3').addEventListener("click",function(){
depar3();
},false);

document.getElementById('d4').addEventListener("click",function(){
depar4();
},false);

document.getElementById('d5').addEventListener("click",function(){
depar5();
},false);

document.getElementById('d6').addEventListener("click",function(){
depar6();
},false);

document.getElementById('d7').addEventListener("click",function(){
depar7();
},false);

document.getElementById('d8').addEventListener("click",function(){
depar8();
},false);

document.getElementById('d9').addEventListener("click",function(){
depar9();
},false);

document.getElementById('d10').addEventListener("click",function(){
depar10();
},false);

document.getElementById('d11').addEventListener("click",function(){
depar11();
},false);

document.getElementById('d12').addEventListener("click",function(){
depar12();
},false);

document.getElementById('d13').addEventListener("click",function(){
depar13();
},false);

document.getElementById('d14').addEventListener("click",function(){
depar14();
},false);

document.getElementById('cont').addEventListener("click",function(){
contac();
},false);


/*------------------------Declaracion de todas las funciones--------------------------*/



/*------------------------Funcion del mapa que se muestra en la pestaña inicio--------------------------*/
function map(){
	var inicio="";

	inicio+=" <div id=\"mapa\" class=\"center-block\" >";
	inicio+="<iframe src=\"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15505.310742994896!2d-89.17536115!3d13.69859275!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ssv!4v1504836662147\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen align=\"center\" ></iframe>";
	inicio+="</div>";

body.innerHTML = inicio;

}


/*------------------------Funciones de los 14 departamentos--------------------------*/

function depar1(){

	var dep1="";

	dep1+="<div id=\"principal\" >";
	dep1+="<h1>Santa Ana</h1>";
	dep1+="<p>Santa Ana es un departamento ubicado en la zona occidental de El Salvador. Su cabecera es la ciudad de Santa Ana que cuenta con aproximadamente una población de 245,421 habitantes. El Departamento fue creado en 1855 durante la presidencia de José María San Martín.";
	dep1+="</p>";
	dep1+="<img  id=\"fotos\" src=\"img/santa_ana.jpg\">";
	dep1+=" <h2>Municipios</h2>";
	dep1+="<li>Candelaria de la Frontera</li>";
	dep1+="<li>Chalchuapa</li>";
	dep1+="<li>Coatepeque</li>";
	dep1+="<li>El Congo  </li>";
	dep1+="<li>El Porvenir</li>";
	dep1+="<li>Masahuat</li>";
	dep1+="<li>Metapán</li>";
	dep1+="<li>San Antonio Pajonal </li>";
	dep1+="<li>San Sebastián Salitrillo</li>";
	dep1+="<li>Santa Ana</li>";
	dep1+="<li>Santa Rosa Guachipilín</li>";
	dep1+="<li>Santiago de la Frontera</li>";
	dep1+="<li>Texistepeque</li>";
	dep1+="<h2>Cabezera departamental</h2>";
	dep1+="<p>Santa Ana es una ciudad salvadoreña, cabecera del municipio, departamento, distrito y sede de la diócesis homónimos; y es la ciudad principal de la zona occidental, y segunda ciudad en importancia de El Salvador, ubicada a 64 km de la capital estatal, San Salvador.";
	dep1+="</p>";
	dep1+="<p>El municipio de Santa Ana tiene una población estimada de 264 091 habitantes para el año 2013, ocupando el segundo lugar en población. Para su administración se divide en 34 cantones y 312 caseríos,6​ mientras que la propia ciudad se divide en 12 barrios y varias colonias.7";
	dep1+="</p>";
	dep1+="<h2>Turismo</h2>";
	dep1+="<p>La ciudad cuenta con parques acuáticos y balnearios, tal como: el Turicentro Sihuatehuacán el cual se encuentra al Oriente de la ciudad, siendo administrado por el Instituto Salvadoreño de Turismo y es uno de los más tradicionales destinos turísticos del país;94​ al norte de la ciudad se encuentran los balnearios de Apantéos y Apanchacal,95​ al oriente de la ciudad se encuentra el centro turístico Sapoapa96​ (este centro turístico y los balneario de Apantéos y Apanchacal son administrados por la alcaldía municipal).</p>";
	dep1+="<img id=\"fotos\" src=\"img/turismo-en-santa-ana.jpg\">";
	dep1+="</div>";
	dep1+="<script src=\"js/jquery-3.2.0.min.js\"></script>";
	dep1+="<script src=\"js/main.js\"></script>  ";
	
		body.innerHTML = dep1;
	

		}

function depar2(){

	var dep2="";

	dep2+=" <div id=\"principal\" >";
	dep2+="<h1>Ahuachapán</h1>";
	dep2+=" <p>El departamento de Ahuachapán es el más occidental de los 14 departamentos en los que está dividida la República de El Salvador. Su cabecera, la ciudad de Ahuachapán se encuentra a 100 km de San Salvador (capital de la república). El departamento tiene una extensión de 1.239,60 km². Colinda al norte con el departamento de Santa Ana , al noreste y al este con el departamento de Jutiapa de Guatemala, al sur con el Océano Pacífico y al oeste con el departamento de Sonsonate.</p>";
	dep2+="<img id=\"fotos\" src=\"img/ahuachapan.jpg\">";
	dep2+="<h2>Municipios</h2>";
	dep2+="<li>Ahuachapán</li>";
	dep2+="<li>Apaneca</li>";
	dep2+="<li>Atiquizaya</li>";
	dep2+="<li>Concepción de Ataco</li>";
	dep2+="<li>El Refugio</li>";
	dep2+="<li>Guaymango</li>";
	dep2+="<li>Jujutla</li>";
	dep2+="<li>San Francisco Menéndez</li>";
	dep2+="<li>San Lorenzo</li>";
	dep2+="<li>San Pedro Puxtla</li>";
	dep2+="<li>Tacuba</li>";
	dep2+="<li>Turín</li>";
	dep2+="<h2>Cabezera departamental</h2>";
	dep2+="<p>";
	dep2+="El municipio de Ahuachapán es la capital del departamento de Ahuachapán y una de las ciudades más importantes de la zona occidental de El Salvador.</p>";
	dep2+="<p>Ahuachapán fue fundado en el siglo V por indios mayas de la tribu pokomames, y sometida en el siglo XV por belicosos pipiles de los izalcos. Gradualmente la región fue invadida por los blancos.";
	dep2+="</p>";
	dep2+="<p>El 11 de febrero de 1862 obtuvo su título de ciudad por una orden legislativa publicada en la \"Gaceta Oficial\" del 22 de febrero de 1862.4​";
	dep2+="</p>";
	dep2+="<p>El 9 de febrero de 1869 obtuvo el título de capital departamental.</p>";
	dep2+="<h2>Turismo</h2>";
	dep2+="<p>Ahuachapán cuenta con varios sitios turísticos, como por ejemplo Los Ausoles, Laguna el Espino,5​ las Lagunas del Llano y de Morán o los saltos de Atehuecillas y de Malacatiupán. Dentro de los puntos de interés en la ciudad, se cuenta con la Plaza Mayor, constituida por el Parque Central, conocido como Parque La Concordia, el edificio de la Alcaldía, moderna estructura con un cierto aire de \"art deco\", reconstruida en la década de los 50´s, la Iglesia de \"La Parroquia de La Asunción\", hermosa edificación de estilo colonial con más de 100 años de antigüedad, y el nuevo punto de la ciudad, el \"Pasaje La Concordia\". contiguo a la Iglesia. El Pasaje fue recientemente rescatado y remodelado por la Alcaldía de la localidad, siendo una hermosa área peatonal con preciosos y coloridos [murales], una bellísima fuente luminosa que hace las delicias de las familias que desean descansar o simplemente \"ver pasar gente\", o tomar una deliciosa taza de \"café de altura\", cultivado en las fincas aledañas (calidad de exportación), acompañado de un delicioso postre o croissant, muffin o algún platillo típico en cualquiera de los pequeños restaurantes, cafés y hostales de los alrededores, los cuales son ideales para conocer la ciudad a pie o a bordo de un \"torito\" -pequeños vehículos motorizados tipo taxi que acomodan 2 o 3 personas.</p>";
	dep2+="<img id=\"fotos\" src=\"img/ahuchapan2.jpg\">";
	dep2+=" </div>";
	dep2+="<script src=\"js/jquery-3.2.0.min.js\"></script>";
	dep2+="<script src=\"js/main.js\"></script>";


	body.innerHTML = dep2;

		}

function depar3(){

	var dep3="";

	dep3+="<div id=\"principal\" >";
	dep3+="<h1>Sonsonate</h1>";
	dep3+="<p>Sonsonate es un departamento de El Salvador cuya cabecera es el municipio homónimo.Sonsonate es una antigua provincia de la Capitanía General de Guatemala que obtuvo su independencia de España en 1821 y que a partir de 1824 junto con la provincia de San Salvador formaron el país que hoy es llamado El Salvador.";
	dep3+="</p>";
	dep3+="<img  id=\"fotos\" src=\"img/descarga.jpg\">";
	dep3+="<h2>Municipios</h2>";
	dep3+="<li>Acajutla</li>";
	dep3+="<li>Armenia</li>";
	dep3+="<li>Caluco</li>";
	dep3+="<li>Cuisnahuat</li>";
	dep3+="<li>Izalco</li>";
	dep3+="<li>Juayúa</li>";
	dep3+="<li>Nahuizalco</li>";
	dep3+="<li>Nahulingo</li>";
	dep3+="<li>Salcoatitán</li>";
	dep3+="<li>San Antonio del Monte</li>";
	dep3+="<li>San Julián</li>";
	dep3+="<li>Santa Catarina Masahuat</li>";
	dep3+="<li>Santa Isabel Ishuatán</li>";
	dep3+="<li>Santo Domingo de Guzmán</li>";
	dep3+="<li>Sonsonate</li>";
	dep3+="<li>Sonzacate</li>";
	dep3+="<h2>Cabezera departamental</h2>";
	dep3+="<p>Sonsonate es una ciudad y municipio del departamento homónimo, del cual es también su cabecera. Tiene una población estimada de 72 158 habitantes para el año 2013.5​La localidad se fundó con el nombre de «Villa de la Santísima Trinidad» en el año 1553, en una zona productora de cacao. El año 1821 formaba parte del territorio de Guatemala, pero en 1823 se anexó a El Salvador. La celebración de la Semana Santa en Sonsonate se considera parte del patrimonio religioso del país.";
	dep3+="</p>";
	dep3+="<h2>Turismo</h2>";
	dep3+="<p>En la zona existe la denominada Ruta de las Flores recorrido que incluye la visita a poblados ricos en tradiciones de este departamento y Ahuachapán. Tales municipios incluyen a Nahuizalco, Salcoatitán, Juayúa, Apaneca, Concepción de Ataco y Tacuba.1​Está también la Ruta de los Naranjos que ofrece diversas actividades de montaña, uno de los grandes atractivos turísticos es el complejo natural \"Parque nacional los volcanes\" que comparte con el departamento de Santa Ana. Sonsonate es llamada la cuna del montañismo Salvadoreño debido a su situación geográfica en la cordillera Apaneca-Lamatepec, los volcanes Izalco y San Marcelino están dentro de su jurisdicción y el arrecife de coral llamado \"Los Cóbanos\".</p>";
	dep3+="<img id=\"fotos\" src=\"img/sonsonatet.jpg\">";
	dep3+="</div>";
	dep3+="<script src=\"js/jquery-3.2.0.min.js\"></script>";
	dep3+="<script src=\"js/main.js\"></script> ";
	
	body.innerHTML = dep3;

		}

function depar4(){

	var dep4="";

	dep4+="<div id=\"principal\" >";
	dep4+="<h1>Chalatenango</h1>";
	dep4+=" <p>Chalatenango es un departamento de El Salvador. Su cabecera departamental es Chalatenango, se encuentra ubicado al norte de la capital del país, San Salvador, fronterizo con Honduras. En este departamento se ubica el cerro El Pital con 2730 m de altitud sobre el nivel del mar, el punto más elevado del país. El clima más frío de El Salvador tiene lugar en estas alturas.";
	dep4+="</p>";
	dep4+="<img id=\"fotos\" src=\"img/Chalatenango.jpg\">";
	dep4+="<h2>Municipios</h2>";
	dep4+="<li>Agua Caliente</li>";
	dep4+="<li>Arcatao</li>";
	dep4+="<li>Azacualpa</li>";
	dep4+="<li>Cancasque</li>";
	dep4+="<li>Chalatenango (ciudad)</li>";
	dep4+="<li>Citalá</li>";
	dep4+="<li>Comapala</li>";
	dep4+="<li>El Carrizal</li>";
	dep4+="<li>El Paraíso</li>";
	dep4+="<li>La Laguna</li>";
	dep4+="<li>La Palma</li>";
	dep4+="<li>La Reina</li>";
	dep4+="<li>Las Flores</li>";
	dep4+="<li>Las Vueltas</li>";
	dep4+="<li>Nombre de Jesús</li>";
	dep4+="<li>Nueva Concepción</li>";
	dep4+="<li>Nueva Trinidad</li>";
	dep4+="<li>Ojos de Agua</li>";
	dep4+="<li>Potonico</li>";
	dep4+="<li>San Antonio de la Cruz</li>";
	dep4+="<li>San Antonio Los Ranchos</li>";
	dep4+="<li>San Fernando</li>";
	dep4+="<li>San Francisco Lempa</li>";
	dep4+="<li>San Francisco Morazán</li>";
	dep4+="<li>San Ignacio</li>";
	dep4+="<li>San Isidro Labrador</li>";
	dep4+="<li>San Luis del Carmen</li>";
	dep4+="<li>San Miguel de Mercedes</li>";
	dep4+="<li>San Rafael</li>";
	dep4+="<li>Santa Rita</li>";
	dep4+="<li>Tejutla</li>";
	dep4+="<h2>Cabezera departamental</h2>" ;
	dep4+="<p>Chalatenango es la cabecera del Departamento homónimo de El Salvador. Su territorio se divide en 6 cantones y 36 caseríos. En 2007 la población era de 29 271 habitantes según censo de 2007. La extensión territorial del municipio está distribuida de tal manera que tiene un área rural de 131,05 km² aproximadamente y un área urbana de 0,75 km² aproximadamente.</p>";
	dep4+="<h2>Produccion artesanal</h2>";
	dep4+="<li>En Cantón Upatoro, Cantón Chiapas, Guarjila y el casco urbano se trabaja la jarcia de forma dispersa e in visibilizada.</li>";
	dep4+="<li>Elaboración y reproducción de libros sobre la historia de las comunidades repobladas o las que se encuentran deshabitadas en otros municipios.";
	dep4+="</li>";
	dep4+="<li>En Cantón Las Minas se trabaja la jarcia, alfarería, y panadería tradicional</li>";
	dep4+="<li>En Cantón San José Don Mateo tiene un trapiche tradicional de madera en la que se hace “la molienda”: se hace miel de todo tipo, batido, dulce, cada año. Las moliendas producen muy poco, algunas solo sacan caldo y otras ni siquiera eso.</li>";
	dep4+="<li>En Reubicaciones hay gente que hace el almidón de yuca y fabrican atarrayas y hamacas.Canton Chiapas lugar de nacimiento del nuevo Obispo de Chalatenago Fray Oswaldo Stefano Escobar Aguilar toma posesión de su nombramiento sábado 1 octubre 2016 de la catedral de Chalatenago siendo hijo de Maria Julia Aguilar y Antonio Esteban Escobar Alvarenga siendo una familia de humilde de canton chiapas 100% chalatecos</li>";
	dep4+="<img id=\"fotos\" src=\"img/iglesiadelapalma.jpg\">";
	dep4+="</div>";
	dep4+="<script src=\"js/jquery-3.2.0.min.js\"></script>";
	dep4+="<script src=\"js/main.js\"></script>";
	
   body.innerHTML = dep4;
		}

function depar5(){

	var dep5="";

	dep5+="<div id=\"principal\" >";
	dep5+="<h1>La Libertad</h1>";
	dep5+="<p>La Libertad es un departamento de El Salvador. Su capital es la ciudad de Santa Tecla, capital también del municipio homónimo. Tiene una extensión territorial de 112 km² y una población de 121,908 habitantes (censo oficial, 2007).";
	dep5+=" </p>";
	dep5+="<img id=\"fotos\" src=\"img/libertad.jpg\">";
	dep5+="<h2>Municipios</h2>";
	dep5+="<li>Antiguo Cuscatlán</li>";
	dep5+="<li>Chiltiupán</li>";
	dep5+="<li>Ciudad Arce</li>";
	dep5+="<li>Colón</li>";
	dep5+="<li>Comasagua</li>";
	dep5+="<li>Huizúcar</li>";
	dep5+="<li>Jayaque</li>";
	dep5+="<li>Jicalapa</li>";
	dep5+="<li>La Libertad</li>";
	dep5+="<li>Santa Tecla</li>";
	dep5+="<li>Nuevo Cuscatlán</li>";
	dep5+="<li>San Juan Opico</li>";
	dep5+="<li>Quezaltepeque</li>";
	dep5+="<li>Sacacoyo</li>";
	dep5+="<li>San José Villanueva</li>";
	dep5+="<li>San Matías</li>";
	dep5+="<li>San Pablo Tacachico</li>";
	dep5+="<li>Talnique</li>";
	dep5+="<li>Tamanique</li>";
	dep5+="<li>Teotepeque</li>";
	dep5+="<li>Tepecoyo</li>";
	dep5+="<li>Zaragoza</li>";
	dep5+="<h2>Cabezera departamental</h2>";
	dep5+="<p>Santa Tecla es una ciudad, municipio y cabecera del departamento de La Libertad en El Salvador. Tiene una extensión territorial de 112 km² y una población estimada de 135 483 habitantes para el año 2014.6​También pertenece al Área Metropolitana de San Salvador.";
	dep5+="</p>";
	dep5+="<p>Fue fundada a mediados del siglo XIX con el nombre de Nueva San Salvador, con el propósito de establecer allí a la capital de la República, ya que San Salvador había sido asolada por un terremoto en el año 1854. Con el paso de los años la arquitectura de la ciudad se diferenció del tradicional estilo de la época de la colonización española. Fue una de las poblaciones más afectadas por los terremotos del año 2001, y desde el 2003 es conocida oficialmente como Santa Tecla.";
	dep5+="</p>";
	dep5+="<h2>Turismo</h2>";
	dep5+="<p>Sus atracciones más importantes se distribuyen a lo largo del km. 30 y el 53. El puerto de la Libertad es el punto de entrada obligatorio y el muelle artesanal original de madera fue construido en 1579. Este puerto sirve de embarcadero de pescadores artesanazas y ofrece un mini mercado donde puede comprar a precios más bajos de los normal un sin fin de mariscos frescos.</p>";
	dep5+="<p> Avanzando más hacia el occidente encontrara otras playas como: Conchalio, San Blas, El Cocal, El Majahual y en el km. 42 la playa del Sunzal - segunda playa más popular para la practica del Surf (especialmente entre los meses de Noviembre a Febrero) y famoso por el ambiente relajado de los restaurantes allí ubicados.</p>";
	dep5+="<img id=\"fotos\" src=\"img/libertad2.jpg\">";
	dep5+="</div>";
	dep5+="<script src=\"js/jquery-3.2.0.min.js\"></script>";
	dep5+="<script src=\"js/main.js\"></script>";

	body.innerHTML = dep5;
		}

function depar6(){
	var dep6="";

	dep6+="<div id=\"principal\" >";
	dep6+="<h1>San Salvador</h1>";
	dep6+="<p>San Salvador es uno de los 14 departamentos de El Salvador ubicado en la zona central. Su área es de 886,15 kilómetros cuadrados y su población es de 2 557 761 habitantes.</p>";
	dep6+="<img id=\"fotos\" src=\"img/salvador.jpg\">";
	dep6+="<h2>Municipios</h2>";
	dep6+="<li>Aguilares</li>";
	dep6+="<li>Apopa</li>";
	dep6+="<li>Ayutuxtepeque</li>";
	dep6+="<li>Cuscatancingo</li>";
	dep6+="<li>Delgado</li>";
	dep6+="<li>El Paisnal</li>";
	dep6+="<li>El Paisnal</li>";
	dep6+="<li>Ilopango</li>";
	dep6+="<li>Mejicanos</li>";
	dep6+="<li>Nejapa</li>";
	dep6+="<li>Panchimalco</li>";
	dep6+="<li>Rosario de Mora</li>";
	dep6+="<li>San Marcos</li>";
	dep6+="<li>San Martín</li>";
	dep6+="<li>San Salvador</li>";
	dep6+="<li>Santiago Texacuangos</li>";
	dep6+="<li>Santo Tomás</li>";
	dep6+="<li>Soyapango</li>";
	dep6+="<li>Tonacatepeque</li>";
	dep6+="<h2>Cabezera departamental</h2>";
	dep6+="<p>San Salvador es la capital de la República de El Salvador y la cabecera del departamento y municipio homónimos.​ Como capital de la nación, alberga las sedes del Gobierno y el Consejo de Ministros de El Salvador, Asamblea Legislativa, Corte Suprema de Justicia y demás instituciones y organismos del Estado, así como la residencia oficial del Presidente de la República. Es la mayor ciudad del país desde el punto de vista económico y demográfico, y asiento de las principales industrias y empresas de servicios de El Salvador.";
	dep6+="</p>";
	dep6+="<p> La primera fundación de San Salvador tuvo lugar en 1525, se refundó en 1528, pero su población estaría asentada en su emplazamiento actual hasta en 1545. Fue un importante centro comercial durante la colonización española, debido a la agricultura del añil, y se convirtió en sede de la Alcaldía Mayor, Intendencia y la Provincia del territorio que, en su mayor parte, hoy conforma El Salvador.</p>";
	dep6+="<h2>Turismo</h2>";
	dep6+="<p>Su actividad turistica depende por la noche</p>";
	dep6+="<p>Para el disfrute de la vida nocturna en esta capital existe una variada oferta de restaurantes, discotecas y bares. Para el caso, hay zonas identificadas que concentran estos centros de esparcimiento: la Zona Rosa, al Oeste, sobre el Bulevard del Hipódromo; la Zona Real, ubicada en los alrededores del Bulevar de los Héroes; y el Paseo General Escalón. Cabe destacar que algunos de estos contornos están comprendidas dentro de las áreas donde no es permitida el porte de armas de acuerdo a una ley de la república. </p>";
	dep6+="<p>Los espectáculos musicales multitudinarios se realizan en los grandes recintos deportivos como el Gimnasio Nacional, el Estadio Cuscatlán, o el anfiteatro del Centro Internacional de Ferias y Convenciones. Otra opción es la segunda estructura más alta del país: la Torre Futura, que alberga oficinas y área comercial.</p>";
	dep6+="<img id=\"fotos\" src=\"img/salvador2.jpg\">";
	dep6+="</div>";
	dep6+="<script src=\"js/jquery-3.2.0.min.js\"></script>";
	dep6+=" <script src=\"js/main.js\"></script> ";

	body.innerHTML = dep6;

		}

function depar7(){

	var dep7="";

	dep7+="<div id=\"principal\" >";
	dep7+="<h1>Cuscatlán</h1>";
	dep7+="<p>Cuscatlán es uno de los catorce departamentos que conforman la República de El Salvador. El departamento fue constituido el 27 de mayo de 1834.Se encuentra situado en la región central del país y limita al N y NE con el departamento de Chalatenango, al E con Cabañas, al SE con San Vicente, al S con el Lago de Ilopango y el departamento de La Paz y, por último, al O con el departamento de San Salvador. En el N el valle del río Lempa origina una región plana y fértil, apropiada para la actividad agrícola. El centro y sur del departamento, en cambio, son más montañosos. El departamento comprende una superficie de 756 km² y tiene una población estimada de 216.446 habitantes (2007).";
	dep7+=" </p>";
	dep7+="<img id=\"fotos\" src=\"img/cuscaclan.jpg\">";
	dep7+="<h2>Municipios</h2>";
	dep7+="<li>Cojutepeque</li>";
	dep7+="<li>Candelaria</li>";
	dep7+="<li>El Carmen</li>";
	dep7+="<li>El Rosario</li>";
	dep7+="<li>Monte San Juan</li>";
	dep7+="<li>Oratorio de Concepción</li>";
	dep7+="<li>San Bartolomé Perulapía</li>";
	dep7+="<li>San Cristóbal</li>";
	dep7+="<li>San José Guayabal</li>";
	dep7+="<li>San Pedro Perulapán</li>";
	dep7+="<li>San Rafael Cedros</li>";
	dep7+="<li>San Ramón</li>";
	dep7+="<li>Santa Cruz Analquito</li>";
	dep7+="<li>Santa Cruz Michapa</li>";
	dep7+="<li>Suchitoto</li>";
	dep7+="<li>Tenancingo</li>";
	dep7+="<h2>Cabezera departamental</h2>";
	dep7+="<p>Su cabecera fue originalmente Suchitoto, pero a partir del 12 de noviembre de 1861 es la ciudad de Cojutepeque. Constó de los distritos o partidos de Cojutepeque y Suchitoto, creados respectivamente en 1786 y por Ley de 22 de mayo de 1835.";
	dep7+="</p>";
	dep7+="<p>El municipio de Cojutepeque en el año 2011 tenía una población algo superior a los 55.000 habitantes (octava del país) y su superficie es de 31,43 km2. Es una ciudad con una rica vida comercial, centro de intercambio de una amplia zona";
	dep7+="</p>";
	dep7+="<p>Se encuentra a 34 km al oriente de San Salvador, a 1003 msnm en las faldas del Cerro de las Pavas, tesoro natural. Su clima es fresco. Anteriormente, cuando las calles eran empedradas y había una adecuada filtración de agua hacia el subsuelo, por las tardes y noches solía formarse una densa capa de niebla, por lo que era conocida poéticamente como \"La Ciudad de las Neblinas\". El nombre emblemático aún persiste, aunque ahora sólo eventualmente se cubre de neblina."; 
	dep7+="</p>"; 
	dep7+="<p>En Cojutepeque encontrará varios platillos típicos, pero los más conocidos son sus embutidos (chorizos, butifarras y salchichones), que acostumbran a vender mujeres al paso de los autobuses interurbanos que transitan por la Carretera Panamericana. Los chorizos de Cojutepeque son bien conocidos en todo el país: de hecho, es posible comprarles en muchas ciudades de El Salvador, y no solamente en Cojutepeque. Los chorizos son hechos de carne de cerdo, carne de res, sal, especias y herbas, achiote, sal de cura, y otros preservantes."; 
	dep7+="</p>"; 
	dep7+="<h2>Turismo</h2>"; 
	dep7+="<p>Candelaria, Cojutepeque y San Ramón son municipios de Cuscatlán, en donde el turismo está en auge. Los visitantes pueden apreciar aspectos religiosos, conocer sobre la elaboración de productos artesanales como canastos y puros. También pueden degustar deliciosos marquesotes y otros platillos que preparan en esas localidades.</p>"; 
	dep7+="<img id=\"fotos\" src=\"img/cuscatlan2.jpg\">"; 
	dep7+="</div>"; 
	dep7+="<script src=\"js/jquery-3.2.0.min.js\"></script>"; 
	dep7+="<script src=\"js/main.js\"></script>"; 
	
	body.innerHTML = dep7;


		}

function depar8(){

	var dep8="";

	dep8+="<div id=\"principal\" >";
	dep8+="<h1>Cabañas</h1>";
	dep8+="<p>Cabañas es un departamento de la zona paracentral de El Salvador. Su cabecera departamental es Sensuntepeque. Esta región tiene muchas reservas naturales. El departamento fue nombrado en honor del político centroamericanista hondureño, José Trinidad Cabañas.";
	dep8+=" </p>";
	dep8+="<img id=\"fotos\" src=\"img/jutiapa-cabanas.jpg\">";
	dep8+="<h2>Municipios</h2>";
	dep8+="<li>Cinquera</li>";
	dep8+="<li>Dolores</li>";
	dep8+="<li>Guacotecti</li>";
	dep8+="<li>Ilobasco</li>";
	dep8+="<li>Jutiapa</li>";
	dep8+="<li>San Isidro</li>";
	dep8+="<li>Sensuntepeque</li>";
	dep8+="<li>Tejutepeque</li>";
	dep8+="<li>Victoria</li>";
	dep8+="<h2>Cabezera departamental</h2>";
	dep8+="<p>Sensuntepeque es una ciudad de El Salvador, cabecera del departamento de Cabañas, ubicada en la zona paracentral del país. Está situada a 83 km al noreste de la capital, San Salvador, y a una altitud de 820 msnm.";
	dep8+="</p>";
	dep8+="<p>Tiene una población de 45 mil habitantes, y una extensión territorial de 306,33 km². Está subdividido geográficamente en 22 cantones y 236 caseríos en la zona rural. La zona urbana se divide en cuatro populosos barrios y 28 colonias.";
	dep8+="</p>";
	dep8+="<h2>Fiestas</h2>"; 
	dep8+="<p>Hay dos festividades patronales que se celebran en Sensuntepeque: Del 24 de noviembre al 5 de diciembre en honor a Santa Bárbara. 15 de agosto Fiesta de la Virgen del Tránsito. En ambas celebraciones son destacadas por su religiosidad, que van acompañadas de la algaravilla, los cohetes de de vara, juegos mecánicos, las carrozas, y actualmente los carnavales que llenan de alegría a propios y visitantes."; 
	dep8+="</p>"
	dep8+="<img id=\"fotos\" src=\"img/ITFI_reinas_sensuntes.JPG\">"; 
	dep8+="</div>"; 
	dep8+="<script src=\"js/jquery-3.2.0.min.js\"></script>"; 
	dep8+="<script src=\"js/main.js\"></script>"; 

body.innerHTML = dep8;
	
		}


function depar9(){
	var dep9="";
	dep9+="<div id=\"principal\" >";
	dep9+="<h1>La Paz</h1>";
	dep9+="<p>La Paz es uno de los catorce departamentos que conforman la República de El Salvador. La cabecera departamental es la ciudad de Zacatecoluca. El departamento de La Paz se halla situado en el sector centro-sur de El Salvador. Sus límites son el lago de Ilopango y el departamento de Cuscatlán al Norte, el departamento de San Vicente al NorEste y Este, los departamentos de San Salvador y La Libertad al Oeste y el Océano Pacífico al Sur.";
	dep9+=" </p>";
	dep9+="<img id=\"fotos\" src=\"img/paz.jpg\">";
	dep9+="<h2>Municipios</h2>";
	dep9+="<li>Zacatecoluca</li>";
	dep9+="<li>Cuyultitán</li>";
	dep9+="<li>El Rosario</li>";
	dep9+="<li>Jerusalén</li>";
	dep9+="<li>Mercedes La Ceiba</li>";
	dep9+="<li>Olocuilta</li>";
	dep9+="<li>Paraíso de Osorio</li>";
	dep9+="<li>San Antonio Masahuat</li>";
	dep9+="<li>San Emigdio</li>";
	dep9+="<li>San Francisco Chinameca</li>";
	dep9+="<li>San Pedro Masahuat</li>";
	dep9+="<li>San Juan Nonualco</li>";
	dep9+="<li>San Juan Talpa</li>";
	dep9+="<li>San Juan Tepezontes</li>";
	dep9+="<li>San Luis La Herradura</li>";
	dep9+="<li>San Luis Talpa</li>";
	dep9+="<li>San Miguel Tepezontes</li>";
	dep9+="<li>San Pedro Nonualco</li>";
	dep9+="<li>San Rafael Obrajuelo</li>";
	dep9+="<li>Santa María Ostuma</li>";
	dep9+="<li>Tapalhuaca</li>";
	dep9+="<h2>Cabezera departamental</h2>";
	dep9+="<p>Zacatecoluca es una ciudad y municipio del departamento de La Paz, en El Salvador. Tiene una población de 75 100 habitantes para el año 2016. Sus orígenes se remontan a la época prehispánica, y durante la colonización española fue el segundo poblado de mayor importancia en el partido de San Vicente. En 1844 adquirió el título de ciudad con el reconocimiento de Noble, Generosa y Leal, Ciudad de Santa Lucía de Zacatecoluca. De este lugar es originario el prócer centroamericano José Simeón Cañas.";
	dep9+="</p>";
	dep9+="<p>El municipio es gobernado por un Concejo Municipal, el cual es pluralista ya que existe representación de más de un partido político, quienes toman las decisiones sobre el territorio en lo económico, técnico y administrativo, conformado por el Alcalde, un Síndico, 10 Regidores Propietarios y 4 Regidores Suplentes. Tiene su sede en la Alcaldía Municipal de Zacatecoluca.";
	dep9+="</p>";
	dep9+="<p>Su alcalde actual el Dr. Francisco Salvador Hirezi Morataya ocupando la silla edilicia por 3 períodos consecutivos desde el 1 de mayo de 2009 hasta el 1 de mayo de 2018."; 
	dep9+="</p>"; 
	dep9+="<h2>Turismo</h2>"; 
	dep9+="<p>Uno de los lugares más reconocido de todo el país en lo que a turismo de playa se refiere se encuentra en el departamento de La Paz: la costa del sol, 1 a que aunque solamente cubre 20 manzanas, cuenta con una gran diversidad de aves costeras, invertebrados y también raíces de manglares; su arena es casi blanca y por ello es uno de los lugares preferidos por los turistas."; 
	dep9+="<img id=\"fotos\" src=\"img/paz2.jpg\">"; 
	dep9+="</div>"; 
	dep9+="<script src=\"js/jquery-3.2.0.min.js\"></script>"; 
	dep9+="<script src=\"js/main.js\"></script>"; 
	
	body.innerHTML = dep9;

		}	

function depar10(){
	var dep10="";
	dep10+="<div id=\"principal\" >";
	dep10+="<h1>San Vicente</h1>";
	dep10+="<p>San Vicente es uno de los catorce departamentos que conforman la República de El Salvador, en la región Paracentral. La ciudad cabecera es San Vicente.";
	dep10+=" </p>";
	dep10+="<p>El departamento fue creado, el 12 de junio de 1824 y funcionó como capital de El Salvador de 1834 a 1840. Al ser establecido comprendía también, el territorio de los actuales departamentos de Cabañas y La Paz.";
	dep10+="</p>"
	dep10+="<img id=\"fotos\" src=\"img/sanvicente.jpg\">";
	dep10+="<h2>Municipios</h2>";
	dep10+="<li>Apastepeque</li>";
	dep10+="<li>Guadalupe</li>";
	dep10+="<li>San Cayetano Istepeque</li>";
	dep10+="<li>San Esteban Catarina</li>";
	dep10+="<li>San Idelfonso</li>";
	dep10+="<li>San Lorenzo</li>";
	dep10+="<li>San Sebastián</li>";
	dep10+="<li>San Vicente</li>";
	dep10+="<li>Santa Clara</li>";
	dep10+="<li>Santo Domingo</li>";
	dep10+="<li>Tecoluca</li>";
	dep10+="<li>Tepetitán</li>";
	dep10+="<li>Verapaz</li>";
	dep10+="<h2>Cabezera departamental</h2>";
	dep10+="<p>San Vicente es la ciudad cabecera del municipio y departamento homónimos en El Salvador. Fue fundada en el año 1635 y llegó a ser capital del Estado entre 1834 a 1840, cuando El Salvador formaba parte de la República Federal de Centro América, esto debido a que San Salvador se convirtió en capital federal. Durante la colonización española, fue una de las localidades más importantes de la Intendencia de San Salvador.";
	dep10+="</p>";
	dep10+="<h2>Turismo</h2>"; 
	dep10+="<p>Entre los atractivos que ofrece el municipio de San Vicente encontramos";
	dep10+="</p>"
	dep10+="<p>Árbol del Tempisque: de un gran valor histórico para el municipio ya que bajo el árbol se fundó la ciudad de San Vicente, en el año 1635, por 50 familias españolas."; 
	dep10+="<p>Turicentro Amapulapa: Su nombre se deriva del náhuatl cuyo significado es “río donde se hunden los Amates”, con más de 33 manzanas de extensión donde disfrutará de refrescantes piscinas generadas por los afluentes naturales de origen volcánico. El parque acuático ofrece a los visitantes dos piscinas para adultos, un tobogán acuático, tres piscinas para niños y la última remodelación de la piscina principal con juegos acuáticos.";
	dep10+="</p>"
	dep10+="<img id=\"fotos\" src=\"img/sanvicente2.jpg\">"; 
	dep10+="</div>"; 
	dep10+="<script src=\"js/jquery-3.2.0.min.js\"></script>"; 
	dep10+="<script src=\"js/main.js\"></script>"; 
	
	body.innerHTML = dep10;


		}		

function depar11(){
	
	var dep11="";

	dep11+="<div id=\"principal\" >";
	dep11+="<h1>Usulután</h1>";
	dep11+="<p>Usulután es una ciudad de El Salvador, que es cabecera del municipio y departamento homónimos. De acuerdo al censo oficial de 2007, tiene una población de 73 064 habitantes.1​ El municipio cubre un área de 139,77 km² y tiene una altitud de 90 msnm. El topónimo náhuat Usulutan significa «Ciudad de los ocelotes»; otras acepciones son «Lugar de los olotes preñados o gruesos» o «Donde abundan las iguanas».";
	dep11+=" </p>";
	dep11+="<img id=\"fotos\" src=\"img/usulutan1.jpg\">";
	dep11+="<h2>Municipios</h2>";
	dep11+="<li>Alegría</li>";
	dep11+="<li>Berlín</li>";
	dep11+="<li>California</li>";
	dep11+="<li>Concepción Batres</li>";
	dep11+="<li>El Triunfo</li>";
	dep11+="<li>Ereguayaquín</li>";
	dep11+="<li>Estanzuelas</li>";
	dep11+="<li>Jiquilisco</li>";
	dep11+="<li>Jucuapa</li>";
	dep11+="<li>Jucuarán</li>";
	dep11+="<li>Mercedes Umaña</li>";
	dep11+="<li>Nueva Granada</li>";
	dep11+="<li>Ozatlán</li>";
	dep11+="<li>Puerto El Triunfo</li>";
	dep11+="<li>San Agustín</li>";
	dep11+="<li>San Buenaventura</li>";
	dep11+="<li>San Dionisio</li>";
	dep11+="<li>San Francisco Javier</li>";
	dep11+="<li>Santa María</li>";
	dep11+="<li>Santiago de María</li>";
	dep11+="<li>Tecapán</li>";
	dep11+="<li>Usulután</li>";
	dep11+="<h2>Turismo</h2>"; 
	dep11+="<p>Entre los atractivos que ofrece el municipio de San Vicente encontramos";
	dep11+="</p>"
	dep11+="<p>El Puerto El Triunfo y Puerto Parada son otros de los atractivos turísticos y comerciales de la región. Estas opciones hacen de Usulután sea uno de los lugares mas visitados por turistas nacionales y extranjeros en época de verano. Usulután posee hermosas ciudades que son conocidas por la cordialidad de sus pobladores y por la belleza que poseen, por eso turistas nacionales e internacionales, las visitan. Este departamento del oriente del país, fue llamado, en los años del florecimiento agrícola, “El granero de El Salvador”, por su basta producción de granos básicos. Está situado en la costa baja, a unos 90 metros sobre el nivel del mar y a 110 kilómetros de San Salvador, por la carretera del Litoral, autopista en perféctas condiciones que atraviesa todo el territorio salvadoreño por la parte costera. Usulután, es un departamento que cuenta con grandes atractivos turísticos, tanto en la zona costera como en su cordillera montañosa."; 
	dep11+="<img id=\"fotos\" src=\"img/usulutan2.jpg\">"; 
	dep11+="</div>"; 
	dep11+="<script src=\"js/jquery-3.2.0.min.js\"></script>"; 
	dep11+="<script src=\"js/main.js\"></script>"; 
	
	body.innerHTML = dep11;

		}		


function depar12(){
	
	var dep12="";
	dep12+="<div id=\"principal\" >";
	dep12+="<h1>San Miguel</h1>";
	dep12+="<p>San Miguel es una ciudad y municipio del departamento de San Miguel, El Salvador. Es también la cabecera departamental del departamento homónimo. Históricamente ha sido y sigue siendo, por casi 500 años ya, la ciudad más importante de la zona oriental del país. Tiene una población estimada de 247 119 habitantes para el año 2013, por lo que representa la tercera ciudad en importancia de la nación salvadoreña. -San Miguel fue fundada en el año 1530, convirtiéndose así en la segunda ciudad colonial española de los territorios hoy salvadoreños, pero se trasladó a su actual ubicación hasta en 1586. Desde entonces, San Miguel se convirtió en émula y rival de San Salvador como segunda ciudad en importancia dentro de la Alcaldía Mayor de San Salvador y, posteriormente, de la Intendencia de San Salvador durante toda la época de colonización española. San Miguel vio fenecido su liderazgo político dentro de la nación a finales del siglo XIX y comienzos del XX debido al ascenso económico de Santa Ana con la agricultura del café. Aunado al hecho que el gobierno salvadoreño dividió toda la zona oriental en cuatro departamentos con el afán de disminuir la influencia política de la élite migueleña.";
	dep12+=" </p>";
	dep12+="<img id=\"fotos\" src=\"img/sanmiguel1.jpg\">";
	dep12+="<h2>Distritos</h2>"
	dep12+="<p>En un segundo orden administrativo, San Miguel se divide en distritos, los cuales son los siguientes:";
	dep12+="</p>"
	dep12+="<p>San Miguel (que agrupa los municipios: San Miguel, Chapeltique, Chirilagua, Ciudad Barrios, Comacarán, Moncagua, Quelepa y Uluazapa) Chinameca (que agrupa los municipios: Chinameca, El Tránsito, Lolotique, Nueva Guadalupe, San Jorge y San Rafael Oriente) Sesori (que agrupa los municipios: Sesori, Carolina, Nuevo Edén de San Juan, San Antonio del Mosco, San Gerardo y San Luis de la Reina)";
	dep12+="</p>"
	dep12+="<h2>Municipios</h2>";
	dep12+="<li>Carolina</li>";
	dep12+="<li>Chapeltique Chinameca</li>";
	dep12+="<li>Chirilagua</li>";
	dep12+="<li>Ciudad Barrios</li>";
	dep12+="<li>Comacarán</li>";
	dep12+="<li>El Tránsito</li>";
	dep12+="<li>Lolotique</li>";
	dep12+="<li>Moncagua</li>";
	dep12+="<li>Nueva Guadalupe</li>";
	dep12+="<li>Nuevo Edén de San Juan</li>";
	dep12+="<li>Quelepa</li>";
	dep12+="<li>San Antonio</li>";
	dep12+="<li>San Gerardo</li>";
	dep12+="<li>San Jorge</li>";
	dep12+="<li>San Luis de la Reina</li>";
	dep12+="<li>San Miguel</li>";
	dep12+="<li>San Rafael Orientes</li>";
	dep12+="<li>Sesori</li>";
	dep12+="<li>Uluazapa</li>";
	dep12+="<h2>Turismo</h2>"; 
	dep12+="<p>Este es uno de los departamentos de la zona oriental más grandes y esplendorosos de nuestro territorio. San Miguel, famoso por su gastronomía, sus tradiciones coloridas, sus artesanías, sus lugares turísticos y, sobre todo, por su famoso carnaval, que se realiza en noviembre. En este cálido pedacito de nuestro terruño puedes encontrar parques acuáticos con piscinas refrescantes, playas paradisíacas de singular belleza, lagunas, ruinas arqueológicas… en fin, muchos lugares de diversión.La laguna de Aramuaca, alejada del bullicio y del ajetreo de la ciudad de San Miguel se encuentra este oasis de pura diversión. Sus refrescantes aguas y la espesa vegetación de su alrededor le brinda a los turistas toda la frescura y la belleza que ellos buscan.";
	dep12+="</p>"
	dep12+="<img id=\"fotos\" src=\"img/sanmiguel2.jpg\">"; 
	dep12+="</div>"; 
	dep12+="<script src=\"js/jquery-3.2.0.min.js\"></script>"; 
	dep12+="<script src=\"js/main.js\"></script>"; 
	
	body.innerHTML = dep12;
	

		}

function depar13(){

	var dep13="";
	dep13+="<div id=\"principal\" >";
	dep13+="<h1>Morazán</h1>";
	dep13+="<p>Al departamento se le dio el nombre actual por decreto el 14 de marzo de 1887, en honor del paladín de la Unión Centroamericana, general Francisco Morazán. Por ley del 5 de febrero de 1877 se otorgó a la villa de Gotera el título de ciudad. Fue fundado como departamento el 14 de julio de 1875. Morazán se ubica en la zona geográfica oriental de la República. Está limitado al norte por Honduras, y al sur y al oriente por el departamento de San Miguel. Tiene una altitud de 245 metros sobre el nivel del mar y su extensión territorial es de 1,447 kilómetros cuadrados.";
	dep13+=" </p>";
	dep13+="<img id=\"fotos\" src=\"img/launion1.jpg\">";
	dep13+="<h2>Cabecera departamental</h2>"
	dep13+="<p>El municipio más grande de todos ellos es Cacaopera, y San Francisco Gotera es la ciudad donde se ubica la cabecera departamental de Morazán, es decir el centro del departamento. El municipio más pequeño es San Isidro.";
	dep13+="</p>"
	dep13+="<h2>Municipios</h2>";
	dep13+="<li>Arambala</li>";
	dep13+="<li>Cacaopera</li>";
	dep13+="<li>Chilanga</li>";
	dep13+="<li>Corinto</li>";
	dep13+="<li>Delicias de Concepción</li>";
	dep13+="<li>El Divisadero</li>";
	dep13+="<li>El Rosario</li>";
	dep13+="<li>Guacalococti</li>";
	dep13+="<li>Guatajiagua</li>";
	dep13+="<li>Joateca</li>";
	dep13+="<li>Jocoaitique</li>";
	dep13+="<li>Jocoro</li>";
	dep13+="<li>Lolotiquillo</li>";
	dep13+="<li>Meanguera</li>";
	dep13+="<li>Osicala</li>";
	dep13+="<li>Perquín</li>";
	dep13+="<li>San Carlos</li>";
	dep13+="<li>San Fernando</li>";
	dep13+="<li>San Francisco Gotera</li>";
	dep13+="<li>San Isidro</li>";
	dep13+="<li>San Simón</li>";
	dep13+="<li>Sensembra</li>";
	dep13+="<li>Sociedad</li>";
	dep13+="<li>Torola</li>";
	dep13+="<li>Yamabal</li>";
	dep13+="<li>Yoloaquín</li>";
	dep13+="<h2>Turismo</h2>"; 
	dep13+="<p>El departamento de Morazan ofrece una de las mas amplias y actractivas opciones para practicar el eco turismo en El Salvador. Impulsar y desarrollar esas riquezas naturales es la tarea de la sociacion Pro Desarrollo Turistico, PRODETUR. Aventuras de Perquin es un lugar muy recomendado para que lo puedas visitar, esta ubicado en Desvio La Tejera, Carretera Internacional a Honduras, Bailadero del Diablo, Perquin, Morazán, El Salvador, quizás esta dirección te parezca un poco larga, pero créeme que este sitio vale la pena visitarlo.";
	dep13+="</p>"
	dep13+="<img id=\"fotos\" src=\"img/launion2.jpg\">"; 
	dep13+="</div>"; 
	dep13+="<script src=\"js/jquery-3.2.0.min.js\"></script>"; 
	dep13+="<script src=\"js/main.js\"></script>"; 
	
	body.innerHTML = dep13;
	
		}

function depar14(){
	var dep14="";
	dep14+="<div id=\"principal\" >";
	dep14+="<h1>La Unión</h1>";
	dep14+="<p>La Unión es un departamento de la zona oriental de El Salvador. Es el más oriental de los departamentos salvadoreños y el que posee en su jurisdicción las aguas e islas cuzcatlecas del Golfo de Fonseca, bahía compartida con Honduras y Nicaragua. En este departamento y golfo se encuentra el único municipio insular de El Salvador, Meanguera del Golfo. Su cabecera departamental es la ciudad y puerto de La Unión.";
	dep14+=" </p>";
	dep14+="<img id=\"fotos\" src=\"img/launion1.jpg\">";
	dep14+="<h2>Historia</h2>"
	dep14+="<p>A finales del siglo XVIII el \"Puerto San Carlos\" recibió este nombre en honor al rey Carlos III de España, quien gobernó de 1759 a 1788. En 1807, el puerto de San Carlos figura incluido como pueblo del partido de San Alejo. Ingresó el 12 de junio de 1824, en el Departamento de San Miguel. El 13 de julio de 1824, el puerto de San Carlos fue habilitado por la Asamblea Nacional Constituyente de las Provincias Unidas del Centro de América como \"Puerto Mayor\", con el nombre de Puerto de La Unión Centroamericana. El 28 de febrero de 1865 se otorgó al pueblo de San Carlos de La Unión el título de Ciudad. El 22 de junio de 1865, por D.E en la administración de Francisco Dueñas, se erige el departamento de La Unión.";
	dep14+="</p>"
	dep14+="<h2>Municipios</h2>";
	dep14+="<li>Anamorós</li>";
	dep14+="<li>Bolívar</li>";
	dep14+="<li>Concepción de Oriente</li>";
	dep14+="<li>Conchagua</li>";
	dep14+="<li>El Carmen</li>";
	dep14+="<li>El Sauce</li>";
	dep14+="<li>Intipucá</li>";
	dep14+="<li>La Unión</li>";
	dep14+="<li>Lislique</li>";
	dep14+="<li>Meanguera del Golfo</li>";
	dep14+="<li>Nueva Esparta</li>";
	dep14+="<li>Pasaquina</li>";
	dep14+="<li>Polorós</li>";
	dep14+="<li>San Alejo</li>";
	dep14+="<li>San José</li>";
	dep14+="<li>Santa Rosa de Lima</li>";
	dep14+="<li>Yayantique</li>";
	dep14+="<li>Yucuaquín</li>";
	dep14+="<h2>Turismo</h2>"; 
	dep14+="<p>Entre los principales puntos de interés turístico sobresalen las playas del Tamarindo, Playas Negras y Playitas, el volcán de Conchagua, que en lengua lenca recibe el nombre de Amapala (Cerro de las culebras), la localidad de Lislique, un notable centro artesanal y la ciudad de La Unión, la cabecera del departamento y un importante puerto.";
	dep14+="</p>"
	dep14+="<img id=\"fotos\" src=\"img/launion2.jpg\">"; 
	dep14+="</div>"; 
	dep14+="<script src=\"js/jquery-3.2.0.min.js\"></script>"; 
	dep14+="<script src=\"js/main.js\"></script>"; 
	
	body.innerHTML = dep14;

		}

/*------------------------Funcion para la pestaña contacto--------------------------*/
function contac(){
	var cont="";

	cont+="<div id=\"form\">";
	cont+="<form action=\"\" method=\"post\" onsubmit=\"return validacion()\">";
	cont+="<br>";
	cont+="<h2>Contacto</h2>";
	cont+="<br><br>";
	cont+="<h3>Nombre</h3>";
	cont+="<span id=\"nombre2\"></span>";
	cont+="<input type=\"text\" id=\"nombre\">";
	cont+="<h3>Email</h3>";
	cont+="<input type=\"text\" name=\"email\" id=\"email\">";
	cont+="<span id=\"email2\"></span> <span id=\"email3\"></span><br><br>";
	cont+="<h3>Pais</h3>";
	cont+="<select id=\"pais\">";
	cont+="<option >Antigua y Barbuda</option>";
	cont+="<option >Aruba</option>";
	cont+="<option >Bahamas</option>";
	cont+="<option >Barbados</option>";
	cont+="<option >Cuba</option>";
	cont+="<option >Dominica</option>";
	cont+="<option >Grenada</option>";
	cont+="<option >Guadalupe</option>";
	cont+="<option >Haití</option>";
	cont+="<option >Islas Caimán</option>";
	cont+="<option >Islas Turcas y Caicos</option>";
	cont+="<option >Islas Vírgenes</option>";
	cont+="<option >Jamaica</option>";
	cont+="<option >Martinica</option>";
	cont+="<option >Puerto Rico</option>";
	cont+="<option >República Dominicana</option>";
	cont+="<option >San Bartolomé</option>";
	cont+="<option >San Cristóbal y Nieves</option>";
	cont+="<option >San Vicente y las Granadinas</option>";
	cont+="<option >Santa Lucía</option>";
	cont+="<option >Trinidad y Tobago</option>";
	cont+="<option >Belice</option>";
	cont+="<option >Costa Rica</option>";
	cont+="<option selected >El Salvador</option>";
	cont+="<option >Guatemala</option>";
	cont+="<option >Honduras</option>";
	cont+="<option >Nicaragua</option>";
	cont+="<option >Panamá</option>";
	cont+="<option >Argentina</option>";
	cont+="<option >Bolivia</option>";
	cont+="<option >Brasil</option>";
	cont+="<option >Chile</option>";
	cont+="<option >Colombia</option>";
	cont+="<option >Ecuador</option>";
	cont+="<option >Guyana</option>";
	cont+="<option >Guyana Francesa</option>";
	cont+="<option >Paraguay</option>";
	cont+="<option >Perú</option>";
	cont+="<option >Suriname</option>";
	cont+="<option >Uruguay</option>";
	cont+="<option >Venezuela</option>";
	cont+="<option >México</option>";
	cont+="<option >Caribe</option>";
	cont+="<option >Caribe</option>";
	cont+="</select>";
	cont+="<br><br>";
	cont+="<h3>Comentario</h3>";
	cont+="<textarea id=\"comentario\" ></textarea>";
	cont+="<span id=\"comentario2\"></span>";
	/*cont+="<input id=\"btn\" type=\"submit\" onclick=\"guardarDatos()\" value=\"Enviar\">";
	cont+="<input id=\"btn\" type=\"buttom\" onclick=\"verificar()\" value=\"Verificar\">";*/
	cont+="<input id=\"btn\" type=\"submit\" value=\"Enviar\">";
	cont+="</form>";
	cont+="</div><br><br>";

	body.innerHTML=cont;		

}




