// Datos de los 365 días
const DAYS_ES = [
  {
    "day": 1,
    "title": "cuestiona-TE",
    "teaName": "Infusión de claridad y discernimiento",
    "benefit": "Nada de lo que veo en esta habitación, tiene un significado real por sí mismo",
    "lesson": "Imagina que tu mente es como una pizarra llena de dibujos antiguos que hiciste hace tiempo. Este ejercicio te enseña a limpiar la pizarra para mirar todo lo que te rodea como si fuera la primera vez, sin ponerle etiquetas de bueno o malo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Cuestiono mis pensamientos hoy. Yo elijo mirar este momento con absoluta neutralidad.\""
  },
  {
    "day": 2,
    "title": "reinterpreta-TE",
    "teaName": "Infusión de soberanía interior",
    "benefit": "Todo lo que veo en esta habitación significa para mí exactamente lo que yo he querido que signifique.",
    "lesson": "Es como cuando estás en el teatro y decides qué vestido le pones a tu personaje. Aquí descubres que las cosas no te hacen enfadar por sí solas, sino que tú misma decides qué significado les das en tu cabeza.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Reinterpreto mi mundo hoy. Yo elijo darle un significado de paz.\""
  },
  {
    "day": 3,
    "title": "vacia-TE",
    "teaName": "Infusión de alivio y aceptación",
    "benefit": "No entiendo nada de lo que veo en esta habitación, ¡y eso está bien!",
    "lesson": "Es como cuando te quitas una mochila muy pesada que llevabas a la espalda. Admitir que no lo sabes todo te da una paz enorme y deja espacio para que las cosas buenas pasen solas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me vacío de expectativas hoy. Yo elijo aceptar este momento tal como es.\""
  },
  {
    "day": 4,
    "title": "libera-TE",
    "teaName": "Infusión de ligereza mental",
    "benefit": "Estos pensamientos que tengo ahora mismo no significan nada importante.",
    "lesson": "A veces la cabeza nos da vueltas a cosas que no sirven para nada, como nubes pasajeras. Esta infusión te ayuda a dejar ir esos pensamientos pesados para que puedas volar ligera.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Libero mi mente hoy. Yo elijo soltar los pensamientos que no me dan paz.\""
  },
  {
    "day": 5,
    "title": "indaga-TE",
    "teaName": "Infusión de profundidad y autoconocimiento",
    "benefit": "Nunca me siento mal o disgustada por la razón que creo.",
    "lesson": "Es como mirar dentro de tu habitación secreta con mucho cuidado y mucha ternura, sin juzgarte, para entender por qué estás triste o enfadada y abrazarlo con cariño.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Indago en mi interior hoy. Yo elijo mirar mis sentimientos con una perspectiva amable.\""
  },
  {
    "day": 6,
    "title": "desengaña-TE",
    "teaName": "Infusión de despertar consciente",
    "benefit": "Me siento mal porque estoy viendo cosas en mi mente que no son reales.",
    "lesson": "Imagina que llevas unas gafas oscuras y ves monstruos que no existen. Este juego te ayuda a quitarte las gafas para darte cuenta de que todo está bien y que solo eran historias de tu imaginación.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me desengaño de los miedos hoy. Yo elijo ver la realidad con claridad.\""
  },
  {
    "day": 7,
    "title": "presentiza-TE",
    "teaName": "Infusión de presencia en el ahora",
    "benefit": "Cuando miro las cosas, solo estoy viendo recuerdos del pasado.",
    "lesson": "El pasado ya pasó y ya no está; es como una película que ya se acabó. Este ejercicio te recuerda que tu vida real pasa aquí y ahora mismo, en este segundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me presentizo hoy. Yo elijo soltar el ayer para vivir el ahora.\""
  },
  {
    "day": 8,
    "title": "enfoca-TE",
    "teaName": "Infusión de atención plena",
    "benefit": "Mi mente está tan ocupada pensando en el ayer que me pierdo el ahora.",
    "lesson": "Cuando juegas a un juego, tienes que mirar la pantalla y no distraerte. Esto es igual: agarras tu pensamiento y lo mueves hacia aquí, hacia este instante en el que todo está tranquilo y seguro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me enfoco en el presente hoy. Yo elijo habitar este preciso instante.\""
  },
  {
    "day": 9,
    "title": "despierta-TE",
    "teaName": "Infusión de humildad perceptiva",
    "benefit": "No soy capaz de ver las cosas tal como son en este preciso instante.",
    "lesson": "Es como cerrar los ojos de la rabia y abrir los ojos del corazón, aquellos que solo ven amigos, luz y cosas bonitas a tu alrededor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Despierto a una nueva visión hoy. Yo elijo mirar con los ojos del corazón.\""
  },
  {
    "day": 10,
    "title": "silencia-TE",
    "teaName": "Infusión de calma mental",
    "benefit": "Mis pensamientos de ahora mismo no tienen ningún valor real.",
    "lesson": "Imagina que en tu cabeza hay mucha gente gritando a la vez. Este ejercicio es como apretar un botón de silencio mágico para escuchar lo bonito que suena el silencio por dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Silencio mi mente hoy. Yo elijo escuchar la paz interior.\""
  },
  {
    "day": 11,
    "title": "deshaz-TE",
    "teaName": "Infusión de purificación emocional",
    "benefit": "Los pensamientos vacíos que tengo solo me muestran cosas que no son verdad.",
    "lesson": "Igual que cuando ordenas tu cajón y sacas aquello que está roto, aquí limpias tu cabeza de ideas feas para quedarte solo con lo que te hace feliz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Deshago los enredos hoy. Yo elijo limpiar mi espacio mental.\""
  },
  {
    "day": 12,
    "title": "libera-TE",
    "teaName": "Infusión de compasión profunda",
    "benefit": "Me siento mal porque miro a mi alrededor y veo un mundo vacío de sentido.",
    "lesson": "Es transformar un lugar que te parecía aburrido o gris en un parque de atracciones lleno de sentido y alegría solo cambiando tu manera de mirarlo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Libero mi percepción hoy. Yo elijo encontrar propósito en mi entorno.\""
  },
  {
    "day": 13,
    "title": "ilumina-TE",
    "teaName": "Infusión de calidez y entereza",
    "benefit": "Un mundo sin amor ni significado solo nos hace sentir miedo.",
    "lesson": "Cuando tenemos miedo, todo se ve oscuro e irreal. Esta infusión enciende una linterna de luz cálida dentro de ti para que todo se ilumine y vuelva la calidez.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me ilumino por dentro hoy. Yo elijo disipar el miedo con calidez.\""
  },
  {
    "day": 14,
    "title": "confia-TE",
    "teaName": "Infusión de certeza absoluta",
    "benefit": "La gran energía creadora del universo jamás creó un mundo sin sentido.",
    "lesson": "Es saber que el mundo no está hecho para sufrir, sino que todo tiene un orden amable y seguro, como un gran colchón donde eres libre de descansar sin miedo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Confío en la vida hoy. Yo elijo descansar en un orden seguro.\""
  },
  {
    "day": 15,
    "title": "desvincula-TE",
    "teaName": "Infusión de ligereza mental",
    "benefit": "Los pensamientos que tengo son solo dibujitos e historias que inventé en mi cabeza.",
    "lesson": "Cuando inventas una historia de miedo con el cojín de casa, sabes que no es verdad. Esto sirve para darte cuenta de que tus dramas son solo dibujos mentales, aceptarlo y dejarlos ir te aligera.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me desvinculo de las historias hoy. Yo elijo soltar los dramas mentales.\""
  },
  {
    "day": 16,
    "title": "neutraliza-TE",
    "teaName": "Infusión de equilibrio y ecuanimidad",
    "benefit": "No existe ningún pensamiento que no importe o que sea totalmente neutro.",
    "lesson": "Cada pensamiento que tienes es como una semilla que plantas en el jardín de tu cabeza. Este ejercicio te ayuda a vigilar qué semillas plantas para que solo crezcan flores de paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Neutralizo el juicio hoy. Yo elijo cuidar la calidad de mis pensamientos.\""
  },
  {
    "day": 17,
    "title": "equilibra-TE",
    "teaName": "Infusión de aprendizaje consciente",
    "benefit": "No hay ninguna cosa a mi alrededor que sea neutral; todo me enseña algo.",
    "lesson": "Imagina que cada personaje o cosa con la que te encuentras hoy te trae un regalo de aprendizaje para hacerte más sabia y feliz. Todo te enseña cosas bonitas. Búscalas en cada situación.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me equilibro hoy. Yo elijo aprender lecciones de paz de mi entorno.\""
  },
  {
    "day": 18,
    "title": "responsabiliza-TE",
    "teaName": "Infusión de conexión colectiva",
    "benefit": "No estoy solo; lo que yo veo y siento también afecta a los demás.",
    "lesson": "Lo que sientes por dentro viaja como olas invisibles hacia tus amigos y familiares. Si estás en paz, imantas a todos con tu alegría.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me responsabilizo de mi energía hoy. Yo elijo sumar bienestar a los demás.\""
  },
  {
    "day": 19,
    "title": "reconoce-TE",
    "teaName": "Infusión de resonancia empática",
    "benefit": "Mis pensamientos no se quedan solo en mí, sino que también llegan a los que me rodean.",
    "lesson": "Tus pensamientos amables salen de ti como palomas mensajeras y van a abrazar a la gente que te rodea para que se sientan felices y seguros.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me reconozco en conexión hoy. Yo elijo enviar pensamientos amables a mi alrededor.\""
  },
  {
    "day": 20,
    "title": "decide-TE",
    "teaName": "Infusión de determinación luminosa",
    "benefit": "¡Estoy totalmente decidida a abrir los ojos y ver de verdad!",
    "lesson": "Es como cuando dices: \"¡Hoy sí que acabaré este trabajo!\" Tomas la decisión valientesima de dejar de cerrar los ojos y decides ver la realidad con total claridad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Decido ver con claridad hoy. Yo elijo abrir los ojos a la verdad.\""
  },
  {
    "day": 21,
    "title": "transforma-TE",
    "teaName": "Infusión de perspectiva renovada",
    "benefit": "Estoy decidida a mirar todas las cosas de una manera bonita y diferente.",
    "lesson": "Es como pintar de colores brillantes y alegres un dibujo que antes se veía apagado. Tú decides encontrar un detalle bonito y especial en todo lo que miras.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Transformo mi mirada hoy. Yo elijo ver lo bello en cada detalle.\""
  },
  {
    "day": 22,
    "title": "suelta-TE",
    "teaName": "Infusión de libertad interior",
    "benefit": "A veces, lo que veo parece una forma de devolver un golpe o vengarme.",
    "lesson": "Cuando alguien te dice algo feo, te viene encima la rabia de defenderte. Este ejercicio dice: \"No quiero pelearme, prefiero bajar las armas y elegir la paz.\"",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Suelto las ganas de defenderme hoy. Yo elijo la paz antes que la pelea.\""
  },
  {
    "day": 23,
    "title": "pacifica-TE",
    "teaName": "Infusión de ecuanimidad",
    "benefit": "Puedo ser libre del mundo que veo si decido soltar y olvidar los pensamientos de pelea.",
    "lesson": "Es como sacar las manos de la catana cuando juegas a pelearte, respirar hondo y darte cuenta de que el mundo puede ser un lugar tranquilo si tú quieres.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me pacifico por dentro hoy. Yo elijo soltar los pensamientos de lucha.\""
  },
  {
    "day": 24,
    "title": "protege-TE",
    "teaName": "Infusión de confianza esencial",
    "benefit": "No sé qué es lo que de verdad me hace bien.",
    "lesson": "Es como dejarte caer en brazos de alguien que te quiere muchísimo sabiendo que no te pasará nada malo. Descansas porque sientes que el bien te cuida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me protejo en la confianza hoy. Yo elijo descansar sabiendo que el bien me guía.\""
  },
  {
    "day": 25,
    "title": "entrega-TE",
    "teaName": "Infusión de apertura y humildad",
    "benefit": "No tengo ni idea de para qué sirven realmente las cosas que me rodean.",
    "lesson": "En lugar de querer mandar en todo como un caprichoso, dejas ir el control y permites que la vida te traiga regalos y sorpresas maravillosos.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Entrego mis expectativas hoy. Yo elijo dejar que la vida me sorprenda con bienestar.\""
  },
  {
    "day": 26,
    "title": "recuerda-TE",
    "teaName": "Infusión de protección de la paz",
    "benefit": "Mis pensamientos de ataque y enojo lo único que hacen es lastimar mi paz interior.",
    "lesson": "Si estás enfurruñada con alguien, a quien haces daño primero es a ti misma a quien has hecho daño, porque pierdes la sonrisa. Este juego te recuerda que cuidar tu paz es el mejor regalo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Recuerdo cuidar mi paz hoy. Yo elijo no lastimarme con enojos.\""
  },
  {
    "day": 27,
    "title": "dispon-TE",
    "teaName": "Infusión de intención genuina",
    "benefit": "Por encima de cualquier otra cosa, ¡lo que más quiero es ver la verdad!",
    "lesson": "Es como decir: \"No me importa quién tiene razón en la pelea, lo que más quiero en el mundo es ver claro y estar en paz.\" Pones la claridad como tu tesoro favorito.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me dispongo a ver la verdad hoy. Yo elijo priorizar la claridad en mi mente.\""
  },
  {
    "day": 28,
    "title": "transforma-TE",
    "teaName": "Infusión de apertura afectiva",
    "benefit": "Por encima de todo, quiero aprender a ver las cosas con amor.",
    "lesson": "Se trata de coger cada pensamiento que tienes y ponerle un lazo de dulzura y afecto, como si abrazaras tus propias ideas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Transformo mi actitud hoy. Yo elijo envolver mis pensamientos en afecto.\""
  },
  {
    "day": 29,
    "title": "ilumina-TE",
    "teaName": "Infusión de presencia integradora",
    "benefit": "La fuerza del amor universal está presente en todo lo que mis ojos ven.",
    "lesson": "Es como descubrir pequeñas chispas de fuego mágico de alegría detrás de las cosas de cada día. Todo brilla si decides mirarlo con afecto.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ilumino mi mirada hoy. Yo elijo ver destellos de armonía a mi alrededor.\""
  },
  {
    "day": 30,
    "title": "reconcilia-TE",
    "teaName": "Infusión de coherencia interna",
    "benefit": "El amor y la bondad están en todo lo que veo porque también viven dentro de mi corazón.",
    "lesson": "Es un juego de espejos: la paz que sientes dentro de ti es exactamente la misma paz que reflejas fuera hacia todos. ¡Todo encaja!",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me reconcilio conmigo hoy. Yo elijo reflejar afuera la paz que siento adentro.\""
  },
  {
    "day": 31,
    "title": "empodera-TE",
    "teaName": "Infusión de fortaleza y soberanía",
    "benefit": "No soy una víctima indefensa del mundo que me rodea.",
    "lesson": "Te recuerda que tú llevas el timón del barco de tus emociones. Nadie puede obligarte a estar triste si tú decides coger el control y estar tranquila.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me empodero hoy. Yo elijo asumir el timón de mi tranquilidad.\""
  },
  {
    "day": 32,
    "title": "inventa-TE",
    "teaName": "Infusión de auto-cocreación",
    "benefit": "Todo este mundo que veo lo he construido yo mismo en mi imaginación.",
    "lesson": "Igual que cuando juegas con barro y crees una figura fantástica, aquí reconoces que tú imaginas y construyes tu propio ambiente de bienestar.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Reconozco mi creatividad hoy. Yo elijo imaginar un entorno lleno de bienestar.\""
  },
  {
    "day": 33,
    "title": "reinventa-TE",
    "teaName": "Infusión de creatividad amable",
    "benefit": "Siempre hay una forma mucho más bonita y amable de mirar el mundo.",
    "lesson": "Ante un problema difícil, en lugar de angustiarte, inventas una manera superamable y divertida de resolverlo con una sonrisa.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me reinvento hoy. Yo elijo buscar la perspectiva más amable ante cualquier reto.\""
  },
  {
    "day": 34,
    "title": "sociega-TE",
    "teaName": "Infusión de sosiego profundo",
    "benefit": "Podría elegir ver paz y tranquilidad en lugar de enojo.",
    "lesson": "Cuando notas que el corazón te va muy rápido por la rabia, te detienes, respiras bien hondo tres veces y eliges la calma en un segundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me sociego hoy. Yo elijo respirar hondo y elegir la calma.\""
  },
  {
    "day": 35,
    "title": "valora-TE",
    "teaName": "Infusión de valor intrínseco",
    "benefit": "Mi mente es una chispa hermosa que forma parte de la gran Mente del universo. ¡Soy un ser lleno de luz y bondad!",
    "lesson": "Es recordar que eres una persona superspecial, hecha de luz y de mucha bondad. Te aprecias tanto que no dejas que nada apague tu brillo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me valoro hoy. Yo elijo reconocer la luz y la dignidad que habitan en mí.\""
  },
  {
    "day": 36,
    "title": "bendice-TE",
    "teaName": "Infusión de irradiación benévola",
    "benefit": "Mi luz y mi bondad abrazan y acompañan todo lo que mis ojos alcanzan a ver.",
    "lesson": "Es como lanzar polvo mágico de estrellas y buenos deseos desde tu corazón hacia todos los que pasan por tu lado. ¡Que todos sean felices!",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Bendigo mi entorno hoy. Yo elijo enviar buenos deseos a todo lo que miro.\""
  },
  {
    "day": 37,
    "title": "expande-TE",
    "teaName": "Infusión de generosidad afectiva",
    "benefit": "Mi bondad y mi amor buenos bendicen a todo el mundo.",
    "lesson": "Tu bienestar es tan grande que no cabe solo dentro de ti; sale a chorro para abrazar y hacer feliz a todo el planeta Tierra.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Expanso mi bondad hoy. Yo elijo compartir mi bienestar con el mundo.\""
  },
  {
    "day": 38,
    "title": "une-TE",
    "teaName": "Infusión de potencial consciente",
    "benefit": "No hay nada bueno que mi bondad no sea capaz de lograr.",
    "lesson": "Es confiar en que hacer el bien tiene un superpoder gigantesco. No hay ninguna tristeza que tu bondad no pueda ayudar a arreglar.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me uno al poder del bien hoy. Yo elijo confiar en lo que mi bondad puede lograr.\""
  },
  {
    "day": 39,
    "title": "salva-TE",
    "teaName": "Infusión de estabilidad genuina",
    "benefit": "Ser una persona bondadosa y llena de luz es lo que me trae la verdadera paz.",
    "lesson": "Cuando sientes que todo va mal, te refugias dentro de tu bondad como si fuera una tienda de campaña segura y acogedora donde nada ni nadie te puede hacer daño.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me salvo del conflicto hoy. Yo elijo la bondad como mi refugio.\""
  },
  {
    "day": 40,
    "title": "acepta-TE",
    "teaName": "Infusión de pertenencia esencial",
    "benefit": "Soy una bendición porque formo parte de la gran familia de la energía creadora.",
    "lesson": "Es saber que formas parte de una gran familia universal donde todos te quieren, eres importante y estás totalmente segura y protegida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me acepto hoy. Yo elijo sentirme parte de un entorno seguro y luminoso.\""
  },
  {
    "day": 41,
    "title": "acompaña-TE",
    "teaName": "Infusión de respaldo interno",
    "benefit": "La fuerza del bien me acompaña y camina conmigo a donde quiera que vaya.",
    "lesson": "Es caminar por la calle sintiendo que llevas de la mano a un amigo invisible y buenísimo que te apoya y te da paz a cada paso que das.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me acompaño con confianza hoy. Yo elijo sentir el respaldo de la paz en mis pasos.\""
  },
  {
    "day": 42,
    "title": "fortalece-TE",
    "teaName": "Infusión de fortaleza interior",
    "benefit": "La energía del amor es mi gran fuerza y mi superpoder. Ver con bondad es su mejor regalo para mí.",
    "lesson": "Tu verdadero superpoder no es ser la más fuerte físicamente, sino tener un corazón tan bondadoso que nada te puede robar la paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me fortalezco hoy. Yo elijo usar la bondad como mi mayor fortaleza.\""
  },
  {
    "day": 43,
    "title": "arraiga-TE",
    "teaName": "Infusión de arraigo profundo",
    "benefit": "La bondad es mi fuente de origen; no puedo ver nada separado de ella.",
    "lesson": "Imagina que eres un árbol fuerte con raíces profundas que nacen directamente de la paz. Nadie te puede arrancar porque sabes de dónde vienes.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me arraigo en la calma hoy. Yo elijo recordar que provengo de la paz.\""
  },
  {
    "day": 44,
    "title": "vincula-TE",
    "teaName": "Infusión de claridad vinculante",
    "benefit": "Esa misma bondad es la luz brillante que me permite ver con claridad.",
    "lesson": "Es lavar la ventana de tu cabeza para que no quede ninguna mancha. Así puedes verlo todo limpio, claro y brillante como un día de sol.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me vinculo a la luz hoy. Yo elijo ver todo con absoluta claridad.\""
  },
  {
    "day": 45,
    "title": "inspira-TE",
    "teaName": "Infusión de inspiración consciente",
    "benefit": "La gran mente del universo es la forma en la que aprendo a pensar con amor.",
    "lesson": "Es conectar con ideas bonitas y limpias, dejando que tu cabeza funcione con mucha serenidad y afecto para todo lo que haces.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me inspiro en la paz hoy. Yo elijo pensar con serenidad y afecto.\""
  },
  {
    "day": 46,
    "title": "perdona-TE",
    "teaName": "Infusión de perdón liberador",
    "benefit": "El amor del universo es el lugar seguro donde aprendo a perdonar de verdad.",
    "lesson": "Es como borrar con una goma de borrar todos los errores pasados y decirte: \"Ya está, todo perdonado.\" Así te mueves con un corazón libre y seguro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me perdono hoy. Yo elijo soltar culpas y habitar un espacio seguro.\""
  },
  {
    "day": 47,
    "title": "refugia-TE",
    "teaName": "Infusión de abrigo inquebrantable",
    "benefit": "Esa gran fuerza es mi refugio más seguro en el que confío plenamente.",
    "lesson": "Es como meterte debajo de una cama de mantas calentitas cuando fuera hace frío. Un lugar de seguridad absoluta donde descansas sin preocupaciones.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me refugio en la calma hoy. Yo elijo descansar en una seguridad absoluta.\""
  },
  {
    "day": 48,
    "title": "tranquiliza-TE",
    "teaName": "Infusión de sosiego profundo",
    "benefit": "No hay nada en este mundo por lo que debamos sentir miedo.",
    "lesson": "Cuando sientas un pequeño susto o miedo, dales una patada con una respiración profunda y pensamientos bonitos de paz hasta que desaparezca del todo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me tranquilizo hoy. Yo elijo disolver el miedo respirando con paz.\""
  },
  {
    "day": 49,
    "title": "escucha-TE",
    "teaName": "Infusión de escucha atenta",
    "benefit": "La voz del amor y de la intuición me habla suavemente durante todo el día.",
    "lesson": "Es cerrar los ojos un momento para escuchar aquella vocecita interior que te dice con mucha dulzura que todo está bien y que estás segura.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Escucho mi interior hoy. Yo elijo atender la voz suave de la paz.\""
  },
  {
    "day": 50,
    "title": "nutre-TE",
    "teaName": "Infusión de nutrición afectiva",
    "benefit": "El amor que nos cuida es el alimento diario de mi corazón.",
    "lesson": "Es como darte un abrazo calentito por dentro cada día, cuidando tu corazón y tu bienestar para que te sientas feliz y muy estimada.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me nutro de paz hoy. Yo elijo alimentar mi corazón con serenidad.\""
  },
  {
    "day": 51,
    "title": "relaja-TE",
    "teaName": "Infusión de relajación consciente",
    "benefit": "Todo lo que veo y pienso: Hoy recuerdo que las cosas de mi habitación y mis pensamientos no me causan malestar por sí solos, sino por el valor que yo les doy.",
    "lesson": "Te ayuda a quitar la tensión de los hombros como si te quitas una mochila pesada, recordando que las cosas no te hacen enfadar solas, sino por el valor que les das.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me relajo hoy. Yo elijo no dar valor al malestar y descansar.\""
  },
  {
    "day": 52,
    "title": "actualiza-TE",
    "teaName": "Infusión de actualización presente",
    "benefit": "Mis pensamientos del pasado: Aprendo que muchas veces me enfado por cosas del pasado que ya no están aquí, así que elijo enfocarme en el presente.",
    "lesson": "Es como limpiar la pizarra de la cabeza para olvidar los problemas de ayer y poner toda tu energía en disfrutar de este momento presente.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Actualizo mi mente hoy. Yo elijo dejar ir el pasado y vivir el presente.\""
  },
  {
    "day": 53,
    "title": "comprende-TE",
    "teaName": "Infusión de comprensión integradora",
    "benefit": "Un mundo lleno de amor: Entiendo que un mundo sin sentido da miedo, pero la gran energía creadora sólo hizo cosas llenas de amor y propósito.",
    "lesson": "Te enseña a mirar con mucha amabilidad aquello que no conoces, perdiendo el miedo al futuro y descubriendo que todo nos trae un buen aprendizaje.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Comprendo con amor hoy. Yo elijo ver propósito en cada aprendizaje.\""
  },
  {
    "day": 54,
    "title": "alinea-TE",
    "teaName": "Infusión de alineación armónica",
    "benefit": "Decido ver la luz: Me doy cuenta de que todo lo que pienso y veo influye en los demás, por eso decido abrir bien los ojos y mirar con amor.",
    "lesson": "Es darte cuenta de que cuando piensas cosas bonitas y amables, todo tu alrededor se contagia de esa misma alegría y paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Alineo mi mente hoy. Yo elijo influir con paz en mi entorno.\""
  },
  {
    "day": 55,
    "title": "armoniza-TE",
    "teaName": "Infusión de concordia profunda",
    "benefit": "Elegir la paz y soltar peleas: Dejo de lado los pensamientos de enojo o venganza para sentir la verdadera paz en mi corazón.",
    "lesson": "Sirve para dejar ir la rabia y las ganas de juzgar a los demás, eligiendo siempre llevar una sonrisa de paz dentro del corazón.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Armonizo mi interior hoy. Yo elijo soltar toda pelea para hallar paz.\""
  },
  {
    "day": 56,
    "title": "ilusion-TE",
    "teaName": "Infusión de percepción lúcida",
    "benefit": "Ver con los ojos del amor: Aprendo que la fuerza del amor está en todo lo que miro porque vive dentro de mi mente.",
    "lesson": "Es como llevar unas gafas mágicas que te hacen ver que el amor y la belleza están escondidas dentro de tu propia mente y en todo lo que miras.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ilusiono mi mirada hoy. Yo elijo ver la belleza que habita en mi mente.\""
  },
  {
    "day": 57,
    "title": "proyecta-TE",
    "teaName": "Infusión de proyección luminosa",
    "benefit": "Mi mente es parte de la gran Mente: No soy una víctima del mundo, puedo elegir ver la paz porque soy una chispa de luz muy especial.",
    "lesson": "Te recuerda que tú no eres víctima de nada ni de nadie, sino que puedes elegir encender tu propia chispa de luz para regalar paz al mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Proyecto mi luz hoy. Yo elijo ser fuente de paz para mi entorno.\""
  },
  {
    "day": 58,
    "title": "compadece-TE",
    "teaName": "Infusión de compasión solidaria",
    "benefit": "Soy un ser lleno de bondad y paz: Mi luz interior ayuda y acompaña a todos los que me rodean, trayéndome una enorme alegría.",
    "lesson": "Es saber que tu bondad es tan radiante que ayuda y acompaña a tus amigos y familiares, llenándolo todo de mucha alegría.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Compadezco con amor hoy. Yo elijo acompañar a otros desde la alegría.\""
  },
  {
    "day": 59,
    "title": "hermana-TE",
    "teaName": "Infusión de fraternidad esencial",
    "benefit": "La fuerza del amor me acompaña siempre: La energía del bien camina conmigo a todas partes, dándome la claridad para pensar con cariño.",
    "lesson": "Es sentir que la fuerza del bien camina siempre de la mano contigo, dándote mucha claridad y afecto a cada paso que das.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me hermano en la paz hoy. Yo elijo caminar sintiendo el afecto a mi lado.\""
  },
  {
    "day": 60,
    "title": "sintoniza-TE",
    "teaName": "Infusión de sintonía sutil",
    "benefit": "El amor es mi mayor refugio y seguridad: Confío en la fuerza que me protege y me habla al oído, porque sé que con ella no hay nada que temer.",
    "lesson": "Te ayuda a confiar en un escudo invisible de amor que te cuida y te habla al oído recordándote que no debes temer nada.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Sintonizo con mi refugio hoy. Yo elijo confiar en la fuerza que me cuida.\""
  },
  {
    "day": 61,
    "title": "brilla-TE",
    "teaName": "Infusión de irradiación brillante",
    "benefit": "Perdonar y soltar los enojos es mi gran superpoder por ser una luz.",
    "lesson": "Es tu superpoder secreto: cuando pierdes la rabia y perdonas, tu luz brilla con mucha más fuerza y alegría.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Brillo con luz propia hoy. Yo elijo perdonar como mi mayor superpoder.\""
  },
  {
    "day": 62,
    "title": "consiente-TE",
    "teaName": "Infusión de presencia consciente",
    "benefit": "La luz que llevo dentro ayuda a que todos encuentren paz a través de mi perdón.",
    "lesson": "Es dejar que la suavidad de tu corazón ayude a otras personas a encontrar la calma gracias a tu perdón y a tu comprensión.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me consiento en calma hoy. Yo elijo llevar paz a través de la comprensión.\""
  },
  {
    "day": 63,
    "title": "mima-TE",
    "teaName": "Infusión de mimo esencial",
    "benefit": "Quiero acordarme siempre de cuál es mi hermosa misión.",
    "lesson": "Sirve para recordar siempre tu misión más bonita: llevar paz, ternura y alegría allá donde vayas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me mima la tranquilidad hoy. Yo elijo recordar mi misión de dar paz.\""
  },
  {
    "day": 64,
    "title": "abraza-TE",
    "teaName": "Infusión de abrazo integrador",
    "benefit": "Mi única misión de amor es la que la gran energía del bien me regaló.",
    "lesson": "Es recordar que el mejor regalo que tienes es compartir el bienestar y hacer el bien a todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Abrazo mi propósito hoy. Yo elijo cumplir mi misión de bienestar.\""
  },
  {
    "day": 65,
    "title": "valora-TE",
    "teaName": "Infusión de valoración equilibrada",
    "benefit": "Hacer el bien y sentirme feliz son exactamente la misma cosa.",
    "lesson": "Te enseña que hacer cosas buenas por los demás y sentirte feliz por dentro son exactamente la misma cosa maravillosa.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Valoro mis acciones hoy. Yo elijo saber que hacer el bien me hace feliz.\""
  },
  {
    "day": 66,
    "title": "celebra-TE",
    "teaName": "Infusión de celebración armónica",
    "benefit": "La fuerza del amor me creó a su misma imagen y semejanza.",
    "lesson": "Es una fiesta para recordar que estás creada con la misma alegría, bondad y luz que todo lo bueno del mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Celebro mi esencia hoy. Yo elijo reconocer el bienestar que me creó.\""
  },
  {
    "day": 67,
    "title": "rinde-TE",
    "teaName": "Infusión de cesación de resistencia",
    "benefit": "El amor verdadero nunca guarda rencor ni se enoja para siempre.",
    "lesson": "Es como estirarte en un prado verde y relajarte, sabiendo que el amor auténtico nunca se enfada ni guarda rencor para siempre.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me rindo a la paz hoy. Yo elijo soltar todo rencor y descansar.\""
  },
  {
    "day": 68,
    "title": "entusiasma-TE",
    "teaName": "Infusión de entusiasmo sereno",
    "benefit": "Los enojos y rencores solo tapan la luz bonita que tengo dentro.",
    "lesson": "Te ayuda a ver que los enfados son solo como nubes grises que tapan temporalmente la luz preciosa que llevas dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me entusiasma la luz hoy. Yo elijo despejar mi brillo interior.\""
  },
  {
    "day": 69,
    "title": "apasiona-TE",
    "teaName": "Infusión de pasión constructiva",
    "benefit": "Todo lo que necesito para sentirme bien y en paz sale de mi propio corazón.",
    "lesson": "Es descubrir que no necesitas buscar nada fuera: todo lo que te hace sentir segura, feliz y en paz ya vive dentro de tu corazón.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me apasiona el bienestar hoy. Yo elijo buscar la paz en mi interior.\""
  },
  {
    "day": 70,
    "title": "enamora-TE",
    "teaName": "Infusión de enamoramiento pacífico",
    "benefit": "Solo el plan de amor del universo para hacernos felices va a funcionar de verdad.",
    "lesson": "Es confiar ciegamente en el plan del universo, sabiendo que lo único que nos hace felices de verdad es el amor y el cuidado mutuo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me enamoro de la paz hoy. Yo elijo confiar en el plan del bienestar.\""
  },
  {
    "day": 71,
    "title": "asombra-TE",
    "teaName": "Infusión de asombro limpio",
    "benefit": "Guardar rencor es ir en contra del plan de amor que nos cuida.",
    "lesson": "Es entender que guardar rencor es ir en contra de tu propio equipo, porque el plan que te cuida solo quiere que estés feliz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me asombro con sencillez hoy. Yo elijo soltar rencores que enturbian mi paz.\""
  },
  {
    "day": 72,
    "title": "sorprende-TE",
    "teaName": "Infusión de sorpresa grata",
    "benefit": "Mi mayor deseo es que brille la luz de la bondad.",
    "lesson": "Es encender la ilusión de ver cómo la bondad brilla con mucha fuerza en todos tus días.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me sorprende la bondad hoy. Yo elijo avivar el deseo de que brille mi luz.\""
  },
  {
    "day": 73,
    "title": "fascina-TE",
    "teaName": "Infusión de fascinación armónica",
    "benefit": "No hay otra regla ni otra fuerza que mande en mi vida más que la del amor.",
    "lesson": "Es recordar que la única ley que manda en tu vida no es el miedo, sino la fuerza mágica y dulce del afecto.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me fascina la armonía hoy. Yo elijo regirme solo por las leyes del afecto.\""
  },
  {
    "day": 74,
    "title": "cautiva-TE",
    "teaName": "Infusión de cautiverio apacible",
    "benefit": "¡La luz del amor ya ha llegado a mi vida!",
    "lesson": "Es abrir los brazos de par en par para celebrar con alegría que el bienestar y el amor ya han llegado de visita a tu vida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me cautiva la luz hoy. Yo elijo acoger el bienestar que ya ha llegado.\""
  },
  {
    "day": 75,
    "title": "deten-TE",
    "teaName": "Infusión de detención consciente",
    "benefit": "No me mandan las reglas del miedo, solo las leyes del cariño y el bien.",
    "lesson": "Es plantar cara al miedo diciéndole que a ti solo te mandan las reglas de la bondad, de la ternura y del buen trato.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me detengo ante el miedo hoy. Yo elijo obedecer solo a las leyes del afecto.\""
  },
  {
    "day": 76,
    "title": "para-TE",
    "teaName": "Infusión de apertura al milagro",
    "benefit": "Tengo todo el derecho del mundo a vivir momentos mágicos llenos de amor y bondad.",
    "lesson": "Te otorga el permiso y el derecho de vivir momentos fantásticos, mágicos y llenos de paz en tu día a día.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Paro un instante hoy. Yo elijo abrirme a vivir momentos mágicos y bondadosos.\""
  },
  {
    "day": 77,
    "title": "pausa-TE",
    "teaName": "Infusión de pausa restauradora",
    "benefit": "Que los milagros y las sorpresas bonitas borren todos mis enojos.",
    "lesson": "Es hacer una respiración honda para que las sorpresas bonitas y los pequeños milagros borren cualquier rastro de mal humor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Hago una pausa hoy. Yo elijo permitir que las sorpresas bonitas borren mis enojos.\""
  },
  {
    "day": 78,
    "title": "respira-TE",
    "teaName": "Infusión de respiración lúcida",
    "benefit": "Quiero entender bien qué me pasa para poder solucionarlo con una sonrisa.",
    "lesson": "Te ayuda a descubrir qué te pasa por dentro cuando estás triste o disgustada, para poder solucionarlo con una sonrisa radiante.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Respiro con calma hoy. Yo elijo comprender mis emociones para sanarlas con una sonrisa.\""
  },
  {
    "day": 79,
    "title": "oxigena-TE",
    "teaName": "Infusión de oxigenación mental",
    "benefit": "Me doy cuenta de que todos mis problemas ya tienen una solución llena de paz.",
    "lesson": "Es darte cuenta de golpe de que por cada pequeño problema que tienes, ya existe una solución tranquila y bonita esperándote.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Oxigeno mi mente hoy. Yo elijo ver que mis retos ya tienen una solución de paz.\""
  },
  {
    "day": 80,
    "title": "revitaliza-TE",
    "teaName": "Infusión de revitalización consciente",
    "benefit": "Repaso que soy una luz brillante y que perdonar a los demás es mi mejor superpoder.",
    "lesson": "Es recordar que eres una estrella brillante y que cada vez que decides perdonar, usas tu superpoder más fuerte.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me revitalizo hoy. Yo elijo recordar que perdonar es mi mayor superpoder.\""
  },
  {
    "day": 81,
    "title": "energiza-TE",
    "teaName": "Infusión de energía renovada",
    "benefit": "Entiendo que mi luz lleva tranquilidad a todos y me ayuda a recordar lo importante que es amar.",
    "lesson": "Es entender que cuando tú estás en paz, esa tranquilidad se esparce a todos y nos recuerda lo bonito que es amar.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Energizo mi interior hoy. Yo elijo compartir tranquilidad y amor.\""
  },
  {
    "day": 82,
    "title": "impulsa-TE",
    "teaName": "Infusión de impulso afectivo",
    "benefit": "Descubro que hacer el bien y sentirme feliz van siempre de la mano.",
    "lesson": "Es un juego divertido donde descubres que llevar a cabo acciones buenas y sentirte feliz van siempre cogidas de la mano.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me impulso a hacer el bien hoy. Yo elijo unir mis acciones con la felicidad.\""
  },
  {
    "day": 83,
    "title": "motiva-TE",
    "teaName": "Infusión de motivación esencial",
    "benefit": "El amor me hizo a su semejanza y me enseña que el corazón bondadoso nunca guarda enojos.",
    "lesson": "Es recuperar la inocencia para recordar que tu corazón es totalmente bondadoso y no necesita guardar ningún tipo de rabia.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me motivo con bondad hoy. Yo elijo mantener un corazón libre de enojos.\""
  },
  {
    "day": 84,
    "title": "anima-TE",
    "teaName": "Infusión de ánimo unificado",
    "benefit": "Comprendo que los rencores ocultan mi luz, y que la verdadera paz depende de lo que elijo en mi mente.",
    "lesson": "Te enseña que los enfados solo ocultan tu luz, y que la clave para estar feliz depende siempre de los pensamientos que tú elijas tener.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me anexo a la paz hoy. Yo elijo elegir pensamientos que dejen brillar mi luz.\""
  },
  {
    "day": 85,
    "title": "levanta-TE",
    "teaName": "Infusión de levantamiento seguro",
    "benefit": "Sé que solo el plan del amor triunfa, y que guardar rencores es ir en contra de esa felicidad.",
    "lesson": "Es saber que solo gana el plan del amor y la alegría, y que guardar rencores solo sirve para ir en contra de tu propia felicidad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me levanto en la luz hoy. Yo elijo apoyar el plan del bienestar y la alegría.\""
  },
  {
    "day": 86,
    "title": "supera-TE",
    "teaName": "Infusión de superación luminosa",
    "benefit": "Deseo con todo mi corazón que brille la luz, sabiendo que no hay más ley ni poder que el de la bondad universal.",
    "lesson": "Es desear con todas las fuerzas que tu luz brille, sabiendo que la única ley que existe es la de la bondad universal.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Supero los temores hoy. Yo elijo hacer brillar la fuerza de la bondad.\""
  },
  {
    "day": 87,
    "title": "atreve-TE",
    "teaName": "Infusión de atrevimiento sereno",
    "benefit": "La luz ya está aquí para guiarme, recordándome que solo me gobiernan las leyes del amor y el cuidado.",
    "lesson": "Es armarte de valentía para dejarte guiar únicamente por las leyes del afecto, del cuidado y de la estima mutua.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me atrevo a confiar hoy. Yo elijo dejarme guiar por las leyes del afecto.\""
  },
  {
    "day": 88,
    "title": "lanza-TE",
    "teaName": "Infusión de lanzamiento confiado",
    "benefit": "Tengo todo el derecho a vivir cosas hermosas y mágicas que reemplacen cualquier pensamiento de enojo.",
    "lesson": "Es recordar que tienes todo el derecho del mundo a vivir experiencias mágicas y preciosas que borren cualquier pensamiento de pelea.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me lanzo a los milagros hoy. Yo elijo vivir experiencias hermosas y sin enojos.\""
  },
  {
    "day": 89,
    "title": "inicia-TE",
    "teaName": "Infusión de inicio fresco",
    "benefit": "Aprendo a mirar mis problemas de frente para entenderlos y darme cuenta de que ya están resueltos con amor.",
    "lesson": "Te enseña a mirar los pequeños problemas de cara, descubriendo con una sonrisa que el amor ya los ha resuelto por ti.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Inicio con claridad hoy. Yo elijo mirar mis retos sabiendo que el amor los resuelve.\""
  },
  {
    "day": 90,
    "title": "activa-TE",
    "teaName": "Infusión de activación luminosa",
    "benefit": "Los momentos mágicos y felices se ven con la luz del amor.",
    "lesson": "Es un recordatorio alegre de que los momentos más divertidos y mágicos del día se ven mucho mejor con la luz del afecto.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Activo mi alegría hoy. Yo elijo ver los momentos mágicos con luz y amor.\""
  },
  {
    "day": 91,
    "title": "mueve-TE",
    "teaName": "Infusión de movimiento liberador",
    "benefit": "Las sorpresas bonitas se ven en la luz, y la luz y la fuerza interior son una sola cosa.",
    "lesson": "Es conectar contigo misma para saber que tu alegría, tu fuerza interior y tu luz forman una sola cosa fantástica.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me muevo en la luz hoy. Yo elijo sentir mi fuerza interior y mi alegría unidas.\""
  },
  {
    "day": 92,
    "title": "comunica-TE",
    "teaName": "Infusión de comunicación afectiva",
    "benefit": "Soy un ser perfecto y maravilloso, tal como me creó el gran amor del universo.",
    "lesson": "Es abrazar tu autoestima para recordar que eres una persona perfecta, maravillosa y llena de luz por dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me comunico con amor propio hoy. Yo elijo recordar que soy un ser perfecto y luminoso.\""
  },
  {
    "day": 93,
    "title": "expresa-TE",
    "teaName": "Infusión de expresión auténtica",
    "benefit": "Soy un solo ser lleno de luz, unido para siempre a la gran energía creadora.",
    "lesson": "Es sentir que formas parte de la gran energía de amor y luz del universo, formando un solo equipo lleno de felicidad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me expreso desde mi esencia hoy. Yo elijo sentirme unida a la gran energía de luz.\""
  },
  {
    "day": 94,
    "title": "manifiesta-TE",
    "teaName": "Infusión de manifestación armónica",
    "benefit": "Sentirme a salvo y feliz viene de mi propio ser interior de luz.",
    "lesson": "Es encontrar un refugio secreto dentro de ti sabiendo que la felicidad y la seguridad auténticas solo viven en tu corazón luminoso.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Manifiesto mi refugio hoy. Yo elijo hallar la felicidad en mi interior luminoso.\""
  },
  {
    "day": 95,
    "title": "trasciende-TE",
    "teaName": "Infusión de trascendencia amplia",
    "benefit": "Soy pura luz y energía bonita, no solo un cuerpo.",
    "lesson": "Es recordar que tú eres muchas cosas más que un cuerpo: eres pura energía bonita, luz y alegría sin límites.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Trasciendo las limitaciones hoy. Yo elijo reconocerme como pura energía de luz.\""
  },
  {
    "day": 96,
    "title": "eleva-TE",
    "teaName": "Infusión de elevación profunda",
    "benefit": "Acepto con alegría mi misión de llevar amor y paz al mundo.",
    "lesson": "Es aceptar con mucha ilusión tu misión más bonita: llenar el mundo de paz y de amor a cada paso que des.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me elevo en mi propósito hoy. Yo elijo aceptar con alegría mi misión de paz.\""
  },
  {
    "day": 97,
    "title": "fusion-TE",
    "teaName": "Infusión de fusión pacífica",
    "benefit": "Mi única tarea aquí en la Tierra es compartir paz y amor con todos.",
    "lesson": "Es descubrir que tu misión más importante aquí en la Tierra es compartir la amistad, la paz y el afecto con todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me fusiono con la tarea de amar hoy. Yo elijo compartir paz con todos.\""
  },
  {
    "day": 98,
    "title": "integra-TE",
    "teaName": "Infusión de integración completa",
    "benefit": "Mi ayuda es súper importante en el gran plan de amor del universo.",
    "lesson": "Es valorarte y saber que tu ayuda es súper importante dentro del gran plan de bienestar del universo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Integro mi valor hoy. Yo elijo reconocer que mi ayuda es valiosa en el plan de paz.\""
  },
  {
    "day": 99,
    "title": "explora-TE",
    "teaName": "Infusión de exploración curiosa",
    "benefit": "El deseo del gran amor para mí es que sea totalmente feliz. Yo también deseo con todo mi corazón ser inmensamente feliz.",
    "lesson": "Es permitirte desear con todo el corazón ser una persona inmensamente feliz y vivir en paz cada día de tu vida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Exploro mi felicidad hoy. Yo elijo permitirme ser inmensamente feliz.\""
  },
  {
    "day": 100,
    "title": "descubre-TE",
    "teaName": "Infusión de descubrimiento dichoso",
    "benefit": "La gran energía del universo es puro amor, y por eso también es pura alegría.",
    "lesson": "Es como cuando descubres un tesoro escondido: te das cuenta de que el universo está lleno de alegría y afecto, y de que estás invitada a celebrarlo y pasarlo muy bien cada día.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Descubro la alegría hoy. Yo elijo sintonizar con la energía de la felicidad.\""
  },
  {
    "day": 101,
    "title": "abandona-TE",
    "teaName": "Infusión de abandono confiado",
    "benefit": "Solo busco las cosas que me traen paz y amor de verdad.",
    "lesson": "Es como cuando eliges solo las cosas que más te gustan y dejas las que te hacen enfadar. Aprendes a buscar solo las cosas que te traen paz de verdad y te hacen sentir estimada.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Abandono lo innecesario hoy. Yo elijo buscar solo lo que me trae paz real.\""
  },
  {
    "day": 102,
    "title": "limpia-TE",
    "teaName": "Infusión de limpieza consciente",
    "benefit": "La paz y la alegría del universo son regalos que ya son míos.",
    "lesson": "Es recordar que la paz y la felicidad son como regalos de cumpleaños que ya son tuyos. Nadie te los puede quitar, solo tienes que abrir el regalo y disfrutarlo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Limpio mis dudas hoy. Yo elijo aceptar la paz y la alegría que ya me pertenecen.\""
  },
  {
    "day": 103,
    "title": "purifica-TE",
    "teaName": "Infusión de purificación esencial",
    "benefit": "Me quedo en silencio y escucho la voz de la verdad en mi corazón.",
    "lesson": "Es como cuando te quedas bien quietecita en tu habitación y escuchas el latir de tu corazón. En ese silencio descubres la voz de la verdad que te dice todo lo que vales.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Purifico mi mente hoy. Yo elijo callar el ruido y escuchar la verdad interior.\""
  },
  {
    "day": 104,
    "title": "silencia-TE",
    "teaName": "Infusión de silencio receptivo",
    "benefit": "La verdad y el amor van a arreglar todos los pensamientos feos de mi mente.",
    "lesson": "Imagina que tu mente tiene un trapo mágico que borra los pensamientos feos o tristes, dejándote la cabeza clara, feliz y llena de cosas amables.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Silencio los juicios hoy. Yo elijo dejar que la verdad ordene mis pensamientos.\""
  },
  {
    "day": 105,
    "title": "aquieta-TE",
    "teaName": "Infusión de quietud interior",
    "benefit": "Regalar amor y recibirlo son exactamente lo mismo.",
    "lesson": "Es como cuando intercambias regalos con la gente que amas: cuando regalas amor a alguien más, te lo estás regalando a ti misma al mismo tiempo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Aquieto mi interior hoy. Yo elijo saber que dar y recibir cariño es lo mismo.\""
  },
  {
    "day": 106,
    "title": "conecta-TE",
    "teaName": "Infusión de conexión profunda",
    "benefit": "Descanso tranquilo en el abrazo del gran amor universal.",
    "lesson": "Es como cuando te pones un pijama bien suave y te tapas con una manta acogedora: te sientes abrazada por el amor del universo y piensas que puedes descansar feliz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Conecto con el descanso hoy. Yo elijo reposar en el abrazo de la paz.\""
  },
  {
    "day": 107,
    "title": "relaja-TE",
    "teaName": "Infusión de relajación consciente",
    "benefit": "Sigo siendo un ser maravilloso, tal como me hizo la energía del bien.",
    "lesson": "Es un recordatorio bonito para ti: no importa lo que pase, tú sigues siendo una persona maravillosa y especial, hecha con todo el cariño del mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me relajo en mi valor hoy. Yo elijo recordar que soy un regalo perfecto de la vida.\""
  },
  {
    "day": 108,
    "title": "descansa-TE",
    "teaName": "Infusión de descanso apacible",
    "benefit": "Recordamos que los momentos bonitos se ven cuando miramos con amor y fortaleza interior.",
    "lesson": "Cuando te detienes un momento y miras las cosas con fuerza y cariño, todo lo que te rodea se vuelve mucho más bonito y lleno de luz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Descanso en mi fortaleza hoy. Yo elijo mirar con amor y firmeza.\""
  },
  {
    "day": 109,
    "title": "premia-TE",
    "teaName": "Infusión de premio merecido",
    "benefit": "La alegría y la luz viven en nuestro corazón porque fuimos creados con puro amor.",
    "lesson": "Es celebrar una fiesta en tu interior porque sabes que fuiste creada con puro afecto, y por eso tu corazón está lleno de luz y de alegría.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me premio con alegría hoy. Yo elijo celebrar que mi corazón es puro amor.\""
  },
  {
    "day": 110,
    "title": "felicita-TE",
    "teaName": "Infusión de felicitación sincera",
    "benefit": "Somos seres de luz unidos a todo el universo, y la paz nace de nuestro propio ser.",
    "lesson": "Es darte cuenta de que estás conectada con todas las estrellas y el universo, y de que la tranquilidad que buscas nace de ti misma.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me felicito en unidad hoy. Yo elijo recordar que la paz nace de mi interior.\""
  },
  {
    "day": 111,
    "title": "divierte-TE",
    "teaName": "Infusión de diversión lúdica",
    "benefit": "Recordamos que somos energía bonita y que tenemos la hermosa misión de compartir paz.",
    "lesson": "Imagina que tienes la misión secreta y divertida de ser una agente de la paz: y que vas por el mundo repartiendo sonrisas y buena energía a todos.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me divierto compartiendo paz hoy. Yo elijo recordar mi hermosa misión de armonía.\""
  },
  {
    "day": 112,
    "title": "enternece-TE",
    "teaName": "Infusión de enternecimiento compasivo",
    "benefit": "Compartir amor es nuestro trabajo más valioso y todos somos necesarios en este plan.",
    "lesson": "Es recordar que el trabajo más importante y valioso que puedes hacer es amar y ayudar, y que tú eres súper necesaria en este equipo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me enternezco con propósito hoy. Yo elijo valorar mi trabajo de compartir afecto.\""
  },
  {
    "day": 113,
    "title": "solidariza-TE",
    "teaName": "Infusión de solidaridad compartida",
    "benefit": "La fuerza del bien quiere que seamos felices, y nosotros también elegimos esa alegría.",
    "lesson": "¿Sabes qué? ¡La fuerza del bien quiere que seas muy, muy feliz! Y tú solo tienes que decir: \"¡Y yo también lo elijo!\" para empezar a disfrutarlo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me solidarizo con la alegría hoy. Yo elijo elegir la felicidad para todos.\""
  },
  {
    "day": 114,
    "title": "recuerda-TE",
    "teaName": "Infusión de memoria luminosa",
    "benefit": "Como la energía del universo es amor, buscar el bien nos da lo que de verdad nos pertenece.",
    "lesson": "Es como recordar dónde guardaste tu objeto preferido: cuando buscas el bien y el amor, encuentras exactamente lo que te hace sentir completa y feliz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Recuerdo lo que me pertenece hoy. Yo elijo buscar el bien que me da paz.\""
  },
  {
    "day": 115,
    "title": "ilumina-TE",
    "teaName": "Infusión de iluminación serena",
    "benefit": "La paz es nuestra, solo necesitamos quedarnos tranquilos para escuchar la verdad del corazón.",
    "lesson": "Es como cuando haces silencio para escuchar a un pájaro cantar. Cuando te quedas tranquila, puedes escuchar la verdad bonita que vive en tu corazón.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ilumino mi escucha hoy. Yo elijo la quietud para oír la verdad interior.\""
  },
  {
    "day": 116,
    "title": "despierta-TE",
    "teaName": "Infusión de despertar pleno",
    "benefit": "La verdad arregla nuestros errores, y aprendemos que dar y recibir cariño es lo mismo.",
    "lesson": "Te ayuda a entender que los errores se pueden arreglar fácilmente con la verdad, y que dar un abrazo es igual de bonito que recibirlo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Despierto a la sanación hoy. Yo elijo dar y recibir afecto con naturalidad.\""
  },
  {
    "day": 117,
    "title": "observa-TE",
    "teaName": "Infusión de observación compasiva",
    "benefit": "Nos sentimos seguros y tranquilos sabiendo que siempre somos un regalo perfecto de la vida.",
    "lesson": "Es sentirte segura y tranquila como cuando te hacen una caricia, sabiendo que tú eres un regalo maravilloso de la vida para el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Observo con ternura hoy. Yo elijo sentirme segura sabiendo que soy un regalo de la vida.\""
  },
  {
    "day": 118,
    "title": "aquieta-TE",
    "teaName": "Infusión de aquieta-miento centrado",
    "benefit": "Perdonar a los demás es la llave mágica para abrir la puerta de la felicidad.",
    "lesson": "Imagina que tienes una llave mágica que abre la puerta de la felicidad: esta llave se llama perdonar y dejar ir las pautas con los demás.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Aquieto mis juicios hoy. Yo elijo usar el perdón como llave de la felicidad.\""
  },
  {
    "day": 119,
    "title": "enfoca-TE",
    "teaName": "Infusión de enfoque lúcido",
    "benefit": "El perdón me regala todo lo bueno y bonito que mi corazón desea.",
    "lesson": "Es como abrir una caja llena de regalos preciosos: cuando perdonas, tu corazón se llena de todas las cosas bonitas que siempre has deseado.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me enfoco en el perdón hoy. Yo elijo recibir todo lo bueno que mi corazón desea.\""
  },
  {
    "day": 120,
    "title": "ubica-TE",
    "teaName": "Infusión de ubicación serena",
    "benefit": "¡Gracias, gran energía del amor, por todos los regalos hermosos que me has dado!",
    "lesson": "Es decir \"¡muchas gracias!\" con una sonrisa gigante a la fuerza del amor por todas las cosas increíbles y bonitas que te regala cada día.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me ubico en la gratitud hoy. Yo elijo agradecer los regalos hermosos de la vida.\""
  },
  {
    "day": 121,
    "title": "perdona-TE",
    "teaName": "Infusión de perdón liberador",
    "benefit": "El amor del universo es el lugar seguro donde aprendo a perdonar de verdad.",
    "lesson": "Es encontrar un rincón secreto y acogedor donde puedes tirar tus culpas y miedos a la basura, quedándote en total paz y seguridad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me perdono hoy. Yo elijo soltar culpas y habitar un espacio seguro.\""
  },
  {
    "day": 122,
    "title": "replantea-TE",
    "teaName": "Infusión de replanteo sabio",
    "benefit": "En un momento de calma y tranquilidad recibo los mejores consejos del amor.",
    "lesson": "Cuando estás bien tranquila y en calma, es cuando te vienen las mejores ideas y los consejos más dulces a tu cabeza.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Replanteo mis ideas hoy. Yo elijo escuchar los consejos de la calma.\""
  },
  {
    "day": 123,
    "title": "deshaz-TE",
    "teaName": "Infusión de deshacer liberador",
    "benefit": "Todo el amor y la amabilidad que doy a los demás me lo estoy dando a mí mismo.",
    "lesson": "Es como un truco de magia: todo el amor, la dulzura y la paciencia que das a los demás, te los estás regalando a ti misma inmediatamente.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Deshago el egoísmo hoy. Yo elijo saber que al dar amor me lo doy a mí misma.\""
  },
  {
    "day": 124,
    "title": "libera-TE",
    "teaName": "Infusión de liberación dulce",
    "benefit": "No existe ningún otro amor tan grande y seguro como el del universo.",
    "lesson": "Es recordar que estás protegida por el amor más grande y seguro del universo, un amor que nunca falla y que te cuida siempre.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Libero mis temores hoy. Yo elijo confiar en el amor más seguro y grande.\""
  },
  {
    "day": 125,
    "title": "ilumina-TE",
    "teaName": "Infusión de iluminación integrada",
    "benefit": "Las cosas feas del mundo no tienen nada que ver con lo que realmente deseo.",
    "lesson": "Es aprender a separar el grano de la paja: las cosas feas del mundo no tienen nada que ver con los deseos bonitos que tiene tu alma.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ilumino mis elecciones hoy. Yo elijo enfocarme en lo que mi alma verdaderamente desea.\""
  },
  {
    "day": 126,
    "title": "confia-TE",
    "teaName": "Infusión de confianza plena",
    "benefit": "Más allá de los problemas, hay un mundo lleno de paz que es el que quiero ver.",
    "lesson": "Más allá de los problemas o de los enojos pasajeros, hay un mundo lleno de paz y colores amables que es el que tú decides mirar.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Confío en la paz hoy. Yo elijo mirar más allá de los problemas hacia la armonía.\""
  },
  {
    "day": 127,
    "title": "desvincula-TE",
    "teaName": "Infusión de desvinculación serena",
    "benefit": "Es imposible mirar el miedo y la paz al mismo tiempo, ¡elijo mirar la paz!",
    "lesson": "Es como mirar a la izquierda o a la derecha: no puedes mirar el miedo y la paz a la vez. ¡Tú decides girar la cabeza y mirar siempre la paz!",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me desvinculo del miedo hoy. Yo elijo mirar exclusivamente la paz.\""
  },
  {
    "day": 128,
    "title": "neutraliza-TE",
    "teaName": "Infusión de neutralización pacífica",
    "benefit": "Nadie que busque la verdad y el amor con ganas puede fallar.",
    "lesson": "Si buscas el amor, la verdad y la paz con ganas y alegría, es imposible que no las encuentres. ¡Todas estas cosas te están esperando!",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Neutralizo la duda hoy. Yo elijo buscar la verdad con sinceras ganas.\""
  },
  {
    "day": 129,
    "title": "equilibra-TE",
    "teaName": "Infusión de equilibrio armónico",
    "benefit": "Libero al mundo de todas las historias feas que inventé sobre él.",
    "lesson": "Es coger una goma de borrar gigante y limpiar el mundo de todas las historias tristes o trabajos que se habían inventado sobre él.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Equilibro mis percepciones hoy. Yo elijo liberar al mundo de historias falsas.\""
  },
  {
    "day": 130,
    "title": "responsabiliza-TE",
    "teaName": "Infusión de responsabilidad afectiva",
    "benefit": "No le daré importancia a los juguetes o cosas que no me traen paz real.",
    "lesson": "Es aprender a no enfadarse por cosas que se rompen y no te traen paz, valorando solo aquello que te hace feliz por dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me responsabilizo de mis prioridades hoy. Yo elijo dar importancia solo a lo que trae paz.\""
  },
  {
    "day": 131,
    "title": "reconoce-TE",
    "teaName": "Infusión de reconocimiento inocente",
    "benefit": "Quiero aprender a perdonar con un corazón limpio y sincero.",
    "lesson": "Es aprender a perdonar con un corazón limpio, sincero y transparente, como el agua clara de un río que no guarda ninguna suciedad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Reconozco la pureza hoy. Yo elijo perdonar con un corazón limpio.\""
  },
  {
    "day": 132,
    "title": "decide-TE",
    "teaName": "Infusión de decisión lúcida",
    "benefit": "Si trato de pelear o defenderme, es porque creí que me estaban atacando.",
    "lesson": "Si sientes ganas de pelearte o defenderte, es solo porque has tenido miedo. Cuando sabes que nadie te quiere hacer daño, no necesitas peleas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Decido soltar las armas hoy. Yo elijo comprender que nadie me ataca.\""
  },
  {
    "day": 133,
    "title": "abre-TE",
    "teaName": "Infusión de apertura receptiva",
    "benefit": "Sentirme enfermo o enfadado es solo una forma de ocultar la verdad del amor.",
    "lesson": "Sentirse enferma o de mal humor es solo una forma en que la mente intenta ocultar el amor. Si lo entiendes, el amor vuelve enseguida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Abro mi entendimiento hoy. Yo elijo ver que el malestar solo oculta el afecto.\""
  },
  {
    "day": 134,
    "title": "suelta-TE",
    "teaName": "Infusión de soltar generosa",
    "benefit": "Cuando limpio mi corazón y sonrío, ayudo a que todos a mi alrededor se sientan bien.",
    "lesson": "Cuando limpias tu corazón y regalas una sonrisa sincera, ayudas como por arte de magia a que todos tus amigos y familiares se sientan bien.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Suelto el juicio hoy. Yo elijo sonreír para que mi entorno se sienta bien.\""
  },
  {
    "day": 135,
    "title": "pacifica-TE",
    "teaName": "Infusión de pacificación profunda",
    "benefit": "El mundo de la paz y la alegría es la mejor opción que puedo elegir.",
    "lesson": "De entre todas las opciones del mundo, elegir el camino de la paz y de la alegría es siempre la mejor decisión que puedes tomar.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me pacifico por dentro hoy. Yo elijo el mundo de la paz como mi mejor opción.\""
  },
  {
    "day": 136,
    "title": "protege-TE",
    "teaName": "Infusión de protección serena",
    "benefit": "Acepto limpiar todos mis errores y volver a empezar con amor.",
    "lesson": "Es aceptar limpiar todos los pequeños errores que has cometido y volver a empezar la jornada con mucha dulzura y ganas de amar.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me protejo renovándome hoy. Yo elijo empezar de nuevo con amor.\""
  },
  {
    "day": 137,
    "title": "entrega-TE",
    "teaName": "Infusión de entrega confiada",
    "benefit": "El amor y el perdón son lo único que sana cualquier tristeza.",
    "lesson": "Es utilizar la magia del amor y del perdón, que son los únicos ingredientes capaces de curar cualquier tristeza.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Entrego mis tristezas hoy. Yo elijo permitir que el perdón sane mi corazón.\""
  },
  {
    "day": 138,
    "title": "recuerda-TE",
    "teaName": "Infusión de protección de la paz",
    "benefit": "Mis pensamientos de ataque y enojo lo único que hacen es lastimar mi paz interior.",
    "lesson": "Es como darte cuenta de que el mundo está hecho de luz y de risas, y de que estás invitada a la fiesta más divertida del universo para estar feliz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Recuerdo cuidar mi paz hoy. Yo elijo no lastimarme con enojos.\""
  },
  {
    "day": 139,
    "title": "dispon-TE",
    "teaName": "Infusión de intención genuina",
    "benefit": "Por encima de cualquier otra cosa, ¡lo que más quiero es ver la verdad!",
    "lesson": "Es como elegir solo los objetos que te hacen sonreír de verdad y dejar de lado las cosas que te hacen poner de mal humor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me dispongo a ver la verdad hoy. Yo elijo priorizar la claridad en mi mente.\""
  },
  {
    "day": 140,
    "title": "transforma-TE",
    "teaName": "Infusión de perspectiva renovada",
    "benefit": "Estoy decidida a mirar todas las cosas de una manera bonita y diferente.",
    "lesson": "Es como abrir un regalo mágico y darte cuenta de que la paz y la alegría ya eran tuyas antes de pedirlas. ¡Ya están en tu corazón!",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Transformo mi mirada hoy. Yo elijo ver lo bello en cada detalle.\""
  },
  {
    "day": 141,
    "title": "maravilla-TE",
    "teaName": "Infusión de maravilla consciente",
    "benefit": "El único amor seguro es el del universo, y el mundo de peleas no nos ofrece nada valioso.",
    "lesson": "Es un juego en el que te quedas muy quieta y en silencio para escuchar la vocecita dulce que te dice la verdad desde dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me maravillo con el afecto hoy. Yo elijo el amor seguro y rechazo las peleas.\""
  },
  {
    "day": 142,
    "title": "reconcilia-TE",
    "teaName": "Infusión de reconciliación sutil",
    "benefit": "Preferimos el mundo de tranquilidad, sabiendo que no se puede mirar el miedo y la paz a la vez.",
    "lesson": "Es confiar en un trapo mágico de amor que viene y limpia todos los pensamientos feos y de rabia de tu cabeza.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me reconcilio con la tranquilidad hoy. Yo elijo mirar únicamente la paz.\""
  },
  {
    "day": 143,
    "title": "empodera-TE",
    "teaName": "Infusión de empoderamiento pacífico",
    "benefit": "Buscar el bien siempre funciona, y al perdonar liberamos al mundo de nuestros malos pensamientos.",
    "lesson": "Te enseña que cuando regalas un abrazo o un pensamiento bonito a alguien, es exactamente como si te lo regalases a ti misma.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me empodero perdonando hoy. Yo elijo liberar al mundo de mis malos pensamientos.\""
  },
  {
    "day": 144,
    "title": "inventa-TE",
    "teaName": "Infusión de creatividad luminosa",
    "benefit": "Le damos valor solo a lo que trae paz y aprendemos a perdonar de verdad.",
    "lesson": "Es como meterte debajo del manto más suave y calentito del mundo para descansar tranquila en el abrazo de la vida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Invento una mirada de paz hoy. Yo elijo valorar únicamente lo que trae tranquilidad.\""
  },
  {
    "day": 145,
    "title": "reinventa-TE",
    "teaName": "Infusión de reinvención armónica",
    "benefit": "No necesitamos pelear ni enfermarnos para protegernos, la paz es nuestra verdadera protección.",
    "lesson": "Sirve para recordarte que eres una persona maravillosa y valiosa, hecha con todo el cuidado y la ternura del universo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me reinvento en la paz hoy. Yo elijo la tranquilidad como mi única protección.\""
  },
  {
    "day": 146,
    "title": "sociega-TE",
    "teaName": "Infusión de sosiego integrador",
    "benefit": "Cuando estamos bien, ayudamos a los demás a estar bien y elegimos el camino de la paz.",
    "lesson": "Es mirar a tu alrededor como una superheroína fortísima que sabe ver lo mejor de cada situación con un corazón lleno de amor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me sociego compartiendo bienestar hoy. Yo elijo el camino de la paz para todos.\""
  },
  {
    "day": 147,
    "title": "sana-TE",
    "teaName": "Infusión de sanación lúcida",
    "benefit": "Aceptamos corregir nuestros fallos porque el amor es lo único que cura todo dolor.",
    "lesson": "Es hacer una fiesta en tu interior celebrando que tu corazón fue creado con mucho amor y está lleno de luz brillante.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Sano mis errores hoy. Yo elijo permitir que el afecto cure cualquier dolor.\""
  },
  {
    "day": 148,
    "title": "bendice-TE",
    "teaName": "Infusión de bendición constante",
    "benefit": "Todas las cosas bonitas de la naturaleza me recuerdan la voz del gran amor.",
    "lesson": "Te ayuda a recordar que estás conectada con todas las estrellas y el universo, y que tu paz nace de tu propia luz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Bendigo la naturaleza hoy. Yo elijo escuchar la voz del afecto en lo que me rodea.\""
  },
  {
    "day": 149,
    "title": "expande-TE",
    "teaName": "Infusión de expansión benévola",
    "benefit": "Tengo el superpoder de elegir siempre entre el enojo o la paz.",
    "lesson": "Es un juego súper divertido donde recuerdas que tu misión especial en la Tierra es ir esparciendo paz y risas por donde pasas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Expanso mi poder de elegir hoy. Yo elijo la paz por encima del enojo.\""
  },
  {
    "day": 150,
    "title": "une-TE",
    "teaName": "Infusión de unión protectora",
    "benefit": "Cuando no ataco ni me defiendo, estoy totalmente a salvo.",
    "lesson": "Es descubrir que tu trabajo más importante como persona es compartir amor, y que tú eres súper necesaria en este equipo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me uno a la seguridad hoy. Yo elijo estar a salvo al no atacar ni defenderme.\""
  },
  {
    "day": 151,
    "title": "salva-TE",
    "teaName": "Infusión de salvación afectiva",
    "benefit": "Soy uno de los ayudantes especiales de la luz y el bien en el mundo.",
    "lesson": "Es darte cuenta de que el mundo quiere que seas inmensamente feliz, y tú decides unirte a esa misma alegría con todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me salvo sirviendo al bien hoy. Yo elijo ser un agente de luz en el mundo.\""
  },
  {
    "day": 152,
    "title": "acepta-TE",
    "teaName": "Infusión de aceptación serena",
    "benefit": "Me hago a un lado y dejo que el amor me enseñe por dónde caminar.",
    "lesson": "Es como encontrar un tesoro que ya era tuyo: buscar el bien siempre te devuelve la paz que te pertenece desde siempre.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Acepto ser guiada hoy. Yo elijo dejar que el afecto me indique el camino.\""
  },
  {
    "day": 153,
    "title": "acompaña-TE",
    "teaName": "Infusión de acompañamiento luminoso",
    "benefit": "Camino junto a la gran energía creadora en un ambiente de luz y alegría.",
    "lesson": "Te enseña que no tienes que correr ni gritar; solo te hace falta quedarte tranquila para escuchar la verdad bonita que tienes en el corazón.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Acompaño mis pasos con luz hoy. Yo elijo caminar en un ambiente de alegría.\""
  },
  {
    "day": 154,
    "title": "fortalece-TE",
    "teaName": "Infusión de fortalecimiento consciente",
    "benefit": "Ahora mismo elijo sentir la presencia amorosa que me rodea.",
    "lesson": "Es darte cuenta de que cuando te comprendes y no te peleas, dar un beso o recibirlo te hace sentir exactamente la misma felicidad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me fortalezco sintiendo la presencia hoy. Yo elijo percibir el afecto a mi alrededor.\""
  },
  {
    "day": 155,
    "title": "arraiga-TE",
    "teaName": "Infusión de arraigo pacífico",
    "benefit": "Hoy aprendo a dar con la misma alegría con la que recibo regalos.",
    "lesson": "Es sentirte completamente segura y sostenida, sabiendo que eres un regalo único y precioso para todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me arraigo en la generosidad hoy. Yo elijo dar con la misma alegría que recibo.\""
  },
  {
    "day": 156,
    "title": "vincula-TE",
    "teaName": "Infusión de vinculación universal",
    "benefit": "Comparto con todos las sorpresas bonitas y sonrisas que he recibido.",
    "lesson": "Es descubrir la llave mágica y secreta: cuando perdonas a los demás, se abre la puerta de un castillo lleno de alegría.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me vinculo compartiendo sonrisas hoy. Yo elijo repartir las sorpresas bonitas.\""
  },
  {
    "day": 157,
    "title": "inspira-TE",
    "teaName": "Infusión de inspiración presente",
    "benefit": "Mi verdadero hogar es la paz; el miedo es solo un visitante que debe irse.",
    "lesson": "Es como abrir una caja llena de sorpresas bonitas: el perdón te regala todo lo que tu corazón desea para estar bien.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me inspiro en mi hogar de paz hoy. Yo elijo dejar ir al miedo como a un visitante.\""
  },
  {
    "day": 158,
    "title": "perdona-TE",
    "teaName": "Infusión de perdón definitivo",
    "benefit": "Dame tu abrazo de luz, querido amigo y hermano de este universo.",
    "lesson": "Es dibujar una sonrisa gigante y decir \"¡gracias!\" a la vida por todos los regalos preciosos que recibes cada día.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Perdono abrazando hoy. Yo elijo sentir la cercanía fraterna en el universo.\""
  },
  {
    "day": 159,
    "title": "refugia-TE",
    "teaName": "Infusión de refugio seguro",
    "benefit": "Sigo siendo un ser perfecto, hecho de puro amor y bondad.",
    "lesson": "Es encontrar un refugio secreto donde puedes limpiar tus errores, sentirte estimada y volver a empezar sin ninguna culpa.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me refugio en mi perfección hoy. Yo elijo recordar que estoy hecha de puro amor.\""
  },
  {
    "day": 160,
    "title": "tranquiliza-TE",
    "teaName": "Infusión de tranquilidad escudo",
    "benefit": "La luz de la vida nunca muere, somos seres libres para siempre.",
    "lesson": "Es descubrir que cuando te quedas en calma y silencio, recibes los mejores consejos de amor para saber qué hacer.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Tranquilizo mi espíritu hoy. Yo elijo saber que soy libre y luminosa para siempre.\""
  },
  {
    "day": 161,
    "title": "escucha-TE",
    "teaName": "Infusión de escucha valiente",
    "benefit": "Ahora estamos unidos a la gran fuente de donde nace todo el amor.",
    "lesson": "Es darte cuenta de que toda la ternura y la paciencia que regalas a tus amigos tiene el mismo efecto para ti misma.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Escucho a mi fuente hoy. Yo elijo sentirme unida al origen de todo el afecto.\""
  },
  {
    "day": 162,
    "title": "nutre-TE",
    "teaName": "Infusión de nutrición interior",
    "benefit": "Que mi mente no olvide nunca lo mucho que el universo me quiere.",
    "lesson": "Es saber que no hay ningún abrazo más grande ni ningún lugar más seguro para ti que el amor del universo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Nutro mi mente hoy. Yo elijo recordar el gran afecto que el universo me tiene.\""
  },
  {
    "day": 163,
    "title": "relaja-TE",
    "teaName": "Infusión de relajación compartida",
    "benefit": "Se me han entregado los regalos más hermosos de la paz y la alegría.",
    "lesson": "Es darte cuenta de que las cosas feas o las peleas de fuera no tienen nada que ver con los deseos bonitos de tu alma.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me relajo recibiendo hoy. Yo elijo aceptar los hermosos regalos de paz.\""
  },
  {
    "day": 164,
    "title": "actualiza-TE",
    "teaName": "Infusión de actualización serena",
    "benefit": "Solo hay una vida de amor y la comparto con toda la creación.",
    "lesson": "Es mirar más allá de los pequeños problemas para descubrir un paisaje inmenso y feliz que está esperando que lo mires.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Actualizo mi conexión hoy. Yo elijo compartir la vida y el afecto con la creación.\""
  },
  {
    "day": 165,
    "title": "comprende-TE",
    "teaName": "Infusión de comprensión profunda",
    "benefit": "El regalo del amor ya me fue dado, lo recibo hoy con un abrazo.",
    "lesson": "Es entender que no puedes mirar el miedo y la paz a la vez; tú eres la reina de tu cabeza y eliges mirar siempre la paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Comprendo el regalo recibido hoy. Yo elijo aceptar el afecto con un abrazo.\""
  },
  {
    "day": 166,
    "title": "alinea-TE",
    "teaName": "Infusión de alineación feliz",
    "benefit": "Vivo feliz gracias al amor del universo y eso me hace libre.",
    "lesson": "Es saber que cuando buscas el amor y la verdad con muchas ganas, es imposible que no los encuentres. ¡Siempre lo consigues!",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Alineo mi libertad hoy. Yo elijo vivir feliz y libre gracias al afecto.\""
  },
  {
    "day": 167,
    "title": "armoniza-TE",
    "teaName": "Infusión de armonización inquebrantable",
    "benefit": "En el gran amor no hay espacio para la crueldad, ni tampoco en mi corazón.",
    "lesson": "Es borrar de tu cuento las historias tristes del pasado para dejar que el mundo sea nuevo, limpio y bonito.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Armonizo mi corazón hoy. Yo elijo excluir toda crueldad de mi interior.\""
  },
  {
    "day": 168,
    "title": "ilusion-TE",
    "teaName": "Infusión de percepción ilusionada",
    "benefit": "Todo nos recuerda al amor y tenemos el poder de decidir ser felices.",
    "lesson": "Es aprender a no enfadarte por las cosas pequeñas o poco importantes que no te ayudan a tener tu mente tranquila y feliz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ilusiono mi destino hoy. Yo elijo usar mi poder para ser feliz.\""
  },
  {
    "day": 169,
    "title": "proyecta-TE",
    "teaName": "Infusión de proyección bella",
    "benefit": "No atacarnos nos mantiene seguros y nos convierte en embajadores del bien.",
    "lesson": "Es aprender a perdonar desde muy adentro, con un corazón transparente, limpio y sin guardar ningún rencor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Proyecto seguridad hoy. Yo elijo ser una embajadora del bien mediante la paz.\""
  },
  {
    "day": 170,
    "title": "compadece-TE",
    "teaName": "Infusión de compasión pacífica",
    "benefit": "Permitimos que el amor nos guíe y caminamos alegres por el mundo.",
    "lesson": "Es darte cuenta de que si te pones a la defensiva es solo porque creíste que alguien te quería hacer daño, pero estás totalmente segura.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Compadezco con alegría hoy. Yo elijo dejarme guiar por el afecto al caminar.\""
  },
  {
    "day": 171,
    "title": "hermana-TE",
    "teaName": "Infusión de fraternidad luminosa",
    "benefit": "Vivimos el momento presente y aprendemos a compartir todo lo bueno.",
    "lesson": "Es descubrir que cuando te sientes enfadada o enferma, solo es una forma de ocultar el amor que tienes dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me hermano en el presente hoy. Yo elijo disfrutar el ahora compartiendo lo bueno.\""
  },
  {
    "day": 172,
    "title": "sintoniza-TE",
    "teaName": "Infusión de sintonía disolvente",
    "benefit": "Compartimos milagros de amor y recordamos que nuestro hogar es la paz.",
    "lesson": "Es ver cómo tu propia sonrisa y tu corazón limpio ayudan a que todos tus amigos y tu familia se sientan bien.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Sintonizo con mi hogar hoy. Yo elijo compartir milagros y habitar en la paz.\""
  },
  {
    "day": 173,
    "title": "ama-TE",
    "teaName": "Infusión de amor incondicional",
    "benefit": "Las cosas que ves a tu alrededor no significan nada por sí solas. Tú eres quien decide si algo te enfada o te da paz en tu cabeza.[cite: 2]",
    "lesson": "Es darte cuenta de que entre todas las opciones del mundo, elegir la alegría y la paz es la mejor jugada que puedes hacer.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ama mi mente hoy. Yo elijo mirar este momento con paz y amabilidad.\"[cite: 2]"
  },
  {
    "day": 174,
    "title": "consiente-TE",
    "teaName": "Infusión de presencia consciente",
    "benefit": "La luz que llevo dentro ayuda a que todos encuentren paz a través de mi perdón.",
    "lesson": "Es la tranquilidad de saber que puedes borrar cualquier equivocación y empezar de nuevo con mucho afecto.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me consiento en calma hoy. Yo elijo llevar paz a través de la comprensión.\""
  },
  {
    "day": 175,
    "title": "mima-TE",
    "teaName": "Infusión de mimo esencial",
    "benefit": "Quiero acordarme siempre de cuál es mi hermosa misión.",
    "lesson": "Es utilizar la magia del amor y del perdón, que son los únicos ingredientes capaces de curar cualquier tristeza.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me mima la tranquilidad hoy. Yo elijo recordar mi misión de dar paz.\""
  },
  {
    "day": 176,
    "title": "abraza-TE",
    "teaName": "Infusión de abrazo integrador",
    "benefit": "Mi única misión de amor es la que la gran energía del bien me regaló.",
    "lesson": "Es un escudo para ti misma: saber que si atacas o te enfadas, a la primera que haces daño es a tu propia paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Abrazo mi propósito hoy. Yo elijo cumplir mi misión de bienestar.\""
  },
  {
    "day": 177,
    "title": "valora-TE",
    "teaName": "Infusión de valoración equilibrada",
    "benefit": "Hacer el bien y sentirme feliz son exactamente la misma cosa.",
    "lesson": "Es decir desde el fondo del alma que prefieres entender la verdad y la bondad antes que ganar cualquier pelea.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Valoro mis acciones hoy. Yo elijo saber que hacer el bien me hace feliz.\""
  },
  {
    "day": 178,
    "title": "celebra-TE",
    "teaName": "Infusión de celebración armónica",
    "benefit": "La fuerza del amor me creó a su misma imagen y semejanza.",
    "lesson": "Es ponerte las gafas de la amabilidad para encontrar un detalle bonito y alegre en cualquier cosa que te pase.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Celebro mi esencia hoy. Yo elijo reconocer el bienestar que me creó.\""
  },
  {
    "day": 179,
    "title": "rinde-TE",
    "teaName": "Infusión de cesación de resistencia",
    "benefit": "El amor verdadero nunca guarda rencor ni se enoja para siempre.",
    "lesson": "Es saber que las peleas no te dan nada bueno y que el único lugar donde estás realmente segura es en el amor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me rindo a la paz hoy. Yo elijo soltar todo rencor y descansar.\""
  },
  {
    "day": 180,
    "title": "entusiasma-TE",
    "teaName": "Infusión de entusiasmo sereno",
    "benefit": "Los enojos y rencores solo tapan la luz bonita que tengo dentro.",
    "lesson": "Es elegir siempre el camino de la tranquilidad, sabiendo que tu mente no puede mirar el miedo y la paz al mismo tiempo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me entusiasma la luz hoy. Yo elijo despejar mi brillo interior.\""
  },
  {
    "day": 181,
    "title": "conecta-TE",
    "teaName": "Infusión de conexión profunda",
    "benefit": "Descanso tranquilo en el abrazo del gran amor universal.",
    "lesson": "Es descubrir que cuando tú perdonas y limpias tus pensamientos, ayudas a hacer que todo el mundo sea un lugar más libre.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Conecto con el descanso hoy. Yo elijo reposar en el abrazo de la paz.\""
  },
  {
    "day": 182,
    "title": "enamora-TE",
    "teaName": "Infusión de enamoramiento pacífico",
    "benefit": "Solo el plan de amor del universo para hacernos felices va a funcionar de verdad.",
    "lesson": "Es amar tu mente y dar valor solo a aquello que te da paz, aprendiendo a perdonar con todo el corazón.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me enamoro de la paz hoy. Yo elijo confiar en el plan del bienestar.\""
  },
  {
    "day": 183,
    "title": "asombra-TE",
    "teaName": "Infusión de asombro limpio",
    "benefit": "Guardar rencor es ir en contra del plan de amor que nos cuida.",
    "lesson": "Es recordar que no te hace falta ponerte enferma ni enfadarte para defenderte, porque la paz es tu mejor escudo protector.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me asombro con sencillez hoy. Yo elijo soltar rencores que enturbian mi paz.\""
  },
  {
    "day": 184,
    "title": "sorprende-TE",
    "teaName": "Infusión de sorpresa grata",
    "benefit": "Mi mayor deseo es que brille la luz de la bondad.",
    "lesson": "Es saber que cuando tú estás bien, ayudas a todo lo que te rodea a estar feliz y elegís juntos el camino de la paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me sorprende la bondad hoy. Yo elijo avivar el deseo de que brille mi luz.\""
  },
  {
    "day": 185,
    "title": "fascina-TE",
    "teaName": "Infusión de fascinación armónica",
    "benefit": "No hay otra regla ni otra fuerza que mande en mi vida más que la del amor.",
    "lesson": "Es aceptar arreglar tus errores sin miedo, sabiendo que la ternura es lo único que cura cualquier dolor de tripa o de cabeza.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me fascina la armonía hoy. Yo elijo regirme solo por las leyes del afecto.\""
  },
  {
    "day": 186,
    "title": "cautiva-TE",
    "teaName": "Infusión de cautiverio apacible",
    "benefit": "¡La luz del amor ya ha llegado a mi vida!",
    "lesson": "Es escuchar la voz dulce de la vida a través del canto de los pájaros, el viento y todas las cosas bonitas de la naturaleza.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me cautiva la luz hoy. Yo elijo acoger el bienestar que ya ha llegado.\""
  },
  {
    "day": 187,
    "title": "deten-TE",
    "teaName": "Infusión de detención consciente",
    "benefit": "No me mandan las reglas del miedo, solo las leyes del cariño y el bien.",
    "lesson": "Es recordar que tienes un superpoder secreto y maravilloso: la capacidad de elegir siempre la paz por encima de cualquier enojo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me detengo ante el miedo hoy. Yo elijo obedecer solo a las leyes del afecto.\""
  },
  {
    "day": 188,
    "title": "para-TE",
    "teaName": "Infusión de apertura al milagro",
    "benefit": "Tengo todo el derecho del mundo a vivir momentos mágicos llenos de amor y bondad.",
    "lesson": "Es como un permiso mágico para abrir bien los ojos y disfrutar de momentos fantásticos y llenos de cosas bonitas cada día.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Paro un instante hoy. Yo elijo abrirme a vivir momentos mágicos y bondadosos.\""
  },
  {
    "day": 189,
    "title": "pausa-TE",
    "teaName": "Infusión de pausa restauradora",
    "benefit": "Que los milagros y las sorpresas bonitas borren todos mis enojos.",
    "lesson": "Es hacer una respiración profunda para dejar que las sorpresas bonitas borren cualquier enfado o pensamiento feo que tengas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Hago una pausa hoy. Yo elijo permitir que las sorpresas bonitas borren mis enojos.\""
  },
  {
    "day": 190,
    "title": "respira-TE",
    "teaName": "Infusión de respiración lúcida",
    "benefit": "Quiero entender bien qué me pasa para poder solucionarlo con una sonrisa.",
    "lesson": "Te ayuda a entender qué te pasa por dentro cuando estás de mal humor, para poder solucionarlo enseguida con una gran sonrisa.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Respiro con calma hoy. Yo elijo comprender mis emociones para sanarlas con una sonrisa.\""
  },
  {
    "day": 191,
    "title": "oxigena-TE",
    "teaName": "Infusión de oxigenación mental",
    "benefit": "Me doy cuenta de que todos mis problemas ya tienen una solución llena de paz.",
    "lesson": "Es darte cuenta de que para cualquier dilema o tontería, ya hay una solución tranquila y bonita esperándote.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Oxigeno mi mente hoy. Yo elijo ver que mis retos ya tienen una solución de paz.\""
  },
  {
    "day": 192,
    "title": "revitaliza-TE",
    "teaName": "Infusión de revitalización consciente",
    "benefit": "Repaso que soy una luz brillante y que perdonar a los demás es mi mejor superpoder.",
    "lesson": "Es recordar que eres una persona llena de luz y que tu mejor superpoder secreto es saber perdonar.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me revitalizo hoy. Yo elijo recordar que perdonar es mi mayor superpoder.\""
  },
  {
    "day": 193,
    "title": "energiza-TE",
    "teaName": "Infusión de energía renovada",
    "benefit": "Entiendo que mi luz lleva tranquilidad a todos y me ayuda a recordar lo importante que es amar.",
    "lesson": "Es descubrir que cuando tú estás tranquila, contagias esta paz a todo el mundo y les recuerdas lo bonito que es amar.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Energizo mi interior hoy. Yo elijo compartir tranquilidad y amor.\""
  },
  {
    "day": 194,
    "title": "impulsa-TE",
    "teaName": "Infusión de impulso afectivo",
    "benefit": "Descubro que hacer el bien y sentirme feliz van siempre de la mano.",
    "lesson": "Es un juego divertido en el que descubres que hacer cosas buenas por los demás y sentirte súper feliz van siempre cogidas de la mano.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me impulso a hacer el bien hoy. Yo elijo unir mis acciones con la felicidad.\""
  },
  {
    "day": 195,
    "title": "motiva-TE",
    "teaName": "Infusión de motivación esencial",
    "benefit": "El amor me hizo a su semejanza y me enseña que el corazón bondadoso nunca guarda enojos.",
    "lesson": "Es recordar que fuiste creada como puro amor y que un corazón tan bonito como el tuyo no necesita guardar ninguna rabia.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me motivo con bondad hoy. Yo elijo mantener un corazón libre de enojos.\""
  },
  {
    "day": 196,
    "title": "anima-TE",
    "teaName": "Infusión de ánimo unificado",
    "benefit": "Comprendo que los rencores ocultan mi luz, y que la verdadera paz depende de lo que elijo en mi mente.",
    "lesson": "Te enseña que los enfados solo ocultan tu luz, y que estar en paz depende de las ideas bonitas que elijas tener.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me anexo a la paz hoy. Yo elijo elegir pensamientos que dejen brillar mi luz.\""
  },
  {
    "day": 197,
    "title": "levanta-TE",
    "teaName": "Infusión de levantamiento seguro",
    "benefit": "Sé que solo el plan del amor triunfa, y que guardar rencores es ir en contra de esa felicidad.",
    "lesson": "Es saber que el amor siempre gana, y que guardar pautas o rabias solo sirve para ponerte piedras en tu propia felicidad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me levanto en la luz hoy. Yo elijo apoyar el plan del bienestar y la alegría.\""
  },
  {
    "day": 198,
    "title": "supera-TE",
    "teaName": "Infusión de superación luminosa",
    "benefit": "Deseo con todo mi corazón que brille la luz, sabiendo que no hay más ley ni poder que el de la bondad universal.",
    "lesson": "Es desear con todo el corazón que tu luz brille, sabiendo que la única regla que manda en el universo es la de la bondad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Supero los temores hoy. Yo elijo hacer brillar la fuerza de la bondad.\""
  },
  {
    "day": 199,
    "title": "atreve-TE",
    "teaName": "Infusión de atrevimiento sereno",
    "benefit": "La luz ya está aquí para guiarme, recordándome que solo me gobiernan las leyes del amor y el cuidado.",
    "lesson": "Es tener la valentía de confiar en las reglas del amor, dejándote guiar siempre por el afecto y el buen trato.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me atrevo a confiar hoy. Yo elijo dejarme guiar por las leyes del afecto.\""
  },
  {
    "day": 200,
    "title": "lanza-TE",
    "teaName": "Infusión de lanzamiento confiado",
    "benefit": "Tengo todo el derecho a vivir cosas hermosas y mágicas que reemplacen cualquier pensamiento de enojo.",
    "lesson": "Es recordar que tienes todo el derecho a vivir cosas mágicas y preciosas que borren cualquier pensamiento de enfado.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me lanzo a los milagros hoy. Yo elijo vivir experiencias hermosas y sin enojos.\""
  },
  {
    "day": 201,
    "title": "inicia-TE",
    "teaName": "Infusión de inicio fresco",
    "benefit": "Aprendo a mirar mis problemas de frente para entenderlos y darme cuenta de que ya están resueltos con amor.",
    "lesson": "Te enseña a mirar los problemas de cara sin miedo, dándote cuenta de que el amor ya los ha resuelto todos por ti.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Inicio con claridad hoy. Yo elijo mirar mis retos sabiendo que el amor los resuelve.\""
  },
  {
    "day": 202,
    "title": "activa-TE",
    "teaName": "Infusión de activación luminosa",
    "benefit": "Los momentos mágicos y felices se ven con la luz del amor.",
    "lesson": "Es un recordatorio alegre de que los momentos más divertidos y mágicos del día se ven mucho mejor cuando miras con afecto.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Activo mi alegría hoy. Yo elijo ver los momentos mágicos con luz y amor.\""
  },
  {
    "day": 203,
    "title": "mueve-TE",
    "teaName": "Infusión de movimiento liberador",
    "benefit": "Las sorpresas bonitas se ven en la luz, y la luz y la fuerza interior son una sola cosa.",
    "lesson": "Es conectar contigo misma para saber que tu alegría, tu fuerza interior y tu luz forman una sola cosa increíble.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me muevo en la luz hoy. Yo elijo sentir mi fuerza interior y mi alegría unidas.\""
  },
  {
    "day": 204,
    "title": "comunica-TE",
    "teaName": "Infusión de comunicación afectiva",
    "benefit": "Soy un ser perfecto y maravilloso, tal como me creó el gran amor del universo.",
    "lesson": "Es abrazar tu autoestima para recordar que eres una persona perfecta, maravillosa y llena de luz por dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me comunico con amor propio hoy. Yo elijo recordar que soy un ser perfecto y luminoso.\""
  },
  {
    "day": 205,
    "title": "expresa-TE",
    "teaName": "Infusión de expresión auténtica",
    "benefit": "Soy un solo ser lleno de luz, unido para siempre a la gran energía creadora.",
    "lesson": "Es sentir que eres pura luz y que estás unida para siempre a la gran energía que lo ha creado todo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me expreso desde mi esencia hoy. Yo elijo sentirme unida a la gran energía de luz.\""
  },
  {
    "day": 206,
    "title": "manifiesta-TE",
    "teaName": "Infusión de manifestación armónica",
    "benefit": "Sentirme a salvo y feliz viene de mi propio ser interior de luz.",
    "lesson": "Es encontrar un refugio secreto dentro de ti sabiendo que la felicidad y la seguridad de verdad vienen de tu propia luz interior.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Manifiesto mi refugio hoy. Yo elijo hallar la felicidad en mi interior luminoso.\""
  },
  {
    "day": 207,
    "title": "trasciende-TE",
    "teaName": "Infusión de trascendencia amplia",
    "benefit": "Soy pura luz y energía bonita, no solo un cuerpo.",
    "lesson": "Es recordar que eres mucho más que un cuerpo: eres pura energía bonita, luz y alegría sin límites.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Trasciendo las limitaciones hoy. Yo elijo reconocerme como pura energía de luz.\""
  },
  {
    "day": 208,
    "title": "eleva-TE",
    "teaName": "Infusión de elevación profunda",
    "benefit": "Acepto con alegría mi misión de llevar amor y paz al mundo.",
    "lesson": "Es aceptar con mucha ilusión tu misión más bonita: llevar paz y amor a todo el mundo donde vayas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me elevo en mi propósito hoy. Yo elijo aceptar con alegría mi misión de paz.\""
  },
  {
    "day": 209,
    "title": "fusion-TE",
    "teaName": "Infusión de fusión pacífica",
    "benefit": "Mi única tarea aquí en la Tierra es compartir paz y amor con todos.",
    "lesson": "Es descubrir que tu única trabajo importante en la Tierra es compartir paz y cariño con todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me fusiono con la tarea de amar hoy. Yo elijo compartir paz con todos.\""
  },
  {
    "day": 210,
    "title": "integra-TE",
    "teaName": "Infusión de integración completa",
    "benefit": "Mi ayuda es súper importante en el gran plan de amor del universo.",
    "lesson": "Es valorarte y saber que tu ayuda es súper importante dentro del gran plan de bienestar del universo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Integro mi valor hoy. Yo elijo reconocer que mi ayuda es valiosa en el plan de paz.\""
  },
  {
    "day": 211,
    "title": "explora-TE",
    "teaName": "Infusión de exploración curiosa",
    "benefit": "El deseo del gran amor para mí es que sea totalmente feliz. Yo también deseo con todo mi corazón ser inmensamente feliz.",
    "lesson": "Es permitirte desear con todo el corazón ser inmensamente feliz y vivir en paz cada día de tu vida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Exploro mi felicidad hoy. Yo elijo permitirme ser inmensamente feliz.\""
  },
  {
    "day": 212,
    "title": "descubre-TE",
    "teaName": "Infusión de descubrimiento dichoso",
    "benefit": "La gran energía del universo es puro amor, y por eso también es pura alegría.",
    "lesson": "Es darte cuenta de que el mundo está hecho de luz y risas, y de que estás invitada a la fiesta más divertida del universo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Descubro la alegría hoy. Yo elijo sintonizar con la energía de la felicidad.\""
  },
  {
    "day": 213,
    "title": "abandona-TE",
    "teaName": "Infusión de abandono confiado",
    "benefit": "Solo busco las cosas que me traen paz y amor de verdad.",
    "lesson": "Es elegir solo las cosas que te hacen sonreír de verdad y dejar de lado las que te ponen de mal humor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Abandono lo innecesario hoy. Yo elijo buscar solo lo que me trae paz real.\""
  },
  {
    "day": 214,
    "title": "limpia-TE",
    "teaName": "Infusión de limpieza consciente",
    "benefit": "La paz y la alegría del universo son regalos que ya son míos.",
    "lesson": "Es abrir un regalo mágico y darte cuenta de que la paz y la alegría ya eran tuyas antes de pedirlas. ¡Ya están en tu corazón!",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Limpio mis dudas hoy. Yo elijo aceptar la paz y la alegría que ya me pertenecen.\""
  },
  {
    "day": 215,
    "title": "purifica-TE",
    "teaName": "Infusión de purificación esencial",
    "benefit": "Me quedo en silencio y escucho la voz de la verdad en mi corazón.",
    "lesson": "Es un juego en el que te quedas muy quieta y en silencio para escuchar la vocecita dulce que te dice la verdad desde dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Purifico mi mente hoy. Yo elijo callar el ruido y escuchar la verdad interior.\""
  },
  {
    "day": 216,
    "title": "silencia-TE",
    "teaName": "Infusión de silencio receptivo",
    "benefit": "La verdad y el amor van a arreglar todos los pensamientos feos de mi mente.",
    "lesson": "Es confiar en un trapo mágico de amor que viene y limpia todos los pensamientos feos y de rabia de tu cabeza.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Silencio los juicios hoy. Yo elijo dejar que la verdad ordene mis pensamientos.\""
  },
  {
    "day": 217,
    "title": "aquieta-TE",
    "teaName": "Infusión de quietud interior",
    "benefit": "Regalar amor y recibirlo son exactamente lo mismo.",
    "lesson": "Te enseña que cuando regalas un abrazo o un pensamiento bonito a alguien, es exactamente como si te lo regalases a ti misma.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Aquieto mi interior hoy. Yo elijo saber que dar y recibir cariño es lo mismo.\""
  },
  {
    "day": 218,
    "title": "conecta-TE",
    "teaName": "Infusión de conexión profunda",
    "benefit": "Descanso tranquilo en el abrazo del gran amor universal.",
    "lesson": "Es como meterte debajo del manto más suave y calentito del mundo para descansar tranquila en el abrazo de la vida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Conecto con el descanso hoy. Yo elijo reposar en el abrazo de la paz.\""
  },
  {
    "day": 219,
    "title": "relaja-TE",
    "teaName": "Infusión de relajación consciente",
    "benefit": "Sigo siendo un ser maravilloso, tal como me hizo la energía del bien.",
    "lesson": "Sirve para recordarte que eres una persona maravillosa y valiosa, hecha con todo el cuidado y la ternura del universo y que eres perfecta tal y como eres.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me relajo en mi valor hoy. Yo elijo recordar que soy un regalo perfecto de la vida.\""
  },
  {
    "day": 220,
    "title": "descansa-TE",
    "teaName": "Infusión de descanso apacible",
    "benefit": "Recordamos que los momentos bonitos se ven cuando miramos con amor y fortaleza interior.",
    "lesson": "Es mirar a tu alrededor como una superheroína fortísima que sabe ver lo mejor de cada situación con un corazón lleno de amor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Descanso en mi fortaleza hoy. Yo elijo mirar con amor y firmeza.\""
  },
  {
    "day": 221,
    "title": "serena-TE",
    "teaName": "Infusión de serenidad profunda",
    "benefit": "La serenidad es el estado natural de un corazón que confía en el bien.",
    "lesson": "Es apagar cualquier nervio o agitación para descansar en la certeza de que todo está bien y de que estás segura.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me sereno hoy. Yo elijo habitar en la quietud de mi mente.\""
  },
  {
    "day": 222,
    "title": "felicita-TE",
    "teaName": "Infusión de felicitación sincera",
    "benefit": "Somos seres de luz unidos a todo el universo, y la paz nace de nuestro propio ser.",
    "lesson": "Te ayuda a recordar que estás conectada con todas las estrellas y el universo, y que tu paz nace de tu propia luz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me felicito en unidad hoy. Yo elijo recordar que la paz nace de mi interior.\""
  },
  {
    "day": 223,
    "title": "divierte-TE",
    "teaName": "Infusión de diversión lúdica",
    "benefit": "Recordamos que somos energía bonita y que tenemos la hermosa misión de compartir paz.",
    "lesson": "Es un juego súper divertido en el que recuerdas que tu misión especial en la Tierra es ir esparciendo paz y risas por donde pasas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me divierto compartiendo paz hoy. Yo elijo recordar mi hermosa misión de armonía.\""
  },
  {
    "day": 224,
    "title": "enternece-TE",
    "teaName": "Infusión de enternecimiento compasivo",
    "benefit": "Compartir amor es nuestro trabajo más valioso y todos somos necesarios en este plan.",
    "lesson": "Es descubrir que tu trabajo más importante como persona es compartir amor, y que tú eres súper necesaria en este equipo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me enternezco con propósito hoy. Yo elijo valorar mi trabajo de compartir afecto.\""
  },
  {
    "day": 225,
    "title": "solidariza-TE",
    "teaName": "Infusión de solidaridad compartida",
    "benefit": "La fuerza del bien quiere que seamos felices, y nosotros también elegimos esa alegría.",
    "lesson": "Es darte cuenta de que el mundo quiere que seas inmensamente feliz, y tú decides unirte a esa misma alegría con todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me solidarizo con la alegría hoy. Yo elijo elegir la felicidad para todos.\""
  },
  {
    "day": 226,
    "title": "recuerda-TE",
    "teaName": "Infusión de memoria luminosa",
    "benefit": "Como la energía del universo es amor, buscar el bien nos da lo que de verdad nos pertenece.",
    "lesson": "Es como encontrar un tesoro que ya era tuyo: buscar el bien siempre te devuelve la paz que te pertenece desde siempre.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Recuerdo lo que me pertenece hoy. Yo elijo buscar el bien que me da paz.\""
  },
  {
    "day": 227,
    "title": "ilumina-TE",
    "teaName": "Infusión de iluminación serena",
    "benefit": "La paz es nuestra, solo necesitamos quedarnos tranquilos para escuchar la verdad del corazón.",
    "lesson": "Te enseña que no tienes que correr ni gritar; solo te hace falta quedarte tranquila para escuchar la verdad bonita que tienes en el corazón.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ilumino mi escucha hoy. Yo elijo la quietud para oír la verdad interior.\""
  },
  {
    "day": 228,
    "title": "despierta-TE",
    "teaName": "Infusión de despertar pleno",
    "benefit": "La verdad arregla nuestros errores, y aprendemos que dar y recibir cariño es lo mismo.",
    "lesson": "Es darte cuenta de que cuando te comprendes y no te peleas, dar un beso o recibirlo te hace sentir exactamente la misma felicidad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Despierto a la sanación hoy. Yo elijo dar y recibir afecto con naturalidad.\""
  },
  {
    "day": 229,
    "title": "observa-TE",
    "teaName": "Infusión de observación compasiva",
    "benefit": "Nos sentimos seguros y tranquilos sabiendo que siempre somos un regalo perfecto de la vida.",
    "lesson": "Es sentirte completamente segura y sostenida, sabiendo que eres un regalo único y precioso para todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Observo con ternura hoy. Yo elijo sentirme segura sabiendo que soy un regalo de la vida.\""
  },
  {
    "day": 230,
    "title": "aquieta-TE",
    "teaName": "Infusión de aquieta-miento centrado",
    "benefit": "Perdonar a los demás es la llave mágica para abrir la puerta de la felicidad.",
    "lesson": "Es descubrir la llave mágica y secreta: cuando perdonas a los demás, se abre la puerta de un castillo lleno de alegría.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Aquieto mis juicios hoy. Yo elijo usar el perdón como llave de la felicidad.\""
  },
  {
    "day": 231,
    "title": "enfoca-TE",
    "teaName": "Infusión de enfoque lúcido",
    "benefit": "El perdón me regala todo lo bueno y bonito que mi corazón desea.",
    "lesson": "Es como abrir una caja llena de sorpresas bonitas: el perdón te regala todo lo que tu corazón desea para estar bien.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me enfoco en el perdón hoy. Yo elijo recibir todo lo bueno que mi corazón desea.\""
  },
  {
    "day": 232,
    "title": "ubica-TE",
    "teaName": "Infusión de ubicación serena",
    "benefit": "¡Gracias, gran energía del amor, por todos los regalos hermosos que me has dado!",
    "lesson": "Es dibujar una sonrisa gigante y decir \"¡gracias!\" a la vida por todos los regalos preciosos que recibes cada día.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me ubico en la gratitud hoy. Yo elijo agradecer los regalos hermosos de la vida.\""
  },
  {
    "day": 233,
    "title": "centra-TE",
    "teaName": "Infusión de centrado estable",
    "benefit": "Quiero recordar siempre que estoy unida a la gran fuerza del bien.",
    "lesson": "Es recordar siempre que caminas cogida de la mano de la gran fuerza del bien, así que nunca estás sola.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me centro en mi unión hoy. Yo elijo recordar que voy de la mano de la fuerza del bien.\""
  },
  {
    "day": 234,
    "title": "replantea-TE",
    "teaName": "Infusión de replanteo sabio",
    "benefit": "En un momento de calma y tranquilidad recibo los mejores consejos del amor.",
    "lesson": "Es descubrir que cuando te quedas en calma y silencio, recibes los mejores consejos de amor para saber qué hacer.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Replanteo mis ideas hoy. Yo elijo escuchar los consejos de la calma.\""
  },
  {
    "day": 235,
    "title": "deshaz-TE",
    "teaName": "Infusión de deshacer liberador",
    "benefit": "Todo el amor y la amabilidad que doy a los demás me lo estoy dando a mí mismo.",
    "lesson": "Es darte cuenta de que toda la ternura y la paciencia que regalas a tu alrededor, te la das a ti misma.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Deshago el egoísmo hoy. Yo elijo saber que al dar amor me lo doy a mí misma.\""
  },
  {
    "day": 236,
    "title": "libera-TE",
    "teaName": "Infusión de liberación dulce",
    "benefit": "No existe ningún otro amor tan grande y seguro como el del universo.",
    "lesson": "Es saber que no hay ningún abrazo más grande ni ningún lugar más seguro para ti que el amor del universo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Libero mis temores hoy. Yo elijo confiar en el amor más seguro y grande.\""
  },
  {
    "day": 237,
    "title": "ilumina-TE",
    "teaName": "Infusión de iluminación integrada",
    "benefit": "Las cosas feas del mundo no tienen nada que ver con lo que realmente deseo.",
    "lesson": "Es darte cuenta de que las cosas feas o las peleas de fuera no tienen nada que ver con los deseos bonitos de tu alma.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ilumino mis elecciones hoy. Yo elijo enfocarme en lo que mi alma verdaderamente desea.\""
  },
  {
    "day": 238,
    "title": "confia-TE",
    "teaName": "Infusión de confianza plena",
    "benefit": "Más allá de los problemas, hay un mundo lleno de paz que es el que quiero ver.",
    "lesson": "Es mirar más allá de los pequeños problemas para descubrir un paisaje inmenso y feliz que está esperando que lo mires.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Confío en la paz hoy. Yo elijo mirar más allá de los problemas hacia la armonía.\""
  },
  {
    "day": 239,
    "title": "desvincula-TE",
    "teaName": "Infusión de desvinculación serena",
    "benefit": "Es imposible mirar el miedo y la paz al mismo tiempo, ¡elijo mirar la paz!",
    "lesson": "Es entender que no puedes mirar el miedo y la paz a la vez; tú eres la reina de tu cabeza y eliges mirar siempre la paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me desvinculo del miedo hoy. Yo elijo mirar exclusivamente la paz.\""
  },
  {
    "day": 240,
    "title": "neutraliza-TE",
    "teaName": "Infusión de neutralización pacífica",
    "benefit": "Nadie que busque la verdad y el amor con ganas puede fallar.",
    "lesson": "Es saber que cuando buscas el amor y la verdad con muchas ganas, es imposible que no los encuentres. ¡Siempre lo consigues!",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Neutralizo la duda hoy. Yo elijo buscar la verdad con sinceras ganas.\""
  },
  {
    "day": 241,
    "title": "equilibra-TE",
    "teaName": "Infusión de equilibrio armónico",
    "benefit": "Libero al mundo de todas las historias feas que inventé sobre él.",
    "lesson": "Es borrar de tu cuento las historias tristes del pasado para dejar que el mundo sea nuevo, limpio y bonito.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Equilibro mis percepciones hoy. Yo elijo liberar al mundo de historias falsas.\""
  },
  {
    "day": 242,
    "title": "responsabiliza-TE",
    "teaName": "Infusión de responsabilidad afectiva",
    "benefit": "No le daré importancia a los juguetes o cosas que no me traen paz real.",
    "lesson": "Es aprender a no enfadarte por objetos o cosas pequeñas que no te ayudan a tener tu mente tranquila y feliz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me responsabilizo de mis prioridades hoy. Yo elijo dar importancia solo a lo que trae paz.\""
  },
  {
    "day": 243,
    "title": "reconoce-TE",
    "teaName": "Infusión de reconocimiento inocente",
    "benefit": "Quiero aprender a perdonar con un corazón limpio y sincero.",
    "lesson": "Es aprender a perdonar desde muy adentro, con un corazón transparente, limpio y sin guardar ningún rencor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Reconozco la pureza hoy. Yo elijo perdonar con un corazón limpio.\""
  },
  {
    "day": 244,
    "title": "decide-TE",
    "teaName": "Infusión de decisión lúcida",
    "benefit": "Si trato de pelear o defenderme, es porque creí que me estaban atacando.",
    "lesson": "Es darte cuenta de que si te pones a la defensiva es solo porque creíste que alguien te quería hacer daño, pero estás totalmente segura.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Decido soltar las armas hoy. Yo elijo comprender que nadie me ataca.\""
  },
  {
    "day": 245,
    "title": "abre-TE",
    "teaName": "Infusión de apertura receptiva",
    "benefit": "Sentirme enfermo o enfadado es solo una forma de ocultar la verdad del amor.",
    "lesson": "Es descubrir que cuando te sientes enfadada o enferma, solo es una forma de ocultar el amor que tienes dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Abro mi entendimiento hoy. Yo elijo ver que el malestar solo oculta el afecto.\""
  },
  {
    "day": 246,
    "title": "suelta-TE",
    "teaName": "Infusión de soltar generosa",
    "benefit": "Cuando limpio mi corazón y sonrío, ayudo a que todos a mi alrededor se sientan bien.",
    "lesson": "Es ver cómo tu propia sonrisa y tu corazón limpio ayudan a que todos tus amigos y tu familia se sientan bien.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Suelto el juicio hoy. Yo elijo sonreír para que mi entorno se sienta bien.\""
  },
  {
    "day": 247,
    "title": "pacifica-TE",
    "teaName": "Infusión de pacificación profunda",
    "benefit": "El mundo de la paz y la alegría es la mejor opción que puedo elegir.",
    "lesson": "Es darte cuenta de que entre todas las opciones del mundo, elegir la alegría y la paz es la mejor jugada que puedes hacer.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me pacifico por dentro hoy. Yo elijo el mundo de la paz como mi mejor opción.\""
  },
  {
    "day": 248,
    "title": "protege-TE",
    "teaName": "Infusión de protección serena",
    "benefit": "Acepto limpiar todos mis errores y volver a empezar con amor.",
    "lesson": "Es la tranquilidad de saber que puedes borrar cualquier equivocación y empezar de nuevo con mucho afecto.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me protejo renovándome hoy. Yo elijo empezar de nuevo con amor.\""
  },
  {
    "day": 249,
    "title": "entrega-TE",
    "teaName": "Infusión de entrega confiada",
    "benefit": "El amor y el perdón son lo único que sana cualquier tristeza.",
    "lesson": "Es utilizar la magia del amor y del perdón, que son los únicos ingredientes capaces de curar cualquier tristeza.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Entrego mis tristezas hoy. Yo elijo permitir que el perdón sane mi corazón.\""
  },
  {
    "day": 250,
    "title": "recuerda-TE",
    "teaName": "Infusión de protección de la paz",
    "benefit": "Mis pensamientos de ataque y enojo lo único que hacen es lastimar mi paz interior.",
    "lesson": "Es como llevar un escudo invisible: te enseña que cuando te enfadas o atacas a alguien, a la primera que haces daño es a tu propia paz interior.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Recuerdo cuidar mi paz hoy. Yo elijo no lastimarme con enojos.\""
  },
  {
    "day": 251,
    "title": "dispon-TE",
    "teaName": "Infusión de intención genuina",
    "benefit": "Por encima de cualquier otra cosa, ¡lo que más quiero es ver la verdad!",
    "lesson": "Es como elegir tu tesoro favorito: preferir entender la verdad y la bondad por encima de cualquier discusión o pelea.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me dispongo a ver la verdad hoy. Yo elijo priorizar la claridad en mi mente.\""
  },
  {
    "day": 252,
    "title": "transforma-TE",
    "teaName": "Infusión de perspectiva renovada",
    "benefit": "Estoy decidida a mirar todas las cosas de una manera bonita y diferente.",
    "lesson": "Es ponerte unas gafas alegres para mirar cada pequeña cosa de tu día con mucha amabilidad y ganas de aprender.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Transformo mi mirada hoy. Yo elijo ver lo bello en cada detalle.\""
  },
  {
    "day": 253,
    "title": "maravilla-TE",
    "teaName": "Infusión de maravilla consciente",
    "benefit": "El único amor seguro es el del universo, y el mundo de peleas no nos ofrece nada valioso.",
    "lesson": "Es recordar que el único amor que no falla nunca es el del universo, y que las peleas no sirven para nada valioso.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me maravillo con el afecto hoy. Yo elijo el amor seguro y rechazo las peleas.\""
  },
  {
    "day": 254,
    "title": "reconcilia-TE",
    "teaName": "Infusión de reconciliación sutil",
    "benefit": "Preferimos el mundo de tranquilidad, sabiendo que no se puede mirar el miedo y la paz a la vez.",
    "lesson": "Es elegir siempre la tranquilidad, sabiendo que tu mente no puede mirar el miedo y la paz al mismo momento.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me reconcilio con la tranquilidad hoy. Yo elijo mirar únicamente la paz.\""
  },
  {
    "day": 255,
    "title": "empodera-TE",
    "teaName": "Infusión de empoderamiento pacífico",
    "benefit": "Buscar el bien siempre funciona, y al perdonar liberamos al mundo de nuestros malos pensamientos.",
    "lesson": "Es descubrir que cuando perdonas, limpias tus pensamientos y ayudas a liberar a todo el mundo de la rabia.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me empodero perdonando hoy. Yo elijo liberar al mundo de mis malos pensamientos.\""
  },
  {
    "day": 256,
    "title": "inventa-TE",
    "teaName": "Infusión de creatividad luminosa",
    "benefit": "Le damos valor solo a lo que trae paz y aprendemos a perdonar de verdad.",
    "lesson": "Es dar valor solo a aquello que te trae una gran tranquilidad al corazón y aprender a perdonar de verdad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Invento una mirada de paz hoy. Yo elijo valorar únicamente lo que trae tranquilidad.\""
  },
  {
    "day": 257,
    "title": "reinventa-TE",
    "teaName": "Infusión de reinvención armónica",
    "benefit": "No necesitamos pelear ni enfermarnos para protegernos, la paz es nuestra verdadera protección.",
    "lesson": "Es saber que no hace falta pelearte ni ponerte enferma para protegerte, porque la paz es tu mejor refugio.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me reinvento en la paz hoy. Yo elijo la tranquilidad como mi única protección.\""
  },
  {
    "day": 258,
    "title": "sociega-TE",
    "teaName": "Infusión de sosiego integrador",
    "benefit": "Cuando estamos bien, ayudamos a los demás a estar bien y elegimos el camino de la paz.",
    "lesson": "Es darte cuenta de que cuando tú estás bien y feliz, ayudas a todo el que te rodea a estar igual de bien. ¡Elegid la paz juntos!",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me sociego compartiendo bienestar hoy. Yo elijo el camino de la paz para todos.\""
  },
  {
    "day": 259,
    "title": "sana-TE",
    "teaName": "Infusión de sanación lúcida",
    "benefit": "Aceptamos corregir nuestros fallos porque el amor es lo único que cura todo dolor.",
    "lesson": "Es aceptar corregir los pequeños errores de tu mente recordando que el cariño y la ternura lo curan todo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Sano mis errores hoy. Yo elijo permitir que el afecto cure cualquier dolor.\""
  },
  {
    "day": 260,
    "title": "bendice-TE",
    "teaName": "Infusión de bendición constante",
    "benefit": "Todas las cosas bonitas de la naturaleza me recuerdan la voz del gran amor.",
    "lesson": "Es escuchar la voz del amor de la vida a través de las cosas bonitas de la naturaleza, como los pájaros y las flores.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Bendigo la naturaleza hoy. Yo elijo escuchar la voz del afecto en lo que me rodea.\""
  },
  {
    "day": 261,
    "title": "expande-TE",
    "teaName": "Infusión de expansión benévola",
    "benefit": "Tengo el superpoder de elegir siempre entre el enojo o la paz.",
    "lesson": "Es recordar que tienes un superpoder increíble: la capacidad de elegir siempre entre enfadarte o estar en paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Expanso mi poder de elegir hoy. Yo elijo la paz por encima del enojo.\""
  },
  {
    "day": 262,
    "title": "une-TE",
    "teaName": "Infusión de unión protectora",
    "benefit": "Cuando no ataco ni me defiendo, estoy totalmente a salvo.",
    "lesson": "Es un juego de paz en el que descubres que cuando decides no atacar a nadie, eres intocable y estás totalmente segura.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me uno a la seguridad hoy. Yo elijo estar a salvo al no atacar ni defenderme.\""
  },
  {
    "day": 263,
    "title": "salva-TE",
    "teaName": "Infusión de salvación afectiva",
    "benefit": "Soy uno de los ayudantes especiales de la luz y el bien en el mundo.",
    "lesson": "Es recordar que eres una ayudante especial de la luz y del bien, repartiendo alegría a todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me salvo sirviendo al bien hoy. Yo elijo ser un agente de luz en el mundo.\""
  },
  {
    "day": 264,
    "title": "acepta-TE",
    "teaName": "Infusión de aceptación serena",
    "benefit": "Me hago a un lado y dejo que el amor me enseñe por dónde caminar.",
    "lesson": "Es hacerte a un lado con mucha humildad para dejar que el amor y la suavidad guíen cada paso que das.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Acepto ser guiada hoy. Yo elijo dejar que el afecto me indique el camino.\""
  },
  {
    "day": 265,
    "title": "acompaña-TE",
    "teaName": "Infusión de acompañamiento luminoso",
    "benefit": "Camino junto a la gran energía creadora en un ambiente de luz y alegría.",
    "lesson": "Es caminar de la mano de la gran energía creadora, disfrutando de un ambiente lleno de luz y de muchas risas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Acompaño mis pasos con luz hoy. Yo elijo caminar en un ambiente de alegría.\""
  },
  {
    "day": 266,
    "title": "fortalece-TE",
    "teaName": "Infusión de fortalecimiento consciente",
    "benefit": "Ahora mismo elijo sentir la presencia amorosa que me rodea.",
    "lesson": "Es cerrar los ojos un segundo para sentir muy adentro el abrazo amoroso que te envuelve a todas horas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me fortalezco sintiendo la presencia hoy. Yo elijo percibir el afecto a mi alrededor.\""
  },
  {
    "day": 267,
    "title": "arraiga-TE",
    "teaName": "Infusión de arraigo pacífico",
    "benefit": "Hoy aprendo a dar con la misma alegría con la que recibo regalos.",
    "lesson": "Es aprender a regalar y compartir tus cosas con la misma alegría con la que recibes un regalo de Navidad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me arraigo en la generosidad hoy. Yo elijo dar con la misma alegría que recibo.\""
  },
  {
    "day": 268,
    "title": "vincula-TE",
    "teaName": "Infusión de vinculación universal",
    "benefit": "Comparto con todos las sorpresas bonitas y sonrisas que he recibido.",
    "lesson": "Es compartir con todos los que te rodean las sonrisas y las sorpresas bonitas que la vida te regala.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me vinculo compartiendo sonrisas hoy. Yo elijo repartir las sorpresas bonitas.\""
  },
  {
    "day": 269,
    "title": "inspira-TE",
    "teaName": "Infusión de inspiración presente",
    "benefit": "Mi verdadero hogar es la paz; el miedo es solo un visitante que debe irse.",
    "lesson": "Es recordar que tu verdadero hogar es la paz, y que el miedo solo es un visitante que viene y se va enseguida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me inspiro en mi hogar de paz hoy. Yo elijo dejar ir al miedo como a un visitante.\""
  },
  {
    "day": 270,
    "title": "perdona-TE",
    "teaName": "Infusión de perdón definitivo",
    "benefit": "Dame tu abrazo de luz, querido amigo y hermano de este universo.",
    "lesson": "Es pedir y dar un abrazo de luz radiante a todas las compañeras y amigas de tu universo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Perdono abrazando hoy. Yo elijo sentir la cercanía fraterna en el universo.\""
  },
  {
    "day": 271,
    "title": "refugia-TE",
    "teaName": "Infusión de refugio seguro",
    "benefit": "Sigo siendo un ser perfecto, hecho de puro amor y bondad.",
    "lesson": "Es recordar que eres una persona perfecta, hecha de pura bondad y de un amor inagotable.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me refugio en mi perfección hoy. Yo elijo recordar que estoy hecha de puro amor.\""
  },
  {
    "day": 272,
    "title": "tranquiliza-TE",
    "teaName": "Infusión de tranquilidad escudo",
    "benefit": "La luz de la vida nunca muere, somos seres libres para siempre.",
    "lesson": "Es saber que la luz de tu vida no se apaga nunca y que eres una persona totalmente libre para siempre.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Tranquilizo mi espíritu hoy. Yo elijo saber que soy libre y luminosa para siempre.\""
  },
  {
    "day": 273,
    "title": "escucha-TE",
    "teaName": "Infusión de escucha valiente",
    "benefit": "Ahora estamos unidos a la gran fuente de donde nace todo el amor.",
    "lesson": "Es recordar que estás conectada con la gran fuente de donde nace todo el afecto y toda la alegría del mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Escucho a mi fuente hoy. Yo elijo sentirme unida al origen de todo el afecto.\""
  },
  {
    "day": 274,
    "title": "nutre-TE",
    "teaName": "Infusión de nutrición interior",
    "benefit": "Que mi mente no olvide nunca lo mucho que el universo me quiere.",
    "lesson": "Es cuidar tu cabeza para que nunca olvide todo lo que te ama el universo a cada instante.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Nutro mi mente hoy. Yo elijo recordar el gran afecto que el universo me tiene.\""
  },
  {
    "day": 275,
    "title": "relaja-TE",
    "teaName": "Infusión de relajación compartida",
    "benefit": "Se me han entregado los regalos más hermosos de la paz y la alegría.",
    "lesson": "Es recordar todos los regalos bonitos de paz y alegría que la vida te ha entregado para cuidarte.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me relajo recibiendo hoy. Yo elijo aceptar los hermosos regalos de paz.\""
  },
  {
    "day": 276,
    "title": "actualiza-TE",
    "teaName": "Infusión de actualización serena",
    "benefit": "Solo hay una vida de amor y la comparto con toda la creación.",
    "lesson": "Es recordar que solo hay una vida de amor, y que la compartes con toda la creación en un gran equipo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Actualizo mi conexión hoy. Yo elijo compartir la vida y el afecto con la creación.\""
  },
  {
    "day": 277,
    "title": "comprende-TE",
    "teaName": "Infusión de comprensión profunda",
    "benefit": "El regalo del amor ya me fue dado, lo recibo hoy con un abrazo.",
    "lesson": "Es recibir hoy con un abrazo gigante el regalo del afecto que ya te pertenece desde el primer día.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Comprendo el regalo recibido hoy. Yo elijo aceptar el afecto con un abrazo.\""
  },
  {
    "day": 278,
    "title": "alinea-TE",
    "teaName": "Infusión de alineación feliz",
    "benefit": "Vivo feliz gracias al amor del universo y eso me hace libre.",
    "lesson": "Es vivir con mucha alegría gracias al afecto de tu entorno, sabiendo que esto te hace completamente libre.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Alineo mi libertad hoy. Yo elijo vivir feliz y libre gracias al afecto.\""
  },
  {
    "day": 279,
    "title": "armoniza-TE",
    "teaName": "Infusión de armonización inquebrantable",
    "benefit": "En el gran amor no hay espacio para la crueldad, ni tampoco en mi corazón.",
    "lesson": "Es recordar que en el amor no hay espacio para la crueldad, y sacarla del todo de tu corazón.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Armonizo mi corazón hoy. Yo elijo excluir toda crueldad de mi interior.\""
  },
  {
    "day": 280,
    "title": "ilusion-TE",
    "teaName": "Infusión de percepción ilusionada",
    "benefit": "Todo nos recuerda al amor y tenemos el poder de decidir ser felices.",
    "lesson": "Es utilizar tu superpoder de decidir para elegir ser una persona feliz a través del afecto.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ilusiono mi destino hoy. Yo elijo usar mi poder para ser feliz.\""
  },
  {
    "day": 281,
    "title": "proyecta-TE",
    "teaName": "Infusión de proyección bella",
    "benefit": "No atacarnos nos mantiene seguros y nos convierte en embajadores del bien.",
    "lesson": "Es saber que no atacar a nadie te mantiene segura y te convierte en una embajadora del bien.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Proyecto seguridad hoy. Yo elijo ser una embajadora del bien mediante la paz.\""
  },
  {
    "day": 282,
    "title": "compadece-TE",
    "teaName": "Infusión de compasión pacífica",
    "benefit": "Permitimos que el amor nos guíe y caminamos alegres por el mundo.",
    "lesson": "Es dejar que el afecto te guíe para caminar bien feliz y alegre por todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Compadezco con alegría hoy. Yo elijo dejarme guiar por el afecto al caminar.\""
  },
  {
    "day": 283,
    "title": "hermana-TE",
    "teaName": "Infusión de fraternidad luminosa",
    "benefit": "Vivimos el momento presente y aprendemos a compartir todo lo bueno.",
    "lesson": "Es disfrutar del momento presente con mucha energía y aprender a compartir todas las cosas buenas con las personas que te rodean.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me hermano en el presente hoy. Yo elijo disfrutar el ahora compartiendo lo bueno.\""
  },
  {
    "day": 284,
    "title": "sintoniza-TE",
    "teaName": "Infusión de sintonía disolvente",
    "benefit": "Compartimos milagros de amor y recordamos que nuestro hogar es la paz.",
    "lesson": "Es compartir pequeños milagros de afecto y recordar que tu verdadero hogar es la paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Sintonizo con mi hogar hoy. Yo elijo compartir milagros y habitar en la paz.\""
  },
  {
    "day": 285,
    "title": "ama-TE",
    "teaName": "Infusión de amor incondicional",
    "benefit": "Las cosas que ves a tu alrededor no significan nada por sí solas. Tú eres quien decide si algo te enfada o te da paz en tu cabeza.[cite: 2]",
    "lesson": "Es fundir toda autocrítica con una ternura infinita hacia ti misma, recordando que eres una persona valiosa tal como eres.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ama mi mente hoy. Yo elijo mirar este momento con paz y amabilidad.\"[cite: 2]"
  },
  {
    "day": 286,
    "title": "consiente-TE",
    "teaName": "Infusión de presencia consciente",
    "benefit": "La luz que llevo dentro ayuda a que todos encuentren paz a través de mi perdón.",
    "lesson": "Es dejar que la suavidad de tu corazón ayude a otras personas a encontrar la calma gracias a tu perdón y a tu comprensión.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me consiento en calma hoy. Yo elijo llevar paz a través de la comprensión.\""
  },
  {
    "day": 287,
    "title": "mima-TE",
    "teaName": "Infusión de mimo esencial",
    "benefit": "Quiero acordarme siempre de cuál es mi hermosa misión.",
    "lesson": "Sirve para recordar siempre tu misión más bonita: llevar paz, ternura y alegría allá donde vayas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me mima la tranquilidad hoy. Yo elijo recordar mi misión de dar paz.\""
  },
  {
    "day": 288,
    "title": "abraza-TE",
    "teaName": "Infusión de abrazo integrador",
    "benefit": "Mi única misión de amor es la que la gran energía del bien me regaló.",
    "lesson": "Es recordar que el mejor regalo que tienes es compartir el bienestar y hacer el bien a todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Abrazo mi propósito hoy. Yo elijo cumplir mi misión de bienestar.\""
  },
  {
    "day": 289,
    "title": "valora-TE",
    "teaName": "Infusión de valoración equilibrada",
    "benefit": "Hacer el bien y sentirme feliz son exactamente la misma cosa.",
    "lesson": "Te enseña que hacer cosas buenas por los demás y sentirte feliz por dentro son exactamente la misma cosa maravillosa.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Valoro mis acciones hoy. Yo elijo saber que hacer el bien me hace feliz.\""
  },
  {
    "day": 290,
    "title": "celebra-TE",
    "teaName": "Infusión de celebración armónica",
    "benefit": "La fuerza del amor me creó a su misma imagen y semejanza.",
    "lesson": "Es una fiesta para recordar que estás creada con la misma alegría, bondad y luz que todo lo bueno del mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Celebro mi esencia hoy. Yo elijo reconocer el bienestar que me creó.\""
  },
  {
    "day": 291,
    "title": "rinde-TE",
    "teaName": "Infusión de cesación de resistencia",
    "benefit": "El amor verdadero nunca guarda rencor ni se enoja para siempre.",
    "lesson": "Es como estirarte en un prado verde y relajarte, sabiendo que el amor auténtico nunca se enfada ni guarda rencor para siempre.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me rindo a la paz hoy. Yo elijo soltar todo rencor y descansar.\""
  },
  {
    "day": 292,
    "title": "entusiasma-TE",
    "teaName": "Infusión de entusiasmo sereno",
    "benefit": "Los enojos y rencores solo tapan la luz bonita que tengo dentro.",
    "lesson": "Te ayuda a ver que los enfados son solo como nubes grises que tapan temporalmente la luz preciosa que llevas dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me entusiasma la luz hoy. Yo elijo despejar mi brillo interior.\""
  },
  {
    "day": 293,
    "title": "enamora-TE",
    "teaName": "Infusión de enamoramiento pacífico",
    "benefit": "Solo el plan de amor del universo para hacernos felices va a funcionar de verdad.",
    "lesson": "Es confiar ciegamente en el plan del universo, sabiendo que lo único que nos hace felices de verdad es el amor y el cuidado mutuo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me enamoro de la paz hoy. Yo elijo confiar en el plan del bienestar.\""
  },
  {
    "day": 294,
    "title": "asombra-TE",
    "teaName": "Infusión de asombro limpio",
    "benefit": "Guardar rencor es ir en contra del plan de amor que nos cuida.",
    "lesson": "Es entender que guardar rencor es ir en contra de tu propio equipo, porque el plan que te cuida solo quiere que estés feliz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me asombro con sencillez hoy. Yo elijo soltar rencores que enturbian mi paz.\""
  },
  {
    "day": 295,
    "title": "sorprende-TE",
    "teaName": "Infusión de sorpresa grata",
    "benefit": "Mi mayor deseo es que brille la luz de la bondad.",
    "lesson": "Es encender la ilusión de ver cómo la bondad brilla con mucha fuerza en todos tus días.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me sorprende la bondad hoy. Yo elijo avivar el deseo de que brille mi luz.\""
  },
  {
    "day": 296,
    "title": "fascina-TE",
    "teaName": "Infusión de fascinación armónica",
    "benefit": "No hay otra regla ni otra fuerza que mande en mi vida más que la del amor.",
    "lesson": "Es recordar que la única ley que manda en tu vida no es el miedo, sino la fuerza mágica y dulce del afecto.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me fascina la armonía hoy. Yo elijo regirme solo por las leyes del afecto.\""
  },
  {
    "day": 297,
    "title": "cautiva-TE",
    "teaName": "Infusión de cautiverio apacible",
    "benefit": "¡La luz del amor ya ha llegado a mi vida!",
    "lesson": "Es abrir los brazos de par en par para celebrar con alegría que el bienestar y el amor ya han llegado de visita a tu vida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me cautiva la luz hoy. Yo elijo acoger el bienestar que ya ha llegado.\""
  },
  {
    "day": 298,
    "title": "deten-TE",
    "teaName": "Infusión de detención consciente",
    "benefit": "No me mandan las reglas del miedo, solo las leyes del cariño y el bien.",
    "lesson": "Es plantar cara al miedo diciéndole que a ti solo te mandan las reglas de la bondad, de la ternura y del buen trato.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me detengo ante el miedo hoy. Yo elijo obedecer solo a las leyes del afecto.\""
  },
  {
    "day": 299,
    "title": "para-TE",
    "teaName": "Infusión de apertura al milagro",
    "benefit": "Tengo todo el derecho del mundo a vivir momentos mágicos llenos de amor y bondad.",
    "lesson": "Te otorga el permiso y el derecho de vivir momentos fantásticos, mágicos y llenos de paz en tu día a día.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Paro un instante hoy. Yo elijo abrirme a vivir momentos mágicos y bondadosos.\""
  },
  {
    "day": 300,
    "title": "pausa-TE",
    "teaName": "Infusión de pausa restauradora",
    "benefit": "Que los milagros y las sorpresas bonitas borren todos mis enojos.",
    "lesson": "Es hacer una respiración profunda para que las sorpresas bonitas y los pequeños milagros borren cualquier rastro de mal humor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Hago una pausa hoy. Yo elijo permitir que las sorpresas bonitas borren mis enojos.\""
  },
  {
    "day": 301,
    "title": "respira-TE",
    "teaName": "Infusión de respiración lúcida",
    "benefit": "Quiero entender bien qué me pasa para poder solucionarlo con una sonrisa.",
    "lesson": "Te ayuda a descubrir qué te pasa por dentro cuando estás triste o disgustada, para poder solucionarlo con una sonrisa radiante.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Respiro con calma hoy. Yo elijo comprender mis emociones para sanarlas con una sonrisa.\""
  },
  {
    "day": 302,
    "title": "oxigena-TE",
    "teaName": "Infusión de oxigenación mental",
    "benefit": "Me doy cuenta de que todos mis problemas ya tienen una solución llena de paz.",
    "lesson": "Es darte cuenta de golpe de que por cada pequeño problema que tienes, ya existe una solución tranquila y bonita esperándote.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Oxigeno mi mente hoy. Yo elijo ver que mis retos ya tienen una solución de paz.\""
  },
  {
    "day": 303,
    "title": "revitaliza-TE",
    "teaName": "Infusión de revitalización consciente",
    "benefit": "Repaso que soy una luz brillante y que perdonar a los demás es mi mejor superpoder.",
    "lesson": "Es recordar que eres una estrella brillante y que cada vez que decides perdonar, usas tu superpoder más fuerte.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me revitalizo hoy. Yo elijo recordar que perdonar es mi mayor superpoder.\""
  },
  {
    "day": 304,
    "title": "energiza-TE",
    "teaName": "Infusión de energía renovada",
    "benefit": "Entiendo que mi luz lleva tranquilidad a todos y me ayuda a recordar lo importante que es amar.",
    "lesson": "Es entender que cuando tú estás en paz, esa tranquilidad se esparce a todos y nos recuerda lo bonito que es amar.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Energizo mi interior hoy. Yo elijo compartir tranquilidad y amor.\""
  },
  {
    "day": 305,
    "title": "impulsa-TE",
    "teaName": "Infusión de impulso afectivo",
    "benefit": "Descubro que hacer el bien y sentirme feliz van siempre de la mano.",
    "lesson": "Es un juego divertido en el que descubres que llevar a cabo acciones buenas y sentirte feliz van siempre cogidas de la mano.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me impulso a hacer el bien hoy. Yo elijo unir mis acciones con la felicidad.\""
  },
  {
    "day": 306,
    "title": "motiva-TE",
    "teaName": "Infusión de motivación esencial",
    "benefit": "El amor me hizo a su semejanza y me enseña que el corazón bondadoso nunca guarda enojos.",
    "lesson": "Es recuperar la inocencia para recordar que tu corazón es totalmente bondadoso y no necesita guardar ningún tipo de rabia.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me motivo con bondad hoy. Yo elijo mantener un corazón libre de enojos.\""
  },
  {
    "day": 307,
    "title": "anima-TE",
    "teaName": "Infusión de ánimo unificado",
    "benefit": "Comprendo que los rencores ocultan mi luz, y que la verdadera paz depende de lo que elijo en mi mente.",
    "lesson": "Te enseña que los enfados solo ocultan tu luz, y que la clave para estar feliz depende siempre de los pensamientos que tú elijas tener.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me anexo a la paz hoy. Yo elijo elegir pensamientos que dejen brillar mi luz.\""
  },
  {
    "day": 308,
    "title": "levanta-TE",
    "teaName": "Infusión de levantamiento seguro",
    "benefit": "Sé que solo el plan del amor triunfa, y que guardar rencores es ir en contra de esa felicidad.",
    "lesson": "Es saber que solo gana el plan del amor y la alegría, y que guardar rencores solo sirve para ir en contra de tu propia felicidad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me levanto en la luz hoy. Yo elijo apoyar el plan del bienestar y la alegría.\""
  },
  {
    "day": 309,
    "title": "supera-TE",
    "teaName": "Infusión de superación luminosa",
    "benefit": "Deseo con todo mi corazón que brille la luz, sabiendo que no hay más ley ni poder que el de la bondad universal.",
    "lesson": "Es desear con todas las fuerzas que tu luz brille, sabiendo que la única ley que existe es la de la bondad universal.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Supero los temores hoy. Yo elijo hacer brillar la fuerza de la bondad.\""
  },
  {
    "day": 310,
    "title": "atreve-TE",
    "teaName": "Infusión de atrevimiento sereno",
    "benefit": "La luz ya está aquí para guiarme, recordándome que solo me gobiernan las leyes del amor y el cuidado.",
    "lesson": "Es armarte de valentía para dejarte guiar únicamente por las leyes del afecto, del cuidado y de la estima mutua.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me atrevo a confiar hoy. Yo elijo dejarme guiar por las leyes del afecto.\""
  },
  {
    "day": 311,
    "title": "lanza-TE",
    "teaName": "Infusión de lanzamiento confiado",
    "benefit": "Tengo todo el derecho a vivir cosas hermosas y mágicas que reemplacen cualquier pensamiento de enojo.",
    "lesson": "Es recordar que tienes todo el derecho del mundo a vivir experiencias mágicas y preciosas que borren cualquier pensamiento de pelea.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me lanzo a los milagros hoy. Yo elijo vivir experiencias hermosas y sin enojos.\""
  },
  {
    "day": 312,
    "title": "inicia-TE",
    "teaName": "Infusión de inicio fresco",
    "benefit": "Aprendo a mirar mis problemas de frente para entenderlos y darme cuenta de que ya están resueltos con amor.",
    "lesson": "Te enseña a mirar los pequeños problemas de cara, descubriendo con una sonrisa que el amor ya los ha resuelto por ti.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Inicio con claridad hoy. Yo elijo mirar mis retos sabiendo que el amor los resuelve.\""
  },
  {
    "day": 313,
    "title": "activa-TE",
    "teaName": "Infusión de activación luminosa",
    "benefit": "Los momentos mágicos y felices se ven con la luz del amor.",
    "lesson": "Es un recordatorio alegre de que los momentos más divertidos y mágicos del día se ven mucho mejor con la luz del afecto.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Activo mi alegría hoy. Yo elijo ver los momentos mágicos con luz y amor.\""
  },
  {
    "day": 314,
    "title": "mueve-TE",
    "teaName": "Infusión de movimiento liberador",
    "benefit": "Las sorpresas bonitas se ven en la luz, y la luz y la fuerza interior son una sola cosa.",
    "lesson": "Es conectar contigo misma para saber que tu alegría, tu fuerza interior y tu luz forman una sola cosa fantástica.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me muevo en la luz hoy. Yo elijo sentir mi fuerza interior y mi alegría unidas.\""
  },
  {
    "day": 315,
    "title": "comunica-TE",
    "teaName": "Infusión de comunicación afectiva",
    "benefit": "Soy un ser perfecto y maravilloso, tal como me creó el gran amor del universo.",
    "lesson": "Es abrazar tu autoestima para recordar que eres una persona perfecta, maravillosa y llena de luz por dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me comunico con amor propio hoy. Yo elijo recordar que soy un ser perfecto y luminoso.\""
  },
  {
    "day": 316,
    "title": "expresa-TE",
    "teaName": "Infusión de expresión auténtica",
    "benefit": "Soy un solo ser lleno de luz, unido para siempre a la gran energía creadora.",
    "lesson": "Es sentir que formas parte de la gran energía de amor y luz del universo, formando un solo equipo lleno de felicidad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me expreso desde mi esencia hoy. Yo elijo sentirme unida a la gran energía de luz.\""
  },
  {
    "day": 317,
    "title": "manifiesta-TE",
    "teaName": "Infusión de manifestación armónica",
    "benefit": "Sentirme a salvo y feliz viene de mi propio ser interior de luz.",
    "lesson": "Es encontrar un refugio secreto dentro de ti sabiendo que la felicidad y la seguridad auténticas solo viven en tu corazón luminoso.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Manifiesto mi refugio hoy. Yo elijo hallar la felicidad en mi interior luminoso.\""
  },
  {
    "day": 318,
    "title": "trasciende-TE",
    "teaName": "Infusión de trascendencia amplia",
    "benefit": "Soy pura luz y energía bonita, no solo un cuerpo.",
    "lesson": "Es recordar que tú eres muchas cosas más que un cuerpo: eres pura energía bonita, luz y alegría sin límites.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Trasciendo las limitaciones hoy. Yo elijo reconocerme como pura energía de luz.\""
  },
  {
    "day": 319,
    "title": "eleva-TE",
    "teaName": "Infusión de elevación profunda",
    "benefit": "Acepto con alegría mi misión de llevar amor y paz al mundo.",
    "lesson": "Es aceptar con mucha ilusión tu misión más bonita: llenar el mundo de paz y de amor a cada paso que des.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me elevo en mi propósito hoy. Yo elijo aceptar con alegría mi misión de paz.\""
  },
  {
    "day": 320,
    "title": "fusion-TE",
    "teaName": "Infusión de fusión pacífica",
    "benefit": "Mi única tarea aquí en la Tierra es compartir paz y amor con todos.",
    "lesson": "Es descubrir que tu misión más importante aquí en la Tierra es compartir la amistad, la paz y el afecto con todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me fusiono con la tarea de amar hoy. Yo elijo compartir paz con todos.\""
  },
  {
    "day": 321,
    "title": "integra-TE",
    "teaName": "Infusión de integración completa",
    "benefit": "Mi ayuda es súper importante en el gran plan de amor del universo.",
    "lesson": "Es valorarte y saber que tu ayuda es súper importante dentro del gran plan de bienestar del universo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Integro mi valor hoy. Yo elijo reconocer que mi ayuda es valiosa en el plan de paz.\""
  },
  {
    "day": 322,
    "title": "explora-TE",
    "teaName": "Infusión de exploración curiosa",
    "benefit": "El deseo del gran amor para mí es que sea totalmente feliz. Yo también deseo con todo mi corazón ser inmensamente feliz.",
    "lesson": "Es permitirte desear con todo el corazón ser una persona inmensamente feliz y vivir en paz cada día de tu vida.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Exploro mi felicidad hoy. Yo elijo permitirme ser inmensamente feliz.\""
  },
  {
    "day": 323,
    "title": "descubre-TE",
    "teaName": "Infusión de descubrimiento dichoso",
    "benefit": "La gran energía del universo es puro amor, y por eso también es pura alegría.",
    "lesson": "Es como cuando descubres un tesoro escondido: te das cuenta de que el universo está lleno de alegría y afecto, y de que estás invitada a celebrarlo y pasarlo muy bien cada día.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Descubro la alegría hoy. Yo elijo sintonizar con la energía de la felicidad.\""
  },
  {
    "day": 324,
    "title": "abandona-TE",
    "teaName": "Infusión de abandono confiado",
    "benefit": "Solo busco las cosas que me traen paz y amor de verdad.",
    "lesson": "Es como cuando eliges solo los objetos que más te gustan y dejas de lado los que te hacen enfadar. Aprendes a buscar solo las cosas que te traen paz de verdad y te hacen sentir estimada.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Abandono lo innecesario hoy. Yo elijo buscar solo lo que me trae paz real.\""
  },
  {
    "day": 325,
    "title": "limpia-TE",
    "teaName": "Infusión de limpieza consciente",
    "benefit": "La paz y la alegría del universo son regalos que ya son míos.",
    "lesson": "Es recordar que la paz y la felicidad son como regalos de cumpleaños que ya son tuyos. Nadie te los puede quitar, solo tienes que abrir el regalo y disfrutarlo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Limpio mis dudas hoy. Yo elijo aceptar la paz y la alegría que ya me pertenecen.\""
  },
  {
    "day": 326,
    "title": "purifica-TE",
    "teaName": "Infusión de purificación esencial",
    "benefit": "Me quedo en silencio y escucho la voz de la verdad en mi corazón.",
    "lesson": "Es como cuando te quedas bien quieta en tu habitación y escuchas el latir de tu corazón. En ese silencio descubres la voz de la verdad que te dice cuánto vales.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Purifico mi mente hoy. Yo elijo callar el ruido y escuchar la verdad interior.\""
  },
  {
    "day": 327,
    "title": "silencia-TE",
    "teaName": "Infusión de silencio receptivo",
    "benefit": "La verdad y el amor van a arreglar todos los pensamientos feos de mi mente.",
    "lesson": "Imagina que tu mente tiene un trapo mágico que borra los pensamientos feos o tristes, dejándote la cabeza clara, feliz y llena de cosas amables.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Silencio los juicios hoy. Yo elijo dejar que la verdad ordene mis pensamientos.\""
  },
  {
    "day": 328,
    "title": "aquieta-TE",
    "teaName": "Infusión de quietud interior",
    "benefit": "Regalar amor y recibirlo son exactamente lo mismo.",
    "lesson": "Es como cuando intercambias regalos con tu mejor amiga: cuando regalas amor a alguien más, te lo estás regalando a ti misma al mismo tiempo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Aquieto mi interior hoy. Yo elijo saber que dar y recibir cariño es lo mismo.\""
  },
  {
    "day": 329,
    "title": "conecta-TE",
    "teaName": "Infusión de conexión profunda",
    "benefit": "Descanso tranquilo en el abrazo del gran amor universal.",
    "lesson": "Es como cuando te pones un pijama bien suave y te tapas con una manta acogedora: te sientes abrazada por el amor del universo y piensas que puedes descansar feliz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Conecto con el descanso hoy. Yo elijo reposar en el abrazo de la paz.\""
  },
  {
    "day": 330,
    "title": "relaja-TE",
    "teaName": "Infusión de relajación consciente",
    "benefit": "Sigo siendo un ser maravilloso, tal como me hizo la energía del bien.",
    "lesson": "Es hacer una fiesta en tu interior celebrando que tu corazón fue creado con puro amor y está lleno de luz brillante.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me relajo en mi valor hoy. Yo elijo recordar que soy un regalo perfecto de la vida.\""
  },
  {
    "day": 331,
    "title": "descansa-TE",
    "teaName": "Infusión de descanso apacible",
    "benefit": "Recordamos que los momentos bonitos se ven cuando miramos con amor y fortaleza interior.",
    "lesson": "Es mirar a tu alrededor como una superheroína fortísima que sabe ver lo mejor de cada situación con un corazón lleno de amor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Descanso en mi fortaleza hoy. Yo elijo mirar con amor y firmeza.\""
  },
  {
    "day": 332,
    "title": "premia-TE",
    "teaName": "Infusión de premio merecido",
    "benefit": "La alegría y la luz viven en nuestro corazón porque fuimos creados con puro amor.",
    "lesson": "Es un juego súper divertido en el que recuerdas que tu misión especial en la Tierra es ir esparciendo paz y risas por donde pasas.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me premio con alegría hoy. Yo elijo celebrar que mi corazón es puro amor.\""
  },
  {
    "day": 333,
    "title": "felicita-TE",
    "teaName": "Infusión de felicitación sincera",
    "benefit": "Somos seres de luz unidos a todo el universo, y la paz nace de nuestro propio ser.",
    "lesson": "Te ayuda a recordar que estás conectada con todas las estrellas y el universo, y que tu paz nace de tu propia luz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me felicito en unidad hoy. Yo elijo recordar que la paz nace de mi interior.\""
  },
  {
    "day": 334,
    "title": "divierte-TE",
    "teaName": "Infusión de diversión lúdica",
    "benefit": "Recordamos que somos energía bonita y que tenemos la hermosa misión de compartir paz.",
    "lesson": "Es descubrir que tu trabajo más importante como persona es compartir amor, y que tú eres súper necesaria en este equipo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me divierto compartiendo paz hoy. Yo elijo recordar mi hermosa misión de armonía.\""
  },
  {
    "day": 335,
    "title": "enternece-TE",
    "teaName": "Infusión de enternecimiento compasivo",
    "benefit": "Compartir amor es nuestro trabajo más valioso y todos somos necesarios en este plan.",
    "lesson": "Es darte cuenta de que el mundo quiere que seas inmensamente feliz, y tú decides unirte a esa misma alegría con todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me enternezco con propósito hoy. Yo elijo valorar mi trabajo de compartir afecto.\""
  },
  {
    "day": 336,
    "title": "solidariza-TE",
    "teaName": "Infusión de solidaridad compartida",
    "benefit": "La fuerza del bien quiere que seamos felices, y nosotros también elegimos esa alegría.",
    "lesson": "Es como encontrar un tesoro que ya era tuyo: buscar el bien siempre te devuelve la paz que te pertenece desde siempre.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me solidarizo con la alegría hoy. Yo elijo elegir la felicidad para todos.\""
  },
  {
    "day": 337,
    "title": "recuerda-TE",
    "teaName": "Infusión de memoria luminosa",
    "benefit": "Como la energía del universo es amor, buscar el bien nos da lo que de verdad nos pertenece.",
    "lesson": "Te enseña que no tienes que correr ni gritar; solo te hace falta quedarte tranquila para escuchar la verdad bonita que tienes en el corazón.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Recuerdo lo que me pertenece hoy. Yo elijo buscar el bien que me da paz.\""
  },
  {
    "day": 338,
    "title": "ilumina-TE",
    "teaName": "Infusión de iluminación serena",
    "benefit": "La paz es nuestra, solo necesitamos quedarnos tranquilos para escuchar la verdad del corazón.",
    "lesson": "Es darte cuenta de que cuando te comprendes y no te peleas, dar un beso o recibirlo te hace sentir exactamente la misma felicidad.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ilumino mi escucha hoy. Yo elijo la quietud para oír la verdad interior.\""
  },
  {
    "day": 339,
    "title": "despierta-TE",
    "teaName": "Infusión de despertar pleno",
    "benefit": "La verdad arregla nuestros errores, y aprendemos que dar y recibir cariño es lo mismo.",
    "lesson": "Es sentirte completamente segura y sostenida, sabiendo que eres un regalo único y precioso para todo el mundo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Despierto a la sanación hoy. Yo elijo dar y recibir afecto con naturalidad.\""
  },
  {
    "day": 340,
    "title": "observa-TE",
    "teaName": "Infusión de observación compasiva",
    "benefit": "Nos sentimos seguros y tranquilos sabiendo que siempre somos un regalo perfecto de la vida.",
    "lesson": "Es descubrir la llave mágica y secreta: cuando perdonas a los demás, se abre la puerta de un castillo lleno de alegría.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Observo con ternura hoy. Yo elijo sentirme segura sabiendo que soy un regalo de la vida.\""
  },
  {
    "day": 341,
    "title": "aquieta-TE",
    "teaName": "Infusión de aquieta-miento centrado",
    "benefit": "Perdonar a los demás es la llave mágica para abrir la puerta de la felicidad.",
    "lesson": "Es como abrir una caja llena de sorpresas bonitas: el perdón te regala todo lo que tu corazón desea para estar bien.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Aquieto mis juicios hoy. Yo elijo usar el perdón como llave de la felicidad.\""
  },
  {
    "day": 342,
    "title": "enfoca-TE",
    "teaName": "Infusión de enfoque lúcido",
    "benefit": "El perdón me regala todo lo bueno y bonito que mi corazón desea.",
    "lesson": "Es dibujar una sonrisa gigante y decir \"¡gracias!\" a la vida por todos los regalos preciosos que recibes cada día.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me enfoco en el perdón hoy. Yo elijo recibir todo lo bueno que mi corazón desea.\""
  },
  {
    "day": 343,
    "title": "ubica-TE",
    "teaName": "Infusión de ubicación serena",
    "benefit": "¡Gracias, gran energía del amor, por todos los regalos hermosos que me has dado!",
    "lesson": "Es recordar siempre que camines cogida de la mano de la gran fuerza del bien, así que nunca estás sola.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me ubico en la gratitud hoy. Yo elijo agradecer los regalos hermosos de la vida.\""
  },
  {
    "day": 344,
    "title": "centra-TE",
    "teaName": "Infusión de centrado estable",
    "benefit": "Quiero recordar siempre que estoy unida a la gran fuerza del bien.",
    "lesson": "Es descubrir que cuando te quedas en calma y silencio, recibes los mejores consejos de amor para saber qué hacer.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me centro en mi unión hoy. Yo elijo recordar que voy de la mano de la fuerza del bien.\""
  },
  {
    "day": 345,
    "title": "replantea-TE",
    "teaName": "Infusión de replanteo sabio",
    "benefit": "En un momento de calma y tranquilidad recibo los mejores consejos del amor.",
    "lesson": "Es darte cuenta de que toda la ternura y la paciencia que regalas a tus amigos te la das a ti misma.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Replanteo mis ideas hoy. Yo elijo escuchar los consejos de la calma.\""
  },
  {
    "day": 346,
    "title": "deshaz-TE",
    "teaName": "Infusión de deshacer liberador",
    "benefit": "Todo el amor y la amabilidad que doy a los demás me lo estoy dando a mí mismo.",
    "lesson": "Es saber que no hay ningún abrazo más grande ni ningún lugar más seguro para ti que el amor del universo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Deshago el egoísmo hoy. Yo elijo saber que al dar amor me lo doy a mí misma.\""
  },
  {
    "day": 347,
    "title": "libera-TE",
    "teaName": "Infusión de liberación dulce",
    "benefit": "No existe ningún otro amor tan grande y seguro como el del universo.",
    "lesson": "Es darte cuenta de que las cosas feas o las peleas de fuera no tienen nada que ver con los deseos bonitos de tu alma.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Libero mis temores hoy. Yo elijo confiar en el amor más seguro y grande.\""
  },
  {
    "day": 348,
    "title": "ilumina-TE",
    "teaName": "Infusión de iluminación integrada",
    "benefit": "Las cosas feas del mundo no tienen nada que ver con lo que realmente deseo.",
    "lesson": "Es mirar más allá de los pequeños problemas para descubrir un paisaje inmenso y feliz que está esperando que lo mires.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Ilumino mis elecciones hoy. Yo elijo enfocarme en lo que mi alma verdaderamente desea.\""
  },
  {
    "day": 349,
    "title": "confia-TE",
    "teaName": "Infusión de certeza absoluta",
    "benefit": "La gran energía creadora del universo jamás creó un mundo sin sentido.",
    "lesson": "Es entender que no puedes mirar el miedo y la paz a la vez; tú eres la reina de tu cabeza y eliges mirar siempre la paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Confío en la vida hoy. Yo elijo descansar en un orden seguro.\""
  },
  {
    "day": 350,
    "title": "desvincula-TE",
    "teaName": "Infusión de ligereza mental",
    "benefit": "Los pensamientos que tengo son solo dibujitos e historias que inventé en mi cabeza.",
    "lesson": "Es borrar de tu cuento las historias tristes del pasado para dejar que el mundo sea nuevo, limpio y bonito.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me desvinculo de las historias hoy. Yo elijo soltar los dramas mentales.\""
  },
  {
    "day": 351,
    "title": "neutraliza-TE",
    "teaName": "Infusión de equilibrio y ecuanimidad",
    "benefit": "No existe ningún pensamiento que no importe o que sea totalmente neutro.",
    "lesson": "Es aprender a no enfadarte por los objetos o cosas pequeñas que no te ayudan a tener tu mente tranquila y feliz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Neutralizo el juicio hoy. Yo elijo cuidar la calidad de mis pensamientos.\""
  },
  {
    "day": 352,
    "title": "equilibra-TE",
    "teaName": "Infusión de aprendizaje consciente",
    "benefit": "No hay ninguna cosa a mi alrededor que sea neutral; todo me enseña algo.",
    "lesson": "Es aprender a perdonar desde muy adentro, con un corazón transparente, limpio y sin guardar ningún rencor.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me equilibro hoy. Yo elijo aprender lecciones de paz de mi entorno.\""
  },
  {
    "day": 353,
    "title": "responsabiliza-TE",
    "teaName": "Infusión de conexión colectiva",
    "benefit": "No estoy solo; lo que yo veo y siento también afecta a los demás.",
    "lesson": "Es darte cuenta de que si te pones a la defensiva es solo porque creíste que alguien te quería hacer daño, pero estás totalmente segura.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me responsabilizo de mi energía hoy. Yo elijo sumar bienestar a los demás.\""
  },
  {
    "day": 354,
    "title": "reconoce-TE",
    "teaName": "Infusión de resonancia empática",
    "benefit": "Mis pensamientos no se quedan solo en mí, sino que también llegan a los que me rodean.",
    "lesson": "Es descubrir que cuando te sientes enfadada o enferma, solo es una forma de ocultar todo el amor que tienes dentro.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me reconozco en conexión hoy. Yo elijo enviar pensamientos amables a mi alrededor.\""
  },
  {
    "day": 355,
    "title": "decide-TE",
    "teaName": "Infusión de determinación luminosa",
    "benefit": "¡Estoy totalmente decidida a abrir los ojos y ver de verdad!",
    "lesson": "Es ver cómo tu propia sonrisa y tu corazón limpio ayudan a que todos tus amigos y tu familia se sientan bien.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Decido ver con claridad hoy. Yo elijo abrir los ojos a la verdad.\""
  },
  {
    "day": 356,
    "title": "abre-TE",
    "teaName": "Infusión de apertura receptiva",
    "benefit": "Sentirme enfermo o enfadado es solo una forma de ocultar la verdad del amor.",
    "lesson": "Es darte cuenta de que entre todas las opciones del mundo, elegir la alegría y la paz es la mejor jugada que puedes hacer.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Abro mi entendimiento hoy. Yo elijo ver que el malestar solo oculta el afecto.\""
  },
  {
    "day": 357,
    "title": "suelta-TE",
    "teaName": "Infusión de soltar generosa",
    "benefit": "Cuando limpio mi corazón y sonrío, ayudo a que todos a mi alrededor se sientan bien.",
    "lesson": "Es la tranquilidad de saber que puedes borrar cualquier equivocación y empezar de nuevo con mucho afecto.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Suelto el juicio hoy. Yo elijo sonreír para que mi entorno se sienta bien.\""
  },
  {
    "day": 358,
    "title": "pacifica-TE",
    "teaName": "Infusión de pacificación profunda",
    "benefit": "El mundo de la paz y la alegría es la mejor opción que puedo elegir.",
    "lesson": "Es utilizar la magia del amor y del perdón, que son los únicos ingredientes capaces de curar cualquier tristeza.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me pacifico por dentro hoy. Yo elijo el mundo de la paz como mi mejor opción.\""
  },
  {
    "day": 359,
    "title": "protege-TE",
    "teaName": "Infusión de protección serena",
    "benefit": "Acepto limpiar todos mis errores y volver a empezar con amor.",
    "lesson": "Imagina que tu mente es como una pizarra llena de dibujos antiguos que hiciste hace tiempo. Este ejercicio te enseña a limpiar la pizarra para mirar todo lo que te rodea como si fuera la primera vez, sin ponerle etiquetas de bueno o malo.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me protejo renovándome hoy. Yo elijo empezar de nuevo con amor.\""
  },
  {
    "day": 360,
    "title": "entrega-TE",
    "teaName": "Infusión de entrega confiada",
    "benefit": "El amor y el perdón son lo único que sana cualquier tristeza.",
    "lesson": "Es como meterte debajo de una cama de mantas calentitas cuando fuera hace frío. Un lugar de seguridad absoluta donde descansas sin preocupaciones.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Entrego mis tristezas hoy. Yo elijo permitir que el perdón sane mi corazón.\""
  },
  {
    "day": 361,
    "title": "cuestiona-TE",
    "teaName": "Infusión de claridad y discernimiento",
    "benefit": "Nada de lo que veo en esta habitación tiene un significado real por sí mismo[cite: 1].",
    "lesson": "Diseñada para vaciar la mente de significados impuestos y contemplar la realidad con una perspectiva de absoluta neutralidad y paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Cuestiono mis pensamientos hoy. Yo elijo mirar este momento con absoluta neutralidad.\""
  },
  {
    "day": 362,
    "title": "refugia-TE",
    "teaName": "Infusión de abrigo inquebrantable",
    "benefit": "Esa gran fuerza es mi refugio más seguro en el que confío plenamente.",
    "lesson": "Es como actuar como un refugio cálido de confianza plena frente a cualquier inquietud o duda que pueda aparecer.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me refugio en la calma hoy. Yo elijo descansar en una seguridad absoluta.\""
  },
  {
    "day": 363,
    "title": "recuerda-TE",
    "teaName": "Infusión de protección de la paz",
    "benefit": "Mis pensamientos de ataque y enojo lo único que hacen es lastimar mi paz interior.",
    "lesson": "Es un escudo para ti misma: saber que si atacas o te enfadas, a la primera que haces daño es a tu propia paz.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Recuerdo cuidar mi paz hoy. Yo elijo no lastimarme con enojos.\""
  },
  {
    "day": 364,
    "title": "centra-TE",
    "teaName": "Infusión de quietud y presencia",
    "benefit": "La verdadera quietud se encuentra cuando decido habitar este preciso instante sin juzgarlo.",
    "lesson": "Es como respirar despacio para plantar tus raíces muy adentro de la tierra, ayudando a disipar cualquier nervio y devolviendo toda tu atención al centro de tu paz interior.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Me centro en mi paz hoy. Yo elijo habitar este momento con absoluta serenidad.\""
  },
  {
    "day": 365,
    "title": "ama-TE",
    "teaName": "Infusión de amor incondicional",
    "benefit": "Las cosas que ves a tu alrededor no significan nada por sí solas. Tú eres quien decide si algo te enfada o te da paz en tu cabeza",
    "lesson": "Es fundir toda autocrítica con una ternura infinita hacia ti misma, recordando que eres una persona valiosa tal como eres.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: \"Amo mi mente hoy. Yo elijo mirar este momento con paz y amabilidad."
  }
];
