// Datos de los 365 días
const DAYS_ES = [
  {
    "day": 1,
    "title": "mira-TE",
    "teaName": "Infusión de curiosidad amable",
    "benefit": "Hoy me observo con curiosidad, sin juzgarme.",
    "lesson": "Imagina que tu mente es un jardín y hoy eres una jardinera curiosa: solo paseas y miras qué pensamientos han brotado, sin arrancar nada.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: “Hoy me observo con curiosidad. Todo lo que siento puede quedarse a mi lado un rato.”"
  },
  {
    "day": 2,
    "title": "respira-TE",
    "teaName": "Infusión de calma en cuatro tiempos",
    "benefit": "Mi respiración es mi casa: siempre puedo volver a ella.",
    "lesson": "Tu respiración es una mantita invisible que llevas a todas partes. Cuando el día se enreda, tres respiraciones lentas lo desenredan un poquito.",
    "exercise": "Inhala contando hasta cuatro, sostén un instante y exhala contando hasta seis, tres veces, con la taza entre las manos. Después di en voz baja: “Con cada respiración, mi cuerpo se suaviza.”"
  },
  {
    "day": 3,
    "title": "rie-TE",
    "teaName": "Infusión de humor y perspectiva",
    "benefit": "Puedo escuchar a Drama King sin darle el micrófono.",
    "lesson": "Drama King convierte una tostada quemada en una tragedia griega. No hace falta echarlo: basta con saludarlo, sonreír y recordarle que hoy no hay función.",
    "exercise": "Piensa en algo que hoy te preocupa y ponle un título de película dramática, de esos que dan risa. Sonríe, toma un sorbo y di en voz baja: “Saludo a mi drama con una sonrisa y sigo con mi día.”"
  },
  {
    "day": 4,
    "title": "baja-TE",
    "teaName": "Infusión de humildad con un toque de risa",
    "benefit": "Estar en paz no me hace mejor que nadie: me hace más cercana.",
    "lesson": "Queen Zen cree que ya llegó a la iluminación y que todo el mundo debería meditar como ella. Hoy le pedimos que se siente en el suelo, como las demás: la paz de verdad no necesita público.",
    "exercise": "Siéntate en el suelo o en el borde de la silla, sin ninguna postura especial, y toma un sorbo despacio. Después di en voz baja: “Mi calma es un regalo para compartir, no un trofeo para exhibir.”"
  },
  {
    "day": 5,
    "title": "mueve-TE",
    "teaName": "Infusión de pequeños pasos",
    "benefit": "Un gesto pequeño también es un movimiento.",
    "lesson": "Cuando la mente se atasca, el cuerpo puede dar el primer paso. No hace falta una gran decisión: basta con levantarte, estirar los brazos o abrir una ventana.",
    "exercise": "Levántate, estira los brazos hacia el techo y bájalos lentamente mientras exhalas. Toma un sorbo y di en voz baja: “Hoy me muevo un poquito, y eso ya cuenta.”"
  },
  {
    "day": 6,
    "title": "mima-TE",
    "teaName": "Infusión de mimo sencillo",
    "benefit": "Merezco cuidarme igual que cuido a quien quiero.",
    "lesson": "Si una amiga te dijera que está cansada, le prepararías algo calentito sin pensarlo. Hoy le toca a ti ese mismo trato.",
    "exercise": "Pon una mano sobre el pecho y nota su calor mientras tomas un sorbo despacio. Después di en voz baja: “Hoy me trato con la misma ternura que trato a quien más quiero.”"
  },
  {
    "day": 7,
    "title": "equilibra-TE",
    "teaName": "Infusión de equilibrio entre el drama y la calma",
    "benefit": "Ni tanto Drama King ni tanto Queen Zen: hoy elijo mi punto medio.",
    "lesson": "Hoy los dos se sientan a la misma mesa: Drama King cuenta lo que le asusta y Queen Zen lo que le molesta de los demás. Tú sirves el té y los escuchas con cariño, sin darle la razón del todo a ninguno.",
    "exercise": "Sostén tu taza tibia con ambas manos, toma un sorbo despacio y di en voz baja: “Escucho a mi drama y a mi calma. Yo elijo mi punto medio.”"
  },
  {
    "day": 8,
    "title": "observa-TE",
    "teaName": "Infusión de nubes pasajeras",
    "benefit": "Mis pensamientos pasan como nubes y yo soy el cielo.",
    "lesson": "Los pensamientos van y vienen igual que las nubes. Hoy no las empujas ni las persigues: te sientas y miras cómo cruzan.",
    "exercise": "Mira por una ventana o cierra los ojos y nombra tres pensamientos como si fueran nubes (“ahí va una preocupación”). Toma un sorbo y di en voz baja: “Observo mis pensamientos y no me quedo a vivir en ellos.”"
  },
  {
    "day": 9,
    "title": "afloja-TE",
    "teaName": "Infusión de hombros sueltos",
    "benefit": "Cuando suelto los hombros, también se afloja mi mente.",
    "lesson": "Muchas veces llevamos los hombros pegados a las orejas sin darnos cuenta. Aflojarlos es una forma de decirle al cuerpo que ya puede descansar.",
    "exercise": "Sube los hombros hacia las orejas al inhalar y déjalos caer al exhalar, tres veces, con la taza tibia entre las manos. Después di en voz baja: “Suelto lo que no necesito cargar ahora.”"
  },
  {
    "day": 10,
    "title": "sonrie-TE",
    "teaName": "Infusión de telón bajado",
    "benefit": "Puedo darle las gracias a mi drama y dejarlo descansar.",
    "lesson": "Drama King ensaya todas las noches la peor película posible. Hoy lo felicitas por su imaginación y le recuerdas que solo es un ensayo.",
    "exercise": "Ponle un título cómico a tu preocupación de hoy (“Tragedia en tres actos: el WhatsApp sin responder”), sonríe y toma un sorbo. Di en voz baja: “Gracias por el ensayo, hoy no hay estreno.”"
  },
  {
    "day": 11,
    "title": "aterriza-TE",
    "teaName": "Infusión de pies en la tierra",
    "benefit": "No tengo que parecer tranquila: puedo estar tranquila a mi manera.",
    "lesson": "Queen Zen a veces confunde calma con aparentar calma. Aterrizar es dejar que la paz sea sencilla, con ropa de andar por casa y sin sermones.",
    "exercise": "Si puedes, quítate los zapatos, apoya bien los pies en el suelo y nota tres puntos de apoyo mientras respiras despacio. Di en voz baja: “Mi paz puede ser sencilla y de andar por casa.”"
  },
  {
    "day": 12,
    "title": "estira-TE",
    "teaName": "Infusión de bostezo largo",
    "benefit": "Mi cuerpo también piensa: hoy le doy espacio para hablar.",
    "lesson": "Estirarse es escuchar al cuerpo: si cada parte pudiera hablar, ¿qué pediría? Hoy le das un minuto para que te lo cuente.",
    "exercise": "Estira el cuello hacia un lado y luego hacia el otro, con un sorbo entre estiramiento y estiramiento. Di en voz baja: “Mi cuerpo me habla y hoy lo escucho.”"
  },
  {
    "day": 13,
    "title": "abraza-TE",
    "teaName": "Infusión de abrazo propio",
    "benefit": "Puedo ser mi propio refugio.",
    "lesson": "Abrazarte no es cosa de ñoñas: es un gesto que calma el cuerpo y te recuerda que no estás sola. Cruza los brazos como quien se da un buen abrazo.",
    "exercise": "Cruza los brazos y apoya las manos en tus hombros. Respira tres veces despacio y di en voz baja: “Estoy aquí conmigo, y eso es suficiente.”"
  },
  {
    "day": 14,
    "title": "centra-TE",
    "teaName": "Infusión de punto medio",
    "benefit": "Entre el exceso de drama y el exceso de calma, hay un lugar donde cabe todo lo que soy.",
    "lesson": "Imagina una balanza con Drama King a un lado y Queen Zen al otro. Tú no eliges bando: eres la mano que la sostiene y la mantiene nivelada.",
    "exercise": "Abre las dos manos como platillos de una balanza, nota cuál pesa más hoy y respira hasta que se igualen. Toma un sorbo y di en voz baja: “Me centro y me quedo en mi punto medio.”"
  },
  {
    "day": 15,
    "title": "descubre-TE",
    "teaName": "Infusión de mapa de emociones",
    "benefit": "Poner nombre a lo que siento me ayuda a entenderme.",
    "lesson": "Una emoción sin nombre es como un paquete sin etiqueta: da más respeto. Con un nombre sencillo (“esto es cansancio”, “esto es rabia”) se hace más pequeña y más fácil de llevar.",
    "exercise": "Pregúntate “¿qué siento ahora?”, responde con una sola palabra y toma un sorbo. Después di en voz baja: “Le pongo nombre a lo que siento y me entiendo mejor.”"
  },
  {
    "day": 16,
    "title": "deten-TE",
    "teaName": "Infusión de pausa pequeña",
    "benefit": "Una pausa de un minuto puede cambiar el rumbo de mi día.",
    "lesson": "Entre lo que pasa y lo que respondemos hay un pequeño espacio. Esa pausa es tuya: puedes llenarla con una respiración.",
    "exercise": "Antes de contestar o decidir algo hoy, inhala contando hasta cuatro y exhala contando hasta seis. Toma un sorbo y di en voz baja: “Me doy una pausa y luego elijo.”"
  },
  {
    "day": 17,
    "title": "divierte-TE",
    "teaName": "Infusión de ocurrencias",
    "benefit": "El humor me devuelve la perspectiva.",
    "lesson": "Drama King dice “siempre pasa lo peor” y Queen Zen dice “todo ocurre por algo”. Tú puedes mirarlos a los dos con una ceja levantada y una sonrisa.",
    "exercise": "Imagina a Drama King y a Queen Zen discutiendo por quién lleva razón mientras tú tomas el té. Sonríe y di en voz baja: “Elijo reírme un poco y mirar con más cariño.”"
  },
  {
    "day": 18,
    "title": "humaniza-TE",
    "teaName": "Infusión de pies descalzos",
    "benefit": "Puedo estar en paz y seguir siendo humana.",
    "lesson": "A veces creemos que la paz nos vuelve intocables. La paz de verdad deja sitio para los días torpes, los enfados pequeños y las dudas.",
    "exercise": "Recuerda un momento reciente en el que no estuviste a tu mejor nivel y míralo con ternura, como a una amiga. Toma un sorbo y di en voz baja: “Soy humana y estoy en paz con ello.”"
  },
  {
    "day": 19,
    "title": "pasea-TE",
    "teaName": "Infusión de paso lento",
    "benefit": "Caminar despacio también es avanzar.",
    "lesson": "Un paseo corto sin móvil es una conversación con el cuerpo y con la calle. No hace falta llegar a ningún sitio.",
    "exercise": "Da un paseo de un minuto (también vale por casa) fijándote en tres cosas que ves, tres que oyes y tres que sientes. Después di en voz baja: “Camino sin prisa y llego a mi ritmo.”"
  },
  {
    "day": 20,
    "title": "consiente-TE",
    "teaName": "Infusión de capricho pequeño",
    "benefit": "Un capricho amable también es una forma de cuidarme.",
    "lesson": "Mimarte no necesita grandes planes: una canción favorita, una manta suave, un trozo de fruta. Lo importante es hacerlo con atención.",
    "exercise": "Elige un pequeño placer para hoy y disfrútalo con calma durante un sorbo entero. Después di en voz baja: “Me regalo un gusto sencillo y lo disfruto de verdad con mis cinco sentidos.”"
  },
  {
    "day": 21,
    "title": "concilia-TE",
    "teaName": "Infusión de tregua",
    "benefit": "Puedo hacer las paces con lo que siento.",
    "lesson": "Drama King y Queen Zen viven en ti, pero la anfitriona eres tú. Hoy les propones una tregua de cinco minutos, con té y sin discursos.",
    "exercise": "Imagina a los dos sentados contigo. Pídeles cinco minutos de silencio y respira con ellos. Toma un sorbo y di en voz baja: “Hacemos una tregua y yo llevo el té.”"
  },
  {
    "day": 22,
    "title": "reconoce-TE",
    "teaName": "Infusión de pequeños logros",
    "benefit": "Reconocer lo que hago bien también es mirarme.",
    "lesson": "Solemos fijarnos en lo que falta. Hoy buscas tres cosas que sí has hecho, por pequeñas que parezcan.",
    "exercise": "Piensa en tres cosas que has hecho bien esta semana y salúdalas con un sorbo. Después di en voz baja: “Veo mis pasos y los celebro.”"
  },
  {
    "day": 23,
    "title": "serena-TE",
    "teaName": "Infusión de agua quieta",
    "benefit": "Cuando me quedo quieta, el agua revuelta se asienta sola.",
    "lesson": "Un vaso de agua con barro se aclara si lo dejas reposar. Con la mente pasa igual: no hay que remover más, solo esperar.",
    "exercise": "Mira tu taza sin moverla durante diez respiraciones. Cuando acabes, toma un sorbo y di en voz baja: “Dejo que todo se asiente y me aclaro.”"
  },
  {
    "day": 24,
    "title": "aligera-TE",
    "teaName": "Infusión de ligereza",
    "benefit": "No todo lo que pienso necesita una conclusión.",
    "lesson": "Drama King quiere sacar conclusiones a las cuatro de la madrugada. Hoy le recuerdas que hay preguntas que se contestan mejor con la luz del día.",
    "exercise": "Escribe una preocupación en un papel, dóblalo y déjalo para mañana. Toma un sorbo y di en voz baja: “Lo dejo ahí, lo miraré con más luz.”"
  },
  {
    "day": 25,
    "title": "simplifica-TE",
    "teaName": "Infusión de lo esencial",
    "benefit": "Con menos cosas por hacer, también hay más paz.",
    "lesson": "Queen Zen quiere meditar una hora, cocinar ecológico y perdonar a todo el mundo antes del desayuno. Tú puedes elegir una sola cosa buena y hacerla bien.",
    "exercise": "Elige una sola cosa importante para hoy y suelta mentalmente el resto. Toma un sorbo y di en voz baja: “Una cosa a la vez es suficiente.”"
  },
  {
    "day": 26,
    "title": "baila-TE",
    "teaName": "Infusión de ritmo",
    "benefit": "Un poco de baile me cambia el ánimo.",
    "lesson": "No hace falta saber bailar: basta con mover algo, aunque sea un pie, al ritmo de una canción que te guste.",
    "exercise": "Pon una canción que te guste y muévete durante un minuto como te apetezca. Al terminar, toma un sorbo y di en voz baja: “Mi cuerpo también celebra.”"
  },
  {
    "day": 27,
    "title": "regala-TE",
    "teaName": "Infusión de regalo propio",
    "benefit": "Hoy me regalo mi atención.",
    "lesson": "A veces damos la atención a todo el mundo menos a nosotras. Hoy te la regalas toda: sin móvil, sin lista, solo tú.",
    "exercise": "Durante un minuto no hagas nada más que tomar tu infusión con atención: el calor, el aroma, el sabor. Después di en voz baja: “Me regalo este minuto, es para mí.”"
  },
  {
    "day": 28,
    "title": "armoniza-TE",
    "teaName": "Infusión de acuerdo interior",
    "benefit": "Puedo escuchar a todas mis partes y llegar a un acuerdo.",
    "lesson": "Lo que sientes tiene varias voces: la que se queja, la que presume y la que sabe. Hoy les pides turno de palabra, una por una, y tú coordinas la conversación.",
    "exercise": "Piensa o escribe qué diría hoy tu voz dramática, tu voz zen y tu voz sabia. Escucha las tres, toma un sorbo y di en voz baja: “Las escucho a todas y decido con calma.”"
  },
  {
    "day": 29,
    "title": "repasa-TE",
    "teaName": "Infusión de mirada atrás",
    "benefit": "Mirar atrás con cariño me enseña cuánto he avanzado.",
    "lesson": "Un mes de mirarte con curiosidad merece una pausa: ¿qué has notado de ti? ¿Qué te ha sorprendido? ¿Qué se ha vuelto más fácil?",
    "exercise": "Recuerda el momento de este mes en el que te has mirado con más cariño. Toma un sorbo y di en voz baja: “He aprendido a mirarme con más ternura.”"
  },
  {
    "day": 30,
    "title": "celebra-TE",
    "teaName": "Infusión de celebración",
    "benefit": "Me felicito por el camino y me quiero con paciencia.",
    "lesson": "Has terminado el primer mes: ¡felicidades! Hoy toca un piropo para ti, de los que casi nunca nos decimos en voz alta.",
    "exercise": "Mírate en un espejo, o en tu imaginación, y dite un piropo sincero. Después guárdalo en el Piropero y di en voz baja: “Me miro con cariño y celebro mi camino.”"
  },
  {
    "day": 31,
    "title": "contempla-TE",
    "teaName": "Infusión de ventana abierta",
    "benefit": "Hoy contemplo mi respiración como quien mira las nubes.",
    "lesson": "Tu respiración es una marea pequeña que va y viene sin pedir permiso. Hoy no la corriges: te sientas en la orilla y miras cómo sube y baja.",
    "exercise": "Apoya la mano en el pecho y cuenta cinco respiraciones sin cambiarlas. Mientras tanto, mira la taza humear. Luego di en voz baja: “Mi respiración ya sabe hacerlo sola; yo solo la acompaño.”"
  },
  {
    "day": 32,
    "title": "suspira-TE",
    "teaName": "Infusión de suspiro largo",
    "benefit": "Un suspiro es mi manera de soltar lo que sobra.",
    "lesson": "Un suspiro es levantar la tapa de la olla a vapor: sale lo que ya no hace falta. Hoy lo hacemos con permiso y con ganas, aunque Drama King lo haga con más teatro.",
    "exercise": "Inspira por la nariz y suspira largo por la boca, con sonido, tres veces. Deja caer los hombros en cada una. Luego di en voz baja: “Suelto lo que sobra y me quedo con lo que me sirve.”"
  },
  {
    "day": 33,
    "title": "bromea-TE",
    "teaName": "Infusión de tragedia con azúcar",
    "benefit": "Respiro hondo y dejo que Drama King se luzca sin dirigir mi día.",
    "lesson": "Drama King jura que sin un aire dramático la vida se derrumba. Hoy ensaya su mejor jadeo de telenovela. Tú respiras hondo, aplaudes la actuación y no le das el papel principal.",
    "exercise": "Haz un jadeo exagerado de protagonista de ópera durante diez segundos y ríete de ti. Después respira normal y toma un sorbo. Di en voz baja: “Gracias por el espectáculo, Drama King; hoy respiro yo.”"
  },
  {
    "day": 34,
    "title": "desinfla-TE",
    "teaName": "Infusión de globo sin prisa",
    "benefit": "Mi respiración no necesita ser perfecta para ser suficiente.",
    "lesson": "Queen Zen presume de respiración abdominal en cuatro tiempos y con diploma. Hoy la invitamos a respirar como un globo que se desinfla: sin técnica, sin nota, sin público.",
    "exercise": "Infla las mejillas como un globo y suelta el aire despacio por los labios, tres veces, haciendo ruidito. Si te sale un pitido, mejor. Luego di en voz baja: “Respiro sin nota y sin público; así ya vale.”"
  },
  {
    "day": 35,
    "title": "sacude-TE",
    "teaName": "Infusión de brazos sueltos",
    "benefit": "Si el cuerpo se sacude, la respiración se acomoda sola.",
    "lesson": "Los perros se sacuden al salir del agua y quedan como nuevos. Tu cuerpo también sabe hacerlo; solo necesita permiso y un poco de espacio.",
    "exercise": "De pie, sacude manos, brazos y hombros durante veinte segundos como si salieras de un charco. Para, respira hondo y toma un sorbo. Di en voz baja: “Me sacudo lo que pesa y respiro con espacio.”"
  },
  {
    "day": 36,
    "title": "arrulla-TE",
    "teaName": "Infusión de manta y vaivén",
    "benefit": "Hoy me respiro con la ternura de quien arrulla a un bebé.",
    "lesson": "Respirar también puede ser una nana: lenta, repetida, sin pretensiones. Hoy tu aire entra y sale como una cuna que se mece despacio.",
   "exercise": "Siéntate, abraza tu torso con ambos brazos y mécete suavemente a derecha e izquierda durante diez respiraciones. Después di en voz baja: “Me arrullo con paciencia; ahora no tengo nada que arreglar.”"
  },
  {
    "day": 37,
    "title": "concilia-TE",
    "teaName": "Infusión de mesa compartida",
    "benefit": "Puedo respirar entre Drama King y Queen Zen y quedarme en medio.",
    "lesson": "Drama King suspira como si fuera el último aire; Queen Zen respira como si diera clase. Tú los sientas a la misma mesa, escuchas a los dos y eliges un ritmo que sea tuyo.",
    "exercise": "Respira primero de forma muy teatral, luego de forma muy solemne. Después respira a tu manera, ni tanto ni tan poco, y toma un sorbo. Di en voz baja: “Elijo mi punto medio y mi propio ritmo.”"
  },
  {
    "day": 38,
    "title": "asoma-TE",
    "teaName": "Infusión de balcón al amanecer",
    "benefit": "Hoy me asomo a mi respiración sin opinar.",
    "lesson": "Asomarte es mirar por la ventana sin bajar a la calle a dirigir el tráfico. Hoy notas cómo respiras y dejas que el aire haga su trabajo.",
    "exercise": "Acércate a una ventana o una puerta, mira lejos y nota tres respiraciones sin cambiarlas. Luego toma un sorbo despacio. Di en voz baja: “Me asomo a mi aire y no opino; solo miro.”"
  },
  {
    "day": 39,
    "title": "exhala-TE",
    "teaName": "Infusión de aire que se va",
    "benefit": "Cada vez que suelto aire, hago sitio para algo nuevo.",
    "lesson": "La exhalación es la mitad de la respiración que casi nadie aplaude. Es la puerta de salida, y hoy la abrimos del todo, como quien despide con cariño a una visita pesada.",
    "exercise": "Inspira normal y exhala el doble de despacio, como si empañaras un cristal. Repite cinco veces, con la mano en la tripa. Di en voz baja: “Dejo salir el aire y me queda más espacio.”"
  },
  {
    "day": 40,
    "title": "payasea-TE",
    "teaName": "Infusión de nariz roja",
    "benefit": "Puedo reírme de mi drama y seguir respirando con calma.",
    "lesson": "Drama King ha anunciado que tu semana es una tragedia en tres actos. Ponle una nariz de payaso al guión y verás cómo el drama cambia de género: de tragedia a comedia.",
    "exercise": "Imagina que llevas una nariz de payaso y toma aire con un pip al inspirar y un pop al soltarlo, tres veces. Sonríe y toma un sorbo. Di en voz baja: “Mi drama también tiene gracia; sigo respirando.”"
  },
  {
    "day": 41,
    "title": "apea-TE",
    "teaName": "Infusión de pedestal con escalera",
    "benefit": "Bajar del pedestal me deja respirar a la altura de todas.",
    "lesson": "Queen Zen respira desde un pedestal tan alto que le falta el oxígeno de la conversación. Hoy bajamos dos peldaños y respiramos a la altura de la gente normal, que también tiene su gracia.",
    "exercise": "Si estás de pie, siéntate. Si estás sentada, apoya los pies bien planos en el suelo. Respira cinco veces notando el contacto con el suelo. Di en voz baja: “Bajo del pedestal y respiro a mi altura.”"
  },
  {
    "day": 42,
    "title": "desentumece-TE",
    "teaName": "Infusión de desperezo de gato",
    "benefit": "Mi cuerpo agradece un pequeño movimiento con cada respiración.",
    "lesson": "Después de horas quieta, el cuerpo es como una bisagra oxidada: un poco de movimiento y vuelve a abrirse. Hoy la engrasas con aire y gestos pequeños, sin exigirte nada.",
    "exercise": "Gira lentamente los hombros hacia atrás cinco veces y luego el cuello, con cuidado. Respira hondo entre vuelta y vuelta. Di en voz baja: “Muevo lo que está quieto y lo hago sin prisa.”"
  },
  {
    "day": 43,
    "title": "arropa-TE",
    "teaName": "Infusión de manta de sofá",
    "benefit": "Me arropo con mi respiración como con una manta suave.",
    "lesson": "Cada exhalación es un pliegue de manta que cae sobre ti. No hace falta nada más: solo notar el calorcito de estar acompañada por tu propio aire.",
    "exercise": "Envuélvete los hombros con una manta, una chaqueta o una bufanda y respira diez veces con los ojos cerrados. Aprieta un poco la tela al soltar el aire. Di en voz baja: “Me tengo cerca y con eso basta.”"
  },
  {
    "day": 44,
    "title": "negocia-TE",
    "teaName": "Infusión de pacto razonable",
    "benefit": "Entre dos extremos siempre hay un punto medio respirable.",
    "lesson": "Drama King pide tres horas de lamento; Queen Zen, tres horas de silencio. Tú abres negociaciones y pactas diez respiraciones, un chiste malo y un vaso de agua.",
   "exercise": "Haz tres respiraciones dramáticas, tres solemnes y cuatro a tu aire, contando con los dedos. Cuando termines, toma un sorbo. Di en voz baja: “He llegado a un pacto: respiro a mi manera.”"
  },
  {
    "day": 45,
    "title": "retrata-TE",
    "teaName": "Infusión de lupa y buen humor",
    "benefit": "Hoy me dibujo con mi respiración, sin retocar nada.",
    "lesson": "Si tu respiración de hoy fuera un dibujo, ¿sería un garabato, una espiral o una línea recta? Cualquiera vale. Hoy eres retratista: no corriges, solo dibujas lo que ves.",
    "exercise": "Respira tres veces y, con un dedo en el aire, dibuja la forma de tu respiración de hoy. Sin juzgar el resultado. Toma un sorbo y di en voz baja: “Mi respiración de hoy tiene esta forma, y está bien.”"
  },
  {
    "day": 46,
    "title": "sopla-TE",
    "teaName": "Infusión de molinillo de viento",
    "benefit": "Soplar despacio me ayuda a apagar el ruido de dentro.",
    "lesson": "Soplar sobre una infusión caliente es la forma más antigua de enfriar lo que quema. Hoy soplas también tus prisas, con la misma paciencia, hasta que dejen de quemar.",
    "exercise": "Sopla despacio sobre tu taza, como si enfriaras la prisa del día, cinco veces. Observa cómo se mueve el vapor. Di en voz baja: “Enfrío mis prisas soplando con calma.”"
  },
  {
    "day": 47,
    "title": "disfraza-TE",
    "teaName": "Infusión de capa y antifaz",
    "benefit": "Puedo reírme de mis dramas disfrazándolos de ligereza.",
    "lesson": "Hoy Drama King se presenta con capa, antifaz y suspiro heroico: “¡Nadie respira como yo!”. Tú le sigues el juego, respiras con una capa imaginaria y compruebas que el aire entra igual.",
    "exercise": "Ponte una capa imaginaria sobre los hombros y respira como en una película de héroes, pecho abierto, tres veces. Luego deja caer la capa y suelta una risita. Di en voz baja: “Con capa o sin ella, mi respiración me acompaña.”"
  },
  {
    "day": 48,
    "title": "destrona-TE",
    "teaName": "Infusión de corona de papel",
    "benefit": "Respirar sin postureo es respirar de verdad.",
    "lesson": "Queen Zen se corona cada mañana con su respiración consciente y la luce ante el espejo. Hoy le cambiamos la corona por una de papel: pesa menos y se arruga con gracia.",
    "exercise": "Haz dos respiraciones con postura perfecta y tres con la espalda encorvada, en el sofá si hace falta. Nota que el aire entra igual. Di en voz baja: “Mi corona es de papel y respiro igual de bien.”"
  },
  {
    "day": 49,
    "title": "columpia-TE",
    "teaName": "Infusión de vaivén de columpio",
    "benefit": "Mi respiración sube y baja como un columpio sin prisa.",
    "lesson": "Inspirar es subir con el columpio; exhalar, bajar. Nadie empuja con prisa, nadie evalúa. Hoy te dejas ir, un empujoncito detrás de otro.",
    "exercise": "De pie, balancea el cuerpo hacia atrás y hacia adelante al ritmo de tu respiración, diez veces, con los pies firmes. Termina quieta y toma un sorbo. Di en voz baja: “Voy y vengo con mi aire, sin prisa.”"
  },
  { 
    "day": 50,
    "title": "endulza-TE",
    "teaName": "Infusión de miel y paciencia",
    "benefit": "Me trato con dulzura aunque hoy respire a trompicones.",
    "lesson": "Hay respiraciones con prisa, cortas, torpes. No las regañes: son como niñas que llegan tarde. Hoy las recibes con un poco de dulzura y un “pasa, pasa, estás en casa”.",
    "exercise": "Pon una mano en el pecho y otra en la tripa y respira despacio. Con cada exhalación, acaricia suavemente el pecho con la mano. Di en voz baja: “Tengo permiso para respirar a trompicones; me trato con dulzura.”"
  },
  { 
    "day": 51,
    "title": "sopesa-TE",
    "teaName": "Infusión de balanza amable",
    "benefit": "Entre agitarme y apagarme, hay una respiración justa.",
    "lesson": "Drama King pesa cada problema en toneladas; Queen Zen dice que nada pesa. Tú pones a los dos en la balanza y descubres que lo justo cabe en la palma de una mano.",
    "exercise": "Extiende las manos como una balanza. En una, deja la preocupación de hoy; en la otra, un respiro. Respira hasta que se equilibren. Di en voz baja: “Lo que hoy pesa, lo sostengo con aire.”"
  },
  { 
    "day": 52,
    "title": "otea-TE",
    "teaName": "Infusión de horizonte lejano",
    "benefit": "Mirar lejos amplía el espacio en el que respiro.",
    "lesson": "Cuando miras el horizonte, el cuerpo también se abre. Hoy usas la vista como un fuelle: miras lejos y dejas que el aire te siga.",
    "exercise": "Mira por una ventana el punto más lejano que veas y respira tres veces mientras lo observas. Parpadea despacio y toma un sorbo. Di en voz baja: “Miro lejos y mi aire encuentra más espacio.”"
  },
  { 
    "day": 53,
    "title": "ensancha-TE",
    "teaName": "Infusión de globo aerostático",
    "benefit": "Hago sitio a mi aire como quien abre la ventana de par en par.",
    "lesson": "Respirar hondo es abrir ventanas. Hoy aireas la casa por dentro: abres de par en par y dejas que el aire corra hasta el último rincón.",
    "exercise": "Abre los brazos en cruz mientras inspiras y ciérralos en un abrazo al exhalar. Repite seis veces, despacio. Toma un sorbo. Di en voz baja: “Abro ventanas por dentro y hay sitio para todo.”"
  },
  { 
    "day": 54,
    "title": "teatraliza-TE",
    "teaName": "Infusión de telón y aplausos",
    "benefit": "Hoy convierto mi drama en teatro y bajo el telón a tiempo.",
    "lesson": "Drama King por fin tiene escenario. Le damos cinco minutos de gran monólogo sobre el tráfico y después cae el telón. Un buen drama tiene principio, final y aplauso.",
    "exercise": "Narra en voz alta tu preocupación, con voz de actriz, tu respiración como si fuera un gran estreno, durante treinta segundos. Luego haz una reverencia y toma un sorbo. Di en voz baja: “Gracias, gracias; el telón ya cae.”"
  },
  { 
    "day": 55,
    "title": "descalza-TE",
    "teaName": "Infusión de pies en el suelo",
    "benefit": "Sin tacones ni títulos, respiro con los pies en el suelo.",
    "lesson": "Queen Zen medita con un cojín bordado y un mantra de importación. Hoy la descalzamos: pies en el suelo, nada que lucir, solo la tierra bajo ti y tu aire de siempre.",
    "exercise": "Quítate los zapatos y apoya los pies enteros en el suelo. Respira cinco veces notando el suelo bajo los talones. Di en voz baja: “Piso la tierra sin ceremonia; respiro igual que todo el mundo.”"
  },
  {  
    "day": 56,
    "title": "gira-TE",
    "teaName": "Infusión de baile de calcetines",
    "benefit": "Mi respiración sigue mis giros sin perder el compás.",
    "lesson": "A veces la respiración se atasca porque el cuerpo lleva demasiado rato quieto. Un giro lento es como cambiar de canal: cambia el paisaje y el aire se acomoda.",
    "exercise": "De pie, gira despacio el tronco hacia un lado, respira, y hacia el otro, respira. Cinco veces a cada lado, con las rodillas blandas. Di en voz baja: “Giro y respiro; mi aire me sigue el paso.”"
  },
  {  
    "day": 57,
    "title": "agasaja-TE",
    "teaName": "Infusión de pastel con velas",
    "benefit": "Hoy me agasajo con tres respiraciones de lujo.",
    "lesson": "Si un día quieres regalarte algo y no tienes tiempo ni presupuesto, hay un lujo gratis: tres respiraciones lentas con todos los honores, como si llegara una invitada VIP: tu propio aire.",
    "exercise": "Haz tres respiraciones lentas poniendo cara de que te sirven un banquete. Saborea cada una y toma un sorbo. Di en voz baja: “Me merezco este momento de lujo y es gratis.”"
  },
  {  
    "day": 58,
    "title": "recapitula-TE",
    "teaName": "Infusión de álbum de aire",
    "benefit": "He aprendido a respirar con más amabilidad este mes.",
    "lesson": "Este mes has suspirado, soplado, sacudido y bromeado con tu aire. Drama King ha dado funciones, Queen Zen ha bajado peldaños y tú has encontrado tu punto medio. Mira cuánto has avanzado.",
    "exercise": "Recuerda tres momentos del mes en que tu respiración te sirvió de ancla. Cuéntalos con los dedos y toma un sorbo. Di en voz baja: “Miro atrás y veo mi avance, un aire tras otro.”"
  },
  {  
    "day": 59,
    "title": "brinda-TE",
    "teaName": "Infusión de brindis con burbujas de vapor",
    "benefit": "Brindo por mí y por mi aire: lo estamos haciendo bien.",
    "lesson": "Final de mes de respiración. Levanta la taza y brinda con tu propio aire, que no ha faltado ni un solo día. Hoy toca piropo: algo bonito que decirte, con voz de amiga.",
    "exercise": "Levanta la taza como en un brindis, inspira y exhala con una sonrisa. Piensa un piropo para ti y guárdalo en el Piropero de la app. Di en voz baja: “Respiro, me acompaño y me quiero un poquito más.”"
  },
  {  
    "day": 60,
    "title": "inspira-TE",
    "teaName": "Infusión de primer aire",
    "benefit": "Cada nueva respiración es una página en blanco.",
    "lesson": "Hoy empieza algo nuevo sin hacer ruido: un aire que entra y todavía no sabe qué va a pasar. Tú tampoco, y es una buena forma de empezar.",
    "exercise": "Inspira por la nariz, imaginando que llenas una taza de aire fresco, y suéltalo en un suspiro. Hazlo tres veces y toma un sorbo. Di en voz baja: “Empiezo de nuevo con el primer aire de hoy.”"
  },
  {  
    "day":61,
    "title":"escucha-TE",
    "teaName":"Infusión de oído curioso",
    "benefit":"Hoy me escucho como escucharía a una buena amiga.",
    "lesson":"Dentro de ti hay una voz que habla bajito y casi nunca interrumpe. Hoy bajas el volumen del mundo y te sientas a su lado, como en la primera fila de una charla pequeña.",
    "exercise":"Cierra los ojos medio minuto y nota qué sonidos hay a tu alrededor. Luego pregúntate en silencio qué necesitas ahora. Toma un sorbo y di en voz baja: “Estoy aquí para escucharte, sin prisa y sin juicio.”"
  },
  {  
    "day":62,
    "title":"aquieta-TE",
    "teaName":"Infusión de lago sin viento",
    "benefit":"Cuando me aquieto, mi voz interior se oye mejor.",
    "lesson":"Un lago agitado no devuelve ningún reflejo; uno quieto devuelve el cielo entero. Con tu respiración pasa igual: al aquietarla, lo que de verdad necesitas sube a la superficie.",
    "exercise":"Apoya la espalda en la silla y respira cinco veces sin hacer nada más, como un lago sin viento. Deja que los hombros pesen. Di en voz baja: “En mi quietud también hay respuestas.”"
  },
  {  
    "day":63,
    "title":"susurra-TE",
    "teaName":"Infusión de rumor dramático",
    "benefit":"Puedo oír el murmullo de Drama King sin creérmelo todo.",
    "lesson":"Drama King te susurra al oído: “Esto va a terminar fatal”. Suena a secreto de Estado, pero es el mismo guion de siempre con más suspense. Escúchalo con curiosidad y pregúntale qué necesita de verdad.",
    "exercise":"Susurra tu peor pronóstico del día con voz de película de misterio y deja escapar una risa. Respira hondo y toma un sorbo. Di en voz baja: “Gracias por el aviso, Drama King; yo me ocupo.”"
  },
  {  
    "day":64,
    "title":"despeina-TE",
    "teaName":"Infusión de moño deshecho",
    "benefit":"Mi voz interior no necesita ir peinada para ser sabia.",
    "lesson":"Queen Zen solo escucha su voz interior cuando suena aterciopelada y poética. Hoy le revolvemos el peinado: a veces lo que necesitas llega torpe, con prisas y sin brillo, y aun así es verdad.",
    "exercise":"Despeínate con ambas manos o sacude la cabeza suavemente. Mírate sin arreglarte y toma un sorbo. Di en voz baja: “Escucho también lo que llega sin glamur ni poesía.”"
  },
  {
    "day":65,
    "title":"ladea-TE","teaName":
    "Infusión de cabeza ladeada",
    "benefit":"Un gesto pequeño me recuerda que estoy escuchando.",
    "lesson":"Cuando alguien te cuenta algo importante, ladeas la cabeza sin darte cuenta. Hoy lo haces a propósito, hacia dentro: un gesto pequeño y el cuerpo entiende que toca prestar atención.",
    "exercise":"Ladea la cabeza hacia un hombro y quédate ahí diez segundos; luego hacia el otro. Pregúntate qué quieres ahora. Toma un sorbo y di en voz baja: “Inclino la cabeza para oír mejor mi voz.”"
  },
  {
    "day":66,
    "title":"acaricia-TE",
    "teaName":"Infusión de lana y silencio",
    "benefit":"Mi voz interior merece una escucha con cariño.",
    "lesson":"Escuchar también puede ser una caricia. Imagina que tu necesidad de hoy es un gatito tímido: si le hablas fuerte se esconde, si le hablas bajito se sube a tu regazo.",
    "exercise":"Acaríciate un antebrazo despacio, como a un gatito, mientras respiras con calma. Pregunta a tu cuerpo qué le hace falta. Toma un sorbo y di en voz baja: “Te escucho con cariño, sin exigirte nada.”"
  },
  {
    "day":67,
    "title":"sintoniza-TE",
    "teaName":"Infusión de dial en su punto",
    "benefit":"Entre dos gritos, busco la frecuencia que es mía.",
    "lesson":"Drama King emite en la emisora del desastre; Queen Zen, en la del mantra permanente. Tú giras el dial entre las dos hasta encontrar la tuya: la que habla bajito y dice lo que de verdad necesitas.",
    "exercise":"Gira una mano en el aire como si movieras un dial. Haz que suene primero la emisora del drama, luego la del mantra, y detente en medio. Toma un sorbo. Di en voz baja: “Sintonizo mi propia emisora.”"
  },
  {
    "day":68,
    "title":"pregunta-TE",
    "teaName":"Infusión de pregunta sin prisa",
    "benefit":"Hoy hago una pregunta amable y dejo que la respuesta llegue sola.",
    "lesson":"Una buena pregunta es como dejar una escalera en un pozo: no tiras de nadie, solo ofreces el camino. Hoy te preguntas qué necesitas y esperas, sin llenar el silencio con tus propias respuestas.",
    "exercise":"Pregúntate en silencio qué necesitas hoy. Espera diez respiraciones sin contestar con prisa. Toma un sorbo despacio y di en voz baja: “Puedo esperar tu respuesta todo el tiempo que haga falta.”"
  },
  { 
    "day":69,
    "title":"ventila-TE",
    "teaName":"Infusión de cortina al viento",
    "benefit":"Renuevo el aire de dentro para oír mejor lo que hay.",
    "lesson":"Una habitación sin ventilar huele a lo mismo de siempre. Abres una rendija y entra aire nuevo; de repente se oyen detalles que ya estaban ahí. Con la respiración pasa igual.",
    "exercise":"Abre una ventana o una puerta, o imagina que lo haces. Inspira como si entrara aire de montaña y exhala el aire viejo. Cinco veces. Toma un sorbo y di en voz baja: “Dejo entrar aire nuevo y noticias de mí.”"
  },
  {
    "day":70,
    "title":"dramatiza-TE",
    "teaName":"Infusión de monólogo con eco",
    "benefit":"Cuando dramatizo a propósito, el drama pierde su disfraz.",
    "lesson":"Hoy le damos a Drama King el micrófono diez segundos, como en un concurso de talentos. Que exagere hasta que hasta él se ría. Después, en el silencio que queda, pregúntate qué necesitas de verdad.",
    "exercise":"Cuéntale a la pared tu preocupación del día con voz de narradora de documental trágico, diez segundos. Ríete y respira. Toma un sorbo y di en voz baja: “Tras la función, escucho lo que de verdad necesito.”"
  },
  {
    "day":71,
    "title":"desmaquilla-TE",
    "teaName":"Infusión de cara lavada",
    "benefit":"Me escucho sin filtros ni frases bonitas.",
    "lesson":"Queen Zen se pone cada mañana su maquillaje espiritual: frase luminosa, ceja zen y sonrisa de retiro. Hoy la desmaquillamos: debajo hay una persona normal con ganas de merendar, y esa también tiene cosas que decir.",
    "exercise":"Frótate la cara con las manos, como si te quitaras una capa de maquillaje invisible. Mírate a la vez sin posar. Toma un sorbo y di en voz baja: “Sin filtros ni frases bonitas: así te escucho.”"
  },
  {
    "day":72,
    "title":"acerca-TE",
    "teaName":"Infusión de silla arrimada",
    "benefit":"Acercarme a mí es el primer paso para oírme.",
    "lesson":"Para oír a alguien que habla bajito, acercas la silla. Contigo igual: un paso hacia dentro y la voz que parecía lejana resulta que estaba a un susurro.",
    "exercise":"Da un paso hacia delante, despacio, como si te acercaras a alguien que habla bajito. Pon la mano en el corazón y respira. Toma un sorbo. Di en voz baja: “Me acerco a mí con toda la calma del mundo.”"
  },
  {
    "day":73,
    "title":"cobija-TE",
    "teaName":"Infusión de paraguas y tejado",
    "benefit":"Me ofrezco refugio cuando algo dentro pide cobijo.",
    "lesson":"Cuando llueve por dentro, no hace falta arreglar las nubes: basta con buscar tejado. Hoy tu voz interior pide cobijo, y tú, que sabes ser buena anfitriona, la dejas pasar.",
    "exercise":"Siéntate en tu rincón favorito, cruza los brazos sobre el pecho como un tejado y quédate ahí diez respiraciones. Toma un sorbo y di en voz baja: “Aquí dentro cabes entera, con tu lluvia y todo.”"
  },
  {
    "day":74,
    "title":"arbitra-TE",
    "teaName":"Infusión de silbato amable",
    "benefit":"Puedo moderar la charla de Drama King y Queen Zen.","lesson":"Hoy hay debate en tu cabeza: Drama King dice que todo está perdido, Queen Zen que todo está bien. Tú eres la moderadora: das turno, pides silencio y decides qué parte de cada intervención te sirve.",
    "exercise":"Levanta una mano para dar la palabra a Drama King, luego a Queen Zen, y por fin a tu voz tranquila. Escucha a las tres un momento y toma un sorbo. Di en voz baja: “Doy turno a todas y decido con calma.”"
  },
  {
    "day":75,
    "title":"hojea-TE",
    "teaName":"Infusión de libro de hojas sueltas",
    "benefit":"Hoy hojeo mis pensamientos sin leerlos con prisa.",
    "lesson":"Tus pensamientos son un cuaderno de hojas sueltas. No hace falta leerlo entero: hoy lo hojeas como en una librería, notas cuáles se repiten y cuáles te llaman, y no compras ninguno.",
    "exercise":"Imagina que pasas páginas en el aire con la mano, una por cada pensamiento que llegue. Fíjate en cuál se repite. Toma un sorbo y di en voz baja: “Veo pasar mis pensamientos y no me quedo con ninguno.”"
  },
  {
    "day":76,
    "title":"oxigena-TE",
    "teaName":"Infusión de brisa de montaña",
    "benefit":"Cada respiración amplia me da espacio para oírme.",
    "lesson":"Respirar bien es dar espacio a tu voz interior. Cuando el pecho se llena, hasta lo que te dices por dentro suena menos apretado. Hoy tu respiración es el amplificador y no hace falta subir el volumen.",
    "exercise":"Inspira llenando la tripa, el costado y el pecho, como si llenaras tres habitaciones, una por piso. Suelta despacio. Repite cuatro veces. Toma un sorbo y di en voz baja: “Respiro con ganas y mi voz tiene espacio para sonar.”"
  },
  {
    "day":77,
    "title":"enfurruña-TE",
    "teaName":"Infusión de morritos y miel",
    "benefit":"Puedo enfurruñarme un minuto y luego escucharme.",
    "lesson":"Drama King se enfurruña porque ayer nadie lo aplaudió. Cruzamos los brazos, hacemos morritos, y cuando se le pasa la cara de ofendido, aparece lo que de verdad le pasaba.",
    "exercise":"Cruza los brazos, saca morritos y enfurrúñate con ganas durante veinte segundos. Después suelta la cara, respira y toma un sorbo. Di en voz baja: “Ya me he enfurruñado; ahora escucho lo que hay debajo.”"
  },
  {
    "day":78,
    "title":"descuelga-TE",
    "teaName":"Infusión de pedestal sin altavoz",
    "benefit":"Dejo de dar charlas a mi interior y empiezo a escucharlo.",
    "lesson":"Queen Zen da conferencias dentro de su cabeza con mucho público y ningún oyente. Hoy descuelga el micrófono y se sienta en la última fila. Escuchar es un oficio más humilde, y más bonito.",
    "exercise":"Haz como si dejaras un micrófono sobre una mesa y te sentaras detrás, en la última fila. Respira y escucha en silencio medio minuto. Toma un sorbo y di en voz baja: “Hoy soy oyente, no conferenciante.”"
  },
  {
    "day":79,
    "title":"levanta-TE",
    "teaName":"Infusión de antena al sol",
    "benefit":"Un gesto pequeño me ayuda a ponerme en marcha.",
    "lesson":"A veces lo que necesitas es solo cambiar de postura. Un cuerpo que se levanta cambia el humor de la habitación, y desde otra altura tu voz interior habla distinto.",
    "exercise":"Levántate despacio, alarga los brazos hacia el techo e inspira. Bájalos y exhala. Pregúntate qué necesitas desde esta altura nueva. Toma un sorbo y di en voz baja: “Me levanto y mi voz suena distinta desde aquí.”"
  },
  {   
    "day":80,
    "title":"perfuma-TE",
    "teaName":"Infusión de pétalos y paciencia","benefit":"Me regalo un olor que me haga sentir en casa.",
    "lesson":"El olfato llega a rincones donde las palabras no entran. Hoy tu voz interior puede hablar en perfume: un cítrico, una canela, el pelo recién lavado... lo que huela a ti en tu mejor versión casera.",
    "exercise":"Huele con calma tu infusión, una fruta, una colonia o el jabón de manos. Cierra los ojos y deja que el olor te cuente algo. Toma un sorbo y di en voz baja: “Mi nariz sabe lo que necesito y me lo susurra.”"
  },
  {
    "day":81,
    "title":"templa-TE",
    "teaName":"Infusión de agua tibia perfecta",
    "benefit":"Ni hirviendo ni helada: busco mi temperatura.",
    "lesson":"Drama King lo sirve todo hirviendo y Queen Zen lo sirve helado, con hielo y cara de paz. Tú pruebas el agua con el dedo, como en el baño de un bebé, y buscas la temperatura que te cuida.",
    "exercise":"Rodea la taza con las manos y nota si está demasiado caliente o fría. Espera hasta que esté justa. Toma un sorbo y di en voz baja: “Busco mi temperatura, ni hirviendo ni helada.”"
  },
  {
    "day":82,
    "title":"rebobina-TE",
    "teaName":"Infusión de cinta rebobinada",
    "benefit":"Miro mi día hacia atrás para ver qué me pidió el cuerpo.",
    "lesson":"Rebobinar el día es como pasar una cinta: aquí, a las diez, un suspiro; allá, a las cinco, un hombro duro. Tu cuerpo te dio pistas toda la jornada, y hoy las repasas sin reproche.",
    "exercise":"Cierra los ojos y pasa tu día en marcha atrás, escena a escena, como una cinta. Detente donde notes un tirón o un alivio. Toma un sorbo. Di en voz baja: “Gracias, cuerpo, por todas tus pistas.”"
  },
  {
    "day":83,
    "title":"airea-TE",
    "teaName":"Infusión de sábana al sol",
    "benefit":"Aireo lo que llevo dentro para ver qué me sobra.",
    "lesson":"Cuelgas la ropa al sol y por la tarde huele a campo. Con tu respiración haces lo mismo con lo de dentro: lo cuelgas al aire y lo que sobra se va, y lo que huele a ti se queda.",
    "exercise":"Inspira abriendo el pecho y exhala despacio, como si tendieras sábanas al sol. Cuatro veces, con los hombros sueltos. Toma un sorbo y di en voz baja: “Lo que sobra se va con el aire; lo mío se queda.”"
  },
  {
    "day":84,
    "title":"exagera-TE",
    "teaName":"Infusión de lupa dramática",
    "benefit":"Si exagero mi drama a propósito, descubro lo que necesito.",
    "lesson":"Drama King pide una banda sonora de violines para anunciar que se ha quedado sin leche. Hoy le seguimos la corriente hasta lo absurdo, y justo en la carcajada se oye lo que hacía falta.",
    "exercise":"Cuenta a alguien imaginario un fastidio pequeño, pero con gestos enormes, lágrimas de teatro y música de violines con la boca. Ríe y respira. Toma un sorbo. Di en voz baja: “Con risa me oigo mejor.”"
  },
  {
    "day":85,
    "title":"desarma-TE",
    "teaName":"Infusión de armadura de hojalata",
    "benefit":"Sin armadura espiritual, oigo lo que de verdad siento.",
    "lesson":"Queen Zen lleva armadura de frases bonitas para que nada le duela y nada le entre. Hoy se la quita pieza a pieza y descubre que debajo hay una persona que también tiene días raros.",
    "exercise":"Haz como si te quitaras una armadura: guantes, hombreras, casco. Deja cada pieza en el suelo con un suspiro. Quédate liviana un instante y toma un sorbo. Di en voz baja: “Me quito la armadura y me escucho tal como soy.”"
  },
  {
    "day":86,
    "title":"asiente-TE",
    "teaName":"Infusión de cabeceo amable",
    "benefit":"Un sí pequeño a mí misma ya es una forma de escucharme.",
    "lesson":"Cuando alguien te escucha de verdad, asiente. Hoy ese gesto es para ti: un cabeceo suave que dice te he oído, sigue. No hace falta estar de acuerdo con todo; basta con haberlo oído.",
    "exercise":"Asiente despacio con la cabeza tres veces mientras piensas en lo que necesitas. No hace falta resolver nada. Toma un sorbo y di en voz baja: “Te he oído; no tienes que hablar más fuerte.”"
  },
  {
    "day":87,
    "title":"mulle-TE",
    "teaName":"Infusión de cojín esponjoso",
    "benefit":"Hoy me preparo un sitio blando donde escucharme.",
    "lesson":"Un cojín esponjado es una invitación: aquí te puedes sentar sin prisa. Tu voz interior lleva días de pie, y hoy le preparas un sitio blando donde por fin contártelo todo.",
    "exercise":"Esponja un cojín con las dos manos, dale un par de golpecitos y siéntate encima o apóyate en él. Respira diez veces. Toma un sorbo y di en voz baja: “Tienes un sitio blando para decirme lo que quieras.”"
  },
  {
    "day":88,
    "title":"entiende-TE",
    "teaName":"Infusión de traducción simultánea",
    "benefit":"Entre dos voces opuestas, entiendo a mi manera.",
    "lesson":"Drama King y Queen Zen hablan idiomas distintos pero dicen lo mismo: necesito que me escuchen. Tú haces de intérprete, traduces a lenguaje cotidiano y descubres que piden algo sencillo.",
    "exercise":"Elige un pensamiento dramático y otro zen sobre lo mismo. Tradúcelos a una frase sencilla, como hoy necesito descansar. Toma un sorbo. Di en voz baja: “Entiendo las dos voces y decido yo.”"
  },
  {
    "day":89,
    "title":"recuerda-TE",
    "teaName":"Infusión de baúl de recuerdos",
    "benefit":"He aprendido a oírme un poco mejor este mes.",
    "lesson":"Este mes has aprendido a ladear la cabeza hacia dentro, a bajar el volumen del mundo y a mediar entre dos voces dramáticas. Mira cuánto has avanzado: ahora te oyes mejor que hace treinta días.",
    "exercise":"Recuerda tres momentos del mes en que escuchaste algo importante de ti. Cuéntalos con los dedos, uno por uno. Toma un sorbo y di en voz baja: “Me escucho un poco mejor cada día, y eso ya es mucho.”"
  },
  {
    "day":90,
    "title":"piropea-TE",
    "teaName":"Infusión de piropo al oído",
    "benefit":"Hoy me digo algo bonito y me lo creo.",
    "lesson":"Final de mes de escucha. Tu voz interior te ha dicho muchas cosas; hoy toca devolverle un piropo. Piensa en una cualidad tuya que has oído en voz baja este mes y dila en voz alta, que se note.",
    "exercise":"Elige un piropo para ti y dilo mirándote al espejo o a la ventana, con una sonrisa. Guárdalo en el Piropero de la app y toma un sorbo. Di en voz baja: “Te escucho, te valoro y te quiero un poquito más.”"
  },
  {
    "day": 91,
    "title": "acepta-TE",
    "teaName": "Infusión de lluvia sin quejas",
    "benefit": "Hoy acepto lo que hay, aunque no sea lo que pedí.",
    "lesson": "Aceptar no es rendirte: es dejar de pelear con la lluvia para poder buscar un paraguas. Hoy miras lo que hay en tu día, tal cual viene, y le pones nombre sin quejarte ni maquillarlo.",
    "exercise": "Mira por la ventana el tiempo que hace y, sin cambiarlo, di en voz alta cómo está. Luego repite lo mismo sobre tu día. Toma un sorbo y di en voz baja: “Esto es lo que hay, y desde aquí empiezo.”"
  },
  {
    "day": 92,
    "title": "reposa-TE",
    "teaName": "Infusión de hoja que se asienta",
    "benefit": "Dejo reposar el aire y lo que traigo conmigo.",
    "lesson": "El té bueno necesita reposar: si lo remueves sin parar, nunca suelta su sabor. Con tu respiración pasa igual: déjala asentarse y acepta el ritmo que hoy le sale, sea corto, largo o torcido.",
    "exercise": "Respira como te salga, sin ordenarle nada, durante seis respiraciones, con las manos sobre las rodillas. Cuéntalas una por una. Toma un sorbo y di en voz baja: “Acepto la respiración que hoy me toca.”"
  },
  {
    "day": 93,
    "title": "lloriquea-TE",
    "teaName": "Infusión de pañuelo y violines",
    "benefit": "Puedo dejar que Drama King lloriquee y seguir en pie.",
    "lesson": "Drama King necesita hoy cinco minutos de lloriqueo de gala, con pañuelo de seda. No le llevamos la contraria: aceptar tu drama es dejarle llorar y ofrecerle una galleta, no un discurso.",
    "exercise": "Pon cara de lloriqueo de telenovela durante veinte segundos, con suspiro y mano en la frente. Cuando se acabe la función, respira y toma un sorbo. Di en voz baja: “Acepto mi drama sin darle el mando.”"
  },
  {
    "day": 94,
    "title": "desmitifica-TE",
    "teaName": "Infusión de aura sin planchar",
    "benefit": "Aceptarme también incluye aceptar mis días poco iluminados.",
    "lesson": "Queen Zen asegura que ella no se enfada, no se agobia y no se despeina. Mentira piadosa con incienso. Hoy aceptamos que también tiene días de gruñir, y no pasa nada: es humana con esterilla de yoga.",
    "exercise": "Di en voz alta una cosa que hoy no te sale nada zen, como un enfado pequeño o una pereza enorme. Sonríe y toma un sorbo. Di en voz baja: “Hoy no estoy zen, y me acepto igual.”"
  },
  {
    "day": 95,
    "title": "encoge-TE",
    "teaName": "Infusión de hombros caídos",
    "benefit": "Encogerme de hombros a veces es la forma más sabia de aceptar.",
    "lesson": "El encogimiento de hombros es el gesto de aceptar más antiguo del mundo: significa bueno, es lo que hay. Hoy lo usas a conciencia.",
    "exercise": "Sube los hombros hasta las orejas, aguanta tres segundos y suéltalos de golpe, con un suspiro. Repite cinco veces. Toma un sorbo y di en voz baja: “Es lo que hay, y puedo con ello.”"
  },
  {
    "day": 96,
    "title": "consuela-TE",
    "teaName": "Infusión de galleta y consuelo",
    "benefit": "Me acepto con ternura, también cuando me sale torcido.",
    "lesson": "Si una amiga te contara que ha metido la pata, no la regañarías: le pondrías la mano en el hombro. Hoy te toca a ti. Aceptarte es hablarte como hablarías a quien más quieres.",
    "exercise": "Ponte una mano sobre el hombro contrario, como si consolaras a una amiga, y quédate así diez respiraciones. Toma un sorbo y di en voz baja: “Tranquila, que has hecho lo que has podido.”"
  },
  {
    "day": 97,
    "title": "empata-TE",
    "teaName": "Infusión de marcador en tablas",
    "benefit": "Drama King y Queen Zen empatan; yo me quedo con el punto medio.",
    "lesson": "Drama King dice que todo es culpa tuya; Queen Zen, que nada es culpa de nadie. Tú dejas el partido en empate: una parte te toca y otra no, y aceptarlo cabe en una sola taza.",
    "exercise": "Con una mano di la frase de Drama King y con la otra la de Queen Zen. Junta las manos en el pecho y respira. Toma un sorbo y di en voz baja: “Una parte me toca, otra no, y acepto las dos.”"
  },
  {
    "day": 98,
    "title": "admite-TE",
    "teaName": "Infusión de verdad sin disfraz",
    "benefit": "Admitir lo que siento es el primer paso para aceptarlo.",
    "lesson": "Admitir es abrir la puerta y decir: pasa, te veo. No tienes que invitarlo a quedarse. Hoy dices en voz alta, o por dentro, qué sientes de verdad, sin adornos ni excusas.",
    "exercise": "Completa en silencio la frase: ahora mismo siento... Hazlo tres veces, con tres emociones distintas. Toma un sorbo y di en voz baja: “Lo admito sin vergüenza: esto es lo que siento.”"
  },
  {
    "day": 99,
    "title": "desahoga-TE",
    "teaName": "Infusión de ventana de domingo",
    "benefit": "Hoy suelto el aire, y con él lo que no puedo cambiar.",
    "lesson": "Hay cosas que hoy no puedes cambiar, y llevarlas en el pecho como una mochila no las mueve de sitio. Respirar hondo no las resuelve, pero te deja un poco más de espacio al lado.",
    "exercise": "Inspira por la nariz y suelta el aire por la boca como si te desabrocharas un botón. Repite cinco veces, bajando los hombros. Toma un sorbo y di en voz baja: “Lo que no puedo cambiar, lo respiro y lo dejo estar.”"
  },
  {
    "day": 100,
    "title": "refunfuña-TE",
    "teaName": "Infusión de gruñido con canela",
    "benefit": "Puedo refunfuñar un rato y luego seguir con el día.",
    "lesson": "Hoy Drama King refunfuña: hace frío, hace calor, el café está tibio. Si lo dejas gruñir un rato con permiso, se cansa solo. Aceptar la queja también es una forma de soltarla.",
    "exercise": "Refunfuña en voz alta durante veinte segundos sobre algo menudo, con gruñidos y todo. Después sonríe y toma un sorbo. Di en voz baja: “Ya he refunfuñado; ahora toca seguir con el día.”"
  },
  {
    "day": 101,
    "title": "desafina-TE",
    "teaName": "Infusión de mantra desafinado",
    "benefit": "Puedo desafinar un poco y seguir siendo valiosa.",
    "lesson": "Queen Zen canta su mantra con una afinación de catedral y mira mal a quien se equivoca. Hoy desafina a propósito: se oye peor, pero suena mucho más a ella.",
    "exercise": "Canta o tararea una nota larga, a propósito un poco desafinada, y ríete. Respira y toma un sorbo. Di en voz baja: “Desafino, me río y no pasa nada.”"
  },
  {
    "day": 102,
    "title": "abre-TE",
    "teaName": "Infusión de manos abiertas",
    "benefit": "Abro las manos para recibir lo que hoy me toca.",
    "lesson": "Cuando algo no te gusta, cierras el puño sin darte cuenta. Aceptar empieza por el cuerpo: abre los dedos y deja que lo que sea llegue o se vaya sin agarrarlo.",
    "exercise": "Cierra los puños con fuerza cinco segundos y luego ábrelos despacio, con las palmas hacia arriba, sobre las rodillas. Respira tres veces. Toma un sorbo y di en voz baja: “Abro las manos y dejo que la vida pase.”"
  },
  {
    "day": 103,
    "title": "apacigua-TE",
    "teaName": "Infusión de ronroneo suave",
    "benefit": "Me trato con suavidad, aunque hoy no haya salido nada bien.",
    "lesson": "Hay días en que lo único que puedes hacer es ronronear por dentro y esperar. Hoy apacigua a la parte de ti que se siente torpe: una voz suave le basta.",
    "exercise": "Frótate las manos hasta que estén calientes y colócalas sobre las mejillas. Quédate así diez respiraciones. Toma un sorbo y di en voz baja: “Hoy me trato con suavidad, salga como salga.”"
  },
  {
    "day": 104,
    "title": "ecualiza-TE",
    "teaName": "Infusión de volumen medio",
    "benefit": "No tengo que gritar ni callar: puedo ajustar mi volumen.",
    "lesson": "Drama King tiene el volumen siempre al máximo y Queen Zen, en silencio de monasterio. Tú tienes la mesa de mezclas: bajas los gritos, subes un poco los susurros y encuentras tu sonido.",
    "exercise": "Mueve las manos como si deslizaras dos controles: uno baja el drama, otro sube la calma. Detente cuando el sonido te parezca justo. Toma un sorbo. Di en voz baja: “Ajusto mi volumen y acepto mi propio sonido.”"
  },
  {
    "day": 105,
    "title": "constata-TE",
    "teaName": "Infusión de hechos y un pellizco",
    "benefit": "Miro los hechos tal como son, sin añadirles novelas.",
    "lesson": "Una cosa es lo que pasó: llovió, llegué tarde. Otra, la novela que añades: nadie me respeta. Hoy separas los hechos del guion y aceptas solo los primeros.",
    "exercise": "Elige algo que te molesta y escríbelo en el aire con una sola frase de hechos, sin adjetivos dramáticos. Toma un sorbo y di en voz baja: “Esto es lo que ha pasado; la novela la dejo en la estantería.”"
  },
  {
    "day": 106,
    "title": "amaina-TE",
    "teaName": "Infusión de tormenta que se va",
    "benefit": "Mi respiración amaina como una tormenta cansada.",
    "lesson": "Las tormentas no se enfadan: pasan. Si te sientas a esperar con la ventana cerrada, amainan solas. Hoy tu respiración hace de cielo que se va despejando poco a poco.",
    "exercise": "Cierra los ojos y alarga cada exhalación un poco más que la anterior, como un trueno que se aleja. Hazlo seis veces. Toma un sorbo y di en voz baja: “Dejo que la tormenta pase a su ritmo.”"
  },
  {
    "day": 107,
    "title": "desmaya-TE",
    "teaName": "Infusión de sofá y abanico",
    "benefit": "Puedo desmayarme de mentira y levantarme de verdad.",
    "lesson": "Drama King se desmaya al leer la factura de la luz, con abanico y todo. Aceptar tu drama es ofrecerle un sofá donde caer con estilo y luego ayudarle a levantarse sin sermones.",
    "exercise": "Déjate caer con gracia en un sofá o una silla, con la mano en la frente y un ay larguísimo. Cuenta hasta cinco, levántate y respira. Toma un sorbo y di en voz baja: “Me desmayo con gracia y me levanto con ganas.”"
  },
  {
    "day": 108,
    "title": "desbanca-TE",
    "teaName": "Infusión de trono prestado",
    "benefit": "Dejo que mi ego espiritual baje del trono sin enfadarse.",
    "lesson": "El ego espiritual de Queen Zen se sienta en el trono del yo ya lo he trabajado todo. Hoy lo bajamos con una sonrisa y aceptamos que siempre queda algo por aprender.",
    "exercise": "Haz una reverencia exagerada a tu trono imaginario y siéntate en el suelo, a su lado. Respira allí cinco veces. Toma un sorbo y di en voz baja: “Siempre queda algo por aprender, y me gusta.”"
  },
  {
    "day": 109,
    "title": "tamborilea-TE",
    "teaName": "Infusión de latido y tambor",
    "benefit": "Mi cuerpo marca el ritmo y yo lo acepto como viene.",
    "lesson": "Tu corazón lleva el compás sin pedirte permiso ni opinión. Hoy lo acompañas con los dedos, como quien toca el cajón en una fiesta, sin intentar cambiarle el tempo.",
    "exercise": "Tamborilea con los dedos en el pecho o en la mesa, siguiendo tu propio ritmo, durante treinta segundos. Luego para y escucha el silencio. Toma un sorbo y di en voz baja: “Acepto mi ritmo, sea el que sea hoy.”"
  },
  {
    "day": 110,
    "title": "calienta-TE",
    "teaName": "Infusión de calcetines de lana",
    "benefit": "Me doy calor sin esperar a que alguien lo haga.",
    "lesson": "A veces esperas que alguien te abrace y no llega nadie. Hoy te calientas tú: unos calcetines gruesos, una bufanda, una taza humeante. Aceptar tu necesidad también es cuidarla.",
    "exercise": "Ponte unos calcetines gordos o una manta en los pies y abraza la taza con las dos manos. Quédate quieta un minuto. Toma un sorbo y di en voz baja: “Me doy el calor que necesito.”"
  },
  {
    "day": 111,
    "title": "reparte-TE",
    "teaName": "Infusión de mesa con tres sillas",
    "benefit": "Doy silla a cada voz y la tercera la ocupo yo.",
    "lesson": "Hoy sentamos a Drama King a tu izquierda y a Queen Zen a tu derecha. Los dos hablan, los dos tienen razón a medias y tú, en el centro, repartes los turnos y la merienda.",
    "exercise": "Pon tres tazas u objetos en fila. Uno es Drama King, otro Queen Zen, el del centro eres tú. Toca cada uno y respira. Toma un sorbo y di en voz baja: “Hay sitio para las tres voces en mi mesa, y yo presido.”"
  },
  {
    "day": 112,
    "title": "saborea-TE",
    "teaName": "Infusión de sorbo lento",
    "benefit": "Saboreo lo que siento, aunque no tenga buen gusto.",
    "lesson": "Una emoción incómoda también tiene sabor: amargo, ácido, salado. Hoy la pruebas con la lengua de la curiosidad, sin escupirla ni tragártela de golpe.",
    "exercise": "Da un sorbo muy lento y pon nombre al sabor. Luego piensa en una emoción incómoda y ponle sabor también. Respira y di en voz baja: “Pruebo lo que siento sin escupirlo.”"
  },
  {
    "day": 113,
    "title": "inhala-TE",
    "teaName": "Infusión de aire recién llegado",
    "benefit": "Inhalo lo que hay, sin pedirle que sea otra cosa.",
    "lesson": "Inhalar es aceptar lo que el mundo te ofrece en ese instante: aire de cocina, de calle o de armario. No eliges el aroma, pero sí puedes recibirlo sin hacer muecas.",
    "exercise": "Inhala despacio y nota qué huele a tu alrededor, sea lo que sea. Exhala sin juzgar el olor. Cinco veces. Toma un sorbo y di en voz baja: “Recibo lo que hay y sigo respirando.”"
  },
  {
    "day": 114,
    "title": "enrabieta-TE",
    "teaName": "Infusión de pataleta con sirope",
    "benefit": "Una pataleta pequeña también cabe en mi vida.",
    "lesson": "Drama King hace una pataleta porque la tostadora no tuesta a su gusto. Hoy no le decimos que se calme: le dejamos patalear cinco segundos sobre una alfombra y luego le ofrecemos agua.",
    "exercise": "Da un par de pataletas en el sitio, con los pies, durante diez segundos, con ganas y sin romper nada. Luego respira hondo y sonríe. Toma un sorbo y di en voz baja: “Ya he pataleado; me siento más ligera.”"
  },
  {
    "day": 115,
    "title": "desencarama-TE",
    "teaName": "Infusión de escalera de mano",
    "benefit": "Bajo de lo alto y descubro que abajo también se respira.",
    "lesson": "Queen Zen está subida a un árbol de iluminación y no se atreve a bajar porque se despeinaría. Hoy le tendemos una escalera: abajo hay suelo firme, gente simpática y mejor merienda.",
    "exercise": "Imagina que bajas por una escalera de mano, peldaño a peldaño, y pisas el suelo con ambos pies al final. Respira. Toma un sorbo y di en voz baja: “Bajo del árbol y el suelo me recibe.”"
  },
  {
    "day": 116,
    "title": "acomoda-TE",
    "teaName": "Infusión de postura a mi medida",
    "benefit": "Me acomodo a mi manera y me siento a gusto.",
    "lesson": "No existe una postura perfecta para aceptar lo que hay. Prueba una, cambia, prueba otra: tu cuerpo sabrá cuál se siente a tu medida y cuál es puro teatro.",
    "exercise": "Prueba tres posturas distintas en la silla o el sofá, cada una diez segundos, y quédate con la que te dé más paz. Toma un sorbo y di en voz baja: “Esta postura es la mía, y me acomodo en ella.”"
  },
  {
    "day": 117,
    "title": "acurruca-TE",
    "teaName": "Infusión de ovillo y gato",
    "benefit": "Me acurruco sin culpa cuando el cuerpo me lo pide.",
    "lesson": "Acurrucarse es el arte de hacerse pequeña y blandita, como un ovillo. Hoy te lo permites sin sentirte perezosa: es solo tu manera de decir que hoy necesitas abrigo.",
    "exercise": "Siéntate con las piernas recogidas y abrázalas, como un ovillo. Respira cinco veces notando la cara apoyada en las rodillas. Toma un sorbo y di en voz baja: “Me acurruco sin prisa y sin culpa.”"
  },
  {
    "day": 118,
    "title": "ajusta-TE",
    "teaName": "Infusión de receta con lo que hay",
    "benefit": "Ajusto la expectativa a la realidad y sigo en marcha.",
    "lesson": "Drama King pide la luna entera y se enfada si es cuarto creciente; Queen Zen dice que ya no necesita luna. Tú ajustas la expectativa, como quien adapta una receta a lo que hay en la nevera.",
    "exercise": "Piensa en una expectativa que te pesa y reduce su tamaño con las manos, de grande a mediana. Haz lo mismo con la otra mano. Toma un sorbo y di en voz baja: “Ajusto mi expectativa y sigo con ganas.”"
  },
  {
    "day": 119,
    "title": "recopila-TE",
    "teaName": "Infusión de cuaderno de aceptaciones",
    "benefit": "Este mes he aprendido a aceptar sin rendirme.",
    "lesson": "Este mes has dejado lloriquear a Drama King, bajar a Queen Zen de su árbol y abrir las manos. Mira cuánto has avanzado: aceptar no te ha hecho más pequeña, sino más ligera.",
    "exercise": "Recopila tres cosas que has aceptado este mes, una por dedo, y mírate la mano como si fuera un diploma. Toma un sorbo y di en voz baja: “Acepto más cosas que hace un mes, y eso ya es avanzar.”"
  },
  {
    "day": 120,
    "title": "elogia-TE",
    "teaName": "Infusión de piropo con aceptación",
    "benefit": "Hoy me elogio sin ponerme pegas.",
    "lesson": "Final del mes de aceptación. Hoy toca aceptar un elogio sin quitarle mérito ni decir que fue suerte. Piensa en algo que has hecho bien este mes y recíbelo como si te lo dijera una vecina cariñosa.",
    "exercise": "Elige un piropo para ti y dilo mirándote al espejo, sin quitarle importancia. Guárdalo en el Piropero de la app. Toma un sorbo y di en voz baja: “Me lo acepto y me lo merezco.”"
  },
  {
    "day": 121,
    "title": "cuida-TE",
    "teaName": "Infusión de mimo cotidiano",
    "benefit": "Hoy me cuido como cuido a quien más quiero.",
    "lesson": "Cuidarte no es un lujo de domingo: es regar cada día un poco. Hoy empiezas mirando cómo estás, sin exigirte mejorar nada, igual que quien se asoma a ver cómo van sus macetas.",
    "exercise": "Pon una mano en el pecho y otra en la tripa y pregúntate cómo estás de energía, del 1 al 10, sin cambiar la cifra. Toma un sorbo y di en voz baja: “Hoy me cuido empezando por mirarme.”"
  },
  {
    "day": 122,
    "title": "recobra-TE",
    "teaName": "Infusión de aliento recuperado",
    "benefit": "Recobro el aliento a mi ritmo, sin carreras.",
    "lesson": "Cuando acabas de subir una escalera y te paras a recobrar el aliento, no te riñes por jadear. Hoy haces lo mismo con el día: una pausa para que el aire te alcance.",
    "exercise": "Apoya las manos en las rodillas, como tras subir una cuesta, y respira cinco veces hasta que el aire te alcance. Toma un sorbo y di en voz baja: “Me paro y recobro el aliento, que no hay carrera.”"
  },
  {
    "day": 123,
    "title": "bosteza-TE",
    "teaName": "Infusión de bostezo con orquesta",
    "benefit": "Bostezo sin disculparme: mi cuerpo también tiene opinión.",
    "lesson": "Drama King bosteza como si le abandonara el alma: cuadro completo, mano en la boca y gemido. Lo dejamos actuar. Es su manera teatral de decir que hoy necesita una pausa.",
    "exercise": "Bosteza con ganas tres veces, con gemido de ópera y brazos abiertos, y ríete si te sale la risa. Toma un sorbo despacio y di en voz baja: “Mi cuerpo pide una pausa y yo le doy la palabra.”"
  },
  {
    "day": 124,
    "title": "gandulea-TE",
    "teaName": "Infusión de esterilla sin estrenar",
    "benefit": "Puedo no hacer nada y seguir siendo valiosa.",
    "lesson": "Queen Zen se levanta a las cinco para meditar, hacer yoga y escribir tres páginas de gratitud. Hoy le proponemos algo radical: quedarse mirando el techo. Descansar de verdad también es una práctica.",
    "exercise": "Túmbate o recuéstate y mira un punto del techo durante treinta segundos sin hacer nada útil. Después toma un sorbo despacio. Di en voz baja: “Hoy mi práctica es no hacer nada, y la hago bien.”"
  },
  {
    "day": 125,
    "title": "despereza-TE",
    "teaName": "Infusión de sol en la espalda",
    "benefit": "Un buen desperezo me recuerda que mi cuerpo es mío.",
    "lesson": "Un desperezo bien hecho dura lo que quiera el cuerpo y no necesita justificación. Hoy te lo permites largo y sonoro, con gruñido incluido.",
    "exercise": "Alarga los brazos sobre la cabeza, entrelaza los dedos y estírate hacia arriba. Gruñe un poco si te apetece. Suelta y toma un sorbo. Di en voz baja: “Me desperezo a mi gusto y sin pedir permiso.”"
  },
  {
    "day": 126,
    "title": "baña-TE",
    "teaName": "Infusión de espuma y vapor",
    "benefit": "Hoy me doy un baño de cariño, aunque sea en el lavabo.",
    "lesson": "No hace falta una bañera con velas: bastan unos minutos de agua tibia en las manos y la cara. Cuidarte también cabe en un lavabo.",
    "exercise": "Lávate las manos con agua tibia y mucha calma, notando cada dedo. Sécalas despacio y toma un sorbo. Di en voz baja: “Me lavo el día de encima y me quedo a gusto.”"
  },
  {
    "day": 127,
    "title": "dosifica-TE",
    "teaName": "Infusión de cucharada justa",
    "benefit": "No hace falta todo hoy: reparto mis fuerzas.",
    "lesson": "Drama King gasta toda la energía en el primer acto y Queen Zen la guarda tanto que nunca sale a escena. Tú las dosificas: un poco por la mañana, otro poco por la tarde y una buena reserva para el final.",
    "exercise": "Dibuja con el dedo en el aire tres vasos: mañana, tarde y noche. Rellena cada uno hasta la mitad con tu energía de hoy. Toma un sorbo y di en voz baja: “Reparto mis fuerzas y me queda para mí.”"
  },
  {
    "day": 128,
    "title": "advierte-TE",
    "teaName": "Infusión de señal en el camino",
    "benefit": "Me doy cuenta de lo que mi cuerpo pide antes de que grite.",
    "lesson": "El cansancio avisa bajito: un bostezo, los ojos que pican, la paciencia que se acorta. Hoy te fijas en esas señales como quien lee los carteles de una carretera tranquila.",
    "exercise": "Recorre tu cuerpo de pies a cabeza con la atención, despacio, y fíjate dónde hay cansancio o tensión. Sin arreglar nada. Toma un sorbo y di en voz baja: “Veo tus señales, cuerpo, y las tengo en cuenta.”"
  },
  {
    "day": 129,
    "title": "sosiega-TE",
    "teaName": "Infusión de tarde sin prisa",
    "benefit": "Sosiego mi respiración como quien baja el fuego.",
    "lesson": "Cuando algo hierve a fuego fuerte, no hace falta apagarlo: basta con bajar la llama. Con tu respiración igual: un poco más lenta, un poco más honda, y el caldo deja de saltar.",
    "exercise": "Inspira contando hasta tres y exhala contando hasta cuatro, seis veces, como bajando una llama poco a poco. Toma un sorbo y di en voz baja: “Bajo la llama y todo se asienta.”"
  },
  {
    "day": 130,
    "title": "arrastra-TE",
    "teaName": "Infusión de chancletas y drama",
    "benefit": "Puedo ir arrastrando los pies con humor y con cariño.",
    "lesson": "Drama King se arrastra por el pasillo gimiendo que el lunes es un abismo sin fondo. Le ponemos zapatillas, un cojín y una galleta. A veces el drama solo quiere compañía hasta el sofá.",
    "exercise": "Arrastra los pies unos pasos por la habitación con cara de lunes eterno, gimiendo con exageración. Luego siéntate y toma un sorbo. Di en voz baja: “Llego al sofá a mi ritmo y con humor.”"
  },
  {
    "day": 131,
    "title": "desenchufa-TE",
    "teaName": "Infusión de móvil dormido",
    "benefit": "Desenchufarme un rato es otra forma de cargarme.",
    "lesson": "Queen Zen presume de rutina de bienestar con quince pasos y seguimiento en tres aplicaciones. Hoy le desenchufamos el móvil un minuto: el descanso no necesita estadísticas, solo silencio.",
    "exercise": "Deja el móvil boca abajo en otra habitación durante un minuto. Sin pantalla, mira por la ventana o cierra los ojos. Toma un sorbo y di en voz baja: “El descanso no necesita pantalla ni aplausos.”"
  },
  {
    "day": 132,
    "title": "camina-TE",
    "teaName": "Infusión de pasos pequeños",
    "benefit": "Un paso pequeño hacia lo que me hace bien ya cuenta.",
    "lesson": "Los hábitos amables empiezan por un paso ridículamente pequeño: ir hasta la cocina por un vaso de agua, abrir la ventana, dar la vuelta al pasillo. Pequeño no es poco.",
    "exercise": "Camina hasta la ventana más lejana de tu casa y vuelve despacio, contando los pasos. Sonríe a tu sombra y toma un sorbo. Di en voz baja: “Un paso pequeño también es un paso.”"
  },
  {
    "day": 133,
    "title": "masajea-TE",
    "teaName": "Infusión de crema y calma",
    "benefit": "Mis manos también merecen un cuidado tranquilo.",
    "lesson": "Tus manos han abierto puertas, escrito mensajes y sostenido tazas todo el día. Hoy les devuelves el favor con un masaje lento, sin técnica y sin prisa.",
    "exercise": "Masajea una mano con la otra, presionando suave la palma y cada dedo, y luego cambia. Toma un sorbo y di en voz baja: “Gracias, manos, por todo lo que hacéis por mí.”"
  },
  {
    "day": 134,
    "title": "alterna-TE",
    "teaName": "Infusión de mitad y mitad",
    "benefit": "Alternar esfuerzo y descanso me mantiene a flote.",
    "lesson": "Drama King quiere trabajar sin parar hasta caer fulminado; Queen Zen, parar para siempre. Tú alternas: un rato de esfuerzo, un rato de descanso, y la tarde te sale redonda.",
    "exercise": "Aprieta los puños y el cuerpo con fuerza cinco segundos y suelta de golpe. Repite dos veces. Después respira tranquila y toma un sorbo. Di en voz baja: “Esfuerzo y descanso van juntos, como mis dos manos.”"
  },
  {
    "day": 135,
    "title": "detecta-TE",
    "teaName": "Infusión de radar amable",
    "benefit": "Detecto lo que me agota y lo que me recarga, sin culpa.",
    "lesson": "Hay cosas que te dejan sin pilas y otras que te las cambian por nuevas: una llamada, un paseo, una reunión. Hoy haces de detective cariñosa y tomas nota, sin juzgar.",
    "exercise": "Piensa en dos cosas de hoy: una que te ha dejado sin energía y otra que te ha dado ganas. Sostenlas una en cada mano. Toma un sorbo y di en voz baja: “Aprendo qué me agota y qué me recarga.”"
  },
  {
    "day": 136,
    "title": "pausa-TE",
    "teaName": "Infusión de silencio entre notas",
    "benefit": "Hoy me regalo una pausa, como la que hay entre dos notas.",
    "lesson": "La música no son solo notas: también son silencios. Sin ellos sonaría a ruido. Tu día igual: necesita pausas para que lo que haces suene bien.",
    "exercise": "Deja lo que estés haciendo, cierra los ojos y cuenta diez respiraciones sin hacer nada más. Abre los ojos despacio. Toma un sorbo y di en voz baja: “Esta pausa es parte de mi música.”"
  },
  {
    "day": 137,
    "title": "lamenta-TE",
    "teaName": "Infusión de lunes con cojín",
    "benefit": "Dejo que Drama King se lamente un ratito y luego me muevo.",
    "lesson": "Drama King se lamenta de que el día tiene demasiadas horas y la noche, muy pocas. Le damos cinco minutos de queja con cojín y té caliente, y después le ofrecemos una pausa de verdad.",
    "exercise": "Lamenta en voz alta, con tono trágico, lo larga que es la lista de cosas de hoy. Después apoya la espalda y respira. Toma un sorbo y di en voz baja: “Me lamento un poco, descanso otro poco y sigo.”"
  },
  {
    "day": 138,
    "title": "desprograma-TE",
    "teaName": "Infusión de agenda en blanco",
    "benefit": "Desprogramo un rato del día para dejarlo respirar.",
    "lesson": "Queen Zen tiene el día programado al minuto: meditación, afirmación, estiramiento, diario de gratitud. Hoy le dejamos un hueco en blanco en la agenda y comprueba, aterrada, que sobrevive.",
    "exercise": "Mira tu agenda de hoy y tacha, con un dedo en el aire, una cosa que no hace falta. Respira aliviada y toma un sorbo. Di en voz baja: “Dejo un hueco libre y lo cuido como un tesoro.”"
  },
  {
    "day": 139,
    "title": "agacha-TE",
    "teaName": "Infusión de espalda blanda",
    "benefit": "Me inclino hacia delante y suelto lo que cargo.",
    "lesson": "Inclinarte hacia delante y dejar colgar los brazos es un pequeño cuento de abandono: te desprendes de la rigidez del día y dejas que sea la gravedad quien trabaje.",
    "exercise": "Si te va bien, con las rodillas algo flexionadas, inclínate hacia delante y deja colgar brazos y cabeza, balanceándote suave. Sube despacio. Toma un sorbo y di en voz baja: “Dejo que el día cuelgue de mis manos un momento.”"
  },
  {
    "day": 140,
    "title": "peina-TE",
    "teaName": "Infusión de cepillo y paciencia",
    "benefit": "Me peino con cariño, como quien arregla algo valioso.",
    "lesson": "Peinarte despacio es un pequeño rito de cuidado: cada pasada del cepillo dice sin palabras que mereces el tiempo. Hoy no hay espejo que juzgue, solo manos amables.",
    "exercise": "Pasa los dedos o un peine por tu pelo muy despacio, de la raíz a las puntas. Si no tienes pelo, acaricia la cabeza o la nuca. Toma un sorbo y di en voz baja: “Me arreglo con cariño y sin prisa.”"
  },
  {
    "day": 141,
    "title": "mesura-TE",
    "teaName": "Infusión de medida y gracia",
    "benefit": "Me mido las fuerzas sin dejar de brillar.",
    "lesson": "Drama King pide que te des al mundo hasta la última gota; Queen Zen, que no te des a nadie. Tú te das con medida: lo justo para no quedarte vacía ni encerrada.",
    "exercise": "Junta las manos en forma de cuenco y llénalas de energía imaginaria. Reparte la mitad en el aire y guarda la otra mitad en el pecho. Toma un sorbo y di en voz baja: “Doy con medida y me guardo lo mío.”"
  },
  {
    "day": 142,
    "title": "sondea-TE",
    "teaName": "Infusión de linterna pequeña",
    "benefit": "Pregunto a mi cuerpo qué necesita, y espero.",
    "lesson": "Sondear es bajar una linterna por un pozo para ver qué hay. Hoy la bajas hasta tu cansancio y miras si es de sueño, de prisa o de tener demasiadas pestañas abiertas en la cabeza.",
    "exercise": "Cierra los ojos y baja con la atención desde la cabeza hasta los pies, como una linterna. Fíjate dónde se queda más rato. Toma un sorbo y di en voz baja: “Hay algo aquí que pide cuidado.”"
  },
  {
    "day": 143,
    "title": "despeja-TE",
    "teaName": "Infusión de cielo recién abierto",
    "benefit": "Despejo mi cabeza como quien abre las cortinas.",
    "lesson": "Una cabeza con demasiadas cosas es como un escritorio sin sitio ni para la taza. Hoy le haces espacio: respiras, apartas lo que no toca y dejas un hueco libre en medio.",
    "exercise": "Imagina que barres con la mano un escritorio lleno, de un lado a otro, y respira a cada barrido. Cinco veces. Toma un sorbo y di en voz baja: “Dejo un hueco libre en medio de todo.”"
  },
  {
    "day": 144,
    "title": "protesta-TE",
    "teaName": "Infusión de pancarta y almohada",
    "benefit": "Puedo protestar con humor y descansar con gusto.",
    "lesson": "Drama King organiza una manifestación contra el despertador: pancarta, megáfono y cara de mártir. Escuchamos sus reivindicaciones con respeto y le ofrecemos negociar cinco minutos más de calma.",
    "exercise": "Levanta un puño sin fuerza y protesta con una sola frase graciosa, como un lema de pancarta, contra algo menor. Ríete y respira. Toma un sorbo y di en voz baja: “Protesto con humor y me cuido con ganas.”"
  },
  {
    "day": 145,
    "title": "desparrama-TE",
    "teaName": "Infusión de estrella de mar",
    "benefit": "Hoy me despatarro sin vergüenza: descansar también es mío.",
    "lesson": "Queen Zen descansa siempre en postura de loto, con la espalda recta y cara de templo. Hoy se despatarra como una estrella de mar en el sofá y descubre que también así cabe la paz.",
    "exercise": "Túmbate o recuéstate con brazos y piernas abiertos, como una estrella de mar, y respira cinco veces notando el peso. Toma un sorbo y di en voz baja: “Descanso a lo grande y sin postura.”"
  },
  {
    "day": 146,
    "title": "ordena-TE",
    "teaName": "Infusión de rincón ordenado",
    "benefit": "Ordenar un rincón pequeño ordena un poco mi cabeza.",
    "lesson": "Cuidarte también es cuidar tu entorno: un rincón en orden es un regalo discreto para la versión de ti que llegue cansada esta noche. No hace falta ordenar la casa: basta con un cajón.",
    "exercise": "Elige un objeto fuera de sitio y llévalo a su lugar con calma. Mira cómo queda el rincón y toma un sorbo. Di en voz baja: “Ordeno un poquito de fuera y se ordena un poquito de dentro.”"
  },
  {
    "day": 147,
    "title": "enciende-TE",
    "teaName": "Infusión de lámpara y manta",
    "benefit": "Enciendo una pequeña luz para sentirme acompañada.",
    "lesson": "Una luz tenue cambia el ambiente de una habitación y el de la cabeza. Hoy enciendes una lámpara pequeña y la tarde se pone en modo casa.",
    "exercise": "Enciende una lámpara pequeña o abre las cortinas para que entre la luz suave, y siéntate cerca un momento. Toma un sorbo y di en voz baja: “Esta luz pequeña es para mí.”"
  },
  {
    "day": 148,
    "title": "cuadra-TE",
    "teaName": "Infusión de puzle sin prisa",
    "benefit": "Hago que mi día me cuadre, no que yo cuadre con él.",
    "lesson": "Drama King aprieta tu agenda hasta que cruje; Queen Zen la tira por la ventana. Tú la cuadras como un puzle: piezas de trabajo, de pausa y de cariño, y alguna pieza que sobre sin que pase nada.",
    "exercise": "Con los dedos en el aire, coloca tres piezas imaginarias: una de tarea, una de descanso y una de cariño. Mira cómo encajan. Toma un sorbo y di en voz baja: “Mi día encaja cuando me incluyo en él.”"
  },
  {
    "day": 149,
    "title": "cosecha-TE",
    "teaName": "Infusión de cesta llena",
    "benefit": "Este mes he cosechado pequeños cuidados que me sientan bien.",
    "lesson": "Este mes has sembrado pausas, desperezos y buenos ratos de silencio. Mira cuánto has avanzado: la cesta no está llena de grandes logros, sino de pequeños cuidados, y esos son los que duran.",
    "exercise": "Recuerda tres cuidados pequeños que te has dado este mes y ponlos en una cesta imaginaria, uno por uno. Toma un sorbo y di en voz baja: “Mi cesta está llena de pequeños cuidados.”"
  },
  {
    "day": 150,
    "title": "festeja-TE",
    "teaName": "Infusión de confeti suave",
    "benefit": "Me merezco cuidados y piropos a partes iguales.",
    "lesson": "Final del mes de cuidado. Hoy toca celebrar que te has cuidado un poquito más y regalarte un piropo con el mismo cariño con que se lo darías a una amiga que viene de un día largo.",
    "exercise": "Elige un piropo para ti y dilo en voz alta, con una sonrisa y los hombros sueltos. Guárdalo en el Piropero de la app y toma un sorbo. Di en voz baja: “Cuidarme es mi manera de quererme.”"
  },
  {
    "day": 151,
    "title": "pon-TE",
    "teaName": "Infusión de línea en la arena",
    "benefit": "Hoy miro dónde empiezan y terminan mis límites.",
    "lesson": "Un límite es como la valla de un jardín: no sirve para encerrar a nadie, sino para saber dónde empieza tu terreno. Hoy te pones a mirar dónde está esa valla, sin moverla todavía.",
    "exercise": "Dibuja con el dedo en el aire un círculo a tu alrededor, del tamaño de tu espacio de hoy. Mira qué entra y qué se queda fuera. Toma un sorbo y di en voz baja: “Este es mi espacio y puedo cuidarlo.”"
  },
  {
    "day": 152,
    "title": "ancla-TE",
    "teaName": "Infusión de ancla tranquila",
    "benefit": "Respiro hondo y me quedo en mi sitio.",
    "lesson": "Antes de decir no, a veces algo tiembla por dentro. Respirar es el ancla: baja el peso a los pies y evita que te arrastre la corriente de lo que los demás esperan.",
    "exercise": "Planta los pies, inspira como si el aire bajara hasta las plantas y exhala despacio. Hazlo seis veces. Toma un sorbo y di en voz baja: “Respiro y me quedo en mi sitio.”"
  },
  {
    "day": 153,
    "title": "apunta-TE",
    "teaName": "Infusión de lista infinita",
    "benefit": "Puedo no apuntarme a todo y seguir siendo buena gente.",
    "lesson": "Drama King se apunta a todo: la cena, la rifa, la mudanza y el club del cactus. Luego se desploma en el sofá gimiendo que nadie le ayuda. Hoy le enseñamos a dejar casillas en blanco.",
    "exercise": "Escribe en el aire una lista de compromisos y, con un dedo, tacha uno con gesto teatral. Respira y toma un sorbo. Di en voz baja: “Dejo una casilla en blanco y el mundo sigue.”"
  },
  {
    "day": 154,
    "title": "sermonea-TE",
    "teaName": "Infusión de lección sin público",
    "benefit": "Puedo decir no sin dar una charla ni sentirme superior.",
    "lesson": "Queen Zen dice no con un discurso de veinte minutos sobre el crecimiento personal ajeno. Hoy practica la versión corta: no, gracias. Un límite bonito no necesita sermón.",
    "exercise": "Di en voz alta una negativa en tres palabras, como no, gracias o hoy no puedo. Sin explicación. Respira y toma un sorbo. Di en voz baja: “Mi no cabe en una frase corta.”"
  },
  {
    "day": 155,
    "title": "planta-TE",
    "teaName": "Infusión de pies de raíz",
    "benefit": "Me planto con calma cuando algo no me parece bien.",
    "lesson": "Plantarte no es ponerte rígida: es hundir los pies como un árbol que se mece pero no se arranca. Hoy practicas la postura de quien puede escuchar y aun así decir que no.",
    "exercise": "De pie, separa los pies al ancho de las caderas y siente el suelo debajo. Mece el cuerpo suavemente sin mover los pies. Toma un sorbo y di en voz baja: “Me mezo, pero mis pies no se mueven.”"
  },
  {
    "day": 156,
    "title": "reserva-TE",
    "teaName": "Infusión de hueco reservado",
    "benefit": "Reservo un rato solo para mí y lo defiendo con cariño.",
    "lesson": "Si no apuntas en la agenda un rato para ti, alguien lo llenará de planes. Hoy lo reservas, como se reserva una mesa en tu restaurante favorito: nombre, hora y vela en el centro.",
    "exercise": "Elige un hueco de tu día de hoy o de mañana y apúntalo con un dedo en el aire con tu nombre. Toma un sorbo y di en voz baja: “Este rato es mío y lo reservo con ganas.”"
  },
  {
    "day": 157,
    "title": "pacta-TE",
    "teaName": "Infusión de trato justo",
    "benefit": "Pactar un límite es hacer sitio a todas las partes.",
    "lesson": "Drama King quiere que digas sí a todo para que no se rompa el mundo; Queen Zen, que digas no a todo para estar a salvo. Tú pactas: un sí aquí, un no allá y un quizá bien explicado.",
    "exercise": "Con una mano di sí a algo, con la otra di no a otra cosa. Junta las manos y encuentra un quizá en medio. Toma un sorbo y di en voz baja: “Pacto conmigo y con las demás sin perderme.”"
  },
  {
    "day": 158,
    "title": "delimita-TE",
    "teaName": "Infusión de mapa de fronteras",
    "benefit": "Dibujo mis fronteras para poder cuidarlas.",
    "lesson": "Un buen mapa no tiene muros: tiene líneas claras. Hoy dibujas el tuyo: dónde te sientes cómoda, dónde ya te aprieta el zapato y dónde necesitas un cartel que diga permiso, por favor.",
    "exercise": "Piensa en una situación que te incomoda y señala con la mano hasta dónde estás bien y desde dónde ya no. Toma un sorbo y di en voz baja: “Hasta aquí estoy bien; desde aquí, necesito pedir.”"
  },
  {
    "day": 159,
    "title": "frena-TE",
    "teaName": "Infusión de pedal suave",
    "benefit": "Frenar a tiempo me ahorra disculpas de más.",
    "lesson": "Frenar no es pelearte con el coche: es llevarlo con cuidado. Antes de decir sí por inercia, pon el pie en el freno y cuenta hasta tres. Casi siempre la respuesta cambia.",
    "exercise": "Imagina que hay un pedal bajo tu pie. Púlsalo despacio mientras exhalas, como si pararas un coche con suavidad. Cinco veces. Toma un sorbo y di en voz baja: “Frenar a tiempo es una forma de cuidarme.”"
  },
  {
    "day": 160,
    "title": "esquiva-TE",
    "teaName": "Infusión de capa y escapatoria",
    "benefit": "Puedo esquivar un plan sin dar explicaciones enormes.",
    "lesson": "Drama King esquiva una invitación con una excusa que incluye un terremoto, tres abuelas y una nevada en julio. Hoy ensaya la versión sin telenovela: no puedo ir, gracias por pensar en mí.",
    "exercise": "Inventa la excusa más disparatada que se te ocurra y dila en voz alta con gesto teatral. Después di la versión corta y sincera. Toma un sorbo y di en voz baja: “Basta con decir que no puedo.”"
  },
  {
    "day": 161,
    "title": "desmiente-TE",
    "teaName": "Infusión de bondad con medida",
    "benefit": "No soy amor infinito: soy una persona con límites, y está bien.",
    "lesson": "Queen Zen proclama que ella es amor infinito, disponible las veinticuatro horas. Hoy desmentimos el rumor con cariño: nadie es una cafetería abierta toda la noche, y descansar no resta bondad.",
    "exercise": "Di en voz alta: soy amor infinito, y ríete. Luego di una frase más real: tengo un límite y me cuido. Toma un sorbo y di en voz baja: “Soy humana, no cafetería de guardia.”"
  },
  {
    "day": 162,
    "title": "cruza-TE",
    "teaName": "Infusión de brazos cruzados",
    "benefit": "Cruzar los brazos a veces es mi forma de decir hasta aquí.",
    "lesson": "Cruzar los brazos no siempre es enfado: también es una puerta cerrada con cariño. Hoy la usas con conciencia, como un letrero amable que dice abierto por la tarde.",
    "exercise": "Cruza los brazos sobre el pecho y respira tres veces notando la firmeza. Luego ábrelos despacio. Toma un sorbo y di en voz baja: “Cierro la puerta con cariño y la abro cuando quiero.”"
  },
  {
    "day": 163,
    "title": "recoge-TE",
    "teaName": "Infusión de caracol tranquilo",
    "benefit": "Me recojo un rato sin dar explicaciones.",
    "lesson": "El caracol se mete en su casa sin pedir perdón a nadie y sale cuando le apetece. Hoy tú también puedes recogerte un rato: es un límite pequeño, silencioso y perfectamente educado.",
    "exercise": "Siéntate sola en un sitio tranquilo, cierra los ojos y cuenta diez respiraciones con la cabeza baja, como un caracol. Toma un sorbo y di en voz baja: “Me recojo un rato y vuelvo cuando me apetezca.”"
  },
  {
    "day": 164,
    "title": "pondera-TE",
    "teaName": "Infusión de balanza de cocina",
    "benefit": "Pondero lo que me piden antes de contestar.",
    "lesson": "Drama King responde en cinco segundos y se arrepiente cinco días; Queen Zen responde en cinco meses y nadie sabe qué dijo. Tú ponderas: lo pones en la balanza y contestas cuando tengas un peso claro.",
    "exercise": "Coloca en una mano lo que te piden y en la otra lo que tú necesitas. Siente cuál pesa más. Toma un sorbo y di en voz baja: “Lo pondero con calma y contesto cuando lo tenga claro.”"
  },
  {
    "day": 165,
    "title": "identifica-TE",
    "teaName": "Infusión de pista a tiempo",
    "benefit": "Identifico mi incomodidad antes de que se convierta en rencor.",
    "lesson": "El resentimiento rara vez llega de golpe: avisa con pequeños picores, como un jersey que raspa. Hoy te fijas en esa sensación, la nombras y miras qué límite te pide. Si el tema duele mucho, habla con alguien de confianza.",
    "exercise": "Piensa en algo que te ha incomodado esta semana y nota dónde lo sientes en el cuerpo. Ponle nombre en voz baja. Toma un sorbo y di en voz baja: “Esto me raspa, y es una pista valiosa.”"
  },
  {
    "day": 166,
    "title": "alarga-TE",
    "teaName": "Infusión de exhalación larga",
    "benefit": "Alargo el aire antes de responder, y la respuesta mejora.",
    "lesson": "Entre lo que te piden y lo que contestas hay un espacio, y una buena exhalación lo agranda. Hoy aprovechas ese hueco para decidir si es sí, no o necesito pensarlo.",
    "exercise": "Exhala muy despacio, más largo que la inspiración, cuatro veces. En la última, piensa qué quieres contestar. Toma un sorbo y di en voz baja: “En el espacio de mi aire hay una respuesta mía.”"
  },
  {
    "day": 167,
    "title": "sacrifica-TE",
    "teaName": "Infusión de mártir de pega",
    "benefit": "Puedo ayudar sin sacrificarme hasta desaparecer.",
    "lesson": "Drama King se ofrece de mártir en todo: hace la tarta, lava la ropa de los demás y suspira por el pasillo. Hoy le enseñamos que ayudar con ganas vale más que sacrificarse con rencor.",
    "exercise": "Pon cara de mártir dramática, con suspiro y mano en la frente, diez segundos. Luego suelta la cara y sonríe. Toma un sorbo y di en voz baja: “Ayudo cuando puedo y con ganas, no por obligación.”"
  },
  {
    "day": 168,
    "title": "desengaña-TE",
    "teaName": "Infusión de espejo honesto",
    "benefit": "Me desengaño con cariño: decir no no me hace egoísta.",
    "lesson": "Queen Zen cree que decir no es de mala persona espiritual. Hoy la desengañamos: cuidar tu energía no es egoísmo, es mantenimiento. Hasta los monasterios cierran la puerta a la hora de cenar.",
    "exercise": "Di en voz alta esa creencia: decir no es de mala persona. Mírala un segundo y desmiéntela con una frase tuya, sin pedir permiso. Toma un sorbo y di en voz baja: “Cuidarme no me hace egoísta.”"
  },
  {
    "day": 169,
    "title": "retrocede-TE",
    "teaName": "Infusión de paso atrás",
    "benefit": "Dar un paso atrás también es una forma de decir hasta aquí.",
    "lesson": "No todos los límites son palabras: a veces es un paso atrás para tomar aire. Hoy lo practicas con el cuerpo, sin pedir perdón por ocupar el espacio que necesitas.",
    "exercise": "Da un paso atrás, despacio, y respira hondo. Quédate un momento con más distancia. Luego vuelve al sitio. Toma un sorbo y di en voz baja: “Doy un paso atrás para estar mejor.”"
  },
  {
    "day": 170,
    "title": "dedica-TE",
    "teaName": "Infusión de tiempo con tu nombre",
    "benefit": "Me dedico un rato con el mismo cuidado que a una cita importante.",
    "lesson": "Dedicarte tiempo es un límite que protege lo que importa. Si ya has dicho sí a todo, esta es tu cita con la persona que más vas a ver en la vida.",
    "exercise": "Fija en la palma de tu mano una cita contigo, con día y hora. Sonríe como si te hubieran invitado a cenar. Toma un sorbo y di en voz baja: “Tengo una cita importante conmigo.”"
  },
  {
    "day": 171,
    "title": "calibra-TE",
    "teaName": "Infusión de termostato amable",
    "benefit": "Calibro mis límites para que no sean ni muros ni puertas abiertas.",
    "lesson": "Drama King pone un muro de ladrillo ante todo; Queen Zen lo quita y deja una puerta abierta de par en par. Tú calibras como con un termostato: a veces más firme, a veces más flexible, siempre con tu nombre.",
    "exercise": "Mueve la mano como si giraras un termostato: sube la firmeza, bájala un poco y busca el punto que hoy te va bien. Toma un sorbo y di en voz baja: “Mi límite tiene regulador y yo tengo el mando.”"
  },
  {
    "day": 172,
    "title": "distingue-TE",
    "teaName": "Infusión de dos tazas distintas",
    "benefit": "Distingo lo que me toca de lo que no es mío.",
    "lesson": "Hay cosas que son tuyas y otras que solo te las han dejado en la mesa. Hoy las separas como se separan los calcetines: este par es mío, este lo devuelvo, este ni lo conozco.",
    "exercise": "Piensa en tres cosas que llevas encima y señala con la mano cuáles son tuyas y cuáles no. Aparta con un gesto las que no. Toma un sorbo y di en voz baja: “Lo mío me lo quedo y lo demás lo devuelvo.”"
  },
  {
    "day": 173,
    "title": "aspira-TE",
    "teaName": "Infusión de aire con ganas",
    "benefit": "Aspiro con ganas el derecho a elegir cómo uso mi tiempo.",
    "lesson": "Decir no a algo es decir sí a otra cosa: a una siesta, a una charla pendiente, a un rato de nada. Hoy aspiras hondo ese derecho y lo guardas en los pulmones como un secreto bonito.",
    "exercise": "Inspira profundo imaginando que respiras la frase tengo derecho a elegir. Exhala despacio. Hazlo cinco veces. Toma un sorbo y di en voz baja: “Tengo derecho a decidir cómo uso mi tiempo.”"
  },
  {
    "day": 174,
    "title": "regatea-TE",
    "teaName": "Infusión de mercadillo y paciencia",
    "benefit": "No tengo que rebajar mi no cada vez que alguien regatea.",
    "lesson": "Drama King negocia un no como si fuera una alfombra en un mercadillo: solo cinco minutitos, por favor. Hoy aprendes a mantener el precio sin enfadarte: no es no, aunque se pida con ojos tristes.",
    "exercise": "Imagina que alguien insiste tres veces y respóndele las tres igual, con voz tranquila y sin explicaciones nuevas. Sonríe y toma un sorbo. Di en voz baja: “Mi no se queda como está, sin descuentos.”"
  },
  {
    "day": 175,
    "title": "desacredita-TE",
    "teaName": "Infusión de pedestal de cartón",
    "benefit": "Mis límites no son sagrados ni rígidos: son humanos.",
    "lesson": "Queen Zen trata cada límite como una ley sagrada, con ceremonia y campanitas. Hoy lo desacreditamos con una sonrisa: un límite es una herramienta, y las herramientas se ajustan, se afinan y a veces se cambian.",
    "exercise": "Imagina tu límite como una herramienta que sostienes en la mano. Dale la vuelta, mírala por todos lados y déjala sobre la mesa. Toma un sorbo y di en voz baja: “Mis límites son herramientas, no dogmas.”"
  },
  {
    "day": 176,
    "title": "gesticula-TE",
    "teaName": "Infusión de manos que hablan",
    "benefit": "Puedo decir no con las manos antes de decirlo con la voz.",
    "lesson": "Si la palabra se atasca en la garganta, empieza por el cuerpo: una mano en alto, una cabeza que se mueve, una sonrisa que no cede. El gesto ensaya el límite y la voz luego lo acompaña.",
    "exercise": "Haz con la mano el gesto de no, gracias: palma suave hacia delante y sonrisa. Repítelo tres veces. Toma un sorbo y di en voz baja: “Mi cuerpo ya sabe cómo decir que no.”"
  },
  {
    "day": 177,
    "title": "recompensa-TE",
    "teaName": "Infusión de galleta merecida",
    "benefit": "Cada límite que pongo merece un premio pequeño.",
    "lesson": "Poner un límite cuesta, aunque salga bien. Hoy te recompensas como se premia a un campeón: sin discurso, con una galleta o un rato de manta.",
    "exercise": "Elige un premio pequeño y gratis, como mirar el atardecer o escuchar una canción, y regálatelo ahora. Toma un sorbo y di en voz baja: “Me lo he ganado por cuidarme.”"
  },
  {
    "day": 178,
    "title": "matiza-TE",
    "teaName": "Infusión de gris con matices",
    "benefit": "Entre un sí y un no hay muchos matices, y puedo usarlos.",
    "lesson": "Drama King solo ve blanco o negro; Queen Zen, solo luz dorada. Tú ves los grises: sí, pero más tarde; no a eso, sí a esto otro; quizá, pero con condiciones. Los matices también son límites.",
    "exercise": "Con los dedos, marca en el aire una escala del 1 al 5 de cuánto te apetece algo. Elige tu número de hoy sin culpa. Toma un sorbo y di en voz baja: “Mi respuesta tiene matices y sigue siendo válida.”"
  },
  {
    "day": 179,
    "title": "balancea-TE",
    "teaName": "Infusión de balance del mes",
    "benefit": "Este mes he aprendido a decir no con más cariño.",
    "lesson": "Este mes has frenado a tiempo, dibujado tus fronteras y ensayado nos y síes. Mira cuánto has avanzado: tus límites ya no son muros, son costuras que mantienen todo en su sitio.",
    "exercise": "Recuerda tres momentos del mes en que pusiste un límite, aunque fuera pequeño. Cuéntalos con los dedos. Toma un sorbo y di en voz baja: “He puesto límites con cariño y sigo en pie.”"
  },
  {
    "day": 180,
    "title": "aplaude-TE",
    "teaName": "Infusión de aplauso y piropo",
    "benefit": "Hoy me aplaudo por cuidarme y me regalo un piropo.",
    "lesson": "Final del mes de límites. Poner un límite sin romper nada merece un aplauso largo. Hoy te lo das, junto con un piropo bonito, de los que se dicen a alguien valiente que ha cuidado lo que importa.",
    "exercise": "Aplaude despacio tres veces con cara de gala. Elige un piropo para ti y dilo en voz alta. Guárdalo en el Piropero de la app y toma un sorbo. Di en voz baja: “Me valoro y me cuido sin miedo.”"
  },
  {
    "day": 181,
    "title": "curiosea-TE",
    "teaName": "Infusión de exploradora curiosa",
    "benefit": "Hoy me miro con ojos de exploradora, sin prisa y con risas.",
    "lesson": "Una exploradora no juzga lo que encuentra: lo mira, lo anota y se sorprende. Hoy exploras tu día como si fuera un paisaje nuevo, buscando tres detalles graciosos o curiosos.",
    "exercise": "Durante un minuto, mira a tu alrededor y busca tres detalles que te hagan sonreír (una sombra, un objeto raro, una arruga de la manta). Toma un sorbo y di en voz baja: “Hoy exploro mi día con ojos curiosos y me sorprendo.”"
  },
  {
    "day": 182,
    "title": "resopla-TE",
    "teaName": "Infusión de resoplido liberador",
    "benefit": "Un buen resoplido también es una forma de soltar.",
    "lesson": "A veces la respiración elegante no sale y lo que pide el cuerpo es un resoplido sonoro, como el de un caballo tras la carrera. Resoplar sin vergüenza también cuenta como respirar.",
    "exercise": "Inhala por la nariz y suelta el aire por la boca con un resoplido sonoro y poco elegante, tres veces. Si te da risa, mejor. Di en voz baja: “Suelto el aire y suelto la tensión.”"
  },
  {
    "day": 183,
    "title": "carcajea-TE",
    "teaName": "Infusión de palomitas y carcajadas",
    "benefit": "Si Drama King ensaya una tragedia, yo me llevo las palomitas.",
    "lesson": "Drama King anuncia que se acaba el mundo porque no encuentra las llaves. Hoy no discutes con él: te sientas a verlo actuar, con palomitas imaginarias, y te ríes de la función.",
    "exercise": "Recuerda algo que hoy te ha sacado de quicio y cuéntatelo con voz de narradora de documental dramático, exagerando. Cuando te rías, toma un sorbo y di en voz baja: “Disfruto de la función y me río del drama.”"
  },
  {
    "day": 184,
    "title": "desacraliza-TE",
    "teaName": "Infusión de calma sin incienso",
    "benefit": "Puedo cuidar mi paz sin tomármela como una religión.",
    "lesson": "Queen Zen convierte cada respiración en una ceremonia y cada silencio en una sentencia. Hoy le recuerdas que la paz también puede ser casera: sin incienso, sin gong y sin mirar por encima del hombro.",
    "exercise": "Haz algo cotidiano que te calme (lavar una taza, regar una planta) con la atención de una maestra zen, pero sin ceremonia ni cara de trascendencia. Di en voz baja: “Mi paz no necesita ceremonia para ser real.”"
  },
  {
    "day": 185,
    "title": "brinca-TE",
    "teaName": "Infusión de saltitos",
    "benefit": "Un saltito de alegría me cambia el día.",
    "lesson": "Cuando algo les hace ilusión, las criaturas pequeñas saltan sin pensarlo. Hoy recuperas esa costumbre: un salto pequeño, sin público y sin ningún motivo serio.",
    "exercise": "Da tres saltitos suaves en el sitio, con los brazos sueltos y una sonrisa (o, si prefieres, mueve los hombros al ritmo de un salto imaginario). Toma un sorbo y di en voz baja: “Me permito la alegría pequeña y sin motivo.”"
  },
  {
    "day": 186,
    "title": "homenajea-TE",
    "teaName": "Infusión de homenaje pequeño",
    "benefit": "Hoy me hago un homenaje, aunque sea pequeño.",
    "lesson": "Los homenajes se hacen a quien los merece, y tú los mereces. Con un aplauso de tres segundos, una canción o una nota amable ya tienes un homenaje completo.",
    "exercise": "Pon una canción que te guste y dedícatela mentalmente, como en la radio. Al terminar, aplaude tres veces suavemente y di en voz baja: “Me hago un homenaje porque lo merezco.”"
  },
  {
    "day": 187,
    "title": "nivela-TE",
    "teaName": "Infusión de burbuja en el centro",
    "benefit": "Entre el drama y la pose, siempre encuentro un punto medio con humor.",
    "lesson": "Drama King dice que todo va mal y Queen Zen que todo va perfecto. Hoy usas un nivel de burbuja imaginario: cuando la burbuja queda en el centro, tu día ni es una tragedia ni un milagro; es un día normal, que ya es mucho.",
    "exercise": "Extiende un brazo con la palma hacia arriba, como si llevaras un nivel de burbuja, y respira hasta sentirlo estable. Toma un sorbo y di en voz baja: “Ni tragedia ni milagro: un día normal, y me basta.”"
  },
  {
    "day": 188,
    "title": "espia-TE",
    "teaName": "Infusión de detective cariñosa",
    "benefit": "Hoy me espío con cariño y me río de mis manías.",
    "lesson": "Todas tenemos manías: la taza favorita, el rincón de siempre, el suspiro antes de abrir el correo. Hoy las observas como quien espía con ternura a una vecina simpática: sin criticar, solo tomando nota.",
    "exercise": "Durante el día, descubre una de tus manías y ponle un nombre divertido (“el suspiro del lunes”). Cuando la veas, sonríe y di en voz baja: “Me conozco y me quiero, manías incluidas.”"
  },
  {
    "day": 189,
    "title": "tararea-TE",
    "teaName": "Infusión de zumbido de abeja",
    "benefit": "Si tarareo al exhalar, mi respiración se vuelve música.",
    "lesson": "Exhalar con un zumbido suave, como una abeja contenta, alarga el aire sin esfuerzo y hace cosquillas en el pecho. Es respirar y jugar a la vez.",
    "exercise": "Inhala por la nariz y, al exhalar, tararea una nota suave, tres veces, notando la vibración en el pecho y la garganta. Toma un sorbo y di en voz baja: “Mi respiración tiene música y me acompaña.”"
  },
  {
    "day": 190,
    "title": "burla-TE",
    "teaName": "Infusión de telediario exagerado",
    "benefit": "Puedo reírme de mis dramas sin quitarle importancia a mis sentimientos.",
    "lesson": "Reírse de Drama King no es burlarse de lo que sientes: es quitarle el vestuario al personaje para ver qué hay debajo, que suele ser un miedo pequeño que solo quiere un abrazo.",
    "exercise": "Cuenta tu preocupación del día con voz de presentadora de telediario, con tono muy serio y titulares exagerados. Al terminar, respira hondo, toma un sorbo y di en voz baja: “Me río del personaje y cuido del miedo que hay debajo.”"
  },
  {
    "day": 191,
    "title": "ablanda-TE",
    "teaName": "Infusión de plastilina tibia",
    "benefit": "Ablandarme no me quita paz: me da ternura.",
    "lesson": "Queen Zen se mantiene tan estirada que parece de porcelana. Hoy la invitas a ablandarse un poco: aceptar un día torpe, reírse de un tropiezo y dejar que alguien le diga que se ha despeinado.",
    "exercise": "Relaja la mandíbula, la frente y las manos, como si fueran de plastilina tibia. Toma un sorbo y di en voz baja: “Me ablando por dentro y la paz sigue conmigo.”"
  },
  {
    "day": 192,
    "title": "zarandea-TE",
    "teaName": "Infusión de árbol con viento",
    "benefit": "Un buen meneo me sacude las telarañas de la cabeza.",
    "lesson": "Un árbol en un día de viento se zarandea entero y no se rompe: se suelta y vuelve a asentarse. Tú también puedes soltar las preocupaciones pegadas, empezando por las manos.",
    "exercise": "Zarandea suavemente las manos, luego los brazos, los hombros y, si quieres, todo el cuerpo durante unos quince segundos. Después quédate quieta, toma un sorbo y di en voz baja: “Me sacudo lo que sobra y me asiento.”"
  },
  {
    "day": 193,
    "title": "regocija-TE",
    "teaName": "Infusión de alegría sin explicaciones",
    "benefit": "Alegrarme por lo pequeño también es un acto de cariño.",
    "lesson": "Regocijarse es la palabra elegante para disfrutar sin culpa. Hoy te das permiso para alegrarte de algo pequeño y para no justificarlo ante nadie.",
    "exercise": "Piensa en algo pequeño que hoy te alegre (un olor, un rayo de sol, un mensaje) y deja que te dibuje una sonrisa. Toma un sorbo y di en voz baja: “Me regocijo en lo pequeño y no necesito dar explicaciones.”"
  },
  {
    "day": 194,
    "title": "afina-TE",
    "teaName": "Infusión de afinación suave",
    "benefit": "Puedo afinarme como un instrumento: sin exigencias y a mi ritmo.",
    "lesson": "Drama King toca siempre en tono menor y Queen Zen desafina de tanta solemnidad. Tú eres la afinadora: ajustas una cuerda, escuchas y sonríes cuando suena un poco mejor.",
    "exercise": "Imagina que eres un instrumento y busca qué cuerda está floja o tensa hoy: ¿hombros, ceño, voz? Afloja o tensa un poco y respira. Toma un sorbo y di en voz baja: “Me afino con paciencia y me quedo en mi tono.”"
  },
  {
    "day": 195,
    "title": "escudriña-TE",
    "teaName": "Infusión de lupa amable",
    "benefit": "Si me miro con lupa y buen humor, encuentro más ternura que defectos.",
    "lesson": "Una lupa sirve para ver lo pequeño: la arruga de reír, la manía simpática, el gesto que haces sin darte cuenta. Hoy usas tu lupa para encontrar lo entrañable, no lo que falla.",
    "exercise": "Mira tus manos con atención durante un minuto, como si nunca las hubieras visto, buscando tres detalles que te caigan bien. Toma un sorbo y di en voz baja: “Me miro con lupa amable y encuentro cosas que me caen bien de mí.”"
  },
  {
    "day": 196,
    "title": "silba-TE",
    "teaName": "Infusión de sopa que se enfría",
    "benefit": "Soplar bajito por los labios me recuerda que no hay prisa.",
    "lesson": "Silbar o soplar con los labios fruncidos alarga la exhalación casi sin querer, como cuando soplas una sopa caliente para que se enfríe.",
    "exercise": "Inhala por la nariz y exhala despacio por los labios fruncidos, como si soplaras una sopa muy caliente o silbaras bajito, cinco veces. Di en voz baja: “Soplo despacio y todo se enfría un poquito.”"
  },
  {
    "day": 197,
    "title": "ironiza-TE",
    "teaName": "Infusión de ironía con pañuelo de seda",
    "benefit": "Puedo usar la ironía para quitarle peso a mis dramas, sin dañar a nadie.",
    "lesson": "Un poco de ironía suave es como un pañuelo de seda sobre el drama: lo aligera sin tapar lo que sientes. Hoy practicas contigo, con ternura, y nunca con dureza.",
    "exercise": "Ante una contrariedad de hoy, exclama en voz alta y con tono teatral: “¡Otra tragedia griega!”. Sonríe, toma un sorbo y di en voz baja: “Gracias, drama, ya puedes sentarte.”"
  },
  {
    "day": 198,
    "title": "desempolva-TE",
    "teaName": "Infusión de baúl desempolvado",
    "benefit": "Puedo sacudir el polvo a mis ideas de perfección.",
    "lesson": "Queen Zen guarda en un baúl sus ideas de cómo debería ser una persona serena: siempre tranquila, siempre sabia, siempre amable. Hoy abres el baúl, estornudas con el polvo y te ríes de lo pasadas de moda que están.",
    "exercise": "Imagina que abres un baúl con tus ideas de cómo deberías ser. Sacúdelas con las manos, estornuda si te sale y deja las que ya no te sirven. Toma un sorbo y di en voz baja: “Dejo mis ideas de perfección en el desván.”"
  },
  {
    "day": 199,
    "title": "ondula-TE",
    "teaName": "Infusión de alga que ondea",
    "benefit": "Mover el cuerpo en ondas me recuerda que también fluyo.",
    "lesson": "El agua no tiene prisa ni postura fija: se adapta, ondula, vuelve. Mueve los brazos o el torso como un alga y deja que tu cuerpo recuerde esa soltura.",
    "exercise": "De pie o sentada, mueve los brazos y el torso en ondas lentas, como un alga en el agua, durante un minuto. Toma un sorbo y di en voz baja: “Fluyo a mi ritmo y me adapto sin prisa.”"
  },
  {
    "day": 200,
    "title": "alegra-TE",
    "teaName": "Infusión de capricho colorido",
    "benefit": "Puedo alegrarme el día con un detalle que solo entiendo yo.",
    "lesson": "Hay gestos un poco tontos que solo entiendes tú: unos calcetines de colores, una pegatina en la libreta, la canción cursi que te encanta. Hoy los usas a propósito, porque alegrarte también es cuidarte.",
    "exercise": "Haz algo pequeño y un poco tonto para alegrarte (ponerte algo de color, escuchar una canción cursi, dibujar una cara en un papel). Toma un sorbo y di en voz baja: “Me alegro el día con mis cosas, y eso está bien.”"
  },
  {
    "day": 201,
    "title": "alinea-TE",
    "teaName": "Infusión de cabeza, corazón y pies",
    "benefit": "Cuando alineo cabeza, corazón y cuerpo, camino más ligera.",
    "lesson": "Drama King quiere que todo el mundo vaya hacia el desastre y Queen Zen hacia las nubes. Tú compruebas la fila: cabeza, corazón y pies mirando al mismo sitio, aunque sea hacia el sofá.",
    "exercise": "Coloca una mano en la cabeza, otra en el corazón y siente los pies en el suelo. Pregúntales a los tres qué necesitan y respira. Toma un sorbo y di en voz baja: “Me alineo con cariño y camino a mi ritmo.”"
  },
  {
    "day": 202,
    "title": "fisgonea-TE",
    "teaName": "Infusión de vecina curiosa",
    "benefit": "Hoy fisgoneo en mis pensamientos solo para reírme un poco.",
    "lesson": "Imagina que tu cabeza es una casa con la puerta entornada y tú una vecina cotilla pero buena: te asomas, ves quién habla más fuerte y sonríes, sin entrar a arreglar nada.",
    "exercise": "Durante un minuto, fisgonea lo que pasa en tu cabeza como si fuera una ventana de vecindario: ¿quién habla, quién se queja, quién canta? Sonríe, toma un sorbo y di en voz baja: “Me asomo a mi mente con curiosidad y sin juicio.”"
  },
  {
    "day": 203,
    "title": "carraspea-TE",
    "teaName": "Infusión de garganta aclarada",
    "benefit": "A veces solo necesito aclararme la garganta para decir lo que pienso.",
    "lesson": "Carraspear es avisar de que vas a hablar. Antes de decir algo importante (a otra persona o a ti misma), una respiración y un pequeño carraspeo te ponen en tu sitio.",
    "exercise": "Inhala hondo y, al exhalar, carraspea suavemente, como quien se prepara para hablar. Repite dos veces y toma un sorbo. Di en voz baja: “Me aclaro la voz y digo lo mío con calma.”"
  },
  {
    "day": 204,
    "title": "guasea-TE",
    "teaName": "Infusión de voz de pato",
    "benefit": "Con guasa y cariño, mi drama se hace pequeñito.",
    "lesson": "Drama King adora el micrófono, pero se desinfla con una buena guasa. Hoy le pones voz de dibujos animados y te sorprende lo poco que asusta una tragedia con voz de pato.",
    "exercise": "Repite tu preocupación del día con voz de dibujos animados o de pato. Respira, ríete si te sale y toma un sorbo. Di en voz baja: “Mi drama ya no manda: ahora tiene voz de pato.”"
  },
  {
    "day": 205,
    "title": "desmonta-TE",
    "teaName": "Infusión de escalera hacia abajo",
    "benefit": "Puedo bajar de mi pedestal y sentarme a la mesa con todas.",
    "lesson": "Queen Zen está subida a un pedestal altísimo y se queja de que le duele el cuello de mirar desde allí. Hoy la ayudas a bajar por la escalera, quitarse la corona y compartir un té con quien pasaba por allí.",
    "exercise": "Imagina que bajas escalón a escalón de un pedestal. En cada escalón, suelta una pose (la sabia, la perfecta, la que lo lleva todo bien). Al llegar abajo, toma un sorbo y di en voz baja: “Bajo del pedestal y me siento con las demás.”"
  },
  {
    "day": 206,
    "title": "retoza-TE",
    "teaName": "Infusión de juego sin objetivo",
    "benefit": "Retozar un rato también es una forma de cuidarme.",
    "lesson": "Los cachorros retozan sin objetivo ni productividad. Hoy te regalas un par de minutos de juego puro: un baile tonto, una carrera hasta la cocina, una pelea de almohadas con el aire.",
    "exercise": "Juega durante un minuto: baila como te apetezca, inventa un paso o persigue una canción con los pies. Al terminar, respira hondo, toma un sorbo y di en voz baja: “Juego sin objetivo, solo porque me hace bien.”"
  },
  {
    "day": 207,
    "title": "enternece-TE",
    "teaName": "Infusión de ternura torpe",
    "benefit": "Puedo mirar mis torpezas con ternura.",
    "lesson": "Todas tenemos un lado torpe: tropezar con nuestros propios pies, olvidar a qué íbamos, derramar el té. Hoy lo miras como se mira a un bebé que se enreda con sus propias manos.",
    "exercise": "Recuerda un tropiezo reciente y míralo con ternura, sonriendo con la mano en la mejilla. Toma un sorbo y di en voz baja: “Mi torpeza también merece cariño.”"
  },
  {
    "day": 208,
    "title": "concierta-TE",
    "teaName": "Infusión de cena de gala",
    "benefit": "Puedo concertar una cita entre mi drama y mi calma, y que se lleven bien.",
    "lesson": "Hoy organizas una cena de gala entre Drama King y Queen Zen: tú pones el menú, la música y las normas. Nada de gritos, nada de sermones, solo té y un poco de risa.",
    "exercise": "Imagina que reúnes a Drama King y a Queen Zen en una mesa y les propones un trato: él baja el volumen, ella baja el pedestal. Toma un sorbo y di en voz baja: “Concertamos un trato: risa, calma y mucho té.”"
  },
  {
    "day": 209,
    "title": "rememora-TE",
    "teaName": "Infusión de risas recordadas",
    "benefit": "Recordar mis risas del mes me devuelve la ligereza.",
    "lesson": "Este mes has practicado el humor, el juego y la perspectiva. Haz memoria: ¿cuál fue tu risa más espontánea? ¿Qué drama redujiste a su tamaño? ¿Qué juego se te ocurrió?",
    "exercise": "Recuerda tres momentos de este mes en los que te has reído o has jugado, aunque fueran pequeños. Toma un sorbo y di en voz baja: “He aprendido a reírme conmigo y a jugar con mi día.”"
  },
  {
    "day": 210,
    "title": "ovaciona-TE",
    "teaName": "Infusión de ovación y risas",
    "benefit": "Me merezco una ovación por tomarme la vida con humor y cariño.",
    "lesson": "Has cerrado el mes del humor: ¡enhorabuena! Hoy te pones de pie y te das la ovación que se da a quien lo ha hecho bien, y además te regalas un piropo risueño.",
    "exercise": "Ponte de pie y aplaude con ganas, como en un teatro, durante diez segundos. Después dite un piropo divertido y guárdalo en el Piropero. Toma un sorbo y di en voz baja: “Me ovaciono con cariño y celebro mi risa.”"
  },
  {
    "day": 211,
    "title": "agradece-TE",
    "teaName": "Infusión de gracias a primera vista",
    "benefit": "Hoy me miro y encuentro algo que agradecerme.",
    "lesson": "Mirarte con gratitud es como encender la lámpara de una habitación que ya conocías: no cambia nada de sitio, pero de pronto ves lo que estaba bien puesto.",
    "exercise": "Mírate un instante en un espejo, en la pantalla apagada del móvil o en el reflejo de la ventana. Busca un detalle que agradecerte y di en voz baja: “Me doy las gracias por seguir aquí y por intentarlo cada día.”"
  },
  {
    "day": 212,
    "title": "llena-TE",
    "teaName": "Infusión de aire agradecido",
    "benefit": "Cada respiración es un regalo que ya viene incluido.",
    "lesson": "El aire llega sin factura ni lista de espera. Cada vez que tomas aire, tu cuerpo hace una entrega a domicilio. Hoy le firmas el recibo con una sonrisa.",
    "exercise": "De pie, con las manos en las costillas, llena el pecho despacio y nota cómo se abre como un abanico. Suelta el aire y di en voz baja: “Gracias, cuerpo, por trabajar sin que te lo pida.”"
  },
  {
    "day": 213,
    "title": "chancea-TE",
    "teaName": "Infusión de gracias con guasa",
    "benefit": "Puedo dar las gracias sin ponerme solemne.",
    "lesson": "Drama King da las gracias como quien lee un testamento, con música de órgano de fondo. Hoy cambiamos el órgano por un kazoo: gratitud sí, pero con la corbata aflojada.",
    "exercise": "Da las gracias en voz alta a un objeto cotidiano, como si recogieras un Óscar: el cojín, la tetera, tus zapatillas. Haz una reverencia exagerada y di en voz baja: “Gracias a mis zapatillas, y un poquito a mí por ponérmelas.”"
  },
  {
    "day": 214,
    "title": "desendiosa-TE",
    "teaName": "Infusión de humildad con pétalos",
    "benefit": "Agradecer no me hace menos: me pone a la altura de todas.",
    "lesson": "Queen Zen da las gracias como quien reparte bendiciones desde un balcón. Hoy bajamos al portal: agradecer de verdad es mirar a los ojos, no desde arriba.",
    "exercise": "Piensa en alguien cercana y envíale un gracias en un mensaje corto, sin florituras ni frases de pergamino. Antes de enviarlo, di en voz baja: “Me siento a la mesa de todas y doy las gracias.”"
  },
  {
    "day": 215,
    "title": "menea-TE",
    "teaName": "Infusión de gratitud en movimiento",
    "benefit": "Mi cuerpo merece un gracias con movimiento.",
    "lesson": "Tus pies te han llevado a todos los sitios de tu vida y nunca les has dado ni una palmadita. Hoy se la damos, en forma de pequeño meneo de caderas.",
    "exercise": "Pon una canción corta y menea solo hombros y caderas, como si el cuerpo dijera gracias a su manera. Al acabar, date una palmadita en el muslo y di en voz baja: “Gracias, piernas, por todos los pasos que me habéis traído.”"
  },
  {
    "day": 216,
    "title": "abriga-TE",
    "teaName": "Infusión de manta y gracias",
    "benefit": "Me abrigo con las cosas buenas que ya tengo.",
    "lesson": "Hay cosas buenas en tu vida que llevas puestas sin darte cuenta, como un jersey cómodo. Hoy te lo miras entero y piensas: qué bien me queda.",
    "exercise": "Ponte una prenda calentita o una manta sobre los hombros y repasa tres cosas buenas de esta semana, una por cada dedo. Respira hondo y di en voz baja: “Me abrigo con lo bueno que ya es mío.”"
  },
  {
    "day": 217,
    "title": "hermana-TE",
    "teaName": "Infusión de gracias a dos voces",
    "benefit": "Puedo agradecer con el corazón y con una pizca de humor.",
    "lesson": "Drama King dice: “¡Nadie me agradece nada!”. Queen Zen dice: “Yo agradezco desde un plano superior”. Tú juntas las dos sillas y eliges un gracias de tamaño normal.",
    "exercise": "Extiende las dos manos: en una pon el gracias exagerado y en la otra el gracias desde las nubes. Júntalas despacio hasta que se toquen y di en voz baja: “Mi gracias cabe entre los dos, y ahí me siento cómoda.”"
  },
  {
    "day": 218,
    "title": "enfoca-TE",
    "teaName": "Infusión de lupa bondadosa",
    "benefit": "Hoy enfoco lo que sale bien, aunque sea pequeño.",
    "lesson": "Tu atención es como la cámara del móvil: enfoca lo que toca. Si siempre apuntas al borrón del fondo, la foto parece un desastre, aunque en el centro haya algo precioso.",
    "exercise": "Mira a tu alrededor y busca algo que funcione bien sin hacer ruido: la luz, una silla, el grifo. Señálalo con el dedo, entorna los ojos como una fotógrafa y di en voz baja: “Esto también está saliendo bien.”"
  },
  {
    "day": 219,
    "title": "expande-TE",
    "teaName": "Infusión de espacio y gracias",
    "benefit": "Con cada respiración me hago un poco de sitio.",
    "lesson": "Dar las gracias abre ventanas por dentro. Respiras y parece que el techo de la cabeza sube un par de centímetros, lo justo para que entre luz.",
    "exercise": "Sentada, abre los brazos como si quisieras abrazar una columna enorme y llena el pecho de aire. Aguanta un segundo y deja caer las manos hacia los muslos mientras dices en voz baja: “Gracias por el espacio que me hago.”"
  },
  {
    "day": 220,
    "title": "cosquillea-TE",
    "teaName": "Infusión de risa y gratitud",
    "benefit": "Me río de mi drama y le doy las gracias por avisar.",
    "lesson": "Drama King es el vigilante del barrio: ve peligro hasta en una nube. Hoy le damos las gracias por su celo y le regalamos un chaleco de “estoy de vacaciones”.",
    "exercise": "Cuéntale a tu drama, en voz alta, una preocupación de hoy con voz de locutora de telediario. Al terminar, aplaude suavemente y di en voz baja: “Gracias por el aviso, Drama King. Yo me encargo desde aquí.”"
  },
  {
    "day": 221,
    "title": "rebaja-TE",
    "teaName": "Infusión de gratitud sin pedestal",
    "benefit": "Doy las gracias sin esperar aplausos por mi sabiduría.",
    "lesson": "Queen Zen agradece y luego espera que alguien lo apunte en su currículum espiritual. Hoy rebajamos el nivel: una gratitud sin cámaras vale más que mil con filtro.",
    "exercise": "Haz algo pequeño por alguien sin contarlo: recoge algo, deja una nota, sujeta una puerta. Sonríe por dentro y di en voz baja: “Gracias sin foto, sin aplauso y sin público.”"
  },
  {
    "day": 222,
    "title": "trota-TE",
    "teaName": "Infusión de pasitos contentos",
    "benefit": "Cada paso que doy también merece un gracias.",
    "lesson": "No hace falta correr una maratón: un trotecito de dos pasos cuenta. El cuerpo agradece que lo saques del sillón, aunque sea para ir a la cocina.",
    "exercise": "Trota en el sitio durante diez segundos, subiendo bien las rodillas, y luego sacude las manos como si se te hubieran dormido. Recupera el aliento y di en voz baja: “Gracias por moverme, aunque fuera poquito.”"
  },
  {
    "day": 223,
    "title": "malcria-TE",
    "teaName": "Infusión de capricho merecido",
    "benefit": "Hoy me regalo un detallito solo porque sí.",
    "lesson": "Malcriarte un poco no es de egoísta: es como regar la planta que siempre cuidas para los demás. Hoy la planta eres tú y toca agua fresca.",
    "exercise": "Elige un gustito pequeño: una galleta, una canción o cinco minutos de sofá sin hacer nada. Disfrútalo con calma y di en voz baja: “Me lo regalo y me lo agradezco, sin explicaciones.”"
  },
  {
    "day": 224,
    "title": "reconcilia-TE",
    "teaName": "Infusión de paz entre mis dos voces",
    "benefit": "Entre quejarme de todo y brillar por todo, elijo agradecer.",
    "lesson": "Drama King agradece llorando y Queen Zen agradece levitando. Tú agradeces sentada, con los pies en la alfombra y una galleta en la mano. Ese es tu punto medio.",
    "exercise": "Pon una mano en el pecho y otra en la tripa, y reparte el peso entre las dos, como una balanza. Respira tres veces y di en voz baja: “Ni tragedia ni nube: hoy agradezco a ras de suelo.”"
  },
  {
    "day": 225,
    "title": "avista-TE",
    "teaName": "Infusión de pequeños tesoros",
    "benefit": "Hoy descubro algo bueno de mí que se me había pasado.",
    "lesson": "Mirarte es como pasear por la playa con la vista baja: entre las piedras siempre asoma alguna concha. Hoy no buscas un tesoro: buscas una conchita tuya.",
    "exercise": "Piensa en algo que hiciste esta semana y que ni recordabas. Dibuja una estrellita con el dedo sobre la mesa y di en voz baja: “Esto también lo hice yo, y lo hice bien.”"
  },
  {
    "day": 226,
    "title": "hincha-TE",
    "teaName": "Infusión de globo contento",
    "benefit": "Respiro hondo y me lleno de gracias por dentro.",
    "lesson": "Imagina que tu tripa es un globo de cumpleaños. No se hincha a la fuerza: se llena de aire amable y sube. Luego se deshincha suave, sin ningún pum.",
    "exercise": "Pon las manos sobre la tripa y llénala de aire por la nariz, como quien infla un globo. Suelta por la boca, despacio, y di en voz baja: “Gracias, respiración, por no fallarme nunca.”"
  },
  {
    "day": 227,
    "title": "juguetea-TE",
    "teaName": "Infusión de gratitud juguetona",
    "benefit": "Agradecer también puede ser un juego, y me gusta.",
    "lesson": "Drama King jura que agradecer es cosa seria, de traje y corbata. Pero los mejores gracias se dicen con cara de cumpleaños. Juega un poco, que no se rompe.",
    "exercise": "Haz una lista de tres gracias absurdos: al café, al semáforo en verde, al botón de repetir. Léela con voz de presentadora de gala y di en voz baja: “Gracias a todo lo pequeño que me hace la vida fácil.”"
  },
  {
    "day": 228,
    "title": "desviste-TE",
    "teaName": "Infusión de gratitud sin túnica",
    "benefit": "Me quito la túnica de sabia y doy las gracias en pijama.",
    "lesson": "Queen Zen se ha puesto su túnica de iluminada hasta para ir a por pan. Hoy la dejamos en la silla: se puede estar agradecida en zapatillas, sin sonar a libro.",
    "exercise": "Cambia una prenda “seria” por otra cómoda, o quítate los zapatos un minuto. Nota el suelo bajo los pies y di en voz baja: “Doy las gracias tal como soy, en zapatillas.”"
  },
  {
    "day": 229,
    "title": "zapatea-TE",
    "teaName": "Infusión de gratitud con compás",
    "benefit": "Mi cuerpo marca el ritmo del gracias.",
    "lesson": "El agradecimiento también se puede bailar a ritmo de flamenco casero. Tus pies saben mucho de gracias: han aguantado tanto que merecen un taconazo de reconocimiento.",
    "exercise": "Zapatea cuatro veces despacio y cuatro más rápido, como si fueran palmas con los pies. Termina con un taconazo y di en voz baja: “Olé por mí, por mis pies y por todo lo que me llevan.”"
  },
  {
    "day": 230,
    "title": "apapacha-TE",
    "teaName": "Infusión de mimo bien recibido",
    "benefit": "Me dejo querer y lo agradezco sin prisa.",
    "lesson": "A veces cuesta recibir un mimo sin pensar en cómo devolverlo. Hoy practicas lo contrario: te lo dan, lo aceptas y dices gracias. Sin cuentas y sin deudas.",
    "exercise": "Date un masajito suave en las manos, con la crema que tengas o sin ella, deteniéndote en cada dedo. Sonríe y di en voz baja: “Gracias, manos, por todo lo que hacéis sin descanso.”"
  },
  {
    "day": 231,
    "title": "media-TE",
    "teaName": "Infusión de punto medio y sonrisa",
    "benefit": "No hace falta ser la mejor ni la peor para merecer gracias.",
    "lesson": "Drama King dice que no hiciste nada bien. Queen Zen dice que lo hiciste todo perfecto. Tú, que tienes sentido común, piensas: hice lo que pude y salió bastante bien.",
    "exercise": "Piensa en algo que hiciste hoy. Con la mano, dibuja una línea en el aire: arriba la perfección, abajo el desastre. Párala en el medio y di en voz baja: “Hice lo que pude, y eso ya es bastante.”"
  },
  {
    "day": 232,
    "title": "rastrea-TE",
    "teaName": "Infusión de huellas de bondad",
    "benefit": "Sigo las huellas de lo bueno que ya he hecho.",
    "lesson": "Si miras atrás como una detective amable, verás huellas: la vez que ayudaste, la que aguantaste, la que te levantaste otra vez. Hoy sigues ese rastro con curiosidad.",
    "exercise": "Recorre con la mirada la última semana y escoge un momento en que te portaste bien contigo. Marca un punto en el aire con el dedo y di en voz baja: “Aquí hubo una buena decisión, y fue mía.”"
  },
  {
    "day": 233,
    "title": "dilata-TE",
    "teaName": "Infusión de pulmones agradecidos",
    "benefit": "Cuando agradezco, mi respiración se hace más amplia.",
    "lesson": "Cuando agradeces, el cuerpo se acomoda como en un sofá nuevo. Hoy las costillas son las cortinas: se abren con el aire y se cierran sin prisa.",
    "exercise": "Pon las manos en la parte baja de la espalda y respira hacia ellas, notando cómo se abre un poquito. Cuenta cuatro al entrar y cuatro al salir; después di en voz baja: “Gracias por el aire que me cabe.”"
  },
  {
    "day": 234,
    "title": "desternilla-TE",
    "teaName": "Infusión de risa agradecida",
    "benefit": "Me río de mí con cariño y me lo agradezco.",
    "lesson": "Drama King se prepara un discurso de agradecimiento de veinte minutos con pausa para llorar. Y tú, que sabes reírte, lo escuchas con palomitas. Reírte de ti con cariño también es gratitud.",
    "exercise": "Imagina que te dan un premio por algo muy tonto, como encontrar las llaves en el bolsillo. Sube al escenario con tu mejor cara y di en voz baja: “Quiero agradecer a mi despiste: sin él no habría anécdota.”"
  },
  {
    "day": 235,
    "title": "descorona-TE",
    "teaName": "Infusión de gracias sin corona",
    "benefit": "Doy las gracias sin necesidad de parecer la más zen.",
    "lesson": "Queen Zen tiene una corona de flores que se le cae si respira rápido. Hoy se la guardamos en el cajón: no hace falta parecer serena para estar agradecida.",
    "exercise": "Haz como que te quitas una corona de la cabeza y la dejas sobre la mesa. Respira como respires, sin cuidar la postura, y di en voz baja: “Estoy agradecida y a veces despeinada. Las dos cosas valen.”"
  },
  {
    "day": 236,
    "title": "pedalea-TE",
    "teaName": "Infusión de gracias sobre ruedas",
    "benefit": "Cada pequeño impulso que me doy merece un gracias.",
    "lesson": "Pedalear no es llegar lejos: es poner un pie detrás del otro y confiar en que la rueda gira. Hoy tu gratitud hace de rueda: gira un poco y ya te lleva.",
    "exercise": "Túmbate o siéntate y pedalea en el aire con las piernas unos segundos, como si fueras en bici. Cuando pares, deja caer los brazos y di en voz baja: “Gracias por cada impulso que me di.”"
  },
  {
    "day": 237,
    "title": "halaga-TE",
    "teaName": "Infusión de cumplido casero",
    "benefit": "Me hago un cumplido sincero y lo recibo con gusto.",
    "lesson": "Si le dices algo bonito a una amiga, no te lo discute. A ti sí te lo discutes. Hoy te lo dices con la misma voz que usarías con ella.",
    "exercise": "Toma un sorbo despacio, piensa en algo bonito que le dirías a una amiga y mírate en el reflejo de la taza. Di en voz baja: “Me alegra ser yo, y lo digo en serio.”"
  },
  {
    "day": 238,
    "title": "empareja-TE",
    "teaName": "Infusión de gracias y humor",
    "benefit": "Puedo ser buena persona y reírme de mis defectos.",
    "lesson": "Drama King y Queen Zen se sientan a merendar. Uno agradece llorando y la otra suspirando, y tú les sirves té. Al final, la sobremesa es tuya y decides cuánta gratitud cabe.",
    "exercise": "Sirve dos tazas, o imagina que lo haces: una para tu drama y otra para tu calma. Bebe un sorbo de cada una y di en voz baja: “Gracias a las dos, ahora me quedo yo con el mando.”"
  },
  {
    "day": 239,
    "title": "revisa-TE",
    "teaName": "Infusión de álbum de gracias",
    "benefit": "Este mes he aprendido a darme las gracias.",
    "lesson": "Hoy hojeamos el mes como un álbum de fotos: la primera sonrisa, el gracias torpe, el día que te saliste con la tuya. Mira cuánto has avanzado, aunque no se note desde dentro.",
    "exercise": "Repasa el mes con los dedos, uno por cada semana, y elige un gracias que hayas dicho o te hayas dicho. Haz con la mano el gesto de pasar página y di en voz baja: “Mira cuánto he avanzado, y qué bien me ha sentado agradecer.”"
  },
  {
    "day": 240,
    "title": "aclama-TE",
    "teaName": "Infusión de aplauso y piropo",
    "benefit": "Me felicito por el mes y me regalo un piropo.",
    "lesson": "Hoy cerramos el mes con confeti de papel de cocina. Has aprendido a decir gracias hacia fuera y hacia dentro. Eso se celebra, y también se apunta: tu piropo de hoy va al Piropero.",
    "exercise": "Levántate, aplaude tres veces y haz una reverencia bien grande. Piensa en un piropo para ti y guárdalo en tu Piropero de la app. Después di en voz baja: “Eres amable, valiente y bastante graciosa. Gracias por existir.”"
  },
  {
    "day": 241,
    "title": "perdona-TE",
    "teaName": "Infusión de página en blanco",
    "benefit": "Me miro con ojos de amiga y me concedo otra oportunidad.",
    "lesson": "Perdonarte no es decir que nada importó. Es dejar de leerte la sentencia cada mañana. Hoy cambias al juez por una amiga que te mira, te entiende y te acompaña.",
    "exercise": "Siéntate cómoda, apoya la mano en el pecho y piensa en algo que aún te pesa. Míralo como si fuera de una amiga querida. Toma un sorbo y di en voz baja: “Hice lo que pude con lo que sabía entonces. Hoy me doy otra oportunidad.”"
  },
  {
    "day": 242,
    "title": "descomprime-TE",
    "teaName": "Infusión de pecho sin cerrojo",
    "benefit": "Cada exhalación suelta un poco de peso que no es mío.",
    "lesson": "La culpa pesa como una mochila llena de piedras: sigue puesta aunque estés sentada. Respirar no la borra, pero afloja las correas un par de agujeros.",
    "exercise": "Con los hombros tensos hasta las orejas, toma aire por la nariz y suéltalo por la boca con un “fuuu” largo, bajándolos despacio. Repite tres veces y di en voz baja: “Dejo la mochila en el suelo un ratito.”"
  },
  {
    "day": 243,
    "title": "chirigotea-TE",
    "teaName": "Infusión de culpa con sombrero de payaso",
    "benefit": "Puedo reírme de mis tropiezos sin dejar de tomarme en serio.",
    "lesson": "Drama King lleva un tribunal portátil: juicio, toga y martillo. Si al juez le pones un sombrero de bufón, la sentencia pierde solemnidad. Y tú recuperas el aire.",
    "exercise": "Imagina a Drama King dictando sentencia por una metedura de pata, con peluca de juez. Dale un martillo de goma, sonríe y toma un sorbo. Di en voz baja: “Esta causa se archiva por falta de dramatismo.”"
  },
  {
    "day": 244,
    "title": "descabalga-TE",
    "teaName": "Infusión de pies en el suelo",
    "benefit": "Perdonar no me pone por encima: me pone al lado.",
    "lesson": "Queen Zen perdona desde un trono, con voz de “te comprendo, pobrecita”. Eso no es perdón: es altura. Hoy baja del caballo blanco y se sienta en el bordillo, como cualquiera.",
    "exercise": "Recuerda alguna vez que perdonaste con tono de superioridad. Sonríe, estira los pies hasta tocar el suelo y toma un sorbo despacio. Di en voz baja: “Perdono de igual a igual, sin trono y sin discurso.”"
  },
  {
    "day": 245,
    "title": "salta-TE",
    "teaName": "Infusión de saltito sin culpa",
    "benefit": "Un pequeño salto me recuerda que sigo en movimiento.",
    "lesson": "La culpa se pega cuando te quedas quieta, como el chicle en la suela. Un saltito la sacude un poco. No hace falta mucho: basta con que los pies se acuerden de que despegan.",
    "exercise": "De pie, flexiona las rodillas y da tres saltitos suaves, como quien sacude un abrigo mojado. Al tercero, deja caer los brazos y suelta una exhalación. Di en voz baja: “Me sacudo lo que no me toca cargar.”"
  },
  {
    "day": 246,
    "title": "mece-TE",
    "teaName": "Infusión de nana y paciencia",
    "benefit": "Me trato con la dulzura que daría a una criatura asustada.",
    "lesson": "Cuando una criatura se asusta, no le haces un examen: la acunas. A tu culpa le pasa igual: necesita menos reproche y más brazos. Hoy te mecen tus propios brazos.",
    "exercise": "Cruza los brazos sobre el pecho y mécete despacio de lado a lado, como en una nana sin letra. Mantén el vaivén medio minuto y di en voz baja: “Me acompaño con ternura, aunque me haya equivocado.”"
  },
  {
    "day": 247,
    "title": "dialoga-TE",
    "teaName": "Infusión de mesa para tres",
    "benefit": "Escucho a mi drama y a mi calma, y elijo el tono.",
    "lesson": "Drama King dice: “Soy imperdonable.” Queen Zen dice: “Yo ya lo he trascendido todo.” Tú, sentada en medio, piensas: me equivoqué, me duele y puedo repararlo.",
    "exercise": "Pon dos objetos en la mesa, uno por cada voz. Muévelos despacio hasta que queden juntos, con un espacio en medio para ti. Toma un sorbo y di en voz baja: “Me equivoqué, me importa y sigo adelante.”"
  },
  {
    "day": 248,
    "title": "vislumbra-TE",
    "teaName": "Infusión de luz entre rendijas",
    "benefit": "Entre la culpa y yo hay una rendija por donde entra luz.",
    "lesson": "A veces la culpa tapa la ventana entera, como una cortina gruesa. Hoy solo buscas la rendija: ese hueco donde se ve que también hiciste cosas con buena intención.",
    "exercise": "Mira por la ventana, o hacia el punto más luminoso donde estés, y busca una rendija de luz. Quédate ahí quince segundos. Di en voz baja: “También había buena intención en lo que hice.”"
  },
  {
    "day": 249,
    "title": "desanuda-TE",
    "teaName": "Infusión de nudo que se afloja",
    "benefit": "Con cada aire que suelto, un nudo se afloja un poquito.",
    "lesson": "El rencor es un nudo de cordones: cuanto más tiras, más aprieta. Respirar es dejar de tirar. Ya habrá tiempo de deshacerlo con paciencia, uno por uno.",
    "exercise": "Cierra los puños con fuerza, como si agarraras una cuerda, y aguanta el aire. Al soltarlo, abre los dedos uno a uno. Repite dos veces y di en voz baja: “Dejo de tirar de este nudo. Ya lo desataré con calma.”"
  },
  {
    "day": 250,
    "title": "parodia-TE",
    "teaName": "Infusión de culpa en versión musical",
    "benefit": "Mi rencor tendría un musical aburridísimo, y hoy no hay entradas.",
    "lesson": "Drama King guarda un rencor ensayado: tiene guion, vestuario y hasta ovación final. Hoy lo representas en versión de parodia y descubres que el drama pierde público cuando se ríe.",
    "exercise": "Resume un viejo rencor en una frase y cántala con voz de ópera, moviendo los brazos como una soprano trágica. Termina con una reverencia, toma un sorbo y di en voz baja: “Fin de la función. Gracias, ya pueden retirarse.”"
  },
  {
    "day": 251,
    "title": "desciende-TE",
    "teaName": "Infusión de escalón a escalón",
    "benefit": "Bajar del pedestal me deja más cerca de quien quiero.",
    "lesson": "Queen Zen guarda sus rencores en el altillo de la serenidad y asegura que ya no le pesan. Hoy bajamos a mirarlos a la luz. Soltar de verdad empieza por admitir que estaban ahí.",
    "exercise": "Baja una escalera real o imaginaria, escalón a escalón, contando tres. Al llegar abajo, apoya los pies planos y toma un sorbo. Di en voz baja: “Admito que me pesó. Lo suelto desde aquí abajo, sin disfraz.”"
  },
  {
    "day": 252,
    "title": "gatea-TE",
    "teaName": "Infusión de rodillas y buen humor",
    "benefit": "No hace falta ir deprisa para ir soltando.",
    "lesson": "Una criatura que gatea cae, se ríe y sigue sin pedirle perdón al suelo. Hoy imitas ese paso humilde: avanzar un poquito, sin vergüenza y sin discurso.",
    "exercise": "Ponte a cuatro patas un momento sobre una alfombra y da dos pasos de gateo. Si hoy no te va, balancea los brazos en el aire. Sonríe y di en voz baja: “Avanzo a mi ritmo, y puedo tropezar.”"
  },
  {
    "day": 253,
    "title": "engalana-TE",
    "teaName": "Infusión de pendientes y calma",
    "benefit": "Hoy me arreglo para mí, sin esperar que nadie lo note.",
    "lesson": "A veces te castigas hasta con la ropa: la del fondo del armario, la que no mira nadie. Hoy te vistes como si merecieras una buena tarde. Y sí, la mereces.",
    "exercise": "Elige un detalle bonito para ti: un pañuelo, un perfume, unos calcetines divertidos. Póntelo despacio, mírate al espejo y sonríe. Di en voz baja: “Me arreglo para mí, porque hoy me tengo en cuenta.”"
  },
  {
    "day": 254,
    "title": "tantea-TE",
    "teaName": "Infusión de tanteo amable",
    "benefit": "Puedo reparar lo que se pueda y soltar lo que no.",
    "lesson": "Drama King quiere arreglarlo todo ya, o romperlo todo. Queen Zen dice que nada importa. Tú tanteas: esto sí puedo arreglarlo, esto no. Y de lo segundo, sueltas el peso.",
    "exercise": "Toma una hoja y traza una línea en medio. A un lado escribe algo que puedes reparar; al otro, algo que toca soltar. Dobla el papel por la línea y di en voz baja: “Reparo lo que puedo y suelto lo que no.”"
  },
  {
    "day": 255,
    "title": "atisba-TE",
    "teaName": "Infusión de otra versión de la historia",
    "benefit": "Mi historia tiene más de un ángulo, y me permito mirar otro.",
    "lesson": "Cuando te enfadas, la escena se rueda en primer plano: solo se ve el golpe. Hoy abres el plano un poco, sin quitarle importancia a lo que dolió, y ves el resto de la escena.",
    "exercise": "Piensa en una discusión pasada y recuérdala como una película. Aleja la cámara mental y mira toda la escena, no solo el momento que más duele. Toma un sorbo y di en voz baja: “Veo más cosas, y lo que dolió sigue contando.”"
  },
  {
    "day": 256,
    "title": "suelta-TE",
    "teaName": "Infusión de manos abiertas",
    "benefit": "Suelto lo que no puedo cambiar y me quedo con el aire.",
    "lesson": "Una piedra pesada, si la agarras con fuerza, te hace temblar el brazo. Si la sueltas, no desaparece, pero tus manos vuelven a ser tuyas. Hoy respiras para abrir los dedos.",
    "exercise": "Con las palmas hacia arriba sobre las rodillas, inspira y cierra el puño. Al soltar el aire, abre la mano despacio, como si dejaras caer una piedra. Repite tres veces y di en voz baja: “Abro las manos y me quedo con el aire.”"
  },
  {
    "day": 257,
    "title": "pitorrea-TE",
    "teaName": "Infusión de tribunal en zapatillas",
    "benefit": "Mi tribunal interno trabaja en pijama y sin credibilidad.",
    "lesson": "Drama King abre cada mañana el tribunal de tus errores. Hoy le tomas el pelo: el juez dormido, la fiscal con hipo y la sala llena de calcetines. Con ese reparto, la sentencia no se la cree nadie.",
    "exercise": "Imagina el tribunal de tus errores con un reparto absurdo: ocas de testigos, una tostadora de abogada. Ríete en voz alta una vez, sin vergüenza, y toma un sorbo. Di en voz baja: “Este tribunal queda disuelto por falta de seriedad.”"
  },
  {
    "day": 258,
    "title": "desentroniza-TE",
    "teaName": "Infusión de trono plegable",
    "benefit": "Soltar un rencor no me hace débil: me hace libre.",
    "lesson": "Queen Zen guarda su rencor en un trono bien pulido y lo llama paz interior. Hoy lo plegamos como una silla de playa. Cabe en el maletero, y lo que ocupa menos pesa menos.",
      "exercise": "Dibuja un trono pequeño en un papel y escribe encima la palabra rencor. Dóblalo en cuatro, guárdalo en un bolsillo y toma un sorbo. Di en voz baja: “Pliego mi trono y me siento donde se sientan todas.”"
  },
  {
    "day": 259,
    "title": "remueve-TE",
    "teaName": "Infusión de cucharilla y paciencia",
    "benefit": "Un pequeño remolino me ayuda a no quedarme estancada.",
    "lesson": "El agua quieta se pone turbia; el agua que se mueve se aclara. Tus ideas pasadas funcionan igual. Hoy las remueves con una cucharilla de curiosidad, sin buscar culpables.",
    "exercise": "Remueve tu infusión en círculos, cinco vueltas hacia un lado y cinco hacia el otro, mirando el remolino. Imagina que cada vuelta afloja una idea pegada. Di en voz baja: “Dejo que todo se mueva y se vaya asentando.”"
  },
  {
    "day": 260,
    "title": "invita-TE",
    "teaName": "Infusión de silla para mí",
    "benefit": "Me siento a mi propia mesa, aunque no haya sido perfecta.",
    "lesson": "A veces te dejas fuera de la fiesta por un error de hace tiempo, con la excusa de que no te lo mereces. Hoy te acercas una silla y una taza. No hace falta que traigas disculpas.",
    "exercise": "Prepara un sitio para ti: un cojín, una manta, tu taza favorita. Siéntate con calma y tómate el tiempo que quieras. Di en voz baja: “Aquí hay sitio para mí, con mis errores y con mis aciertos.”"
  },
  {
    "day": 261,
    "title": "decide-TE",
    "teaName": "Infusión de balanza con humor",
    "benefit": "Elijo qué me quedo de esto y qué dejo ir.",
    "lesson": "Drama King lo guarda todo en cajas con etiqueta. Queen Zen lo tira todo por la ventana. Tú abres cada caja con calma: esto me enseñó algo, esto ya no me sirve. Y haces la mudanza a tu ritmo.",
    "exercise": "Piensa en un recuerdo que te pesa. Haz con las manos dos montones en el aire: el de lo que aprendiste y el de lo que ya no te sirve. Empuja el segundo lejos y di en voz baja: “Me quedo con lo aprendido y dejo el resto en la mudanza.”"
  },
  {
    "day": 262,
    "title": "repara-TE",
    "teaName": "Infusión de arreglo con paciencia",
    "benefit": "Puedo reparar sin castigarme, y a mi ritmo.",
    "lesson": "Un jarrón roto, arreglado con cola dorada, es más bonito, no más culpable. Mirarte con ojos de restauradora no tapa las grietas: las hace parte de la historia. Si algo pesa mucho, cuéntaselo a alguien de confianza.",
    "exercise": "Mira un objeto que tengas arreglado o gastado y reconoce sus marcas. Pasa el dedo por una, despacio, y toma un sorbo. Di en voz baja: “Las marcas cuentan lo que viví, no lo que valgo.”"
  },
  {
    "day": 263,
    "title": "desabrocha-TE",
    "teaName": "Infusión de botón desabrochado",
    "benefit": "Mi pecho puede aflojarse un poco, ahora mismo.",
    "lesson": "El rencor te abrocha hasta el último botón, como una camisa de domingo. Respirar hondo es desabrocharte el primero. No hace falta quitarte todo: basta con que entre un poco de aire.",
    "exercise": "Imagina un botón en el cuello de tu camisa. Toma aire despacio y, al soltarlo, ábrelo con los dedos de verdad. Repite dos veces moviendo los hombros y di en voz baja: “Dejo entrar aire donde todo estaba apretado.”"
  },
  {
    "day": 264,
    "title": "chacotea-TE",
    "teaName": "Infusión de culpa con confeti",
    "benefit": "Me río de mi culpa hasta que se le cae el disfraz.",
    "lesson": "Drama King lleva un disfraz de gran culpable, con capa y todo. Si le haces cosquillas en el cuello de la capa, se ríe y la culpa se queda sin escena. No es burla: es perspectiva.",
      "exercise": "Dibuja una mini cara de culpa con capa en una servilleta. Ponle un nombre ridículo, como Capitán Remordimiento. Ríete con ganas un segundo y di en voz baja: “Gracias, capitán, pero hoy tienes el día libre.”"
  },
  {
    "day": 265,
    "title": "desencasilla-TE",
    "teaName": "Infusión de etiqueta despegada",
    "benefit": "No soy la etiqueta de mi peor día.",
    "lesson": "Queen Zen te pone la etiqueta de “ya lo superé todo” y se queda tan ancha; Drama King, la de “soy lo peor”. Ninguna es verdad. Hoy las despegas con cuidado y miras debajo: ahí sigues tú.",
    "exercise": "Escribe en una pegatina o en un trozo de papel una etiqueta cruel que te pusiste. Despégala con cuidado, arrúgala y déjala en la papelera. Di en voz baja: “Soy más que mi peor día.”"
  },
  {
    "day": 266,
    "title": "desliza-TE",
    "teaName": "Infusión de calcetines y deslizamiento",
    "benefit": "Deslizarme me recuerda que puedo ir ligera.",
    "lesson": "Con calcetines sobre el suelo liso, el cuerpo aprende algo rápido: cuando dejas de apretar, ruedas. Hoy deslizas los pies como si el suelo estuviera de tu parte.",
    "exercise": "Si el suelo es liso y hay espacio, desliza los pies con calcetines cinco pasos hacia delante y cinco hacia atrás, con cuidado. Si no, haz círculos con los hombros. Di en voz baja: “Voy más ligera cuando dejo de apretar.”"
  },
  {
    "day": 267,
    "title": "arrebuja-TE",
    "teaName": "Infusión de manta y perdón",
    "benefit": "Me envuelvo en paciencia, como en una manta.",
    "lesson": "Perdonarte no se hace a golpe de decisión: se hace como una manta, capa a capa. Hoy te envuelves con paciencia y dejas que el calor haga el resto, sin prisas ni exámenes.",
    "exercise": "Envuélvete en una manta o un chal y quédate un minuto quieta, con los pies calientes y la taza entre las manos. Cuando notes el calor, di en voz baja: “Voy poco a poco y voy bien acompañada: me tengo a mí.”"
  },
  {
    "day": 268,
    "title": "convive-TE",
    "teaName": "Infusión de convivencia y calma",
    "benefit": "Puedo convivir con lo que pasó sin que me gobierne.",
    "lesson": "Drama King quiere que el pasado ocupe todo el salón. Queen Zen quiere que no exista. Tú le das una butaca en un rincón: ahí está, forma parte de la casa, pero ya no manda en el mando de la tele.",
    "exercise": "Imagina tu pasado como una visita en tu casa. Dibuja con las manos una butaca en un rincón y siéntala ahí. Toma un sorbo y di en voz baja: “Lo que pasó vive en mi casa, pero ya no manda en ella.”"
  },
  {
    "day": 269,
    "title": "resigue-TE",
    "teaName": "Infusión de mapa del camino",
    "benefit": "Mira cuánto he soltado este mes, y sigo andando.",
    "lesson": "Hoy retrocedes por el camino del mes con una linterna amable. Verás huellas de rabia, de culpa y de ternura. Mira cuánto has avanzado: no hay prisa por borrarlas, basta con que ya no te pesen igual.",
    "exercise": "Recorre con el dedo sobre la mesa el trazo del mes, de principio a fin, parándote en un momento en que soltaste algo. Toma un sorbo y di en voz baja: “Mira cuánto he avanzado, lo que me ha costado y lo bien que lo hice.”"
  },
  {
    "day": 270,
    "title": "vitorea-TE",
    "teaName": "Infusión de ovación sin culpa",
    "benefit": "Hoy me aplaudo por haberme perdonado un poquito.",
    "lesson": "Hoy tiramos confeti por haber aprendido a soltar. No todo, pero algo. Y ese algo ya es ligereza. Tu piropo de hoy va al Piropero: te lo has ganado.",
    "exercise": "Ponte de pie, levanta los brazos como si cruzaras una meta y da una vuelta sobre ti misma. Piensa en un piropo para ti y guárdalo en el Piropero de la app. Luego di en voz baja: “Eres valiente, cuidadora y mucho más ligera que ayer.”"
  },
  {
    "day": 271,
    "title": "atreve-TE",
    "teaName": "Infusión de primer paso pequeño",
    "benefit": "Hoy me miro con valentía: ya he dado más pasos de los que cuento.",
    "lesson": "La valentía no es un grito de guerra: suele ser un susurro con las rodillas temblando. Hoy te miras como una exploradora que, sin darse cuenta, ya lleva un buen trecho recorrido.",
    "exercise": "Siéntate y repasa un momento en que hiciste algo con miedo y salió bien, aunque fuera pequeño. Toma un sorbo y di en voz baja: “Ya he sido valiente antes, y hoy lo puedo ser un poquito.”"
  },
  {
    "day": 272,
    "title": "acompasa-TE",
    "teaName": "Infusión de pulso sereno",
    "benefit": "Mi respiración marca el ritmo y yo la sigo con confianza.",
    "lesson": "Antes de un cambio, el corazón va a su aire, como un tambor sin director. Respirar es ponerle batuta: no lo manda callar, solo le marca un compás más suave.",
    "exercise": "Con una mano en el pecho, cuenta cuatro al tomar aire y seis al soltarlo, como quien sigue un metrónomo amable. Repite cinco veces y di en voz baja: “Voy a mi ritmo y el cambio viene conmigo.”"
  },
  {
    "day": 273,
    "title": "desvaria-TE",
    "teaName": "Infusión de catástrofe en miniatura",
    "benefit": "Puedo reírme de mis miedos sin dejar que decidan por mí.",
    "lesson": "Drama King oye la palabra “cambio” y ya ve la casa derrumbada, el gato en el exilio y a ti en un barco pirata. Escúchalo, ríete y pregúntale con calma: ¿y si sale bien?",
    "exercise": "Cuenta en voz alta el peor desenlace posible de un cambio pequeño, con voz de tráiler de película. Exagera hasta que te rías. Toma un sorbo y di en voz baja: “Gracias por el aviso, Drama King, pero el barco pirata lo dejamos para otro día.”"
  },
  {
    "day": 274,
    "title": "desenmascara-TE",
    "teaName": "Infusión de máscara en la percha",
    "benefit": "Tener miedo no me resta: me hace humana, como a todas.",
    "lesson": "Queen Zen jura que ella no tiene miedo a nada, que lo soltó hace años. Pero le tiembla un poco la túnica. Hoy dejamos la máscara en la percha: la valentía de verdad empieza admitiendo el susto.",
    "exercise": "Nombra en voz alta un miedo que sueles disimular, sin adornarlo, solo con su nombre. Respira y toma un sorbo despacio. Luego di en voz baja: “Tengo miedo, y sigo adelante igualmente.”"
  },
  {
    "day": 275,
    "title": "avanza-TE",
    "teaName": "Infusión de paso de hormiga",
    "benefit": "Un paso pequeño sigue siendo un paso.",
    "lesson": "Los cambios grandes se hacen a pasos de hormiga: uno detrás de otro, sin foto ni discurso. La hormiga no mira la montaña entera: mira la siguiente miguita.",
    "exercise": "Elige un pequeño trámite que llevas tiempo posponiendo y da ahora el primer paso: abrir el documento, escribir el mensaje, coger el teléfono. Solo uno. Di en voz baja: “Un paso de hormiga, y ya estoy en camino.”"
  },
  {
    "day": 276,
    "title": "reconforta-TE",
    "teaName": "Infusión de abrazo antes del salto",
    "benefit": "Me doy ánimo con ternura antes de intentarlo.",
    "lesson": "Antes de lanzarte, tu valentía necesita un abrazo, no un sermón. Una cosa es empujarte y otra es insultarte. Hoy te hablas como a una amiga antes de un gran día.",
    "exercise": "Colócate las manos sobre los hombros, como quien anima a una amiga, y apriétalos con suavidad. Quédate así un minuto, respirando. Di en voz baja: “Estoy contigo. Pase lo que pase, me tienes.”"
  },
  {
    "day": 277,
    "title": "sincroniza-TE",
    "teaName": "Infusión de dos voces en compás",
    "benefit": "Entre el pánico y la calma, mi paso es el del medio.",
    "lesson": "Drama King pisa el freno a fondo y Queen Zen el acelerador, sin mirar el mapa. Tú, al volante, ajustas los pedales: ni coche parado ni cohete. Un poco de gas, un poco de cautela.",
    "exercise": "Pisa el suelo con un pie para frenar y con el otro empuja hacia delante, como si manejaras dos pedales. Alterna despacio ocho veces y, al acabar, di en voz baja: “Ni freno a fondo ni cohete: mi velocidad es esta.”"
  },
  {
    "day": 278,
    "title": "atalaya-TE",
    "teaName": "Infusión de mirador cercano",
    "benefit": "Desde arriba, mi miedo es más pequeño de lo que parecía.",
    "lesson": "El miedo visto desde dentro parece un gigante. Visto desde un mirador, con un poco de distancia, es una figura con megáfono. Hoy subes a la atalaya a mirarlo sin juzgar.",
    "exercise": "Mira por la ventana, o a lo lejos, y piensa en un cambio que te da respeto. Imagina que lo ves desde un mirador, con todo el paisaje alrededor. Toma un sorbo y di en voz baja: “Desde aquí lo veo más pequeño, y yo me veo más grande.”"
  },
  {
    "day": 279,
    "title": "insufla-TE",
    "teaName": "Infusión de velas desplegadas",
    "benefit": "Lleno mis velas de aire y dejo que me lleve un poco.",
    "lesson": "Un velero no pelea contra el viento: lo usa. Tu respiración es el viento que tienes siempre a mano. Llena las velas, suelta las amarras de la duda y mira hacia dónde te lleva.",
    "exercise": "Abre los brazos como velas y toma aire despacio, llenando el pecho. Al soltarlo, junta las manos delante, como quien dirige un timón. Repite tres veces y di en voz baja: “El aire me lleva, y yo llevo el timón.”"
  },
  {
    "day": 280,
    "title": "bufonea-TE",
    "teaName": "Infusión de ensayo general con risa",
    "benefit": "Si fallo, será con gracia, y habrá anécdota.",
    "lesson": "Drama King cree que si algo sale mal, el mundo entero lo grabará y lo proyectará en el cine del barrio. Spoiler: casi nadie mira. Y a quien mire, se le olvida antes de llegar a casa.",
    "exercise": "Haz una versión ridícula de eso que te da miedo: ensáyalo con voz de pato o con acento exagerado. Ríete de ti con cariño y toma un sorbo. Di en voz baja: “Si me sale torcido, será una buena anécdota.”"
  },
  {
    "day": 281,
    "title": "desatornilla-TE",
    "teaName": "Infusión de ego con tornillo flojo",
    "benefit": "No necesito parecer segura: me basta con intentarlo.",
    "lesson": "Queen Zen quiere dar el salto con aura de maestra, pero lleva el ego tan apretado que ni se puede agachar. Un par de vueltas de destornillador y baja a la tierra: aquí se aprende haciendo.",
    "exercise": "Gira una muñeca como si aflojaras un tornillo, medio minuto, y sacude la mano. Intenta ahora algo que no se te da bien: dibujar con la otra mano, por ejemplo. Toma un sorbo y di en voz baja: “Aprender incomoda y no pasa nada.”"
  },
  {
    "day": 282,
    "title": "escala-TE",
    "teaName": "Infusión de escalón extra",
    "benefit": "Un escalón más cada día me lleva muy lejos.",
    "lesson": "Nadie sube una montaña de golpe: se sube un escalón, luego otro. Hoy tu escalón es pequeñito y tiene pasamanos. Cuando llegues arriba, mirarás hacia atrás y te sorprenderás.",
    "exercise": "Sube un tramo de escaleras, o simula que lo haces elevando bien las rodillas en el sitio, con cuidado. Cuando termines, nota cómo late tu cuerpo y di en voz baja: “Cada escalón cuenta, también el pequeño.”"
  },
  {
    "day": 283,
    "title": "anima-TE",
    "teaName": "Infusión de confeti anticipado",
    "benefit": "Me felicito por adelantado, sin esperar a que salga bien.",
    "lesson": "Solemos esperar al final para celebrar, como si el aplauso fuera un premio escaso. Hoy lo adelantas un poco: ya te estás atreviendo, y eso se merece un confetito.",
    "exercise": "Haz un pequeño ritual de ánimo: palmadita suave en cada muslo y una sonrisa grande delante del espejo o del reflejo de la taza. Di en voz baja: “Aplaudo ahora, por atreverme, no solo por acabar.”"
  },
  {
    "day": 284,
    "title": "acopla-TE",
    "teaName": "Infusión de piezas que encajan",
    "benefit": "Prudencia y valentía caben en la misma mochila.",
    "lesson": "Drama King dice: “Mejor no.” Queen Zen dice: “Todo fluye, no hay que hacer nada.” Tú, que las tienes a las dos de compañeras de piso, las pones a cocinar juntas: una trae la cautela y la otra la chispa.",
    "exercise": "Une las puntas de los dedos de ambas manos formando un puente. Mueve las manos como si encajaran dos piezas. Toma un sorbo y di en voz baja: “Pido prudencia a una y chispa a la otra, y las dos me ayudan.”"
  },
  {
    "day": 285,
    "title": "columbra-TE",
    "teaName": "Infusión de horizonte con niebla",
    "benefit": "No necesito ver todo el camino para dar el siguiente paso.",
    "lesson": "Cuando conduces con niebla, no ves el pueblo, solo los metros de delante. Y llegas. Tu cambio funciona igual: con la luz de un paso cada vez ya tienes suficiente.",
    "exercise": "Mira un punto cercano, como la esquina de la mesa, y luego uno lejano. Comprueba que no hace falta ver el segundo para llegar al primero. Toma un sorbo y di en voz baja: “Veo hasta aquí, y desde aquí continúo.”"
  },
  {
    "day": 286,
    "title": "ahonda-TE",
    "teaName": "Infusión de raíz y respiración",
    "benefit": "Respiro hondo y me siento firme, como un árbol.",
    "lesson": "Un árbol que se atreve a crecer empieza por echar raíces. Respirar hondo es echar raíces en un minuto: abajo se asientan los pies, arriba se atreven las ramas.",
    "exercise": "De pie, con los pies separados al ancho de las caderas, respira hacia la tripa mientras notas el suelo bajo las plantas. Sube los brazos como ramas al inspirar. Di en voz baja: “Echo raíces y desde aquí me atrevo.”"
  },
  {
    "day": 287,
    "title": "gamberrea-TE",
    "teaName": "Infusión de miedo con bigote postizo",
    "benefit": "Si le pongo un bigote postizo, el miedo me da menos miedo.",
    "lesson": "Drama King guarda el miedo en una caja negra. Pero al abrirla aparece un gatito con cara de susto. Hoy le ponemos un bigote postizo y le preguntamos qué quería. Casi siempre, un abrazo.",
    "exercise": "Dibuja tu miedo en una servilleta como un monstruito simpático y ponle bigote o sombrero. Salúdalo en voz alta, sonríe y toma un sorbo. Di en voz baja: “Te saludo, miedito, pero hoy conduzco yo.”"
  },
  {
    "day": 288,
    "title": "desaprende-TE",
    "teaName": "Infusión de manual tirado al cajón",
    "benefit": "No necesito tener el manual completo para empezar.",
    "lesson": "Queen Zen se estudió todos los manuales de la calma y no se atreve a probar nada hasta dominarlos. Hoy los guardamos en el cajón: se aprende a nadar mojándose, no leyendo sobre la piscina.",
    "exercise": "Escribe en un papel qué deberías saber antes de empezar y haz con él una bolita. Lánzala a una papelera cercana, con puntería o sin ella. Sonríe y di en voz baja: “Empiezo sin saberlo todo, y está bien.”"
  },
  {
    "day": 289,
    "title": "impulsa-TE",
    "teaName": "Infusión de pequeño empujón",
    "benefit": "A veces solo necesito un empujoncito, y me lo doy yo.",
    "lesson": "Los trenes más largos arrancan con un empujoncito. No hace falta una locomotora: basta un “venga” bien puesto y un gesto pequeño. Hoy tú eres la locomotora y el empujón.",
      "exercise": "Apoya las palmas de las manos en la pared y empuja suavemente, notando cómo trabajan brazos y espalda. Luego da un paso hacia atrás y otro hacia delante. Di en voz baja: “Me empujo con cariño, y avanzo.”"
  },
  {
    "day": 290,
    "title": "gratifica-TE",
    "teaName": "Infusión de premio por intentarlo",
    "benefit": "Me premio por intentar, no solo por conseguir.",
    "lesson": "Si solo te premias cuando sale perfecto, el premio llega tarde y casi nunca. Hoy cambias la regla: se premia el intento. Eso es lo que de verdad te mueve a repetir.",
    "exercise": "Escoge un premio pequeño: una galleta, una canción, un paseo corto. Disfrútalo despacio por haberlo intentado esta semana, sin importar cómo salió. Di en voz baja: “Esto es por atreverme, no por acertar.”"
  },
  {
    "day": 291,
    "title": "entrelaza-TE",
    "teaName": "Infusión de dos hilos y un nudo suave",
    "benefit": "Entrelazo mi miedo y mis ganas, y salen buenas trenzas.",
    "lesson": "Drama King teje el hilo del miedo. Queen Zen, el de la confianza ciega. Tú los trenzas: tira de uno hacia el otro y la trenza resiste mejor que cada hilo suelto.",
    "exercise": "Entrelaza los dedos de ambas manos y aprieta con firmeza. Suelta un poco y vuelve a apretar, como quien trenza dos hilos. Toma un sorbo y di en voz baja: “Con miedo y con ganas me atrevo a ir por el medio.”"
  },
  {
    "day": 292,
    "title": "indaga-TE",
    "teaName": "Infusión de curiosidad y linterna",
    "benefit": "Me pregunto qué quiere mi miedo, sin discutir con él.",
    "lesson": "El miedo suele tener un recado escondido. Si lo interrogas, se pone pesado; si le preguntas con curiosidad qué necesita, lo suelta enseguida. A veces solo quería que lo vieras.",
    "exercise": "Elige un miedo pequeño de hoy y pregúntale en voz baja: ¿qué necesitas? Escucha lo que responda, sin discutir, y toma un sorbo. Di en voz baja: “Gracias por avisarme. Ahora sé qué necesito.”"
  },
  {
    "day": 293,
    "title": "refresca-TE",
    "teaName": "Infusión de brisa en la nuca",
    "benefit": "Cada respiración me despeja un poco las dudas.",
    "lesson": "Las dudas, cuando se quedan encerradas, huelen a habitación sin ventilar. Una buena respiración abre la ventana de la cabeza: no echa a nadie, pero entra brisa.",
    "exercise": "Respira por la nariz imaginando una brisa fresca en la frente y suelta por la boca como si empañaras un cristal. Repite cuatro veces y di en voz baja: “Me entra aire fresco y me sienta bien.”"
  },
  {
    "day": 294,
    "title": "carnavaliza-TE",
    "teaName": "Infusión de disfraz de valiente de pega",
    "benefit": "Puedo ponerme el disfraz de valiente y reírme mientras lo hago.",
    "lesson": "Drama King se disfraza de héroe de película, con capa, música épica y un termo de café. Parece ridículo, pero a veces ponerse el disfraz ayuda: el cuerpo se cree el papel antes que la cabeza.",
    "exercise": "Ponte una prenda divertida o una capa imaginaria y camina por la habitación con paso de heroína dramática. Ríete de ti y toma un sorbo. Di en voz baja: “Me pongo el disfraz de valiente y me río, y funciona.”"
   },
  {
    "day": 295,
    "title": "desprende-TE",
    "teaName": "Infusión de aura sin purpurina",
    "benefit": "Puedo atreverme sin aura ni aplausos de nadie.",
    "lesson": "Queen Zen quiere que su cambio quede precioso, con luces y banda sonora. Pero los cambios de verdad empiezan en zapatillas y sin público. Hoy se desprende de la purpurina y se queda con las ganas.",
    "exercise": "Haz algo nuevo y pequeño sin contárselo a nadie: cambia el camino de siempre, prueba una canción distinta, escribe una línea. Guarda el secreto un rato. Di en voz baja: “Me atrevo sin foto y sin aplauso.”"
   },
  {
    "day": 296,
    "title": "arranca-TE",
    "teaName": "Infusión de motor en marcha",
    "benefit": "No hace falta estar lista: basta con ponerme en marcha.",
    "lesson": "Esperar a estar lista es como esperar a que el semáforo de la vida se ponga verde para siempre. A veces se arranca con luz ámbar y manos sudadas, y el motor se calienta andando.",
    "exercise": "Pon un temporizador de un minuto y empieza algo que llevas tiempo aplazando: ordenar un cajón, escribir un párrafo, hacer una llamada breve. Cuando suene, para y celébralo. Di en voz baja: “Ya he arrancado, lo demás es seguir.”"
   },
  {
    "day": 297,
    "title": "acompaña-TE",
    "teaName": "Infusión de compañera en el camino",
    "benefit": "Me acompaño con mimo en cada pequeño cambio.",
    "lesson": "No hace falta ser una heroína solitaria: puedes ser tu propia compañera de viaje. La que lleva el bocadillo, te dice “tú puedes” y te espera si vas más despacio.",
    "exercise": "Imagina que caminas con una amiga que eres tú misma. Camina unos pasos o siéntate a su lado, hablándole bajito con cariño. Toma un sorbo y di en voz baja: “Voy contigo y no te dejo sola.”"
  },
  {
    "day": 298,
    "title": "conjuga-TE",
    "teaName": "Infusión de verbo en tiempo presente",
    "benefit": "Hoy conjugo el verbo atreverme en tiempo presente.",
    "lesson": "Drama King conjuga en pasado: “si lo hubiera hecho”. Queen Zen, en futuro lejano: “algún día”. Tú te quedas con el presente, que es el único tiempo verbal que se puede usar hoy.",
    "exercise": "Escribe en el aire, con el dedo, la palabra HOY en letras grandes. Después di bajito tres verbos en presente: respiro, avanzo, me atrevo. Toma un sorbo y di en voz baja: “Lo que puedo hacer, lo hago hoy, a mi manera.”"
  },
  {
    "day": 299,
    "title": "inventaria-TE",
    "teaName": "Infusión de inventario de valentías",
    "benefit": "Mira cuánto me he atrevido este mes, y no era poco.",
    "lesson": "Hoy haces inventario de tu mes como una tendera de pueblo: cuántos pasos de hormiga, cuántos sustos saludados, cuántos aplausos adelantados. Mira cuánto has avanzado: la estantería está más llena de lo que pensabas.",
    "exercise": "Cuenta con los dedos tres pequeñas cosas que te atreviste a hacer este mes y colócalas en una estantería imaginaria. Toma un sorbo y di en voz baja: “Mira cuánto he avanzado, y ha sido paso a paso.”"
  },
  {
    "day": 300,
    "title": "condecora-TE",
    "teaName": "Infusión de medalla de papel",
    "benefit": "Hoy me condecoro por atreverme a mi manera.",
    "lesson": "Hoy toca ceremonia: medalla de cartón, discurso corto y confeti de servilleta. Has aprendido a dar pasos pequeños aunque tuvieras miedo. Tu piropo de hoy va al Piropero: te lo has ganado.",
    "exercise": "Recorta o dibuja una medalla de papel y cuélgatela con una cinta o con la imaginación. Piensa en un piropo para ti y guárdalo en el Piropero de la app. Luego di en voz baja: “Eres valiente, constante y más capaz de lo que crees.”"
  },
  {
    "day": 301,
    "title": "fija-TE",
    "teaName": "Infusión de mirada atenta",
    "benefit": "Hoy me fijo en las personas que me rodean y en lo que me dan sin darse cuenta.",
    "lesson": "Alrededor tuyo hay gestos pequeños que pasan desapercibidos: la vecina que sostiene la puerta, quien te sonríe en la cola, el mensaje de siempre. Hoy te fijas en ellos como quien descubre una red invisible que ya te sostiene.",
    "exercise": "Durante el día, fíjate en tres gestos amables de otras personas, aunque sean pequeños, y anótalos mentalmente. Al final toma un sorbo y di en voz baja: “Hay una red de pequeños gestos a mi alrededor y me sostiene.”"
  },
  {
    "day": 302,
    "title": "contagia-TE",
    "teaName": "Infusión de calma que se contagia",
    "benefit": "Mi calma se contagia, y la de otras personas también me abraza.",
    "lesson": "Respirar cerca de otra persona acaba sincronizando los ritmos, como dos relojes que terminan marcando a la vez. Hoy buscas esa calma compartida, con alguien cerca o con la idea de alguien que te quiere bien.",
    "exercise": "Piensa en una persona con la que te sientes tranquila y respira al ritmo que imaginas que tendría ella: lento y amplio, cuatro veces. Toma un sorbo y di en voz baja: “Respiro y mi calma viaja hacia las personas que quiero.”"
  },
  {
    "day": 303,
    "title": "troncha-TE",
    "teaName": "Infusión de lamento teatral",
    "benefit": "Si Drama King dice que nadie me entiende, le pido que me lo explique con humor.",
    "lesson": "Drama King jura que nadie en la historia ha sentido lo que él siente y que está solo en el universo. Hoy lo dejas hablar con su vozarrón y le recuerdas, con una sonrisa, que la cola de gente que se siente igual da la vuelta a la manzana.",
    "exercise": "Piensa el titular más dramático de tu soledad de hoy (“Última persona incomprendida del planeta”) y léelo con voz solemne. Cuando te rías, toma un sorbo y di en voz baja: “Otras personas sienten lo mismo y puedo acercarme a ellas.”"
  },
  {
    "day": 304,
    "title": "iguala-TE",
    "teaName": "Infusión de mesa redonda",
    "benefit": "No hay personas más evolucionadas que otras: hay personas distintas en su camino.",
    "lesson": "Queen Zen mira al grupo desde arriba y reparte consejos que nadie ha pedido, convencida de que va tres pasos por delante. Hoy la sientas a una mesa redonda, donde nadie queda más alto que nadie y todas se escuchan.",
    "exercise": "Piensa en alguien a quien sueles dar consejos sin que te los pida y, en lugar de aconsejarle, imagina preguntarle: “¿Cómo estás de verdad?”. Toma un sorbo y di en voz baja: “Me pongo a la altura de todas las personas y aprendo de ellas.”"
  },
  {
    "day": 305,
    "title": "arrima-TE",
    "teaName": "Infusión de paso hacia alguien",
    "benefit": "Un pequeño paso hacia otra persona puede abrir una puerta enorme.",
    "lesson": "A veces la distancia no es de kilómetros, sino de un mensaje que no enviamos. Hoy te arrimas un poquito: un saludo, una pregunta, una invitación a un café, sin discurso y sin gran motivo.",
    "exercise": "Elige a una persona a la que quieras acercarte y envíale un mensaje corto (“¿Qué tal estás?”) o salúdala en persona. Antes de hacerlo, toma un sorbo y di en voz baja: “Doy un pasito hacia las personas que me importan.”"
  },
  {
    "day": 306,
    "title": "deja-TE",
    "teaName": "Infusión de dejarse querer",
    "benefit": "También puedo recibir cariño, sin pensar que debo devolverlo ya mismo.",
    "lesson": "A muchas personas nos cuesta más recibir que dar: un cumplido, un favor, una ayuda. Hoy practicas lo contrario: decir “gracias” sin excusas ni devoluciones inmediatas y dejar que el cariño te llegue.",
    "exercise": "Si alguien te dice algo amable o te ofrece ayuda hoy, responde solo “gracias” y respira para que entre de verdad. Si no pasa, recuerda un cumplido que te hicieron. Toma un sorbo y di en voz baja: “Me dejo querer y no tengo que devolverlo ya.”"
  },
  {
    "day": 307,
    "title": "releva-TE",
    "teaName": "Infusión de turno compartido",
    "benefit": "Hay momentos de dar y momentos de recibir, y puedo turnarme sin culpa.",
    "lesson": "Drama King quiere que todas las personas lo escuchen a él, y Queen Zen quiere que todas la escuchen a ella. En una buena amistad se turnan: hoy hablan una por una y tú repartes los turnos con una sonrisa.",
    "exercise": "En tu próxima conversación, cuenta algo tuyo y luego pregunta algo a la otra persona; deja que cada una tenga su turno. Antes, toma un sorbo y di en voz baja: “Doy y recibo en mi turno, y así me equilibro.”"
  },
  {
    "day": 308,
    "title": "atiende-TE",
    "teaName": "Infusión de escucha con los ojos",
    "benefit": "Atender de verdad a una persona también me hace sentir cerca.",
    "lesson": "Escuchar mirando, sin móvil ni prisa, es una forma de abrazo. Hoy pones toda tu atención en una conversación, aunque sea de dos minutos, y observas qué cambia en el ambiente.",
    "exercise": "En una conversación de hoy, deja el móvil a un lado y mira a la persona a los ojos mientras habla. Al terminar, toma un sorbo y di en voz baja: “Estoy aquí y presto atención de verdad.”"
  },
  {
    "day": 309,
    "title": "murmura-TE",
    "teaName": "Infusión de murmullo compartido",
    "benefit": "Un murmullo suave al exhalar me recuerda que mi voz también arropa.",
    "lesson": "Murmurar una nota grave mientras exhalas vibra en el pecho y relaja. Es lo que hace quien acuna sin darse cuenta: acompaña y calma, a sí misma y a quien tiene cerca.",
    "exercise": "Inhala por la nariz y exhala murmurando una “m” larga y suave, notando la vibración en el pecho y los labios, cuatro veces. Toma un sorbo y di en voz baja: “Mi voz calma y acompaña.”"
  },
  {
    "day": 310,
    "title": "cachondea-TE",
    "teaName": "Infusión de lamento en grupo",
    "benefit": "Puedo reírme con otras personas de nuestras tragedias compartidas.",
    "lesson": "Cuando Drama King se lamenta en solitario, parece un drama de cine. Cuando se lamenta en compañía, se convierte en una comedia de enredos, porque alguien dice “a mí también” y todo se aligera.",
    "exercise": "Cuéntale a alguien de confianza una pequeña desgracia de tu semana como si fuera un chiste, y deja que se ría contigo. Antes, toma un sorbo y di en voz baja: “Reírme con alguien me hace sentir menos sola.”"
  },
  {
    "day": 311,
    "title": "despoja-TE",
    "teaName": "Infusión de pose en la percha",
    "benefit": "Puedo dejar mi pose de persona perfecta y mostrarme tal como soy.",
    "lesson": "Queen Zen llega a las reuniones con la sonrisa de quien ya lo tiene todo resuelto, y nadie se atreve a contarle nada real. Hoy se quita la pose, la cuelga en la percha y confiesa algo pequeño que aún no sabe.",
    "exercise": "Cuéntale a alguien algo en lo que todavía estás aprendiendo o en lo que dudas, sin adornarlo. Antes, toma un sorbo y di en voz baja: “Me muestro tal como soy, y eso acerca a las personas.”"
  },
  {
    "day": 312,
    "title": "extiende-TE",
    "teaName": "Infusión de mano tendida",
    "benefit": "Puedo tender la mano a alguien y también aceptar la que me tienden.",
    "lesson": "Tender la mano no necesita grandes gestos: una pregunta sincera, ofrecer ayuda con algo pequeño, preguntar cómo está alguien y esperar la respuesta. Es mover el cuerpo y el corazón a la vez.",
    "exercise": "Extiende los brazos como para abrazar a alguien, hacia delante y hacia los lados, tres veces. Después elige un gesto de ayuda pequeño para hoy. Toma un sorbo y di en voz baja: “Extiendo mi mano y dejo que me alcancen.”"
  },
  {
    "day": 313,
    "title": "acoge-TE",
    "teaName": "Infusión de casa abierta",
    "benefit": "Puedo acogerme como acogería a una invitada querida.",
    "lesson": "Cuando viene a casa alguien querido, le ofrecemos asiento, algo caliente y tiempo. Hoy te acoges igual: te sientas, te preparas algo cálido y te recibes con la misma hospitalidad que darías a una invitada.",
    "exercise": "Prepara tu infusión como para una invitada especial: taza bonita, sitio cómodo y cinco minutos sin prisas. Toma un sorbo y di en voz baja: “Me acojo como acogería a alguien a quien quiero.”"
  },
  {
    "day": 314,
    "title": "comparte-TE",
    "teaName": "Infusión de mesa compartida",
    "benefit": "Compartir me alivia, y escuchar a otras personas también me equilibra.",
    "lesson": "Drama King comparte demasiado y de forma teatral; Queen Zen no comparte nada porque “ella ya lo trascendió”. Hoy buscas el punto medio: contar lo justo, en el momento justo, a quien sabe escuchar.",
    "exercise": "Elige algo pequeño que te pese y cuéntaselo a una persona de confianza en dos frases, sin dramatismo. Antes, toma un sorbo y di en voz baja: “Comparto lo que siento y dejo que me ayuden a llevarlo.”"
  },
  {
    "day": 315,
    "title": "aprecia-TE",
    "teaName": "Infusión de lo que valgo",
    "benefit": "Valoro mi papel en la vida de otras personas, aunque sea pequeño.",
    "lesson": "Mira la red de personas que te rodean: alguien se alegra cuando apareces, alguien cuenta contigo, alguien te recuerda con cariño. Apreciarte también es reconocer el hueco que tú llenas.",
    "exercise": "Piensa en tres personas a las que les importas y en lo que les aportas tú, de forma sencilla (tu risa, tu escucha, tu constancia). Toma un sorbo y di en voz baja: “Mi presencia importa en la vida de otras personas.”"
  },
  {
    "day": 316,
    "title": "canturrea-TE",
    "teaName": "Infusión de canción compartida",
    "benefit": "Cantar bajito mientras respiro me conecta conmigo y con quien se la sabe.",
    "lesson": "Hay canciones que nos unen sin conocernos: nos las sabemos todas y las cantamos igual de mal. Canturrear una de ellas alarga la exhalación y te recuerda que formas parte de algo más grande.",
    "exercise": "Canturrea una canción que te guste, aunque sea sin letra, exhalando despacio en cada frase. Piensa en alguien que la cantaría contigo. Toma un sorbo y di en voz baja: “Canto bajito y me siento acompañada.”"
  },
  {
    "day": 317,
    "title": "mofa-TE",
    "teaName": "Infusión de ofensa teatral",
    "benefit": "Si Drama King se ofende, puedo preguntarme si es de verdad o de mentira.",
    "lesson": "Drama King se ofende por todo: por un mensaje sin emoji, por un “ok” seco, por una invitación que no llegó. Hoy le sonríes, compruebas con él que a menudo nadie quiso ofender a nadie y cerráis la función.",
    "exercise": "Recuerda algo que te sentó mal de alguien y pregúntate: “¿Y si no lo hizo con mala intención?”. Sonríe, toma un sorbo y di en voz baja: “Prefiero preguntar antes que dramatizar.”"
  },
  {
    "day": 318,
    "title": "aparca-TE",
    "teaName": "Infusión de ego en doble fila",
    "benefit": "Puedo aparcar mi ego espiritual y escuchar sin querer enseñar.",
    "lesson": "Queen Zen deja su ego aparcado en doble fila delante de cada conversación y se pone a dar lecciones. Hoy le pides que lo lleve a un aparcamiento, entre sin él y se limite a escuchar.",
    "exercise": "En tu próxima conversación no des ningún consejo: solo escucha y pregunta “¿y cómo te sientes con eso?”. Antes, toma un sorbo y di en voz baja: “Escucho sin enseñar y aprendo más.”"
  },
  {
    "day": 319,
    "title": "saluda-TE",
    "teaName": "Infusión de buenos días sinceros",
    "benefit": "Un saludo sincero puede cambiarle el día a alguien, y a mí también.",
    "lesson": "Saludar con ganas, mirando y sonriendo, es una pequeña revolución. A la vecina, a quien te cobra en el súper, a un conocido al que hace tiempo que no ves: nadie se da cuenta de cuánto cuenta hasta que lo recibe.",
    "exercise": "Saluda hoy con calidez a tres personas a las que normalmente no saludas, o a las que saludas deprisa, mirándolas a los ojos. Antes, toma un sorbo y di en voz baja: “Mi saludo es un puente pequeño.”"
  },
  {
    "day": 320,
    "title": "refugia-TE",
    "teaName": "Infusión de refugio con compañía",
    "benefit": "Puedo refugiarme en personas que me quieren bien y dejar que me cuiden.",
    "lesson": "Hay personas que son como un refugio: no te piden nada, te escuchan, te preparan un té. Hoy te acuerdas de ellas, buscas su compañía o, si no pueden estar, recuerdas lo bien que sienta saber que están.",
    "exercise": "Elige a alguien que sea tu refugio y dedícale unos minutos: una llamada, un mensaje cariñoso o una foto compartida. Toma un sorbo y di en voz baja: “Me refugio en quien me quiere bien.”"
  },
  {
    "day": 321,
    "title": "intercambia-TE",
    "teaName": "Infusión de trueque de favores",
    "benefit": "Dar y recibir ayuda me mantiene en equilibrio con las demás personas.",
    "lesson": "Una comunidad sana es un trueque constante: hoy te echo una mano, mañana me la echas tú. Drama King se queda solo por no pedir nada, y Queen Zen por querer regalarlo todo. Tú alternas.",
    "exercise": "Piensa en algo en lo que puedes ayudar a alguien esta semana y en algo en lo que te vendría bien su ayuda. Atrévete a ofrecer lo uno y pedir lo otro. Toma un sorbo y di en voz baja: “Ofrezco ayuda y también la pido.”"
  },
  {
    "day": 322,
    "title": "adivina-TE",
    "teaName": "Infusión de intuición amable",
    "benefit": "A veces solo hace falta fijarse un poco para adivinar qué necesita alguien.",
    "lesson": "Detrás de un “estoy bien” a veces hay cansancio, y detrás de una broma hay ganas de compañía. Hoy afinas la mirada para adivinar, con respeto, qué necesita la persona que tienes delante, y se lo preguntas.",
    "exercise": "Fíjate hoy en alguien cercano y pregúntate qué podría necesitar (un rato, una pregunta, un silencio). Ofrécelo con delicadeza. Toma un sorbo y di en voz baja: “Miro con cariño y ofrezco lo que puedo.”"
  },
  {
    "day": 323,
    "title": "relaja-TE",
    "teaName": "Infusión de abrazo sin brazos",
    "benefit": "Cuando me relajo, las personas que tengo al lado también se relajan.",
    "lesson": "Los ambientes se contagian: una persona con la mandíbula tensa tensa la sala; una persona tranquila la suaviza. Hoy relajas tu cuerpo respirando despacio y notas cómo se transforma lo que tienes alrededor.",
    "exercise": "Suelta la mandíbula, los hombros y las manos, y respira despacio seis veces antes de entrar en una conversación o una reunión. Toma un sorbo y di en voz baja: “Mi calma es una forma de acompañar.”"
  },
  {
    "day": 324,
    "title": "regodea-TE",
    "teaName": "Infusión de aplausos del drama",
    "benefit": "Puedo reírme del drama sin dejar de pedir compañía cuando la necesito.",
    "lesson": "Drama King se regodea en sus penas, sobre todo si hay público. Hoy no lo hacemos callar: le damos un micrófono de mentira, escuchamos sus lamentos y después le preguntamos con cariño qué necesita de verdad.",
    "exercise": "Cuenta tu mayor queja de hoy con tono de monólogo teatral, en voz baja o para ti. Al terminar, pregúntate: “¿Qué necesito realmente?”. Toma un sorbo y di en voz baja: “Me río del drama y pido lo que necesito.”"
  },
  {
    "day": 325,
    "title": "desengancha-TE",
    "teaName": "Infusión de pedestal sin clavos",
    "benefit": "Puedo desengancharme de mi pedestal y pertenecer a un grupo.",
    "lesson": "Queen Zen siente que no encaja en ningún grupo porque “nadie está a su nivel”. En realidad lleva el pedestal enganchado como un abrigo pesado. Hoy se lo quita, se sienta con las demás y descubre que la compañía es una forma de paz.",
    "exercise": "Participa hoy en una conversación o actividad de grupo sin intentar ser la que más sabe ni la que más brilla. Antes, toma un sorbo y di en voz baja: “Pertenezco al grupo tal como soy, sin pedestal.”"
  },
  {
    "day": 326,
    "title": "reúne-TE",
    "teaName": "Infusión de mesa con vecinas",
    "benefit": "Reunirme con otras personas es una forma de cuidarme.",
    "lesson": "Una comunidad empieza con una reunión pequeña: dos personas y una infusión ya son un círculo. Hoy imaginas o propones un encuentro sencillo, sin organización ni pretensión, para compartir un rato.",
    "exercise": "Propón a alguien una cita pequeña (un café, un paseo, una videollamada) para esta semana, o apúntala en tu agenda. Antes, toma un sorbo y di en voz baja: “Reúno a mi gente en torno a un té.”"
  },
  {
    "day": 327,
    "title": "obsequia-TE",
    "teaName": "Infusión de detalles para compartir",
    "benefit": "Puedo regalarme algo y regalarle algo a alguien, y disfrutar de las dos cosas.",
    "lesson": "Los pequeños obsequios (una flor, una nota, un dulce) alegran a quien los recibe y a quien los da. Hoy te obsequias a ti, y además piensas en un detalle sencillo para alguien que te importa.",
    "exercise": "Prepara un detalle pequeño para alguien (una nota, una foto, una canción) y otro para ti. Toma un sorbo y di en voz baja: “Doy y me doy con alegría.”"
  },
  {
    "day": 328,
    "title": "coopera-TE",
    "teaName": "Infusión de equipo con humor",
    "benefit": "En equipo, Drama King y Queen Zen aportan más que por separado.",
    "lesson": "Un grupo funciona cuando hay quien dramatiza lo justo, quien aporta calma y quien hace la lista de tareas. Hoy imaginas a tus dos personajes en un equipo y a ti de coordinadora de un proyecto sencillo: preparar el té para todas.",
    "exercise": "Elige una tarea pequeña que puedas hacer con alguien (cocinar, ordenar, organizar una idea) y propónselo. Toma un sorbo y di en voz baja: “Juntas llegamos más lejos y con más risas.”"
  },
  {
    "day": 329,
    "title": "evoca-TE",
    "teaName": "Infusión de recuerdos compartidos",
    "benefit": "Recordar a las personas que me acompañan este año me hace sentir parte de algo.",
    "lesson": "Este mes has mirado tus vínculos y tu comunidad. Evoca las caras, las voces y los gestos que han estado a tu lado: ¿quién te ha escuchado? ¿A quién has escuchado tú? ¿Qué lazo quieres cuidar más?",
    "exercise": "Recuerda a tres personas que han estado presentes este mes, de cerca o de lejos, y piensa qué les agradeces. Toma un sorbo y di en voz baja: “Soy parte de una red de afectos.”"
  },
  {
    "day": 330,
    "title": "felicita-TE",
    "teaName": "Infusión de abrazo colectivo",
    "benefit": "Me felicito por tender puentes y por dejar que otras personas lleguen a mí.",
    "lesson": "Has terminado el mes de los vínculos: ¡felicidades! Hoy toca un piropo para la persona que eres con las demás: la que escucha, la que se acerca, la que se deja querer.",
    "exercise": "Mírate en un espejo, o en tu imaginación, y dite un piropo sobre cómo eres con las personas que quieres. Guárdalo en el Piropero. Toma un sorbo y di en voz baja: “Me felicito por tender puentes y por dejar que lleguen a mí.”"
  },
  {
    "day": 331,
    "title": "ama-TE",
    "teaName": "Infusión de corazón abierto",
    "benefit": "Hoy empiezo a amarme tal como llego.",
    "lesson": "Amarte no es sentir mariposas todo el día: es tratarte con la misma ternura con que tratas a quien quieres. Hoy empiezas el último mes del año mirándote con ojos de amiga.",
    "exercise": "Pon la mano en el corazón y nota su latido durante cinco respiraciones. Imagina que saludas a la persona que más vas a ver en la vida. Toma un sorbo y di en voz baja: “Me quiero como soy y empiezo hoy.”"
  },
  {
    "day": 332,
    "title": "alienta-TE",
    "teaName": "Infusión de aliento propio",
    "benefit": "Mi aliento también es una manera de darme ánimo.",
    "lesson": "Aliento es aire y también ánimo, y no es casualidad. Cada vez que respiras, te dices sin palabras: sigue, que aquí estoy. Hoy lo haces con ganas.",
    "exercise": "Inspira por la nariz y, al soltar el aire, imagina que te dices ánimo al oído. Repite seis veces con la mano en el pecho. Toma un sorbo y di en voz baja: “Mi aire me da ánimo y yo lo recibo.”"
  },
  {
    "day": 333,
    "title": "enamora-TE",
    "teaName": "Infusión de telenovela romántica",
    "benefit": "Puedo enamorarme de mí con drama, humor y cariño.",
    "lesson": "Drama King se ha enamorado de su reflejo y jura que sin él la vida es un desierto. Lo dejamos suspirar con música de violines: enamorarte de ti con humor no hace daño a nadie.",
    "exercise": "Mírate en un espejo o en el cristal de una ventana, pon mirada de telenovela y dile a tu reflejo una frase romántica exagerada. Ríete. Toma un sorbo y di en voz baja: “Me enamoro de mí despacio, y con mucho humor.”"
  },
  {
    "day": 334,
    "title": "sienta-TE",
    "teaName": "Infusión de cojín en el suelo",
    "benefit": "Amarme no me pone por encima de nadie: me sienta a su lado.",
    "lesson": "Queen Zen ama tanto su propia aura que no ve a nadie más. Hoy la sentamos en el suelo, entre la gente, y descubre que amarse es más cómodo cuando no hay que mirar a todas desde arriba.",
    "exercise": "Siéntate en el suelo o en el borde de la silla, con las piernas como te sientas cómoda. Respira cinco veces notando que no hay ninguna escalera que subir. Toma un sorbo y di en voz baja: “Me quiero a ras de suelo, junto a todas.”"
  },
  {
    "day": 335,
    "title": "desfila-TE",
    "teaName": "Infusión de pasarela de salón",
    "benefit": "Camino por casa como quien se quiere de verdad.",
    "lesson": "Tu pasillo es una pasarela y tú, la modelo con más estilo de la comunidad de vecinas. No hace falta traje de gala: basta con caminar como quien se acaba de decir un piropo y se lo cree.",
    "exercise": "Desfila por la habitación con la espalda larga, la barbilla suave y una sonrisa de medio lado. Da una vuelta y saluda a un público imaginario. Toma un sorbo y di en voz baja: “Camino con gusto, porque me gusto.”"
  },
  {
    "day": 336,
    "title": "embellece-TE",
    "teaName": "Infusión de espejo con luz cálida",
    "benefit": "Me arreglo un poquito, no para otros, sino por mi misma.",
    "lesson": "Embellecerte puede ser tan simple como colocarte bien el cuello de la camisa o llevar tu color favorito. No es vanidad de Drama King ni postureo de Queen Zen: es un detalle de ti, para ti.",
    "exercise": "Elige un detalle pequeño que te guste de ti hoy: el pelo, una prenda, las manos. Dedícale un minuto de cuidado, sin prisa. Toma un sorbo y di en voz baja: “Me arreglo porque quiero, y me queda bonito.”"
  },
  {
    "day": 337,
    "title": "entreteje-TE",
    "teaName": "Infusión de hilos y ovillos",
    "benefit": "Mis dos voces se entretejen y forman mi propia tela.",
    "lesson": "Drama King pone el hilo negro, Queen Zen el dorado y tú tejes con los dos. Sin uno, el dibujo queda soso; sin el otro, nada brilla. Amarte es aceptar la tela entera, con sus nudos.",
    "exercise": "Mueve los dedos como si tejieras: un hilo oscuro, un hilo dorado y otro de tu color. Haz cinco pasadas lentas. Toma un sorbo y di en voz baja: “Tejo con todos mis hilos y la tela soy yo.”"
  },
  {
    "day": 338,
    "title": "admira-TE",
    "teaName": "Infusión de mirada de fiesta",
    "benefit": "Hoy admiro algo de mí que suelo pasar por alto.",
    "lesson": "Admiramos a medio mundo por cosas que nosotras hacemos cada día sin darnos cuenta: aguantar un mal día, reírnos, volver a empezar. Hoy te pones en la lista de gente admirable, entre las primeras.",
    "exercise": "Piensa en una cosa que has hecho este año y que admirarías en otra persona. Mírala unos segundos y deja que te alegre. Toma un sorbo y di en voz baja: “Admiro cómo he llegado hasta aquí.”"
  },
  {
    "day": 339,
    "title": "ronronea-TE",
    "teaName": "Infusión de gato junto al radiador",
    "benefit": "Mi respiración puede ronronear de puro gusto.",
    "lesson": "Cuando un gato está a gusto, ronronea sin darse cuenta ni pedir permiso. Tu respiración también puede sonar a satisfacción: lenta, grave y con un punto de zumbido. Hoy la dejas sonar.",
    "exercise": "Exhala haciendo un zumbido suave con la boca cerrada, como un gato contento, notando el cosquilleo en los labios. Repite cinco veces. Toma un sorbo y di en voz baja: “Ronroneo por dentro, porque estoy a gusto conmigo.”"
  },
  {
    "day": 340,
    "title": "coquetea-TE",
    "teaName": "Infusión de guiño y abanico",
    "benefit": "Coquetear conmigo también es una forma de quererme.",
    "lesson": "Drama King coge el abanico, entorna los ojos y le lanza guiños a su propio reflejo. Es ridículo y encantador a partes iguales. Hoy lo imitamos: un poco de coqueteo con una misma levanta el ánimo.",
    "exercise": "Frente al espejo, lanza un guiño exagerado, una sonrisa de abanico y un beso al aire a tu reflejo. Sin vergüenza ni público. Toma un sorbo y di en voz baja: “Me guiño un ojo y me río de gusto.”"
  },
  {
    "day": 341,
    "title": "descafeina-TE",
    "teaName": "Infusión sin cafeína espiritual",
    "benefit": "Puedo quererme sin tanta intensidad ni tanto mantra.",
    "lesson": "Queen Zen toma el amor propio con triple dosis: afirmaciones al amanecer, velas al mediodía y un diario de gratitud con caligrafía. Hoy lo pasamos a descafeinado: quererse puede ser tranquilo y sin florituras.",
    "exercise": "Haz como que viertes una gran dosis de intensidad en una taza y la cambias por agua tibia. Respira con calma. Toma un sorbo de tu infusión y di en voz baja: “Me quiero en versión suave y sin cafeína.”"
  },
  {
    "day": 342,
    "title": "choca-TE",
    "teaName": "Infusión de palmada en el aire",
    "benefit": "Hoy me choco los cinco por haber llegado hasta aquí.",
    "lesson": "Cuando una amiga lo logra, le chocas los cinco sin pensarlo. Hoy te toca a ti: una palmada contigo misma por todo lo que has hecho este año, tropiezos incluidos.",
    "exercise": "Choca la mano derecha contra la izquierda, como un cinco, con una sonrisa y un sonido seco y contento. Repite tres veces. Toma un sorbo y di en voz baja: “Chócala, que lo has hecho muy bien.”"
  },
  {
    "day": 343,
    "title": "sirve-TE",
    "teaName": "Infusión de bandeja con servilleta",
    "benefit": "Me sirvo algo rico con el mismo mimo que a una invitada.",
    "lesson": "A las visitas les pones la mejor taza, la servilleta bonita y un platito de galletas. Hoy la visita eres tú, y la anfitriona también. Sírvete algo rico y siéntate sin prisa.",
    "exercise": "Prepara tu infusión o un tentempié pequeño y colócalo en tu mejor taza o plato, con servilleta. Siéntate a saborear sin pantallas. Toma un sorbo y di en voz baja: “Hoy la invitada de honor soy yo.”"
  },
  {
    "day": 344,
    "title": "compagina-TE",
    "teaName": "Infusión de dos voces afinadas",
    "benefit": "Puedo compaginar mi drama y mi calma sin renunciar a ninguna.",
    "lesson": "Drama King pide que te quieras con fuegos artificiales; Queen Zen, con silencio y cojines. Tú compaginas: un poco de fiesta, un poco de calma y un piropo a media tarde.",
    "exercise": "Haz un gesto grande con los brazos, de fiesta, y otro pequeño con las manos juntas, de calma. Alterna tres veces y quédate en medio. Toma un sorbo y di en voz baja: “Me quiero con fiesta y con calma.”"
  },
  {
    "day": 345,
    "title": "refleja-TE",
    "teaName": "Infusión de espejo sin filtros",
    "benefit": "Hoy me miro al espejo y me caigo bien.",
    "lesson": "El espejo no sabe de caras de lunes ni de peinados rebeldes: solo te devuelve a quien eres. Hoy le pides una tregua con la crítica y lo dejas hacer su trabajo: mostrarte con cariño.",
    "exercise": "Mírate en un espejo un minuto, sin corregir nada. Encuentra una cosa que te caiga bien y dila en voz alta. Toma un sorbo y di en voz baja: “Aquí hay alguien que me cae muy bien.”"
  },
  {
    "day": 346,
    "title": "late-TE",
    "teaName": "Infusión de tambor con cariño",
    "benefit": "Siento mi latido y me recuerda que aquí estoy.",
    "lesson": "Tu corazón lleva toda la vida latiendo para ti sin pedir ni las gracias. Hoy lo escuchas a través de la respiración, como quien oye la lluvia en el tejado de casa.",
    "exercise": "Apoya dos dedos en la muñeca o una mano en el pecho y siente tu pulso. Respira cinco veces acompañando su ritmo. Toma un sorbo y di en voz baja: “Late por mí, y yo lo escucho con gratitud.”"
  },
  {
    "day": 347,
    "title": "solloza-TE",
    "teaName": "Infusión de lágrimas de risa",
    "benefit": "Puedo llorar de emoción y de risa a la vez.",
    "lesson": "Drama King sollozó cuando llegó la primavera y después sollozará porque se acaba el año. Es el mismo sollozo con distinto vestuario. Hoy lo acompañamos con pañuelo y sonrisa: emocionarse es de personas vivas.",
    "exercise": "Haz un sollozo exagerado, con hipo y todo, durante diez segundos, hasta que te salga la risa. Respira y seca una lágrima de mentira. Toma un sorbo y di en voz baja: “Me emociono y me río, y las dos cosas me valen.”"
  },
  {
    "day": 348,
    "title": "desalmidona-TE",
    "teaName": "Infusión de cuello sin almidón",
    "benefit": "Quererme no exige estar tiesa ni perfecta.",
    "lesson": "Queen Zen se ha almidonado tanto que no puede ni agacharse a recoger una pluma. Hoy la desalmidonamos con agua tibia y risas: querer también es poder doblarse, arrugarse y seguir siendo digna.",
    "exercise": "Ponte rígida como un palo, hombros y cara incluidos, cinco segundos. Después suelta todo y deja que el cuerpo se arrugue a gusto. Toma un sorbo y di en voz baja: “Me quiero blanda y arrugada, y sigo valiendo.”"
  },
  {
    "day": 349,
    "title": "florece-TE",
    "teaName": "Infusión de pétalos que se abren",
    "benefit": "Me abro como una flor, a mi ritmo y sin prisa.",
    "lesson": "Las flores no se esfuerzan: se abren cuando hay luz y calma. Tú tampoco tienes que forzarte: hoy te abres un poquito, con los brazos y con el pecho, hacia lo que te hace bien.",
    "exercise": "Junta las manos delante del pecho como un capullo y ábrelas despacio hacia arriba, como una flor al amanecer. Repite cuatro veces. Toma un sorbo y di en voz baja: “Me abro como una flor y sin pedir permiso.”"
  },
  {
    "day": 350,
    "title": "aromatiza-TE",
    "teaName": "Infusión de especias y recuerdos",
    "benefit": "Me regalo un aroma que me haga sentir querida.",
    "lesson": "Hay olores que abrazan: la canela, el pan tostado, la ropa limpia. Hoy eliges uno para ti y lo dejas flotar a tu alrededor, como un piropo que se huele.",
    "exercise": "Elige un aroma que te guste (la infusión, una fruta, el jabón) y respíralo con los ojos cerrados durante diez respiraciones. Toma un sorbo y di en voz baja: “Este olor me abraza, y me lo regalo.”"
  },
  {
    "day": 351,
    "title": "fusiona-TE",
    "teaName": "Infusión de dos mitades fundidas",
    "benefit": "Soy la mezcla de mi lado dramático y mi lado sereno.",
    "lesson": "Drama King y Queen Zen no son enemigos, son dos ingredientes. Fundidos, hacen una persona completa: con lágrima fácil y con calma, con risa escandalosa y con silencio, y con mucha miga.",
    "exercise": "Junta las palmas de las manos y frótalas, como fundiendo las dos voces en una sola. Nota el calor entre ellas. Respira cinco veces. Toma un sorbo y di en voz baja: “Soy mi drama y mi calma, todo junto.”"
  },
  {
    "day": 352,
    "title": "ojea-TE",
    "teaName": "Infusión de álbum de fotos",
    "benefit": "Echo un vistazo a mi año y encuentro mil motivos para quererme.",
    "lesson": "Pasa por tu año como por un álbum de fotos: sin detenerte en cada página, solo mirando de reojo los buenos ratos, las caras de risa y alguna cara de susto. Todo eso eres tú.",
    "exercise": "Cierra los ojos y ojea mentalmente cinco momentos del año, como fotos sueltas. Quédate con el que más te guste. Toma un sorbo y di en voz baja: “Este año tuvo mucho de mí, y me gusta.”"
  },
  {
    "day": 353,
    "title": "irradia-TE",
    "teaName": "Infusión de reyo de sol por dentro",
    "benefit": "Cada exhalación me deja un poco más cálida.",
    "lesson": "Cuando respiras con cariño, algo se calienta dentro y sale hacia fuera. Hoy lo imaginas como una bombilla pequeña: se enciende en el pecho y reparte luz por los hombros, los brazos y las manos.",
    "exercise": "Inspira y siente una luz pequeña en el pecho. Al exhalar, imagina que se reparte por los brazos y las manos. Repite seis veces. Toma un sorbo y di en voz baja: “Mi calor sale conmigo y llega a todas partes.”"
  },
  {
    "day": 354,
    "title": "declama-TE",
    "teaName": "Infusión de poema con melodrama",
    "benefit": "Puedo declamarme un piropo con voz de teatro.",
    "lesson": "Drama King sube a una silla y declama su piropo favorito con una mano en el pecho y otra en alto. Todo el mundo aplaude, aunque su público sea la nevera. Hoy lo imitamos: un buen piropo merece buena dicción.",
    "exercise": "Sube a una escalera imaginaria y declama en voz alta, con aire teatral, un piropo para ti. Hazlo con gestos grandes. Después ríete y respira. Toma un sorbo y di en voz baja: “Me lo digo en grande y me lo creo.”"
  },
  {
    "day": 355,
    "title": "descorcha-TE",
    "teaName": "Infusión de botella recién abierta",
    "benefit": "Puedo soltar el tapón y dejar salir lo que siento.",
    "lesson": "Queen Zen guarda sus emociones en una botella con corcho de mantra, y por eso a veces borbotea. Hoy la descorchamos con cuidado: sale una mezcla de risa, miedo y cariño. Todo cabe en la misma copa.",
    "exercise": "Haz como que descorchas una botella con la mano y suelta el aire con un pop suave. Repite tres veces, notando cómo sale lo que guardas. Toma un sorbo y di en voz baja: “Descorcho lo que siento, lo dejo salir y me hace bien.”"
  },
  {
    "day": 356,
    "title": "vuela-TE",
    "teaName": "Infusión de alas de papel",
    "benefit": "Con un gesto pequeño, me siento ligera y libre.",
    "lesson": "Cuando te quieres, el cuerpo pesa menos: los hombros bajan más, los pasos pesan menos y hasta las alas de papel encuentran su viento. Hoy lo pruebas con los brazos y con la imaginación.",
    "exercise": "Abre los brazos como alas, inspira y sube de puntillas despacio. Baja al exhalar. Repite seis veces. Toma un sorbo y di en voz baja: “Me siento ligera cuando me quiero, y vuelo un poquito.”"
  },
  {
    "day": 357,
    "title": "envuelve-TE",
    "teaName": "Infusión de manta y piropo",
    "benefit": "Me envuelvo en cariño como en una manta calentita.",
    "lesson": "Un piropo a tiempo abriga mejor que una manta. Hoy te lo envuelves tú: te echas una manta, o una bufanda, y te lees por dentro una lista de tus cosas bonitas.",
    "exercise": "Envuélvete los hombros con una manta o una bufanda y piensa en tres cosas bonitas de ti. Cuéntalas con los dedos, despacio. Toma un sorbo y di en voz baja: “Me envuelvo en cariño y me cuido con mucho mimo.”"
  },
  {
    "day": 358,
    "title": "amalgama-TE",
    "teaName": "Infusión de mesa con tres tazas",
    "benefit": "Entre Drama King y Queen Zen, me quedo con mi mezcla.",
    "lesson": "Última mesa del año con las tres: Drama King trae las servilletas con lágrimas, Queen Zen las velas y tú el pastel. Amalgamas lo mejor de cada una y te sientas en el centro, sin discutir con nadie.",
    "exercise": "Pon tres tazas en fila: una de Drama King, una de Queen Zen y, en medio, la tuya. Brinda con cada una y toma un sorbo de la tuya. Di en voz baja: “En mi mesa caben las tres, y presido con cariño.”"
  },
  {
    "day": 359,
    "title": "recorre-TE",
    "teaName": "Infusión de mapa del año",
    "benefit": "He recorrido el año con más cariño del que pensaba.",
    "lesson": "Este año has mirado, respirado, escuchado, aceptado, cuidado y puesto límites. Has reído, agradecido, perdonado, te has atrevido y has conectado. Mira cuánto has avanzado: ahora toca quererte con todo lo aprendido.",
    "exercise": "Recorre con los dedos doce pasos en el aire, uno por cada mes, y piensa una palabra bonita para cada uno. Toma un sorbo y di en voz baja: “He recorrido el año y me quedo con lo mejor de mí.”"
  },
  {
    "day": 360,
    "title": "corona-TE",
    "teaName": "Infusión de corona de flores",
    "benefit": "Hoy me corono de piropos y celebro mi año.",
    "lesson": "Final de un año de emociones. Ni Drama King ni Queen Zen se llevan la corona: es de papel y de flores, y es tuya. Hoy te coronas con un piropo, el más bonito que se te ocurra, y lo celebras con ganas.",
    "exercise": "Haz como si te pusieras una corona de flores. Piensa un piropo precioso para ti y dilo en voz alta con una sonrisa. Guárdalo en el Piropero de la app y toma un sorbo. Di en voz baja: “Me quiero, me celebro y me corono.”"
  },
  {
    "day": 361,
    "title": "sueña-TE",
    "teaName": "Infusión de almohada y estrellas",
    "benefit": "Me permito soñar en grande, sin pedir perdón.",
    "lesson": "Soñar no es escaparte de la realidad: es dibujar el mapa del año que viene con lápiz y sin goma. Drama King dirá que es imposible y Queen Zen que ya lo tienes; tú apuntas el sueño igualmente.",
    "exercise": "Cierra los ojos y deja que aparezca un deseo para el año que viene, aunque sea pequeño o loco. Dibújalo con el dedo en el aire. Toma un sorbo y di en voz baja: “Me permito soñar, y mis sueños son bienvenidos.”"
  },
  {
    "day": 362,
    "title": "vive-TE",
    "teaName": "Infusión de día vivido a bocados",
    "benefit": "Vivo este día con todos los sentidos y sin ensayo.",
    "lesson": "Este año has aprendido a mirar, respirar, escuchar y cuidarte. Hoy lo juntas todo y lo estrenas: vivir no es un ensayo general. Drama King ya ha reservado butaca y Queen Zen, esterilla; tú sal al escenario.",
    "exercise": "Elige una cosa sencilla de hoy, como beber, caminar o reír, y hazla con toda la atención, saboreándola durante un minuto. Toma un sorbo despacio y di en voz baja: “Estoy viva y este momento es mío.”"
  },
  {
    "day": 363,
    "title": "siente-TE",
    "teaName": "Infusión de emoción bien recibida",
    "benefit": "Siento lo que siento y le abro la puerta con cariño.",
    "lesson": "Sentir incluye lo bonito y lo incómodo, y este año has aprendido a recibir las dos cosas sin juzgarte. Hoy dejas que cada emoción pase por tu salón y se siente un rato en el sofá.",
    "exercise": "Nota qué sientes ahora mismo y ponle nombre en voz baja, sin cambiarlo. Pon una mano en el pecho y respira tres veces. Toma un sorbo y di en voz baja: “Siento lo que siento y me acompaño con cariño.”"
  },
  {
    "day": 364,
    "title": "empodera-TE",
    "teaName": "Infusión de pies firmes y voz clara",
    "benefit": "Tengo más fuerza de la que pensaba y la uso con cariño.",
    "lesson": "Empoderarte no es gritar más ni mirar a todas por encima, como a veces hace Queen Zen. Es saber que decides tú, con tu voz y tus límites, y que puedes hacerlo con ternura.",
    "exercise": "Ponte de pie, planta bien los pies y abre el pecho. Di en voz alta una cosa que has logrado este año, sin quitarle importancia. Toma un sorbo y di en voz baja: “Tengo voz, tengo fuerza y las uso con cariño.”"
  },
  {
    "day": 365,
    "title": "libera-TE",
    "teaName": "Infusión de globos que se van",
    "benefit": "Suelto el año con gratitud y me quedo con lo aprendido.",
    "lesson": "Último día del año de emociones. Liberarte es soltar lo que ya no necesitas, sin pelear: las culpas, las prisas, algún papel de Drama King y alguna corona de Queen Zen. Te quedas con lo mejor de ti.",
    "exercise": "Abre las manos como soltando un globo y míralo subir con los ojos. Inspira y suelta el aire despacio. Guarda un piropo para ti en el Piropero de la app y toma un sorbo. Di en voz baja: “Me libero con cariño y empiezo de nuevo.”"
  }
];