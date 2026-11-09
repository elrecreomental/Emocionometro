// Datos de los 365 días
const DAYS_CA = [
  {
    "day": 1,
    "title": "mirar-TE",
    "teaName": "Infusió de curiositat amable",
    "benefit": "Avui m’observo amb curiositat, sense jutjar-me.",
    "lesson": "Imagina que la teva ment és un jardí i avui ets una jardinera curiosa: només passeges i mires quins pensaments hanqu brotat, sense arrencar res.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i digues en veu baixa: “Avui m’observo amb curiositat. Tot el que sento pot quedar-se al meu costat una estona.”"
  },
  {
    "day": 2,
    "title": "respirar-TE",
    "teaName": "Infusió de calma en quatre temps",
    "benefit": "La meva respiració és casa meva: sempre puc tornar-hi.",
    "lesson": "La teva respiració és una manteta invisible que portes a tot arreu. Quan el dia s’embolica, tres respiracions lentes el desemboliquen una mica.",
    "exercise": "Inspira comptant fins a quatre, reté un instant i expira comptant fins a sis, tres vegades, amb la tassa entre les mans. Després digues en veu baixa: “A cada respiració, el meu cos es relaxa.”"
  },
  {
    "day": 3,
    "title": "riu-TE",
    "teaName": "Infusió d’humor i perspectiva",
    "benefit": "Puc escoltar a Drama King sense donar-li el micròfon.",
    "lesson": "Drama King fa que una torrada cremada passi a ser una tragèdia grega. No cal fer-lo fora: n’hi ha prou amb saludar-lo, somriure i recordar-li que avui no hi ha funció.",
    "exercise": "Pensa en alguna cosa que avui et preocupa i posa-li un títol de pel·lícula dramàtica, d’aquells que fan riure. Somriu, pren un xarrup i digues en veu baixa: “Saludo el meu drama amb un somriure i continuo amb el meu dia.”"
  },
  {
    "day": 4,
    "title": "baixar-TE",
    "teaName": "Infusió d’humilitat amb un toc de rialla",
    "benefit": "Estar en pau no em fa millor que ningú: em fa més propera.",
    "lesson": "Queen Zen es creu que ja ha arribat a la il·luminació i que tothom hauria de meditar com ella. Avui li demanem que s’assegui a terra, com les altres: la pau de veritat no necessita públic.",
    "exercise": "Seu a terra o a la vora de la cadira, sense cap postura especial, i pren un xarrup a poc a poc. Després digues en veu baixa: “La meva calma és un regal per compartir, no un trofeu per lluir.”"
  },
  {
    "day": 5,
    "title": "mou-TE",
    "teaName": "Infusió de petites passes",
    "benefit": "Un gest petit també és un moviment.",
    "lesson": "Quan la ment s’encalla, el cos pot fer el primer pas. No cal una gran decisió: n’hi ha prou d’aixecar-te, estirar els braços o obrir una finestra.",
    "exercise": "Aixeca’t, estira els braços cap al sostre i baixa’ls lentament mentre expires. Pren un xarrup i digues en veu baixa: “Avui em moc una mica, i això ja compta.”"
  },
  {
    "day": 6,
    "title": "mimar-TE",
    "teaName": "Infusió de mim senzill",
    "benefit": "Mereixo cuidar-me igual que cuido qui estimo.",
    "lesson": "Si una amiga et digués que està cansada, li prepararies alguna cosa calentona sense pensar-hi. Avui et toca a tu aquest mateix tracte.",
    "exercise": "Posa una mà sobre el pit i sent l'escalfor mentre prens un xarrup a poc a poc. Després digues en veu baixa: “Avui em tracto amb la mateixa tendresa que tracto a qui més m'estimo.”"
  },
  {
    "day": 7,
    "title": "equilibrar-TE",
    "teaName": "Infusió d’equilibri entre el drama i la calma",
    "benefit": "Ni tant Drama King ni tant Queen Zen: avui trio el meu punt mitjà.",
    "lesson": "Avui els dos seuen a la mateixa taula: Drama King explica el que l’espanta i Queen Zen el que li molesta dels altres. Tu serveixes el te i els escoltes amb afecte, sense donar la raó del tot a cap.",
    "exercise": "Aguanta la teva tassa mig tèbia amb les dues mans, pren un xarrup a poc a poc i digues en veu baixa: “Escolto el meu drama i la meva calma. Jo trio el meu punt mitjà.”"
  },
  {
    "day": 8,
    "title": "observar-TE",
    "teaName": "Infusió de núvols passatgers",
    "benefit": "Els meus pensaments passen com núvols i jo sóc el cel.",
    "lesson": "Els pensaments van i vénen igual que els núvols. Avui no els empenys ni els persegueixes: seus i mires com travessen.",
    "exercise": "Mira per una finestra o tanca els ulls i anomena tres pensaments com si fossin núvols (“allà va una preocupació”). Pren un xarrup i digues en veu baixa: “Observo els meus pensaments i no m’hi quedo a viure.”"
  },
  {
    "day": 9,
    "title": "afluixar-TE",
    "teaName": "Infusió d’espatlles soltes",
    "benefit": "Quan afluixo les espatlles, també s’afluixa la meva ment.",
    "lesson": "Moltes vegades portem les espatlles enganxades a les orelles sense adonar-nos-en. Afluixar-les és una manera de dir-li al cos que ja pot descansar.",
    "exercise": "Puja les espatlles cap a les orelles en inspirar i deixa-les caure en expirar, tres vegades, amb la tassa tèbia entre les mans. Després digues en veu baixa: “Deixo anar el que no necessito carregar ara.”"
  },
  {
    "day": 10,
    "title": "somriu-TE",
    "teaName": "Infusió de teló abaixat",
    "benefit": "Puc donar les gràcies al meu drama i deixar-lo descansar.",
    "lesson": "Drama King assaja totes les nits la pitjor pel·lícula possible. Avui el felicites per la seva imaginació i li recordes que només és un assaig.",
    "exercise": "Posa un títol còmic a la teva preocupació d’avui (“Tragèdia en tres actes: el WhatsApp sense respondre”), somriu i pren un xarrup. Digues en veu baixa: “Gràcies per l’assaig, avui no hi ha estrena.”"
  },
  {
    "day": 11,
    "title": "aterrar-TE",
    "teaName": "Infusió de peus a terra",
    "benefit": "No cal que sembli tranquil·la: puc estar tranquil·la a la meva manera.",
    "lesson": "Queen Zen a vegades confon calma amb aparentar calma. Aterrar és deixar que la pau sigui senzilla, amb roba d'estar per casa i sense sermons.",
    "exercise": "Si pots, treu-te les sabates, posa bé els peus a terra i sent tres punts de suport mentre respires a poc a poc. Digues en veu baixa: “La meva pau pot ser senzilla i d'estar per casa.”"
  },
  {
    "day": 12,
    "title": "estirar-TE",
    "teaName": "Infusió de badall llarg",
    "benefit": "El meu cos també pensa: avui li dono espai per parlar.",
    "lesson": "Estirar-se és escoltar el cos: si cada part pogués parlar, què demanaria? Avui li dones un minut perquè t’ho expliqui.",
    "exercise": "Estira el coll cap a un costat i després cap a l’altre, amb un xarrup entre estirament i estirament. Digues en veu baixa: “El meu cos em parla i avui l’escolto.”"
  },
  {
    "day": 13,
    "title": "abraçar-TE",
    "teaName": "Infusió d’abraçada pròpia",
    "benefit": "Puc ser el meu propi refugi.",
    "lesson": "Abraçar-te no és cap tonteria: és un gest que calma el cos i et recorda que no estàs sola. Creua els braços com qui es fa una bona abraçada.",
    "exercise": "Creua els braços i posa les mans a les espatlles. Respira tres vegades a poc a poc i digues en veu baixa: “Estic aquí amb mi, i això és suficient.”"
  },
  {
    "day": 14,
    "title": "centrar-TE",
    "teaName": "Infusió de punt mitjà",
    "benefit": "Entre l’excés de drama i l’excés de calma hi ha un lloc on cap tot el que sóc.",
    "lesson": "Imagina una balança amb Drama King a un costat i Queen Zen a l’altre. Tu no tries bàndol: ets la mà que la sosté i la manté anivellada.",
    "exercise": "Obre les dues mans com els plats d’una balança, nota quina pesa més avui i respira fins que s’igualin. Pren un xarrup i digues en veu baixa: “Em centro i em quedo al meu punt mitjà.”"
  },
  {
    "day": 15,
    "title": "descobrir-TE",
    "teaName": "Infusió de mapa d’emocions",
    "benefit": "Posar nom al que sento m’ajuda a entendre’m.",
    "lesson": "Una emoció sense nom és com un paquet sense etiqueta: fa més respecte. Amb un nom senzill (“això és cansament”, “això és ràbia”) es fa més petita i més fàcil de portar.",
    "exercise": "Pregunta’t “què sento ara?”, respon amb una sola paraula i pren un xarrup. Després digues en veu baixa: “Poso nom al que sento i m’entenc millor.”"
  },
  {
    "day": 16,
    "title": "aturar-TE",
    "teaName": "Infusió de pausa petita",
    "benefit": "Una pausa d’un minut pot canviar el rumb del meu dia.",
    "lesson": "Entre el que passa i el que responem hi ha un petit espai. Aquesta pausa és teva: pots omplir-la amb una respiració.",
    "exercise": "Abans de contestar o decidir alguna cosa avui, inspira comptant fins a quatre i expira comptant fins a sis. Pren un xarrup i digues en veu baixa: “Em dono una pausa i després trio.”"
  },
  {
    "day": 17,
    "title": "divertir-TE",
    "teaName": "Infusió d’ocurrències",
    "benefit": "L’humor em retorna la perspectiva.",
    "lesson": "Drama King diu “sempre passa el pitjor” i Queen Zen diu “tot passa per alguna cosa”. Tu pots mirar-los tots dos amb una cella aixecada i un somriure.",
    "exercise": "Imagina a Drama King i a Queen Zen discutint per qui té raó mentre tu prens el te. Somriu i digues en veu baixa: “Trio riure’m una mica i mirar amb més afecte.”"
  },
  {
    "day": 18,
    "title": "humanitzar-TE",
    "teaName": "Infusió de peus descalços",
    "benefit": "Puc estar en pau i continuar sent humana.",
    "lesson": "A vegades creiem que la pau ens torna intocables. La pau de veritat deixa lloc per als dies maldestres, els enfadaments petits i els dubtes.",
    "exercise": "Recorda un moment recent en què no vas estar al teu millor nivell i mira’l amb tendresa, com a una amiga. Pren un xarrup i digues en veu baixa: “Sóc humana i estic en pau amb això.”"
  },
  {
    "day": 19,
    "title": "passejar-TE",
    "teaName": "Infusió de pas lent",
    "benefit": "Caminar a poc a poc també és avançar.",
    "lesson": "Una passejada curta sense mòbil és una conversa amb el cos i amb el carrer. No cal arribar enlloc.",
    "exercise": "Fes una passejada d’un minut (també val per casa) fixant-te en tres coses que veus, tres que escoltes i tres que notes. Després digues en veu baixa: “Camino sense pressa i arribo al meu ritme.”"
  },
  {
    "day": 20,
    "title": "consentir-TE",
    "teaName": "Infusió de caprici petit",
    "benefit": "Un caprici amable també és una manera de cuidar-me.",
    "lesson": "Mimar-te no necessita grans plans: una cançó preferida, una manta suau, un tros de fruita. L’important és fer-ho amb atenció.",
    "exercise": "Tria un petit plaer per avui i gaudeix-ne amb calma durant un xarrup sencer. Després digues en veu baixa: “Em regalo un gust senzill i el gaudeixo de veritat amb els cinc sentits.”"
  },
  {
    "day": 21,
    "title": "conciliar-TE",
    "teaName": "Infusió de treva",
    "benefit": "Puc fer les paus amb el que sento.",
    "lesson": "Drama King i Queen Zen viuen en tu, però l’amfitriona ets tu. Avui els proposes una treva de cinc minuts, amb te i sense discursos.",
    "exercise": "Imagina’ls tots dos asseguts amb tu. Demana’ls cinc minuts de silenci i respira amb ells. Pren un xarrup i digues en veu baixa: “Fem una treva i jo porto el te.”"
  },
  {
    "day": 22,
    "title": "reconeixer-TE",
    "teaName": "Infusió de petits èxits",
    "benefit": "Reconèixer el que faig bé també és mirar-me.",
    "lesson": "Solem fixar-nos en el que falta. Avui busques tres coses que sí que has fet, per petites que semblin.",
    "exercise": "Pensa en tres coses que has fet bé aquesta setmana i saluda-les amb un xarrup. Després digues en veu baixa: “Veig els meus passos i els celebro.”"
  },
  {
    "day": 23,
    "title": "serenar-TE",
    "teaName": "Infusió d’aigua quieta",
    "benefit": "Quan em quedo quieta, l’aigua remoguda s’assenta sola.",
    "lesson": "Un got d’aigua amb fang s’aclareix si el deixes reposar. Amb la ment passa el mateix: no cal remenar més, només esperar.",
    "exercise": "Mira la teva tassa sense moure-la durant deu respiracions. Quan acabis, pren un xarrup i digues en veu baixa: “Deixo que tot s’assenti i m’aclareixo.”"
  },
  {
    "day": 24,
    "title": "alleugerir-TE",
    "teaName": "Infusió de lleugeresa",
    "benefit": "No tot el que penso necessita una conclusió.",
    "lesson": "Drama King vol treure conclusions a les quatre de la matinada. Avui li recordes que hi ha preguntes que es responen millor amb la llum del dia.",
    "exercise": "Escriu una preocupació en un paper, plega’l i deixa’l per demà. Pren un xarrup i digues en veu baixa: “Ho deixo aquí, ho miraré amb més llum.”"
  },
  {
    "day": 25,
    "title": "simplificar-TE",
    "teaName": "Infusió de l’essencial",
    "benefit": "Amb menys coses per fer, també hi ha més pau.",
    "lesson": "Queen Zen vol meditar una hora, cuinar ecològic i perdonar tothom abans d’esmorzar. Tu pots triar una sola cosa bona i fer-la bé.",
    "exercise": "Tria una sola cosa important per a avui i deixa anar mentalment la resta. Pren un xarrup i digues en veu baixa: “Una cosa a la vegada és suficient.”"
  },
  {
    "day": 26,
    "title": "ballar-TE",
    "teaName": "Infusió de ritme",
    "benefit": "Una mica de ball em canvia l’ànim.",
    "lesson": "No cal saber ballar: n’hi ha prou de moure alguna cosa, encara que sigui un peu, al ritme d’una cançó que t’agradi.",
    "exercise": "Posa una cançó que t’agradi i mou-te durant un minut com et vingui de gust. En acabar, pren un xarrup i digues en veu baixa: “El meu cos també celebra.”"
  },
  {
    "day": 27,
    "title": "regalar-TE",
    "teaName": "Infusió de regal propi",
    "benefit": "Avui em regalo la meva atenció.",
    "lesson": "A vegades donem l’atenció a tothom menys a nosaltres. Avui te la regales tota: sense mòbil, sense llista, només tu.",
    "exercise": "Durant un minut no facis res més que prendre la teva infusió amb atenció: l'escalfor, l’aroma, el sabor. Després digues en veu baixa: “Em regalo aquest minut, és per mi.”"
  },
  {
    "day": 28,
    "title": "harmonitzar-TE",
    "teaName": "Infusió d’acord interior",
    "benefit": "Puc escoltar totes les meves parts i arribar a un acord.",
    "lesson": "El que sents té diverses veus: la que es queixa, la que presumeix i la que sap. Avui els demanes torn de paraula, una per una, i tu coordines la conversa.",
    "exercise": "Pensa o escriu què diria avui la teva veu dramàtica, la teva veu zen i la teva veu sàvia. Escolta-les totes tres, pren un xarrup i digues en veu baixa: “Les escolto totes i decideixo amb calma.”"
  },
  {
    "day": 29,
    "title": "repassar-TE",
    "teaName": "Infusió de mirada enrere",
    "benefit": "Mirar enrere amb afecte m’ensenya quant he avançat.",
    "lesson": "Un mes de mirar-te amb curiositat mereix una pausa: què has notat de tu? Què t’ha sorprès? Què s’ha tornat més fàcil?",
    "exercise": "Recorda el moment d’aquest mes en què t’has mirat amb més afecte. Pren un xarrup i digues en veu baixa: “He après a mirar-me amb més tendresa.”"
  },
  {
    "day": 30,
    "title": "celebrar-TE",
    "teaName": "Infusió de celebració",
    "benefit": "Em felicito pel camí i m’estimo amb paciència.",
    "lesson": "Has acabat el primer mes: felicitats! Avui toca una floreta per  tu, d’aquelles que gairebé mai ens diem en veu alta.",
    "exercise": "Mira’t en un mirall, o en la imaginació, mentre et dius un "piropo" sincer. Després desa’l al Piropero i digues en veu baixa: “Em miro amb afecte i celebro el meu camí.”"
  },
  {
    "day": 31,
    "title": "contemplar-TE",
    "teaName": "Infusió de finestra oberta",
    "benefit": "Avui contemplo la meva respiració com qui mira els núvols.",
    "lesson": "La teva respiració és com una marea petita que va i ve sense demanar permís. Avui no la corregeixes: t’asseus a la vora i mires com puja i baixa.",
    "exercise": "Posa la mà al pit i compta cinc respiracions sense canviar-les. Mira la tassa fumejar mentrestant. Després digues en veu baixa: “La meva respiració ja sap fer-ho sola; jo només l’acompanyo.”"
  },
  {
    "day": 32,
    "title": "sospirar-TE",
    "teaName": "Infusió de sospir llarg",
    "benefit": "Un sospir és la meva manera de deixar anar el que sobra.",
    "lesson": "Un sospir és aixecar la tapa de l’olla de vapor: surt el que ja no cal. Avui ho fem amb permís i amb ganes, encara que Drama King ho faci amb més teatre.",
    "exercise": "Inspira pel nas i sospira llarg per la boca, amb so, tres vegades. Deixa caure les espatlles a cada una. Després digues en veu baixa: “Deixo anar el que sobra i em quedo amb el que em serveix.”"
  },
  {
    "day": 33,
    "title": "bromejar-TE",
    "teaName": "Infusió de tragèdia amb sucre",
    "benefit": "Respiro fons i deixo que Drama King es llueixi sense dirigir el meu dia.",
    "lesson": "Drama King jura que sense un aire dramàtic la vida s’esfondra. Avui assaja el seu millor panteix de telenovel·la. Tu respires fons, aplaudeixes l’actuació i no li dones el paper principal.",
    "exercise": "Fes una respiració ràpida i exagerada de protagonista d’òpera durant deu segons i riu-te de tu. Després respira normal i pren un xarrup. Digues en veu baixa: “Gràcies per l’espectacle, Drama King; avui respiro jo.”"
  },
  {
    "day": 34,
    "title": "desinflar-TE",
    "teaName": "Infusió de globus sense pressa",
    "benefit": "La meva respiració no ha de ser perfecta per ser suficient.",
    "lesson": "Queen Zen presumeix de respiració abdominal en quatre temps i amb diploma. Avui la convidem a respirar com un globus que es desinfla: sense tècnica, sense nota, sense públic.",
    "exercise": "Infla les galtes com un globus i deixa sortir l’aire a poc a poc pels llavis, tres vegades, fent soroll. Si et surt un xiulet, millor. Després digues en veu baixa: “Respiro sense nota i sense públic; així ja val.”"
  },
  {
    "day": 35,
    "title": "sacsejar-TE",
    "teaName": "Infusió de braços solts",
    "benefit": "Si el cos se sacseja, la respiració s’acomoda sola.",
    "lesson": "Els gossos se sacsegen en sortir de l’aigua i queden com nous. El teu cos també ho sap fer; només necessita permís i una mica d’espai.",
    "exercise": "Dret, sacseja mans, braços i espatlles durant vint segons com si sortissis d’un toll. Atura’t, respira fons i pren un xarrup. Digues en veu baixa: “Em sacsejo el que pesa i respiro amb espai.”"
  },
  {
    "day": 36,
    "title": "bressolar-TE",
    "teaName": "Infusió de manta i gronxament",
    "benefit": "Avui em respiro amb la tendresa de qui bressola un nadó.",
    "lesson": "Respirar també pot ser una cançó de bressol: lenta, repetida, sense pretensions. Avui el teu aire entra i surt com un bressol que es gronxa a poc a poc.",
    "exercise": "Seu, abraça’t el tors amb tots dos braços i gronxa’t suaument a dreta i esquerra durant deu respiracions. Després digues en veu baixa: “Em bressolo amb paciència; ara no tinc res a arreglar.”"
  },
  {
    "day": 37,
    "title": "conciliar-TE",
    "teaName": "Infusió de taula compartida",
    "benefit": "Puc respirar entre Drama King i Queen Zen i quedar-me al mig.",
    "lesson": "Drama King sospira com si fos l’últim aire; Queen Zen respira com si fes classe. Tu els asseus a la mateixa taula, escoltes tots dos i tries un ritme que sigui teu.",
    "exercise": "Respira primer de manera molt teatral, després de manera molt solemne. Després respira a la teva manera, ni tant ni tan poc, i pren un xarrup. Digues en veu baixa: “Trio el meu punt mitjà i el meu propi ritme.”"
  },
  {
    "day": 38,
    "title": "eixir-TE",
    "teaName": "Infusió de balcó a trenc d’alba",
    "benefit": "Avui m’eixo a la meva respiració sense opinar res.",
    "lesson": "eixir-te és mirar per la finestra sense baixar al carrer a dirigir el trànsit. Avui notes com respires i deixes que l’aire faci la seva feina.",
    "exercise": "Apropa’t a una finestra o a una porta, mira lluny i nota tres respiracions sense canviar-les. Després pren un xarrup a poc a poc. Digues en veu baixa: “M’eixo al meu aire i no opino; només miro.”"
  },
  {
    "day": 39,
    "title": "exhalar-TE",
    "teaName": "Infusió d’aire que se’n va",
    "benefit": "Cada cop que deixo anar aire, faig lloc per a alguna cosa nova.",
    "lesson": "L’exhalació és la meitat de la respiració que gairebé ningú no aplaudeix. És la porta de sortida, i avui l’obrim del tot, com qui acomiada amb afecte una visita feixuga.",
    "exercise": "Inspira normal i exhala el doble de lent, com si emboiressis un vidre. Repeteix cinc vegades, amb la mà a la panxa. Digues en veu baixa: “Deixo sortir l’aire i em queda més espai.”"
  },
  {
    "day": 40,
    "title": "pallassejar-TE",
    "teaName": "Infusió de nas vermell",
    "benefit": "Puc riure’m del meu drama i continuar respirant amb calma.",
    "lesson": "Drama King ha anunciat que la teva setmana és una tragèdia en tres actes. Posa-li un nas de pallasso al guió i veuràs com el drama canvia de gènere: de tragèdia a comèdia.",
    "exercise": "Imagina que portes un nas de pallasso i agafa aire amb un piu en inspirar i un pop en deixar-lo anar, tres vegades. Somriu i pren un xarrup. Digues en veu baixa: “El meu drama també té gràcia; continuo respirant.”"
  },
  {
    "day": 41,
    "title": "baixar-TE",
    "teaName": "Infusió de pedestal amb escala",
    "benefit": "Baixar del pedestal em deixa respirar a l’alçada de totes.",
    "lesson": "Queen Zen respira des d’un pedestal tan alt que li falta l’oxigen de la conversa. Avui baixem dos esglaons i respirem a l’alçada de la gent normal, que també té la seva gràcia.",
    "exercise": "Si estàs dempeus, asseu-te. Si estàs asseguda, posa els peus ben plans a terra. Respira cinc vegades notant el contacte amb el terra. Digues en veu baixa: “Baixo del pedestal i respiro a la meva alçada.”"
  },
  {
    "day": 42,
    "title": "desentumir-TE",
    "teaName": "Infusió d’estirada de gat",
    "benefit": "El meu cos agraeix un petit moviment a cada respiració.",
    "lesson": "Després d’hores quieta, el cos és com una frontissa rovellada: una mica de moviment i torna a obrir-se. Avui li poses oli amb aire i gestos petits, sense exigir-te res.",
    "exercise": "Gira lentament les espatlles cap enrere cinc vegades i després el coll, amb cura. Respira fons entre volta i volta. Digues en veu baixa: “Moc el que és quiet i ho faig sense pressa.”"
  },
  {
    "day": 43,
    "title": "emparar-TE",
    "teaName": "Infusió de manta de sofà",
    "benefit": "M’embolcallo amb la meva respiració com amb una manta suau.",
    "lesson": "Cada exhalació és un plec de manta que cau damunt teu. No cal res més: només notar l'escalf d’estar acompanyada del teu propi aire.",
    "exercise": "Embolcalla’t les espatlles amb una manta, una jaqueta o una bufanda i respira deu cops amb els ulls tancats. Prem una mica la tela en deixar anar l’aire. Digues en veu baixa: “Em tinc a prop i amb això n’hi ha prou.”"
  },
  {
    "day": 44,
    "title": "negociar-TE",
    "teaName": "Infusió de pacte raonable",
    "benefit": "Entre dos extrems sempre hi ha un punt mitjà respirable.",
    "lesson": "Drama King demana tres hores de planys; Queen Zen, tres hores de silenci. Tu obres negociacions i pactes deu respiracions, una broma dolenta i un got d’aigua.",
    "exercise": "Fes tres respiracions dramàtiques, tres de solemnes i quatre a la teva manera, comptant amb els dits. Quan acabis, pren un xarrup. Digues en veu baixa: “He arribat a un pacte: respiro a la meva manera.”"
  },
  {
    "day": 45,
    "title": "retratar-TE",
    "teaName": "Infusió de lupa i bon humor",
    "benefit": "Avui em dibuixo amb la meva respiració, sense retocar res.",
    "lesson": "Si la teva respiració d’avui fos un dibuix, seria un gargot, una espiral o una línia recta? Qualsevol val. Avui ets retratista: no corregeixes, només dibuixes el que veus.",
    "exercise": "Respira tres vegades i, amb un dit a l’aire, dibuixa la forma de la teva respiració d’avui. Sense jutjar el resultat. Pren un xarrup i digues en veu baixa: “La meva respiració d’avui té aquesta forma, i està bé.”"
  },
  {
    "day": 46,
    "title": "bufar-TE",
    "teaName": "Infusió de molinet de vent",
    "benefit": "Bufar a poc a poc m’ajuda a apagar el soroll de dins.",
    "lesson": "Bufar damunt d’una infusió calenta és la manera més antiga de refredar el que crema. Avui bufes també les teves presses, amb la mateixa paciència, fins que deixin de cremar.",
    "exercise": "Bufa a poc a poc damunt la tassa, com si refredessis la pressa del dia, cinc vegades. Observa com es mou el vapor. Digues en veu baixa: “Refredo les meves presses bufant amb calma.”"
  },
  {
    "day": 47,
    "title": "disfressar-TE",
    "teaName": "Infusió de capa i antifaç",
    "benefit": "Puc riure’m dels meus drames disfressant-los de lleugeresa.",
    "lesson": "Avui Drama King es presenta amb capa, antifaç i sospir heroic: “Ningú respira com jo!” Tu li segueixes el joc, respires amb una capa imaginària i comproves que l’aire entra igual.",
    "exercise": "Posa’t una capa imaginària a les espatlles i respira com en una pel·lícula d’herois, pit obert, tres vegades. Després deixa caure la capa i riu una mica. Digues en veu baixa: “Amb capa o sense, la meva respiració m’acompanya.”"
  },
  {
    "day": 48,
    "title": "destronar-TE",
    "teaName": "Infusió de corona de paper",
    "benefit": "Respirar sense postureig és respirar de veritat.",
    "lesson": "Queen Zen es corona cada matí amb la seva respiració conscient i la llueix davant el mirall. Avui li canviem la corona per una de paper: pesa menys i s’arruga amb gràcia.",
    "exercise": "Fes dues respiracions amb postura perfecta i tres amb l’esquena corbada, al sofà si cal. Nota que l’aire entra igual. Digues en veu baixa: “La meva corona és de paper i respiro igual de bé.”"
  },
  {
    "day": 49,
    "title": "gronxar-TE",
    "teaName": "Infusió de vaivé de gronxador",
    "benefit": "La meva respiració puja i baixa com un gronxador sense pressa.",
    "lesson": "Inspirar és pujar amb el gronxador; exhalar, baixar. Ningú no empeny amb pressa, ningú no avalua. Avui et deixes anar, una empenta darrere l’altra.",
       exercise": "Dret, balanceja el cos endarrera i endavant al ritme de la respiració, deu vegades, amb els peus ferms. Acaba quieta i pren un xarrup. Digues en veu baixa: “Vaig i vinc amb el meu aire, sense pressa.”"
  },
  {
    "day": 50,
    "title": "endolcir-TE",
    "teaName": "Infusió de mel i paciència",
    "benefit": "Em tracto amb dolçor encara que avui respiri a batzegades.",
    "lesson": "Hi ha respiracions amb pressa, curtes, matusseres. No les renyis: són com nenes que arriben tard. Avui les reps amb una mica de dolçor i un “passa, passa, ets a casa”.",
    "exercise": "Posa una mà al pit i l’altra a la panxa i respira a poc a poc. A cada exhalació, acaricia suaument el pit amb la mà. Digues en veu baixa: “Tinc permís per respirar a batzegades; em tracto amb dolçor.”"
  },
  {
    "day": 51,
    "title": "sospesar-TE",
    "teaName": "Infusió de balança amable",
    "benefit": "Entre agitar-me i apagar-me, hi ha una respiració justa.",
    "lesson": "Drama King pesa cada problema en tones; Queen Zen diu que res no pesa. Tu poses tots dos a la balança i descobreixes que el que és just cap al palmell d’una mà.",
    "exercise": "Estén les mans com una balança. En una, deixa la preocupació d’avui; a l’altra, una respiració. Respira fins que s’equilibrin. Digues en veu baixa: “El que avui pesa, ho sostinc amb aire.”"
  },
  {
    "day": 52,
    "title": "albirar-TE",
    "teaName": "Infusió d’horitzó llunyà",
    "benefit": "Mirar lluny amplia l’espai on respiro.",
    "lesson": "Quan mires l’horitzó, el cos també s’obre. Avui fas servir la vista com una manxa: mires lluny i deixes que l’aire et segueixi.",
    "exercise": "Mira per una finestra el punt més llunyà que vegis i respira tres vegades mentre l’observes. Parpelleja a poc a poc i pren un xarrup. Digues en veu baixa: “Miro lluny i el meu aire troba més espai.”"
  },
  {
    "day": 53,
    "title": "eixamplar-TE",
    "teaName": "Infusió de globus aerostàtic",
    "benefit": "Faig lloc al meu aire com qui obre la finestra de bat a bat.",
    "lesson": "Respirar fons és obrir finestres. Avui aireges la casa per dins: obres de bat a bat i deixes que l’aire corri fins a l’últim racó.",
    "exercise": "Obre els braços en creu mentre inspires i tanca’ls en una abraçada en exhalar. Repeteix sis vegades, a poc a poc. Pren un xarrup. Digues en veu baixa: “Obro finestres per dins i hi ha lloc per a tot.”"
  },
  {
    "day": 54,
    "title": "teatralitzar-TE",
    "teaName": "Infusió de teló i aplaudiments",
    "benefit": "Avui converteixo el meu drama en teatre i baixo el teló a temps.",
    "lesson": "Drama King per fi té escenari. Li donem cinc minuts de gran monòleg sobre el trànsit i després cau el teló. Un bon drama té principi, final i aplaudiment.",
    "exercise": "Narra en veu alta la teva preocupació, amb veu d’actriu, la teva respiració com si fos una gran estrena, durant trenta segons. Després fes una reverència i pren un xarrup. Digues en veu baixa: “Gràcies, gràcies; el teló ja cau.”"
  },
  {
    "day": 55,
    "title": "descalçar-TE",
    "teaName": "Infusió de peus a terra",
    "benefit": "Sense talons ni títols, respiro amb els peus a terra.",
    "lesson": "Queen Zen medita amb un coixí brodat i un mantra d’importació. Avui la descalcem: peus a terra, res a lluir, només la terra sota teu i el teu aire de sempre.",
    "exercise": "Treu-te les sabates i recolza els peus sencers a terra. Respira cinc vegades notant el terra sota els talons. Digues en veu baixa: “Trepitjo la terra sense cerimònia; respiro igual que tothom.”"
  },
  {
    "day": 56,
    "title": "girar-TE",
    "teaName": "Infusió de ball de mitjons",
    "benefit": "La meva respiració segueix els meus girs sense perdre el compàs.",
    "lesson": "De vegades la respiració s’encalla perquè el cos fa massa estona que és quiet. Un gir lent és com canviar de canal: canvia el paisatge i l’aire s’acomoda.",
    "exercise": "Dret, gira el tronc a poc a poc cap a un costat, respira, i cap a l’altre, respira. Cinc cops a cada costat, amb els genolls tous. Digues en veu baixa: “Giro i respiro; el meu aire em segueix el pas.”"
  },
  {
    "day": 57,
    "title": "obsequiar-TE",
    "teaName": "Infusió de pastís amb espelmes",
    "benefit": "Avui em m'obsequio amb tres respiracions de luxe.",
    "lesson": "Si un dia vols regalar-te alguna cosa i no tens temps ni pressupost, hi ha un luxe gratuït: tres respiracions lentes amb tots els honors, com si arribés una convidada VIP: el teu propi aire.",
    "exercise": "Fes tres respiracions lentes posant cara que et serveixen un banquet. Assaboreix-ne cada una i pren un xarrup. Digues en veu baixa: “Em mereixo aquest moment de luxe i és gratis.”"
  },
  {
    "day": 58,
    "title": "recapitular-TE",
    "teaName": "Infusió d’àlbum d’aire",
    "benefit": "He après a respirar amb més amabilitat aquest mes.",
    "lesson": "Aquest mes has sospirat, bufat, sacsejat i bromejat amb el teu aire. Drama King ha fet funcions, Queen Zen ha baixat esglaons i tu has trobat el teu punt mitjà. Mira tot el què has avançat.",
    "exercise": "Recorda tres moments del mes en què la teva respiració t’ha fet d’àncora. Compta’ls amb els dits i pren un xarrup. Digues en veu baixa: “Miro enrere i veig el meu avenç, un alè rere l’altre.”"
  },
  {
    "day": 59,
    "title": "brindar-TE",
    "teaName": "Infusió de brindis amb bombolles de vapor",
    "benefit": "Brindo per mi i pel meu aire: ho estem fent bé.",
    "lesson": "Final de mes de respiració. Aixeca la tassa i brinda amb el teu propi aire, que no ha faltat cap dia. Avui toca floreta: alguna cosa bonica per dir-te, amb veu d’amiga.",
    "exercise": "Aixeca la tassa com en un brindis, inspira i exhala amb un somriure. Pensa una floreta per a tu i guarda-la al Piropero de l’app. Digues en veu baixa: “Respiro, m’acompanyo i m’estimo una mica més.”"
  },
  {
    "day": 60,
    "title": "inspirar-TE",
    "teaName": "Infusió de primer alè",
    "benefit": "Cada nova respiració és una pàgina en blanc.",
    "lesson": "Avui comença una cosa nova sense fer soroll: un aire que entra i encara no sap què passarà. Tu tampoc, i és una bona manera de començar.",
    "exercise": "Inspira pel nas, imaginant que omples una tassa d’aire fresc, i deixa’l anar en un sospir. Fes-ho tres vegades i pren un xarrup. Digues en veu baixa: “Començo de nou amb el primer aire d’avui.”"
  },
  {
    "day":61,
    "title":"escoltar-TE",
    "teaName":"Infusió d’orella curiosa",
    "benefit":"Avui m’escolto com escoltaria una bona amiga.",
    "lesson":"Dins teu hi ha una veu que parla baixet i gairebé mai no interromp. Avui abaixes el volum del món i t’asseus al seu costat, com a la primera fila d’una xerrada petita.",
    "exercise":"Tanca els ulls mig minut i nota quins sons hi ha al teu voltant. Després pregunta’t en silenci què necessites ara. Pren un xarrup i digues en veu baixa: “Sóc aquí per escoltar-te, sense pressa i sense judici.”"
  },
  {
    "day":62,
    "title":"aquietar-TE",
    "teaName":"Infusió de llac sense vent",
    "benefit":"Quan m’aquieto, la meva veu interior se sent millor.",
    "lesson":"Un llac agitat no retorna cap reflex; un de quiet retorna el cel sencer. Amb la teva respiració passa igual: en aquietar-la, el que de debò necessites puja a la superfície.",
    "exercise":"Recolza l’esquena a la cadira i respira cinc vegades sense fer res més, com un llac sense vent. Deixa que les espatlles pesin. Digues en veu baixa: “En la meva quietud també hi ha respostes.”"
  },
  {
    "day":63,
    "title":"xiuxiuejar-TE",
    "teaName":"Infusió de rumor dramàtic",
    "benefit":"Puc sentir el murmuri de Drama King sense creure-m’ho tot.",
    "lesson":"Drama King et xiuxiueja a cau d’orella: “Això acabarà fatal”. Sona a secret d’Estat, però és el mateix guió de sempre amb més suspens. Escolta’l amb curiositat i pregunta-li què necessita de debò.",
    "exercise":"Xiuxiueja el teu pitjor pronòstic del dia amb veu de pel·lícula de misteri i deixa escapar una rialla. Respira fons i pren un xarrup. Digues en veu baixa: “Gràcies per l’avís, Drama King; jo me n’ocupo.”"
  },
  {
    "day":64,
    "title":"despentinar-TE",
    "teaName":"Infusió de monyo desfet",
    "benefit":"La meva veu interior no ha d’anar pentinada per ser sàvia.",
    "lesson":"Queen Zen només escolta la seva veu interior quan sona vellutada i poètica. Avui li remenem el pentinat: de vegades el que necessites arriba maldestre, amb pressa i sense brillantor, i tanmateix és veritat.",
    "exercise":"Despentina’t amb les dues mans o sacseja el cap suaument. Mira’t sense arreglar-te i pren un xarrup. Digues en veu baixa: “També escolto el que arriba sense glamur ni poesia.”"
  },
  {
    "day":65,"title":
    "decantar-TE",
    "teaName":"Infusió de cap decantat",
    "benefit":"Un gest petit em recorda que estic escoltant.",
    "lesson":"Quan algú t’explica una cosa important, decantes el cap sense adonar-te’n. Avui ho fas amb consciència, cap endins: un gest petit i el cos entén que toca prestar atenció.",
    "exercise":"Decanta el cap cap a una espatlla i queda’t allà deu segons; després cap a l’altra. Pregunta’t què vols ara. Pren un xarrup i digues en veu baixa: “Inclino el cap per sentir millor la meva veu.”"
  },
  {
    "day":66,"title":
    "acaronar-TE",
    "benefit":"La meva veu interior es mereix que l'escolti amb afecte.",
    "lesson":"Escoltar també pot ser una carícia. Imagina que la teva necessitat d’avui és un gatet tímid: si li parles fort s’amaga, si li parles baixet puja a la falda.",
    "exercise":"Acaricia’t un avantbraç a poc a poc, com un gatet, mentre respires amb calma. Pregunta al teu cos què li fa falta. Pren un xarrup i digues en veu baixa: “T’escolto amb afecte, sense exigir-te res.”"
  },
  {
    "day":67,"title":
    "sintonitzar-TE",
    "teaName":"Infusió de dial al punt just",
    "benefit":"Entre dos crits, busco la freqüència que és meva.",
    "lesson":"Drama King emet a l’emissora del desastre; Queen Zen, a la del mantra permanent. Tu gires el dial entre les dues fins a trobar la teva: la que parla baixet i diu el que de debò necessites.",
    "exercise":"Gira una mà a l’aire com si moguessis un dial. Fes que soni primer l’emissora del drama, després la del mantra, i atura’t al mig. Pren un xarrup. Digues en veu baixa: “Sintonitzo la meva pròpia emissora.”"
  },
  {
    "day":68,"title":"preguntar-TE",
    "teaName":"Infusió de pregunta sense pressa",
    "benefit":"Avui faig una pregunta amable i deixo que la resposta arribi sola.",
    "lesson":"Una bona pregunta és com deixar una escala en un pou: no estires ningú, només ofereixes el camí. Avui et preguntes què necessites i esperes, sense omplir el silenci amb les teves pròpies respostes.",
    "exercise":"Pregunta’t en silenci què necessites avui. Espera deu respiracions sense respondre amb pressa. Pren un xarrup a poc a poc i digues en veu baixa: “Puc esperar la teva resposta tot el temps que calgui.”"
  },
  {
    "day":69,
    "title":"ventilar-TE","teaName":"Infusió de cortina al vent",
    "benefit":"Renovo l’aire de dins per sentir millor el que hi ha.",
    "lesson":"Una habitació sense ventilar fa olor del mateix de sempre. Obres una escletxa i entra aire nou; de sobte se senten detalls que ja hi eren. Amb la respiració passa igual.",
    "exercise":"Obre una finestra o una porta, o imagina que ho fas. Inspira com si entrés aire de muntanya i exhala l’aire vell. Cinc vegades. Pren un xarrup i digues en veu baixa: “Deixo entrar aire nou i notícies de mi.”"
  },
  {
    "day":70,
    "title":"dramatitzar-TE",
    "teaName":"Infusió de monòleg amb eco",
    "benefit":"Quan dramatitzo a posta, el drama perd la disfressa.",
    "lesson":"Avui donem a Drama King el micròfon deu segons, com en un concurs de talents. Que exageri fins que fins i tot ell rigui. Després, en el silenci que queda, pregunta’t què necessites de debò.",
    "exercise":"Explica a la paret la teva preocupació del dia amb veu de narradora de documental tràgic, deu segons. Riu i respira. Pren un xarrup i digues en veu baixa: “Després de la funció, escolto el que de debò necessito.”"
  },
  {
    "day":71,
    "title":"desmaquillar-TE",
    "teaName":"Infusió de cara rentada",
    "benefit":"M’escolto sense filtres ni frases boniques.",
    "lesson":"Queen Zen es posa cada matí el seu maquillatge espiritual: frase lluminosa, celles zen i somriure de retir. Avui la desmaquillem: a sota hi ha una persona normal amb ganes de berenar, i aquesta també té coses a dir.",
    "exercise":"Fregat la cara amb les mans, com si et treguessis una capa de maquillatge invisible. Mira’t alhora sense posar. Pren un xarrup i digues en veu baixa: “Sense filtres ni frases boniques: així t’escolto.”"
  },
  {
    "day":72,
    "title":"apropar-TE",
    "teaName":"Infusió d'atansament",
    "benefit":"Apropar-me a mi és el primer pas per sentir-me.",
    "lesson":"Per sentir algú que parla baixet, acostes la cadira. Amb tu mateixa igual: un pas cap endins i la veu que semblava llunyana resulta que era a un xiuxiueig.",
    "exercise":"Fes un pas endavant, a poc a poc, com si t’apropessis a algú que parla baixet. Posa la mà al cor i respira. Pren un xarrup. Digues en veu baixa: “M’apropo a mi amb tota la calma del món.”"
  },
  {
    "day":73,"title":"aixoplugar-TE",
    "teaName":"Infusió de paraigua i teulada",
    "benefit":"M’ofereixo aixopluc quan alguna cosa dins demana recer.",
    "lesson":"Quan plou per dins, no cal arreglar els núvols: n’hi ha prou de buscar teulada. Avui la teva veu interior demana aixopluc, i tu, que saps ser bona amfitriona, la deixes passar.",
    "exercise":"Seu al teu racó preferit, creua els braços sobre el pit com una teulada i queda’t aquí mentre fas deu respiracions. Pren un xarrup i digues en veu baixa: “Aquí dins hi caps sencera, amb la teva pluja i tot.”"
  },
  {
    "day":74,
    "title":"arbitrar-TE",
    "teaName":"Infusió de xiulet amable",
    "benefit":"Puc moderar la xerrada de Drama King i Queen Zen.",
    "lesson":"Avui hi ha debat al teu cap: Drama King diu que tot està perdut, Queen Zen que tot està bé. Tu ets la moderadora: dones torn, demanes silenci i decideixes quina part de cada intervenció et serveix.",
    "exercise":"Aixeca una mà per donar la paraula a Drama King, després a Queen Zen, i per fi a la teva veu tranquil·la. Escolta les tres un moment i pren un xarrup. Digues en veu baixa: “Dono torn a totes i decideixo amb calma.”"
  },
  {
    "day":75,
    "title":"fullejar-TE",
    "teaName":"Infusió de llibre de fulls solts",
    "benefit":"Avui fullejo els meus pensaments sense llegir-los amb pressa.",
    "lesson":"Els teus pensaments són un quadern de fulls solts. No cal llegir-lo sencer: avui el fulleges com en una llibreria, notes quins es repeteixen i quins et criden, i no en compres cap.",
    "exercise":"Imagina que passes pàgines a l’aire amb la mà, una per cada pensament que arribi. Fixa’t en quin es repeteix. Pren un xarrup i digues en veu baixa: “Veig passar els meus pensaments i no me’n quedo cap.”"
  },
  {
    "day":76,
    "title":"oxigenar-TE",
    "teaName":"Infusió de brisa de muntanya",
    "benefit":"Cada respiració ampla em dona espai per sentir-me.",
    "lesson":"Respirar bé és donar espai a la teva veu interior. Quan el pit s’omple, fins i tot el que et dius per dins sona menys encongit. Avui la respiració és l’amplificador i no cal pujar el volum.",
    "exercise":"Inspira omplint la panxa, el costat i el pit, com si omplissis tres habitacions, una per pis. Deixa anar a poc a poc. Repeteix quatre vegades. Pren un xarrup i digues en veu baixa: “Respiro amb ganes i la meva veu té espai per sonar.”"
  },
  {
    "day":77,
    "title":"emmurriar-TE",
    "teaName":"Infusió de morros i mel",
    "benefit":"Puc emmurriar-me un minut i després escoltar-me.",
    "lesson":"Drama King s’emmurria perquè ahir ningú no lel va aplaudir. Creuem els braços, fem morros, i quan se li passa la cara d’ofès, apareix el que de veritat li passava.",
    "exercise":"Creua els braços, fes morros i emmurria’t amb ganes durant vint segons. Després deixa anar la cara, respira i pren un xarrup. Digues en veu baixa: “Ja m’he emmurriat; ara escolto el que hi ha a sota.”"
  },
  {
    "day":78,
    "title":"despenjar-TE",
    "teaName":"Infusió de pedestal sense altaveu",
    "benefit":"Deixo de fer conferències al meu interior i començo a escoltar-lo.",
    "lesson":"Queen Zen fa conferències dins del seu cap amb molt de públic i cap oient. Avui despenja el micròfon i seu a l’última fila. Escoltar és un ofici més humil, i més bonic.",
    "exercise":"Fes com si deixessis un micròfon damunt d’una taula i et seguessis darrere, a l’última fila. Respira i escolta en silenci mig minut. Pren un xarrup i digues en veu baixa: “Avui sóc oient, no conferenciant.”"
  },
  {
    "day":79,
    "title":"alçar-TE",
    "teaName":"Infusió d’antena al sol",
    "benefit":"Un gest petit m’ajuda a posar-me en marxa.",
    "lesson":"De vegades el que necessites és només canviar de postura. Un cos que s’alça canvia l’humor de l’habitació, i des d’una altra alçada la teva veu interior parla diferent.",
    "exercise":"Alça’t a poc a poc, allarga els braços cap al sostre i inspira. Baixa’ls i exhala. Pregunta’t què necessites des d’aquesta alçada nova. Pren un xarrup i digues en veu baixa: “M’alço i la meva veu sona diferent des d’aquí.”"
  },
  {
    "day":80,
    "title":"perfumar-TE",
    "teaName":"Infusió de pètals i paciència",
    "benefit":"Em regalo una olor que em faci sentir a casa.",
    "lesson":"L’olfacte arriba a racons on les paraules no entren. Avui la teva veu interior pot parlar en perfum: un cítric, una canyella, els cabells acabats de rentar... el que faci olor de tu en la teva millor versió casolana.",
    "exercise":"Ensuma amb calma la teva infusió, una fruita, una colònia o el sabó de mans. Tanca els ulls i deixa que l’olor t’expliqui alguna cosa. Pren un xarrup i digues en veu baixa: “El meu nas sap el que necessito i m’ho xiuxiueja.”"
  },
  {
    "day":81,
    "title":"temperar-TE",
    "teaName":"Infusió d’aigua tèbia perfecta",
    "benefit":"Ni bullint ni gelada: busco la meva temperatura.",
    "lesson":"Drama King ho serveix tot bullint i Queen Zen ho serveix gelat, amb gel i cara de pau. Tu proves l’aigua amb el dit, com al bany d’un nadó, i busques la temperatura que et cuida.",
    "exercise":"Envolta la tassa amb les mans i nota si és massa calenta o freda. Espera fins que sigui justa. Pren un xarrup i digues en veu baixa: “Busco la meva temperatura, ni bullint ni gelada.”"
  },
  {
    "day":82,
    "title":"rebobinar-TE",
    "teaName":"Infusió de cinta rebobinada",
    "benefit":"Miro el dia cap enrere per veure què em va demanar el cos.",
    "lesson":"Rebobinar el dia és com passar una cinta: aquí, a les deu, un sospir; allà, a les cinc, una espatlla dura. El teu cos t’ha donat pistes tota la jornada, i avui les repasses sense retret.",
    "exercise":"Tanca els ulls i passa el teu dia marxa enrere, escena a escena, com una cinta. Atura’t on notis una estirada o un alleujament. Pren un xarrup. Digues en veu baixa: “Gràcies, cos, per totes les teves pistes.”"
  },
  {
    "day":83,
    "title":"airejar-TE","teaName":
    "Infusió de llençol al sol",
    "benefit":"Airejo el que porto dins per veure què em sobra.",
    "lesson":"Estens la roba al sol i a la tarda fa olor de camp. Amb la respiració fas el mateix amb el que tens a dins: ho penges a l’aire i el que sobra se’n va, i el que fa olor de tu es queda.",
    "exercise":"Inspira obrint el pit i exhala a poc a poc, com si estenguessis llençols al sol. Quatre vegades, amb les espatlles soltes. Pren un xarrup i digues en veu baixa: “El que sobra se’n va amb l’aire; el que és meu es queda.”"
  },
  {
    "day":84,
    "title":"exagerar-TE",
    "teaName":"Infusió de lupa dramàtica",
    "benefit":"Si exagero el meu drama a posta, descobreixo el que necessito.",
    "lesson":"Drama King demana una banda sonora de violins per anunciar que s’ha quedat sense llet. Avui li seguim la corrent fins a l’absurd, i just en la rialla se sent el que feia falta.",
    "exercise":"Explica a algú imaginari una nosa petita, però amb gestos enormes, llàgrimes de teatre i música de violins amb la boca. Riu i respira. Pren un xarrup. Digues en veu baixa: “Amb riures em sento millor.”"
  },
  {
    "day":85,
    "title":"desarmar-TE",
    "teaName":"Infusió d’armadura de llauna",
    "benefit":"Sense armadura espiritual, sento el que de veritat sento.",
    "lesson":"Queen Zen porta armadura de frases boniques perquè res no li faci mal i res no li entri. Avui se la treu peça a peça i descobreix que a sota hi ha una persona que també té dies estranys.",
    "exercise":"Fes com si et treguessis una armadura: guants, muscleres, casc. Deixa cada peça a terra amb un sospir. Queda’t lleugera un instant i pren un xarrup. Digues en veu baixa: “Em trec l’armadura i m’escolto tal com sóc.”"
  },
  {
    "day":86,
    "title":"assentir-TE",
    "teaName":"Infusió de capcineig amable",
    "benefit":"Un sí petit a mi mateixa ja és una manera d’escoltar-me.",
    "lesson":"Quan algú t’escolta de debò, assenteix. Avui aquest gest és per a tu: un capcineig suau que diu t’he sentit, continua. No cal estar d’acord amb tot; n’hi ha prou d’haver-ho sentit.",
    "exercise":"Assenteix a poc a poc amb el cap tres vegades mentre penses en el que necessites. No cal resoldre res. Pren un xarrup i digues en veu baixa: “T’he sentit; no cal que parlis més fort.”"
  },
  {
    "day":87,
    "title":"mullir-TE",
    "teaName":"Infusió de coixí esponjós",
    "benefit":"Avui em preparo un lloc tou on escoltar-me.",
    "lesson":"Un coixí esponjat és una invitació: aquí et pots asseure sense pressa. La teva veu interior fa dies que va dreta, i avui li prepares un lloc tou on per fi explicar-t’ho tot.",
    "exercise":"Mulleix un coixí amb les dues mans, dona-li un parell de cops i seu-hi a sobre o recolza’t. Respira deu vegades. Pren un xarrup i digues en veu baixa: “Tens un lloc tou per dir-me el que vulguis.”"
  },
  {
    "day":88,
    "title":"enten-TE",
    "teaName":"Infusió de traducció simultània",
    "benefit":"Entre dues veus oposades, entenc a la meva manera.",
    "lesson":"Drama King i Queen Zen parlen idiomes diferents però diuen el mateix: necessito que m’escoltin. Tu fas d’intèrpret, tradueixes a llenguatge quotidià i descobreixes que demanen una cosa senzilla.",
    "exercise":"Tria un pensament dramàtic i un de zen sobre el mateix. Tradueix-los a una frase senzilla, com ara: necessito descansar. Pren un xarrup. Digues en veu baixa: “Entenc les dues veus i decideixo jo.”"
  },
  {
    "day":89,
    "title":"recordar-TE",
    "teaName":"Infusió de bagul de records",
    "benefit":"He après a sentir-me una mica millor aquest mes.","lesson":"Aquest mes has après a decantar el cap cap endins, a abaixar el volum del món i a mitjançar entre dues veus dramàtiques. Mira quant has avançat: ara t’escoltes millor que fa trenta dies.",
    "exercise":"Recorda tres moments del mes en què vas escoltar alguna cosa important de tu. Compta’ls amb els dits, un per un. Pren un xarrup i digues en veu baixa: “M’escolto una mica millor cada dia, i això ja és molt.”"
  },
  {
    "day":90,"title":
    "teaName":"afalagar-TE","teaName":
    "Infusió de floreta a cau d’orella",
    "benefit":"Avui em dic una cosa bonica i me la crec.",
    "lesson":"Final de mes d’escolta. La teva veu interior t’ha dit moltes coses; avui toca tornar-li una floreta. Pensa en una qualitat teva que has sentit en veu baixa aquest mes i digues-la en veu alta, que es noti.",
    "exercise":"Tria una floreta per a tu i digues-la mirant-te al mirall o a la finestra, amb un somriure. Guarda’l al Piropero de l’app i pren un xarrup. Digues en veu baixa: “T’escolto, et valoro i t’estimo una mica més.”"
  },
  {
    "day":91,
    "title":"acceptar-TE",
    "teaName":"Infusió de pluja sense queixes",
    "benefit":"Avui accepto el que hi ha, encara que no sigui el que vaig demanar.",
    "lesson":"Acceptar no és rendir-te: és deixar de barallar-te amb la pluja per poder buscar un paraigua. Avui mires el que hi ha al teu dia, tal com ve, i li poses nom sense queixar-te ni maquillar-ho.",
    "exercise":"Mira per la finestra el temps que fa i, sense canviar-lo, digues en veu alta com està. Després repeteix el mateix sobre el teu dia. Pren un xarrup i digues en veu baixa: “Això és el que hi ha, i des d’aquí començo.”"
  },
  {
    "day":92,
    "title":"reposar-TE",
    "teaName":"Infusió de fulla que s’assenta",
    "benefit":"Deixo reposar l’aire i el que porto amb mi.",
    "lesson":"El bon te necessita reposar: si el remenes sense parar, mai no deixa anar el seu sabor. Amb la respiració passa igual: deixa-la assentar i accepta el ritme que avui li surt, sigui curt, llarg o tort.",
    "exercise":"Respira com et vingui, sense ordenar-li res, durant sis respiracions, amb les mans sobre els genolls. Compta-les una per una. Pren un xarrup i digues en veu baixa: “Accepto la respiració que avui em toca.”"
  },
  {
    "day":93,
    "title":"ploriquejar-TE",
    "teaName":"Infusió de mocador i violins",
    "benefit":"Puc deixar que Drama King ploriquegi i continuar dempeus.",
    "lesson":"Drama King necessita avui cinc minuts de ploriqueig de gala, amb mocador de seda. No li portem la contrària: acceptar el teu drama és deixar-lo plorar i oferir-li una galeta, no un discurs.",
    "exercise":"Posa cara de ploriqueig de telenovel·la durant vint segons, amb sospir i mà al front. Quan s’acabi la funció, respira i pren un xarrup. Digues en veu baixa: “Accepto el meu drama sense donar-li el comandament.”"
  },
  {
    "day":94,
    "title":"desmitificar-TE",
    "teaName":"Infusió d’aura sense planxar",
    "benefit":"Acceptar-me també inclou acceptar els meus dies poc il·luminats.",
    "lesson":"Queen Zen assegura que ella no s’enfada, no s’agobia i no es despentina. Mentida pietosa amb encens. Avui acceptem que també té dies de grunyir, i no passa res: és humana amb estoreta de ioga.",
    "exercise":"Digues en veu alta una cosa que avui no et surt gens zen, com un enuig petit o una mandra enorme. Somriu i pren un xarrup. Digues en veu baixa: “Avui no estic zen, i m’accepto igual.”"
  },
  {
    "day":95,
    "title":"arronsar-TE",
    "teaName":"Infusió d’espatlles caigudes",
    "benefit":"Arronsar-me d’espatlles de vegades és la manera més sàvia d’acceptar.",
    "lesson":"L’arronsament d’espatlles és el gest d’acceptar més antic del món: vol dir bé, és el que hi ha. Avui el fas servir a consciència.",
    "exercise":"Puja les espatlles fins a les orelles, aguanta tres segons i deixa-les caure de cop, amb un sospir. Repeteix cinc vegades. Pren un xarrup i digues en veu baixa: “És el que hi ha, i puc amb això.”"
  },
  {
    "day":96,
    "title":"consolar-TE",
    "teaName":"Infusió de galeta i consol",
    "benefit":"M’accepto amb tendresa, també quan em surt tort.",
    "lesson":"Si una amiga t’expliqués que ha ficat la pota, no la renyaries: li posaries la mà a l’espatlla. Avui et toca a tu. Acceptar-te és parlar-te com parlaries a qui més estimes.",
    "exercise":"Posa’t una mà sobre l’espatlla contrària, com si consolessis una amiga, i queda’t així deu respiracions. Pren un xarrup i digues en veu baixa: “Tranquil·la, que has fet el que has pogut.”"
  },
  {
    "day":97,
    "title":"empatar-TE",
    "teaName":"Infusió de marcador en taules",
    "benefit":"Drama King i Queen Zen empaten; jo em quedo amb el punt mitjà.",
    "lesson":"Drama King diu que tot és culpa teva; Queen Zen, que res no és culpa de ningú. Tu deixes el partit en empat: una part et toca i una altra no, i acceptar-ho cap en una sola tassa.",
    "exercise":"Amb una mà digues la frase de Drama King i amb l’altra la de Queen Zen. Ajunta les mans al pit i respira. Pren un xarrup i digues en veu baixa: “Una part em toca, una altra no, i accepto les dues.”"
  },
  {
    "day":98,
    "title":"admet-TE",
    "teaName":"Infusió de veritat sense disfressa",
    "benefit":"Admetre el que sento és el primer pas per acceptar-ho.",
    "lesson":"Admetre és obrir la porta i dir: passa, et veig. No cal convidar-lo a quedar-se. Avui dius en veu alta, o per dins, què sents de debò, sense adorns ni excuses.",
    "exercise":"Completa en silenci la frase: ara mateix sento... Fes-ho tres vegades, amb tres emocions diferents. Pren un xarrup i digues en veu baixa: “Ho admeto sense vergonya: això és el que sento.”"
  },
  {
    "day":99,
    "title":"desfogar-TE",
    "teaName":"Infusió de finestra de diumenge",
    "benefit":"Avui deixo anar l’aire, i amb ell el que no puc canviar.",
    "lesson":"Hi ha coses que avui no pots canviar, i dur-les al pit com una motxilla no les mou de lloc. Respirar fons no les resol, però et deixa una mica més d’espai al costat.",
    "exercise":"Inspira pel nas i deixa anar l’aire per la boca com si et descordessis un botó. Repeteix cinc vegades, baixant les espatlles. Pren un xarrup i digues en veu baixa: “El que no puc canviar, ho respiro i ho deixo estar.”"
  },
  {
    "day":100,
    "title":"rondinar-TE",
    "teaName":"Infusió de grunyit amb canyella",
    "benefit":"Puc rondinar una estona i després continuar amb el dia.",
    "lesson":"Avui Drama King rondina: fa fred, fa calor, el cafè és tebi. Si el deixes grunyir una estona amb permís, es cansa sol. Acceptar la queixa també és una manera de deixar-la anar.",
    "exercise":"Rondina en veu alta durant vint segons sobre una cosa menuda, amb grunyits i tot. Després somriu i pren un xarrup. Digues en veu baixa: “Ja he rondinat; ara toca continuar amb el dia.”"
  },
  {
    "day":101,
    "title":"desafinar-TE","teaName":
    "Infusió de mantra desafinat",
    "benefit":"Puc desafinar una mica i continuar essent valuosa.",
    "lesson":"Queen Zen canta el seu mantra amb una afinació de catedral i mira malament qui s’equivoca. Avui desafina a posta: se sent pitjor, però sona molt més a ella.",
    "exercise":"Canta o taral·leja una nota llarga, a posta una mica desafinada, i riu. Respira i pren un xarrup. Digues en veu baixa: “Desafino, ric i no passa res.”"
  },
  {
    "day":102,
    "title":"obrir-TE",
    "teaName":"Infusió de mans obertes",
    "benefit":"Obro les mans per rebre el que avui em toca.",
    "lesson":"Quan alguna cosa no t’agrada, tanques el puny sense adonar-te’n. Acceptar comença pel cos: obre els dits i deixa que el que sigui vingui o se’n vagi sense agafar-ho.",
    "exercise":"Tanca els punys amb força cinc segons i després obre’ls a poc a poc, amb els palmells cap amunt, sobre els genolls. Respira tres vegades. Pren un xarrup i digues en veu baixa: “Obro les mans i deixo que la vida passi.”"
  },
  {
    "day":103,
    "title":"apaivagar-TE",
    "teaName":"Infusió de ronroneig suau",
    "benefit":"Em tracto amb suavitat, encara que avui no hagi sortit res bé.",
    "lesson":"Hi ha dies en què l’única cosa que pots fer és ronronejar per dins i esperar. Avui apaivaga la part de tu que se sent maldestra: amb una veu suau n'hi ha prou.",
    "exercise":"Fregat les mans fins que estiguin calentes i col·loca-les sobre les galtes. Queda’t així deu respiracions. Pren un xarrup i digues en veu baixa: “Avui em tracto amb suavitat, surti com surti.”"
  },
  {
    "day":104,
    "title":"equalitzar-TE",
    "teaName":"Infusió de volum mitjà",
    "benefit":"No cal que cridi ni calli: puc ajustar el meu volum.",
    "lesson":"Drama King té el volum sempre al màxim i Queen Zen, en silenci de monestir. Tu tens la taula de mescles: abaixes els crits, puges una mica els xiuxiueigs i trobes el teu so.",
    "exercise":"Mou les mans com si llisquessis dos controls: un abaixa el drama, l’altre puja la calma. Atura’t quan el so et sembli just. Pren un xarrup. Digues en veu baixa: “Ajusto el meu volum i accepto el meu propi so.”"
  },
  {
    "day":105,
    "title":"constatar-TE",
    "teaName":"Infusió de fets i un pessic",
    "benefit":"Miro els fets tal com són, sense afegir-hi novel·les.",
    "lesson":"Una cosa és el que ha passat: ha plogut, he arribat tard. Una altra, la novel·la que hi afegeixes: ningú no em respecta. Avui separes els fets del guió i acceptes només els primers.",
    "exercise":"Tria una cosa que et molesta i escriu-la a l’aire amb una sola frase de fets, sense adjectius dramàtics. Pren un xarrup i digues en veu baixa: “Això és el que ha passat; la novel·la la deixo al prestatge.”"
  },
  {
    "day":106,
    "title":"amainar-TE",
    "teaName":"Infusió de tempesta que se’n va",
    "benefit":"La meva respiració amaina com una tempesta cansada.",
    "lesson":"Les tempestes no s’enfaden: passen. Si t’asseus a esperar amb la finestra tancada, amainen soles. Avui la teva respiració fa de cel que es va aclarint a poc a poc.",
    "exercise":"Tanca els ulls i allarga cada exhalació una mica més que l’anterior, com un tro que s’allunya. Fes-ho sis vegades. Pren un xarrup i digues en veu baixa: “Deixo que la tempesta passi al seu ritme.”"
  },
  {
    "day":107,
    "title":"desmaiar-TE",
    "teaName":"Infusió de sofà i ventall",
    "benefit":"Puc desmaiar-me de mentida i aixecar-me de veritat.",
    "lesson":"Drama King es desmaia en llegir la factura de la llum, amb ventall i tot. Acceptar el teu drama és oferir-li un sofà on caure amb estil i després ajudar-lo a aixecar-se sense sermons.",
    "exercise":"Deixa’t caure amb gràcia en un sofà o una cadira, amb la mà al front i un ai llarguíssim. Compta fins a cinc, aixeca’t i respira. Pren un xarrup i digues en veu baixa: “Em desmaio amb gràcia i m’aixeco amb ganes.”"
  },
  {
    "day":108,
    "title":"desbancar-TE",
    "teaName":"Infusió de tro manllevat",
    "benefit":"Deixo que el meu ego espiritual baixi del tro sense enfadar-se.",
    "lesson":"L’ego espiritual de Queen Zen s’asseu al tro del jo ja ho he treballat tot. Avui el baixem amb un somriure, i acceptem que sempre queda alguna cosa per aprendre.",
    "exercise":"Fes una reverència exagerada al teu tro imaginari i seu a terra, al seu costat. Respira allà cinc vegades. Pren un xarrup i digues en veu baixa: “Sempre queda alguna cosa per aprendre, i m’agrada.”"
  },
  {
    "day":109,
    "title":"tamborinar-TE",
    "teaName":"Infusió de batec i tambor",
    "benefit":"El meu cos marca el ritme i jo l’accepto tal com ve.",
    "lesson":"El teu cor porta el compàs sense demanar-te permís ni opinió. Avui l’acompanyes amb els dits, com qui toca el caixó en una festa, sense provar de canviar-li el tempo.",
    "exercise":"Tamborina amb els dits al pit o a la taula, seguint el teu propi ritme, durant trenta segons. Després atura’t i escolta el silenci. Pren un xarrup i digues en veu baixa: “Accepto el meu ritme, sigui el que sigui avui.”"
  },
  {
    "day":110,
    "title":"escalfar-TE",
    "teaName":"Infusió de mitjons de llana",
    "benefit":"Em dono escalfor sense esperar que ningú ho faci.",
    "lesson":"De vegades esperes que algú t’abraci i no arriba ningú. Avui t’escalfes tu: uns mitjons gruixuts, una bufanda, una tassa fumejant. Acceptar la teva necessitat també és cuidar-la.",
    "exercise":"Posa’t uns mitjons gruixuts o una manta als peus i abraça la tassa amb les dues mans. Queda’t quieta un minut. Pren un xarrup i digues en veu baixa: “Em dono l’escalfor que necessito.”"
  },
  {
    "day":111,
    "title":"repartir-TE",
    "teaName":"Infusió de taula amb tres cadires",
    "benefit":"Dono cadira a cada veu i la tercera l’ocupo jo.",
    "lesson":"Avui asseiem Drama King a la teva esquerra i Queen Zen a la dreta. Tots dos parlen, tots dos tenen raó a mitges i tu, al centre, reparteixes els torns i el berenar.",
    "exercise":"Posa tres tasses o tres objectes en fila. Un és Drama King, un altre Queen Zen, el del mig ets tu. Toca’ls un per un i respira. Pren un xarrup i digues en veu baixa: “Hi ha lloc per a les tres veus a la meva taula, i jo presideixo.”"
  },
  {
    "day":112,
    "title":"assaborir-TE",
    "teaName":"Infusió de glop lent",
    "benefit":"Assaboreixo el que sento, encara que no tingui bon gust.",
    "lesson":"Una emoció incòmoda també té gust: amarg, àcid, salat. Avui la proves amb la llengua de la curiositat, sense escopir-la ni empassar-te-la d’un cop.",
    "exercise":"Pren un xarrup molt lent i posa nom al gust. Després pensa en una emoció incòmoda i posa-li gust també. Respira i digues en veu baixa: “Tasto el que sento sense escopir-ho.”"
  },
  {
    "day":113,
    "title":"inhalar-TE",
    "teaName":"Infusió d’aire acabat d’arribar",
    "benefit":"Inhalo el que hi ha, sense demanar-li que sigui una altra cosa.",
    "lesson":"Inhalar és acceptar el que el món t’ofereix en aquell instant: aire de cuina, de carrer o d’armari. No tries l’aroma, però pots rebre’l sense fer ganyotes.",
    "exercise":"Inhala a poc a poc i nota què fa olor al teu voltant, sigui el que sigui. Exhala sense jutjar l’olor. Cinc vegades. Pren un xarrup i digues en veu baixa: “Rebo el que hi ha i continuo respirant.”"
  },
  {
    "day":114,
    "title":"empipar-TE",
    "teaName":"Infusió de pataleta amb xarop",
    "benefit":"Una pataleta petita també té lloc a la meva vida.",
    "lesson":"Drama King fa una pataleta perquè la torradora no torra al seu gust. Avui no li diem que es calmi: el deixem remenar els peus cinc segons sobre una estora i després li oferim aigua.",
    "exercise":"Fes un parell de pataletes al lloc, amb els peus, durant deu segons, amb ganes i sense trencar res. Després respira fons i somriu. Pren un xarrup i digues en veu baixa: “Ja he remenat els peus; em sento més lleugera.”"
  },
  {
    "day":115,
    "title":"desencaramar-TE",
    "teaName":"Infusió d’escala de mà",
    "benefit":"Baixo del que és alt i descobreixo que a baix també es respira.",
    "lesson":"Queen Zen està pujada a un arbre d’il·luminació i no gosa baixar perquè es despentinaria. Avui li allarguem una escala: a baix hi ha terra ferma, gent simpàtica i millor berenar.",
    "exercise":"Imagina que baixes per una escala de mà, graó a graó, i trepitges el terra amb tots dos peus al final. Respira. Pren un xarrup i digues en veu baixa: “Baixo de l’arbre i el terra m’acull.”"
  },
  {
    "day":116,
    "title":"acomodar-TE",
    "teaName":"Infusió de postura a mida",
    "benefit":"M’acomodo a la meva manera i em sento a gust.",
    "lesson":"No existeix una postura perfecta per acceptar el que hi ha. Prova’n una, canvia, prova’n una altra: el teu cos sabrà quina li va a mida i quina és pur teatre.",
    "exercise":"Prova tres postures diferents a la cadira o al sofà, cada una deu segons, i queda’t amb la que et doni més pau. Pren un xarrup i digues en veu baixa: “Aquesta postura és la meva, i m’hi acomodo.”"
  },
  {
    "day":117,
    "title":"arraulir-TE",
    "teaName":"Infusió de cabdell i gat",
    "benefit":"M’arrauleixo sense culpa quan el cos m’ho demana.",
    "lesson":"Arraulir-se és l’art de fer-se petita i tova, com un cabdell. Avui te’l permets sense sentir-te mandrosa: és només la teva manera de dir que avui necessites abric.",
    "exercise":"Seu amb les cames recollides i abraça-les, com un cabdell. Respira cinc vegades notant la cara recolzada als genolls. Pren un xarrup i digues en veu baixa: “M’arrauleixo sense pressa i sense culpa.”"
  },
  {
    "day":118,
    "title":"ajustar-TE",
    "teaName":"Infusió de recepta amb el que hi ha",
    "benefit":"Ajusto l’expectativa a la realitat i continuo en marxa.",
    "lesson":"Drama King demana la lluna sencera i s’enfada si és quart creixent; Queen Zen diu que ja no necessita lluna. Tu ajustes l’expectativa, com qui adapta una recepta al que hi ha a la nevera.",
    "exercise":"Pensa en una expectativa que et pesa i redueix-ne la mida amb les mans, de gran a mitjana. Fes el mateix amb l’altra mà. Pren un xarrup i digues en veu baixa: “Ajusto la meva expectativa i continuo amb ganes.”"
  },
  {
    "day":119,
    "title":"recopilar-TE",
    "teaName":"Infusió de quadern d’acceptacions",
    "benefit":"Aquest mes he après a acceptar sense rendir-me.",
    "lesson":"Aquest mes has deixat ploriquejar Drama King, baixar Queen Zen del seu arbre i obrir les mans. Mira tot el què has avançat: acceptar no t’ha fet més petita, sinó més lleugera.",
    "exercise":"Recopila tres coses que has acceptat aquest mes, una per dit, i mira’t la mà com si fos un diploma. Pren un xarrup i digues en veu baixa: “Accepto més coses que fa un mes, i això ja és avançar.”"
  },
  {
    "day":120,
    "title":"elogiar-TE","teaName":
    "Infusió de floreta amb acceptació",
    "benefit":"Avui m’elogio sense posar-me pegues.",
    "lesson":"Final del mes d’acceptació. Avui toca acceptar un elogi sense treure-li mèrit ni dir que va ser sort. Pensa en alguna cosa que has fet bé aquest mes i rep-la com si te la digués una veïna afectuosa.",
    "exercise":"Tria una floreta per a tu i digues-la mirant-te al mirall, sense treure-li importància. Guarda-la al Piropero de l’app. Pren un xarrup i digues en veu baixa: “Ho accepto i m’ho mereixo.”"
  },
  {
    "day": 121,
    "title": "cuidar-TE",
    "teaName": "Infusió de mim quotidià",
    "benefit": "Avui em cuido com cuido qui més estimo.",
    "lesson": "Cuidar-te no és un luxe de diumenge: és regar cada dia una mica. Avui comences mirant com estàs, sense exigir-te millorar res, com qui s’acosta a veure com van els seus testos.",
    "exercise": "Posa una mà al pit i l’altra a la panxa i pregunta’t com estàs d’energia, de l’1 al 10, sense canviar la xifra. Pren un xarrup i digues en veu baixa: “Avui em cuido començant per mirar-me.”"
  },
  {
    "day": 122,
    "title": "recobrar-TE",
    "teaName": "Infusió d’alè recuperat",
    "benefit": "Recobro l’alè al meu ritme, sense curses.",
    "lesson": "Quan acabes de pujar una escala i t’atures a recobrar l’alè, no et renyes per pantejar. Avui fas el mateix amb el dia: una pausa perquè l’aire retorni.",
    "exercise": "Recolza les mans als genolls, com després de pujar una pujada, i respira cinc vegades fins que l’aire retorni. Pren un xarrup i digues en veu baixa: “Em paro i recobro l’alè, que no hi ha cap cursa.”"
  },
  {
    "day": 123,
    "title": "badallar-TE",
    "teaName": "Infusió de badall amb orquestra",
    "benefit": "Badallo sense disculpar-me: el meu cos també té opinió.",
    "lesson": "Drama King badalla com si se li n’anés l’ànima: quadre complet, mà a la boca i gemec. El deixem actuar. És la seva manera teatral de dir que avui necessita una pausa.",
    "exercise": "Badalla amb ganes tres vegades, amb gemec d’òpera i braços oberts, i riu si et surt la rialla. Pren un xarrup a poc a poc i digues en veu baixa: “El meu cos demana una pausa i li dono la paraula.”"
  },
  {
    "day": 124,
    "title": "gandulejar-TE",
    "teaName": "Infusió d’estoreta sense estrenar",
    "benefit": "Puc no fer res i continuar essent valuosa.",
    "lesson": "Queen Zen s’aixeca a les cinc per meditar, fer ioga i escriure tres pàgines d’agraïment. Avui li proposem una cosa radical: quedar-se mirant el sostre. Descansar de debò també és una pràctica.",
    "exercise": "Estira’t o recolza’t i mira un punt del sostre durant trenta segons sense fer res útil. Després pren un xarrup a poc a poc. Digues en veu baixa: “Avui la meva pràctica és no fer res, i la faig bé.”"
  },
  {
    "day": 125,
    "title": "desemmandrar-TE",
    "teaName": "Infusió de sol a l’esquena",
    "benefit": "Una bona desemmandradda em recorda que el meu cos és meu.",
    "lesson": "Una estirada ben feta dura el que vulgui el cos i no necessita justificació. Avui te la permets llarga i sonora, amb grunyit inclòs.",
    "exercise": "Allarga els braços per sobre del cap, entrellaça els dits i estira’t cap amunt. Grunyeix una mica si et ve de gust. Deixa anar i pren un xarrup. Digues en veu baixa: “M’estiro al meu gust i sense demanar permís.”"
  },
  {
    "day": 126,
    "title": "banyar-TE",
    "teaName": "Infusió d’escuma i vapor",
    "benefit": "Avui em dono un bany d’afecte, encara que sigui a la pica.",
    "lesson": "No cal una banyera amb espelmes: n’hi ha prou amb uns minuts d’aigua tèbia a les mans i a la cara. Cuidar-te també hi cap, en una pica.",
    "exercise": "Renta’t les mans amb aigua tèbia i molta calma, notant cada dit. Eixuga-te-les a poc a poc i pren un xarrup. Digues en veu baixa: “Em rento i em trec el dia de sobre i em quedo a gust.”"
  },
  {
    "day": 127,
    "title": "dosificar-TE",
    "teaName": "Infusió de cullerada justa",
    "benefit": "No cal tot avui: reparteixo les meves forces.",
    "lesson": "Drama King gasta tota l’energia al primer acte i Queen Zen la guarda tant que mai no surt a escena. Tu les dosifiques: una mica al matí, una mica a la tarda i una bona reserva per al final.",
    "exercise": "Dibuixa amb el dit a l’aire tres gots: matí, tarda i nit. Omple cada un fins a la meitat amb la teva energia d’avui. Pren un xarrup i digues en veu baixa: “Reparteixo les forces i en queda per a mi.”"
  },
  {
    "day": 128,
    "title": "advertir-TE",
    "teaName": "Infusió de senyal al camí",
    "benefit": "M’adono del que el meu cos demana abans que cridi.",
    "lesson": "El cansament avisa baixet: un badall, els ulls que piquen, la paciència que s’escurça. Avui et fixes en aquests senyals com qui llegeix els rètols d’una carretera tranquil·la.",
    "exercise": "Recorre el teu cos de peus a cap amb l’atenció, a poc a poc, i fixa’t on hi ha cansament o tensió. Sense arreglar res. Pren un xarrup i digues en veu baixa: “Veig els teus senyals, cos, i els tinc en compte.”"
  },
  {
    "day": 129,
    "title": "assossegar-TE",
    "teaName": "Infusió de tarda sense pressa",
    "benefit": "Assossego la respiració com qui abaixa el foc.",
    "lesson": "Quan alguna cosa bull a foc fort, no cal apagar-la: n’hi ha prou d’abaixar la flama. Amb la teva respiració igual: una mica més lenta, una mica més fonda, i el brou deixa de saltar.",
    "exercise": "Inspira comptant fins a tres i exhala comptant fins a quatre, sis vegades, com abaixant una flama a poc a poc. Pren un xarrup i digues en veu baixa: “Abaixo la flama i tot s’assenta.”"
  },
  {
    "day": 130,
    "title": "arrossegar-TE",
    "teaName": "Infusió de xancletes i drama",
    "benefit": "Puc anar arrossegant els peus amb humor i amb afecte.",
    "lesson": "Drama King s’arrossega pel passadís gemegant que el dilluns és un abisme sense fons. Li posem espardenyes, un coixí i una galeta. De vegades el drama només vol companyia fins al sofà.",
    "exercise": "Arrossega els peus uns passos per l’habitació amb cara de dilluns etern, gemegant amb exageració. Després seu i pren un xarrup. Digues en veu baixa: “Arribo al sofà al meu ritme i amb humor.”"
  },
  {
    "day": 131,
    "title": "desendollar-TE",
    "teaName": "Infusió de mòbil adormit",
    "benefit": "Desendollar-me una estona és una altra manera de carregar-me.",
    "lesson": "Queen Zen presumeix de rutina de benestar amb quinze passos i seguiment a tres aplicacions. Avui li desendollem el mòbil un minut: el descans no necessita estadístiques, només silenci.",
    "exercise": "Deixa el mòbil cap per avall en una altra habitació durant un minut. Sense pantalla, mira per la finestra o tanca els ulls. Pren un xarrup i digues en veu baixa: “El descans no necessita pantalla ni aplaudiments.”"
  },
  {
    "day": 132,
    "title": "caminar-TE",
    "teaName": "Infusió de passos petits",
    "benefit": "Un pas petit cap al que em fa bé ja compta.",
    "lesson": "Els hàbits amables comencen per un pas ridículament petit: anar fins a la cuina a buscar un got d’aigua, obrir la finestra, fer la volta al passadís. Petit no és poc.",
    "exercise": "Camina fins a la finestra més llunyana de casa teva i torna a poc a poc, comptant els passos. Somriu a la teva ombra i pren un xarrup. Digues en veu baixa: “Un pas petit també és un pas.”"
  },
  {
    "day": 133,
    "title": "massatjar-TE",
    "teaName": "Infusió de crema i calma",
    "benefit": "Les meves mans també es mereixen una cura tranquil·la.",
    "lesson": "Les teves mans han obert portes, escrit missatges i sostingut tasses tot el dia. Avui els tornes el favor amb un massatge lent, sense tècnica i sense pressa.",
    "exercise": "Fes un massatge, una mà amb l’altra, prement suaument el palmell i cada dit, i després canvia. Pren un xarrup i digues en veu baixa: “Gràcies, mans, per tot el que feu per mi.”"
  },
  {
    "day": 134,
    "title": "alternar-TE",
    "teaName": "Infusió de meitat i meitat",
    "benefit": "Alternar esforç i descans em manté surant.",
    "lesson": "Drama King vol treballar sense parar fins a caure fulminat; Queen Zen, parar per sempre. Tu alternes: una estona d’esforç, una estona de descans, i la tarda et surt rodona.",
    "exercise": "Estreny els punys i el cos amb força cinc segons i deixa anar de cop. Repeteix dues vegades. Després respira tranquil·la i pren un xarrup. Digues en veu baixa: “Esforç i descans van junts, com les meves dues mans.”"
  },
  {
    "day": 135,
    "title": "detectar-TE",
    "teaName": "Infusió de radar amable",
    "benefit": "Detecto el que m’esgota i el que em recarrega, sense culpa.",
    "lesson": "Hi ha coses que et deixen sense piles i d’altres que te les canvien per unes de noves: una trucada, un passeig, una reunió. Avui fas de detectiu afectuosa i prens nota, sense jutjar.",
    "exercise": "Pensa en dues coses d’avui: una que t’ha deixat sense energia i una altra que t’ha donat ganes. Sosten-les una a cada mà. Pren un xarrup i digues en veu baixa: “Aprenc què m’esgota i què em recarrega.”"
  },
  {
    "day": 136,
    "title": "pausar-TE",
    "teaName": "Infusió de silenci entre notes",
    "benefit": "Avui em regalo una pausa, com la que hi ha entre dues notes.",
    "lesson": "La música no són només notes: també són silencis. Sense ells sonaria a soroll. El teu dia igual: necessita pauses perquè el que fas soni bé.",
    "exercise": "Deixa el que estiguis fent, tanca els ulls i compta deu respiracions sense fer res més. Obre els ulls a poc a poc. Pren un xarrup i digues en veu baixa: “Aquesta pausa és part de la meva música.”"
  },
  {
    "day": 137,
    "title": "planyer-TE",
    "teaName": "Infusió de dilluns amb coixí",
    "benefit": "Deixo que Drama King es planyi una estoneta i després em moc.",
    "lesson": "Drama King es plany que el dia té massa hores i la nit, molt poques. Li donem cinc minuts de queixa amb coixí i te calent, i després li oferim una pausa de debò.",
    "exercise": "Planye’t en veu alta, amb to tràgic, de com és de llarga la llista de coses d’avui. Després recolza l’esquena i respira. Pren un xarrup i digues en veu baixa: “Em planyo una mica, descanso una mica i continuo.”"
  },
  {
    "day": 138,
    "title": "desprogramar-TE",
    "teaName": "Infusió d’agenda en blanc",
    "benefit": "Desprogramo una estona del dia per deixar-lo respirar.",
    "lesson": "Queen Zen té el dia programat al minut: meditació, afirmació, estirament, diari d’agraïment. Avui li deixem un forat en blanc a l’agenda i comprova, aterrida, que sobreviu.",
    "exercise": "Mira l’agenda d’avui i ratlla, amb un dit a l’aire, una cosa que no cal. Respira alleujada i pren un xarrup. Digues en veu baixa: “Deixo un forat lliure i el cuido com un tresor.”"
  },
  {
    "day": 139,
    "title": "ajupir-TE",
    "teaName": "Infusió d’esquena tova",
    "benefit": "Em decanto cap endavant i deixo anar el que carrego.",
    "lesson": "Inclinar-te cap endavant i deixar penjar els braços és un petit conte d’abandó: et desfàs de la rigidesa del dia i deixes que sigui la gravetat qui treballi.",
    "exercise": "Si et va bé, amb els genolls una mica flexionats, inclina’t cap endavant i deixa penjar braços i cap, balancejant-te suaument. Puja a poc a poc. Pren un xarrup i digues en veu baixa: “Deixo que el dia em pengi de les mans un moment.”"
  },
  {
    "day": 140,
    "title": "pentinar-TE",
    "teaName": "Infusió de raspall i paciència",
    "benefit": "Em pentino amb afecte, com qui arregla una cosa valuosa.",
    "lesson": "Pentinar-te a poc a poc és un petit ritu de cura: cada passada del raspall diu sense paraules que et mereixes el temps. Avui no hi ha mirall que jutgi, només mans amables.",
    "exercise": "Passa els dits o una pinta pel cabell molt a poc a poc, de l’arrel a les puntes. Si no en tens, acaricia el cap o el clatell. Pren un xarrup i digues en veu baixa: “M’arreglo amb afecte i sense pressa.”"
  },
  {
    "day": 141,
    "title": "mesurar-TE",
    "teaName": "Infusió de mesura i gràcia",
    "benefit": "Em mesuro les forces sense deixar de lluir.",
    "lesson": "Drama King demana que et donis al món fins a l’última gota; Queen Zen, que no et donis a ningú. Tu et dones amb mesura: el just per no quedar-te buida ni tancada.",
    "exercise": "Ajunta les mans en forma de bol i omple-les d’energia imaginària. Reparteix-ne la meitat a l’aire i guarda l’altra meitat al pit. Pren un xarrup i digues en veu baixa: “Dono amb mesura i em guardo el que és meu.”"
  },
  {
    "day": 142,
    "title": "sondejar-TE",
    "teaName": "Infusió de llanterna petita",
    "benefit": "Pregunto al meu cos què necessita, i espero.",
    "lesson": "Sondejar és baixar una llanterna per un pou per veure què hi ha. Avui la baixes fins al teu cansament i mires si és de son, de pressa o de tenir massa pestanyes obertes al cap.",
    "exercise": "Tanca els ulls i baixa amb l’atenció des del cap fins als peus, com una llanterna. Fixa’t on es queda més estona. Pren un xarrup i digues en veu baixa: “Hi ha alguna cosa aquí que demana cura.”"
  },
  {
    "day": 143,
    "title": "desembarassar-TE",
    "teaName": "Infusió de cel recent obert",
    "benefit": "Desembarasso el cap com qui obre les cortines.",
       "lesson": "Un cap amb massa coses és com un escriptori sense lloc ni per a la tassa. Avui li fas espai: respires, apartes el que no toca i deixes un forat lliure al mig.",
    "exercise": "Imagina que escombres amb la mà un escriptori ple, d’un costat a l’altre, i respira a cada escombrada. Cinc vegades. Pren un xarrup i digues en veu baixa: “Deixo un forat lliure enmig de tot.”"
  },
  {
    "day": 144,
    "title": "protestar-TE",
    "teaName": "Infusió de pancarta i coixí",
    "benefit": "Puc protestar amb humor i descansar amb gust.",
    "lesson": "Drama King organitza una manifestació contra el despertador: pancarta, megàfon i cara de màrtir. Escoltem les seves reivindicacions amb respecte i li oferim negociar cinc minuts més de calma.",
    "exercise": "Aixeca un puny sense força i protesta amb una sola frase graciosa, com un lema de pancarta, contra alguna cosa menor. Riu i respira. Pren un xarrup i digues en veu baixa: “Protesto amb humor i em cuido amb ganes.”"
  },
  {
    "day": 145,
    "title": "escampar-TE",
    "teaName": "Infusió d’estrella de mar",
    "benefit": "Avui m’escampo sense vergonya: descansar també és meu.",
    "lesson": "Queen Zen descansa sempre en postura de lotus, amb l’esquena recta i cara de temple. Avui s’escampa com una estrella de mar al sofà i descobreix que també així hi cap la pau.",
    "exercise": "Estira’t o recolza’t amb braços i cames oberts, com una estrella de mar, i respira cinc vegades notant el pes. Pren un xarrup i digues en veu baixa: “Descanso a la grossa i sense postura.”"
  },
  {
    "day": 146,
    "title": "ordenar-TE",
    "teaName": "Infusió de racó endreçat",
    "benefit": "Endreçar un racó petit endreça una mica el meu cap.",
    "lesson": "Cuidar-te també és cuidar el teu entorn: un racó endreçat és un regal discret per a la versió de tu que arribi cansada aquesta nit. No cal endreçar la casa: n’hi ha prou amb un calaix.",
    "exercise": "Tria un objecte fora de lloc i porta’l al seu lloc amb calma. Mira com queda el racó i pren un xarrup. Digues en veu baixa: “Endreço una mica de fora i s’endreça una mica de dins.”"
  },
  {
    "day": 147,
    "title": "encen-TE",
    "teaName": "Infusió de llum i manta",
    "benefit": "Encenc una llum petita per sentir-me acompanyada.",
    "lesson": "Una llum tènue canvia l’ambient d’una habitació i el del cap. Avui encens una làmpada petita i la tarda es posa en mode casa.",
    "exercise": "Encén una làmpada petita o obre les cortines perquè entri la llum suau, i seu a prop un moment. Pren un xarrup i digues en veu baixa: “Aquesta llum petita és per a mi.”"
  },
  {
    "day": 148,
    "title": "quadrar-TE",
    "teaName": "Infusió de trencaclosques sense pressa",
    "benefit": "Faig que el meu dia em quadri, no que jo quadri amb ell.",
    "lesson": "Drama King estreny la teva agenda fins que cruix; Queen Zen la llança per la finestra. Tu la quadres com un trencaclosques: peces de feina, de pausa i d’afecte, i alguna peça que sobri sense que passi res.",
    "exercise": "Amb els dits a l’aire, col·loca tres peces imaginàries: una de tasca, una de descans i una d’afecte. Mira com encaixen. Pren un xarrup i digues en veu baixa: “El meu dia encaixa quan m’hi incloc.”"
  },
  {
    "day": 149,
    "title": "collir-TE",
    "teaName": "Infusió de cistell ple",
    "benefit": "Aquest mes he collit petites cures que em fan bé.",
    "lesson": "Aquest mes has sembrat pauses, esperesades i bons moments de silenci. Mira tot el què has avançat: el cistell no és ple de grans èxits, sinó de petites cures, i aquestes són les que duren.",
    "exercise": "Recorda tres cures petites que t’has fet aquest mes i posa-les en un cistell imaginari, una per una. Pren un xarrup i digues en veu baixa: “El meu cistell és ple de petites cures.”"
  },
  {
    "day": 150,
    "title": "festejar-TE",
    "teaName": "Infusió de confeti suau",
    "benefit": "Em mereixo cures i floretes a parts iguals.",
    "lesson": "Final del mes de cura. Avui toca celebrar que t’has cuidat una mica més i regalar-te una floreta amb el mateix afecte amb què el donaries a una amiga que ve d’un dia llarg.",
    "exercise": "Tria una floreta per a tu i digues-la en veu alta, amb un somriure i les espatlles soltes. Guarda-la al Piropero de l’app i pren un xarrup. Digues en veu baixa: “Cuidar-me és la meva manera d’estimar-me.”"
  },
  {
    "day": 151,
    "title": "posar-TE",
    "teaName": "Infusió de ratlla a la sorra",
    "benefit": "Avui miro on comencen i acaben els meus límits.",
    "lesson": "Un límit és com la tanca d’un jardí: no serveix per tancar ningú, sinó per saber on comença el teu terreny. Avui et poses a mirar on és aquesta tanca, sense moure-la encara.",
    "exercise": "Dibuixa amb el dit a l’aire un cercle al teu voltant, de la mida del teu espai d’avui. Mira què hi entra i què es queda fora. Pren un xarrup i digues en veu baixa: “Aquest és el meu espai i puc cuidar-lo.”"
    },
    {
    "day": 152,
    "title": "ancorar-TE",
    "teaName": "Infusió d’àncora tranquil·la",
    "benefit": "Respiro fons i em quedo al meu lloc.",
    "lesson": "Abans de dir no, de vegades alguna cosa tremola per dins. Respirar és l’àncora: baixa el pes als peus i evita que se t’emporti el corrent del que els altres esperen.",
    "exercise": "Planta els peus, inspira com si l’aire baixés fins a les plantes i exhala a poc a poc. Fes-ho sis vegades. Pren un xarrup i digues en veu baixa: “Respiro i em quedo al meu lloc.”"
  },
  {
    "day": 153,
    "title": "apuntar-TE",
    "teaName": "Infusió de llista infinita",
    "benefit": "Puc no apuntar-me a tot i continuar essent bona persona.",
    "lesson": "Drama King s’apunta a tot: el sopar, la rifa, la mudança i el club del cactus. Després s’esfondra al sofà gemegant que ningú no l’ajuda. Avui li ensenyem a deixar caselles en blanc.",
    "exercise": "Escriu a l’aire una llista de compromisos i, amb un dit, ratlla’n un amb gest teatral. Respira i pren un xarrup. Digues en veu baixa: “Deixo una casella en blanc i el món continua.”"
   },
  {
    "day": 154,
    "title": "sermonejar-TE",
    "teaName": "Infusió de lliçó sense públic",
    "benefit": "Puc dir no sense fer cap xerrada ni sentir-me superior.",
    "lesson": "Queen Zen diu no amb un discurs de vint minuts sobre el creixement personal aliè. Avui practica la versió curta: no, gràcies. Un límit bonic no necessita sermó.",
    "exercise": "Digues en veu alta una negativa en tres paraules, com ara no, gràcies o avui no puc. Sense explicació. Respira i pren un xarrup. Digues en veu baixa: “El meu no cap en una frase curta.”"
  },
  {
    "day": 155,
    "title": "plantar-TE",
    "teaName": "Infusió de peus d’arrel",
    "benefit": "Em planto amb calma quan alguna cosa no em sembla bé.",
    "lesson": "Plantar-te no és posar-te rígida: és enfonsar els peus com un arbre que es gronxa però no s’arrenca. Avui practiques la postura de qui pot escoltar i tanmateix dir que no.",
    "exercise": "Dret, separa els peus a l’amplada dels malucs i sent el terra a sota. Gronxa el cos suaument sense moure els peus. Pren un xarrup i digues en veu baixa: “Em gronxo, però els meus peus no es mouen.”"
  },
  {
    "day": 156,
    "title": "reservar-TE",
    "teaName": "Infusió de forat reservat",
    "benefit": "Reservo una estona només per a mi i la defenso amb afecte.",
    "lesson": "Si no apuntes a l’agenda una estona per a tu, algú l’omplirà de plans. Avui la reserves, com es reserva una taula al teu restaurant preferit: nom, hora i espelma al centre.",
    "exercise": "Tria un forat del teu dia d’avui o de demà i apunta’l amb un dit a l’aire amb el teu nom. Pren un xarrup i digues en veu baixa: “Aquesta estona és meva i la reservo amb ganes.”"
  },
  {
    "day": 157,
    "title": "pactar-TE",
    "teaName": "Infusió de tracte just",
    "benefit": "Pactar un límit és fer lloc a totes les parts.",
    "lesson": "Drama King vol que diguis sí a tot perquè no es trenqui el món; Queen Zen, que diguis no a tot per estar a cobert. Tu pactes: un sí aquí, un no allà i un potser ben explicat.",
    "exercise": "Amb una mà digues sí a alguna cosa, amb l’altra digues no a una altra. Ajunta les mans i troba un potser al mig. Pren un xarrup i digues en veu baixa: “Pacto amb mi i amb les altres sense perdre’m.”"
  },
  {
    "day": 158,
    "title": "delimitar-TE",
    "teaName": "Infusió de mapa de fronteres",
    "benefit": "Dibuixo les meves fronteres per poder cuidar-les.",
    "lesson": "Un bon mapa no té murs: té línies clares. Avui dibuixes el teu: on et sents còmoda, on ja et fa mal la sabata i on necessites un cartell que digui permís, si us plau.",
    "exercise": "Pensa en una situació que et neguiteja i assenyala amb la mà fins on estàs bé i des d’on ja no. Pren un xarrup i digues en veu baixa: “Fins aquí estic bé; des d’aquí, necessito demanar.”"
  },
  {
    "day": 159,
    "title": "frenar-TE",
    "teaName": "Infusió de pedal suau",
    "benefit": "Frenar a temps m’estalvia disculpes de més.",
    "lesson": "Frenar no és barallar-te amb el cotxe: és conduir-lo amb cura. Abans de dir sí per inèrcia, posa el peu al fre i compta fins a tres. Gairebé sempre la resposta canvia.",
    "exercise": "Imagina que hi ha un pedal sota el teu peu. Prem-lo a poc a poc mentre exhales, com si aturessis un cotxe amb suavitat. Cinc vegades. Pren un xarrup i digues en veu baixa: “Frenar a temps és una manera de cuidar-me.”"
  },
  {
    "day": 160,
    "title": "esquivar-TE",
    "teaName": "Infusió de capa i escapatòria",
    "benefit": "Puc esquivar un pla sense donar explicacions enormes.",
    "lesson": "Drama King esquiva una invitació amb una excusa que inclou un terratrèmol, tres àvies i una nevada al juliol. Avui assaja la versió sense telenovel·la: no puc venir, gràcies per pensar en mi.",
    "exercise": "Inventa l’excusa més descabellada que se't passi pel cap i digues-la en veu alta amb un gest teatral. Després digues la versió curta i sincera. Pren un xarrup i digues en veu baixa: “N’hi ha prou amb dir que no puc.”"
  },
  {
    "day": 161,
    "title": "desmentir-TE",
    "teaName": "Infusió de bondat amb mesura",
    "benefit": "No sóc amor infinit: sóc una persona amb límits, i està bé.",
    "lesson": "Queen Zen proclama que ella és amor infinit, disponible les vint-i-quatre hores. Avui desmentim el rumor amb afecte: ningú no és una cafeteria oberta tota la nit, i descansar no resta bondat.",
    "exercise": "Digues en veu alta: sóc amor infinit, i riu. Després digues una frase més real: tinc un límit i em cuido. Pren un xarrup i digues en veu baixa: “Sóc humana, no cafeteria de guàrdia.”"
  },
  {
    "day": 162,
    "title": "creuar-TE",
    "teaName": "Infusió de braços creuats",
    "benefit": "Creuar els braços de vegades és la meva manera de dir fins aquí.",
    "lesson": "Creuar els braços no sempre és enuig: també és una porta tancada amb afecte. Avui la fas servir amb consciència, com un rètol amable que diu obert a la tarda.",
    "exercise": "Creua els braços sobre el pit i respira tres vegades notant la fermesa. Després obre’ls a poc a poc. Pren un xarrup i digues en veu baixa: “Tanco la porta amb afecte i l’obro quan vull.”"
  },
  {
    "day": 163,
    "title": "recollir-TE",
    "teaName": "Infusió de cargol tranquil",
    "benefit": "Em recullo una estona sense donar explicacions.",
    "lesson": "El cargol es fica a la seva casa sense demanar perdó a ningú i en surt quan li ve de gust. Avui tu també pots recollir-te una estona: és un límit petit, silenciós i perfectament educat.",
    "exercise": "Seu sola en un lloc tranquil, tanca els ulls i compta deu respiracions amb el cap baix, com un cargol. Pren un xarrup i digues en veu baixa: “Em recullo una estona i torno quan em vingui de gust.”"
  },
  {
    "day": 164,
    "title": "ponderar-TE",
    "teaName": "Infusió de balança de cuina",
    "benefit": "Pondero el que em demanen abans de contestar.",
    "lesson": "Drama King respon en cinc segons i se’n penedeix cinc dies; Queen Zen respon en cinc mesos i ningú no sap què va dir. Tu ponderes: ho poses a la balança i contestes quan tinguis un pes clar.",
    "exercise": "Posa en una mà el que et demanen i a l’altra el que tu necessites. Sent quina pesa més. Pren un xarrup i digues en veu baixa: “Ho pondero amb calma i contesto quan ho tingui clar.”"
  },
  {
    "day": 165,
    "title": "identificar-TE",
    "teaName": "Infusió de pista a temps",
    "benefit": "Identifico la meva incomoditat abans que es converteixi en rancúnia.",
    "lesson": "El ressentiment rarament arriba de cop: avisa amb petites picors, com un jersei que pica. Avui et fixes en aquesta sensació, la nomenes i mires quin límit et demana. Si el tema fa molt mal, parla’n amb algú de confiança.",
      "exercise": "Pensa en alguna cosa que t’ha incomodat aquesta setmana i nota on la sents al cos. Posa-li nom en veu baixa. Pren un xarrup i digues en veu baixa: “Això em pica, i és una pista valuosa.”"
  },
  {
    "day": 166,
    "title": "allargar-TE",
    "teaName": "Infusió d’exhalació llarga",
    "benefit": "Allargo l’aire abans de respondre, i la resposta millora.",
    "lesson": "Entre el que et demanen i el que contestes hi ha un espai, i una bona exhalació el fa més gran. Avui aprofites aquest forat per decidir si és sí, no o necessito pensar-ho.",
    "exercise": "Exhala molt a poc a poc, més llarg que la inspiració, quatre vegades. A l’última, pensa què vols contestar. Pren un xarrup i digues en veu baixa: “En l’espai del meu aire hi ha una resposta meva.”"
  },
  {
    "day": 167,
    "title": "sacrificar-TE",
    "teaName": "Infusió de màrtir de pega",
    "benefit": "Puc ajudar sense sacrificar-me fins a desaparèixer.",
    "lesson": "Drama King s’ofereix de màrtir en tot: fa el pastís, renta la roba dels altres i sospira pel passadís. Avui li ensenyem que ajudar amb ganes val més que sacrificar-se amb rancúnia.",
    "exercise": "Posa cara de màrtir dramàtica, amb sospir i mà al front, deu segons. Després deixa anar la cara i somriu. Pren un xarrup i digues en veu baixa: “Ajudo quan puc i amb ganes, no per obligació.”"
  },
  {
    "day": 168,
    "title": "desenganyar-TE",
    "teaName": "Infusió de mirall honest",
    "benefit": "Em desenganyo amb afecte: dir no no em fa egoista.",
    "lesson": "Queen Zen es creu que dir no és de mala persona espiritual. Avui la desenganyem: cuidar la teva energia no és egoisme, és manteniment. Fins i tot els monestirs tanquen la porta a l’hora de sopar.",
    "exercise": "Digues en veu alta aquesta creença: dir no és de mala persona. Mira-la un segon i desmenteix-la amb una frase teva, sense demanar permís. Pren un xarrup i digues en veu baixa: “Cuidar-me no em fa egoista.”"
  },
  {
    "day": 169,
    "title": "retrocedir-TE",
    "teaName": "Infusió de pas enrere",
    "benefit": "Fer un pas enrere també és una manera de dir fins aquí.",
    "lesson": "No tots els límits són paraules: de vegades és un pas enrere per prendre aire. Avui el practiques amb el cos, sense demanar perdó per ocupar l’espai que necessites.",
    "exercise": "Fes un pas enrere, a poc a poc, i respira fons. Queda’t un moment amb més distància. Després torna al lloc. Pren un xarrup i digues en veu baixa: “Faig un pas enrere per estar millor.”"
  },
  {
    "day": 170,
    "title": "dedicar-TE",
    "teaName": "Infusió de temps amb el teu nom",
    "benefit": "Em dedico una estona amb la mateixa cura que a una cita important.",
    "lesson": "Dedicar-te temps és un límit que protegeix el que importa. Si ja has dit sí a tot, aquesta és la teva cita amb la persona que més veuràs en la vida.",
    "exercise": "Fixa al palmell de la mà una cita amb tu, amb dia i hora. Somriu com si t’haguessin convidat a sopar. Pren un xarrup i digues en veu baixa: “Tinc una cita important amb mi.”"
  },
  {
    "day": 171,
    "title": "calibrar-TE",
    "teaName": "Infusió de termòstat amable",
    "benefit": "Calibro els meus límits perquè no siguin ni murs ni portes obertes.",
    "lesson": "Drama King posa un mur de maons davant de tot; Queen Zen el treu i deixa una porta oberta de bat a bat. Tu calibres com amb un termòstat: de vegades més ferma, de vegades més flexible, sempre amb el teu nom.",
    "exercise": "Mou la mà com si giressis un termòstat: puja la fermesa, baixa-la una mica i busca el punt que avui et va bé. Pren un xarrup i digues en veu baixa: “El meu límit té regulador i jo tinc el comandament.”"
  },
  {
    "day": 172,
    "title": "distingir-TE",
    "teaName": "Infusió de dues tasses diferents",
    "benefit": "Distingeixo el que em toca del que no és meu.",
    "lesson": "Hi ha coses que són teves i d’altres que només te les han deixades a la taula. Avui les separes com se separen els mitjons: aquest parell és meu, aquest el torno, aquest ni el conec.",
    "exercise": "Pensa en tres coses que portes a sobre i assenyala amb la mà quines són teves i quines no. Aparta amb un gest les que no. Pren un xarrup i digues en veu baixa: “El què és meu m’ho quedo i la resta ho torno.”"
  },
  {
    "day": 173,
    "title": "aspirar-TE",
    "teaName": "Infusió d’aire amb ganes",
    "benefit": "Aspiro amb ganes el dret a triar com faig servir el meu temps.",
    "lesson": "Dir no a una cosa és dir sí a una altra: a una becaina, a una xerrada pendent, a una estona de res. Avui aspires fons aquest dret i el guardes als pulmons com un secret bonic.",
    "exercise": "Inspira profund imaginant que respires la frase tinc dret a triar. Exhala a poc a poc. Fes-ho cinc vegades. Pren un xarrup i digues en veu baixa: “Tinc dret a decidir com faig servir el meu temps.”"
  },
  {
    "day": 174,
    "title": "regatejar-TE",
    "teaName": "Infusió de mercat i paciència",
    "benefit": "No cal que rebaixi el meu no cada cop que algú regateja.",
    "lesson": "Drama King negocia un no com si fos una catifa en un mercat: només cinc minutets, si us plau. Avui aprens a mantenir el preu sense enfadar-te: un no és un no, encara que es demani amb ulls tristos.",
    "exercise": "Imagina que algú insisteix tres vegades i respon-li les tres igual, amb veu tranquil·la i sense explicacions noves. Somriu i pren un xarrup. Digues en veu baixa: “El meu no es queda com està, sense descomptes.”"
  },
  {
    "day": 175,
    "title": "desacreditar-TE",
    "teaName": "Infusió de pedestal de cartró",
    "benefit": "Els meus límits no són sagrats ni rígids: són humans.",
    "lesson": "Queen Zen tracta cada límit com una llei sagrada, amb cerimònia i campanetes. Avui el desacreditem amb un somriure: un límit és una eina, i les eines s’ajusten, s’afinen i de vegades es canvien.",
    "exercise": "Imagina el teu límit com una eina que sostens a la mà. Dona-li la volta, mira-la per tots costats i deixa-la sobre la taula. Pren un xarrup i digues en veu baixa: “Els meus límits són eines, no dogmes.”"
  },
  {
    "day": 176,
    "title": "gesticular-TE",
    "teaName": "Infusió de mans que parlen",
    "benefit": "Puc dir no amb les mans abans de dir-ho amb la veu.",
    "lesson": "Si la paraula s’encalla a la gola, comença pel cos: una mà alçada, un cap que es mou, un somriure que no cedeix. El gest assaja el límit i la veu després l’acompanya.",
    "exercise": "Fes amb la mà el gest de no, gràcies: palmell suau cap endavant i somriure. Repeteix-ho tres vegades. Pren un xarrup i digues en veu baixa: “El meu cos ja sap com dir que no.”"
  },
  {
    "day": 177,
    "title": "recompensar-TE",
    "teaName": "Infusió de galeta merescuda",
    "benefit": "Cada límit que poso es mereix un premi petit.",
    "lesson": "Posar un límit costa, encara que surti bé. Avui et recompenses com es premia un campió: sense discurs, amb una galeta o una estona de manta.",
    "exercise": "Tria un premi petit i gratuït, com mirar la posta de sol o escoltar una cançó, i regala-te’l ara. Pren un xarrup i digues en veu baixa: “M’ho he guanyat per cuidar-me.”"
  },
  {
    "day": 178,
    "title": "matisar-TE",
    "teaName": "Infusió de gris amb matisos",
    "benefit": "Entre un sí i un no hi ha molts matisos, i puc fer-los servir.",
    "lesson": "Drama King només veu blanc o negre; Queen Zen, només llum daurada. Tu veus els grisos: sí, però més tard; no a això, sí a allò altre; potser, però amb condicions. Els matisos també són límits.",
    "exercise": "Amb els dits, marca a l’aire una escala de l’1 al 5 de quant et ve de gust una cosa. Tria el teu número d’avui sense culpa. Pren un xarrup i digues en veu baixa: “La meva resposta té matisos i continua sent vàlida.”"
  },
  {
    "day": 179,
    "title": "balancejar-TE",
    "teaName": "Infusió de balanç del mes",
    "benefit": "Aquest mes he après a dir no amb més afecte.",
    "lesson": "Aquest mes has frenat a temps, dibuixat les teves fronteres i assajat nos i sís. Mira quant has avançat: els teus límits ja no són murs, són costures que mantenen tot al seu lloc.",
    "exercise": "Recorda tres moments del mes en què vas posar un límit, encara que fos petit. Compta’ls amb els dits. Pren un xarrup i digues en veu baixa: “He posat límits amb afecte i continuo dempeus.”"
  },
  {
    "day": 180,
    "title": "aplaudir-TE",
    "teaName": "Infusió d’aplaudiment i floreta",
    "benefit": "Avui m’aplaudeixo per cuidar-me i em regalo una floreta.",
    "lesson": "Final del mes de límits. Posar un límit sense trencar res es mereix un aplaudiment llarg. Avui te’l dones, juntament amb una floreta bonica, d’aquelles que es diuen a algú valent que ha cuidat el que importa.",
    "exercise": "Aplaudeix a poc a poc tres vegades amb cara de gala. Tria una floreta per a tu i digues-la en veu alta. Guarda-la al Piropero de l’app i pren un xarrup. Digues en veu baixa: “Em valoro i em cuido sense por.”"
  },
  {
    "day": 181,
    "title": "curiosejar-TE",
    "teaName": "Infusió d’exploradora curiosa",
    "benefit": "Avui em miro amb ulls d’exploradora, sense pressa i amb rialles.",
    "lesson": "Una exploradora no jutja el que troba: ho mira, ho anota i es sorprèn. Avui explores el teu dia com si fos un paisatge nou, buscant tres detalls graciosos o curiosos.",
    "exercise": "Durant un minut, mira al teu voltant i busca tres detalls que et facin somriure (una ombra, un objecte estrany, una arruga de la manta). Pren un xarrup i digues en veu baixa: “Avui exploro el meu dia amb ulls curiosos i em sorprenc.”"
  },
  {
    "day": 182,
    "title": "esbufegar-TE",
    "teaName": "Infusió d’esbufec alliberador",
    "benefit": "Un bon esbufec també és una manera de deixar anar.",
    "lesson": "De vegades la respiració elegant no surt i el que demana el cos és un esbufec sonor, com el d’un cavall després de la cursa. Esbufegar sense vergonya també compta com respirar.",
    "exercise": "Inspira pel nas i deixa anar l’aire per la boca amb un esbufec sonor i gens elegant, tres vegades. Si et fa riure, millor. Digues en veu baixa: “Deixo anar l’aire i deixo anar la tensió.”"
  },
  {
    "day": 183,
    "title": "desternillar-TE",
    "teaName": "Infusió de crispetes i riallades",
    "benefit": "Si Drama King assaja una tragèdia, jo m’emporto les crispetes.",
    "lesson": "Drama King anuncia que s’acaba el món perquè no troba les claus. Avui no hi discuteixes: t’asseus a veure’l actuar, amb crispetes imaginàries, i et rius de la funció.",
    "exercise": "Recorda alguna cosa que avui t’ha fet perdre els nervis i explica-te-la amb veu de narradora d’un documental dramàtic, exagerant. Quan et facis riure, pren un xarrup i digues en veu baixa: “Gaudeixo de la funció i em ric del drama.”"
  },
  {
    "day": 184,
    "title": "desacralitzar-TE",
    "teaName": "Infusió de calma sense encens",
    "benefit": "Puc cuidar la meva pau sense prendre-me-la com una religió.",
    "lesson": "Queen Zen converteix cada respiració en una cerimònia i cada silenci en una sentència. Avui li recordes que la pau també pot ser casolana: sense encens, sense gong i sense mirar per sobre l’espatlla.",
    "exercise": "Fes alguna cosa quotidiana que et calmi (rentar una tassa, regar una planta) amb l’atenció d’una mestra zen, però sense cerimònia ni cara de transcendència. Digues en veu baixa: “La meva pau no necessita cerimònia per ser real.”"
  },
  {
    "day": 185,
    "title": "brincar-TE",
    "teaName": "Infusió de saltirons",
    "benefit": "Un saltiró d’alegria em canvia el dia.",
    "lesson": "Quan alguna cosa els fa il·lusió, les criatures petites salten sense pensar-hi. Avui recuperes aquest costum: un salt petit, sense públic i sense cap motiu seriós.",
    "exercise": "Fes tres saltirons suaus al lloc, amb els braços solts i un somriure (o, si prefereixes, mou les espatlles al ritme d’un salt imaginari). Pren un xarrup i digues en veu baixa: “Em permeto l’alegria petita i sense motiu.”"
  },
  {
    "day": 186,
    "title": "homenatjar-TE",
    "teaName": "Infusió d’homenatge petit",
    "benefit": "Avui em faig un homenatge, encara que sigui petit.",
    "lesson": "Els homenatges es fan a qui els mereix, i tu els mereixes. Amb un aplaudiment de tres segons, una cançó o una nota amable ja tens un homenatge complet.",
    "exercise": "Posa una cançó que t’agradi i dedica-te-la mentalment, com a la ràdio. Quan acabi, aplaudeix tres vegades suaument i digues en veu baixa: “Em faig un homenatge perquè m'el mereixo.”"
  },
  {
    "day": 187,
    "title": "anivellar-TE",
    "teaName": "Infusió de bombolla al centre",
    "benefit": "Entre el drama i la pose, sempre trobo un punt mitjà amb humor.",
    "lesson": "Drama King diu que tot va malament i Queen Zen que tot va perfecte. Avui fas servir un nivell de bombolla imaginari: quan la bombolla queda al centre, el teu dia ni és una tragèdia ni un miracle; és un dia normal, que ja és molt.",
    "exercise": "Estén un braç amb el palmell cap amunt, com si portessis un nivell de bombolla, i respira fins que el sentis estable. Pren un xarrup i digues en veu baixa: “Ni tragèdia ni miracle: un dia normal, i en tinc prou.”"
  },
  {
    "day": 188,
    "title": "espiar-TE",
    "teaName": "Infusió de detectiva afectuosa",
    "benefit": "Avui m’espio amb afecte i em ric de les meves manies.",
    "lesson": "Totes tenim manies: la tassa preferida, el racó de sempre, el sospir abans d’obrir el correu. Avui les observes com qui espia amb tendresa una veïna simpàtica: sense criticar, només prenent nota.",
    "exercise": "Durant el dia, descobreix una de les teves manies i posa-li un nom divertit (“el sospir de dilluns”). Quan la vegis, somriu i digues en veu baixa: “Em conec i m’estimo, manies incloses.”"
  },
  {
    "day": 189,
    "title": "taral·lejar-TE",
    "teaName": "Infusió de brunzit d’abella",
    "benefit": "Si taral·lejo en expirar, la meva respiració es torna música.",
    "lesson": "Expirar amb un brunzit suau, com una abella contenta, allarga l’aire sense esforç i fa pessigolles al pit. És respirar i jugar alhora.",
    "exercise": "Inspira pel nas i, en expirar, taral·leja una nota suau, tres vegades, notant la vibració al pit i a la gola. Pren un xarrup i digues en veu baixa: “La meva respiració té música i m’acompanya.”"
  },
  {
    "day": 190,
    "title": "burlar-TE",
    "teaName": "Infusió de telenotícies exagerat",
    "benefit": "Puc riure’m dels meus drames sense treure importància als meus sentiments.",
    "lesson": "Riure’s de Drama King no és burlar-se del que sents: és treure-li el vestuari al personatge per veure què hi ha a sota, que sol ser una por petita que només vol una abraçada.",
    "exercise": "Explica la teva preocupació del dia amb veu de presentadora del telenotícies, amb to molt seriós i titulars exagerats. Quan acabis, respira fons, pren un xarrup i digues en veu baixa: “Em ric del personatge i cuido la por que hi ha a sota.”"
  },
  {
    "day": 191,
    "title": "suavitzar-TE",
    "teaName": "Infusió de plastilina tèbia",
    "benefit": "Suavitzar-me no em treu pau: em dona tendresa.",
    "lesson": "Queen Zen es manté tan estirada que sembla de porcellana. Avui la convides a suavitzar-se una mica: acceptar un dia maldestre, riure’s d’una ensopegada i deixar que algú li digui que s’ha despentinat.",
    "exercise": "Relaxa la mandíbula, el front i les mans, com si fossin de plastilina tèbia. Pren un xarrup i digues en veu baixa: “Em suavitzo per dins i la pau continua amb mi.”"
  },
  {
    "day": 192,
    "title": "bellugar-TE",
    "teaName": "Infusió d’arbre amb vent",
    "benefit": "Un bon bellugueig em treu les teranyines del cap.",
    "lesson": "Un arbre en un dia de vent es belluga sencer i no es trenca: es deixa anar i torna a assentar-se. Tu també pots deixar anar les preocupacions enganxades, començant per les mans.",
    "exercise": "Belluga suaument les mans, després els braços, les espatlles i, si vols, tot el cos durant uns quinze segons. Després queda’t quieta, pren un xarrup i digues en veu baixa: “Em sacsejo el que sobra i m’assento.”"
  },
  {
    "day": 193,
    "title": "delectar-TE",
    "teaName": "Infusió d’alegria sense explicacions",
    "benefit": "Alegrar-me per les coses petites també és un acte d’afecte.",
    "lesson": "Delectar-se és la paraula elegant per gaudir sense culpa. Avui et dones permís per alegrar-te d’alguna cosa petita i per no justificar-ho davant de ningú.",
    "exercise": "Pensa en alguna cosa petita que avui t’alegri (una olor, un raig de sol, un missatge) i deixa que et dibuixi un somriure. Pren un xarrup i digues en veu baixa: “Em delecto amb el que és petit i no he de donar explicacions.”"
  },
  {
    "day": 194,
    "title": "afinar-TE",
    "teaName": "Infusió d’afinació suau",
    "benefit": "Puc afinar-me com un instrument: sense exigències i al meu ritme.",
    "lesson": "Drama King toca sempre en do menor i Queen Zen desafina de tanta solemnitat. Tu ets l’afinadora: ajustes una corda, escoltes i somrius quan sona una mica millor.",
    "exercise": "Imagina que ets un instrument i busca quina corda està fluixa o tensa avui: espatlles, celles, veu? Afluixa o tensa una mica i respira. Pren un xarrup i digues en veu baixa: “M’afino amb paciència i em quedo al meu to.”"
  },
  {
    "day": 195,
    "title": "escodrinyar-TE",
    "teaName": "Infusió de lupa amable",
    "benefit": "Si em miro amb lupa i bon humor, trobo més tendresa que defectes.",
    "lesson": "Una lupa serveix per veure el que és petit: la arruga de riure, la mania simpàtica, el gest que fas sense adonar-te’n. Avui fas servir la lupa per trobar el que és entranyable, no el que falla.",
    "exercise": "Mira’t les mans amb atenció durant un minut, com si no les haguessis vist mai, buscant tres detalls que t’agradin. Pren un xarrup i digues en veu baixa: “Em miro amb lupa amable i trobo coses que m’agraden de mi.”"
  },
  {
    "day": 196,
    "title": "xiular-TE",
    "teaName": "Infusió de sopa que es refreda",
    "benefit": "Bufar baixet pels llavis em recorda que no hi ha pressa.",
    "lesson": "Xiular o bufar amb els llavis arrufats allarga l’expiració gairebé sense voler, com quan bufes una sopa calenta perquè es refredi.",
    "exercise": "Inspira pel nas i expira a poc a poc pels llavis arrufats, com si bufessis una sopa molt calenta o xiulessis baixet, cinc vegades. Digues en veu baixa: “Bufo a poc a poc i tot es refreda una mica.”"
  },
  {
    "day": 197,
    "title": "ironitzar-TE",
    "teaName": "Infusió d’ironia amb mocador de seda",
    "benefit": "Puc fer servir la ironia per treure pes als meus drames, sense fer mal a ningú.",
    "lesson": "Una mica d’ironia suau és com un mocador de seda sobre el drama: l’alleugereix sense tapar el que sents. Avui practiques amb tu, amb tendresa, i mai amb duresa.",
    "exercise": "Davant d’una contrarietat d’avui, exclama en veu alta i amb to teatral: “Una altra tragèdia grega!”. Somriu, pren un xarrup i digues en veu baixa: “Gràcies, drama, ja pots seure.”"
  },
  {
    "day": 198,
    "title": "espolsar-TE",
    "teaName": "Infusió de bagul espolsat",
    "benefit": "Puc espolsar la pols de les meves idees de perfecció.",
    "lesson": "Queen Zen guarda en un bagul les seves idees de com hauria de ser una persona serena: sempre tranquil·la, sempre sàvia, sempre amable. Avui obres el bagul, esternudes amb la pols i et rius de com de passades de moda que estan.",
    "exercise": "Imagina que obres un bagul amb les teves idees de com hauries de ser. Espolsa-les amb les mans, esternuda si et surt i deixa les que ja no et serveixen. Pren un xarrup i digues en veu baixa: “Deixo les meves idees de perfecció al traster.”"
  },
  {
    "day": 199,
    "title": "onejar-TE",
    "teaName": "Infusió d’alga que oneja",
    "benefit": "Moure el cos en ones em recorda que també flueixo.",
    "lesson": "L’aigua no té pressa ni postura fixa: s’adapta, oneja i torna. Mou els braços o el tors com una alga i deixa que el teu cos recordi aquesta soltura.",
    "exercise": "Dreta o asseguda, mou els braços i el tors en ones lentes, com una alga dins l’aigua, durant un minut. Pren un xarrup i digues en veu baixa: “Flueixo al meu ritme i m’adapto sense pressa.”"
  },
  {
    "day": 200,
    "title": "alegrar-TE",
    "teaName": "Infusió de capritx acolorit",
    "benefit": "Puc alegrar-me el dia amb un detall que només entenc jo.",
    "lesson": "Hi ha gestos una mica tontos que només entens tu: uns mitjons de colors, un adhesiu a la llibreta, la cançó cursi que t’encanta. Avui els fas servir a propòsit, perquè alegrar-te també és cuidar-te.",
    "exercise": "Fes alguna cosa petita i una mica tonta per alegrar-te (posar-te alguna cosa de color, escoltar una cançó cursi, dibuixar una cara en un paper). Pren un xarrup i digues en veu baixa: “M’alegro el dia amb les meves coses, i això està bé.”"
  },
  {
    "day": 201,
    "title": "alinear-TE",
    "teaName": "Infusió de cap, cor i peus",
    "benefit": "Quan alineo cap, cor i cos, camino més lleugera.",
    "lesson": "Drama King vol que tothom vagi cap al desastre i Queen Zen cap als núvols. Tu comproves la fila: cap, cor i peus mirant cap al mateix lloc, encara que sigui cap al sofà.",
    "exercise": "Posa una mà al cap, una altra al cor i nota els peus a terra. Pregunta’ls als tres què necessiten i respira. Pren un xarrup i digues en veu baixa: “M’alineo amb afecte i camino al meu ritme.”"
  },
  {
    "day": 202,
    "title": "tafanejar-TE",
    "teaName": "Infusió de veïna curiosa",
    "benefit": "Avui tafanejo dins dels meus pensaments només per riure una mica.",
    "lesson": "Imagina que el teu cap és una casa amb la porta entreoberta i tu una veïna tafanera però bona: hi treus el cap, veus qui parla més fort i somrius, sense entrar a arreglar res.",
    "exercise": "Durant un minut, tafaneja el que passa al teu cap com si fos una finestra de veïnat: qui parla, qui es queixa, qui canta? Somriu, pren un xarrup i digues en veu baixa: “Trec el cap a la meva ment amb curiositat i sense judici.”"
  },
  {
    "day": 203,
    "title": "carraspejar-TE",
    "teaName": "Infusió de gola aclarida",
    "benefit": "De vegades només necessito aclarir-me la gola per dir el que penso.",
    "lesson": "Carraspejar és avisar que parlaràs. Abans de dir alguna cosa important (a una altra persona o a tu mateixa), una respiració i un petit carraspeig et posen al teu lloc.",
    "exercise": "Inspira fons i, en expirar, carraspeja suaument, com qui es prepara per parlar. Repeteix-ho dues vegades i pren un xarrup. Digues en veu baixa: “M’aclareixo la veu i dic el que és meu amb calma.”"
  },
  {
    "day": 204,
    "title": "esbojarrar-TE",
    "teaName": "Infusió de veu d’ànec",
    "benefit": "Amb una mica de gresca i afecte, el meu drama es fa petitó.",
    "lesson": "Drama King adora el micròfon, però es desinfla amb una bona gresca. Avui li poses veu de dibuixos animats i et sorprèn el poc que espanta una tragèdia amb veu d’ànec.",
    "exercise": "Repeteix la teva preocupació del dia amb veu de dibuixos animats o d’ànec. Respira, riu si et surt i pren un xarrup. Digues en veu baixa: “El meu drama ja no mana: ara té veu d’ànec.”"
  },
  {
    "day": 205,
    "title": "desmuntar-TE",
    "teaName": "Infusió d’escala cap avall",
    "benefit": "Puc baixar del meu pedestal i seure a taula amb totes.",
    "lesson": "Queen Zen està dalt d’un pedestal altíssim i es queixa que li fa mal el coll de mirar des d’allà. Avui l’ajudes a baixar per l’escala, treure’s la corona i compartir un te amb qui passava per allà.",
    "exercise": "Imagina que baixes esglaó a esglaó d’un pedestal. A cada esglaó, deixa anar una pose (la sàvia, la perfecta, la que ho porta tot bé). Quan arribis a baix, pren un xarrup i digues en veu baixa: “Baixo del pedestal i m’assec amb les altres.”"
  },
  {
    "day": 206,
    "title": "joguinejar-TE",
    "teaName": "Infusió de joc sense objectiu",
    "benefit": "Joguinejar una estona també és una manera de cuidar-me.",
    "lesson": "Els cadells joguinegen sense objectiu ni productivitat. Avui et regales un parell de minuts de joc pur: un ball tonto, una cursa fins a la cuina, una baralla de coixins amb l’aire.",
    "exercise": "Juga durant un minut: balla com et vingui de gust, inventa un pas o persegueix una cançó amb els peus. Quan acabis, respira fons, pren un xarrup i digues en veu baixa: “Jugo sense objectiu, només perquè em fa bé.”"
  },
  {
    "day": 207,
    "title": "entendrir-TE",
    "teaName": "Infusió de tendresa maldestra",
    "benefit": "Puc mirar les meves ensopegades amb tendresa.",
    "lesson": "Totes tenim un costat maldestre: ensopegar amb els nostres propis peus, oblidar-nos del que anàvem a fer, vessar el te. Avui el mires com es mira un nadó que s’embolica amb les seves pròpies mans.",
    "exercise": "Recorda una ensopegada recent i mira-la amb tendresa, somrient amb la mà a la galta. Pren un xarrup i digues en veu baixa: “La meva maldestresa també mereix afecte.”"
  },
  {
    "day": 208,
    "title": "concertar-TE",
    "teaName": "Infusió de sopar de gala",
    "benefit": "Puc concertar una cita entre el meu drama i la meva calma, i que s’avinguin.",
    "lesson": "Avui organitzes un sopar de gala entre Drama King i Queen Zen: tu poses el menú, la música i les normes. Res de crits, res de sermons, només te i una mica de riure.",
    "exercise": "Imagina que reuneixes Drama King i Queen Zen en una taula i els proposes un tracte: ell baixa el volum, ella baixa el pedestal. Pren un xarrup i digues en veu baixa: “Concertem un tracte: riure, calma i molt de -TE.”"
  },
  {
    "day": 209,
    "title": "rememorar-TE",
    "teaName": "Infusió de rialles recordades",
    "benefit": "Recordar les meves rialles del mes em retorna la lleugeresa.",
    "lesson": "Aquest mes has practicat l’humor, el joc i la perspectiva. Fes memòria: quina va ser la teva rialla més espontània? Quin drama vas reduir a la seva mida? Quin joc se t’ha acudit?",
    "exercise": "Recorda tres moments d’aquest mes en què t’has rigut o has jugat, encara que fossin petits. Pren un xarrup i digues en veu baixa: “He après a riure’m amb mi i a jugar amb el meu dia.”"
  },
  {
    "day": 210,
    "title": "ovacionar-TE",
    "teaName": "Infusió d’ovació i rialles",
    "benefit": "Em mereixo una ovació per prendre’m la vida amb humor i afecte.",
    "lesson": "Has tancat el mes de l’humor: enhorabona! Avui t’aixeques i et dones l’ovació que es dona a qui ho ha fet bé, i a més et regales una floreta somrient.",
    "exercise": "Posa’t dempeus i aplaudeix amb ganes, com en un teatre, durant deu segons. Després et dius una floreta divertida i desa-la al Piropero. Pren un xarrup i digues en veu baixa: “M’ovaciono amb afecte i celebro la meva rialla.”"
  },
  {
    "day": 211,
    "title": "agrair-TE",
    "teaName": "Infusió de gràcies a primera vista",
    "benefit": "Avui em miro i trobo alguna cosa que agrair-me.",
    "lesson": "Mirar-te amb gratitud és com encendre el llum d’una habitació que ja coneixies: no canvia res de lloc, però de sobte veus allò que estava ben posat.",
    "exercise": "Mira’t un instant al mirall, a la pantalla apagada del mòbil o al reflex de la finestra. Busca un detall que agrair-te i digues en veu baixa: “Em dono les gràcies per continuar aquí i per intentar-ho cada dia.”"
  },
  {
    "day": 212,
    "title": "omplir-TE",
    "teaName": "Infusió d’aire agraït",
    "benefit": "Cada respiració és un regal que ja ve inclòs.",
    "lesson": "L’aire arriba sense factura ni llista d’espera. Cada cop que agafes aire, el cos fa un lliurament a domicili. Avui li signes el rebut amb un somriure.",
    "exercise": "Dret, amb les mans a les costelles, omple el pit a poc a poc i nota com s’obre com un ventall. Deixa anar l’aire i digues en veu baixa: “Gràcies, cos, per treballar sense que t’ho demani.”"
  },
  {
    "day": 213,
    "title": "bromejar-TE",
    "teaName": "Infusió de gràcies amb gresca",
    "benefit": "Puc donar les gràcies sense posar-me solemne.",
    "lesson": "Drama King dona les gràcies com qui llegeix un testament, amb música d’orgue de fons. Avui canviem l’orgue per un kazoo: gratitud sí, però amb la corbata afluixada.",
    "exercise": "Dona les gràcies en veu alta a un objecte quotidià, com si recollissis un Òscar: el coixí, la tetera, les sabatilles. Fes una reverència exagerada i digues en veu baixa: “Gràcies a les meves sabatilles, i una mica a mi per posar-me-les.”"
  },
  {
    "day": 214,
    "title": "desendiosar-TE",
    "teaName": "Infusió d’humilitat amb pètals",
    "benefit": "Agrair no em fa menys: em posa a l’alçada de totes.",
    "lesson": "Queen Zen dona les gràcies com qui reparteix benediccions des d’un balcó. Avui baixem al portal: agrair de debò és mirar als ulls, no des de dalt.",
    "exercise": "Pensa en algú proper i envia-li un gràcies en un missatge curt, sense floritures ni frases de pergamí. Abans d’enviar-lo, digues en veu baixa: “M’assec a la taula de totes i dono les gràcies.”"
  },
  {
    "day": 215,
    "title": "bellugar-TE",
    "teaName": "Infusió de gratitud en moviment",
    "benefit": "El meu cos es mereix unes gràcies amb moviment.",
    "lesson": "Els teus peus t’han portat a tots els llocs de la teva vida i mai no els has fet ni un copet d’ànims. Avui els en fem un, en forma de petit moviment de malucs.",
    "exercise": "Posa una cançó curta i belluga només espatlles i malucs, com si el cos digués gràcies a la seva manera. En acabar, dona’t un copet a la cuixa i digues en veu baixa: “Gràcies, cames, per tots els passos que m’heu portat.”"
  },
  {
    "day": 216,
    "title": "abrigar-TE",
    "teaName": "Infusió de manta i gràcies",
    "benefit": "M’abrigo amb les coses bones que ja tinc.",
    "lesson": "Hi ha coses bones a la teva vida que portes posades sense adonar-te’n, com un jersei còmode. Avui te’l mires sencer i penses: què bé em queda.",
    "exercise": "Posa’t una peça calenta o una manta a les espatlles i repassa tres coses bones d’aquesta setmana, una per cada dit. Respira fons i digues en veu baixa: “M’abrigo amb allò bo que ja és meu.”"
  },
  {
    "day": 217,
    "title": "agermanar-TE",
    "teaName": "Infusió de gràcies a dues veus",
    "benefit": "Puc agrair amb el cor i amb una mica d’humor.",
    "lesson": "Drama King diu: “Ningú no m’agraeix res!”. Queen Zen diu: “Jo agraeixo des d’un pla superior”. Tu ajuntes les dues cadires i tries unes gràcies de mida normal.",
    "exercise": "Estén les dues mans: en una posa el gràcies exagerat i a l’altra el gràcies des dels núvols. Uneix-les a poc a poc fins que es toquin i digues en veu baixa: “Les meves gràcies caben enmig dels dos, i aquí em sento còmoda.”"
  },
  {
    "day": 218,
    "title": "enfocar-TE",
    "teaName": "Infusió de lupa bondadosa",
    "benefit": "Avui enfoco allò que surt bé, encara que sigui petit.",
    "lesson": "La teva atenció és com la càmera del mòbil: enfoca allò que toca. Si sempre apuntes a la taca del fons, la foto sembla un desastre, tot i que al centre hi hagi alguna cosa preciosa.",
    "exercise": "Mira al teu voltant i busca alguna cosa que funcioni bé sense fer soroll: la llum, una cadira, l’aixeta. Assenyala-la amb el dit, entreclou els ulls com una fotògrafa i digues en veu baixa: “Això també està sortint bé.”"
  },
  {
    "day": 219,
    "title": "expandir-TE",
    "teaName": "Infusió d’espai i gràcies",
    "benefit": "Amb cada respiració em faig una mica de lloc.",
    "lesson": "Donar les gràcies obre finestres per dins. Respires i sembla que el sostre del cap pugi un parell de centímetres, just el que cal perquè hi entri llum.",
    "exercise": "Asseguda, obre els braços com si volguessis abraçar una columna enorme i omple el pit d’aire. Aguanta un segon i deixa caure les mans cap a les cuixes mentre dius en veu baixa: “Gràcies per l’espai que em faig.”"
  },
  {
    "day": 220,
    "title": "pessigollejar-TE",
    "teaName": "Infusió de rialla i gratitud",
    "benefit": "Em ric del meu drama i li dono les gràcies per avisar.",
    "lesson": "Drama King és el vigilant del barri: veu perill fins i tot en un núvol. Avui li donem les gràcies pel seu zel i li regalem una armilla de “estic de vacances”.",
    "exercise": "Explica al teu drama, en veu alta, una preocupació d’avui amb veu de locutora de telenotícies. En acabar, aplaudeix suaument i digues en veu baixa: “Gràcies per l’avís, Drama King. Jo me n’encarrego des d’aquí.”"
  },
  {
    "day": 221,
    "title": "rebaixar-TE",
    "teaName": "Infusió de gratitud sense pedestal",
    "benefit": "Dono les gràcies sense esperar aplaudiments per la meva saviesa.",
    "lesson": "Queen Zen agraeix i després espera que algú ho apunti al seu currículum espiritual. Avui rebaixem el nivell: una gratitud sense càmeres val més que mil amb filtre.",
    "exercise": "Fes una cosa petita per algú sense explicar-ho: recull alguna cosa, deixa una nota, aguanta una porta. Somriu per dins i digues en veu baixa: “Gràcies sense foto, sense aplaudiment i sense públic.”"
   },
  {
    "day": 222,
    "title": "trotar-TE",
    "teaName": "Infusió de passets contents",
    "benefit": "Cada pas que faig també mereix unes gràcies.",
    "lesson": "No cal córrer una marató: un trotet de dos passos ja compta. El cos agraeix que el treguis del sofà, encara que sigui per anar a la cuina.",
    "exercise": "Trota al lloc durant deu segons, aixecant bé els genolls, i després sacseja les mans com si se t’haguessin adormit. Recupera l’alè i digues en veu baixa: “Gràcies per moure’m, encara que sigui una mica.”"
  },
  {
    "day": 223,
    "title": "malcriar-TE",
    "teaName": "Infusió de capritx merescut",
    "benefit": "Avui em regalo un detallet només perquè sí.",
    "lesson": "Malcriar-te una mica no és d’egoista: és com regar la planta que sempre cuides per als altres. Avui la planta ets tu i toca aigua fresca.",
    "exercise": "Tria un gustet petit: una galeta, una cançó o cinc minuts de sofà sense fer res. Gaudeix-ne amb calma i digues en veu baixa: “Me’l regalo i m’ho agraeixo, sense explicacions.”"
  },
  {
    "day": 224,
    "title": "reconciliar-TE",
    "teaName": "Infusió de pau entre les meves veus",
    "benefit": "Entre queixar-me de tot i brillar per tot, trio agrair.",
    "lesson": "Drama King agraeix plorant i Queen Zen agraeix levitant. Tu agraeixes asseguda, amb els peus a l’estora i una galeta a la mà. Aquest és el teu punt mitjà.",
    "exercise": "Posa una mà al pit i l’altra a la panxa, i reparteix el pes entre les dues, com una balança. Respira tres vegades i digues en veu baixa: “Ni tragèdia ni núvol: avui agraeixo arran de terra.”"
  },
  {
    "day": 225,
    "title": "albirar-TE",
    "teaName": "Infusió de petits tresors",
    "benefit": "Avui descobreixo alguna cosa bona de mi que se m’havia escapat.",
    "lesson": "Mirar-te és com passejar per la platja amb la vista baixa: entre les pedres sempre hi apunta alguna petxina. Avui no busques un tresor: busques una petxineta teva.",
    "exercise": "Pensa en alguna cosa que vas fer aquesta setmana i que ni recordaves. Dibuixa una estrelleta amb el dit sobre la taula i digues en veu baixa: “Això també ho vaig fer jo, i ho vaig fer bé.”"
  },
  {
    "day": 226,
    "title": "inflar-TE",
    "teaName": "Infusió de globus content",
    "benefit": "Respiro fons i m’omplo de gràcies per dins.",
    "lesson": "Imagina que la teva panxa és un globus d’aniversari. No s’infla a la força: s’omple d’aire amable i puja. Després es desinfla suau, sense cap pum.",
    "exercise": "Posa les mans sobre la panxa i omple-la d’aire pel nas, com qui infla un globus. Deixa anar per la boca, a poc a poc, i digues en veu baixa: “Gràcies, respiració, per no fallar-me mai.”"
  },
  {
    "day": 227,
    "title": "joguinejar-TE",
    "teaName": "Infusió de gratitud entremaliada",
    "benefit": "Agrair també pot ser un joc, i m’agrada.",
    "lesson": "Drama King jura que agrair és cosa seriosa, de vestit i corbata. Però les millors gràcies es diuen amb cara d’aniversari. Juga una mica, que no es trenca.",
    "exercise": "Fes una llista de tres gràcies absurdes: al cafè, al semàfor en verd, al botó de repetir. Llegeix-la amb veu de presentadora de gala i digues en veu baixa: “Gràcies a tot el que és petit i em fa la vida fàcil.”"
  },
  {
    "day": 228,
    "title": "despullar-TE",
    "teaName": "Infusió de gratitud sense túnica",
    "benefit": "Em trec la túnica de sàvia i dono les gràcies en pijama.",
    "lesson": "Queen Zen s’ha posat la túnica d’il·luminada fins i tot per anar a comprar pa. Avui la deixem a la cadira: es pot estar agraïda amb espardenyes, sense solar a llibre.",
    "exercise": "Canvia una peça “seriosa” per una de còmoda, o treu-te les sabates un minut. Nota el terra sota els peus i digues en veu baixa: “Dono les gràcies tal com sóc, amb sabatilles.”"
   },
  {
    "day": 229,
    "title": "taconejar-TE",
    "teaName": "Infusió de gratitud amb compàs",
    "benefit": "El meu cos marca el ritme del gràcies.",
    "lesson": "L’agraïment també es pot ballar a ritme de flamenc casolà. Els teus peus saben molt de gràcies: han aguantat tant que es mereixen una taconada de reconeixement.",
    "exercise": "Taconeja quatre vegades a poc a poc i quatre més de pressa, com si fossin palmes amb els peus. Acaba amb un cop de taló i digues en veu baixa: “Olé per mi, pels meus peus i per tot el que em porten.”"
  },
  {
    "day": 230,
    "title": "amanyagar-TE",
    "teaName": "Infusió de mim ben rebut",
    "benefit": "Em deixo estimar i ho agraeixo sense pressa.",
    "lesson": "De vegades costa rebre una carícia sense pensar com tornar-la. Avui practiques el contrari: te la fan, l’acceptes i dius gràcies. Sense comptes i sense deutes.",
    "exercise": "Dona’t un massatge suau a les mans, amb la crema que tinguis o sense, aturant-te a cada dit. Somriu i digues en veu baixa: “Gràcies, mans, per tot el que feu sense descans.”"
  },
  {
    "day": 231,
    "title": "mediar-TE",
    "teaName": "Infusió de punt mitjà i somriure",
    "benefit": "No cal ser ni la millor ni la pitjor per merèixer gràcies.",
    "lesson": "Drama King diu que no has fet res bé. Queen Zen diu que ho has fet tot perfecte. Tu, que ets de seny, penses: he fet el que he pogut i m’ha sortit força bé.",
    "exercise": "Pensa en alguna cosa que has fet avui. Amb la mà, dibuixa una línia a l’aire: a dalt la perfecció, a baix el desastre. Atura-la al mig i digues en veu baixa: “He fet el que he pogut, i amb  ja n'hi ha prou.",
  },
  {
    "day": 232,
    "title": "rastrejar-TE",
    "teaName": "Infusió d’empremtes de bondat",
    "benefit": "Segueixo les empremtes d’allò bo que ja he fet.",
    "lesson": "Si mires enrere com una detectiva amable, veuràs empremtes: el dia que vas ajudar, el que vas aguantar, el que et vas aixecar un altre cop. Avui segueixes aquest rastre amb curiositat.",
    "exercise": "Recorre amb la mirada l’última setmana i escull un moment en què et vas portar bé amb tu. Marca un punt a l’aire amb el dit i digues en veu baixa: “Aquí hi va haver una bona decisió, i va ser meva.”"
  },
  {
    "day": 233,
    "title": "dilatar-TE",
    "teaName": "Infusió de pulmons agraïts",
    "benefit": "Quan agraeixo, la meva respiració es fa més àmplia.",
    "lesson": "Quan agraeixes, el cos s’acomoda com en un sofà nou. Avui les costelles són les cortines: s’obren amb l’aire i es tanquen sense pressa.",
    "exercise": "Posa les mans a la part baixa de l’esquena i respira cap a elles, notant com s’obre una mica. Compta quatre en entrar i quatre en sortir; després digues en veu baixa: “Gràcies per l’aire que cap als meus pulmons.”"
  },
  {
    "day": 234,
    "title": "esclafir-TE",
    "teaName": "Infusió de rialla agraïda",
    "benefit": "Em ric de mi amb afecte i m’ho agraeixo.",
    "lesson": "Drama King es prepara un discurs d’agraïment de vint minuts amb pausa per plorar. I tu, que saps riure’t, l’escoltes amb crispetes. Riure’t de tu amb afecte també és gratitud.",
    "exercise": "Imagina que et donen un premi per alguna cosa molt tonta, com trobar les claus a la butxaca. Puja a l’escenari amb la teva millor cara i digues en veu baixa: “Vull agrair al meu despiste: sense ell no hi hauria anècdota.”"
  },
  {
    "day": 235,
    "title": "descoronar-TE",
    "teaName": "Infusió de gràcies sense corona",
    "benefit": "Dono les gràcies sense haver de semblar la més zen.",
    "lesson": "Queen Zen té una corona de flors que li cau si respira de pressa. Avui la guardem al calaix: no cal semblar serena per estar agraïda.",
    "exercise": "Fes veure que et treus una corona del cap i la deixes sobre la taula. Respira com respires, sense cuidar la postura, i digues en veu baixa: “Estic agraïda i de vegades despentinada. Les dues coses valen.”"
  },
  {
    "day": 236,
    "title": "pedalar-TE",
    "teaName": "Infusió de gràcies sobre rodes",
    "benefit": "Cada petit impuls que em dono mereix unes gràcies.",
    "lesson": "Pedalar no és arribar lluny: és posar un peu darrere l’altre i confiar que la roda gira. Avui la teva gratitud fa de roda: gira una mica i ja et porta.",
    "exercise": "Estira’t o seu i pedala a l’aire amb les cames uns segons, com si anessis en bici. Quan paris, deixa caure els braços i digues en veu baixa: “Gràcies per cada impuls que em vaig donar.”"
  },
  {
    "day": 237,
    "title": "afalagar-TE",
    "teaName": "Infusió de compliment casolà",
    "benefit": "Em faig un compliment sincer i el rebo amb gust.",
    "lesson": "Si dius alguna cosa bonica a una amiga, ella no te la discuteix. A tu sí que te la discuteixes. Avui te la dius amb la mateixa veu que faries servir amb ella.",
    "exercise": "Pren un glop a poc a poc, pensa en alguna cosa bonica que diries a una amiga i mira’t al reflex de la tassa. Digues en veu baixa: “M’alegra ser jo, i ho dic de debò.”"
  },
  {
    "day": 238,
    "title": "aparellar-TE",
    "teaName": "Infusió de gràcies i humor",
    "benefit": "Puc ser bona persona i riure’m dels meus defectes.",
    "lesson": "Drama King i Queen Zen s’asseuen a berenar. Un agraeix plorant i l’altra sospirant, i tu els serveixes te. Al final, la sobretaula és teva i tries quanta gratitud hi cap.",
    "exercise": "Serveix dues tasses, o imagina que ho fas: una per al teu drama i una altra per a la teva calma. Beu un glop de cadascuna i digues en veu baixa: “Gràcies a les dues, ara em quedo jo amb el comandament.”"
  },
  {
    "day": 239,
    "title": "revisar-TE",
    "teaName": "Infusió d’àlbum de gràcies",
    "benefit": "Aquest mes he après a donar-me les gràcies.",
    "lesson": "Avui fullegem el mes com un àlbum de fotos: el primer somriure, el gràcies maldestre, el dia que te’n vas sortir. Mira tot el què has avançat, encara que no es noti des de dins.",
    "exercise": "Repassa el mes amb els dits, un per cada setmana, i escull unes gràcies que hagis dit o que t’hagis dit. Fes amb la mà el gest de passar pàgina i digues en veu baixa: “Mira tot el què he avançat, i què bé m’ha sentat agrair.”"
  },
  {
    "day": 240,
    "title": "aclamar-TE",
    "teaName": "Infusió d’aplaudiment i floreta",
    "benefit": "Em felicito pel mes i em regalo una floreta.",
    "lesson": "Avui tanquem el mes amb confeti de paper de cuina. Has après a dir gràcies cap a fora i cap a dins. Això se celebra, i també s’apunta: la teva floreta d’avui va al Piropero.",
    "exercise": "Aixeca’t, aplaudeix tres cops i fes una reverència ben gran. Pensa en una floreta per a tu i guarda-la al Piropero de l’app. Després digues en veu baixa: “Ets amable, valenta i força graciosa. Gràcies per existir.”"
  },
  {
    "day": 241,
    "title": "perdonar-TE",
    "teaName": "Infusió de full en blanc",
    "benefit": "Em miro amb ulls d’amiga i em dono una altra oportunitat.",
    "lesson": "Perdonar-te no és dir que res no va importar. És deixar de llegir-te la sentència cada matí. Avui canvies el jutge per una amiga que et mira, t’entén i t’acompanya.",
    "exercise": "Seu còmoda, posa la mà al pit i pensa en alguna cosa que encara et pesa. Mira-la com si fos d’una amiga estimada. Pren un xarrup i digues en veu baixa: “Vaig fer el que vaig poder amb el que sabia aleshores. Avui em dono una altra oportunitat.”"
  },
  {
    "day": 242,
    "title": "descomprimeix-TE",
    "teaName": "Infusió de pit sense forrellat",
    "benefit": "Cada exhalació deixa anar una mica de pes que no és meu.",
    "lesson": "La culpa pesa com una motxilla plena de pedres: continua posada encara que siguis asseguda. Respirar no l’esborra, però afluixa les corretges un parell de forats.",
    "exercise": "Amb les espatlles tensades fins a les orelles, agafa aire pel nas i deixa’l anar per la boca amb un “fuuu” llarg, baixant-les a poc a poc. Repeteix-ho tres cops i digues en veu baixa: “Deixo la motxilla a terra una estona.”"
  },
  {
    "day": 243,
    "title": "xerinolar-TE",
    "teaName": "Infusió de culpa amb barret de pallasso",
    "benefit": "Puc riure’m dels meus entrebancs sense deixar de prendre’m seriosament.",
    "lesson": "Drama King porta un tribunal portàtil: judici, toga i martell. Si al jutge li poses un barret de bufó, la sentència perd solemnitat. I tu recuperes l’aire.",
    "exercise": "Imagina Drama King dictant sentència per una ensopegada, amb perruca de jutge. Dona-li un martell de goma, somriu i pren un xarrup. Digues en veu baixa: “Aquesta causa s’arxiva per manca de dramatisme.”"
  },
  {
    "day": 244,
    "title": "descavalcar-TE",
    "teaName": "Infusió de peus a terra",
    "benefit": "Perdonar no em posa per sobre: em posa al costat.",
    "lesson": "Queen Zen perdona des d’un tro, amb veu de “et comprenc, pobreta”. Això no és perdó: és altura. Avui baixa del cavall blanc i s’asseu a la vorera, com qualsevol.",
    "exercise": "Recorda alguna vegada que vas perdonar amb to de superioritat. Somriu, estira els peus fins a tocar el terra i pren un xarrup a poc a poc. Digues en veu baixa: “Perdono d’igual a igual, sense tro i sense discurs.”"
  },
  {
    "day": 245,
    "title": "saltar-TE",
    "teaName": "Infusió de saltiró sense culpa",
    "benefit": "Un petit salt em recorda que continuo en moviment.",
    "lesson": "La culpa s’enganxa quan et quedes quieta, com el xiclet a la sola. Un saltiró la sacseja una mica. No cal gaire cosa: n’hi ha prou que els peus recordin que s’aixequen.",
    "exercise": "Dreta, doblega els genolls i fes tres saltets suaus, com qui sacseja un abric mullat. Al tercer, deixa caure els braços i deixa anar una exhalació. Digues en veu baixa: “Sacsejo el que no em toca carregar.”"
  },
  {
    "day": 246,
    "title": "gronxar-TE",
    "teaName": "Infusió de cançó de bressol",
    "benefit": "Em tracto amb la dolçor que donaria a una criatura espantada.",
    "lesson": "Quan una criatura s’espanta, no li fas un examen: la bressoles. A la teva culpa li passa igual: necessita menys retret i més braços. Avui et gronxen els teus propis braços.",
    "exercise": "Creua els braços sobre el pit i gronxa’t a poc a poc d’un costat a l’altre, com en una cançó de bressol sense lletra. Mantén el vaivé mig minut i digues en veu baixa: “M’acompanyo amb tendresa, encara que m’hagi equivocat.”"
  },
  {
    "day": 247,
    "title": "dialogar-TE",
    "teaName": "Infusió de taula per a tres",
    "benefit": "Escolto el meu drama i la meva calma, i trio el to.",
    "lesson": "Drama King diu: “Sóc imperdonable.” Queen Zen diu: “Jo ja ho he transcendit tot.” Tu, asseguda al mig, penses: m’he equivocat, em fa mal i ho puc reparar.",
    "exercise": "Posa dos objectes a la taula, un per cada veu. Mou-los a poc a poc fins que quedin junts, amb un espai al mig per a tu. Pren un xarrup i digues en veu baixa: “M’he equivocat, no passa res i continuo endavant.”"
  },
  {
    "day": 248,
    "title": "entreveu-TE",
    "teaName": "Infusió de llum entre escletxes",
    "benefit": "Entre la culpa i jo hi ha una escletxa per on entra llum.",
    "lesson": "De vegades la culpa tapa tota la finestra, com una cortina gruixuda. Avui només busques l’escletxa: aquell racó on es veu que també vas fer coses amb bona intenció.",
    "exercise": "Mira per la finestra, o cap al punt més lluminós d’on siguis, i busca una escletxa de llum. Queda-t’hi quinze segons. Digues en veu baixa: “També hi havia bona intenció en el que vaig fer.”"
  },
  {
    "day": 249,
    "title": "desnuar-TE",
    "teaName": "Infusió de nus que s’afluixa",
    "benefit": "Amb cada aire que deixo anar, un nus s’afluixa una mica.",
    "lesson": "El rancor és un nus de cordons: com més estires, més estreny. Respirar és deixar d’estirar. Ja hi haurà temps de desfer-lo amb paciència, un per un.",
    "exercise": "Tanca els punys amb força, com si agafessis una corda, i aguanta l’aire. En deixar-lo anar, obre els dits un a un. Repeteix-ho dues vegades i digues en veu baixa: “Deixo d’estirar aquest nus. Ja el desfaré amb calma.”"
  },
  {
    "day": 250,
    "title": "parodiar-TE",
    "teaName": "Infusió de culpa en versió musical",
    "benefit": "El meu rancor tindria un musical avorridíssim, i avui no hi ha entrades.",
    "lesson": "Drama King guarda un rancor assajat: té guió, vestuari i fins i tot ovació final. Avui el representes en versió paròdia i descobreixes que el drama perd públic quan es riu.",
    "exercise": "Resumeix un vell rancor en una frase i canta-la amb veu d’òpera, movent els braços com una soprano tràgica. Acaba amb una reverència, pren un xarrup i digues en veu baixa: “Fi de la funció. Gràcies, ja poden marxar.”"
  },
  {
    "day": 251,
    "title": "davallar-TE",
    "teaName": "Infusió d’esglaó a esglaó",
    "benefit": "Baixar del pedestal em deixa més a prop de qui estimo.",
    "lesson": "Queen Zen guarda els seus rancors al pis de dalt de la serenitat i assegura que ja no li pesen. Avui baixem a mirar-los a la llum. Deixar anar de debò comença per admetre que hi eren.",
    "exercise": "Baixa una escala real o imaginària, esglaó a esglaó, comptant tres. En arribar a baix, recolza els peus plans i pren un xarrup. Digues en veu baixa: “Admeto que em va pesar. Ho deixo anar des d’aquí baix, sense disfressa.”"
  },
  {
    "day": 252,
    "title": "gatejar-TE",
    "teaName": "Infusió de genolls i bon humor",
    "benefit": "No cal anar de pressa per anar deixant anar.",
    "lesson": "Una criatura que gateja cau, riu i continua sense demanar perdó al terra. Avui imites aquest pas humil: avançar una mica, sense vergonya i sense discurs.",
    "exercise": "Posa’t a quatre grapes un moment sobre una estora i fes dos passos de gatejada. Si avui no et va bé, balanceja els braços a l’aire. Somriu i digues en veu baixa: “Avanço al meu ritme, i puc ensopegar.”"
  },
  {
    "day": 253,
    "title": "engalanar-TE",
    "teaName": "Infusió d’arracades i calma",
    "benefit": "Avui m’arreglo per mi, sense esperar que ningú ho noti.",
    "lesson": "A vegades et castigues fins i tot amb la roba: la del fons de l’armari, la que no mira ningú. Avui et vesteixes com si et mereixessis una bona tarda. I sí, te la mereixes.",
    "exercise": "Tria un detall bonic per tu: un mocador, un perfum, uns mitjons divertits. Posa-te’l a poc a poc, mira’t al mirall i somriu. Digues en veu baixa: “M’arreglo per mi, perquè avui em tinc en compte.”"
  },
  {
    "day": 254,
    "title": "tantejar-TE",
    "teaName": "Infusió de tanteig amable",
    "benefit": "Puc reparar el que es pugui i deixar anar el que no.",
    "lesson": "Drama King ho vol arreglar tot ara, o trencar-ho tot. Queen Zen diu que res no importa. Tu tantejes: això sí que ho puc arreglar, això no. I del segon, deixes anar el pes.",
    "exercise": "Agafa un full i traça una línia al mig. A un costat escriu alguna cosa que pots reparar; a l’altre, alguna cosa que toca deixar anar. Plega el paper per la línia i digues en veu baixa: “Reparo el que puc i deixo anar el que no.”"
  },
  {
    "day": 255,
    "title": "entreveu-TE",
    "teaName": "Infusió d’una altra versió de la història",
    "benefit": "La meva història té més d’un angle, i em permeto mirar-la des d'un altre.",
    "lesson": "Quan t’enfades, l’escena es roda en primer pla: només es veu el cop. Avui obres el pla una mica, sense treure importància al que va fer mal, i veus la resta de l’escena.",
    "exercise": "Pensa en una discussió passada i recorda-la com una pel·lícula. Allunya la càmera mental i mira tota l’escena, no només el moment que més fa mal. Pren un xarrup i digues en veu baixa: “Veig més coses, i el que va fer mal continua comptant.”"
  },
  {
    "day": 256,
    "title": "deixar-TE",
    "teaName": "Infusió de mans obertes",
    "benefit": "Deixo anar el que no puc canviar i em quedo amb l’aire.",
    "lesson": "Una pedra pesada, si l’agafes amb força, et fa tremolar el braç. Si la deixes anar, no desapareix, però les teves mans tornen a ser teves. Avui respires per obrir els dits.",
    "exercise": "Amb les palmes cap amunt sobre els genolls, inspira i tanca el puny. En deixar anar l’aire, obre la mà a poc a poc, com si deixessis caure una pedra. Repeteix-ho tres cops i digues en veu baixa: “Obro les mans i em quedo amb l’aire.”"
  },
  {
    "day": 257,
    "title": "pitorrejar-TE",
    "teaName": "Infusió de tribunal en pantufles",
    "benefit": "El meu tribunal intern treballa en pijama i sense credibilitat.",
    "lesson": "Drama King obre cada matí el tribunal dels teus errors. Avui li prens el pèl: el jutge adormit, la fiscal amb singlot i la sala plena de mitjons. Amb aquest repartiment, la sentència no se la creu ningú.",
    "exercise": "Imagina el tribunal dels teus errors amb un repartiment absurd: oques de testimonis, una torradora d’advocada. Riu en veu alta una vegada, sense vergonya, i pren un xarrup. Digues en veu baixa: “Aquest tribunal queda dissolt per manca de seriositat.”"
  },
  {
    "day": 258,
    "title": "desentronitzar-TE",
    "teaName": "Infusió de tro plegable",
    "benefit": "Deixar anar un rancor no em fa feble: em fa lliure.",
    "lesson": "Queen Zen guarda el seu rancor en un tro ben enllustrat i l’anomena pau interior. Avui el pleguem com una cadira de platja. Hi cap al maleter, i el que ocupa menys pesa menys.",
    "exercise": "Dibuixa un tro petit en un paper i escriu-hi a sobre la paraula rancor. Plega’l en quatre, guarda’l a la butxaca i pren un xarrup. Digues en veu baixa: “Plego el meu tro i m’assec on s’asseuen totes.”"
  },
  {
    "day": 259,
    "title": "remenar-TE",
    "teaName": "Infusió de cullereta i paciència",
    "benefit": "Un petit remolí m’ajuda a no quedar-me estancada.",
    "lesson": "L’aigua quieta s’enterboleix; l’aigua que es mou s’aclareix. Les teves idees passades funcionen igual. Avui les remenes amb una cullereta de curiositat, sense buscar culpables.",
    "exercise": "Remena la teva infusió en cercles, cinc voltes cap a un costat i cinc cap a l’altre, mirant el remolí. Imagina que cada volta afluixa una idea enganxada. Digues en veu baixa: “Deixo que tot es mogui i es vagi assentant.”"
  },
  {
    "day": 260,
    "title": "convidar-TE",
    "teaName": "Infusió de cadira per a mi",
    "benefit": "M’assec a la meva pròpia taula, encara que no hagi estat perfecta.",
    "lesson": "A vegades et deixes fora de la festa per un error d’abans, amb l’excusa que no t’ho mereixes. Avui t’acostes una cadira i una tassa. No cal que portis disculpes.",
    "exercise": "Prepara un lloc per a tu: un coixí, una manta, la teva tassa preferida. Seu amb calma i pren-te el temps que vulguis. Digues en veu baixa: “Aquí hi ha lloc per a mi, amb els meus errors i amb els meus encerts.”"
  },
  {
    "day": 261,
    "title": "decidir-TE",
    "teaName": "Infusió de balança amb humor",
    "benefit": "Trio què em quedo d’això i què deixo anar.",
    "lesson": "Drama King ho guarda tot en caixes amb etiqueta. Queen Zen ho llança tot per la finestra. Tu obres cada caixa amb calma: això m’ha ensenyat alguna cosa, això ja no em serveix. I fas la mudança al teu ritme.",
    "exercise": "Pensa en un record que et pesa. Fes amb les mans dos munts a l’aire: el del que vas aprendre i el del que ja no et serveix. Empeny el segon lluny i digues en veu baixa: “Em quedo amb el que he après i deixo la resta a la mudança.”"
  },
  {
    "day": 262,
    "title": "reparar-TE",
    "teaName": "Infusió d’arranjament amb paciència",
    "benefit": "Puc reparar sense castigar-me, i al meu ritme.",
    "lesson": "Un gerro trencat, arreglat amb cola daurada, és més bonic, no més culpable. Mirar-te amb ulls de restauradora no tapa les esquerdes: les fa part de la història. Si alguna cosa pesa molt, explica-la a algú de confiança.",
    "exercise": "Mira un objecte que tinguis arreglat o gastat i reconeix-ne les marques. Passa el dit per una, a poc a poc, i pren un xarrup. Digues en veu baixa: “Les marques expliquen el que he viscut, no el que valc.”"
  },
  {
    "day": 263,
    "title": "descordar-TE",
    "teaName": "Infusió de botó descordat",
    "benefit": "El meu pit es pot afluixar una mica, ara mateix.",
    "lesson": "El rancor t’abotona fins al darrer botó, com una camisa de diumenge. Respirar fons és descordar-te el primer. No cal treure’t tot: n’hi ha prou que hi entri una mica d’aire.",
    "exercise": "Imagina un botó al coll de la teva camisa. Agafa aire a poc a poc i, en deixar-lo anar, obre’l amb els dits de debò. Repeteix-ho dues vegades movent les espatlles i digues en veu baixa: “Deixo entrar aire on tot estava estret.”"
  },
  {
    "day": 264,
    "title": "esbojarrar-TE",
    "teaName": "Infusió de culpa amb confeti",
    "benefit": "Em ric de la meva culpa fins que se li cau la disfressa.",
    "lesson": "Drama King porta una disfressa de gran culpable, amb capa i tot. Si li fas pessigolles al coll de la capa, riu i la culpa es queda sense escena. No és mofa: és perspectiva.",
    "exercise": "Dibuixa una mini cara de culpa amb capa en un tovalló. Posa-li un nom ridícul, com Capità Remordiment. Riu amb ganes un segon i digues en veu baixa: “Gràcies, capità, però avui tens el dia lliure.”"
  },
  {
    "day": 265,
    "title": "desencasellar-TE",
    "teaName": "Infusió d’etiqueta despegada",
    "benefit": "No sóc l’etiqueta del meu pitjor dia.",
    "lesson": "Queen Zen et posa l’etiqueta de “ja ho he superat tot” i es queda tan ampla; Drama King, la de “sóc el pitjor”. Cap de les dues és veritat. Avui les desempegues amb cura i mires a sota: allà continues tu.",
    "exercise": "Escriu en una enganxina o en un tros de paper una etiqueta cruel que et vas posar. Desempega-la amb cura, arruga-la i deixa-la a la paperera. Digues en veu baixa: “Sóc més que el meu pitjor dia.”"
  },
  {
    "day": 266,
    "title": "lliscar-TE",
    "teaName": "Infusió de mitjons i lliscada",
    "benefit": "Lliscar em recorda que puc anar lleugera.",
    "lesson": "Amb mitjons sobre el terra llis, el cos aprèn una cosa ràpid: quan deixes d’estrènyer, roda. Avui llisques els peus com si el terra fos al teu favor.",
    "exercise": "Si el terra és llis i hi ha espai, llisca els peus amb mitjons cinc passos endavant i cinc enrere, amb compte. Si no, fes cercles amb les espatlles. Digues en veu baixa: “Vaig més lleugera quan deixo d’estrènyer.”"
  },
  {
    "day": 267,
    "title": "embolcallar-TE",
    "teaName": "Infusió de manta i perdó",
    "benefit": "M’embolcallo de paciència, com en una manta.",
    "lesson": "Perdonar-te no es fa a cop de decisió: es fa com una manta, capa a capa. Avui t’embolcalles amb paciència i deixes que la calor faci la resta, sense presses ni exàmens.",
    "exercise": "Embolica’t amb una manta o un xal i queda’t un minut quieta, amb els peus calents i la tassa entre les mans. Quan notis la calor, digues en veu baixa: “Vaig a poc a poc i vaig ben acompanyada: em tinc a mi.”"
  },
  {
    "day": 268,
    "title": "conviu-TE",
    "teaName": "Infusió de convivència i calma",
    "benefit": "Puc conviure amb el que va passar sense que em governi.",
    "lesson": "Drama King vol que el passat ocupi tot el menjador. Queen Zen vol que no existeixi. Tu li dónes una butaca en un racó: hi és, forma part de la casa, però ja no mana al comandament de la tele.",
    "exercise": "Imagina el teu passat com una visita a casa. Dibuixa amb les mans una butaca en un racó i asseu-l’hi. Pren un xarrup i digues en veu baixa: “El que va passar viu a casa meva, però ja no hi mana.”"
  },
  {
    "day": 269,
    "title": "resseguir-TE",
    "teaName": "Infusió de mapa del camí",
    "benefit": "Miro tot el què he deixat anar aquest mes, i continuo caminant.",
    "lesson": "Avui retrocedeixes pel camí del mes amb un llum amable. Veuràs petjades de ràbia, de culpa i de tendresa. Mira tot el què has avançat: no hi ha pressa per esborrar-les, n’hi ha prou que ja no pesin igual.",
    "exercise": "Resegueix amb el dit sobre la taula el traç del mes, de principi a fi, aturant-te en un moment en què vas deixar anar alguna cosa. Pren un xarrup i digues en veu baixa: “Mira tot el què he avançat, el que m’ha costat i com de bé ho he fet.”"
  },
  {
    "day": 270,
    "title": "vitorejar-TE",
    "teaName": "Infusió d’ovació sense culpa",
    "benefit": "Avui m’aplaudeixo per haver-me perdonat una mica.",
    "lesson": "Avui llancem confeti per haver après a deixar anar. No tot, però alguna cosa. I aquesta cosa ja és lleugeresa. La teva floreta d’avui va al Piropero: te l’has guanyat.",
    "exercise": "Posa’t dreta, aixeca els braços com si creuessis una meta i fes una volta sobre tu mateixa. Pensa en una floret per tu i guarda-la al Piropero de l’app. Després digues en veu baixa: “Ets valenta, cuidadora i molt més lleugera que ahir.”"
  },
  {
    "day": 271,
    "title": "atrevir-TE",
    "teaName": "Infusió de primer pas petit",
    "benefit": "Avui em miro amb valentia: ja he fet més passos dels que compto.",
    "lesson": "La valentia no és un crit de guerra: sol ser un xiuxiueig amb els genolls tremolant. Avui et mires com una exploradora que, sense adonar-se’n, ja porta un bon tros recorregut.",
    "exercise": "Seu i repassa un moment en què vas fer alguna cosa amb por i va sortir bé, encara que fos petit. Pren un xarrup i digues en veu baixa: “Ja he estat valenta abans, i avui també ho puc ser una mica.”"
  },
  {
    "day": 272,
    "title": "acompassar-TE",
    "teaName": "Infusió de pols serè",
    "benefit": "La meva respiració marca el ritme i jo la segueixo amb confiança.",
    "lesson": "Abans d’un canvi, el cor va a la seva, com un timbal sense director. Respirar és posar-li batuta: no l’ordena callar, només li marca un compàs més suau.",
    "exercise": "Amb una mà al pit, compta quatre en agafar aire i sis en deixar-lo anar, com qui segueix un metrònom amable. Repeteix-ho cinc cops i digues en veu baixa: “Vaig al meu ritme i el canvi ve amb mi.”"
  },
  {
    "day": 273,
    "title": "desvariejar-TE",
    "teaName": "Infusió de catàstrofe en miniatura",
    "benefit": "Puc riure’m de les meves pors sense deixar que decideixin per mi.",
    "lesson": "Drama King sent la paraula “canvi” i ja veu la casa ensorrada, el gat a l’exili i tu en un vaixell pirata. Escolta’l, riu i pregunta-li amb calma: i si surt bé?",
    "exercise": "Explica en veu alta el pitjor desenllaç d’un canvi petit, amb veu de tràiler de pel·lícula. Exagera fins que et facis riure. Pren un xarrup i digues en veu baixa: “Gràcies per l’avís, Drama King, però el vaixell pirata el deixem per un altre dia.”"
  },
  {
    "day": 274,
    "title": "desemmascarar-TE",
    "teaName": "Infusió de màscara al penjador",
    "benefit": "Tenir por no em resta: em fa humana, com a totes.",
    "lesson": "Queen Zen jura que ella no té por de res, que ja ho va deixar anar fa anys. Però li tremola una mica la túnica. Avui deixem la màscara al penjador: la valentia de debò comença admetent l’ensurt.",
    "exercise": "Anomena en veu alta una por que acostumes a dissimular, sense adornar-la, només amb el seu nom. Respira i pren un xarrup a poc a poc. Després digues en veu baixa: “Tinc por, i continuo endavant igualment.”"
  },
  {
    "day": 275,
    "title": "avançar-TE",
    "teaName": "Infusió de pas de formiga",
    "benefit": "Un pas petit continua sent un pas.",
    "lesson": "Els canvis grans es fan a passos de formiga: un darrere l’altre, sense foto ni discurs. La formiga no mira tota la muntanya: mira la propera engruna.",
    "exercise": "Tria un petit tràmit que portes temps ajornant i fes ara el primer pas: obrir el document, escriure el missatge, agafar el telèfon. Només un. Digues en veu baixa: “Un pas de formiga, i ja sóc de camí.”"
  },
  {
    "day": 276,
    "title": "reconfortar-TE",
    "teaName": "Infusió d’abraçada abans del salt",
    "benefit": "Em dono ànims amb tendresa abans d’intentar-ho.",
    "lesson": "Abans de llançar-te, la teva valentia necessita una abraçada, no un sermó. Una cosa és empènyer-te i una altra és insultar-te. Avui et parles com a una amiga abans d’un gran dia.",
    "exercise": "Posa’t les mans a les espatlles, com qui anima una amiga, i prem-les amb suavitat. Queda’t així un minut, respirant. Digues en veu baixa: “Sóc amb tu. Passi el que passi, em tens.”"
  },
  {
    "day": 277,
    "title": "sincronitzar-TE",
    "teaName": "Infusió de dues veus en compàs",
    "benefit": "Entre el pànic i la calma, el meu pas és el del mig.",
    "lesson": "Drama King trepitja el fre a fons i Queen Zen l’accelerador, sense mirar el mapa. Tu, al volant, ajustes els pedals: ni cotxe aturat ni coet. Una mica de gas, una mica de cautela.",
    "exercise": "Trepitja el terra amb un peu per frenar i amb l’altre empeny cap endavant, com si portessis dos pedals. Alterna a poc a poc vuit vegades i, en acabar, digues en veu baixa: “Ni fre a fons ni coet: la meva velocitat és aquesta.”"
  },
  {
    "day": 278,
    "title": "atalaiar-TE",
    "teaName": "Infusió de mirador proper",
    "benefit": "Des de dalt, la meva por és més petita del que semblava.",
    "lesson": "La por vista des de dins sembla un gegant. Vista des d’un mirador, amb una mica de distància, és una figura amb megàfon. Avui puges a l’atalaia a mirar-la sense jutjar.",
    "exercise": "Mira per la finestra, o lluny, i pensa en un canvi que et fa respecte. Imagina que el veus des d’un mirador, amb tot el paisatge al voltant. Pren un xarrup i digues en veu baixa: “Des d’aquí el veig més petit, i jo em veig més gran.”"
  },
  {
    "day": 279,
    "title": "insuflar-TE",
    "teaName": "Infusió de veles desplegades",
    "benefit": "Omplo les meves veles d’aire i deixo que em portin una mica.",
    "lesson": "Un veler no lluita contra el vent: l’aprofita. La teva respiració és el vent que tens sempre a mà. Omple les veles, deixa anar les amarres del dubte i mira cap on et porta.",
    "exercise": "Obre els braços com veles i agafa aire a poc a poc, omplint el pit. En deixar-lo anar, uneix les mans al davant, com qui dirigeix un timó. Repeteix-ho tres cops i digues en veu baixa: “L’aire em porta, i jo porto el timó.”"
  },
  {
    "day": 280,
    "title": "bufonejar-TE",
    "teaName": "Infusió d’assaig general amb rialles",
    "benefit": "Si fallo, serà amb gràcia, i hi haurà anècdota.",
    "lesson": "Drama King creu que si alguna cosa surt malament, tot el món ho gravarà i ho projectarà al cinema del barri. Spoiler: gairebé ningú no mira. I qui mira, ho oblida abans d’arribar a casa.",
    "exercise": "Fes una versió ridícula d’allò que et fa por: assaja-ho amb veu d’ànec o amb accent exagerat. Riu-te de tu amb afecte i pren un xarrup. Digues en veu baixa: “Si em surt torçat, serà una bona anècdota.”"
  },
  {
    "day": 281,
    "title": "desenroscar-TE",
    "teaName": "Infusió d’ego amb cargol fluix",
    "benefit": "No necessito semblar segura: n'hi ha prou amb intentar-ho.",
    "lesson": "Queen Zen vol fer el salt amb aura de mestra, però porta l’ego tan estret que ni es pot ajupir. Un parell de voltes de tornavís i baixa a terra: aquí s’aprèn fent.",
    "exercise": "Gira un canell com si afluixessis un cargol, mig minut, i sacseja la mà. Intenta ara una cosa que no se’t dona bé: dibuixar amb l’altra mà, per exemple. Pren un xarrup i digues en veu baixa: “Aprendre incomoda i no passa res.”"
  },
  {
    "day": 282,
    "title": "escalar-TE",
    "teaName": "Infusió d’esglaó extra",
    "benefit": "Un esglaó més cada dia em porta molt lluny.",
    "lesson": "Ningú no puja una muntanya d’una tirada: es puja un esglaó, després un altre. Avui el teu esglaó és petitet i té barana. Quan arribis a dalt, miraràs enrere i et sorprendràs.",
    "exercise": "Puja un tram d’escales, o simula que ho fas aixecant bé els genolls al lloc, amb compte. Quan acabis, nota com et batega el cos i digues en veu baixa: “Cada esglaó compta, també el petit.”"
  },
  {
    "day": 283,
    "title": "animar-TE",
    "teaName": "Infusió de confeti anticipat",
    "benefit": "Em felicito per avançat, sense esperar que surti bé.",
    "lesson": "Acostumem a esperar el final per celebrar, com si l’aplaudiment fos un premi escàs. Avui l’avances una mica: ja t’estàs atrevint, i això es mereix un confetí.",
    "exercise": "Fes un petit ritual d’ànims: copet suau a cada cuixa i un somriure ben gran davant del mirall o del reflex de la tassa. Digues en veu baixa: “Aplaudeixo ara, per atrevir-me, no només per acabar.”"
  },
  {
    "day": 284,
    "title": "acoblar-TE",
    "teaName": "Infusió de peces que encaixen",
    "benefit": "Prudència i valentia caben a la mateixa motxilla.",
    "lesson": "Drama King diu: “Millor que no.” Queen Zen diu: “Tot flueix, no cal fer res.” Tu, que les tens totes dues de companyes de pis, les poses a cuinar juntes: una porta la cautela i l’altra la guspira.",
    "exercise": "Ajunta les puntes dels dits de les dues mans formant un pont. Mou les mans com si encaixessin dues peces. Pren un xarrup i digues en veu baixa: “Demano prudència a l’una i guspira a l’altra, i totes dues m’ajuden.”"
  },
  {
    "day": 285,
    "title": "columbrar-TE",
    "teaName": "Infusió d’horitzó amb boira",
    "benefit": "No cal veure tot el camí per fer el pas següent.",
    "lesson": "Quan condueixes amb boira, no veus el poble, només els metres de davant. I hi arribes. El teu canvi funciona igual: amb la llum d’un pas cada vegada ja en tens prou.",
    "exercise": "Mira un punt proper, com la vora de la taula, i després un de llunyà. Comprova que no cal veure el segon per arribar al primer. Pren un xarrup i digues en veu baixa: “Veig fins aquí, i des d’aquí continuo.”"
  },
  {
    "day": 286,
    "title": "endinsar-TE",
    "teaName": "Infusió d’arrel i respiració",
    "benefit": "Respiro fons i em sento ferma, com un arbre.",
    "lesson": "Un arbre que s’atreveix a créixer comença per fer arrels. Respirar fons és fer arrels en un minut: a baix s’assenten els peus, a dalt s’atreveixen les branques.",
    "exercise": "Dreta, amb els peus separats a l’amplada dels malucs, respira cap a la panxa mentre notes el terra sota les plantes dels peus. Puja els braços com branques en inspirar. Digues en veu baixa: “Faig arrels i des d’aquí m’atreveixo.”"
  },
  {
    "day": 287,
    "title": "gamberrejar-TE",
    "teaName": "Infusió de por amb bigoti postís",
    "benefit": "Si li poso un bigoti postís, la por em fa menys por.",
    "lesson": "Drama King guarda la por en una caixa negra. Però en obrir-la apareix un gatet amb cara d’espant. Avui li posem un bigoti postís i li preguntem què volia. Gairebé sempre, una abraçada.",
    "exercise": "Dibuixa la teva por en un tovalló com un monstret simpàtic i posa-li bigoti o barret. Saluda’l en veu alta, somriu i pren un xarrup. Digues en veu baixa: “Et saludo, poruguet, però avui condueixo jo.”"
  },
  {
    "day": 288,
    "title": "desaprendre-TE",
    "teaName": "Infusió de manual llançat al calaix",
    "benefit": "No cal tenir el manual complert per començar.",
    "lesson": "Queen Zen es va estudiar tots els manuals de la calma i no s’atreveix a provar res fins a dominar-los. Avui els guardem al calaix: s’aprèn a nedar mullant-se, no llegint sobre la piscina.",
    "exercise": "Escriu en un paper què hauries de saber abans de començar i fes-ne una boleta. Llança-la a una paperera propera, amb punteria o sense. Somriu i digues en veu baixa: “Començo sense saber-ho tot, i està bé.”"
  },
  {
    "day": 289,
    "title": "impulsar-TE",
    "teaName": "Infusió de petita empenta",
    "benefit": "De vegades només necessito una empenteta, i me la dono jo.",
    "lesson": "Els trens més llargs arrenquen amb una empenteta. No cal una locomotora: n’hi ha prou amb un “som-hi” ben posat i un gest petit. Avui tu ets la locomotora i l’empenta.",
    "exercise": "Recolza els palmells de les mans a la paret i empeny suaument, notant com treballen braços i esquena. Després fes un pas enrere i un altre endavant. Digues en veu baixa: “M’empenyo amb afecte, i avanço.”"
  },
  {
    "day": 290,
    "title": "gratificar-TE",
    "teaName": "Infusió de premi per intentar-ho",
    "benefit": "Em premio per intentar-ho, no només per aconseguir-ho.",
    "lesson": "Si només et premies quan surt perfecte, el premi arriba tard i gairebé mai. Avui canvies la regla: es premia l’intent. Això és el que de debò et mou a repetir.",
    "exercise": "Tria un premi petit: una galeta, una cançó, un passeig curt. Gaudeix-ne a poc a poc per haver-ho intentat aquesta setmana, sigui com sigui que hagi sortit. Digues en veu baixa: “Això és per haver-me atrevit, no per encertar.”"
  },
  {
    "day": 291,
    "title": "entrellaçar-TE",
    "teaName": "Infusió de dos fils i un nus suau",
    "benefit": "Entrellaço la meva por i les meves ganes, i surten bones trenes.",
    "lesson": "Drama King teixeix el fil de la por. Queen Zen, el de la confiança cega. Tu els trenes: estira d’un cap a l’altre i la trena resisteix millor que cada fil solt.",
    "exercise": "Entrellaça els dits de les dues mans i prem amb fermesa. Deixa anar una mica i torna a prémer, com qui trena dos fils. Pren un xarrup i digues en veu baixa: “Amb por i amb ganes m’atreveixo a anar pel mig.”"
  },
  {
    "day": 292,
    "title": "indagar-TE",
    "teaName": "Infusió de curiositat i llanterna",
    "benefit": "Em pregunto què vol la meva por, sense discutir-hi.",
    "lesson": "La por sol tenir un encàrrec amagat. Si l’interrogues, es posa pesada; si li preguntes amb curiositat què necessita, ho deixa anar de seguida. De vegades només volia que la veiessis.",
    "exercise": "Tria una por petita d’avui i pregunta-li en veu baixa: què necessites? Escolta el que respongui, sense discutir, i pren un xarrup. Digues en veu baixa: “Gràcies per avisar-me. Ara sé què necessito.”"
  },
  {
    "day": 293,
    "title": "refrescar-TE",
    "teaName": "Infusió de brisa al clatell",
    "benefit": "Cada respiració m’aclareix una mica els dubtes.",
    "lesson": "Els dubtes, quan es queden tancats, fan olor d’habitació sense airejar. Una bona respiració obre la finestra del cap: no fa fora ningú, però hi entra brisa.",
    "exercise": "Respira pel nas imaginant una brisa fresca al front i deixa anar per la boca com si entelessis un vidre. Repeteix-ho quatre cops i digues en veu baixa: “M’entra aire fresc i em va bé.”"
  },
  {
    "day": 294,
    "title": "carnavalitzar-TE",
    "teaName": "Infusió de disfressa de valenta de pega",
    "benefit": "Puc posar-me la disfressa de valenta i riure’m mentre ho faig.",
    "lesson": "Drama King es disfressa d’heroi de pel·lícula, amb capa, música èpica i un termo de cafè. Sembla ridícul, però de vegades posar-se la disfressa ajuda: el cos es creu aquest paper abans que el cap.",
    "exercise": "Posa’t una peça divertida o una capa imaginària i camina per l’habitació amb pas d’heroïna dramàtica. Riu-te de tu i pren un xarrup. Digues en veu baixa: “Em poso la disfressa de valenta i em ric, i funciona.”"
  },
  {
    "day": 295,
    "title": "despren-TE",
    "teaName": "Infusió d’aura sense purpurina",
    "benefit": "Puc atrevir-me sense aura ni aplaudiments de ningú.",
    "lesson": "Queen Zen vol que el seu canvi quedi preciós, amb llums i banda sonora. Però els canvis de debò comencen amb espardenyes i sense públic. Avui es desprèn de la purpurina i es queda amb les ganes.",
    "exercise": "Fes alguna cosa nova i petita sense explicar-ho a ningú: canvia el camí de sempre, prova una cançó diferent, escriu una línia. Guarda el secret una estona. Digues en veu baixa: “M’atreveixo sense foto i sense aplaudiment.”"
  },
  {
    "day": 296,
    "title": "arrencar-TE",
    "teaName": "Infusió de motor en marxa",
    "benefit": "No cal estar a punt: n’hi ha prou de posar-me en marxa.",
    "lesson": "Esperar a estar a punt és com esperar que el semàfor de la vida es posi verd per sempre. De vegades s’arrenca amb llum groga i mans suades, i el motor s’escalfa caminant.",
    "exercise": "Posa un temporitzador d’un minut i comença alguna cosa que portes temps ajornant: ordenar un calaix, escriure un paràgraf, fer una trucada breu. Quan soni, para i celebra-ho. Digues en veu baixa: “Ja he arrencat, la resta és continuar.”"
  },
  {
    "day": 297,
    "title": "acompanyar-TE",
    "teaName": "Infusió de companya en el camí",
    "benefit": "M’acompanyo amb afecte en cada petit canvi.",
    "lesson": "No cal ser una heroïna solitària: pots ser la teva pròpia companya de viatge. La que porta l’entrepà, et diu “tu pots” i t’espera si vas més a poc a poc.",
    "exercise": "Imagina que camines amb una amiga que ets tu mateixa. Camina uns passos o seu al seu costat, parlant-li baixet amb afecte. Pren un xarrup i digues en veu baixa: “Vaig amb tu i no et deixo sola.”"
  },
  {
    "day": 298,
    "title": "conjugar-TE",
    "teaName": "Infusió de verb en temps present",
    "benefit": "Avui conjugo el verb atrevir en temps present.",
    "lesson": "Drama King conjuga en passat: “si ho hagués fet”. Queen Zen, en futur llunyà: “algun dia”. Tu et quedes amb el present, que és l’únic temps verbal que es pot fer servir avui.",
    "exercise": "Escriu a l’aire, amb el dit, la paraula AVUI en lletres grosses. Després digues baixet tres verbs en present: respiro, avanço, m’atreveixo. Pren un xarrup i digues en veu baixa: “El que puc fer, ho faig avui, a la meva manera.”"
  },
  {
    "day": 299,
    "title": "inventariar-TE",
    "teaName": "Infusió d’inventari de valentíes",
    "benefit": "Mira tot el què m’he atrevit aquest mes, i no era poc.",
    "lesson": "Avui fas inventari del teu mes com una botiguera de poble: quants passos de formiga, quants ensurts salvats, quants aplaudiments avançats. Mira tot el què has avançat: el prestatge és més ple del que pensaves.",
    "exercise": "Compta amb els dits tres coses petites que t’has atrevit a fer aquest mes i col·loca-les en un prestatge imaginari. Pren un xarrup i digues en veu baixa: “Mira tot el què he avançat, i ha estat pas a pas.”"
  },
  {
    "day": 300,
    "title": "condecorar-TE",
    "teaName": "Infusió de medalla de paper",
    "benefit": "Avui em condecoro per atrevir-me a la meva manera.",
    "lesson": "Avui toca cerimònia: medalla de cartró, discurs curt i confeti de tovalló. Has après a fer passos petits tot i tenir por. La teva floreta d’avui va al Piropero: te l’has guanyat.",
    "exercise": "Retalla o dibuixa una medalla de paper i penja-te-la amb una cinta o amb la imaginació. Pensa en una floreta per tu i guarda-la al Piropero de l’app. Després digues en veu baixa: “Ets valenta, constant i més capaç del que creus.”"
  },
  {
    "day": 301,
    "title": "fixar-TE",
    "teaName": "Infusió de mirada atenta",
    "benefit": "Avui em fixo en les persones que m’envolten i en el que em donen sense adonar-se’n.",
    "lesson": "Al teu voltant hi ha gestos petits que passen desapercebuts: la veïna que aguanta la porta, qui et somriu a la cua, el missatge de sempre. Avui t’hi fixes com qui descobreix una xarxa invisible que ja et sosté.",
    "exercise": "Durant el dia, fixa’t en tres gestos amables d’altres persones, encara que siguin petits, i anota’ls mentalment. Al final pren un xarrup i digues en veu baixa: “Hi ha una xarxa de gestos petits al meu voltant i em sosté.”"
  },
  {
    "day": 302,
    "title": "encomanar-TE",
    "teaName": "Infusió de calma que s’encomana",
    "benefit": "La meva calma s’encomana, i la d’altres persones també m’abraça.",
    "lesson": "Respirar a prop d’una altra persona acaba sincronitzant els ritmes, com dos rellotges que acaben marcant alhora. Avui busques aquesta calma compartida, amb algú a prop o amb la idea d’algú que t’estima.",
    "exercise": "Pensa en una persona amb qui et sents tranquil·la i respira al ritme que imagines que tindria ella: lent i ampli, quatre vegades. Pren un xarrup i digues en veu baixa: “Respiro i la meva calma viatja cap a les persones que estimo.”"
  },
  {
    "day": 303,
    "title": "esclafir-TE",
    "teaName": "Infusió de lament teatral",
    "benefit": "Si Drama King diu que ningú m’entén, li demano que m’ho expliqui amb humor.",
    "lesson": "Drama King jura que ningú a la història ha sentit el que ell sent i que està sol a l’univers. Avui el deixes parlar amb la seva veu de trons i li recordes, amb un somriure, que la cua de gent que se sent igual dona la volta a la illa de cases.",
    "exercise": "Pensa el titular més dramàtic de la teva solitud d’avui (“Última persona incompresa del planeta”) i llegeix-lo amb veu solemne. Quan et facis riure, pren un xarrup i digues en veu baixa: “Altres persones senten el mateix i m’hi puc acostar.”"
  },
  {
    "day": 304,
    "title": "igualar-TE",
    "teaName": "Infusió de taula rodona",
    "benefit": "No hi ha persones més evolucionades que d’altres: n’hi ha de diferents en el seu camí.",
    "lesson": "Queen Zen mira el grup des de dalt i reparteix consells que ningú ha demanat, convençuda que va tres passos per davant. Avui l’asseus a una taula rodona, on ningú queda més alt que ningú i totes s’escolten.",
    "exercise": "Pensa en algú a qui sols donar consells sense que te’ls demani i, en lloc d’aconsellar-lo, imagina que li preguntes: “Com estàs de veritat?”. Pren un xarrup i digues en veu baixa: “Em poso a l’alçada de totes les persones i aprenc d’elles.”"
  },
  {
    "day": 305,
    "title": "acostar-TE",
    "teaName": "Infusió de pas cap a algú",
    "benefit": "Un petit pas cap a una altra persona pot obrir una porta enorme.",
    "lesson": "De vegades la distància no és de quilòmetres, sinó d’un missatge que no enviem. Avui t’acostes una mica: una salutació, una pregunta, una invitació a un cafè, sense discurs i sense gran motiu.",
    "exercise": "Tria una persona a qui vulguis acostar-te i envia-li un missatge curt (“Com estàs?”) o saluda-la en persona. Abans de fer-ho, pren un xarrup i digues en veu baixa: “Faig un passet cap a les persones que m’importen.”"
  },
  {
    "day": 306,
    "title": "deixar-TE",
    "teaName": "Infusió de deixar-se estimar",
    "benefit": "També puc rebre afecte, sense pensar que l’he de tornar ara mateix.",
    "lesson": "A moltes persones ens costa més rebre que donar: un compliment, un favor, una ajuda. Avui practiques el contrari: dir “gràcies” sense excuses ni devolucions immediates i deixar que l’afecte t’arribi.",
    "exercise": "Si algú et diu alguna cosa amable o t’ofereix ajuda avui, respon només “gràcies” i respira perquè entri de debò. Si no passa, recorda un compliment que et van fer. Pren un xarrup i digues en veu baixa: “Em deixo estimar i no ho de tornar ara.”"
  },
  {
    "day": 307,
    "title": "rellevar-TE",
    "teaName": "Infusió de torn compartit",
    "benefit": "Hi ha moments de donar i moments de rebre, i em puc alternar sense culpa.",
    "lesson": "Drama King vol que totes les persones l’escoltin a ell, i Queen Zen vol que totes l’escoltin a ella. En una bona amistat es fan torns: avui parlen una per una i tu reparteixes els torns amb un somriure.",
    "exercise": "En la teva propera conversa, explica alguna cosa teva i després pregunta alguna cosa a l’altra persona; deixa que cadascuna tingui el seu torn. Abans, pren un xarrup i digues en veu baixa: “Dono i rebo al meu torn, i així m’equilibro.”"
  },
  {
    "day": 308,
    "title": "aten-TE",
    "teaName": "Infusió d’escolta amb els ulls",
    "benefit": "Atendre de debò una persona també em fa sentir a prop.",
    "lesson": "Escoltar mirant, sense mòbil ni pressa, és una manera d’abraçar. Avui poses tota la teva atenció en una conversa, encara que sigui de dos minuts, i observes què canvia a l’ambient.",
    "exercise": "En una conversa d’avui, deixa el mòbil a un costat i mira la persona als ulls mentre parla. Quan acabi, pren un xarrup i digues en veu baixa: “Sóc aquí i et dono atenció de debò.”"
  },
  {
    "day": 309,
    "title": "murmurar-TE",
    "teaName": "Infusió de murmuri compartit",
    "benefit": "Un murmuri suau en expirar em recorda que la meva veu també arrecera.",
    "lesson": "Murmurar una nota greu mentre expires vibra al pit i relaxa. És el que fa qui bressola sense adonar-se’n: acompanya i calma, a ella mateixa i a qui té a prop.",
    "exercise": "Inspira pel nas i expira murmurant una “m” llarga i suau, notant la vibració al pit i als llavis, quatre vegades. Pren un xarrup i digues en veu baixa: “La meva veu calma i acompanya.”"
  },
  {
    "day": 310,
    "title": "befar-TE",
    "teaName": "Infusió de lament en grup",
    "benefit": "Puc riure’m amb altres persones de les nostres tragèdies compartides.",
    "lesson": "Quan Drama King es lamenta en solitari, sembla un drama de cinema. Quan es lamenta en companyia, es converteix en una comèdia d’embolics, perquè algú diu “a mi també” i tot s’alleugereix.",
    "exercise": "Explica a algú de confiança una petita desgràcia de la teva setmana com si fos un acudit, i deixa que rigui amb tu. Abans, pren un xarrup i digues en veu baixa: “Riure amb algú em fa sentir menys sola.”"
  },
  {
    "day": 311,
    "title": "despullar-TE",
    "teaName": "Infusió de pose a la perxa",
    "benefit": "Puc deixar la meva pose de persona perfecta i mostrar-me tal com sóc.",
    "lesson": "Queen Zen arriba a les reunions amb el somriure de qui ja ho té tot resolt, i ningú no s’atreveix a explicar-li res de real. Avui es treu la pose, la penja a la perxa i confessa una cosa petita que encara no sap.",
    "exercise": "Explica a algú una cosa en què encara estàs aprenent o en què dubtes, sense embellir-la. Abans, pren un xarrup i digues en veu baixa: “Em mostro tal com sóc, i això acosta les persones.”"
  },
  {
    "day": 312,
    "title": "esten-TE",
    "teaName": "Infusió de mà estesa",
    "benefit": "Puc estendre la mà a algú i també acceptar la que m’estenen.",
    "lesson": "Estendre la mà no necessita grans gestos: una pregunta sincera, oferir ajuda amb alguna cosa petita, preguntar com està algú i esperar la resposta. És moure el cos i el cor alhora.",
    "exercise": "Estén els braços com per abraçar algú, endavant i cap als costats, tres vegades. Després tria un gest d’ajuda petit per a avui. Pren un xarrup i digues en veu baixa: “Estenc la mà i deixo que m’ajudin.”"
  },
  {
    "day": 313,
    "title": "acollir-TE",
    "teaName": "Infusió de casa oberta",
    "benefit": "Puc acollir-me com acolliria una convidada estimada.",
    "lesson": "Quan ve a casa algú estimat, li oferim seient, alguna cosa calenta i temps. Avui t’aculls a tu de la mateixa manera: t’asseus, et prepares alguna cosa càlida i et reps amb la mateixa hospitalitat que donaries a una convidada.",
    "exercise": "Prepara la teva infusió com per a una convidada especial: tassa bonica, lloc còmode i cinc minuts sense pressa. Pren un xarrup i digues en veu baixa: “M’acullo com acolliria algú a qui estimo.”"
  },
  {
    "day": 314,
    "title": "compartir-TE",
    "teaName": "Infusió de taula compartida",
    "benefit": "Compartir m’alleugereix, i escoltar altres persones també m’equilibra.",
    "lesson": "Drama King comparteix massa i de manera teatral; Queen Zen no comparteix res perquè “ella ja ho va transcendir”. Avui busques el punt mitjà: explicar el just, en el moment just, a qui sap escoltar.",
    "exercise": "Tria alguna cosa petita que et pesi i explica-la a una persona de confiança en dues frases, sense dramatisme. Abans, pren un xarrup i digues en veu baixa: “Comparteixo el que sento i deixo que m’ajudin a portar-ho.”"
  },
  {
    "day": 315,
    "title": "apreciar-TE",
    "teaName": "Infusió del que valc",
    "benefit": "Valoro el meu paper a la vida d’altres persones, encara que sigui petit.",
    "lesson": "Mira la xarxa de persones que t’envolten: algú s’alegra quan apareixes, algú compta amb tu, algú et recorda amb afecte. Apreciar-te també és reconèixer el buit que tu omples.",
    "exercise": "Pensa en tres persones a qui importes i en el que els aportes tu, de manera senzilla (el teu riure, la teva escolta, la teva constància). Pren un xarrup i digues en veu baixa: “La meva presència importa a la vida d’altres persones.”"
  },
  {
    "day": 316,
    "title": "cantussejar-TE",
    "teaName": "Infusió de cançó compartida",
    "benefit": "Cantar baixet mentre respiro em connecta amb mi i amb qui també canta.",
    "lesson": "Hi ha cançons que ens uneixen sense conèixer-nos: ens les sabem totes i les cantem igual de malament. Cantussejar-ne una allarga l’expiració i et recorda que formes part d’alguna cosa més gran.",
    "exercise": "Cantusseja una cançó que t’agradi, encara que sigui sense lletra, expirant a poc a poc a cada frase. Pensa en algú que la cantaria amb tu. Pren un xarrup i digues en veu baixa: “Canto baixet i em sento acompanyada.”"
  },
  {
    "day": 317,
    "title": "mofar-TE",
    "teaName": "Infusió d’ofensa teatral",
    "benefit": "Si Drama King s’ofèn, puc preguntar-me si és de debò o de mentida.",
    "lesson": "Drama King s’ofèn per tot: per un missatge sense emoji, per un “ok” sec, per una invitació que no va arribar. Avui li somrius, comproves amb ell que sovint ningú no ha volgut ofendre ningú i tanqueu la funció.",
    "exercise": "Recorda alguna cosa que et va sentar malament d’algú i pregunta’t: “I si no ho va fer amb mala intenció?”. Somriu, pren un xarrup i digues en veu baixa: “Prefereixo preguntar abans que dramatitzar.”"
  },
  {
    "day": 318,
    "title": "aparcar-TE",
    "teaName": "Infusió d’ego en doble fila",
    "benefit": "Puc aparcar el meu ego espiritual i escoltar sense voler ensenyar.",
    "lesson": "Queen Zen deixa el seu ego aparcat en doble fila davant de cada conversa i es posa a donar lliçons. Avui li demanes que el porti a un aparcament, entri sense ell i es limiti a escoltar.",
    "exercise": "En la teva propera conversa no donis cap consell: només escolta i pregunta “i com et sents amb això?”. Abans, pren un xarrup i digues en veu baixa: “Escolto sense ensenyar i aprenc més.”"
  },
  {
    "day": 319,
    "title": "saludar-TE",
    "teaName": "Infusió de bon dia sincer",
    "benefit": "Una salutació sincera pot canviar el dia a algú, i a mi també.",
    "lesson": "Saludar amb ganes, mirant i somrient, és una petita revolució. A la veïna, a qui et cobra al súper, a algú que fa temps que no veus: ningú no s’adona de quant compta fins que ho rep.",
    "exercise": "Saluda avui amb escalf tres persones a qui normalment no saludes, o a qui saludes a corre-cuita, mirant-les als ulls. Abans, pren un xarrup i digues en veu baixa: “La meva salutació és un pont petit.”"
  },
  {
    "day": 320,
    "title": "refugiar-TE",
    "teaName": "Infusió de refugi amb companyia",
    "benefit": "Puc refugiar-me en persones que m’estimen i deixar que em cuidin.",
    "lesson": "Hi ha persones que són com un refugi: no et demanen res, t’escolten, et preparen un te. Avui te’n recordes, en busques la companyia o, si no poden ser-hi, recordes tot el bé que fa saber que hi són.",
    "exercise": "Tria algú que sigui el teu refugi i dedica-li uns minuts: una trucada, un missatge afectuós o una foto compartida. Pren un xarrup i digues en veu baixa: “Em refugio en qui m’estima.”"
  },
  {
    "day": 321,
    "title": "intercanviar-TE",
    "teaName": "Infusió de bescanvi de favors",
    "benefit": "Donar i rebre ajuda em manté en equilibri amb les altres persones.",
    "lesson": "Una comunitat sana és un bescanvi constant: avui et dono un cop de mà, demà me’l dones tu. Drama King es queda sol per no demanar res, i Queen Zen per voler-ho regalar tot. Tu t’alternes.",
    "exercise": "Pensa en alguna cosa en què pots ajudar algú aquesta setmana i en alguna cosa en què t’aniria bé la seva ajuda. Atreveix-te a oferir l’una i a demanar l’altra. Pren un xarrup i digues en veu baixa: “Ofereixo ajuda i també en demano.”"
  },
  {
    "day": 322,
    "title": "endevinar-TE",
    "teaName": "Infusió d’intuïció amable",
    "benefit": "De vegades només cal fixar-se una mica per endevinar què necessita algú.",
    "lesson": "Darrere d’un “estic bé” de vegades hi ha cansament, i darrere d’una broma hi ha ganes de companyia. Avui afines la mirada per endevinar, amb respecte, què necessita la persona que tens al davant, i li ho preguntes.",
    "exercise": "Fixa’t avui en algú proper i pregunta’t què podria necessitar (una estona, una pregunta, un silenci). Ofereix-ho amb delicadesa. Pren un xarrup i digues en veu baixa: “Miro amb afecte i ofereixo el que puc.”"
  },
  {
    "day": 323,
    "title": "relaxar-TE",
    "teaName": "Infusió d’abraçada sense braços",
    "benefit": "Quan em relaxo, les persones que tinc al costat també es relaxen.",
    "lesson": "Els ambients s’encomanen: una persona amb la mandíbula tensa tensa la sala; una persona tranquil·la la suavitza. Avui relaxes el cos respirant a poc a poc i notes com es transforma el que tens al voltant.",
    "exercise": "Deixa anar la mandíbula, les espatlles i les mans, i respira a poc a poc sis vegades abans d’entrar en una conversa o una reunió. Pren un xarrup i digues en veu baixa: “La meva calma és una manera d’acompanyar.”"
  },
  {
    "day": 324,
    "title": "gaudir-TE",
    "teaName": "Infusió d’aplaudiments del drama",
    "benefit": "Puc riure’m del drama sense deixar de demanar companyia quan la necessito.",
    "lesson": "Drama King es regodeja en les seves penes, sobretot si hi ha públic. Avui no el fem callar: li donem un micròfon de mentida, escoltem els seus laments i després li preguntem amb afecte què necessita de debò.",
    "exercise": "Explica la teva queixa més gran d’avui amb to de monòleg teatral, en veu baixa o per a tu. En acabar, pregunta’t: “Què necessito realment?”. Pren un xarrup i digues en veu baixa: “Em ric del drama i demano el que necessito.”"
  },
  {
    "day": 325,
    "title": "desenganxar-TE",
    "teaName": "Infusió de pedestal sense claus",
    "benefit": "Puc desenganxar-me del meu pedestal i pertànyer a un grup.",
    "lesson": "Queen Zen sent que no encaixa en cap grup perquè “ningú no és al seu nivell”. En realitat porta el pedestal enganxat com un abric pesat. Avui se’l treu, s’asseu amb les altres i descobreix que la companyia és una forma de pau.",
    "exercise": "Participa avui en una conversa o activitat de grup sense intentar ser la que més en sap ni la que més brilla. Abans, pren un xarrup i digues en veu baixa: “Pertanyo al grup tal com sóc, sense pedestal.”"
  },
  {
    "day": 326,
    "title": "reunir-TE",
    "teaName": "Infusió de taula amb veïnes",
    "benefit": "Reunir-me amb altres persones és una manera de cuidar-me.",
    "lesson": "Una comunitat comença amb una trobada petita: dues persones i una infusió ja són un cercle. Avui imagines o proposes una trobada senzilla, sense organització ni pretensió, per compartir una estona.",
    "exercise": "Proposa a algú una cita petita (un cafè, una passejada, una videotrucada) per a aquesta setmana, o apunta-la a l’agenda. Abans, pren un xarrup i digues en veu baixa: “Reuneixo la meva gent al voltant d’un te.”"
  },
  {
    "day": 327,
    "title": "obsequiar-TE",
    "teaName": "Infusió de detalls per compartir",
    "benefit": "Puc regalar-me alguna cosa i regalar alguna cosa a algú, i gaudir de les dues coses.",
    "lesson": "Els petits obsequis (una flor, una nota, una llaminadura) alegren qui els rep i qui els dona. Avui t’obsequies a tu, i a més penses en un detall senzill per a algú que t’importa.",
    "exercise": "Prepara un detall petit per a algú (una nota, una foto, una cançó) i un altre per a tu. Pren un xarrup i digues en veu baixa: “Dono i em dono amb alegria.”"
  },
  {
    "day": 328,
    "title": "cooperar-TE",
    "teaName": "Infusió d’equip amb humor",
    "benefit": "En equip, Drama King i Queen Zen aporten més que per separat.",
    "lesson": "Un grup funciona quan hi ha qui dramatitza el just, qui aporta calma i qui fa la llista de tasques. Avui imagines els teus dos personatges en un equip i tu de coordinadora d’un projecte senzill: preparar el te per a totes.",
    "exercise": "Tria una tasca petita que puguis fer amb algú (cuinar, endreçar, organitzar una idea) i proposa-li-ho. Pren un xarrup i digues en veu baixa: “Juntes arribem més lluny i amb més rialles.”"
  },
  {
    "day": 329,
    "title": "evocar-TE",
    "teaName": "Infusió de records compartits",
    "benefit": "Recordar les persones que m’acompanyen aquest any em fa sentir part d’alguna cosa.",
    "lesson": "Aquest mes has mirat els teus vincles i la teva comunitat. Evoca les cares, les veus i els gestos que han estat al teu costat: qui t’ha escoltat? A qui has escoltat tu? Quin llaç vols cuidar més?",
    "exercise": "Recorda tres persones que han estat presents aquest mes, de prop o de lluny, i pensa què els agraeixes. Pren un xarrup i digues en veu baixa: “Sóc part d’una xarxa d’afectes.”"
  },
  {
    "day": 330,
    "title": "felicitar-TE",
    "teaName": "Infusió d’abraçada col·lectiva",
    "benefit": "Em felicito per estendre ponts i per deixar que altres persones arribin a mi.",
    "lesson": "Has acabat el mes dels vincles: felicitats! Avui toca una floreta per la persona que ets amb les altres: la que escolta, la que s’acosta, la que es deixa estimar.",
    "exercise": "Mira’t en un mirall, o en la imaginació, i et dius una floreta sobre com ets amb les persones que estimes. Desa-la al Piropero. Pren un xarrup i digues en veu baixa: “Em felicito per estendre ponts i per deixar que m’arribin.”"
  },
  {
    "day": 331,
    "title": "estimar-TE",
    "teaName": "Infusió de cor obert",
    "benefit": "Avui començo a estimar-me tal com arribo.",
    "lesson": "Estimar-te no és sentir papallones tot el dia: és tractar-te amb la mateixa tendresa amb què tractes qui estimes. Avui comences l’últim mes de l’any mirant-te amb ulls d’amiga.",
    "exercise": "Posa la mà al cor i nota’n el batec durant cinc respiracions. Imagina que saludes la persona que més veuràs en la vida. Pren un xarrup i digues en veu baixa: “M’estimo com sóc i començo avui.”"
  },
  {
    "day": 332,
    "title": "airejar-TE",
    "teaName": "Infusió d’alè propi",
    "benefit": "El meu alè també és una manera de donar-me ànim.",
    "lesson": "L’alè és aire i també ànim, i no és casualitat. Cada vegada que respires, et dius sense paraules: continua, que sóc aquí. Avui ho fas amb ganes.",
    "exercise": "Inspira pel nas i, en deixar anar l’aire, imagina que et dius ànim a cau d’orella. Repeteix sis vegades amb la mà al pit. Pren un xarrup i digues en veu baixa: “El meu aire em dona ànim i jo el rebo.”"
  },
  {
    "day": 333,
    "title": "enamorar-TE",
    "teaName": "Infusió de telenovel·la romàntica",
    "benefit": "Puc enamorar-me de mi mateixa amb drama, humor i afecte.",
    "lesson": "Drama King s’ha enamorat del seu reflex i jura que sense ell la vida és un desert. El deixem sospirar amb música de violins: enamorar-te de tu amb humor no fa mal a ningú.",
    "exercise": "Mira’t en un mirall o al vidre d’una finestra, posa mirada de telenovel·la i digues al teu reflex una frase romàntica exagerada. Riu. Pren un xarrup i digues en veu baixa: “M’enamoro de mi a poc a poc, i amb molt d’humor.”"
  },
  {
    "day": 334,
    "title": "asseu-TE",
    "teaName": "Infusió de coixí a terra",
    "benefit": "Estimar-me no em posa per sobre de ningú: m'asseu al seu costat.",
    "lesson": "Queen Zen estima tant la seva aura que no veu ningú més. Avui la seiem a terra, entre la gent, i descobreix que estimar-se és més còmode quan no cal mirar tothom des d'allà dalt.",
    "exercise": "Seu a terra o a la vora de la cadira, amb les cames com estiguis còmoda. Respira cinc vegades notant que no hi ha cap escala per pujar. Pren un xarrup i digues en veu baixa: “M’estimo arran de terra, a l'alçada de totes.”"
  },
  {
    "day": 335,
    "title": "desfilar-TE",
    "teaName": "Infusió de passarel·la de menjador",
    "benefit": "Camino per casa com qui s’estima de debò.",
    "lesson": "El teu passadís és una passarel·la i tu, la model amb més estil de la comunitat de veïnes. No cal vestit de gala: n’hi ha prou de caminar com qui s’acaba de dir una floreta i se la creu.",
    "exercise": "Desfila per l’habitació amb l’esquena recta, la barbeta suau i un somriure de mig costat. Fes una volta i saluda un públic imaginari. Pren un xarrup i digues en veu baixa: “Camino amb gust, perquè m’agrado.”"
  },
  {
    "day": 336,
    "title": "embellir-TE",
    "teaName": "Infusió de mirall amb llum càlida",
    "benefit": "M’arreglo una mica, no per els demés, sinó per mi mateixa.",
    "lesson": "Embellir-te pot ser tan senzill com posar-te bé el coll de la camisa o portar el teu color preferit. No és vanitat de Drama King ni postureig de Queen Zen: és un detall de tu, per tu.",
    "exercise": "Tria un detall petit que t’agradi de tu avui: els cabells, un objecte, les mans. Dedica-li un minut de cura, sense pressa. Pren un xarrup i digues en veu baixa: “M’arreglo perque vull, i em queda bonic.”"
  },
  {
    "day": 337,
    "title": "teixir-TE",
    "teaName": "Infusió de fils i cabdells",
    "benefit": "Les meves dues veus s’entreteixeixen i fan la meva pròpia tela.",
    "lesson": "Drama King posa el fil negre, Queen Zen el daurat i tu teixeixes amb tots dos. Sense un, el dibuix queda sec; sense l’altre, res no brilla. Estimar-te és acceptar la tela sencera, amb els seus nusos.",
    "exercise": "Mou els dits com si teixissis: un fil fosc, un fil daurat i un altre del teu color. Fes cinc passades lentes. Pren un xarrup i digues en veu baixa: “Teixeixo amb tots els meus fils i la tela sóc jo.”"
  },
  {
    "day": 338,
    "title": "admirar-TE",
    "teaName": "Infusió de mirada de festa",
    "benefit": "Avui admiro una cosa de mi que sol passar-me per alt.",
    "lesson": "Admirem mig món per coses que nosaltres fem cada dia sense adonar-nos: aguantar un mal dia, riure, tornar a començar. Avui et poses a la llista de gent admirable, entre les primeres.",
    "exercise": "Pensa en una cosa que has fet aquest any i que admiraries en una altra persona. Mira-la uns segons i deixa que t’alegri. Pren un xarrup i digues en veu baixa: “Admiro com he arribat fins aquí.”"
  },
  {
    "day": 339,
    "title": "ronronejar-TE",
    "teaName": "Infusió de gat al costat del radiador",
    "benefit": "La meva respiració pot ronronejar de pur gust.",
    "lesson": "Quan un gat està a gust, ronroneja sense adonar-se’n ni demanar permís. La teva respiració també pot sonar a satisfacció: lenta, greu i amb un punt de brunzit. Avui la deixes sonar.",
    "exercise": "Exhala fent un brunzit suau amb la boca tancada, com un gat content, notant el pessigolleig als llavis. Repeteix cinc vegades. Pren un xarrup i digues en veu baixa: “Ronronejo per dins, perquè estic a gust amb mi.”"
  },
  {
    "day": 340,
    "title": "coquetejar-TE",
    "teaName": "Infusió de picada d’ullet i ventall",
    "benefit": "Coquetejar amb mi també és una manera d’estimar-me.",
    "lesson": "Drama King agafa el ventall, entorna els ulls i fa picades d’ullet al seu propi reflex. És ridícul i encantador a parts iguals. Avui l’imitem: una mica de flirteig amb una mateixa aixeca l’ànim.",
    "exercise": "Davant del mirall, fes una picada d’ullet exagerada, un somriure de ventall i un petó a l’aire al teu reflex. Sense vergonya ni públic. Pren un xarrup i digues en veu baixa: “Em pico un ullet i ric de gust.”"
  },
  {
    "day": 341,
    "title": "descafeïnar-TE",
    "teaName": "Infusió sense cafeïna espiritual",
    "benefit": "Puc estimar-me sense tanta intensitat ni tant de mantra.",
    "lesson": "Queen Zen es pren l’amor propi amb triple dosi: afirmacions a l’alba, espelmes al migdia i un diari d’agraïment amb cal·ligrafia. Avui ho passem a descafeïnat: estimar-se pot ser tranquil i sense floritures.",
    "exercise": "Fes com si aboquessis una gran dosi d’intensitat en una tassa i la canviessis per aigua tèbia. Respira amb calma. Pren un xarrup de la teva infusió i digues en veu baixa: “M’estimo en versió suau i sense cafeïna.”"
  },
  {
    "day": 342,
    "title": "xocar-TE",
    "teaName": "Infusió de xoc de mans a l’aire",
    "benefit": "Avui em xoco els cinc per haver arribat fins aquí.",
    "lesson": "Quan una amiga ho aconsegueix, li xoques els cinc sense pensar-hi. Avui et toca a tu: una xocadeta amb tu mateixa per tot el que has fet aquest any, ensopegades incloses.",
    "exercise": "Xoca la mà dreta contra l’esquerra, com un cinc, amb un somriure i un so sec i content. Repeteix tres vegades. Pren un xarrup i digues en veu baixa: “Xoca-la, que ho has fet molt bé.”"
  },
  {
    "day": 343,
    "title": "servir-TE",
    "teaName": "Infusió de safata amb tovalló",
    "benefit": "Em serveixo una cosa bona amb el mateix mim que a una convidada.",
    "lesson": "A les visites els poses la millor tassa, el tovalló bonic i un platet de galetes. Avui la visita ets tu, i l’amfitriona també. Serveix-te alguna cosa bona i seu sense pressa.",
    "exercise": "Prepara la teva infusió o un mos petit i col·loca’l a la teva millor tassa o plat, amb tovalló. Seu a assaborir-ho sense pantalles. Pren un xarrup i digues en veu baixa: “Avui la convidada d’honor sóc jo.”"
  },
  {
    "day": 344,
    "title": "compaginar-TE",
    "teaName": "Infusió de dues veus afinades",
    "benefit": "Puc compaginar el meu drama i la meva calma sense renunciar a cap.",
    "lesson": "Drama King demana que t’estimis amb focs artificials; Queen Zen, amb silenci i coixins. Tu compagines: una mica de festa, una mica de calma i una floreta a mitja tarda.",
    "exercise": "Fes un gest gran amb els braços, de festa, i un altre de petit amb les mans juntes, de calma. Alterna’ls tres vegades i queda’t al mig. Pren un xarrup i digues en veu baixa: “M’estimo amb festa i amb calma.”"
  },
  {
    "day": 345,
    "title": "reflectir-TE",
    "teaName": "Infusió de mirall sense filtres",
    "benefit": "Avui em miro al mirall i em caic bé.",
    "lesson": "El mirall no sap de cares de dilluns ni de pentinats rebels: només et retorna qui ets. Avui li demanes una treva amb la crítica i li deixes fer la seva feina: mostrar-te amb afecte.",
    "exercise": "Mira’t en un mirall un minut, sense corregir res. Troba una cosa que et t'agradi i digues-la en veu alta. Pren un xarrup i digues en veu baixa: “Aquí hi ha algú que em cau molt bé.”"
  },
  {
    "day": 346,
    "title": "bategar-TE",
    "teaName": "Infusió de tambor amb afecte",
    "benefit": "Sento el meu batec i em recorda que sóc aquí.",
    "lesson": "El teu cor fa tota la vida que batega per tu sense demanar ni les gràcies. Avui l’escoltes a través de la respiració, com qui sent la pluja al terrat de casa.",
    "exercise": "Recolza dos dits al canell o una mà al pit i sent el pols. Respira cinc vegades acompanyant el ritme. Pren un xarrup i digues en veu baixa: “Batega per mi, i jo l’escolto amb gratitud.”"
  },
  {
    "day": 347,
    "title": "sanglotar-TE",
    "teaName": "Infusió de llàgrimes de riure",
    "benefit": "Puc plorar d’emoció i de riure alhora.",
    "lesson": "Drama King va sanglotar quan va arribar la primavera i després sanglotarà perquè s’acaba l’any. És el mateix sanglot amb un altre vestuari. Avui l’acompanyem amb mocador i somriure: emocionar-se és de persones vives.",
    "exercise": "Fes un sanglot exagerat, amb singlot i tot, durant deu segons, fins que et surti la rialla. Respira i eixuga’t una llàgrima de mentida. Pren un xarrup i digues en veu baixa: “M’emociono i ric, i les dues coses m'estan bé.”"
  },
  {
    "day": 348,
    "title": "desemmidonar-TE",
    "teaName": "Infusió de coll sense midó",
    "benefit": "Estimar-me no exigeix estar tiesa ni perfecta.",
    "lesson": "Queen Zen s’ha emmidonat tant que no pot ni ajupir-se a recollir una ploma. Avui la desemmidonem amb aigua tèbia i rialles: estimar també és poder doblegar-se, arrugar-se i continuar essent digna.",
    "exercise": "Posa’t rígida com un pal, espatlles i cara incloses, cinc segons. Després deixa anar tot i deixa que el cos s’arrugui a gust. Pren un xarrup i digues en veu baixa: “M’estimo tova i arrugada, i continuo valent.”"
  },
  {
    "day": 349,
    "title": "florir-TE",
    "teaName": "Infusió de pètals que s’obren",
    "benefit": "M’obro com una flor, al meu ritme i sense pressa.",
    "lesson": "Les flors no s’esforcen: s’obren quan hi ha llum i calma. Tu tampoc no t’has de forçar: avui t’obres una mica, amb els braços i amb el pit, cap allò que et fa sentir bé.",
    "exercise": "Ajunta les mans davant del pit com una poncella i obre-les a poc a poc cap amunt, com una flor a trenc d’alba. Repeteix quatre vegades. Pren un xarrup i digues en veu baixa: “M’obro com una flor i sense demanar permís.”"
  },
  {
    "day": 350,
    "title": "aromatitzar-TE",
    "teaName": "Infusió d’espècies i records",
    "benefit": "Em regalo un aroma que em faci sentir estimada.",
    "lesson": "Hi ha olors que abracen: la canyella, el pa torrat, la roba neta. Avui en tries una per tu i la deixes surar al teu voltant, com una flor que s’ensuma.",
    "exercise": "Tria un aroma que t’agradi (la infusió, una fruita, el sabó) i respira’l amb els ulls tancats durant deu respiracions. Pren un xarrup i digues en veu baixa: “Aquesta olor m’abraça, i me la regalo.”"
  },
  {
    "day": 351,
    "title": "fusionar-TE",
    "teaName": "Infusió de dues meitats foses",
    "benefit": "Sóc la barreja del meu costat dramàtic i el meu costat serè.",
    "lesson": "Drama King i Queen Zen no són enemics, són dos ingredients. Fosos, fan una persona completa: amb llàgrima fàcil i amb calma, amb riure escandalós i amb silenci, i amb molta molla.",
    "exercise": "Ajunta els palmells de les mans i fregat-los, com fonent les dues veus en una de sola. Nota l'escalfor entre elles. Respira cinc vegades. Pren un xarrup i digues en veu baixa: “Sóc el meu drama i la meva calma, tot junt.”"
  },
  {
    "day": 352,
    "title": "ullar-TE",
    "teaName": "Infusió d’àlbum de fotos",
    "benefit": "Faig una ullada al meu any i trobo mil motius per estimar-me.",
    "lesson": "Passa pel teu any com per un àlbum de fotos: sense aturar-te a cada pàgina, només mirant de reüll els bons moments, les cares de riure i alguna cara d’espant. Tot això ets tu.",
    "exercise": "Tanca els ulls i fes una ullada mental a cinc moments de l’any, com fotos soltes. Queda’t amb el que més t’agradi. Pren un xarrup i digues en veu baixa: “Aquest any ha tingut molt de mi, i m’agrada.”"
  },
  {
    "day": 353,
    "title": "irradiar-TE",
    "teaName": "Infusió de raig de sol per dins",
    "benefit": "Cada exhalació em deixa una mica més càlida.",
    "lesson": "Quan respires amb afecte, alguna cosa s’escalfa dins i surt cap a fora. Avui ho imagines com una bombeta petita: s’encén al pit i reparteix llum per les espatlles, els braços i les mans.",
    "exercise": "Inspira i sent una llum petita al pit. En exhalar, imagina que es reparteix pels braços i les mans. Repeteix sis vegades. Pren un xarrup i digues en veu baixa: “La meva escalfor surt amb mi i arriba a tot arreu.”"
  },
  {
    "day": 354,
    "title": "declamar-TE",
    "teaName": "Infusió de poesia amb melodrama",
    "benefit": "Puc declamar-me una floreta amb veu de teatre.",
    "lesson": "Drama King puja a una cadira i declama la seva floreta preferida amb una mà al pit i l’altra enlaire. Tothom aplaudeix, encara que el seu públic sigui la nevera. Avui l’imitem: una bona floreta es mereix bona dicció.",
    "exercise": "Puja a una escala imaginària i declama en veu alta, amb aire teatral, una floreta per tu. Fes-ho amb gestos grans. Després riu i respira. Pren un xarrup i digues en veu baixa: “Me la dic en gran i me la crec.”"
  },
  {
    "day": 355,
    "title": "destapar-TE",
    "teaName": "Infusió d’ampolla acabada d’obrir",
    "benefit": "Puc deixar anar el tap i deixar sortir el que sento.",
    "lesson": "Queen Zen guarda les emocions en una ampolla amb tap de mantra, i per això de vegades borbolla. Avui la destapem amb cura: surt una barreja de riure, por i afecte. Tot cap a la mateixa copa.",
    "exercise": "Fes com si destapessis una ampolla amb la mà i deixa anar l’aire amb un pop suau. Repeteix tres vegades, sentint com surt tot el que guardes. Pren un xarrup i digues en veu baixa: “Destapo el que sento, ho deixo sortir i em fa bé.”"
  },
  {
    "day": 356,
    "title": "volar-TE",
    "teaName": "Infusió d’ales de paper",
    "benefit": "Amb un gest petit, em sento lleugera i lliure.",
    "lesson": "Quan t’estimes, el cos pesa menys: les espatlles baixen més, les passes pesen menys i fins i tot les ales de paper troben el seu vent. Avui ho proves amb els braços i amb la imaginació.",
    "exercise": "Obre els braços com ales, inspira i puja de puntetes a poc a poc. Baixa en exhalar. Repeteix sis vegades. Pren un xarrup i digues en veu baixa: “Em sento lleugera quan m’estimo, i volo una mica.”"
  },
  {
    "day": 357,
    "title": "embolcallar-TE",
    "teaName": "Infusió de manta i floreta",
    "benefit": "M’embolcallo d’afecte com amb una manta calentona.",
    "lesson": "Una floreta a temps abriga millor que una manta. Avui te l’embolcalles tu: et poses una manta, o una bufanda, i et llegeixes per dins una llista de les teves coses boniques.",
    "exercise": "Embolcalla’t les espatlles amb una manta o una bufanda i pensa en tres coses boniques de tu. Compta-les amb els dits, a poc a poc. Pren un xarrup i digues en veu baixa: “M’embolcallo d’afecte i em cuido amb molt de mim.”"
  },
  {
    "day": 358,
    "title": "amalgamar-TE",
    "teaName": "Infusió de taula amb tres tasses",
    "benefit": "Entre Drama King i Queen Zen, em quedo amb la meva barreja.",
    "lesson": "Última taula de l’any amb les tres: Drama King porta els tovallons amb llàgrimes, Queen Zen les espelmes i tu el pastís. Amalgames el millor de cadascuna i seus al centre, sense discutir amb ningú.",
    "exercise": "Posa tres tasses en fila: una de Drama King, una de Queen Zen i, al mig, la teva. Brinda amb cadascuna i pren un xarrup de la teva. Digues en veu baixa: “A la meva taula hi cabem les tres, i presideixo amb afecte.”"
  },
  {
    "day": 359,
    "title": "recorrer-TE",
    "teaName": "Infusió de mapa de l’any",
    "benefit": "He recorregut l’any amb més afecte del que pensava.",
    "lesson": "Aquest any has mirat, respirat, escoltat, acceptat, cuidat i posat límits. Has rigut, agraït, perdonat, t’has atrevit i has connectat. Mira tot el què has avançat: ara toca estimar-te amb tot el que has après.",
    "exercise": "Recorre amb els dits dotze passos a l’aire, un per cada mes, i pensa una paraula bonica per a cadascun. Pren un xarrup i digues en veu baixa: “He recorregut l’any i em quedo amb el millor de mi.”"
  },
  {
    "day": 360,
    "title": "coronar-TE",
    "teaName": "Infusió de corona de flors",
    "benefit": "Avui em corono de floretes i celebro el meu any.",
    "lesson": "Final d'un any d’emocions. Ni Drama King ni Queen Zen s’emporten la corona: és de paper i de flors, i és teva. Avui et corones amb una floreta, la més bonica que se't passi pel cap, i ho celebres amb ganes.",
    "exercise": "Fes com si et posessis una corona de flors. Pensa una floreta preciósa per tu i digues-la en veu alta amb un somriure. Guarda-la al Piropero de l’app i pren un xarrup. Digues en veu baixa: “M’estimo, em celebro i em corono.”"
  },
  {
    "day": 361,
    "title": "somiar-TE",
    "teaName": "Infusió de coixí i estrelles",
    "benefit": "Em permeto somiar en gran, sense demanar perdó.",
    "lesson": "Somiar no és escapar-te de la realitat: és dibuixar el mapa de l’any que ve amb llapis i sense goma. Drama King dirà que és impossible i Queen Zen que ja ho tens; tu apuntes el somni igualment.",
    "exercise": "Tanca els ulls i deixa que aparegui un desig per l’any que ve, encara que sigui petit o boig. Dibuixa’l amb el dit a l’aire. Pren un xarrup i digues en veu baixa: “Em permeto somiar, i els meus somnis són benvinguts.”"
  },
  {
    "day": 362,
    "title": "viu-TE",
    "teaName": "Infusió de dia viscut a mossegades",
    "benefit": "Visc aquest dia amb tots els sentits i sense assaig.",
    "lesson": "Aquest any has après a mirar, respirar, escoltar i cuidar-te. Avui ho ajuntes tot i ho estrenes: viure no és un assaig general. Drama King ja ha reservat butaca i Queen Zen, estoreta; tu surts a l’escenari.",
    "exercise": "Tria una cosa senzilla d’avui, com beure, caminar o riure, i fes-la amb tota l’atenció, assaborint-la durant un minut. Pren un xarrup a poc a poc i digues en veu baixa: “Sóc viva i aquest moment és meu.”"
  },
  {
    "day": 363,
    "title": "sentir-TE",
    "teaName": "Infusió d’emoció ben rebuda",
    "benefit": "Sento el que sento i li obro la porta amb afecte.",
    "lesson": "Sentir inclou el què és bonic i el què és incòmode, i aquest any has après a rebre les dues coses sense jutjar-te. Avui deixes que cada emoció passi pel teu menjador i s’assegui una estona al sofà.",
    "exercise": "Nota què sents ara mateix i posa-li nom en veu baixa, sense canviar-ho. Posa una mà al pit i respira tres vegades. Pren un xarrup i digues en veu baixa: “Sento el que sento i m’acompanyo amb afecte.”"
  },
  {
    "day": 364,
    "title": "empoderar-TE",
    "teaName": "Infusió de peus ferms i veu clara",
    "benefit": "Tinc més força de la que pensava i la faig servir amb afecte.",
    "lesson": "Empoderar-te no és cridar més ni mirar totes per sobre, com de vegades fa Queen Zen. És saber què decideixes tu, amb la teva veu i els teus límits, i que ho pots fer amb tendresa.",
    "exercise": "Posa’t dreta, planta bé els peus i obre el pit. Digues en veu alta una cosa que has aconseguit aquest any, sense treure-li importància. Pren un xarrup i digues en veu baixa: “Tinc veu, tinc força i les faig servir amb afecte.”"
  },
  {
    "day": 365,
    "title": "alliberar-TE",
    "teaName": "Infusió de globus que se’n van",
    "benefit": "Deixo anar l’any amb gratitud i em quedo amb el que he après.",
    "lesson": "L'últim dia de l’any d’emocions. Alliberar-te és deixar anar el que ja no necessites, sense barallar-te: les culpes, les presses, algun paper de Drama King i alguna corona de Queen Zen. Et quedes amb el millor de tu.",
    "exercise": "Obre les mans com deixant anar un globus i mira’l pujar amb els ulls. Inspira i deixa anar l’aire a poc a poc. Guarda una floreta per tu al Piropero de l’app i pren un xarrup. Digues en veu baixa: “M’allibero amb afecte i començo de nou.”"
  }
];