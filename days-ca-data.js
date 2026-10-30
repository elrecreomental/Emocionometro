// Datos de los 365 días
const DAYS_CA = [
  {
    "day": 1,
    "title": "qüestionar-TE",
    "teaName": "Infusió de claredat i discerniment",
    "benefit": "Res del que veig en aquesta habitació no té un significat real per si mateix.",
    "lesson": "Imagina que la teva ment és com una pissarra plena de dibuixos antics que vas fer fa temps. Aquest exercici t'ensenya a netejar la pissarra per mirar tot el que t'envolta com si fos la primera vegada, sense posar-li etiquetes de bo o dolent.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Qüestiono els meus pensaments avui. Jo trio mirar aquest moment amb absoluta neutralitat.\""
  },
  {
    "day": 2,
    "title": "reinterpretar-TE",
    "teaName": "Infusió de sobirania interior",
    "benefit": "Tot el que veig en aquesta habitació significa per a mi exactament el que jo he volgut que signifiqui.",
    "lesson": "És com quan ets al teatre i decideixes quin vestit li poses al teu personatge. Aquí descobreixes que les coses no et fan enfadar per si soles, sinó que tu mateix decideixes quin significat les hi dones al teu cap.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Reinterpreto el meu món avui. Jo trio donar-li un significat de pau.\""
  },
  {
    "day": 3,
    "title": "buidar-TE",
    "teaName": "Infusió d'alleujament i acceptació",
    "benefit": "No entenc res del que veig en aquesta habitació, i això està bé!",
    "lesson": "És com quan et treus una motxila molt pesada que portaves a l'esquena. Admetre que no ho saps tot et dóna una pau enorme i deixa espai perquè les coses bones passin soles.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em buido d'expectatives avui. Jo trio acceptar aquest moment tal com és.\""
  },
  {
    "day": 4,
    "title": "alliberar-TE",
    "teaName": "Infusió de lleugeresa mental",
    "benefit": "Aquests pensaments que tinc ara mateix no signifiquen res d'important.",
    "lesson": "De vegades el cap ens dóna voltes a coses que no serveixen per a res, com núvols passatgers. Aquesta infusió t'ajuda a deixar anar aquests pensaments pesats perquè puguis volar lleuger.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Allibero la meva ment avui. Jo trio deixar anar els pensaments que no em donen pau.\""
  },
  {
    "day": 5,
    "title": "indagar-TE",
    "teaName": "Infusió de profunditat i autoconeixement",
    "benefit": "Mai em sento malament o enutjada per la raó que crec.",
    "lesson": "És com mirar dins de la teva habitació secreta amb molta cura i molta tendresa, sense jutjar-te, per entendre per què estàs trista o enfadada i abraçar-ho amb carinyo.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Indago en el meu interior avui. Jo trio mirar els meus sentiments amb una perspectiva amable.\""
  },
  {
    "day": 6,
    "title": "desenganyar-TE",
    "teaName": "Infusió de despertar conscient",
    "benefit": "Em sento malament perquè estic veient coses en la meva ment que no són reals.",
    "lesson": "Imagina que portes unes ulleres fosques i veus monstres que no existeixen. Aquest joc t'ajuda a treure't les ulleres per adonar-te que tot està bé i que només eren històries de la teva imaginació.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em desenganyo dels temors avui. Jo trio veure la realitat amb claredat.\""
  },
  {
    "day": 7,
    "title": "presentar-TE",
    "teaName": "Infusió de presència en l'ara",
    "benefit": "Quan miro les coses, només estic veient records del passat.",
    "lesson": "El passat ja va passar i ja no hi és; és com una pel·lícula que ja es va acabar. Aquest exercici et recorda que la teva vida real passa aquí i ara mateix, en aquest segon.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em faig present avui. Jo trio deixar anar el passat per a viure l'ara.\""
  },
  {
    "day": 8,
    "title": "enfocar-TE",
    "teaName": "Infusió d'atenció plena",
    "benefit": "La meva ment està tan ocupada pensant en el passat que em perdo l'ara.",
    "lesson": "Quan jugues a un joc, has de mirar la pantalla i no distreure't. Això és igual: agafes el teu pensament i el mous cap aquí, cap a aquest instant en què tot està tranquil i segur.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'enfoco en el present avui. Jo trio habitar aquest precís instant.\""
  },
  {
    "day": 9,
    "title": "despertar-TE",
    "teaName": "Infusió d'humilitat perceptiva",
    "benefit": "No soc capaç de veure les coses tal com són en aquest precís instant.",
    "lesson": "És com tancar els ulls de la ràbia i obrir els ulls del cor, aquells que només veuen amics, llum i coses boniques al teu voltant.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Desperto a una nova visió avui. Jo trio mirar amb els ulls del cor.\""
  },
  {
    "day": 10,
    "title": "silenciar-TE",
    "teaName": "Infusió de calma mental",
    "benefit": "Els meus pensaments d'ara mateix no tenen cap valor real.",
    "lesson": "Imagina que al teu cap hi ha molta gent cridant alhora. Aquest exercici és com prémer un botó de silenci màgic per escoltar el bonic que sona el silenci per dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Silencio la meva ment avui. Jo trio escoltar la pau interior.\""
  },
  {
    "day": 11,
    "title": "desfer-TE",
    "teaName": "Infusió de purificació emocional",
    "benefit": "Els pensaments buits que tinc només em mostren coses que no són veritat.",
    "lesson": "Igual que quan ordenes el teu calaix i treus allò que està trencat, aquí neteges el cap d'idees lletjes per quedar-te només amb el que et fa feliç.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Desfaig els embolics avui. Jo trio netejar el meu espai mental.\""
  },
  {
    "day": 12,
    "title": "alliberar-TE",
    "teaName": "Infusió de compassió profunda",
    "benefit": "Em sento malament perquè miro al meu voltant i veig un món buit de sentit.",
    "lesson": "És transformar un lloc que et semblava avorrit o gris en un parc de diversions ple de sentit i alegria només canviant la teva manera de mirar-lo.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Allibero la meva percepció avui. Jo trio trobar propòsit en el meu entorn.\""
  },
  {
    "day": 13,
    "title": "il·luminar-TE",
    "teaName": "Infusió de calidesa i entesa",
    "benefit": "Un món sense amor ni significat només ens fa sentir por.",
    "lesson": "Quan tenim por, tot es veu fosc i irreal. Aquesta infusió encén una llanterna de llum càlida dins teu perquè tot s'il·lumini i torni la calidesa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'il·lumino per dins avui. Jo trio dissipar la por amb calidesa.\""
  },
  {
    "day": 14,
    "title": "confiar-TE",
    "teaName": "Infusió de certesa absoluta",
    "benefit": "La gran energia creadora de l'univers mai no va crear un món sense sentit.",
    "lesson": "És saber que el món no està fet per patir, sinó que tot té un ordre amable i segur, com un gran matalàs on ets lliure de descansar sense por.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Confio en la vida avui. Jo trio descansar en un ordre segur.\""
  },
  {
    "day": 15,
    "title": "desvincular-TE",
    "teaName": "Infusió de lleugeresa mental",
    "benefit": "Els pensaments que tinc són només dibuixos i històries que he inventat al meu cap.",
    "lesson": "Quan inventes una història de por amb el coixí de casa, saps que no és veritat. Això serveix per adonar-te que els teus drames són només dibuixos mentals, acceptar-ho i deixar-los anar t'alleugera.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em desvinculo de les històries avui. Jo trio deixar anar els drames mentals.\""
  },
  {
    "day": 16,
    "title": "neutralitzar-TE",
    "teaName": "Infusió d'equilibri i equànimitat",
    "benefit": "No existeix cap pensament que no importi o que sigui totalment neutre.",
    "lesson": "Cada pensament que tens és com una llavor que plantes al jardí del teu cap. Aquest exercici t'ajuda a vigilar quines llavors plantes perquè només creixin flors de pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Neutralitzo el judici avui. Jo trio cuidar la qualitat dels meus pensaments.\""
  },
  {
    "day": 17,
    "title": "equilibrar-TE",
    "teaName": "Infusió d'aprenentatge conscient",
    "benefit": "No hi ha cap cosa al meu voltant que sigui neutral; tot em ensenya alguna cosa.",
    "lesson": "Imagina que cada personatge o cosa amb la qual et trobes avui et porta un regal d'aprenentatge per fer-te més savi i feliç. Tot t'ensenya coses boniques. Busca-les en cada situació",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'equilibro avui. Jo trio aprendre lliçons de pau del meu entorn.\""
  },
  {
    "day": 18,
    "title": "responsabilitzar-TE",
    "teaName": "Infusió de connexió col·lectiva",
    "benefit": "No estic sol; el que jo veig i sento també afecta els altres.",
    "lesson": "El que sents per dins viatja com onades invisibles cap als teus amics i familiars. Si estàs en pau, imantes a tothom amb la teva alegria.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em responsabilitzo de la meva energia avui. Jo trio sumar benestar als altres.\""
  },
  {
    "day": 19,
    "title": "reconèixer-TE",
    "teaName": "Infusió de ressonància empàtica",
    "benefit": "Els meus pensaments no es queden només en mi, sinó que també arriben als qui m'envolten.",
    "lesson": "Els teus pensaments amables surten de tu com coloms missatgers i van a abraçar a la gent que t'envolta perquè se sentin feliços i segurs.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em reconec en connexió avui. Jo trio enviar pensaments amables al meu voltant.\""
  },
  {
    "day": 20,
    "title": "decidir-TE",
    "teaName": "Infusió de determinació lluminosa",
    "benefit": "Estic totalment decidit a obrir els ulls i veure de debò!",
    "lesson": "És com quan dius: \"Avui sí que acabaré aquest treball!\" Prens la decisió valentíssima de deixar de tancar els ulls i decideixes veure la realitat amb total claredat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Decideixo veure amb claredat avui. Jo trio obrir els ulls a la veritat.\""
  },
  {
    "day": 21,
    "title": "transformar-TE",
    "teaName": "Infusió de perspectiva renovada",
    "benefit": "Estic decidit a mirar totes les coses d'una manera bona i diferent.",
    "lesson": "És com pintar de colors brillants i alegres un dibuix que abans es veia apagat. Tu decideixes trobar un detall bonic i especial a tot el que mires.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Transformo la meva mirada avui. Jo trio veure el que es bonic en cada detall.\""
  },
  {
    "day": 22,
    "title": "deixar-TE",
    "teaName": "Infusió de llibertat interior",
    "benefit": "A vegades, el que veig sembla una manera de tornar un cop o venjar-me.",
    "lesson": "Quan algú et diu alguna cosa lletja, et ve a sobre la ràbia de defensar-te. Aquest exercici diu: \"No vull barallar-me, prefereixo abaixar les armes i triar la pau.\"",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Deixo anar les ganes de defensar-me avui. Jo trio la pau abans que la baralla.\""
  },
  {
    "day": 23,
    "title": "pacificar-TE",
    "teaName": "Infusió d'equànimitat",
    "benefit": "Puc ser lliure del món que veig si decideixo deixar anar i oblidar els pensaments de baralla.",
    "lesson": "És com treure les mans de la catana quan jugues a barallar-te, respirar fons i adonar-te que el món pot ser un lloc tranquil si tu vols.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em pacifico per dins avui. Jo trio deixar anar els pensaments de lluita.\""
  },
  {
    "day": 24,
    "title": "protegir-TE",
    "teaName": "Infusió de confiança essencial",
    "benefit": "No sé què és el que de debò em fa bé.",
    "lesson": "És com deixar-te caure en braços d'algú que t'estima moltíssim sabent que no et passarà res dolent. Descanses perquè sents que el bé et cuida.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em protegeixo en la confiança avui. Jo trio descansar sabent que el bé em guia.\""
  },
  {
    "day": 25,
    "title": "lliurar-TE",
    "teaName": "Infusió d'obertura i humilitat",
    "benefit": "No tinc ni idea de per a què serveixen realment les coses que m'envolten.",
    "lesson": "En lloc de voler manar en tot com un capritxós, deixes anar el control i permets que la vida et porti regals i sorpreses meravelloses.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Lliuro les meves expectatives avui. Jo trio deixar que la vida em sorprengui amb benestar.\""
  },
  {
    "day": 26,
    "title": "recordar-TE",
    "teaName": "Infusió de protecció de la pau",
    "benefit": "Els meus pensaments d'atac i discòrdia l'únic que fan és fer mal a la meva pau interior.",
    "lesson": "Si ets enfurismada amb algú, a qui fas mal primer és a tu mateixa a qui has fet mal, perquè perds el somriure. Aquest joc et recorda que cuidar la teva pau és el millor regal.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Recordo cuidar la meva pau avui. Jo trio no fer-me mal amb discòrdies.\""
  },
  {
    "day": 27,
    "title": "disposar-TE",
    "teaName": "Infusió d'intenció genuïna",
    "benefit": "Per sobre de qualsevol altra cosa, el que més vull és veure la veritat!",
    "lesson": "És com dir: \"No m'importa qui té raó en la baralla, el que més vull al món és veure clar i estar en pau.\" Poses la claredat com el teu tresor favorit.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em disposo a veure la veritat avui. Jo trio prioritzar la claredat en la meva ment.\""
  },
  {
    "day": 28,
    "title": "transformar-TE",
    "teaName": "Infusió d'obertura afectiva",
    "benefit": "Per sobre de tot, vull aprendre a veure les coses amb amor.",
    "lesson": "Es tracta d'agafar cada pensament que tens i posar-li un llaç de dolçor i afecte, com si abracessis les teves pròpies idees.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Transformo la meva actitud avui. Jo trio envoltar els meus pensaments en afecte.\""
  },
  {
    "day": 29,
    "title": "il·luminar-TE",
    "teaName": "Infusió de presència integradora",
    "benefit": "La força de l'amor universal està present en tot el que els meus ulls veuen.",
    "lesson": "És com descobrir petites espurnes de foc magíc d'alegria amagades darrere de les coses de cada dia. Tot brilla si decideixes mirar-ho amb afecte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Il·lumino la meva mirada avui. Jo trio veure pampallugues d'harmonia al meu voltant.\""
  },
  {
    "day": 30,
    "title": "reconciliar-TE",
    "teaName": "Infusió de coherència interna",
    "benefit": "L'amor i la bondad estan en tot el que veig perquè també viuen dins del meu cor.",
    "lesson": "És un joc de miralls: la pau que sents a dintre teu és exactament la mateixa pau que reflecteixes a fora cap a tothom. Tot encaixa!",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em reconcilio amb mi mateixa avui. Jo trio reflectir a fora la pau que sento a dins.\""
  },
  {
    "day": 31,
    "title": "empoderar-TE",
    "teaName": "Infusió de fortalesa i sobirania",
    "benefit": "No soc una víctima indefensa del món que m'envolta.",
    "lesson": "Et recorda que tu portes el timó del vaixell de les teves emocions. Ningú pot obligar-te a estar trista si tu decideixes agafar el control i estar tranquil·la.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'empodero avui. Jo trio assumir el timó de la meva tranquil·litat.\""
  },
  {
    "day": 32,
    "title": "inventar-TE",
    "teaName": "Infusió d'auto-cocreació",
    "benefit": "Tot aquest món que veig l'he construït jo mateixa en la meva imaginació.",
    "lesson": "Igual que quan jugues amb fang i crees uan figura fantàstica, aquí reconeixes que tu imagines i construeixes el teu propi ambient de benestar.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Reconec la meva creativitat avui. Jo trio imaginar un entorn ple de benestar.\""
  },
  {
    "day": 33,
    "title": "reinventar-TE",
    "teaName": "Infusió de creativitat amable",
    "benefit": "Sempre hi ha una forma molt més bonica i amable de mirar el món.",
    "lesson": "Davant d'un problema difícil, en lloc d'angoixar-te, inventes una manera superamable i divertida de resoldre'l amb un somriure.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em reinvento avui. Jo trio buscar la perspectiva més amable davant de qualsevol repte.\""
  },
  {
    "day": 34,
    "title": "asossegar-TE",
    "teaName": "Infusió de sosegat profund",
    "benefit": "Podria triar veure pau i tranquil·litat en lloc d'enradament.",
    "lesson": "Quan notes que el cor et va molt ràpid per la ràbia, t'atures, respires ben fons tres vegades i tries la calma en un segon.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'asossego avui. Jo trio respirar pregonament i triar la calma.\""
  },
  {
    "day": 35,
    "title": "valorar-TE",
    "teaName": "Infusió de valor intrínsec",
    "benefit": "La meva ment és una espurna bonica que forma part de la gran Ment de l'univers. Soc un ésser ple de llum i bondat!",
    "lesson": "És recordar que ets una persona súper especial, feta de llum i de molta bondat. T'aprecies tant que no deixes que res t'apagui la lluentor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em valoro avui. Jo trio reconèixer la llum i la dignitat que habiten en mi.\""
  },
  {
    "day": 36,
    "title": "beneir-TE",
    "teaName": "Infusió d'irradiació benèvola",
    "benefit": "La meva llum i la meva bondat abracen i acompanyen tot el que els meus ulls arriben a veure.",
    "lesson": "És com llançar pols magica d'estrelles i bons desitjos des del teu cor cap a tothom qui passa pel teu costat. Que tots siguin feliços!",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Beneeixo el meu entorn avui. Jo trio enviar bons desitjos a tot el que miro.\""
  },
  {
    "day": 37,
    "title": "expandir-TE",
    "teaName": "Infusió de generositat afectiva",
    "benefit": "La meva bondat i el meu bon amor beneeixen a tot el món.",
    "lesson": "El teu benestar és tan gran que no cap només dins teu; surt a raig per abraçar i fer feliç tot el planeta Terra.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Expandeixo la meva bondat avui. Jo trio compartir el meu benestar amb el món.\""
  },
  {
    "day": 38,
    "title": "unir-TE",
    "teaName": "Infusió de potencial conscient",
    "benefit": "No hi ha res de bo que la meva bondat no sigui capaç d'aconseguir.",
    "lesson": "És confiar que fer el bé té un superpoder gegantí. No hi ha cap tristesa que la teva bondat no pugui ajudar a arreglar.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'uneixo al poder del bé avui. Jo trio confiar en el que la meva bondat pot aconseguir.\""
  },
  {
    "day": 39,
    "title": "salvar-TE",
    "teaName": "Infusió d'estabilitat genuïna",
    "benefit": "Ser una persona bondadosa i plena de llum és el que em porta la veritable pau.",
    "lesson": "Quan sents que tot va malament, et refugies dins de la teva bondat com si fos una tenda de campanya segura i acollidora on res ni ningú et pot fer mal.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em salvo del conflicte avui. Jo trio la bondat com el meu refugi.\""
  },
  {
    "day": 40,
    "title": "acceptar-TE",
    "teaName": "Infusió de pertinença essencial",
    "benefit": "Soc una benedicció perquè sumo part de la gran família de l'energia creadora.",
    "lesson": "És saber que formes part d'una gran família universal on tothom t'estima, ets important i estàs totalment segur i protegit.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'accepto avui. Jo trio sentir-me part d'un entorn segur i lluminós.\""
  },
  {
    "day": 41,
    "title": "acompanyar-TE",
    "teaName": "Infusió de suport intern",
    "benefit": "La força del bé m'acompanya i camina amb mi a on sigui que vagi.",
    "lesson": "És caminar pel carrer sentint que portes de la mà un amic invisible i boníssim que et dóna suport i pau a cada pas que fas.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'acompanyo directament amb confiança avui. Jo trio sentir el suport de la pau en els meus passos.\""
  },
  {
    "day": 42,
    "title": "enfortir-TE",
    "teaName": "Infusió de fortalesa interior",
    "benefit": "L'energia de l'amor és la meva gran força i el meu superpoder. Veure amb bondat és el seu millor regal per a mi.",
    "lesson": "El teu veritable superpoder no és ser el més fort físicament, sinó tenir un cor tan bondadós que res et pot robar la pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'enforteixo avui. Jo trio usar la bondat com la meva major fortalesa.\""
  },
  {
    "day": 43,
    "title": "arrelar-TE",
    "teaName": "Infusió d'arrelament profund",
    "benefit": "La bondat és la meva font d'origen; no puc veure res separat d'ella.",
    "lesson": "Imagina que ets un arbre fort amb arrels profundes que neixen directament de la pau. Ningú et pot arrencar perquè saps d'on vens.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'arrelo en la calma avui. Jo trio recordar que vinc de la pau.\""
  },
  {
    "day": 44,
    "title": "vincular-TE",
    "teaName": "Infusió de claredat vinculant",
    "benefit": "Aquesta mateixa bondat és la llum brillant que em permet veure amb claredat.",
    "lesson": "És rentar la finestra del teu cap perquè no quedi cap taca. Així pots veure-ho tot net, clar i brillant com un dia de sol.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em vinculo a la llum avui. Jo trio veure-ho tot amb absoluta claredat.\""
  },
  {
    "day": 45,
    "title": "inspirar-TE",
    "teaName": "Infusió d'inspiració conscient",
    "benefit": "La gran ment de l'univers és la forma en la qual aprenc a pensar amb amor.",
    "lesson": "És connectar amb idees boniques i netes, deixant que el teu cap funcioni amb molta serenitat i afecte per a tot el que fas.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'inspiro en la pau avui. Jo trio pensar amb serenitat i afecte.\""
  },
  {
    "day": 46,
    "title": "perdonar-TE",
    "teaName": "Infusió de perdó alliberador",
    "benefit": "L'amor de l'univers és el lloc segur on aprenc a perdonar de debò.",
    "lesson": "És com esborrar amb una goma d'esborrar tots els errors passats i dir-te: \"Ja està, tot perdonat.\" Així et mous amb un cor lliure i segur.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em perdono avui. Jo trio deixar anar culpes i habitar un espai segur.\""
  },
  {
    "day": 47,
    "title": "refugiar-TE",
    "teaName": "Infusió de abrigall incommovible",
    "benefit": "Aquesta gran força és el meu refugi més segur en el qual confio plenament.",
    "lesson": "És com ficar-te sota un llit de mantes calentones quan a fora fa fred. Un lloc de seguretat absoluta on descases sense preocupacions.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em refugio en la calma avui. Jo trio descansar en una seguretat absoluta.\""
  },
  {
    "day": 48,
    "title": "tranquil·litzar-TE",
    "teaName": "Infusió de sosegat profund",
    "benefit": "No hi ha res en aquest món pel qual hàgim de sentir por.",
    "lesson": "Quan sentis un petit ensurt o por, dona-ls un cop de peu amb una respiració profunda i  pensaments bonics de pau fins que desapareix del tot.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em tranquil·litzo avui. Jo trio dissoldre la por respirant amb pau.\""
  },
  {
    "day": 49,
    "title": "escoltar-TE",
    "teaName": "Infusió d'escolta atenta",
    "benefit": "La veu de l'amor i de la intuïció em parla suaument durant tot el dia.",
    "lesson": "És tancar els ulls un moment per escoltar aquella veueta interior que et diu amb molta dolçor que tot està bé i que estàs segur.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Escolto el meu interior avui. Jo trio atendre la veu suau de la pau.\""
  },
  {
    "day": 50,
    "title": "nodrir-TE",
    "teaName": "Infusió de nutrició afectiva",
    "benefit": "L'amor que ens cuida és l'aliment diari del meu cor.",
    "lesson": "És com donar-te un abraçada calenteta per dins cada dia, cuidant el teu cor i el teu benestar perquè et sentis feliç i molt estimada.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em nodreixo de pau avui. Jo trio alimentar el meu cor amb serenitat.\""
  },
  {
    "day": 51,
    "title": "relaxar-TE",
    "teaName": "Infusió de relaxació conscient",
    "benefit": "Tot el que veig i penso: Avui recordo que les coses de la meva habitació i els meus pensaments no em causen malestar per si sols, sinó pel valor que jo els dono.",
    "lesson": "T'ajuda a treure la tensió de les espatlles com si et treus una motxilla pesada, recordant que les coses no et fan enfadar soles, sinó pel valor que els dones.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em relaxo avui. Jo trio no donar valor al malestar i descansar.\""
  },
  {
    "day": 52,
    "title": "actualitzar-TE",
    "teaName": "Infusion d'actualització present",
    "benefit": "Els meus pensaments del passat: Aprenc que moltes vegades m'enfado per coses del passat que ja no són aquí, així que trio enfocar-me en el present.",
    "lesson": "És com netejar la pissarra del cap per oblidar els problemes d'ahir i posar tota la teva energia a gaudir d'aquest moment present.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Actualitzo la meva ment avui. Jo trio deixar anar el passat i viure el present.\""
  },
  {
    "day": 53,
    "title": "compren-TE",
    "teaName": "Infusió de comprensió integradora",
    "benefit": "Un món ple d'amor: Entenc que un món sense sentit fa por, però la gran energia creadora només va fer coses plenes d'amor i propòsit.",
    "lesson": "T'ensenya a mirar amb molta amabilitat allò que no coneixes, perdent la por al futur i descobrint que tot ens porta un bon aprenentatge.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Comprenc amb amor avui. Jo trio veure propòsit en cada aprenentatge.\""
  },
  {
    "day": 54,
    "title": "alinear-TE",
    "teaName": "Infusió d'alineació armònica",
    "benefit": "Decideixo veure la llum: M'adono que tot el que penso i veig influeix en els altres, per això decideixo obrir bé els ulls i mirar amb amor.",
    "lesson": "És adonar-te que quan penses coses boniques i amables, tot el teu voltant es contagia d'aquesta mateixa alegria i pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Alineo la meva ment avui. Jo trio influir amb pau en el meu entorn.\""
  },
  {
    "day": 55,
    "title": "harmonitzar-TE",
    "teaName": "Infusió de concòrdia profunda",
    "benefit": "Triar la pau i deixar anar baralles: Deixo de banda els pensaments d'enuig o venjança per a sentir la veritable pau al meu cor.",
    "lesson": "Serveix per deixar anar la ràbia i les ganes de jutjar els altres, triant sempre portar un somriure de pau dins del cor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Harmonitzo el meu interior avui. Jo trio deixar anar tota baralla per a trobar pau.\""
  },
  {
    "day": 56,
    "title": "il·usionar-TE",
    "teaName": "Infusió de percepció lúcida",
    "benefit": "Veure amb els ulls de l'amor: Aprenc que la força de l'amor és en tot el que miro perquè viu dins de la meva ment.",
    "lesson": "És com portar unes ulleres màgiques que et fan veure que l'amor i la bellesa estan amagades dins de la teva pròpia ment i en tot el que mires.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Il·lusiono la meva mirada avui. Jo trio veure la bellesa que habita a la meva ment.\""
  },
  {
    "day": 57,
    "title": "projectar-TE",
    "teaName": "Infusió de projecció lluminosa",
    "benefit": "La meva ment és part de la gran Ment: No soc una víctima del món, puc triar veure la pau perquè soc una espurna de llum molt especial.",
    "lesson": "Et recorda que tu no ets víctima de res ni de ningú, sinó que pots triar encendre la teva pròpia espurna de llum per regalar pau al món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Projecto la meva llum avui. Jo trio ser font de pau per al meu entorn.\""
  },
  {
    "day": 58,
    "title": "compadir-TE",
    "teaName": "Infusió de compassió solidària",
    "benefit": "Soc un ésser ple de bondat i pau: La meva llum interior ajuda i acompanyar a tots els que m'envolten, portant-me una enorme alegria.",
    "lesson": "És saber que la teva bondat és tan radiant que ajuda i acompanya els teus amics i familiars, omplint-ho tot de molta alegria.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em compadeixo amb amor avui. Jo trio acompanyar als altres des de l'alegria.\""
  },
  {
    "day": 59,
    "title": "agermanar-TE",
    "teaName": "Infusió de fraternitat essencial",
    "benefit": "La força de l'amor m'acompanya sempre: L'energia del bé camina amb mi a tot arreu, donant-me la claredat per a pensar amb afecte.",
    "lesson": "És sentir que la força del bé camina sempre de la mà amb tu, donant-te molta claredat i afecte a cada pas que fas.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'agermano en la pau avui. Jo trio caminar sentint l'afecte al meu costat.\""
  },
  {
    "day": 60,
    "title": "sintonitzar-TE",
    "teaName": "Infusió de sintonia subtil",
    "benefit": "L'amor és el meu major refugi i seguretat: Confio en la força que em protegeix i em parla a l'oïda, perquè sé que amb ella no hi ha res a témer.",
    "lesson": "T'ajuda a confiar en un escut invisible d'amor que et cuida i et parla a l'oïda recordant-te que no has de témer res.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Sintonitzo amb el meu refugi avui. Jo trio confiar en la força que em cuida.\""
  },
  {
    "day": 61,
    "title": "brillar-TE",
    "teaName": "Infusió d'irradiació brillant",
    "benefit": "Perdonar i deixar anar els enuigs és el meu gran superpoder per ser una llum.",
    "lesson": "És el teu superpoder secret: quan perds la ràbia i perdones, la teva llum brilla amb molta més força i alegria.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Brillo amb llum pròpia avui. Jo trio perdonar com el meu major superpoder.\""
  },
  {
    "day": 62,
    "title": "consentir-TE",
    "teaName": "Infusió de presència conscient",
    "benefit": "La llum que porto a dins ajuda que tothom trobi pau a través del meu perdó.",
    "lesson": "És deixar que la suavitat del teu cor ajudi a altres persones a trobar la calma gràcies al teu perdó i a la teva comprensió.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em consento en calma avui. Jo trio portar pau a través de la comprensió.\""
  },
  {
    "day": 63,
    "title": "mimar-TE",
    "teaName": "Infusió de mim essencial",
    "benefit": "Vull recordar-me sempre de quina és la meva hermosa missió.",
    "lesson": "Serveix per recordar sempre la teva missió més bonica: portar pau, tendresa i alegria allà on vagis.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em permeto la tranquil·litat avui. Jo trio recordar la meva missió de donar pau.\""
  },
  {
    "day": 64,
    "title": "abraçar-TE",
    "teaName": "Infusió d'abraçada integradora",
    "benefit": "La meva única missió d'amor és la que la gran energia del bé em va regalar.",
    "lesson": "És recordar que el millor regal que tens és compartir el benestar i fer el bé a tot el món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Abraço el meu propòsit avui. Jo trio complir la meva missió de benestar.\""
  },
  {
    "day": 65,
    "title": "valorar-TE",
    "teaName": "Infusió de valoració equilibrada",
    "benefit": "Fer el bé i sentir-me feliç són exactament la mateixa cosa.",
    "lesson": "T'ensenya que fer coses bones pels demés i sentir-te feliç per dins són exactament la mateixa cosa meravellosa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Valoro les meves accions avui. Jo trio saber que fer el bé em fa feliç.\""
  },
  {
    "day": 66,
    "title": "celebrar-TE",
    "teaName": "Infusió de celebració armònica",
    "benefit": "La força de l'amor em va crear a la seva mateixa imatge i semblança.",
    "lesson": "És una festa per recordar que estàs creat amb la mateixa alegria, bondat i llum que tot allò bonic del món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Celebro la meva essència avui. Jo trio reconèixer el benestar que em va crear.\""
  },
  {
    "day": 67,
    "title": "rendir-TE",
    "teaName": "Infusió de cessació de resistència",
    "benefit": "L'amor veritable mai guarda rancor ni s'enutja per sempre.",
    "lesson": "És com estirar-te en un prat verd i relaxar-te, sabent que l'amor autèntic mai s'enfada ni guarda rancor per sempre.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em rendeixo a la pau avui. Jo trio deixar anar tot rancor i descansar.\""
  },
  {
    "day": 68,
    "title": "entusiasmar-TE",
    "teaName": "Infusió d'entusiasme serè",
    "benefit": "Els enuigs i rancors només tapen la llum bonica que tinc a dins.",
    "lesson": "T'ajuda a veure que els enuigs són només com núvols grisos que tapen temporalment la llum preciosa que portes a dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'entusiasma la llum avui. Jo trio desbrossar la meva lluentor interior.\""
  },
  {
    "day": 69,
    "title": "apassionar-TE",
    "teaName": "Infusió de passió constructiva",
    "benefit": "Tot el que necessito per a sentir-me bé i en pau surt del meu propi cor.",
    "lesson": "És descobrir que no necessites buscar res a fora: tot el que et fa sentir segur, feliç i en pau ja viu dins del teu cor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'apassiona el benestar avui. Jo trio buscar la pau al meu interior.\""
  },
  {
    "day": 70,
    "title": "enamorar-TE",
    "teaName": "Infusió d'enamorament pacífic",
    "benefit": "Només el pla d'amor de l'univers per a fer-nos feliços funcionarà de debò.",
    "lesson": "És confiar cegament en el pla de l'univers, sabent que l'única cosa que ens fa feliços de veritat és l'amor i la cura mútua.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'enamoro de la pau avui. Jo trio confiar en el pla del benestar.\""
  },
  {
    "day": 71,
    "title": "meravellar-TE",
    "teaName": "Infusión d'asombre net",
    "benefit": "Guardar rancor és anar en contra del pla d'amor que ens cuida.",
    "lesson": "És entendre que guardar rancor és anar en contra del teu propi equip, perquè el pla que et cuida només vol que estiguis feliç.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em meravello amb senzillesa avui. Jo trio deixar anar rancors que enterboleixen la meva pau.\""
  },
  {
    "day": 72,
    "title": "sorpren-TE",
    "teaName": "Infusión de sorpresa grata",
    "benefit": "El meu major desig és que brilli la llum de la bondat.",
    "lesson": "És encendre la il·lusió de veure com la bondat brilla amb molta força en tots els teus dies.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em sorprèn la bondat avui. Jo trio avivar el desig i que brilli la meva llum.\""
  },
  {
    "day": 73,
    "title": "fascinar-TE",
    "teaName": "Infusió de fascinació armònica",
    "benefit": "No hi ha cap altra regla ni força que mani a la meva vida més que la de l'amor.",
    "lesson": "És recordar que l'única llei que mana a la teva vida no és la por, sinó la força màgica i dolça de l'afecte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em fascina l'harmonia avui. Jo trio regir-me només per les lleis de l'afecte.\""
  },
  {
    "day": 74,
    "title": "captivar-TE",
    "teaName": "Infusió de captiveri apacible",
    "benefit": "La llum de l'amor ja ha arribat a la meva vida!",
    "lesson": "És obrir els braços de bat a bat per celebrar amb alegria que el benestar i l'amor ja han arribat de visita a la teva vida.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em captiva la llum avui. Jo trio acollir el benestar que ja ha arribat.\""
  },
  {
    "day": 75,
    "title": "detenir-TE",
    "teaName": "Infusió de detenció conscient",
    "benefit": "No em manen les regles de la por, només les lleis de la manyia i el bé.",
    "lesson": "És plantar cara a la por dient-li que a tu només et manen les regles de la bondat, de la tendresa i del bon tracte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em detinc davant de la por avui. Jo trio obeir només a les lleis de l'afecte.\""
  },
  {
    "day": 76,
    "title": "parar-TE",
    "teaName": "Infusió d'obertura al miracle",
    "benefit": "Tinc tot el dret del món a viure moments màgics plens d'amor i bondat.",
    "lesson": "T'atorga el permís i el dret de viure moments fantàstics, màgics i plens de pau en el teu dia a dia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Paro un instant avui. Jo trio obrir-me a viure moments màgics i bondadosos.\""
  },
  {
    "day": 77,
    "title": "pausar-TE",
    "teaName": "Infusió de pausa restauradora",
    "benefit": "Que els miracles i les sorpreses boniques esborrin tots els meus enuigs.",
    "lesson": "És fer una respiració fonda perquè les sorpreses boniques i els petits miracles esborrin qualsevol rastre de mal humor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Faig una pausa avui. Jo trio permetre que les sorpreses boniques esborrin els meus enuigs.\""
  },
  {
    "day": 78,
    "title": "respirar-TE",
    "teaName": "Infusió de respiració lúcida",
    "benefit": "Vull entendre bé què em passa per poder solucionar-ho amb un somriure.",
    "lesson": "T'ajuda a descobrir què et passa per dins quan estàs trista o disgustada, per poder solucionar-ho amb un somriure radiant.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Respiro amb calma avui. Jo trio comprendre les meves emocions per a sanar-les amb un somriure.\""
  },
  {
    "day": 79,
    "title": "oxigenar-TE",
    "teaName": "Infusió d'oxigenació mental",
    "benefit": "M'adono que tots els meus problemes ja tenen una solució plena de pau.",
    "lesson": "És adonar-te de cop que per cada petit problema que tens, ja existeix una solució tranquil·la i bonica esperant-te.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Oxigeno la meva ment avui. Jo trio veure que els meus reptes ja tenen una solució de pau.\""
  },
  {
    "day": 80,
    "title": "revitalitzar-TE",
    "teaName": "Infusió de revitalització conscient",
    "benefit": "Repasso que soc una llum brillant i que perdonar als altres és el meu millor superpoder.",
    "lesson": "És recordar que ets una estrella brillant i que cada vegada que decideixes perdonar, fas servir el teu superpoder més fort.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em revitalitzo avui. Jo trio recordar que perdonar és el meu major superpoder.\""
  },
  {
    "day": 81,
    "title": "energitzar-TE",
    "teaName": "Infusió d'energia renovada",
    "benefit": "Entenc que la meva llum porta tranquil·litat a tothom i m'ajuda a recordar com és d'important estimar.",
    "lesson": "És entendre que quan tu estàs en pau, aquesta tranquil·litat s'escampa a tothom i ens recorda el bonic que és estimar.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Energitzo el meu interior avui. Jo trio compartir tranquil·litat i amor.\""
  },
  {
    "day": 82,
    "title": "impulsar-TE",
    "teaName": "Infusió d'impuls afectiu",
    "benefit": "Descobreixo que fer el bé i sentir-me feliç van sempre de la mà.",
    "lesson": "És un joc divertit on descobreixes que portar a terme accions bones i sentir-te feliç van sempre agafades de la mà.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'impulso a fer el bé avui. Jo trio unir les meves accions amb la felicitat.\""
  },
  {
    "day": 83,
    "title": "motivar-TE",
    "teaName": "Infusió de motivació essencial",
    "benefit": "L'amor em va fer a la seva semblança i m'ensenya que el cor bondadós mai guarda enuigs.",
    "lesson": "És recuperar la innocència per recordar que el teu cor és totalment bondadós i no necessita guardar cap tipus de ràbia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \" Em motivo amb bondat avui. Jo trio mantenir un cor lliure d'enuigs.\""
  },
  {
    "day": 84,
    "title": "animar-TE",
    "teaName": "Infusió d'ànim unificat",
    "benefit": "Comprenc que els rancors oculten la meva llum, i que la veritable pau depèn del que trio a la meva ment.",
    "lesson": "T'ensenya que els enuigs només amaguen la teva llum, i que la clau per estar feliç depèn sempre dels pensaments que tu tries tenir.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'annexo a la pau avui. Jo trio triar pensaments que deixin brillar la meva llum.\""
  },
  {
    "day": 85,
    "title": "alçar-TE",
    "teaName": "Infusió d'alçament segur",
    "benefit": "Sé que només el pla de l'amor triomfa, i que guardar rancors és anar en contra d'aquesta felicitat.",
    "lesson": "És saber que només guanya el pla de l'amor i la joia, i que guardar rancors només serveix per anar en contra de la teva pròpia felicitat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'alço en la llum avui. Jo trio donar suport al pla del benestar i l'alegria.\""
  },
  {
    "day": 86,
    "title": "superar-TE",
    "teaName": "Infusió de superació lluminosa",
    "benefit": "Desitjo amb tot el cor que brilli la llum, sabent que no hi ha més llei ni poder que el de la bondat universal.",
    "lesson": "És desitjar amb totes les forces que la teva llum brilli, sabent que l'única llei que existeix és la de la bondat universal.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Supero els temors avui. Jo trio fer brillar la força de la bondat.\""
  },
  {
    "day": 87,
    "title": "atrevir-TE",
    "teaName": "Infusion d'atreviment serè",
    "benefit": "La llum ja és aquí per a guiar-me, recordant-me que només em governen les lleis de l'amor i la cura.",
    "lesson": "És armar-te de valentia per deixar-te guiar únicament per les lleis de l'afecte, de la cura i de l'estima mútua.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'atreveixo a confiar avui. Jo trio deixar-me guiar per les lleis de l'afecte.\""
  },
  {
    "day": 88,
    "title": "llançar-TE",
    "teaName": "Infusió de llançament confiat",
    "benefit": "Tinc tot el dret a viure coses hermoses i màgiques que reemplacin qualsevol pensament d'enuig.",
    "lesson": "És recordar que tens tot el dret del món a viure experiències màgiques i precioses que esborrin qualsevol pensament de baralla.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em llanço als miracles avui. Jo trio viure experiències precioses i sense enuigs.\""
  },
  {
    "day": 89,
    "title": "iniciar-TE",
    "teaName": "Infusió d'inici fresc",
    "benefit": "Aprenc a mirar els meus problemes de cara per a entendre'ls i adonar-me que ja estan resolts amb amor.",
    "lesson": "T'ensenya a mirar els petits problemes de cara, descobrint amb un somriure que l'amor ja els ha resolt per tu.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Inicio amb claredat avui. Jo trio mirar els meus reptes sabent que l'amor els resol.\""
  },
  {
    "day": 90,
    "title": "activar-TE",
    "teaName": "Infusió d'activació lluminosa",
    "benefit": "Els moments màgics i feliços es veuen amb la llum de l'amor.",
    "lesson": "És un recordatori alegre que els moments més divertits i màgics del dia es veuen molt millor amb la llum de l'afecte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Activo la meva alegria avui. Jo trio veure els moments màgics amb llum i amor.\""
  },
  {
    "day": 91,
    "title": "mou-TE",
    "teaName": "Infusió de moviment alliberador",
    "benefit": "Les sorpreses boniques es veuen a la llum, i la llum i la força interior són una sola cosa.",
    "lesson": "És connectar amb tu mateixa per saber que la teva alegria, la teva força interior i la teva llum formen una sola cosa fantàstica.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em moc en la llum avui. Jo trio sentir la meva força interior i la meva alegria unides.\""
  },
  {
    "day": 92,
    "title": "comunicar-TE",
    "teaName": "Infusió de comunicació afectiva",
    "benefit": "Soc un ésser perfecte i meravellós, tal com em va crear el gran amor de l'univers.",
    "lesson": "És abraçar la teva autoestima per recordar que ets una persona perfecta, meravellosa i plena de llum per dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em comunico amb amor propi avui. Jo trio recordar que soc un ésser perfecte i lluminós.\""
  },
  {
    "day": 93,
    "title": "expressar-TE",
    "teaName": "Infusió d'expressió autèntica",
    "benefit": "Soc un sol ésser ple de llum, unit per sempre a la gran energia creadora.",
    "lesson": "És sentir que formes part de la gran energia d'amor i llum del univers, formant un sol equip ple de felicitat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'expresso des de la meva essència avui. Jo trio sentir-me unit a la gran energia de llum.\""
  },
  {
    "day": 94,
    "title": "manifestar-TE",
    "teaName": "Infusió de manifestació armònica",
    "benefit": "Sentir-me a resguard i feliç ve del meu propi ser interior de llum.",
    "lesson": "És trobar un refugi secret dins teu sabent que la felicitat i la seguretat autèntiques només viuen al teu cor lluminós.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Manifesto el meu refugi avui. Jo trio trobar la felicitat al meu interior lluminós.\""
  },
  {
    "day": 95,
    "title": "transcendir-TE",
    "teaName": "Infusió de transcendència àmplia",
    "benefit": "Soc pura llum i energia bonica, no només un cos.",
    "lesson": "És recordar que tu ets moltes coses més que un cos: ets pura energia bonica, llum i alegria sense límits.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Transcendeixo les limitacions avui. Jo trio reconèixer-me com a pura energia de llum.\""
  },
  {
    "day": 96,
    "title": "elevar-TE",
    "teaName": "Infusió d'elevació profunda",
    "benefit": "Accepto amb alegria la meva missió de portar amor i pau al món.",
    "lesson": "És acceptar amb molta il·lusió la teva missió més bonica: omplir el món de pau i d'amor a cada pas que facis.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'elevo en el meu propòsit avui. Jo trio acceptar amb alegria la meva missió de pau.\""
  },
  {
    "day": 97,
    "title": "fusionar-TE",
    "teaName": "Infusió de fusió pacífica",
    "benefit": "La meva única tasca aquí a la Terra és compartir pau i amor amb tothom.",
    "lesson": "És descobrir que la teva missió més important aquí a la Terra és compartir l'amistat, la pau i l'afecte amb tothom.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em fusiono amb la tasca d'estimar avui. Jo trio compartir pau amb tothom.\""
  },
  {
    "day": 98,
    "title": "integrar-TE",
    "teaName": "Infusió d'integració completa",
    "benefit": "La meva ajuda és súper important en el gran pla d'amor de l'univers.",
    "lesson": "És valorar-te i saber que la teva ajuda és súper important dins del gran pla de benestar de l'univers.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Integro el meu valor avui. Jo trio reconèixer que la meva ajuda és valuosa en el pla de pau.\""
  },
  {
    "day": 99,
    "title": "explorar-TE",
    "teaName": "Infusió d'exploració curiosa",
    "benefit": "El desig del gran amor per a mi és que sigui totalment feliç. Jo també desitjo amb tot el cor ser immensament feliç.",
    "lesson": "És permetre't desitjar amb tot el cor ser una persona inmensament feliç i viure en pau cada dia de la teva vida.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Exploro la meva felicitat avui. Jo trio permetre'm ser immensament feliç.\""
  },
  {
    "day": 100,
    "title": "descobrir-TE",
    "teaName": "Infusió de descobriment joiós",
    "benefit": "La gran energia de l'univers és pur amor, i per això també és pura alegria.",
    "lesson": "És com quan descobreixes un tresor amagat: t'adones que l'univers està ple de joia i afecte, i que tu estàs convidada a celebrar-ho i passar-ho molt bé cada dia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Descobreixo l'alegria avui. Jo trio sintonitzar amb l'energia de la felicitat.\""
  },
  {
    "day": 101,
    "title": "cercar-TE",
    "teaName": "Infusió d'abandó confiat",
    "benefit": "Només busco les coses que em porten pau i amor de debò.",
    "lesson": "És com quan tries només les coses que més t'agraden i deixes les que et fan enfadar. Aprens a buscar només les coses que et porten pau de debò i et fan sentir estimada.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Abandono el que és innecessari avui. Jo trio buscar només el que em porta pau real.\""
  },
  {
    "day": 102,
    "title": "netejar-TE",
    "teaName": "Infusió de neteja conscient",
    "benefit": "La pau i l'alegria de l'univers són regals que ja són meus.",
    "lesson": "És recordar que la pau i la felicitat són com regals d'aniversari que ja són teus. Ningú te'ls pot prendre, només has d'obrir el regal i gaudir-ne.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Netejo els meus dubtes avui. Jo trio acceptar la pau i l'alegria que ja em pertanyen.\""
  },
  {
    "day": 103,
    "title": "purificar-TE",
    "teaName": "Infusió de purificació essencial",
    "benefit": "Em quedo en silenci i escolto la veu de la veritat al meu cor.",
    "lesson": "És com quan et quedes ben quieta a la teva habitació i escoltes el bategar del teu cor. En aquest silenci descobreixes la veu de la veritat que et diu tot el que vals.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Purifico la meva ment avui. Jo trio callar el soroll i escoltar la veritat interior.\""
  },
  {
    "day": 104,
    "title": "silenciar-TE",
    "teaName": "Infusió de silenci receptiu",
    "benefit": "La veritat i l'amor arreglaran tots els pensaments lletjos de la meva ment.",
    "lesson": "Imagina que la teva ment té un drap màgic que esborra els pensaments lletjos o tristos, deixant-te el cap clar, feliç i ple de coses amables.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Silencio els judicis avui. Jo trio deixar que la veritat ordeni els meus pensaments.\""
  },
  {
    "day": 105,
    "title": "aquietar-TE",
    "teaName": "Infusió de quietud interior",
    "benefit": "Regalar amor i rebre'l són exactament el mateix.",
    "lesson": "És com quan intercanviesr regals amb la gent que estimes: quan regales amor a algú altre, te l'estàs regalant a tu mateixa al mateix temps.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Aquieto el meu interior avui. Jo trio saber que donar i rebre afecte és el mateix.\""
  },
  {
    "day": 106,
    "title": "connectar-TE",
    "teaName": "Infusió de connexió profunda",
    "benefit": "Descanso tranquil en l'abraçada del gran amor universal.",
    "lesson": "És com quan et posis un pijama ben suau i et tapes amb una manta acollidora: et sents abraçada per l'amor de l'univers i penses que pots descansar feliç.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Connecto amb el descans avui. Jo trio reposar en l'abraçada de la pau.\""
  },
  {
    "day": 107,
    "title": "relaxar-TE",
    "teaName": "Infusió de relaxació conscient",
    "benefit": "Segueixo sent un ésser meravellós, tal com em va fer l'energia del bé.",
    "lesson": "És un recordatori bonic per a tu: no importa el que passi, tu continues sent una persona meravellosa i especial, feta amb tot el carinyo del món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em relaxo en el meu valor avui. Jo trio recordar que soc un regal perfecte de la vida.\""
  },
  {
    "day": 108,
    "title": "descansar-TE",
    "teaName": "Infusió de descans apacible",
    "benefit": "Recordem que els moments bonics es veuen quan the mirem amb amor i fortalesa interior.",
    "lesson": "Quan t'atures un moment i mires les coses amb força i carinyo, tot el que t'envolta es torna molt més bonic i ple de llum.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Descanso en la meva fortalesa avui. Jo trio mirar amb amor i fermesa.\""
  },
  {
    "day": 109,
    "title": "premiar-TE",
    "teaName": "Infusió de premi merescut",
    "benefit": "L'alegria i la llum viuen al nostre cor perquè vam ser creats amb pur amor.",
    "lesson": "És celebrar una festa al teu interior perquè saps que vas ser creada amb pur afecte, i per això el teu cor està ple de llum i d'alegria.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em premi amb alegria avui. Jo trio celebrar que el meu cor és pur amor.\""
  },
  {
    "day": 110,
    "title": "felicitar-TE",
    "teaName": "Infusió de felicitació sincera",
    "benefit": "Som éssers de llum units a tot l'univers, i la pau neix del nostre propi ser.",
    "lesson": "És adonar-te que estàs connectada amb totes les estrelles i l'univers, i que la tranquil·litat que busques neix de dins teu mateix.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em felicito en unitat avui. Jo trio recordar que la pau neix del meu interior.\""
  },
  {
    "day": 111,
    "title": "divertir-TE",
    "teaName": "Infusió de diversió lúdica",
    "benefit": "Recordem que som energia bonica i que tenim la hermosa missió de compartir pau.",
    "lesson": "Imagina que tens la missió secreta i divertida de ser una agent de la pau: i que vas pel món repartint somriures i bona energia a tothom.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em diverteixo compartint pau avui. Jo trio recordar la meva preciosa missió d'harmonia.\""
  },
  {
    "day": 112,
    "title": "entendrir-TE",
    "teaName": "Infusió d'enterneiximent compassiu",
    "benefit": "Compartir amor és el nostre treball més valuós i tots som necessaris en aquest pla.",
    "lesson": "És recordar que el treball més important i valuós que pots fer és estimar i ajudar, i que tu ets súper necessària en aquest equip.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'entendreixo amb propòsit avui. Jo trio valorar el meu treball de compartir afecte.\""
  },
  {
    "day": 113,
    "title": "solidaritzar-TE",
    "teaName": "Infusió de solidaritat compartida",
    "benefit": "La força del bé vol que siguem feliços, i nosaltres també triem aquesta alegria.",
    "lesson": "Saps què? La força del bé vol que siguis molt, molt feliç! I tu només has de dir: \"I jo també ho trio!\" per començar a gaudir-ne.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em solidaritzo amb l'alegria avui. Jo trio triar la felicitat per a tothom.\""
  },
  {
    "day": 114,
    "title": "recordar-TE",
    "teaName": "Infusió de memòria lluminosa",
    "benefit": "Com que l'energia de l'univers és amor, buscar el bé ens dona el que de debò ens pertany.",
    "lesson": "És com recordar on vas desar el teu objecte preferit: quan busques el bé i l'amor, trobes exactament el que et fa sentir completa i feliç.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Recordo el que em pertany avui. Jo trio buscar el bé que em dona pau.\""
  },
  {
    "day": 115,
    "title": "il·luminar-TE",
    "teaName": "Infusió d'il·luminació serena",
    "benefit": "La pau és nostra, només necessitem quedar-nos tranquils per a escoltar la veritat del cor.",
    "lesson": "És com quan fas silenci per escoltar un ocell cantar. Quan et quedes tranquil·la, pots escoltar la veritat bonica que viu al teu cor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Il·lumino la meva escolta avui. Jo trio la quietud per a oir la veritat interior.\""
  },
  {
    "day": 116,
    "title": "despertar-TE",
    "teaName": "Infusió de despertar ple",
    "benefit": "La veritat arregla els nostres errors, i aprenem que donar i rebre afecte és el mateix.",
    "lesson": "T'ajuda a entendre que els errors es poden arreglar fàcilment amb la veritat, i que donar una abraçada és igual de bonic que rebre-la.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Desperto a la sanació avui. Jo trio donar i rebre afecte amb naturalitat.\""
  },
  {
    "day": 117,
    "title": "observar-TE",
    "teaName": "Infusió d'observació compassiva",
    "benefit": "Ens sentim segurs i tranquils sabent que sempre som un regal perfecte de la vida.",
    "lesson": "És sentir-te segura i tranquil·la com quan et fan una carícia, sabent que tu ets un regal meravellós de la vida per al món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Observo amb tendresa avui. Jo trio sentir-me segura sabent que soc un regal de la vida.\""
  },
  {
    "day": 118,
    "title": "aquietar-TE",
    "teaName": "Infusió d'aquietament centrat",
    "benefit": "Perdonar als altres és la clau màgica per a obrir la porta de la felicitat.",
    "lesson": "Imagina que tens una clau màgica que obre la porta de la felicitat: aquesta clau es diu perdonar i deixar anar les pautes amb els altres.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Aquieto els meus judicis avui. Jo trio usar el perdó com a clau de la felicitat.\""
  },
  {
    "day": 119,
    "title": "enfocar-TE",
    "teaName": "Infusió d'enfocament lúcid",
    "benefit": "El perdó em regala tot el bo i bonic que el meu cor desitja.",
    "lesson": "És com obrir una caixa plena de regals preciosos: quan perdones, el teu cor s'omple de totes les coses boniques que sempre has desitjat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'enfoco en el perdó avui. Jo trio rebre tot el bo que el meu cor desitja.\""
  },
  {
    "day": 120,
    "title": "ubicar-TE",
    "teaName": "Infusió d'ubicació serena",
    "benefit": "Gràcies, gran energia de l'amor, per tots els regals hermosos que m'has donat!",
    "lesson": "És dir \"moltes gràcies!\" amb un somriure gegant a la força de l'amor per totes les coses increïbles i boniques que et regala cada dia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'ubico en la gratitud avui. Jo trio agrair els regals bonics de la vida.\""
  },
  {
    "day": 121,
    "title": "perdonar-TE",
    "teaName": "Infusió de perdó alliberador",
    "benefit": "L'amor de l'univers és el lloc segur on aprenc a perdonar de debò.",
    "lesson": "És trobar un racó secret i acollidor on pots llençar les teves culpes i pors a la brossa, quedant-te en total pau i seguretat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em perdono avui. Jo trio deixar anar culpes i habitar un espai segur.\""
  },
  {
    "day": 122,
    "title": "replantejar-TE",
    "teaName": "Infusió de replantejament savi",
    "benefit": "En un moment de calma i tranquil·litat rebo els millors consells de l'amor.",
    "lesson": "Quan estàs ben tranquil·la i en calma, és quan et venen les millors idees i els consells més dolços al teu cap.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Replantejo les meves idees avui. Jo trio escoltar els consells de la calma.\""
  },
  {
    "day": 123,
    "title": "desfer-TE",
    "teaName": "Infusió de desfer alliberador",
    "benefit": "Tot l'amor i l'amabilitat que dono als altres me l'estic donant a mi mateix.",
    "lesson": "És com un truc de màgia: tot l'amor, la dolçor i la paciència que dones als altres, te les estàs regalant a tu mateixa immediatament.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Desfaig l'egoisme avui. Jo trio saber que en donar amor me'l dono a mi mateixa.\""
  },
  {
    "day": 124,
    "title": "alliberar-TE",
    "teaName": "Infusió de llibertat dolça",
    "benefit": "No existeix cap altre amor tan gran i segur com el de l'univers.",
    "lesson": "És recordar que estàs protegida per l'amor més gran i segur de l'univers, un amor que mai falla i que et cuida sempre.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Allibero els meus temors avui. Jo trio confiar en l'amor més segur i gran.\""
  },
  {
    "day": 125,
    "title": "il·luminar-TE",
    "teaName": "Infusió d'il·luminació integrada",
    "benefit": "Les coses lletjoses del món no tenen res a veure amb el que realment desitjo.",
    "lesson": "És aprendre a separar el gra de la palla: les coses lletjes del món no tenen res a veure amb els desitjos bonics que té la teva ànima.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Il·lumino les meves eleccions avui. Jo trio enfocar-me en el que la meva ànima veritablement desitja.\""
  },
  {
    "day": 126,
    "title": "confiar-TE",
    "teaName": "Infusió de confiança plena",
    "benefit": "Més enllà dels problemes, hi ha un món ple de pau que és el que vull veure.",
    "lesson": "Més enllà dels problemes o dels emprenyaments passatgeres, hi ha un món ple de pau i colors amables que és el que tu decideixes mirar.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Confio en la pau avui. Jo trio mirar més enllà dels problemes cap a l'harmonia.\""
  },
  {
    "day": 127,
    "title": "desvincular-TE",
    "teaName": "Infusió de desvinculació serena",
    "benefit": "És impossible mirar la por i la pau al mateix temps, trio mirar la pau!",
    "lesson": "És com mirar a l'esquerra o a la dreta: no pots mirar la por i la pau alhora. Tu decideixes girar el cap i mirar sempre la pau!",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em desvinculo de la por avui. Jo trio mirar exclusivament la pau.\""
  },
  {
    "day": 128,
    "title": "neutralitzar-TE",
    "teaName": "Infusió de neutralització pacífica",
    "benefit": "Ningú que busqui la veritat i l'amor amb ganes pot fallar.",
    "lesson": "Si busques l'amor, la veritat i la pau amb ganes i alegria, és impossible que no les trobis. Totes aquestes coses t'estan esperant!",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Neutralitzo el dubte avui. Jo trio buscar la veritat amb ganes sinceres.\""
  },
  {
    "day": 129,
    "title": "equilibrar-TE",
    "teaName": "Infusió d'equilibri armònic",
    "benefit": "Allibero el món de totes les històries lletjoses que vaig inventar sobre ell.",
    "lesson": "És agafar una goma d'esborrar gegant i netejar el món de totes les històries tristes o feines que s'havien inventat sobre ell.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'equilibro en les meves percepcions avui. Jo trio alliberar el món d'històries falses.\""
  },
  {
    "day": 130,
    "title": "responsabilitzar-TE",
    "teaName": "Infusió de responsabilitat afectiva",
    "benefit": "No donaré importància a les joguines o coses que no em porten pau real.",
    "lesson": "És aprendre a no enfadar-se per coses que es trenquen i no et porten pau, valorant només allò que et fa feliç per dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em responsabilitzo de les meves prioritats avui. Jo trio donar importància només al que porta pau.\""
  },
  {
    "day": 131,
    "title": "reconèixer-TE",
    "teaName": "Infusió de reconeixement innocent",
    "benefit": "Vull aprendre a perdonar amb un cor net i sincer.",
    "lesson": "És aprendre a perdonar amb un cor net, sincer i transparent, com l'aigua clara d'un riu que no guarda cap brutícia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Reconec la puresa avui. Jo trio perdonar amb un cor net.\""
  },
  {
    "day": 132,
    "title": "decidir-TE",
    "teaName": "Infusió de decisió lúcida",
    "benefit": "Si tracto de barallar o defendre'm, és perquè vaig creure que m'estaven atacant.",
    "lesson": "Si sents ganes de barallar-te o defensar-te, és només perquè has tingut por. Quan saps que ningú et vol fer mal, no necessites baralles.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Decideixo deixar anar les armes avui. Jo trio comprendre que ningú m'ataca.\""
  },
  {
    "day": 133,
    "title": "obrir-TE",
    "teaName": "Infusió d'obertura receptiva",
    "benefit": "Sentir-me malalt o enfadat és només una forma d'ocultar la veritat de l'amor.",
    "lesson": "Sentir-se malalta o de mal humor és només una forma en què la ment intenta amagar l'amor. Si ho entens, l'amor torna de seguida.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Obro el meu enteniment avui. Jo trio veure que el malestar només oculta l'afecte.\""
  },
  {
    "day": 134,
    "title": "amollar-TE",
    "teaName": "Infusió de deixar anar generós",
    "benefit": "Quan netejo el meu cor i somric, ajudo que tothom al meu voltant se senti bé.",
    "lesson": "Quan neteges el teu cor i regales un somriure sincer, ajudes com per art de màgia a que tots els teus amics i familiars se sentin bé.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Deixo anar el judici avui. Jo trio somriure perquè el meu entorn se senti bé.\""
  },
  {
    "day": 135,
    "title": "pacificar-TE",
    "teaName": "Infusió de pacificació profunda",
    "benefit": "El món de la pau i l'alegria és la millor opció que puc triar.",
    "lesson": "D'entre totes les opcions del món, triar el camí de la pau i de l'alegria és sempre la millor decisió que pots prendre.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em pacifico per dins avui. Jo trio el món de la pau com la meva millor opció.\""
  },
  {
    "day": 136,
    "title": "protegir-TE",
    "teaName": "Infusió de protecció serena",
    "benefit": "Accepto netejar tots els meus errors i tornar a començar amb amor.",
    "lesson": "És acceptar netejar tots els petits errors que has comès i tornar a començar la jornada amb molta dolçor i ganes d'estimar.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em protegeixo renovant-me avui. Jo trio començar de nou amb amor.\""
  },
  {
    "day": 137,
    "title": "lliurar-TE",
    "teaName": "Infusió d'entrega confiada",
    "benefit": "L'amor i el perdó són l'únic que sana qualsevol tristesa.",
    "lesson": "És utilitzar la màgia de l'amor i del perdó, que són els únics ingredients capaços de curar qualsevol tristesa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Lliuro les meves tristeses avui. Jo trio permetre que el perdó sani el meu cor.\""
  },
  {
    "day": 138,
    "title": "recordar-TE",
    "teaName": "Infusió de protecció de la pau",
    "benefit": "Els meus pensaments d'atac i enuig l'únic que fan és fer mal a la meva pau interior.",
    "lesson": "És com adonar-te que el món està fet de llum i de riures, i que tu estàs convidada a la festa més divertida de l'univers per estar feliç.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Recordo cuidar la meva pau avui. Jo trio no fer-me mal amb enuigs.\""
  },
  {
    "day": 139,
    "title": "disposar-TE",
    "teaName": "Infusió d'intenció genuïna",
    "benefit": "Per sobre de qualsevol altra cosa, el que més vull és veure la veritat!",
    "lesson": "És com triar només els objectes que et fan somriure de debò i deixar de banda les coses que et fan posar de mal humor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em disposo a veure la veritat avui. Jo trio prioritzar la claredat en la meva ment.\""
  },
  {
    "day": 140,
    "title": "transformar-TE",
    "teaName": "Infusió de perspectiva renovada",
    "benefit": "Estic decidit a mirar totes les coses d'una manera bonica i diferent.",
    "lesson": "És com obrir un regal màgic i adonar-te que la pau i la joia ja eren teves abans de demanar-les. Ja són al teu cor!",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Transformo la meva mirada avui. Jo trio veure el que és bell en cada detall.\""
  },
  {
    "day": 141,
    "title": "meravellar-TE",
    "teaName": "Infusió de meravella conscient",
    "benefit": "L'únic amor segur és el de l'univers, i el món de baralles no ens ofereix res valuós.",
    "lesson": "És un joc on et quedes molt quieta i en silenci per escoltar la veueta dolça que et diu la veritat des de dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em meravello amb l'afecte avui. Jo trio l'amor segur i rebutjo les baralles.\""
  },
  {
    "day": 142,
    "title": "reconciliar-TE",
    "teaName": "Infusió de reconciliació subtil",
    "benefit": "Preferim el món de tranquil·litat, sabent que no es pot mirar la por i la pau alhora.",
    "lesson": "És confiar en un drap màgic d'amor que ve i neteja tots els pensaments lletjos i de ràbia del teu cap.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em reconcilio amb la tranquil·litat avui. Jo trio mirar únicament la pau.\""
  },
  {
    "day": 143,
    "title": "empoderar-TE",
    "teaName": "Infusió d'empoderament pacífic",
    "benefit": "Buscar el bé sempre funciona, i al perdonar alliberem el món dels nostres mals pensaments.",
    "lesson": "T'ensenya que quan regales un abraçada o un pensament bonic a algú, és exactament com si te'l regalessis a tu mateixa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'empodero perdonant avui. Jo trio alliberar el món dels meus mals pensaments.\""
  },
  {
    "day": 144,
    "title": "inventar-TE",
    "teaName": "Infusió de creativitat lluminosa",
    "benefit": "Diem valor només al que porta pau i aprenem a perdonar de debò.",
    "lesson": "És com ficar-te sota el mantell més suau i calentó del món per descansar tranquil·la en l'abraçada de la vida.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Invento una mirada de pau avui. Jo trio valorar únicament el que porta tranquil·litat.\""
  },
  {
    "day": 145,
    "title": "reinventar-TE",
    "teaName": "Infusió de reinvenció armònica",
    "benefit": "No necessitem barallar ni malaltir per a protegir-nos, la pau és la nostra veritable protecció.",
    "lesson": "Serveix per recordar-te que ets una persona meravellosa i valuosa, feta amb tota la cura i la tendresa de l'univers.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em reinvento en la pau avui. Jo trio la tranquil·litat com la meva única protecció.\""
  },
  {
    "day": 146,
    "title": "asossegar-TE",
    "teaName": "Infusió de sossec integrador",
    "benefit": "Quan estem bé, ajudem als altres a estar bé i triem el camí de la pau.",
    "lesson": "És mirar al teu voltant com una superheroïna fortíssima que sap veure el millor de cada situació amb un cor ple d'amor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em m'assossego compartint benestar avui. Jo trio el camí de la pau per a tothom.\""
  },
  {
    "day": 147,
    "title": "sanar-TE",
    "teaName": "Infusió de sanació lúcida",
    "benefit": "Acceptem corregir els nostres fallos perquè l'amor és l'únic que cura tot dolor.",
    "lesson": "És fer una festa al teu interior celebrant que el teu cor va ser creat amb molt amor i està ple de llum brillant.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Sano els meus errors avui. Jo trio permetre que l'afecte curi qualsevol dolor.\""
  },
  {
    "day": 148,
    "title": "beneir-TE",
    "teaName": "Infusió de benedicció constant",
    "benefit": "Totes les coses boniques de la natura em recorden la veu del gran amor.",
    "lesson": "T'ajuda a recordar que estàs connectada amb totes les estrelles i l'univers, i que la teva pau neix de la teva pròpia llum.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Beneeixo la natura avui. Jo trio escoltar la veu de l'afecte en tot el que m'envolta.\""
  },
  {
    "day": 149,
    "title": "expandir-TE",
    "teaName": "Infusió d'expansió benèvola",
    "benefit": "Tinc el superpoder de triar sempre entre l'enuig o la pau.",
    "lesson": "És un joc súper divertit on recordes que la teva missió especial a la Terra és anar escampant pau i riures per on passes.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Expandeixo el meu poder de triar avui. Jo trio la pau per sobre de l'enuig.\""
  },
  {
    "day": 150,
    "title": "unir-TE",
    "teaName": "Infusió d'unió protectora",
    "benefit": "Quan no ataco ni em defenso, estic totalment a resguard.",
    "lesson": "És descobrir que la teva feina més important com a persona és compartir amor, i que tu ets supernecessària en aquest equip.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'uneixo a la seguretat avui. Jo trio estar a resguard,a no atacar i a no defendre'm.\""
  },
  {
    "day": 151,
    "title": "salvar-TE",
    "teaName": "Infusió de salvació afectiva",
    "benefit": "Soc un dels ajudants especials de la llum i el bé al món.",
    "lesson": "És adonar-te que el món vol que siguis immensament feliç, i tu decideixes unir-te a aquesta mateixa alegria amb tothom.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em salvo servint al bé avui. Jo trio ser un agent de llum al món.\""
  },
  {
    "day": 152,
    "title": "acceptar-TE",
    "teaName": "Infusió d'acceptació serena",
    "benefit": "Em faig a un costat i deixo que l'amor m'ensenyi per on caminar.",
    "lesson": "És com trobar un tresor que ja era teu: buscar el bé sempre et torna la pau que et pertany des de sempre.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Accepto ser guiada avui. Jo trio deixar que l'afecte m'indiqui el camí.\""
  },
  {
    "day": 153,
    "title": "acompanyar-TE",
    "teaName": "Infusió d'acompanyament lluminós",
    "benefit": "Camino al costat de la gran energia creadora en un ambient de llum i alegria.",
    "lesson": "T'ensenya que no has de córrer ni cridar; només et cal quedar-te tranquil·la per escoltar la veritat bonica que tens al cor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Acompanyo els meus passos amb llum avui. Jo trio caminar en un ambient d'alegria.\""
  },
  {
    "day": 154,
    "title": "enfortir-TE",
    "teaName": "Infusió d'enfortiment conscient",
    "benefit": "Ara mateix trio sentir la presència amorosa que m'envolta.",
    "lesson": "És adonar-te que quan et comprens i no et baralles, donar un petó o rebre'l et fa sentir exactament la mateixa felicitat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'enforteixo sentint la presència avui. Jo trio percebre l'afecte al meu voltant.\""
  },
  {
    "day": 155,
    "title": "arrelar-TE",
    "teaName": "Infusió d'arrelament pacífic",
    "benefit": "Avui aprenc a donar amb la mateixa alegria amb la qual rebo regals.",
    "lesson": "És sentir-te completament segura i sostinguda, sabent que ets un regal únic i preciós per a tot el món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'arrelo en la generositat avui. Jo trio donar amb la mateixa alegria que rebo.\""
  },
  {
    "day": 156,
    "title": "vincular-TE",
    "teaName": "Infusió de vinculació universal",
    "benefit": "Comparteixo amb tothom les sorpreses boniques i somriures que he rebut.",
    "lesson": "És descobrir la clau màgica i secreta: quan perdones els altres, s'obre la porta d'un castell ple de joia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em vinculo compartint somriures avui. Jo trio repartir les sorpreses boniques.\""
  },
  {
    "day": 157,
    "title": "inspirar-TE",
    "teaName": "Infusió d'inspiració present",
    "benefit": "La meva veritable llar és la pau; la por és només un visitant que ha de marxar.",
    "lesson": "És com obrir una caixa plena de sorpreses boniques: el perdó et regala tot el que el teu cor desitja per estar bé.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'inspiro en la meva llar de pau avui. Jo trio deixar marxar la por com a un visitant.\""
  },
  {
    "day": 158,
    "title": "perdonar-TE",
    "teaName": "Infusió de perdó definitiu",
    "benefit": "Dona'm la teva abraçada de llum, estimat amic i germà d'aquest univers.",
    "lesson": "És dibuixar un somriure gegant i dir \"gràcies!\" a la vida per tots els regals preciosos que reps cada dia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Perdono abraçant avui. Jo trio sentir la proximitat fraternal a l'univers.\""
  },
  {
    "day": 159,
    "title": "refugiar-TE",
    "teaName": "Infusió de refugi segur",
    "benefit": "Segueixo sent un ésser perfecte, fet de pur amor i bondat.",
    "lesson": "És trobar un refugi secret on pots netejar les teves errades, sentir-te estimada i tornar a començar sense cap culpa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em refugio en la meva perfecció avui. Jo trio recordar que estic feta de pur amor.\""
  },
  {
    "day": 160,
    "title": "tranquil·litzar-TE",
    "teaName": "Infusió de tranquil·litat escut",
    "benefit": "La llum de la vida mai no mor, som éssers lliures per sempre.",
    "lesson": "És descobrir que quan et quedes en calma i silenci, reps els millors consells d'amor per saber què fer.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Tranquil·litzo el meu esperit avui. Jo trio saber que soc lliure i lluminosa per sempre.\""
  },
  {
    "day": 161,
    "title": "escoltar-TE",
    "teaName": "Infusió d'escolta valenta",
    "benefit": "Ara estem units a la gran font d'on neix tot l'amor.",
    "lesson": "És adonar-te que tota la tendresa i la paciència que regales als teus amics té el mateix efecte per a tu mateixa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Escolto la meva font avui. Jo trio sentir-me unida a l'origen de tot l'afecte.\""
  },
  {
    "day": 162,
    "title": "nodrir-TE",
    "teaName": "Infusió de nutrició interior",
    "benefit": "Que la meva ment no oblidi mai com de molt l'univers m'estima.",
    "lesson": "És saber que no hi ha cap abraçada més gran ni cap lloc més segur per a tu que l'amor de l'univers.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Nodreixo la meva ment avui. Jo trio recordar el gran afecte que l'univers em té.\""
  },
  {
    "day": 163,
    "title": "relaxar-TE",
    "teaName": "Infusió de relaxació compartida",
    "benefit": "Se m'han lliurat els regals més hermosos de la pau i l'alegria.",
    "lesson": "És adonar-te que les coses lletges o les baralles de fora no tenen res a veure amb els desitjos bonics de la teva ànima.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em relaxo rebent avui. Jo trio acceptar els preciosos regals de pau.\""
  },
  {
    "day": 164,
    "title": "actualitzar-TE",
    "teaName": "Infusió d'actualització serena",
    "benefit": "Només hi ha una vida d'amor i la comparteixo amb tota la creació.",
    "lesson": "És mirar més enllà dels petits problemes per descobrir un paisatge immens i feliç que està esperant que el miris.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Actualitzo la meva connexió avui. Jo trio compartir la vida i l'afecte amb la creació.\""
  },
  {
    "day": 165,
    "title": "compren-TE",
    "teaName": "Infusió de comprensió profunda",
    "benefit": "El regal de l'amor ja em va ser donat, el rebeixo avui amb una abraçada.",
    "lesson": "És entendre que no pots mirar la por i la pau alhora; tu ets la reina del teu cap i tries mirar sempre la pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Comprenc el regal rebut avui. Jo trio acceptar l'afecte amb una abraçada.\""
  },
  {
    "day": 166,
    "title": "alinear-TE",
    "teaName": "Infusió d'alineació feliç",
    "benefit": "Viu feliç gràcies a l'amor de l'univers i això em fa lliure.",
    "lesson": "És saber que quan busques l'amor i la veritat amb moltes ganes, és impossible que no els trobis. Sempre ho aconsegueixes!",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Alineo la meva llibertat avui. Jo trio viure feliç i lliure gràcies a l'afecte.\""
  },
  {
    "day": 167,
    "title": "harmonitzar-TE",
    "teaName": "Infusió d'harmonització incommovible",
    "benefit": "En el gran amor no hi ha espai per a la crueltat, ni tampoc al meu cor.",
    "lesson": "És esborrar del teu conte les històries tristes del passat per deixar que el món sigui nou, net i bonic.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Harmonitzo el meu cor avui. Jo trio excloure tota crueltat del meu interior.\""
  },
  {
    "day": 168,
    "title": "il·lusionar-TE",
    "teaName": "Infusió de percepció il·lusionada",
    "benefit": "Tot ens recorda l'amor i tenim el poder de decidir ser feliços.",
    "lesson": "És aprendre a no enfadar-te per les coses petites o poc importants que no t'ajuden a tenir la teva ment tranquil·la i feliç.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Il·lusiono el meu destí avui. Jo trio usar el meu poder per a ser feliç.\""
  },
  {
    "day": 169,
    "title": "projectar-TE",
    "teaName": "Infusió de projecció bella",
    "benefit": "No atacar-nos ens manté segurs i ens converteix en ambaixadors del bé.",
    "lesson": "És aprendre a perdonar des de ben endins, amb un cor transparent, net i sense guardar cap recança.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Reflexo seguretat avui. Jo trio ser una ambaixadora del bé mitjançant la pau.\""
  },
  {
    "day": 170,
    "title": "compadir-TE",
    "teaName": "Infusió de compassió pacífica",
    "benefit": "Permetem que l'amor ens guiï i caminem alegres pel món.",
    "lesson": "És adonar-te que si et poses a la defensiva és només perquè vas creure que algú et volia fer mal, però estàs totalment segura.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em compadeixo amb alegria avui. Jo trio deixar-me guiar per l'afecte en caminar.\""
  },
  {
    "day": 171,
    "title": "agermanar-TE",
    "teaName": "Infusió de fraternitat lluminosa",
    "benefit": "Vivim el moment present i aprenem a compartir tot el que és bo.",
    "lesson": "És descobrir que quan et sents enfadada o malalta, només és una forma d'amagar l'amor que tens a dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'agermano en el present avui. Jo trio gaudir l'ara compartint el que és bo.\""
  },
  {
    "day": 172,
    "title": "sintonitzar-TE",
    "teaName": "Infusió de sintonia dissolvent",
    "benefit": "Compartim miracles d'amor i recordem que la nostra llar és la pau.",
    "lesson": "És veure com el teu propi somriure i el teu cor net ajuden que tots els teus amics i la teva família se sentin bé.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Sintonitzo amb la meva llar avui. Jo trio compartir miracles i habitar en la pau.\""
  },
  {
    "day": 173,
    "title": "estimar-TE",
    "teaName": "Infusió d'amor incondicional",
    "benefit": "Les coses que veus al teu voltant no signifiquen res per si soles. Tu ets qui decideix si alguna cosa t'enfada o et dona pau al teu cap.",
    "lesson": "És adonar-te que entre totes les opcions del món, triar la joia i la pau és la millor jugada que pots fer.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Estimo la meva ment avui. Jo trio mirar aquest moment pau i amabilitat.\""
  },
  {
    "day": 174,
    "title": "consentir-TE",
    "teaName": "Infusió de presència conscient",
    "benefit": "La llum que porto a dins ajuda que tothom trobi pau a través del meu perdó.",
    "lesson": "És la tranquil·litat de saber que pots esborrar qualsevol equivocació i començar de nou amb molt d'afecte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em consento en calma avui. Jo trio portar pau a través de la comprensió.\""
  },
  {
    "day": 175,
    "title": "mimar-TE",
    "teaName": "Infusió de mim essencial",
    "benefit": "Vull recordar-me sempre de quina és la meva hermosa missió.",
    "lesson": "És utilitzar la màgia de l'amor i del perdó, que són els únics ingredients capaços de curar qualsevol tristesa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em consenteixo la tranquil·litat avui. Jo trio recordar la meva missió de donar pau.\""
  },
  {
    "day": 176,
    "title": "abraçar-TE",
    "teaName": "Infusió d'abraçada integradora",
    "benefit": "La meva única missió d'amor és la que la gran energia del bé em va regalar.",
    "lesson": "És un escut per a tu mateixa: saber que si ataques o t'enfades, a la primera que fas mal és a la teva pròpia pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Abraço el meu propòsit avui. Jo trio complir la meva missió de benestar.\""
  },
  {
    "day": 177,
    "title": "valorar-TE",
    "teaName": "Infusió de valoració equilibrada",
    "benefit": "Fer el bé i sentir-me feliç són exactament la mateixa cosa.",
    "lesson": "És dir des del fons de l'ànima que prefereixes entendre la veritat i la bondat abans que guanyar qualsevol baralla.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Valoro les meves accions avui. Jo trio saber que fer el bé em fa feliç.\""
  },
  {
    "day": 178,
    "title": "celebrar-TE",
    "teaName": "Infusió de celebració armònica",
    "benefit": "La força de l'amor em va crear a la seva mateixa imatge i semblança.",
    "lesson": "És posar-te les ulleres de l'amabilitat per trobar un detall bonic i alegre en qualsevol cosa que et passi.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Celebro la meva essència avui. Jo trio reconèixer el benestar que em va crear.\""
  },
  {
    "day": 179,
    "title": "rendir-TE",
    "teaName": "Infusió de cessació de resistència",
    "benefit": "L'amor veritable mai guarda rancor ni s'enutja per sempre.",
    "lesson": "És saber que les baralles no et donen res de bo i que l'únic lloc on estàs realment segura és en l'amor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em rendeixo a la pau avui. Jo trio deixar anar tot rancor i descansar.\""
  },
  {
    "day": 180,
    "title": "entusiasmar-TE",
    "teaName": "Infusió d'entusiasme serè",
    "benefit": "Els enuigs i rancors només tapen la llum bonica que tinc a dins.",
    "lesson": "És triar sempre el camí de la tranquil·litat, sabent que la teva ment no pot mirar la por i la pau al mateix temps.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'entusiasma la llum avui. Jo trio desbrossar la meva lluentor interior.\""
  },
  {
    "day": 181,
    "title": "connectar-TE",
    "teaName": "Infusió de connexió profunda",
    "benefit": "Descanso tranquil en l'abraçada del gran amor universal.",
    "lesson": "És descobrir que quan tu perdones i neteges els teus pensaments, ajudes a fer que tot el món sigui un lloc més lliure.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Connecto amb el descans avui. Jo trio reposar en l'abraçada de la pau.\""
  },
  {
    "day": 182,
    "title": "enamorar-TE",
    "teaName": "Infusió d'enamorament pacífic",
    "benefit": "Només el pla d'amor de l'univers per a fer-nos feliços funcionarà de debò.",
    "lesson": "És estimar la teva ment i donar valor només a allò que et dona pau, aprenent a perdonar amb tot el cor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'enamoro de la pau avui. Jo trio confiar en el pla del benestar.\""
  },
  {
    "day": 183,
    "title": "meravellar-TE",
    "teaName": "Infusió d'asombre net",
    "benefit": "Guardar rancor és anar en contra del pla d'amor que ens cuida.",
    "lesson": "És recordar que no et cal posar-te malalta ni enfadar-te per defensar-te, perquè la pau és el teu millor escut protector.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em meravello amb senzillesa avui. Jo trio deixar anar rancors que enterboleixen la meva pau.\""
  },
  {
    "day": 184,
    "title": "sorpren-TE",
    "teaName": "Infusió de sorpresa grata",
    "benefit": "El meu major desig és que brilli la llum de la bondat.",
    "lesson": "És saber que quan tu estàs bé, ajudes tot el que t'envolta a estar feliços i trieu junts el camí de la pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em sorprèn la bondat avui. Jo trio avivar el desig que brilli la meva llum.\""
  },
  {
    "day": 185,
    "title": "fascinar-TE",
    "teaName": "Infusió de fascinació armònica",
    "benefit": "No hi ha cap altra regla ni força que mani a la meva vida més que la de l'amor.",
    "lesson": "És acceptar arreglar les teves errades sense por, sabent que la tendresa és l'única cosa que cura qualsevol mal de panxa o de cap.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em fascina l'harmonia avui. Jo trio regir-me només per les lleis de l'afecte.\""
  },
  {
    "day": 186,
    "title": "cautivar-TE",
    "teaName": "Infusió de captiveri apacible",
    "benefit": "La llum de l'amor ja ha arribat a la meva vida!",
    "lesson": "És escoltar la veu dolça de la vida a través del cant dels ocells, el vent i totes les coses boniques de la natura.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em captiva la llum avui. Jo trio acollir el benestar que ja ha arribat.\""
  },
  {
    "day": 187,
    "title": "detenir-TE",
    "teaName": "Infusió de detenció conscient",
    "benefit": "No em manen les regles de la por, només les lleis de la manyia i el bé.",
    "lesson": "És recordar que tens un superpoder secret i meravellós: la capacitat de triar sempre la pau per sobre de qualsevol enuig.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em detinc davant de la por avui. Jo trio obeir només a les lleis de l'afecte.\""
  },
  {
    "day": 188,
    "title": "parar-TE",
    "teaName": "Infusió d'obertura al miracle",
    "benefit": "Tinc tot el dret del món a viure moments màgics plens d'amor i bondat.",
    "lesson": "És com un permís màgic per obrir bé els ulls i gaudir de moments fantàstics i plens de coses boniques cada dia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'aturo un instant avui. Jo trio obrir-me a viure moments màgics i bondadosos.\""
  },
  {
    "day": 189,
    "title": "pausar-TE",
    "teaName": "Infusió de pausa restauradora",
    "benefit": "Que els miracles i les sorpreses boniques esborrin tots els meus enuigs.",
    "lesson": "És fer una respiració profunda per deixar que les sorpreses boniques esborrin qualsevol enfadament o pensament lleig que tinguis.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Faig una pausa avui. Jo trio permetre que les sorpreses boniques esborrin els meus enuigs.\""
  },
  {
    "day": 190,
    "title": "respirar-TE",
    "teaName": "Infusió de respiració lúcida",
    "benefit": "Vull entendre bé què em passa per poder solucionar-ho amb un somriure.",
    "lesson": "T'ajuda a entendre què et passa per dins quan estàs de mal humor, per poder solucionar-ho de seguida amb un gran somriure.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Respiro amb calma avui. Jo trio comprendre les meves emocions per a sanar-les amb un somriure.\""
  },
  {
    "day": 191,
    "title": "oxigenar-TE",
    "teaName": "Infusió d'oxigenació mental",
    "benefit": "M'adono que tots els meus problemes ja tenen una solució plena de pau.",
    "lesson": "És adonar-te que per a qualsevol dilema o ximpleria, ja hi ha una solució tranquil·la i bonica esperant-te.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Oxigeno la meva ment avui. Jo trio veure que els meus reptes ja tenen una solució de pau.\""
  },
  {
    "day": 192,
    "title": "revitalitzar-TE",
    "teaName": "Infusió de revitalització conscient",
    "benefit": "Repasso que soc una llum brillant i que perdonar als altres és el meu millor superpoder.",
    "lesson": "És recordar que ets una persona plena de llum i que el teu millor superpoder secret és saber perdonar.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em revitalitzo avui. Jo trio recordar que perdonar és el meu major superpoder.\""
  },
  {
    "day": 193,
    "title": "energitzar-TE",
    "teaName": "Infusió d'energia renovada",
    "benefit": "Entenc que la meva llum porta tranquil·litat a tothom i m'ajuda a recordar com és d'important estimar.",
    "lesson": "És descobrir que quan tu estàs tranquil·la, encomanes aquesta pau a tothom i els recordes com és de bonic estimar.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Energizo el meu interior avui. Jo trio compartir tranquil·litat i amor.\""
  },
  {
    "day": 194,
    "title": "impulsar-TE",
    "teaName": "Infusió d'impuls afectiu",
    "benefit": "Descobreixo que fer el bé i sentir-me feliç van sempre de la mà.",
    "lesson": "És un joc divertit on descobreixes que fer coses bones pels altres i sentir-te super feliç van sempre agafades de la mà.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'impulso a fer el bé avui. Jo trio unir les meves accions amb la felicitat.\""
  },
  {
    "day": 195,
    "title": "motivar-TE",
    "teaName": "Infusió de motivació essencial",
    "benefit": "L'amor em va fer a la seva semblança i m'ensenya que el cor bondadós mai guarda enuigs.",
    "lesson": "És recordar que vas ser creada amb pur amor i que un cor tan bonic com el teu no necessita guardar cap ràbia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em motivo amb bondat avui. Jo trio mantenir un cor lliure d'enuigs.\""
  },
  {
    "day": 196,
    "title": "animar-TE",
    "teaName": "Infusió d'ànim unificat",
    "benefit": "Comprenc que els rancors oculten la meva llum, i que la veritable pau depèn del que trio a la meva ment.",
    "lesson": "T'ensenya que els enfadaments només amaguen la teva llum, i que estar en pau depèn de les idees boniques que tries tenir.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'annexo a la pau avui. Jo escullo triar pensaments que deixin brillar la meva llum.\""
  },
  {
    "day": 197,
    "title": "alçar-TE",
    "teaName": "Infusió d'alçament segur",
    "benefit": "Sé que només el pla de l'amor triomfa, i que guardar rancors és anar en contra d'aquesta felicitat.",
    "lesson": "És saber que l'amor sempre guanya, i que guardar pautes o ràbies només serveix per posar-te pedres a la teva pròpia felicitat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'alço en la llum avui. Jo trio donar suport al pla del benestar i l'alegria.\""
  },
  {
    "day": 198,
    "title": "superar-TE",
    "teaName": "Infusió de superació lluminosa",
    "benefit": "Desitjo amb tot el cor que brilli la llum, sabent que no hi ha més llei ni poder que el de la bondat universal.",
    "lesson": "És desitjar amb tot el cor que la teva llum brilli, sabent que l'única regla que mana a l'univers és la de la bondat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Supero els temors avui. Jo trio fer brillar la força de la bondad.\""
  },
  {
    "day": 199,
    "title": "atrevir-TE",
    "teaName": "Infusió d'atreviment serè",
    "benefit": "La llum ja és aquí per a guiar-me, recordant-me que només em governen les lleis de l'amor i la cura.",
    "lesson": "És tenir la valentia de confiar en les regles de l'amor, deixant-te guiar sempre per l'amor i el bon tracte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'atreveixo a confiar avui. Jo trio deixar-me guiar per les lleis de l'afecte.\""
  },
  {
    "day": 200,
    "title": "llançar-TE",
    "teaName": "Infusió de llançament confiat",
    "benefit": "Tinc tot el dret a viure coses hermoses i màgiques que reemplacin qualsevol pensament d'enuig.",
    "lesson": "És recordar que tens tot el dret a viure coses màgiques i precioses que esborrin qualsevol pensament d'enfadament.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em llanço als miracles avui. Jo trio viure experiències boniques i sense enuigs.\""
  },
  {
    "day": 201,
    "title": "iniciar-TE",
    "teaName": "Infusió d'inici fresc",
    "benefit": "Aprenc a mirar els meus problemes de cara per a entendre'ls i adonar-me que ja estan resolts amb amor.",
    "lesson": "T'ensenya a mirar els problemes de cara sense por, adonant-te que l'amor ja els ha resolt tots per tu.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Inicio amb claredat avui. Jo trio mirar els meus reptes sabent que l'amor els resoldrà.\""
  },
  {
    "day": 202,
    "title": "activar-TE",
    "teaName": "Infusió d'activació lluminosa",
    "benefit": "Els moments màgics i feliços es veuen amb la llum de l'amor.",
    "lesson": "És un recordatori alegre que els moments més divertits i màgics del dia es veuen molt millor quan mires amb afecte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Activo la meva alegria avui. Jo trio veure els moments màgics amb llum i amor.\""
  },
  {
    "day": 203,
    "title": "mou-TE",
    "teaName": "Infusió de moviment alliberador",
    "benefit": "Les sorpreses boniques es veuen a la llum, i la llum i la força interior són una sola cosa.",
    "lesson": "És connectar amb tu mateixa per saber que la teva alegria, la teva força interior i la teva llum formen una sola cosa increïble.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em moc en la llum avui. Jo trio sentir la meva força interior i la meva alegria unides.\""
  },
  {
    "day": 204,
    "title": "comunicar-TE",
    "teaName": "Infusió de comunicació afectiva",
    "benefit": "Soc un ésser perfecte i meravellós, tal com em va crear el gran amor de l'univers.",
    "lesson": "És abraçar la teva autoestima per recordar que ets una persona perfecta, meravellosa i plena de llum per dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em comunico amb amor propi avui. Jo trio recordar que soc un ésser perfecte i lluminós.\""
  },
  {
    "day": 205,
    "title": "expressar-TE",
    "teaName": "Infusió d'expressió autèntica",
    "benefit": "Soc un sol ésser ple de llum, unit per sempre a la gran energia creadora.",
    "lesson": "És sentir que ets pura llum i que estàs unida per sempre a la gran energia que ho ha creat tot.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'expresso des de la meva essència avui. Jo trio sentir-me unida a la gran energia de llum.\""
  },
  {
    "day": 206,
    "title": "manifestar-TE",
    "teaName": "Infusió de manifestació armònica",
    "benefit": "Sentir-me a resguard i feliç ve del meu propi ser interior de llum.",
    "lesson": "És trobar un refugi secret dins teu sabent que la felicitat i la seguretat de debò venen de la teva pròpia llum interior.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Manifesto el meu refugi avui. Jo trio trobar la felicitat al meu interior lluminós.\""
  },
  {
    "day": 207,
    "title": "transcendir-TE",
    "teaName": "Infusió de transcendència àmplia",
    "benefit": "Soc pura llum i energia bonica, no només un cos.",
    "lesson": "És recordar que ets molt més que un cos: ets pura energia bonica, llum i alegria sense límits.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Transcendeixo les limitacions avui. Jo trio reconèixer-me com a pura energia de llum.\""
  },
  {
    "day": 208,
    "title": "elevar-TE",
    "teaName": "Infusió d'elevació profunda",
    "benefit": "Accepto amb alegria la meva missió de portar amor i pau al món.",
    "lesson": "És acceptar amb molta il·lusió la teva missió més bonica: portar pau i amor a tot el món on vagis.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'elevo en el meu propòsit avui. Jo trio acceptar amb alegria la meva missió de pau.\""
  },
  {
    "day": 209,
    "title": "fusionar-TE",
    "teaName": "Infusió de fusió pacífica",
    "benefit": "La meva única tasca aquí a la Terra és compartir pau i amor amb tothom.",
    "lesson": "És descobrir que la teva única feina important a la Terra és compartir pau i carinyo amb tothom.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em fusiono amb la tasca d'estimar avui. Jo trio compartir pau amb tothom.\""
  },
  {
    "day": 210,
    "title": "integrar-TE",
    "teaName": "Infusió d'integració completa",
    "benefit": "La meva ajuda és súper important en el gran pla d'amor de l'univers.",
    "lesson": "És valorar-te i saber que la teva ajuda és súper important dins del gran pla de benestar de l'univers.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Integro el meu valor avui. Jo trio reconèixer que la meva ajuda és valuosa en el pla de pau.\""
  },
  {
    "day": 211,
    "title": "explorar-TE",
    "teaName": "Infusió d'exploració curiosa",
    "benefit": "El desig del gran amor per a mi és que sigui totalment feliç. Jo també desitjo amb tot el cor ser immensament feliç.",
    "lesson": "És permetre't desitjar amb tot el cor ser immensament feliç i viure en pau cada dia de la teva vida.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Exploro la meva felicitat avui. Jo trio permetre'm ser immensament feliç.\""
  },
  {
    "day": 212,
    "title": "descobrir-TE",
    "teaName": "Infusió de descobriment joiós",
    "benefit": "La gran energia de l'univers és pur amor, i per això també és pura alegria.",
    "lesson": "És adonar-te que el món està fet de llum i riures, i que tu estàs convidada a la festa més divertida de l'univers.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Descobreixo l'alegria avui. Jo trio sintonitzar amb l'energia de la felicitat.\""
  },
  {
    "day": 213,
    "title": "abandonar-TE",
    "teaName": "Infusió d'abandó confiat",
    "benefit": "Només busco les coses que em porten pau i amor de debò.",
    "lesson": "És triar només les coses que et fan somriure de debò i deixar de banda les que et posen de mal humor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Abandono el que és innecessari avui. Jo trio buscar només el que em porta pau real.\""
  },
  {
    "day": 214,
    "title": "netejar-TE",
    "teaName": "Infusió de neteja conscient",
    "benefit": "La pau i l'alegria de l'univers són regals que ja són meus.",
    "lesson": "És obrir un regal màgic i adonar-te que la pau i la joia ja eren teves abans de demanar-les. Ja són al teu cor!",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Netejo els meus dubtes avui. Jo trio acceptar la pau i l'alegria que ja em pertanyen.\""
  },
  {
    "day": 215,
    "title": "purificar-TE",
    "teaName": "Infusió de purificació essencial",
    "benefit": "Em quedo en silenci i escolto la veu de la veritat al meu cor.",
    "lesson": "És un joc on et quedes molt quieta i en silenci per escoltar la veueta dolça que et diu la veritat des de dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Purifico la meva ment avui. Jo trio callar el soroll i escoltar la veritat interior.\""
  },
  {
    "day": 216,
    "title": "silenciar-TE",
    "teaName": "Infusió de silenci receptiu",
    "benefit": "La veritat i l'amor arreglaran tots els pensaments lletjos de la meva ment.",
    "lesson": "És confiar en un drap màgic d'amor que ve i neteja tots els pensaments lletjos i de ràbia del teu cap.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Silencio els judicis avui. Jo trio deixar que la veritat ordeni els meus pensaments.\""
  },
  {
    "day": 217,
    "title": "aquietar-TE",
    "teaName": "Infusió de quietud interior",
    "benefit": "Regalar amor i rebre'l són exactament el mateix.",
    "lesson": "T'ensenya que quan regales una abraçada o un pensament bonic a algú, és exactament com si te'l regalessis a tu mateixa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Aquieto el meu interior avui. Jo trio saber que donar i rebre afecte és el mateix.\""
  },
  {
    "day": 218,
    "title": "connectar-TE",
    "teaName": "Infusió de connexió profunda",
    "benefit": "Descanso tranquil en l'abraçada del gran amor universal.",
    "lesson": "És com ficar-te sota el mantell més suau i calentó del món per descansar tranquil·la en l'abraçada de la vida.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Connecto amb el descans avui. Jo trio reposar en l'abraçada de la pau.\""
  },
  {
    "day": 219,
    "title": "relaxar-TE",
    "teaName": "Infusió de relaxació conscient",
    "benefit": "Segueixo sent un ésser meravellós, tal com em va fer l'energia del bé.",
    "lesson": "Serveix per recordar-te que ets una persona meravellosa i valuosa, feta amb tota la cura i la tendresa de l'univers i que ets perfecta tal i com ets.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em relaxo en el meu valor avui. Jo trio recordar que soc un regal perfecte de la vida.\""
  },
  {
    "day": 220,
    "title": "descansar-TE",
    "teaName": "Infusió de descans apacible",
    "benefit": "Recordem que els moments bonics es veuen quan mirem amb amor i fortalesa interior.",
    "lesson": "És mirar al teu voltant com una superheroïna fortíssima que sap veure el millor de cada situació amb un cor ple d'amor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Descanso en la meva fortalesa avui. Jo trio mirar amb amor i fermesa.\""
  },
  {
    "day": 221,
    "title": "sossegar-TE",
    "teaName": "Infusió de serenitat profunda",
    "benefit": "La serenitat és l'estat natural d'un cor que confia en el bé.",
    "lesson": "És apagar qualsevol nervi o agitació per descansar en la certesa que tot està bé i que estàs segura.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'assereno avui. Jo trio habitar en la quietud de la meva ment.\""
  },
  {
    "day": 222,
    "title": "felicitar-TE",
    "teaName": "Infusió de felicitació sincera",
    "benefit": "Som éssers de llum units a tot l'univers, i la pau neix del nostre propi ser.",
    "lesson": "T'ajuda a recordar que estàs connectada amb totes les estrelles i l'univers, i que la teva pau neix de la teva pròpia llum.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em felicito en unitat avui. Jo trio recordar que la pau neix del meu interior.\""
  },
  {
    "day": 223,
    "title": "divertir-TE",
    "teaName": "Infusió de diversió lúdica",
    "benefit": "Recordem que som energia bonica i que tenim la hermosa missió de compartir pau.",
    "lesson": "És un joc súper divertit on recordes que la teva missió especial a la Terra és anar escampant pau i riures per on passes.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em diverteixo compartint pau avui. Jo trio recordar la meva preciosa missió d'harmonia.\""
  },
  {
    "day": 224,
    "title": "entendrir-TE",
    "teaName": "Infusió d'enterneiximent compassiu",
    "benefit": "Compartir amor és el nostre treball més valuós i tots som necessaris en aquest pla.",
    "lesson": "És descobrir que la teva feina més important com a persona és compartir amor, i que tu ets supernecessària en aquest equip.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'entendreixo amb propòsit avui. Jo trio valorar el meu treball de compartir afecte.\""
  },
  {
    "day": 225,
    "title": "solidaritzar-TE",
    "teaName": "Infusió de solidaritat compartida",
    "benefit": "La força del bé vol que siguem feliços, i nosaltres també triem aquesta alegria.",
    "lesson": "És adonar-te que el món vol que siguis immensament feliç, i tu decideixes unir-te a aquesta mateixa alegria amb tothom.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em solidaritzo amb l'alegria avui. Jo escullo triar la felicitat per a tothom.\""
  },
  {
    "day": 226,
    "title": "recordar-TE",
    "teaName": "Infusió de memòria lluminosa",
    "benefit": "Com que l'energia de l'univers és amor, buscar el bé ens dona el que de debò ens pertany.",
    "lesson": "És com trobar un tresor que ja era teu: buscar el bé sempre et torna la pau que et pertany des de sempre.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Recordo el que em pertany avui. Jo trio buscar el bé que em dona pau.\""
  },
  {
    "day": 227,
    "title": "il·luminar-TE",
    "teaName": "Infusió d'il·luminació serena",
    "benefit": "La pau és nostra, només necessitem quedar-nos tranquils per a escoltar la veritat del cor.",
    "lesson": "T'ensenya que no has de córrer ni cridar; només et cal quedar-te tranquil·la per escoltar la veritat bonica que tens al cor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Il·lumino la meva escolta avui. Jo trio la quietud per a oir la veritat interior.\""
  },
  {
    "day": 228,
    "title": "despertar-TE",
    "teaName": "Infusió de despertar ple",
    "benefit": "La veritat arregla els nostres errors, i aprenem que donar i rebre afecte és el mateix.",
    "lesson": "És adonar-te que quan et comprens i no et baralles, donar un petó o rebre'l et fa sentir exactament la mateixa felicitat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Desperto a la sanació avui. Jo trio donar i rebre afecte amb naturalitat.\""
  },
  {
    "day": 229,
    "title": "observar-TE",
    "teaName": "Infusió d'observació compassiva",
    "benefit": "Ens sentim segurs i tranquils sabent que sempre som un regal perfecte de la vida.",
    "lesson": "És sentir-te completament segura i sostinguda, sabent que ets un regal únic i preciós per a tot el món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Observo amb tendresa avui. Jo trio sentir-me segura sabent que soc un regal de la vida.\""
  },
  {
    "day": 230,
    "title": "aquietar-TE",
    "teaName": "Infusió d'aquietament centrat",
    "benefit": "Perdonar als altres és la clau màgica per a obrir la porta de la felicitat.",
    "lesson": "És descobrir la clau màgica i secreta: quan perdones els altres, s'obre la porta d'un castell ple de joia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Aquieto els meus judicis avui. Jo trio fer servir el perdó com a clau de la felicitat.\""
  },
  {
    "day": 231,
    "title": "enfocar-TE",
    "teaName": "Infusió d'enfocament lúcid",
    "benefit": "El perdó em regala tot el bo i bonic que el meu cor desitja.",
    "lesson": "És com obrir una caixa plena de sorpreses boniques: el perdó et regala tot el que el teu cor desitja per estar bé.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'enfoco en el perdó avui. Jo trio rebre tot el bo que el meu cor desitja.\""
  },
  {
    "day": 232,
    "title": "ubicar-TE",
    "teaName": "Infusió d'ubicació serena",
    "benefit": "Gràcies, gran energia de l'amor, per tots els regals hermosos que m'has donat!",
    "lesson": "És dibuixar un somriure gegant i dir \"gràcies!\" a la vida per tots els regals preciosos que reps cada dia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'ubico en la gratitud avui. Jo trio agrair els regals bonics de la vida.\""
  },
  {
    "day": 233,
    "title": "centrar-TE",
    "teaName": "Infusió de centrat estable",
    "benefit": "Vull recordar sempre que estic unit a la gran força del bé.",
    "lesson": "És recordar sempre que camines agafada de la mà de la gran força del bé, així que mai no estàs sola.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em centro en la meva unió avui. Jo trio recordar que vaig de la mà de la força del bé.\""
  },
  {
    "day": 234,
    "title": "replantejar-TE",
    "teaName": "Infusió de replantejament savi",
    "benefit": "En un moment de calma i tranquil·litat rebo els millors consells de l'amor.",
    "lesson": "És descobrir que quan et quedes en calma i silenci, reps els millors consells d'amor per saber què fer.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Replantejo les meves idees avui. Jo trio escoltar els consells de la calma.\""
  },
  {
    "day": 235,
    "title": "desfer-TE",
    "teaName": "Infusió de desfer alliberador",
    "benefit": "Tot l'amor i l'amabilitat que dono als altres me l'estic donant a mi mateix.",
    "lesson": "És adonar-te que tota la tendresa i la paciència que regales al teu voltant, te la dones a tu mateixa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em desfaig l'egoisme avui. Jo trio saber que en donar amor me'l dono a mi mateixa.\""
  },
  {
    "day": 236,
    "title": "alliberar-TE",
    "teaName": "Infusió de llibertat dolça",
    "benefit": "No existeix cap altre amor tan gran i segur com el de l'univers.",
    "lesson": "És saber que no hi ha cap abraçada més gran ni cap lloc més segur per a tu que l'amor de l'univers.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Allibero els meus temors avui. Jo trio confiar en l'amor més segur i gran.\""
  },
  {
    "day": 237,
    "title": "il·luminar-TE",
    "teaName": "Infusió d'il·luminació integrada",
    "benefit": "Les coses lletjoses del món no tenen res a veure amb el que realment desitjo.",
    "lesson": "És adonar-te que les coses lletjes o les baralles de fora no tenen res a veure amb els desitjos bonics de la teva ànima.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Il·lumino les meves eleccions avui. Jo trio enfocar-me en el que la meva ànima veritablement desitja.\""
  },
  {
    "day": 238,
    "title": "confiar-TE",
    "teaName": "Infusió de confiança plena",
    "benefit": "Més enllà dels problemes, hi ha un món ple de pau que és el que vull veure.",
    "lesson": "És mirar més enllà dels petits problemes per descobrir un paisatge immens i feliç que està esperant que el miris.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Confio en la pau avui. Jo trio mirar més enllà dels problemes cap a l'harmonia.\""
  },
  {
    "day": 239,
    "title": "desvincular-TE",
    "teaName": "Infusió de desvinculació serena",
    "benefit": "És impossible mirar la por i la pau al mateix temps, trio mirar la pau!",
    "lesson": "És entendre que no pots mirar la por i la pau alhora; tu ets la reina del teu cap i tries mirar sempre la pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em desvinculo de la por avui. Jo trio mirar exclusivament la pau.\""
  },
  {
    "day": 240,
    "title": "neutralitzar-TE",
    "teaName": "Infusió de neutralització pacífica",
    "benefit": "Ningú que busqui la veritat i l'amor amb ganes pot fallar.",
    "lesson": "És saber que quan busques l'amor i la veritat amb moltes ganes, és impossible que no els trobis. Sempre ho aconsegueixes!",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Neutralitzo el dubte avui. Jo trio buscar la veritat amb ganes sinceres.\""
  },
  {
    "day": 241,
    "title": "equilibrar-TE",
    "teaName": "Infusió d'equilibri armònic",
    "benefit": "Allibero el món de totes les històries lletjoses que vaig inventar sobre ell.",
    "lesson": "És esborrar del teu conte les històries tristes del passat per deixar que el món sigui nou, net i bonic.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'equilibro en les meves percepcions avui. Jo trio alliberar el món d'històries falses.\""
  },
  {
    "day": 242,
    "title": "responsabilitzar-TE",
    "teaName": "Infusió de responsabilitat afectiva",
    "benefit": "No donaré importància a les joguines o coses que no em porten pau real.",
    "lesson": "És aprendre a no enfadar-te per objectes o coses petites que no t'ajuden a tenir la teva ment tranquil·la i feliç.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em responsabilitzo de les meves prioritats avui. Jo trio donar importància només al que porta pau.\""
  },
  {
    "day": 243,
    "title": "reconeix-TE",
    "teaName": "Infusió de reconeixement innocent",
    "benefit": "Vull aprendre a perdonar amb un cor net i sincer.",
    "lesson": "És aprendre a perdonar des de ben endins, amb un cor transparent, net i sense guardar cap rancor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Reconec la puresa avui. Jo trio perdonar amb un cor net.\""
  },
  {
    "day": 244,
    "title": "decideix-TE",
    "teaName": "Infusió de decisió lúcida",
    "benefit": "Si tracto de barallar o defendre'm, és perquè vaig creure que m'estaven atacant.",
    "lesson": "És adonar-te que si et poses a la defensiva és només perquè vas creure que algú et volia fer mal, però estàs totalment segura.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Decideixo deixar anar les armes avui. Jo trio comprendre que ningú m'ataca.\""
  },
  {
    "day": 245,
    "title": "obrir-TE",
    "teaName": "Infusió d'obertura receptiva",
    "benefit": "Sentir-me malalt o enfadat és només una forma d'ocultar la veritat de l'amor.",
    "lesson": "És descobrir que quan et sents enfadada o malalta, només és una forma d'amagar l'amor que tens a dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Obro el meu enteniment avui. Jo trio veure que el malestar només oculta l'afecte.\""
  },
  {
    "day": 246,
    "title": "amollar-TE",
    "teaName": "Infusió de deixar anar generós",
    "benefit": "Quan netejo el meu cor i somric, ajudo que tothom al meu voltant se senti bé.",
    "lesson": "És veure com el teu propi somriure i el teu cor net ajuden que tots els teus amics i la teva família se sentin bé.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Deixo anar el judici avui. Jo trio somriure perquè el meu entorn se senti bé.\""
  },
  {
    "day": 247,
    "title": "pacificar-TE",
    "teaName": "Infusió de pacificació profunda",
    "benefit": "El món de la pau i l'alegria és la millor opció que puc triar.",
    "lesson": "És adonar-te que entre totes les opcions del món, triar la joia i la pau és la millor jugada que pots fer.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em pacifico per dins avui. Jo trio el món de la pau com la meva millor opció.\""
  },
  {
    "day": 248,
    "title": "protegir-TE",
    "teaName": "Infusió de protecció serena",
    "benefit": "Accepto netejar tots els meus errors i tornar a començar amb amor.",
    "lesson": "És la tranquil·litat de saber que pots esborrar qualsevol equivocació i començar de nou amb molta estima.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em protegeixo renovant-me avui. Jo trio començar de nou amb amor.\""
  },
  {
    "day": 249,
    "title": "lliurar-TE",
    "teaName": "Infusió d'entrega confiada",
    "benefit": "L'amor i el perdó són l'únic que sana qualsevol tristesa.",
    "lesson": "És utilitzar la màgia de l'amor i del perdó, que són els únics ingredients capaços de curar qualsevol tristesa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Lliuro les meves tristeses avui. Jo trio permetre que el perdó sani el meu cor.\""
  },
  {
    "day": 250,
    "title": "recordar-TE",
    "teaName": "Infusió de protecció de la pau",
    "benefit": "Els meus pensaments d'atac i enuig l'únic que fan és fer mal a la meva pau interior.",
    "lesson": "És com portar un escut invisible: t'ensenya que quan t'enfades o ataques algú, a la primera que fas mal és a la teva pròpia pau interior.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Recordo cuidar la meva pau avui. Jo trio no fer-me mal amb enuigs.\""
  },
  {
    "day": 251,
    "title": "disposar-TE",
    "teaName": "Infusió d'intenció genuïna",
    "benefit": "Per sobre de qualsevol altra cosa, el que més vull és veure la veritat!",
    "lesson": "És com triar el teu tresor favorit: preferir entendre la veritat i la bondat per damunt de qualsevol discussió o baralla.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em disposo a veure la veritat avui. Jo trio prioritzar la claredat en la meva ment.\""
  },
  {
    "day": 252,
    "title": "transformar-TE",
    "teaName": "Infusió de perspectiva renovada",
    "benefit": "Estic decidit a mirar totes les coses d'una manera bonica i diferent.",
    "lesson": "És posar-te unes ulleres alegres per mirar cada petita cosa del teu dia amb molta amabilitat i ganes d'aprendre.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Transformo la meva mirada avui. Jo trio veure el que és bell en cada detall.\""
  },
  {
    "day": 253,
    "title": "meravellar-TE",
    "teaName": "Infusió de meravella conscient",
    "benefit": "L'únic amor segur és el de l'univers, i el món de baralles no ens ofereix res valuós.",
    "lesson": "És recordar que l'únic amor que no falla mai és el de l'univers, i que les baralles no serveixen per a res valuós.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em meravello amb l'afecte avui. Jo trio l'amor segur i rebutjo les baralles.\""
  },
  {
    "day": 254,
    "title": "reconciliar-TE",
    "teaName": "Infusió de reconciliació subtil",
    "benefit": "Preferim el món de tranquil·litat, sabent que no es pot mirar la por i la pau alhora.",
    "lesson": "És triar sempre la tranquil·litat, sabent que la teva ment no pot mirar la por i la pau al mateix moment.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em reconcilio amb la tranquil·litat avui. Jo trio mirar únicament la pau.\""
  },
  {
    "day": 255,
    "title": "empoderar-TE",
    "teaName": "Infusió d'empoderament pacífic",
    "benefit": "Buscar el bé sempre funciona, i al perdonar alliberem el món dels nostres mals pensaments.",
    "lesson": "És descobrir que quan perdonis, neteges els teus pensaments i ajudes a alliberar tot el món de la ràbia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'empodero perdonant avui. Jo trio alliberar el món dels meus mals pensaments.\""
  },
  {
    "day": 256,
    "title": "inventar-TE",
    "teaName": "Infusió de creativitat lluminosa",
    "benefit": "Diem valor només al que porta pau i aprenem a perdonar de debò.",
    "lesson": "És donar valor només a allò que et porta una gran tranquil·litat al cor i aprendre a perdonar de veritat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Invento una mirada de pau avui. Jo trio valorar únicament el que porta tranquil·litat.\""
  },
  {
    "day": 257,
    "title": "reinventar-TE",
    "teaName": "Infusió de reinvenció armònica",
    "benefit": "No necessitem barallar ni malaltir per a protegir-nos, la pau és la nostra veritable protecció.",
    "lesson": "És saber que no cal barallar-te ni posar-te malalta per protegir-te, perquè la pau és el teu millor refugi.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em reinvento en la pau avui. Jo trio la tranquil·litat com la meva única protecció.\""
  },
  {
    "day": 258,
    "title": "sossegar-TE",
    "teaName": "Infusió de sossec integrador",
    "benefit": "Quan estem bé, ajudem als altres a estar bé i triem el camí de la pau.",
    "lesson": "És adonar-te que quan tu estàs bé i feliç, ajudes a tot el qui t'envolta a estar igual de bé. Trieu la pau junts!",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"m'assossego compartint benestar avui. Jo trio el camí de la pau per a tothom.\""
  },
  {
    "day": 259,
    "title": "sanar-TE",
    "teaName": "Infusió de sanació lúcida",
    "benefit": "Acceptem corregir els nostres fallos perquè l'amor és l'únic que cura tot dolor.",
    "lesson": "És acceptar corregir els petits errors de la teva ment recordant que l'afecte i la tendresa ho curen tot.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Sano els meus errors avui. Jo trio permetre que l'afecte curi qualsevol dolor.\""
  },
  {
    "day": 260,
    "title": "beneir-TE",
    "teaName": "Infusió de benedicció constant",
    "benefit": "Totes les coses boniques de la natura em recorden la veu del gran amor.",
    "lesson": "És escoltar la veu de l'amor de la vida a través de les coses boniques de la natura, com els ocells i les flors.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Beneeixo la natura avui. Jo trio escoltar la veu de l'afecte en el que m'envolta.\""
  },
  {
    "day": 261,
    "title": "expandir-TE",
    "teaName": "Infusió d'expansió benèvola",
    "benefit": "Tinc el superpoder de triar sempre entre l'enuig o la pau.",
    "lesson": "És recordar que tens un superpoder increïble: la capacitat de triar sempre entre enfadar-te o estar en pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Expandeixo el meu poder de triar avui. Jo trio la pau per sobre de l'enuig.\""
  },
  {
    "day": 262,
    "title": "unir-TE",
    "teaName": "Infusió d'unió protectora",
    "benefit": "Quan no ataco ni em defenso, estic totalment a resguard.",
    "lesson": "És un joc de pau on descobreixes que quan decideixes no atacar ningú, ets intocable i estàs totalment segura.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'uneixo a la seguretat avui. Jo trio estar a resguard en no atacar ni defendre'm.\""
  },
  {
    "day": 263,
    "title": "salvar-TE",
    "teaName": "Infusió de salvació afectiva",
    "benefit": "Soc un dels ajudants especials de la llum i el bé al món.",
    "lesson": "És recordar que ets una ajudant especial de la llum i del bé, repartint alegria a tot el món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em salvo servint al bé avui. Jo trio ser un agent de llum al món.\""
  },
  {
    "day": 264,
    "title": "acceptar-TE",
    "teaName": "Infusió d'acceptació serena",
    "benefit": "Em faig a un costat i deixo que l'amor m'ensenyi per on caminar.",
    "lesson": "És fer-te a un costat amb molta humilitat per deixar que l'amor i la suavitat guiïn cada pas que fas.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Accepto ser guiada avui. Jo trio deixar que l'afecte m'indiqui el camí.\""
  },
  {
    "day": 265,
    "title": "acompanyar-TE",
    "teaName": "Infusió d'acompanyament lluminós",
    "benefit": "Camino al costat de la gran energia creadora en un ambient de llum i alegria.",
    "lesson": "És caminar de la mà de la gran energia creadora, gaudint d'un ambient ple de llum i de molts riures.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Acompanyo els meus passos amb llum avui. Jo trio caminar en un ambient d'alegria.\""
  },
  {
    "day": 266,
    "title": "enfortir-TE",
    "teaName": "Infusió d'enfortiment conscient",
    "benefit": "Ara mateix trio sentir la presència amorosa que m'envolta.",
    "lesson": "És tancar els ulls un segon per sentir ben endins l'abraçada amorosa que t'envolta a totes hores.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'enforteixo sentint la presència avui. Jo trio percebre l'afecte al meu voltant.\""
  },
  {
    "day": 267,
    "title": "arrelar-TE",
    "teaName": "Infusió d'arrelament pacífic",
    "benefit": "Avui aprenc a donar amb la mateixa alegria amb la qual rebo regals.",
    "lesson": "És aprendre a regalar i compartir les teves coses amb la mateixa alegria amb què reps un regal de Nadal.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'arrelo en la generositat avui. Jo trio donar amb la mateixa alegria que rebo.\""
  },
  {
    "day": 268,
    "title": "vincular-TE",
    "teaName": "Infusió de vinculació universal",
    "benefit": "Comparteixo amb tothom les sorpreses boniques i somriures que he rebut.",
    "lesson": "És compartir amb tots els que t'envolten els somriures i les sorpreses boniques que la vida et regala.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em vinculo compartint somriures avui. Jo trio repartir les sorpreses boniques.\""
  },
  {
    "day": 269,
    "title": "inspirar-TE",
    "teaName": "Infusió d'inspiració present",
    "benefit": "La meva veritable llar és la pau; la por és només un visitant que ha de marxar.",
    "lesson": "És recordar que la teva veritable llar és la pau, i que la por només és un visitant que ve i se'n va de seguida.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'inspiro en la meva llar de pau avui. Jo trio deixar marxar la por com a un visitant.\""
  },
  {
    "day": 270,
    "title": "perdonar-TE",
    "teaName": "Infusió de perdó definitiu",
    "benefit": "Dona'm la teva abraçada de llum, estimat amic i germà d'aquest univers.",
    "lesson": "És demanar i donar una abraçada de llum radiant a totes les companyues i amigues del teu univers.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Perdono abraçant avui. Jo trio sentir la proximitat fraternal a l'univers.\""
  },
  {
    "day": 271,
    "title": "refugiar-TE",
    "teaName": "Infusió de refugi segur",
    "benefit": "Segueixo sent un ésser perfecte, fet de pur amor i bondat.",
    "lesson": "És recordar que ets una persona perfecta, feta de pura bondat i d'un amor inesgotable.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em refugio en la meva perfecció avui. Jo trio recordar que estic feta de pur amor.\""
  },
  {
    "day": 272,
    "title": "tranquil·litzar-TE",
    "teaName": "Infusió de tranquil·litat escut",
    "benefit": "La llum de la vida mai no mor, som éssers lliures per sempre.",
    "lesson": "És saber que la llum de la teva vida no s'apaga mai i que ets una persona totalment lliure per sempre.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Tranquil·litzo el meu esperit avui. Jo trio saber que soc lliure i lluminosa per sempre.\""
  },
  {
    "day": 273,
    "title": "escoltar-TE",
    "teaName": "Infusió d'escolta valenta",
    "benefit": "Ara estem units a la gran font d'on neix tot l'amor.",
    "lesson": "És recordar que estàs connectada amb la gran font d'on neix tot l'afecte i tota l'alegria del món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Escolto la meva font avui. Jo trio sentir-me unida a l'origen de tot l'afecte.\""
  },
  {
    "day": 274,
    "title": "nodrir-TE",
    "teaName": "Infusió de nutrició interior",
    "benefit": "Que la meva ment no oblidi mai com de molt l'univers m'estima.",
    "lesson": "És cuidar el teu cap perquè mai oblidi tot el que t'estima l'univers a cada instant.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Nodreixo la meva ment avui. Jo trio recordar el gran afecte que l'univers em té.\""
  },
  {
    "day": 275,
    "title": "relaxar-TE",
    "teaName": "Infusió de relaxació compartida",
    "benefit": "Se m'han lliurat els regals més hermosos de la pau i l'alegria.",
    "lesson": "És recordar tots els regals bonics de pau i alegria que la vida t'ha lliurat per cuidar-te.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em relaxo rebent avui. Jo trio acceptar els preciosos regals de pau.\""
  },
  {
    "day": 276,
    "title": "actualitzar-TE",
    "teaName": "Infusió d'actualització serena",
    "benefit": "Només hi ha una vida d'amor i la comparteixo amb tota la creació.",
    "lesson": "És recordar que només hi ha una vida d'amor, i que la comparteixes amb tota la creació en un gran equip.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Actualitzo la meva connexió avui. Jo trio compartir la vida i l'afecte amb la creació.\""
  },
  {
    "day": 277,
    "title": "compren-TE",
    "teaName": "Infusió de comprensió profunda",
    "benefit": "El regal de l'amor ja em va ser donat, el rebeixo avui amb una abraçada.",
    "lesson": "És rebre avui amb una abraçada gegant el regal de l'afecte que ja et pertany des del primer dia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Comprenc el regal rebut avui. Jo trio acceptar l'afecte amb una abraçada.\""
  },
  {
    "day": 278,
    "title": "alinear-TE",
    "teaName": "Infusió d'alineació feliç",
    "benefit": "Viu feliç gràcies a l'amor de l'univers i això em fa lliure.",
    "lesson": "És viure amb molta alegria gràcies l'afecte del teu entorn, sabent que això et fa completament lliure.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Alineo la meva llibertat avui. Jo trio viure feliç i lliure gràcies a l'afecte.\""
  },
  {
    "day": 279,
    "title": "harmonitzar-TE",
    "teaName": "Infusió d'harmonització incommovible",
    "benefit": "En el gran amor no hi ha espai per a la crueltat, ni tampoc al meu cor.",
    "lesson": "És recordar queen l'amor no hi ha espai per a la crueltat, i treure-la del tot del teu cor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Harmonitzo el meu cor avui. Jo trio excloure tota crueltat del meu interior.\""
  },
  {
    "day": 280,
    "title": "il·lusionar-TE",
    "teaName": "Infusió de percepció il·lusionada",
    "benefit": "Tot ens recorda l'amor i tenim el poder de decidir ser feliços.",
    "lesson": "És utilitzar el teu superpoder de decidir per triar ser una persona feliç a través de l'afecte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Il·lusiono el meu destí avui. Jo trio usar el meu poder per a ser feliç.\""
  },
  {
    "day": 281,
    "title": "projectar-TE",
    "teaName": "Infusió de projecció bella",
    "benefit": "No ataca'ns ens manté segurs i ens converteix en ambaixadors del bé.",
    "lesson": "És saber que no atacar ningú et manté segura i et converteix en una ambaixadora del bé.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Projecto seguretat avui. Jo trio ser una ambaixadora del bé mitjançant la pau.\""
  },
  {
    "day": 282,
    "title": "compadir-TE",
    "teaName": "Infusió de compassió pacífica",
    "benefit": "Permetem que l'amor ens guiï i caminem alegres pel món.",
    "lesson": "És deixar que l'afecte et guii per caminar ben feliç i alegre per tot el món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em compadeixo amb alegria avui. Jo trio deixar-me guiar per l'afecte en caminar.\""
  },
  {
    "day": 283,
    "title": "agermanar-TE",
    "teaName": "Infusió de fraternitat lluminosa",
    "benefit": "Vivim el moment present i aprenem a compartir tot el que és bo.",
    "lesson": "És gaudir del moment present amb molta energia i aprendre a compartir totes les coses bones amb les persones que t'envolten.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'agermano en el present avui. Jo trio gaudir l'ara compartint el que és bo.\""
  },
  {
    "day": 284,
    "title": "sintonitzar-TE",
    "teaName": "Infusió de sintonia dissolvent",
    "benefit": "Compartim miracles d'amor i recordem que la nostra llar és la pau.",
    "lesson": "És compartir petits miracles d'afecte i recordar que la teva veritable llar és la pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Sintonitzo amb la meva llar avui. Jo trio compartir miracles i habitar en la pau.\""
  },
  {
    "day": 285,
    "title": "estimar-TE",
    "teaName": "Infusió d'amor incondicional",
    "benefit": "Les coses que veus al teu voltant no signifiquen nada per sí soles. Tu ets qui decideix si algo t'enfada o et dona pau al teu cap.",
    "lesson": "És fondre tota autocrítica amb una tendresa infinita cap a tu mateixa, recordant que ets una persona valuosa tal com ets.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Estimo la meva ment avui. Jo trio mirar aquest moment amb pau i amabilitat.\""
  },
  {
    "day": 286,
    "title": "consentir-TE",
    "teaName": "Infusió de presència conscient",
    "benefit": "La llum que porto a dins ajuda que tothom trobi pau a través del meu perdó.",
    "lesson": "És deixar que la suavitat del teu cor ajudi a altres persones a trobar la calma gràcies al teu perdó i a la teva comprensió.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em consenteixo en calma avui. Jo trio portar pau a través de la comprensió.\""
  },
  {
    "day": 287,
    "title": "mimar-TE",
    "teaName": "Infusió de mim essencial",
    "benefit": "Vull recordar-me sempre de quina és la meva hermosa missió.",
    "lesson": "Serveix per recordar sempre la teva missió més bonica: portar pau, tendresa i alegria allà on vagis.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em consenteixo la tranquil·litat avui. Jo trio recordar la meva missió de donar pau.\""
  },
  {
    "day": 288,
    "title": "abraçar-TE",
    "teaName": "Infusió d'abraçada integradora",
    "benefit": "La meva única missió d'amor és la que la gran energia del bé em va regalar.",
    "lesson": "És recordar que el millor regal que tens és compartir el benestar i fer el bé a tot el món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Abraço el meu propòsit avui. Jo trio complir la meva missió de benestar.\""
  },
  {
    "day": 289,
    "title": "valorar-TE",
    "teaName": "Infusió de valoració equilibrada",
    "benefit": "Fer el bé i sentir-me feliç són exactament la mateixa cosa.",
    "lesson": "T'ensenya que fer coses bones pels demés i sentir-te feliç per dins són exactament la mateixa cosa meravellosa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Valoro les meves accions avui. Jo trio saber que fer el bé em fa feliç.\""
  },
  {
    "day": 290,
    "title": "celebrar-TE",
    "teaName": "Infusió de celebració armònica",
    "benefit": "La força de l'amor em va crear a la seva mateixa imatge i semblança.",
    "lesson": "És una festa per recordar que estàs creada amb la mateixa alegria, bondat i llum que tot allò bo del món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Celebro la meva essència avui. Jo trio reconèixer el benestar que em va crear.\""
  },
  {
    "day": 291,
    "title": "rendir-TE",
    "teaName": "Infusió de cessació de resistència",
    "benefit": "L'amor veritable mai guarda rancor ni s'enutja per sempre.",
    "lesson": "És com estirar-te en un prat verd i relaxar-te, sabent que l'amor autèntic mai s'enfada ni guarda rancor per sempre.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em rendeixo a la pau avui. Jo trio deixar anar tot rancor i descansar.\""
  },
  {
    "day": 292,
    "title": "entusiasmar-TE",
    "teaName": "Infusió d'entusiasme serè",
    "benefit": "Els enuigs i rancors només tapen la llum bonica que tinc a dins.",
    "lesson": "T'ajuda a veure que els enuigs són només com núvols grisos que tapen temporalment la llum preciosa que portes a dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'entusiasma la llum avui. Jo trio desbrossar la meva lluentor interior.\""
  },
  {
    "day": 293,
    "title": "enamorar-TE",
    "teaName": "Infusió d'enamorament pacífic",
    "benefit": "Només el pla d'amor de l'univers per a fer-nos feliços funcionarà de debò.",
    "lesson": "És confiar cegament en el pla de l'univers, sabent que l'única cosa que ens fa feliços de veritat és l'amor i la cura mútua.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'enamoro de la pau avui. Jo trio confiar en el pla del benestar.\""
  },
  {
    "day": 294,
    "title": "meravellar-TE",
    "teaName": "Infusió d'asombre net",
    "benefit": "Guardar rancor és anar en contra del pla d'amor que ens cuida.",
    "lesson": "És entendre que guardar rancor és anar en contra del teu propi equip, perquè el pla que et cuida només vol que estiguis feliç.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em meravello amb senzillesa avui. Jo trio deixar anar rancors que enterboleixen la meva pau.\""
  },
  {
    "day": 295,
    "title": "sorpren-TE",
    "teaName": "Infusió de sorpresa grata",
    "benefit": "El meu major desig és que brilli la llum de la bondat.",
    "lesson": "És encendre la il·lusió de veure com la bondat brilla amb molta força en tots els teus dies.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em sorprèn la bondat avui. Jo trio avivar el desig que brilli la meva llum.\""
  },
  {
    "day": 296,
    "title": "fascinar-TE",
    "teaName": "Infusió de fascinació armònica",
    "benefit": "No hi ha cap altra regla ni força que mani a la meva vida més que la de l'amor.",
    "lesson": "És recordar que l'única llei que mana a la teva vida no és la por, sinó la força màgica i dolça de l'afecte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em fascina l'harmonia avui. Jo trio regir-me només per les lleis de l'afecte.\""
  },
  {
    "day": 297,
    "title": "captivar-TE",
    "teaName": "Infusió de captiveri apacible",
    "benefit": "La llum de l'amor ja ha arribat a la meva vida!",
    "lesson": "És obrir els braços de bat a bat per celebrar amb alegria que el benestar i l'amor ja han arribat de visita a la teva vida.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em captiva la llum avui. Jo trio acollir el benestar que ja ha arribat.\""
  },
  {
    "day": 298,
    "title": "aturar-TE",
    "teaName": "Infusió de detenció conscient",
    "benefit": "No em manen les regles de la por, només les lleis del carinyo i el bé.",
    "lesson": "És plantar cara a la por dient-li que a tu només et manen les regles de la bondat, de la tendresa i del bon tracte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'aturo davant de la por avui. Jo trio obeir només a les lleis de l'afecte.\""
  },
  {
    "day": 299,
    "title": "parar-TE",
    "teaName": "Infusió d'obertura al miracle",
    "benefit": "Tinc tot el dret del món a viure moments màgics plens d'amor i bondat.",
    "lesson": "T'atorga el permís i el dret de viure moments fantàstics, màgics i plens de pau en el teu dia a dia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Paro un instant avui. Jo trio obrir-me a viure moments màgics i bondadosos.\""
  },
  {
    "day": 300,
    "title": "pausar-TE",
    "teaName": "Infusió de pausa restauradora",
    "benefit": "Que els miracles i les sorpreses boniques esborrin tots els meus enuigs.",
    "lesson": "És fer una respiració profunda perquè les sorpreses boniques i els petits miracles esborrin qualsevol rastre de mal humor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Faig una pausa avui. Jo trio permetre que les sorpreses boniques esborrin els meus enuigs.\""
  },
  {
    "day": 301,
    "title": "respirar-TE",
    "teaName": "Infusió de respiració lúcida",
    "benefit": "Vull entendre bé què em passa per poder solucionar-ho amb un somriure.",
    "lesson": "T'ajuda a descobrir què et passa per dins quan estàs trista o disgustada, per poder solucionar-ho amb un somriure radiant.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Respiro amb calma avui. Jo trio comprendre les meves emocions per a sanar-les amb un somriure.\""
  },
  {
    "day": 302,
    "title": "oxigenar-TE",
    "teaName": "Infusió d'oxigenació mental",
    "benefit": "M'adono que tots els meus problemes ja tenen una solució plena de pau.",
    "lesson": "És adonar-te de cop que per cada petit problema que tens, ja existeix una solució tranquil·la i bonica esperant-te.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Oxigeno la meva ment avui. Jo trio veure que els meus reptes ja tenen una solució de pau.\""
  },
  {
    "day": 303,
    "title": "revitalitzar-TE",
    "teaName": "Infusió de revitalització conscient",
    "benefit": "Repasso que soc una llum brillant i que perdonar als altres és el meu millor superpoder.",
    "lesson": "És recordar que ets una estrella brillant i que cada vegada que decideixes perdonar, fas servir el teu superpoder més fort.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em revitalitzo avui. Jo trio recordar que perdonar és el meu superpoder més gran.\""
  },
  {
    "day": 304,
    "title": "energitzar-TE",
    "teaName": "Infusió d'energia renovada",
    "benefit": "Entenc que la meva llum porta tranquil·litat a tothom i m'ajuda a recordar com és d'important estimar.",
    "lesson": "És entendre que quan tu estàs en pau, aquesta tranquil·litat s'escampa a tothom i ens recorda allò bonic que és estimar.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Energitzo el meu interior avui. Jo trio compartir tranquil·litat i amor.\""
  },
  {
    "day": 305,
    "title": "impulsar-TE",
    "teaName": "Infusió d'impuls afectiu",
    "benefit": "Descobreixo que fer el bé i sentir-me feliç van sempre de la mà.",
    "lesson": "És un joc divertit on descobreixes que portar a terme accions bones i sentir-te feliç van sempre agafades de la mà.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'impulso a fer el bé avui. Jo trio unir les meves accions amb la felicitat.\""
  },
  {
    "day": 306,
    "title": "motivar-TE",
    "teaName": "Infusió de motivació essencial",
    "benefit": "L'amor em va fer a la seva semblança i m'ensenya que el cor bondadós mai guarda enuigs.",
    "lesson": "És recuperar la innocència per recordar que el teu cor és totalment bondadós i no necessita guardar cap tipus de ràbia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em motivo amb bondat avui. Jo trio mantenir un cor lliure d'enuigs.\""
  },
  {
    "day": 307,
    "title": "animar-TE",
    "teaName": "Infusió d'ànim unificat",
    "benefit": "Comprenc que els rancors oculten la meva llum, i que la veritable pau depèn del que trio a la meva ment.",
    "lesson": "T'ensenya que els enuigs només amaguen la teva llum, i que la clau per estar feliç depèn sempre dels pensaments que tu tries tenir.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'annexo a la pau avui. Jo escullo triar pensaments que deixin brillar la meva llum.\""
  },
  {
    "day": 308,
    "title": "alçar-TE",
    "teaName": "Infusió d'alçament segur",
    "benefit": "Sé que només el pla de l'amor triomfa, i que guardar rancors és anar en contra d'aquesta felicitat.",
    "lesson": "És saber que només guanya el pla de l'amor i la joia, i que guardar rancors només serveix per anar en contra de la teva pròpia felicitat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'alço en la llum avui. Jo trio donar suport al pla del benestar i l'alegria.\""
  },
  {
    "day": 309,
    "title": "superar-TE",
    "teaName": "Infusió de superació lluminosa",
    "benefit": "Desitjo amb tot el cor que brilli la llum, sabent que no hi ha més llei ni poder que el de la bondad universal.",
    "lesson": "És desitjar amb totes les forces que la teva llum brilli, sabent que l'única llei que existeix és la de la bondat universal.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Supero els temors avui. Jo trio fer brillar la força de la bondat.\""
  },
  {
    "day": 310,
    "title": "atrevir-TE",
    "teaName": "Infusió d'atreviment serè",
    "benefit": "La llum ja és aquí per a guiar-me, recordant-me que només em governen les lleis de l'amor i la cura.",
    "lesson": "És armar-te de valentia per deixar-te guiar únicament per les lleis de l'afecte, de la cura i de l'estima mútua.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'atreveixo a confiar avui. Jo trio deixar-me guiar per les lleis de l'afecte.\""
  },
  {
    "day": 311,
    "title": "llançar-TE",
    "teaName": "Infusió de llançament confiat",
    "benefit": "Tinc tot el dret a viure coses hermoses i màgiques que reemplacin qualsevol pensament d'enuig.",
    "lesson": "És recordar que tens tot el dret del món a viure experiències màgiques i precioses que esborrin qualsevol pensament de baralla.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em llanço als miracles avui. Jo trio viure experiències precioses i sense enuigs.\""
  },
  {
    "day": 312,
    "title": "iniciar-TE",
    "teaName": "Infusió d'inici fresc",
    "benefit": "Aprenc a mirar els meus problemes de cara per a entendre'ls i adonar-me que ja estan resolts amb amor.",
    "lesson": "T'ensenya a mirar els petits problemes de cara, descobrint amb un somriure que l'amor ja els ha resolt per tu.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Inicio amb claredat avui. Jo trio mirar els meus reptes sabent que l'amor els resoldrà.\""
  },
  {
    "day": 313,
    "title": "activar-TE",
    "teaName": "Infusió d'activació lluminosa",
    "benefit": "Els moments màgics i feliços es veuen amb la llum de l'amor.",
    "lesson": "És un recordatori alegre que els moments més divertits i màgics del dia es veuen molt millor amb la llum de l'afecte.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Activo la meva alegria avui. Jo trio veure els moments màgics amb llum i amor.\""
  },
  {
    "day": 314,
    "title": "mou-TE",
    "teaName": "Infusió de moviment alliberador",
    "benefit": "Les sorpreses boniques es veuen a la llum, i la llum i la força interior són una sola cosa.",
    "lesson": "És connectar amb tu mateixa per saber que la teva alegria, la teva força interior i la teva llum formen una sola cosa fantàstica.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em moc en la llum avui. Jo trio sentir la meva força interior i la meva alegria unides.\""
  },
  {
    "day": 315,
    "title": "comunicar-TE",
    "teaName": "Infusió de comunicació afectiva",
    "benefit": "Soc un ésser perfecte i meravellós, tal com em va crear el gran amor de l'univers.",
    "lesson": "És abraçar la teva autoestima per recordar que ets una persona perfecta, meravellosa i plena de llum per dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em comunico amb amor propi avui. Jo trio recordar que soc un ésser perfecte i lluminós.\""
  },
  {
    "day": 316,
    "title": "expressar-TE",
    "teaName": "Infusió d'expressió autèntica",
    "benefit": "Soc un sol ésser ple de llum, unit per sempre a la gran energia creadora.",
    "lesson": "És sentir que formes part de la gran energia d'amor i llum de l'univers, formant un sol equip ple de felicitat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'expresso des de la meva essència avui. Jo trio sentir-me unit a la gran energia de llum.\""
  },
  {
    "day": 317,
    "title": "manifestar-TE",
    "teaName": "Infusió de manifestació armònica",
    "benefit": "Sentir-me a resguard i feliç ve del meu propi ser interior de llum.",
    "lesson": "És trobar un refugi secret dins teu sabent que la felicitat i la seguretat autèntiques només viuen al teu cor lluminós.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Manifesto el meu refugi avui. Jo trio trobar la felicitat al meu interior lluminós.\""
  },
  {
    "day": 318,
    "title": "transcendir-TE",
    "teaName": "Infusió de transcendència àmplia",
    "benefit": "Soc pura llum i energia bonica, no només un cos.",
    "lesson": "És recordar que tu ets moltes coses més que un cos: ets pura energia bonica, llum i alegria sense límits.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Transcendeixo les limitacions avui. Jo trio reconèixer-me com a pura energia de llum.\""
  },
  {
    "day": 319,
    "title": "elevar-TE",
    "teaName": "Infusió d'elevació profunda",
    "benefit": "Accepto amb alegria la meva missió de portar amor i pau al món.",
    "lesson": "És acceptar amb molta il·lusió la teva missió més bonica: omplir el món de pau i d'amor a cada pas que facis.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'elevo en el meu propòsit avui. Jo trio acceptar amb alegria la meva missió de pau.\""
  },
  {
    "day": 320,
    "title": "fusionar-TE",
    "teaName": "Infusió de fusió pacífica",
    "benefit": "La meva única tasca aquí a la Terra és compartir pau i amor amb tothom.",
    "lesson": "És descobrir que la teva missió més important aquí a la Terra és compartir l'amistat, la pau i l'afecte amb tothom.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em fusiono amb la tasca d'estimar avui. Jo trio compartir pau amb tothom.\""
  },
  {
    "day": 321,
    "title": "integrar-TE",
    "teaName": "Infusió d'integració completa",
    "benefit": "La meva ajuda és súper important en el gran pla d'amor de l'univers.",
    "lesson": "És valorar-te i saber que la teva ajuda és súper important dins del gran pla de benestar de l'univers.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Integro el meu valor avui. Jo trio reconèixer que la meva ajuda és valuosa en el pla de pau.\""
  },
  {
    "day": 322,
    "title": "explorar-TE",
    "teaName": "Infusió d'exploració curiosa",
    "benefit": "El desig del gran amor per a mi és que sigui totalment feliç. Jo també desitjo amb tot el cor ser immensament feliç.",
    "lesson": "És permetre't desitjar amb tot el cor ser una persona immensament feliç i viure en pau cada dia de la teva vida.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Exploro la meva felicitat avui. Jo trio permetre'm ser immensament feliç.\""
  },
  {
    "day": 323,
    "title": "descobrir-TE",
    "teaName": "Infusió de descobriment joiós",
    "benefit": "La gran energia de l'univers és pur amor, i per això també és pura alegria.",
    "lesson": "És com quan descobreixes un tresor amagat: t'adones que l'univers està ple de joia i afecte, i que tu estàs convidada a celebrar-ho i passar-ho molt bé cada dia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Descobreixo l'alegria avui. Jo trio sintonitzar amb l'energia de la felicitat.\""
  },
  {
    "day": 324,
    "title": "abandonar-TE",
    "teaName": "Infusió d'abandó confiat",
    "benefit": "Només busco les coses que em porten pau i amor de debò.",
    "lesson": "És com quan tries nomésels objectes que més t'agraden i deixes de banda els que et fan enfadar. Aprens a buscar només les coses que et porten pau de debò i et fan sentir estimada.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Abandono el que és innecessari avui. Jo trio buscar només el que em porta pau real.\""
  },
  {
    "day": 325,
    "title": "netejar-TE",
    "teaName": "Infusió de neteja conscient",
    "benefit": "La pau i l'alegria de l'univers són regals que ja són meus.",
    "lesson": "És recordar que la pau i la felicitat són com regals d'aniversari que ja són teus. Ningú te'ls pot prendre, només has d'obrir el regal i gaudir-ne.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Netejo els meus dubtes avui. Jo trio acceptar la pau i l'alegria que ja em pertanyen.\""
  },
  {
    "day": 326,
    "title": "purificar-TE",
    "teaName": "Infusió de purificació essencial",
    "benefit": "Em quedo en silenci i escolto la veu de la veritat al meu cor.",
    "lesson": "És com quan et quedes ben quieta a la teva habitació i escoltes el bategar del teu cor. En aquest silenci descobreixes la veu de la veritat que et diu quant vals.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Purifico la meva ment avui. Jo trio callar el soroll i escoltar la veritat interior.\""
  },
  {
    "day": 327,
    "title": "silenciar-TE",
    "teaName": "Infusió de silenci receptiu",
    "benefit": "La veritat i l'amor arreglaran tots els pensaments lletjos de la meva ment.",
    "lesson": "Imagina que la teva ment té un drap màgic que esborra els pensaments lletjos o tristos, deixant-te el cap clar, feliç i ple de coses amables.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Silencio els judicis avui. Jo trio deixar que la veritat ordeni els meus pensaments.\""
  },
  {
    "day": 328,
    "title": "aquietar-TE",
    "teaName": "Infusió de quietud interior",
    "benefit": "Regalar amor i rebre'l són exactament el mateix.",
    "lesson": "És com quan intercanvies regals amb la teva millor amiga: quan regales amor a algú altre, te l'estàs regalant a tu mateixa al mateix temps.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Aquieto el meu interior avui. Jo trio saber que donar i rebre afecte és el mateix.\""
  },
  {
    "day": 329,
    "title": "connectar-TE",
    "teaName": "Infusió de connexió profunda",
    "benefit": "Descanso tranquil en l'abraçada del gran amor universal.",
    "lesson": "És com quan et poses un pijama ben suau i et tapes amb una manta acollidora: et sents abraçada per l'amor de l'univers i penses que pots descansar feliç.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Connecto amb el descans avui. Jo trio reposar en l'abraçada de la pau.\""
  },
  {
    "day": 330,
    "title": "relaxar-TE",
    "teaName": "Infusió de relaxació conscient",
    "benefit": "Segueixo sent un ésser meravellós, tal com em va fer l'energia del bé.",
    "lesson": "És fer una festa al teu interior celebrant que el teu cor va ser creat amb pur amor i està ple de llum brillant.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em relaxo en el meu valor avui. Jo trio recordar que soc un regal perfecte de la vida.\""
  },
  {
    "day": 331,
    "title": "descansar-TE",
    "teaName": "Infusió de descans apacible",
    "benefit": "Recordem que els moments bonics es veuen quan mirem amb amor i fortalesa interior.",
    "lesson": "És mirar al teu voltant com una superheroïna fortíssima que sap veure el millor de cada situació amb un cor ple d'amor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Descanso en la meva fortalesa avui. Jo trio mirar amb amor i fermesa.\""
  },
  {
    "day": 332,
    "title": "premiar-TE",
    "teaName": "Infusió de premi merescut",
    "benefit": "L'alegria i la llum viuen al nostre cor perquè vam ser creats amb pur amor.",
    "lesson": "És un joc súper divertit on recordes que la teva missió especial a la Terra és anar escampant pau i riures per on passes.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em premio amb alegria avui. Jo trio celebrar que el meu cor és pur amor.\""
  },
  {
    "day": 333,
    "title": "felicitar-TE",
    "teaName": "Infusió de felicitació sincera",
    "benefit": "Som éssers de llum units a tot l'univers, i la pau neix del nostre propi ser.",
    "lesson": "T'ajuda a recordar que estàs connectada amb totes les estrelles i l'univers, i que la teva pau neix de la teva pròpia llum.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em felicito en unitat avui. Jo trio recordar que la pau neix del meu interior.\""
  },
  {
    "day": 334,
    "title": "divertir-TE",
    "teaName": "Infusió de diversió lúdica",
    "benefit": "Recordem que som energia bonica i que tenim la hermosa missió de compartir pau.",
    "lesson": "És descobrir que la teva feina més important com a persona és compartir amor, i que tu ets supernecessària en aquest equip.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em diverteixo compartint pau avui. Jo trio recordar la meva bonica missió d'harmonia.\""
  },
  {
    "day": 335,
    "title": "entendrir-TE",
    "teaName": "Infusió d'enterneiximent compassiu",
    "benefit": "Compartir amor és el nostre treball més valuós i tots som necessaris en aquest pla.",
    "lesson": "És adonar-te que el món vol que siguis immensament feliç, i tu decideixes unir-te a aquesta mateixa alegria amb tothom.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'entendreixo amb propòsit avui. Jo trio valorar el meu treball de compartir afecte.\""
  },
  {
    "day": 336,
    "title": "solidaritzar-TE",
    "teaName": "Infusió de solidaritat compartida",
    "benefit": "La força del bé vol que siguem feliços, i nosaltres també triem aquesta alegria.",
    "lesson": "És com trobar un tresor que ja era teu: buscar el bé sempre et torna la pau que et pertany des de sempre.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em solidaritzo amb l'alegria avui. Jo escullo triar la felicitat per a tothom.\""
  },
  {
    "day": 337,
    "title": "recordar-TE",
    "teaName": "Infusió de memòria lluminosa",
    "benefit": "Com que l'energia de l'univers és amor, buscar el bé ens dona el que de debò ens pertany.",
    "lesson": "T'ensenya que no has de córrer ni cridar; només et cal quedar-te tranquil·la per escoltar la veritat bonica que tens al cor.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Recordo el que em pertany avui. Jo trio buscar el bé que em dona pau.\""
  },
  {
    "day": 338,
    "title": "il·luminar-TE",
    "teaName": "Infusió d'il·luminació serena",
    "benefit": "La pau és nostra, només necessitem quedar-nos tranquils per a escoltar la veritat del cor.",
    "lesson": "És adonar-te que quan et comprens i no et baralles, donar un petó o rebre'l et fa sentir exactament la mateixa felicitat.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Il·lumino la meva escolta avui. Jo trio la quietud per a oir la veritat interior.\""
  },
  {
    "day": 339,
    "title": "despertar-TE",
    "teaName": "Infusió de despertar ple",
    "benefit": "La veritat arregla els nostres errors, i aprenem que donar i rebre afecte és el mateix.",
    "lesson": "És sentir-te completament segura i sostinguda, sabent que ets un regal únic i preciós per a tot el món.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Desperto a la sanació avui. Jo trio donar i rebre afecte amb naturalitat.\""
  },
  {
    "day": 340,
    "title": "observar-TE",
    "teaName": "Infusió d'observació compassiva",
    "benefit": "Ens sentim segurs i tranquils sabent que sempre som un regal perfecte de la vida.",
    "lesson": "És descobrir la clau màgica i secreta: quan perdones els altres, s'obre la porta d'un castell ple de joia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Observo amb tendresa avui. Jo trio sentir-me segura sabent que soc un regal de la vida.\""
  },
  {
    "day": 341,
    "title": "aquietar-TE",
    "teaName": "Infusió d'aquietament centrat",
    "benefit": "Perdonar als altres és la clau màgica per a obrir la porta de la felicitat.",
    "lesson": "És com obrir una caixa plena de sorpreses boniques: el perdó et regala tot el que el teu cor desitja per estar bé.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Aquieto els meus judicis avui. Jo trio usar el perdó com a clau de la felicitat.\""
  },
  {
    "day": 342,
    "title": "enfocar-TE",
    "teaName": "Infusió d'enfocament lúcid",
    "benefit": "El perdó em regala tot el bo i bonic que el meu cor desitja.",
    "lesson": "És dibuixar un somriure gegant i dir \"gràcies!\" a la vida per tots els regals preciosos que reps cada dia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'enfoco en el perdó avui. Jo trio rebre tot el bo que el meu cor desitja.\""
  },
  {
    "day": 343,
    "title": "ubicar-TE",
    "teaName": "Infusió d'ubicació serena",
    "benefit": "Gràcies, gran energia de l'amor, per tots els regals hermosos que m'has donat!",
    "lesson": "És recordar sempre que camines agafada de la mà de la gran força del bé, així que mai no estàs sola.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'ubico en la gratitud avui. Jo trio agrair els regals bonics de la vida.\""
  },
  {
    "day": 344,
    "title": "centrar-TE",
    "teaName": "Infusió de centrat estable",
    "benefit": "Vull recordar sempre que estic unit a la gran força del bé.",
    "lesson": "És descobrir que quan et quedes en calma i silenci, reps els millors consells d'amor per saber què fer.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em centro en la meva unió avui. Jo trio recordar que vaig de la mà de la força del bé.\""
  },
  {
    "day": 345,
    "title": "replantejar-TE",
    "teaName": "Infusió de replantejament savi",
    "benefit": "En un moment de calma i tranquil·litat rebo els millors consells de l'amor.",
    "lesson": "És adonar-te que tota la tendresa i la paciència que regales als teus amics te la dones a tu mateixa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Replantejo les meves idees avui. Jo trio escoltar els consells de la calma.\""
  },
  {
    "day": 346,
    "title": "desfer-TE",
    "teaName": "Infusió de desfer alliberador",
    "benefit": "Tot l'amor i l'amabilitat que dono als altres me l'estic donant a mi mateixa.",
    "lesson": "És saber que no hi ha cap abraçada més gran ni cap lloc més segur per a tu que l'amor de l'univers.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Desfaig l'egoisme avui. Jo trio saber que en donar amor me'l dono a mi mateixa.\""
  },
  {
    "day": 347,
    "title": "alliberar-TE",
    "teaName": "Infusió de llibertat dolça",
    "benefit": "No existeix cap altre amor tan gran i segur com el de l'univers.",
    "lesson": "És adonar-te que les coses lletjes o les baralles de fora no tenen res a veure amb els desitjos bonics de la teva ànima.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Allibero els meus temors avui. Jo trio confiar en l'amor més segur i gran.\""
  },
  {
    "day": 348,
    "title": "il·luminar-TE",
    "teaName": "Infusió d'il·luminació integrada",
    "benefit": "Les coses lletjes del món no tenen res a veure amb el que realment desitjo.",
    "lesson": "És mirar més enllà dels petits problemes per descobrir un paisatge immens i feliç que està esperant que el miris.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Il·lumino les meves eleccions avui. Jo trio enfocar-me en el que la meva ànima veritablement desitja.\""
  },
  {
    "day": 349,
    "title": "confiar-TE",
    "teaName": "Infusió de certesa absoluta",
    "benefit": "La gran energia creadora de l'univers mai no va crear un món sense sentit.",
    "lesson": "És entendre que no pots mirar la por i la pau alhora; tu ets la reina del teu cap i tries mirar sempre la pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Confio en la vida avui. Jo trio descansar en un ordre segur.\""
  },
  {
    "day": 350,
    "title": "desvincular-TE",
    "teaName": "Infusió de lleugeresa mental",
    "benefit": "Els pensaments que tinc són només dibuixos i històries que he inventat al meu cap.",
    "lesson": "És esborrar del teu conte les històries tristes del passat per deixar que el món sigui nou, net i bonic.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em desvinculo de les històries avui. Jo trio deixar anar els drames mentals.\""
  },
  {
    "day": 351,
    "title": "neutralitzar-TE",
    "teaName": "Infusió d'equilibri i equànimitat",
    "benefit": "No existeix cap pensament que no importi o que sigui totalment neutre.",
    "lesson": "És aprendre a no enfadar-te pels objectes j o coses petites que no t'ajuden a tenir la teva ment tranquil·la i feliç.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Neutralitzo el judici avui. Jo trio cuidar la qualitat dels meus pensaments.\""
  },
  {
    "day": 352,
    "title": "equilibrar-TE",
    "teaName": "Infusió d'aprenentatge conscient",
    "benefit": "No hi ha cap cosa al meu voltant que sigui neutral; tot m'ensenya alguna cosa.",
    "lesson": "És aprendre a perdonar des de ben endins, amb un cor transparent, net i sense guardar cap rancúnia.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"M'equilibro avui. Jo trio aprendre lliçons de pau del meu entorn.\""
  },
  {
    "day": 353,
    "title": "responsabilitzar-TE",
    "teaName": "Infusió de connexió col·lectiva",
    "benefit": "No estic sol; el que jo veig i sento també afecta els altres.",
    "lesson": "És adonar-te que si et poses a la defensiva és només perquè vas creure que algú et volia fer mal, però estàs totalment segura.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em responsabilitzo de la meva energia avui. Jo trio sumar benestar als altres.\""
  },
  {
    "day": 354,
    "title": "reconei-TE",
    "teaName": "Infusió de ressonància empàtica",
    "benefit": "Els meus pensaments no es queden només en mi, sinó que també arriben als qui m'envolten.",
    "lesson": "És descobrir que quan et sents enfadada o malalta, només és una forma d'amagar tot l'amor que tens a dins.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em reconec en connexió avui. Jo trio enviar pensaments amables al meu voltant.\""
  },
  {
    "day": 355,
    "title": "decidir-TE",
    "teaName": "Infusió de determinació lluminosa",
    "benefit": "Estic totalment decidit a obrir els ulls i veure de debò!",
    "lesson": "És veure com el teu propi somriure i el teu cor net ajuden que tots els teus amics i la teva família se sentin bé.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Decideixo veure amb claredat avui. Jo trio obrir els ulls a la veritat.\""
  },
  {
    "day": 356,
    "title": "obrir-TE",
    "teaName": "Infusió d'obertura receptiva",
    "benefit": "Sentir-me malalt o enfadat és només una forma d'ocultar la veritat de l'amor.",
    "lesson": "És adonar-te que entre totes les opcions del món, triar la joia i la pau és la millor jugada que pots fer.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Obro el meu enteniment avui. Jo trio veure que el malestar només oculta l'afecte.\""
  },
  {
    "day": 357,
    "title": "amollar-TE",
    "teaName": "Infusió de deixar anar generós",
    "benefit": "Quan netejo el meu cor i somric, ajudo que tothom al meu voltant se senti bé.",
    "lesson": "És la tranquil·litat de saber que pots esborrar qualsevol equivocació i començar de nou amb molta estima.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Deixo anar el judici avui. Jo trio somriure perquè el meu entorn se senti bé.\""
  },
  {
    "day": 358,
    "title": "pacificar-TE",
    "teaName": "Infusió de pacificació profunda",
    "benefit": "El món de la pau i l'alegria és la millor opció que puc triar.",
    "lesson": "És utilitzar la màgia de l'amor i del perdó, que són els únics ingredients capaços de curar qualsevol tristesa.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em pacifico per dins avui. Jo trio el món de la pau com la meva millor opció.\""
  },
  {
    "day": 359,
    "title": "protegir-TE",
    "teaName": "Infusió de protecció serena",
    "benefit": "Accepto netejar tots els meus errors i tornar a començar amb amor.",
    "lesson": "Imagina que la teva ment és com una pissarra plena de dibuixos antics que vas fer fa temps. Aquest exercici t'ensenya a netejar la pissarra per mirar tot el que t'envolta com si fos la primera vegada, sense posar-li etiquetes de bo o dolent.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em protegeixo renovant-me avui. Jo trio començar de nou amb amor.\""
  },
  {
    "day": 360,
    "title": "lliurar-TE",
    "teaName": "Infusió d'entrega confiada",
    "benefit": "L'amor i el perdó són l'únic que sana qualsevol tristesa.",
    "lesson": "És com ficar-te sota un llit de mantes calentones quan a fora fa fred. Un lloc de seguretat absoluta on descases sense preocupacions.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Lliuro les meves tristeses avui. Jo trio permetre que el perdó sani el meu cor.\""
  },
  {
    "day": 361,
    "title": "qüestionar-TE",
    "teaName": "Infusió de claredat i discerniment",
    "benefit": "No hi ha res del que veig en aquesta habitació que tingui un significat real per si mateix.",
    "lesson": "Dissenyada per a buidar la ment de significats imposats i contemplar la realitat amb una perspectiva d'absoluta neutralitat i pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Qüestiono els meus pensaments avui. Jo trio mirar aquest moment amb absoluta neutralitat.\""
  },
  {
    "day": 362,
    "title": "refugiar-TE",
    "teaName": "Infusió d'abrigall incommovible",
    "benefit": "Aquesta gran força és el meu refugi més segur en el que jo confio plenament.",
    "lesson": "És com actuar com un refugi càlid de confiança plena enfront de qualsevol inquietud o dubte que pugui aparèixer.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em refugio en la calma avui. Jo trio descansar en una seguretat absoluta.\""
  },
  {
    "day": 363,
    "title": "recordar-TE",
    "teaName": "Infusió de protecció de la pau",
    "benefit": "Els meus pensaments d'atac i enuig l'únic que fan és fer mal a la meva pau interior.",
    "lesson": "És un escut per a tu mateixa: saber que si ataques o t'enfades, a la primera que fas mal és a la teva pròpia pau.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Recordo cuidar la meva pau avui. Jo trio no fer-me mal amb enuigs.\""
  },
  {
    "day": 364,
    "title": "centrar-TE",
    "teaName": "Infusió de quietud i presència",
    "benefit": "La verdadera quietud es troba en el moment que decideixo habitar aquest precís instant sense jutjar-lo",
    "lesson": "És com respirar a poc a poc per plantar les teves arrels ben endins de la terra, ajudant a disipar qualsevol nervi i retornant tota la teva atenció al centre de la teva pau interior.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Em centro en el meu present avui. Jo trio dissimular la inquietud i habitar la meva pau.\""
  },
  {
    "day": 365,
    "title": "estimar-TE",
    "teaName": "Infusió d'amor incondicional",
    "benefit": "Les coses que veus al teu voltant no signifiquen res per si soles. Tu ets qui decideix si alguna cosa t'enfada o et dona pau al teu cap.",
    "lesson": "És fondre tota autocrítica amb una tendresa infinita cap a tu mateixa, recordant que ets una persona valuosa tal com ets.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i diu en veu baixa: \"Estimo la meva ment avui. Jo trio mirar aquest moment amb pau i amabilitat.\""
  }
];
