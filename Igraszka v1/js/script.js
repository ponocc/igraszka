"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	}
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {

};

// Define the music used in the game.
const music = {

};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {

};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {

};

// Define the backgrounds for each scene.
const scenes = {

};

// Define the Characters
const characters = {
		"s": {
		"Name": "Staś",
		"Color": "#5da9fc"
	},
	"a":
	{
		"Name": "Aśka",
		"Color": "#fc5df6"
	},
	"i":
	{
		"Name": "Ida",
		"Color": "#fffc82"
	},

};

let script = {
	// Prolog - W barze
"Start": [
		"Nazywasz się Ida. Jesteś dwudziestopięcio latką, pracującą w dużej korporacji od momentu ukończenia studiów. Masz 169 cm wzrostu, zielone oczy i naturalne, jasnobrązowe włosy. Jest czwartek. Umówiłaś się ze znajomymi na piwo i planszówki w ulubionym pubie. Niestety większość ekipy się wykruszyła i ostatecznie spotykacie się tylko we trójkę. Oprócz ciebie, przychodzą jeszcze Staś i Asia, są parą. Rezygnujecie z grania w gry i po prostu zamawiacie piwo. Przypadkowo, w trakcie rozmowy, wspominają o swoich planach. Para jedzie pod namiot. Mają już wszystko zaplanowane. Wybrali miejsce na Kaszubach, nad niewielkim jeziorem, otoczonym lasem.",
		{
			"Choice": {
				"Dialog": "Przypadkowo, w trakcie rozmowy z tobą, wspominają o swoich planach.",
				"1": {
					"Text": "Pytasz czy możesz jechać z nimi.",
					"Do": "jump 1"
				},

				"2": {
					"Text": "Pytasz czy jadą sami.",
					"Do": "jump 2"
				},

				"3": {
					"Text": "Fantazjujesz o wspólnym wypadzie, ale ostatecznie zmieniasz temat.",
					"Do": "jump 3"
				},
				"Szybki Wątek Test":{
				"Text": "Szybki Wątek Test",
				"Do": "jump 4A9"
			},
			}
		}
	],

	"1": [
		"s  - No w sumie, jeśli chcesz.",
		"Staś spogląda na Aśkę.",
		"s - A masz swój namiot?",
		"jump Roz1",
	],

	"2": [
		"i - Jedziecie sami?",
 		"s - No. Jakoś nigdy z nikim nie możemy się dogadać na taki wypad.",
 		"s - A co?",
		"jump Roz2",

	],

	"3": [
		"Wyobrażasz sobie, że jest ciepły wieczór po długim, upalnym dniu. Wchodzisz naga do wody i powoli podpływasz do Stasia i Aśki, którzy stoją zanużeni do pasa w wodzie. Oboje są nadzy i bardzo zajęci sobą. Ignorują cię. Z niewyjaśnionych powódw, złości cię to.",
		"wait 2000",
		"Resztę wieczoru rozmawiacie o głupkowatych memach i serialach z Netflixa.",
		"jump fine",
	],
"Roz1":[
		{
			"Choice": {
				"Roz1-1": {
					"Text": " - Mam.",
					"Do":"jump Roz1-1",
				},

				"Roz1-2": {
					"Text": " - Yyy...Nie.",
					"Do":"jump Roz1-2",
				},

				"Roz1-3": {
					"Text": " - Myślałam, że zmieścimy się w jednym.",
					"Do":"jump Roz1-3",
				},
			}
		},
],
			"Roz1-1":
			[
			  "s - No to super. Jedziemy w sobotę, wtedy ma być ładnie i ciepło.",
			  "Chłopak uśmiecha się. Wygląda na lekko podekscytowanego. Asia po chwili też się uśmiecha, widać, że od dawna czeka na dobrą pogodę.",
			  "a - Ciągle jest zimno. Normalnie kurewska epoka lodowcowa.",
			  "jump Roz3",
			],

			"Roz1-2":
			[
				"i - Nie mam namiotu.",
				"s - No to musisz sobie jakiś ogarnąć do soboty. Bo jedziemy w sobotę.",
				"s - Ma być wtedy ładnie i ciepło.",
				"Chłopak uśmiecha się. Asia po chwili też się uśmiecha, widać, że od dawna czeka na dobrą pogodę.",
				"a - Bez przerwy jest zimno. Chcę już lato!",
				"jump Roz3",

			],
			"Roz1-3":
			 [
				"i - Myślałam, że zmieścimy się w jednym.",
 				"Odpowiadasz zalotnie. Ale Staś nie dostrzega dwuznaczności.",
 				"s - Nie no, bez przesady.",
 				"s - U nas jest dość ciasno, z trudnem sami się w nim wysypiamy.",
				"Aśka odzywa się nagle, jej głos wydaje się bardziej oziębły.",
 				"a - Ogarnij sobie jakiś.",
 				"a  - Jedziemy w sobotę.",
				"jump Roz3-2",
			],
			"Roz2":
			[
				{
					"Choice": {
						"Roz2-1": {
							"Text": " - Mogę pojechać z wami?",
							"Do":"jump 1",
						},
						"Roz2-2": {
							"Text": " - A nic. Tak się ciekawię.",
							"Do":"jump Roz2-1",
						},
					}
				},
			],

	"Roz2-1":
		[
				"s - Jedziemy w sobotę, wtedy ma być ładnie i ciepło.",
				"Chłopak uśmiecha się. Asia po chwili też się uśmiecha, widać, że od dawna czeka na dobrą pogodę.",
				"a - Ciągle jest zimno. Normalnie kurewska epoka lodowcowa.",
				"a - Chcesz jechać z nami? Czy masz już jakieś plany?",
				{
					"Choice": {
						"Roz3-1": {
							"Text": " - Niestety mam już plany.",
							"Do":"jump Roz2A",
						},

						"Roz3-2": {
							"Text": " - W sumie... to nie mam. A mogę z wami pojechać?",
							"Do":"jump 1",
						},
					},
				},
			],
"Roz2A":
		[
		"a - Szkoda. Byłoby nam bardzo miło... Gdybyś zechciała spędzić z nami ten czas.",
		"Aśka spogląda na ciebie z uśmiechem.",
		{
			"Choice": {
				"Roz3-1": {
					"Text": " - No trudno.",
					"Do":"jump fine",
				},

				"Roz3-2": {
					"Text": " - Eh, a co mi tam. Plany mogę zmienić.",
					"Do":"jump Roz2B",
				},
			},
		},
	],
"Roz2B":
	[
		"a - Naprawdę? Byłoby ekstra.",
 		"s - Tylko musisz sobie namiot ogarnąć. Masz jakiś?",
		{
			"Choice": {
				"Roz1-1": {
					"Text": " - Mam.",
					"Do":"jump Roz1-1",
				},

				"Roz1-2": {
					"Text": " - Yyy...Nie.",
					"Do":"jump Roz1-2",
				},

				"Roz1-3": {
					"Text": " - Myślałam, że zmieścimy się w jednym.",
					"Do":"jump Roz1-3",
				},
			}
		},
	],
	"Roz3":
	[
									{
										"Choice": {
											"Roz3-1": {
												"Text": " - Mogę cię rozgrzać.",
												"Do":"jump Roz3-1",
											},

											"Roz3-2": {
												"Text": "Nic nie mówisz.",
												"Do":"jump Roz3-2",
											},
										},
									},
],
	"Roz3-1":
				      [
				      "i - Mogę cię rozgrzać.",
				      "Pytasz zalotnie.",
				      "Joasia robi zaskoczoną minę i zaczyna się śmiać.",
				      "a - Dzięki, ale już mnie Stasiek dość rozgrzewa.",
				      "Zaczynacie się śmiać i żartujecie dalej z całej sytuacji, stopniowo rozładowując napięcie.",
				      "wait 2000",
				      "Nadchodzi sobota.",
							"jump Roz4",
						],
	"Roz3-2":
				      [
				      "Nie odzywasz się. Rozmawiacie dalej o różnych pierdołach, a następnie rozchodzicie się do domów.",
				      "Nadchodzi sobota.",
							"jump Roz4",
						],

//Koniec prologu

//Podróż
"Roz4":
[
"Obudziłaś się wcześnie i od razu zauważyłaś, że pogoda bardzo dopisała. Minęło kilkanaście dni. Przez cały ten czas utrzymywałaś kontakt ze Staśkiem i Asią. Oboje wydawali się bardzo podekscytowani wyjazdem. Wysłali ci kilka zdjęć miejsca, które wybrali. Wydawało się ci, że na tej niedużej polanie jest dość miejsca na kilka namiotów i aut. Może nawet będziecie mieli szansę rozpalić ognisko.",
"wait 1000",
"Ogarnęłaś namiot?",
{
	"Choice": {
		"Roz4-1": {
			"Text": "No pewka, kupiłam najtańszy.",
			"Do":"jump Roz4-1",
		},

		"Roz4-2": {
			"Text": "Eee... Namiot? Kurwa mać.",
			"Do":"jump fine",
		},
	},
},
],
"Roz4-1":
[
	"Wydaje ci się, że namiot za niecałe 100PLN nie wytrzyma pierwszej lepszej wichury. Ale lepsze to niż spanie pod gołym niebem. Zaczynasz pakować wszystko do plecaka. Wkrótce dostajesz SMS-a od Aśki. Niebawem powinni być pod twoim domem.",
	{
			"Choice": {
			"Dialog":"Co na siebie założyłaś?",
				"Roz4A": {
				"Text": "Letnią, zwiewną sukienkę do kolan.",
				"Do":"jump Roz4A",
			},
				"Roz4B": {
				"Text": "Koszulka i jeansy.",
				"Do":"jump Roz4B",
			},
				"Roz4C": {
				"Text": "Minispódniczka i obcisły top z dekoltem.",
				"Do":"jump Roz4C",
			},
		},
	},
],

//SUKIENKA
"Roz4A":
[
"Naprawdę lubisz tę sukienkę. Bez chwili wahania zakładasz ją na siebie. Gdy kończysz się ubierać, pod twój dom przybywa auto Staśka. Wrzucasz swoje rzeczy do środka i ładujesz się na tylną kanapę. Przyglądasz się szybko swoim towarzyszom. Stasiek ma na sobie koszulkę i jakieś krótkie spodnie. Asia też ubrała się w sukienkę, sięga jej do połowy łydek, ma szerokie ramiączka i głęboki dekolt. Chyba spodobała im się twoja sukienka, bo oboje ją chwalą.",
"Stasiek ma na sobie koszulkę i jakieś krótkie spodnie. Asia też jest w sukience, sięga jej do połowy łydek i ma szerokie ramiączka z dekoltem.  Oboje chwalą Twoją sukienkę, mówiąc że jest śliczna.",
{
			"Choice": {
				"4A1": {
				"Text": "Podziękuj i pochwal ich ubiór.",
				"Do":"jump 4A1",
			},
				"4A2": {
				"Text": "Podziękuj i spytaj, czy Aśce nie jest za gorąco w tak długiej sukience.",
				"Do":"jump 4A2",
			},
				"4A3": {
				"Text": "Powiedz, że najchętniej zdjęłabyś majtki, bo jest tak gorąco.",
				"Do":"jump 4A3",
			},
		},
	},

],
//ZWYKŁE CIUCHY
"Roz4B":[
	"Nie masz ochoty na kombinowanie z ubiorem. Gdy kończysz się ubierać, pod twój dom przybywa auto Staśka. Wrzucasz swoje rzeczy do środka i ładujesz się na tylną kanapę.",
	"Stasiek ma na sobie koszulkę i jakieś krótkie spodnie. Asia jest w sukience, sięgającej do połowy łydek i ma szerokie ramiączka z dekoltem. Stasiek uśmiecha się do ciebie i stwierdza żartobliwie, że musi ci być gorąco w tych spodniach.",
	{
			"Choice": {
				"4B1": {
				"Text": "Podziękuj i skomplementuj ich ubiór.",
				"Do":"jump 4B1",
			},
		},
	},
],
//WYUZDANE UBRANIE
"Roz4C":[
	"Pomyślałaś, że może powinnaś ich odrobinę sprowokować. Gdy kończysz się ubierać, pod twój dom przybywa auto Staśka. Wrzucasz swoje rzeczy do środka i ładujesz się na tylną kanapę.",
	"Stasiek ma na sobie koszulkę i jakieś krótkie spodnie. Asia jest w sukience, sięgającej do połowy łydek i ma szerokie ramiączka z dekoltem.  Widząc twój ubiór oboje się uśmiechają.",
	"Po chwili Aśka pyta cię czy wygodnie ci w takim stroju.",
	{
			"Choice": {
				"Dialog": "a - Wygodnie ci w takich ciuchach?",
				"4C1": {
				"Text": " - Oczywiście. Lubię obcisłe ciuchy.",
				"Do":"jump 4C1",
			},
				"4C2": {
				"Text": " - Z każdą kolejną minutą coraz bardziej żałuję, że nie założyłam sukienki.",
				"Do":"jump 4C2",
			},
				"4C3": {
				"Text": "Powiedz, że najchętniej zdjęłabyś majtki, bo jest tak gorąco.",
				"Do":"jump 4C3",
			},
		},
	},
],

"4A1":
//Sukienka
	[
	"Oboje uśmiechają się do ciebie. Są czerwoni na twarzy. Pomimo szeroko otwartych okien, w aucie panuje upał. Stasiek mówi, że to przez popsutą klimatyzację. Jego dziewczyna marudzi, bo założyła na siebie strój kąpielowy i jest jej jeszcze bardziej gorąco. Potem dodaje, że nie może doczekać się jeziora i zimnej wody.",
	{
			"Choice": {
				"4A4": {
				"Text": " - O rety, strój! Zapomniałam!",
				"Do":"jump 4A4",
			},
				"4A5": {
				"Text": " - Umrę ze szczęścia jak wskoczę do wody.",
				"Do":"jump 4A5",
			},
		},
	},
],

"4A2":
[
"Asia potakuje, widzisz, że jest czerwona na twarzy. Stasiek mówi, że w aucie popsuła się klimatyzacja i nie zdążył jej naprawić, przez co wszystko w środku się gotuje. Jego dziewczyna marudzi, bo założyła na siebie strój kąpielowy i jest jej jeszcze bardziej gorąco. Potem dodaje, że nie może doczekać się jeziora i zimnej wody.",
{
			"Choice": {
				"4A4": {
				"Text": " - O kurczę, strój! Zapomniałam!",
				"Do":"jump 4A4",
			},
				"4A5": {
				"Text": " - Umrę ze szczęścia jak wskoczę do wody.",
				"Do":"jump 4A5",
			},
				"4A8": {
				"Text": " - Też się nie mogę doczekać, aż pokażesz trochę ciałka.",
				"Do":"jump 4A8",
			},
},
},
],

"4A3":
[
"s - No to zdejmij. Przecież możesz jechać w stroju kąpielowym.",
"s - Aśka, ty też. Jest ze trzydzieści stopni...",
"Spotykasz spojrzenie chłopaka we wstecznym lusterku. Chyba sprawdza jaka będzie Twoja reakcja.",
"a - Ona mówiła o majtkach, Staś. Zostanie w samej bieliźnie wyklucza zdjęcie gaci.",
	{
			"Choice": {
				"4A9": {
				"Text": "Zaśmiej się i po chwili zacznij się rozbierać.",
				"Do":"jump 4A9",
			},
				"4A4": {
				"Text": " - O rety, strój! Zapomniałam.",
				"Do":"jump 4A4",
			},
		},
	},
],

"4A4":
[
"s - No to kąpiesz się na golasa! Za dziesięć minut będziemy na miejscu, więc nie warto zawracać.",
"Aśka wyglada na smutną, zapewne myśli, że nie będziesz chciała pływać. Stasiek dostrzega to i szybko się odzywa.",
"s - Powinniśmy być sami, to jest odizolowane miejsce. Chyba będziesz mogła bez skrępowania zanużyć nóżki.",
	{
			"Choice": {
				"4A6": {
				"Text": " - Myślisz, że się przy tobie rozbiorę?!",
				"Do":"jump 4A6",
			},
				"4A10": {
				"Text": " - Eh... jakbyście i wy zapomnieli stroju, to bym się nie krępowała nago pływać.",
				"Do":"jump 4A10",
			},
				"4A11": {
				"Text": " - Trudno, będę tylko moczyć nóżki.",
				"Do":"jump 4A11",
			},
		},
	},
],

"4A5":
[
"Stasiek i Aśka reagują śmiechem na twoją deklarację.",
"s - Tylko się nie utop.",
"i - No bez przesady, przecież będziecie na miejscu. Chyba mnie uratujecie, prawda?",
"Pytasz żartobliwie, a Aśka zaczyna się śmiać.",
"a - Na niego nie ma co liczyć, bo kiepsko pływa.",
	{
			"Choice": {
				"4A6": {
				"Text": " - To chyba popływamy same.",
				"Do":"jump 4A6",
			},
				"4A7": {
				"Text": " - Ale na ciebie mogę liczyć?",
				"Do":"jump 4A7",
			},
		},
	},

],

"4A6":
[
	"s - No to ja zostanę na brzegu, a wy we dwie pójdziecie popływać gdzieś indziej. Może być?",
	"Chłopak spogląda na Aśkę, jakby wyczekując jakiejś określonej reakcji. Niestety ona postanawia siedzieć cicho, uśmiechając się tylko.",
	"s - Jezioro jest duże.",
	{
			"Choice": {
				"4A12": {
				"Text": " - No jak Aśka będzie chciała iść, to pójdę.",
				"Do":"jump 4A12",
			},
				"4A13": {
				"Text": " - Ale Aśki też się wstydzę! Pódję sama.",
				"Do":"jump 4A13",
			},
		},
	},
],

"4A7":
[
	"a - Oczywiście, kochana.",
	"Odpowiada radośnie i odwraca się w twoją stronę.",
	"a - Idziemy od razu do wody?",
	{
			"Choice": {
				"4A22": {
				"Text": " - Tak!",
				"Do":"jump 4A22",
			},
				"4A23": {
				"Text": " - No nie wiem, może najpierw ogarnę namiot.",
				"Do":"jump 4A23",
			},
		},
	},
],

"4A8":
	[
"s - Hej, a mojego nie chcesz oglądać? - Oburzył się nagle Staś.",
"a - Przestań. Zamierzasz wchodzić do wody? On nie potrafi pływać.",
"Asia powiedziała to z wyczuwalnym śmiechem w głosie, jednocześnie odwracając się w twoją stronę.",
{
		"Choice": {
			"4A14": {
			"Text": " - No to chyba nie popływasz z nami.",
			"Do":"jump 4A14",
		},
			"4A15": {
			"Text": " - Szkoda, miałam wielką ochotę popływać nago.",
			"Do":"jump 4A15",
		},
	},
},
		],
"4A9":
	[
"s - Fajny stanik. - Komentuje Stasiek, gdy zostajesz w samej bieliźnie. Jego partnerka zgadza się z nim. Dostrzegasz delikatny ruch jej dłoni, która przesuwa się po jej rozgrzanej szyi. Chłopak ciągle zerka na ciebie w lusterku.",
{
		"Choice": {
			"4A16": {
			"Text": "Kusisz go, zsuwając jedno z ramiączek stanika.",
			"Do":"jump 4A16",
		},
			"4A17": {
			"Text": "Powiedz, żeby Aśka przesiadła się do tyłu.",
			"Do":"jump 4A17",
		},
	},
},
],

"4A10":
	[
"a - Stasiek ty się chyba nigdy nago nie kąpałeś, co? - Spytała nagle Aśka. - No ale może najpierw mógłbyś się w ogóle nauczyć pływać, to byś miał więcej okazji.",
"s - To że kiepsko pływam, nie znaczy, że będę unikał wody.",
"a - Jasne. Ale Ida pyta, czy przypadkiem nie zapomniałeś stroju.",
"s - No nie, mam go w torbie przecież...",
"Widzisz, że Asia zaczyna się śmiać i kręci głową.",
{
		"Choice": {
			"4A18": {
			"Text": " - Może zgubiłeś go po drodze?",
			"Do":"jump 4A18",
		},
			"4A19": {
			"Text": "  - No to ja pójdę sama z Aś.",
			"Do":"jump 4A19",
		},
	},
},
],
"4A11":
[
"a - A nie chcesz pływać w bieliźnie? - Asia odwraca się w Twoją stronę. - Na słońcu powinna szybko wyschnąć.",
{
		"Choice": {
			"4A20": {
			"Text": " - Nie, bo i tak potem będę musiała latać bez majtek, dopóki nie wyschną.",
			"Do":"jump 4A20",
		},
			"4A19": {
			"Text": " - Szkoda mi ją moczyć, jest za fajna i ładna i w ogóle.",
			"Do":"jump 4A21",
		},
	},
},
],


"4A12":
[
"a	- Yyy... No możemy pójść, mi to nie przeszkadza. A nie chcesz się pływać w bieliźnie? Na słońcu powinna szybko wyschnąć.",
"Asia odwraca się w twoją stronę. Jej twarz jest wilgotna od potu, błyszczy się w słońcu.",
{
		"Choice": {
			"4A20": {
			"Text": " - Nie, bo i tak potem będę musiała latać bez majtek, dopóki nie wyschną.",
			"Do":"jump 4A20",
		},
			"4A19": {
			"Text": " - Szkoda mi ją moczyć, jest za fajna i ładna i w ogóle.",
			"Do":"jump 4A21",
		},
			"4A15":	{
			"Text": " - Liczyłam na to, że wy też się rozbierzecie.",
			"Do":"jump 4A15",
		},
	},
}

],
"4A13":
[
"a - Nie musisz się mnie wstydzić, przestań.",
"Jej głos jest delikatny, brzmi niewinnie. Dziewczyna odwraca się w twoją stronę, ma łagodne spojrzenie i niewymuszony uśmiech. Mimo tego, że jej twarz jest czerwona i błyszycz się od potu, uderza cię jej niezywkły urok.",
"a - To jak, idziemy od razu do wody?",
{
		"Choice": {
			"4A22": {
			"Text": " - No dobrze, dobrze, pójdziemy.",
			"Do":"jump 4A22",
		},
			"4A23": {
			"Text": " - No nie wiem, może najpierw ogarnę namiot.",
			"Do":"jump 4A23",
		},
	},
},
],

"4A14":
[
"s	- To że kiepsko pływam, nie znaczy, że będę unikał wody.",
"a - Jasne. Wypłyniemy z Idą na środek jeziora, a ty zostaniesz przy brzegu.",
"s - No i ciekawe co będziecie tam robić...",
"Widzisz, że Asia zaczyna się śmiać i kręci głową.",
{
		"Choice": {
			"4A24": {
			"Text": " - Będziemy się macać pod wodą. - Zażartuj.",
			"Do":"jump 4A24",
		},
			"4A25": {
			"Text": " - Będziemy się podtapiać! - Zażartuj.",
			"Do":"jump 4A25",
		},
	},
},
],

"4A15":
[
"a - Stasiek ty się chyba nigdy nago nie kąpałeś, co? Choć najpierw musiałbyś się w ogóle nauczyć pływać, to byś miał więcej okazji.",
"s - To że kiepsko pływam, nie znaczy, że będę unikał wody.",
"a - Jasne. Wypłyniemy z Idą na środek jeziora, a ty zostaniesz przy brzegu.",
"s - No i ciekawe co będziecie tam robić...",
"Widzisz, że Asia zaczyna się śmiać i kręci głową.",
{
		"Choice": {
			"4A24": {
			"Text": " - Będziemy się macać pod wodą. - Zażartuj.",
			"Do":"jump 4A24",
		},
			"4A25": {
			"Text": " - Może jak nauczysz się pływać, to pozwolimy ci się przekonać.",
			"Do":"jump 4A26",
		},
	},
},
],

//Szybki wątek


//Stas
"4A16":
[
"Najpierw spada ci lewe ramiączko, potem prawę. Stasiek cały czas zerka do ciebie, zaczyna się też odrobinę wiercić. Aśka nie widzi twych subtelnych ruchów.",
{
		"Choice": {
			"4A28": {
			"Text": "Pokaż więcej.",
			"Do":"jump 4A28",
		},
			"4A29": {
			"Text": "Kusisz go jeszcze bardziej.",
			"Do":"jump 4A29",
		},
	},
},
],
//Asia
"4A17":
[
"i - Przesiądź się do tyłu.",
"Mówisz do Aśki cicho, jednocześnie przesuwając się do przodu, by być bliżej jej fotela. Aśka odwraca się i patrzy na ciebie przez moment. Następnie kiwa z uśmiechem głową i prosi by Stasiek zatrzymał auto. Auto zatrzymuje się na poboczu i po chwili dziewczyna siada obok ciebie na tylniej kanapie. Chłopak nie odzywa się słowem, tylko ciągle zerka w lusterko.",
{
		"Choice": {
			"4A30": {
			"Text": " - No wyskakuj z sukienki.",
			"Do":"jump 4A30",
		},
			"4A31": {
			"Text": " - Pokażesz mi swój strój?",
			"Do":"jump 4A31",
		},
	},
},
],

"4A28":
[
"Przechyl się nieco do przodu, upewniając się, że chłopak widzi jak miseczki stanika powoli odsłaniają twoje cycki. Widzisz, że Staś cały czas się ci przygląda. Palcem wskazującym powoli przesuwasz kilka razy po swoim obojczyku, a następnie schodzisz nim niżej, dotykając sutka. Wciaż jest on zakryty przez twój czarny stanik, ale ekscytacja na twarzy Stasia staje się coraz wyraźniejsza.",
{
		"Choice": {
			"4A28-1": {
			"Text": "Kusisz go dalej.",
			"Do":"jump 4A28-1",
		},
			"4A28-2": {
			"Text": "Zabierasz palec i poprawiasz stanik.",
			"Do":"jump 4A28-2",
		},
	},
},
],

"4A28-1":
[
	"Wkładasz palec wskazujący do ust i ssiesz go przez dłuższy moment. Nastepnie dotykasz nim lewego sutka. Szybko twardnieje pod wpływem delikatnej pieszczoty.",
	{
			"Choice": {
				"4A28-3": {
				"Text": "Przesuń palcem w dół, odsłaniając całą pierś.",
				"Do":"jump 4A28-3",
			},
				"4A28-4": {
				"Text": " - Aśka, rozbierz się. Widzę, że ci gorąco.",
				"Do":"jump 4A28-4",
			},
		},
	},
],

"4A28-2":[
"Od razu spostrzegasz lekki grymas niezadowolenia na twarzy Staśka.",
{
		"Choice": {
			"4A28-5": {
			"Text": " - Oho, chyba ktoś jest niezaspokojony.",
			"Do":"jump 4A28-5",
		},
			"4A28-6": {
			"Text": "Mruginj do niego zalotnie.",
			"Do":"jump 4A28-6",
		},
	},
},
],

"4A28-3":[
"Zsuwasz powoli stanik, aż twoje cycki są całkowicie wyeksponowane. Ściskasz je mocno, oburącz, by po krótkiej chwili subtelnie złapać oba sutki i pobawić się nimi przez chwilę. Przymykasz nawet oczy, czując kolejną falę ciepła kumulującą się poniżej brzucha.",
{
		"Choice": {
			"4A28-7": {
			"Text": "Dotykaj się dalej.",
			"Do":"jump 4A28-7",
		},
			"4A28-8": {
			"Text": "Przerwij pieszczoty.",
			"Do":"jump 4A28-8",
		},
	},
},


],
"4A28-4":[
"i - Aśka, rozbierz się. - Mówisz czule. - Widzę, że ci gorąco.",
"Aśka wciąż nie zauwazyłą, że delikatnie się pieścisz. Lekko zaśmiała się i powoli przeciągnęła ręce.",
"a - Jak dojedziemy, to będę do wieczora paradować bez sukienki, chyba wytrzymam tych kilka minut jeszcze.",
{
		"Choice": {
			"4A28-9": {
			"Text": " - Mogłabyć paradować też bez stanika.",
			"Do":"jump 4A28-9",
		},
			"4A28-10": {
			"Text": " - To chociaż rozbierz Staśka, bo zaraz eksploduje.",
			"Do":"jump 4A28-10",
		},
	},
},
],

"4A28-5":[
"i - Oho, chyba ktoś jest niezaspokojony. - Mówisz złośliwie.",
"Stasiek spogląda na ciebie gwałtownie. Wzrok jego dziewczyny błyskawicznie ląduje na jego kroczu, a następnie wędruje na tylną kanapę.",
"a - A wy co, nie możecie się doczekać?",
{
		"Choice": {
			"4A28-11": {
			"Text": " - Mogę użyć twojego faceta?",
			"Do":"jump 4A28-11",
		},
			"4A28-12": {
			"Text": " - Mam na was ochotę.",
			"Do":"jump 4A28-12",
		},
	},
},
],

"4A28-6":
[
"Chłopak odpowiada na twoje mrugnięcie uśmiechem. Dziesięć minut później docieracie na miejsce. Jest to nieduża polanka, do której prowadzi mało uczęszczana, leśna droga. 'Plaża' to jest po prostu kilka metrów brzegu bez trzciny.",
"a - Znaleźliśmy to miejsce na jakimś forum, wygląda trochę inaczej niż na fotkach. - Odzywa się Aśka, gdy parkujecie. Stasiek wyciąga rzeczy z bagażnika, cały czas się uśmiechając. Następnie wybieracie miejsce na namioty.",
{
		"Choice": {
			"4A28-13": {
			"Text": "Idziesz z Aśką zobaczyć jaka jest woda.",
			"Do":"jump 4A28-13",
		},
			"4A28-14": {
			"Text": "Zostajesz przy aucie i próbujesz rozstawić namiot.",
			"Do":"jump 4A28-14",
		},
	},
},
],

"4A28-7":
[
"Instynktownie przesuwasz prawą dłoń w dół, pod krawędź skąpych majtek. Czujesz pulsujące ciepło i jeszcze bardziej się rozluźniasz. Wiercisz się odrobinę w miejscu, otwierasz szerzej usta i wzdychasz cicho. Po krótkiej chwili przyjemności otwierasz oczy i spoglądasz w lusterko. Staś cały czas ci się przygląda. Nagle Aśka krzyczy.",
"a - Uważaj!",
"Wypadacie z drogi. Auto zatrzymuje się na drzewie. Gaśnie światło.", //KONIEC
"jump fine",
],

"4A28-8":
[
"Asia odwraca się w twoją stronę. Ma surowy wyraz twarzy.",
"a - Dobrze się bawisz?",
"Nadal masz odsłoniety biust. Dziewczyna przygląda ci się uważnie, jakby chciała samym spojrzeniem odkryć i zrozumieć twoje zamiary.",
{
		"Choice": {
			"4A28-15": {
			"Text": " - Wyśmienicie.",
			"Do":"jump 4A28-15",
		},
			"4A28-16": {
			"Text": " - Chętnie pobawiłabym się z tobą.",
			"Do":"jump 4A28-16",
		},
	},
},
],

"4A28-9":[
"i - Mogłabyś paradować bez stanika.",
"a - Daj spokój, nie chcę cię krępować.",
"W tym momencie przesuwasz palcem, chwytasz krawędź stanika i zsuwasz go całkowicie w dół, eksponując biust.",
"i - Ja się was nie krępuję.",
"Mówisz śmiało, lekko chichocząc. Aśka delikatnie odwraca się w twoją stronę i gdy zauważa twoje nagie piersi, natychmiast się płoszy.",
{
		"Choice": {
			"4A28-17": {
			"Text": " - Stasiek popatrzyłby też na twoje cycki. Ja też bym popatrzyła.",
			"Do":"jump 4A28-17",
		},
			"4A28-18": {
			"Text": " - Podobają ci się moje maleństwa?",
			"Do":"jump 4A28-18",
		},
		"4A28-19": {
		"Text": " - Przesiądź się do tyłu.",
		"Do":"jump 4A28-19",
	},
	},
},
],

"4A28-10":
[
"i - To chociaż rozbierz Staśka, bo zaraz eksploduje.",
"Aśka spogląda gwałtownie na swojego chłopaka, dokładnie przyglądając się jego ciału. Na jej twarzy szybko maluje się zdenerwowanie. Następnie szybko odwraca się w twoją stronę. Ma surowy wyraz twarzy.",
"a - Dobrze się bawisz?",
"Wciąż masz nieco odsłoniety biust. Dziewczyna przygląda ci się uważnie, jakby chciała samym spojrzeniem odkryć i zrozumieć twoje zamiary.",
{
		"Choice": {
			"4A28-15": {
			"Text": " - Wyśmienicie.",
			"Do":"jump 4A28-15",
		},
			"4A28-16": {
			"Text": " - Chętnie pobawiłabym się z tobą.",
			"Do":"jump 4A28-16",
		},
	},
},
],
"4A28-11":
[
"i - Miałabyś coś przeciwko, gdybym zechciała użyć... Twojego faceta?",
"a - Pojebało cię?",
{
		"Choice": {
			"4A28-20": {
			"Text": " - Mogłabyś popatrzeć... Albo dołaczyć.",
			"Do":"jump 4A28-20",
		},
			"4A28-21": {
			"Text": "Przeproś.",
			"Do":"jump 4A28-21",
		},
	},
},
],

"4A28-12":
[
"i - Nic na to nie poradzę, że mam na was ochotę.",
"Przez moment wnętrze auta wypełnia jedynie odgłos szumiącego powietrza, wpadającego przez otwarte do maksimum okna. Wreszcie Aśka zabiera głos. Wygląda na to, że jest lekko zirytowana.",
"s - Może... Postaraj się wytrzymać jeszcze tych kilka minut, aż dojedziemy na miejsce...",
"a - I wtedy co? Zamierzacie się bzykać?",
"s - Jezu, nie o to mi chodziło!",
{
		"Choice": {
			"4A28-22": {
			"Text": " - Chcę was oboje. Teraz.",
			"Do":"jump 4A28-22",
		},
			"4A28-23": {
			"Text": " - Spokojnie.",
			"Do":"jump 4A28-23",
		},
	},
},
],


//z aśką nad wodą (topisz ją albo podrywasz)
//wariacja głównego wątku
"4A28-13":
[
"Ciąg dalszy nastąpi. Tu będzie wariacja głównego wątku.",
"end",
],

//Ze Staśkiem przy namiotach
//Wariacja wątku zdrady

"4A28-14":
[
"Ciag dalszy nastąpi. Tu będzie wariacja wątku zdrady  stasiem przy namiotach",
"end",
],

"4A28-15":
[
"i - Wyśmienicie.  - Powiedz i zasłoń cycki ręką.",
"a - Jesteś jakaś pojebana?",
"Pyta cicho, po czym odwraca się z powrotem w kierunku jazdy. Jedziecie przez chwilę w ciszy, po czym Staś nagle zabiera głos.",
"s - Może jest jebnięta, ale ma fajne cycki.",
{
		"Choice": {
			"4A28-24": {
			"Text": " - Dziękuję. Widziałam, że ci się podobają.",
			"Do":"jump 4A28-24",
		},
			"4A28-25": {
			"Text": " - Aśka ma fajniejsze.",
			"Do":"jump 4A28-25",
		},
	},
},
],
"4A28-16":
[
"i - Chętnie pobawiłabym się z tobą.",
"Rzucasz zalotnie, przechylając się do przodu i zbliżając swoją twarz do jej twarzy.",
"a - Zatrzymaj się.",
"Stasiek gwałtownie hamuje i zjeżdża na pobocze. Jesteście w środku lasu.",
"a - Dalej z nią nie jadę. - Mówi opryskliwie Aśka. - Niech wysiada.", //KONIEC
"jump fine",
],


"4A28-17":
[
"Po krótkiej chwili milczenia w napięciu, postanawiasz posunąć się o krok dalej. Spoglądasz we wsteczne lusterko i nawiązujesz kontakt wzrokowy ze Staśkiem.",
"i - Stasiek może patrzeć na twoje cycki codziennie. Ja nigdy nie miała okazji. Wydaje mi się, że oboje chcielibyśmy na ciebie popatrzeć.",
"Aśka wzdycha cicho i zaczyna się delikatnie śmiać.",
"a - Czasami nie wiem, czy on w ogóle chce na mnie patrzeć.",
"i - Ja od zawsze chciałam.",
"s - Nie możesz poczekać tych kilku minut, aż dojedziemy na miejsce?",
	{
			"Choice": {
				"4A28-26": {
				"Text": " - Mogę.",
				"Do":"jump 4A28-26",
			},
				"4A28-23": {
				"Text": " - Nie. Chcę was oboje. Teraz.",
				"Do":"jump 4A28-23",
			},
		},
	},
],

"4A28-18":
[
"i - Podobają ci się moje maleństwa?",
"Ściskasz mocno swoje piersi, jednocześnie składając usta jakby do pocałunku.",
"a - Tak... Tak, masz, um... - Widzisz, że dziewczyna jest lekko zawstydzona.",
"s - Są bardzo zgrabne.",
"a - Nie wiedziałam, że jesteś taka bezwstydna.",
"Rzuca po chwili dziewczyna, odwracając ponownie głowę w twoją stronę. Tym razem zrobiła to śmielej, bardziej zdecydowany sposób, jakby w ciągu tej krótkiej chwili udało jej się opanować początkowe zaskoczenie i skrępowanie.",
	{
			"Choice": {
				"4A28-27": {
				"Text": " - Podobam ci się taka?",
				"Do":"jump 4A28-27",
			},
				"4A28-28": {
				"Text": " - Pokażesz mi swoje?",
				"Do":"jump 4A28-28",
			},
		},
	},
],

4A28-19
[
"i - Aśka... Przesiądź się do tyłu.",
"Mowisz to zaskakująco dominującym tonem, jednocześnie przesuwając się do przodu, by być bliżej jej fotela. Aśka odwraca się i patrzy na ciebie przez moment. Następnie kiwa z uśmiechem głową i prosi by Stasiek zatrzymał auto. Auto zatrzymuje się na poboczu i po chwili dziewczyna siada obok ciebie na tylniej kanapie. Chłopak nie odzywa się słowem, tylko ciągle zerka w lusterko.",
{
		"Choice": {
			"4A28-": {
			"Text": " - No wyskakuj z sukienki.",
			"Do":"jump 4A28-",
		},
			"4A28-": {
			"Text": " - Pokażesz mi swój strój?",
			"Do":"jump 4A28-",
		},
	},
},
],

"4A28-20":
[
"i - Mogłabyś popatrzeć... Albo dołaczyć.",
"a - Chyba śnisz. Stasiek, zatrzymaj się.",
"Stasiek gwałtownie hamuje i zjeżdża na pobocze. Jesteście w środku lasu.",
"a - Dalej z nią nie jadę. - Mówi opryskliwie Aśka. - Niech wysiada.", //KONIEC
"jump fine",
],

"4A28-21":
[
"i - Przepraszam. Poniosło mnie.",
"Natychmiast zmieniasz swoje nastawienie, zasłaniasz swoje ciało sukienką i spuszczasz wzrok.",
"a - Dobrze się czujesz? Co ci strzeliło do głowy, rzucać takie komentarze?",
	{
			"Choice": {
				"4A28- ": {
				"Text": " ",
				"Do":"jump 4A28-",
			},
				"4A28-": {
				"Text": " ",
				"Do":"jump 4A28-",
			},
		},
	},
],

"4A28-22":
[
"i - Chcę was oboje. Teraz.",
"Mówisz to i przez krótki moment w powietrzu wisi ciężkie, nieokreślone napięcie. Wreszcie Aśka odzywa się głośno.",
"a - Stasiek, zatrzymaj się.",
"Stasiek gwałtownie hamuje i zjeżdża na pobocze. Jesteście w środku lasu.",
"a - Dalej z nią nie jadę. - Mówi opryskliwie Aśka. - Niech wysiada.", //KONIEC
"jump fine",
],

4A28-23

"i - Spokojnie, Aśka. "

4A28-24
"i - Dziękuję. Widziałam, że ci się podobają.",
"a - Może się zatrzymamy i się wyruchacie, co?",

4A28-25
"i - Aśka ma fajniejsze.",
"a - Przestań, nie mam. Jesteś zajebiśćie szczupła i w ogóle.",

"4A28-26":
[
	"i - Mogę poczekać.",
"Mówisz spokojnie, z lekkim zawstydzeniem w głosie.",
"a - Ale co wtedy? Na co ona ma czekać?",
"s - Zobaczymy, no chciałbym, żeby się wstrzymała ze wszystkim, aż dotrzemy na miejsce.",
"Dziewczyna spogląda na swojego chłopaka, a potem na ciebie. Ma niepewny, podejrzliwy wzrok.",
"a - Wy coś kombinujecie?",
{
		"Choice": {
			"4A28- ": {
			"Text": " ",
			"Do":"jump 4A28-",
		},
			"4A28-": {
			"Text": " ",
			"Do":"jump 4A28-",
		},
	},
},
],


"4A28-27"
i - Podobam ci się taka? Bezwstydna?

"4A28-28"

i - Pokażesz mi swoje?
Pytasz z uśmiechem.
a - Ale co?
i - No cycki!
Niemal to wykrzykujesz z entuzjazmem. Śmiejąc się, przesuwasz się do przodu i kładziesz delikatnie dłoń na ramieniu Aśki.
a - No może jak dojedziemy na miejsce, to wtedy się poopalam, topless.

1. - Teraz.
2. - Tylko się poopalasz?
3. - No dobra.

"4A28-29"

4A28-30
4A28-31
4A28-32
4A28-33
4A28-34
4A28-35
4A28-36
4A28-37
4A28-38
4A28-39

4A28-40





4A28-










	{
			"Choice": {
				"4A28- ": {
				"Text": " ",
				"Do":"jump 4A28-",
			},
				"4A28-": {
				"Text": " ",
				"Do":"jump 4A28-",
			},
		},
	},




"4A29":[
"Pociągnij palcem stanik nieco w dół, jednocześnie przygryzając wargi. Biustonosz zsuwa się powoli, aż twoje cycki są całkowicie wyeksponowane. Nastepnie nawiązujesz kontakt wzrokowy z kierowcą.",
{
		"Choice": {
			"4A29-1": {
			"Text": "Kusisz go dalej.",
			"Do":"jump 4A29-1",
		},
			"4A29-2": {
			"Text": " - Skup się lepiej na drodze!",
			"Do":"jump 4A29-2",
		},
	},
},
],

"4A29-1":[
"Wkładasz palec wskazujący do ust i ssiesz go przez dłuższy moment, wciaż utrzymując kontakt wzrokowy ze Stasiem. Następnie dotykasz mokrym palcem lewego sutka. Szybko twardnieje pod wpływem delikatnej pieszczoty.",
{
		"Choice": {
			"4A29-3": {
			"Text": "Kusisz go dalej.",
			"Do":"jump 4A29-3",
		},
	},
},

],

"4A29-2":[
"i - Skup się lepiej na drodze! - Mówisz nagle, chichocząc.",
"s - Jestem skupiony.",
"Chłopak odpowiada szybko. Aśka ogląda się do tyłu i robi przesadnie zaskoczoną minę. Nie jesteś pewna czy jest zdenerowana, zmęczona czy rozczarowana.",
"a - Może zjedziemy na bok i zaliczycie sobie szybki numerek co, moi drodzy?",
"Gorycz jej słów brzmi żartobliwie.",
4. - Chętnie na was popatrzę.
5. - Stasiek więcej nie wytrzyma.


],

"4A29-3":
[
"Instynktownie przesuwasz prawą dłoń w dół, pod krawędź skąpych majtek. Czujesz pulsujące ciepło i jeszcze bardziej się rozluźniasz. Wiercisz się odrobinę w miejscu, otwierasz szerzej usta i wzdychasz cicho. Po krótkiej chwili przyjemności otwierasz oczy i spoglądasz w lusterko. Staś cały czas ci się przygląda. Nagle Aśka krzyczy:",
"a - Uważaj!",
"Wypadacie z drogi. Auto zatrzymuje się na drzewie. Gaśnie światło.",
"jump fine", //KONIEC
],

4A29-4
"i - Możemy stanąć, chętnie popatrzę jak się za ciebie bierze.",
4A29-5
"i - Możemy stanąć, Stasiek chyba więcej nie wytrzyma.",
4A29-
4A29-


"4A30":
[
"Aśka zaczyna się śmiać. Patrzy na ciebie przez chwilę badawczo, jakby chciała się upewnić czy tylko żartujesz, czy jesteś poważna. Wreszcie unosi się lekko, rozpina sukienkę i zsuwa ją z siebie.",
{
		"Choice": {
			"4A  ": {
			"Text": " ",
			"Do":"jump 4A  ",
		},
			"4A  ": {
			"Text": " ",
			"Do":"jump 4A  ",
		},
	},
},
Pomóż jej ściągnąć ubranie.

Przyglądaj się z uśmiechem.
],

"4A31":
[
"a - Jest zwyczajny. Czarne bikini.",
"i - Napewno dobrze na tobie leży. Masz takie zgrabne ciało.",
"Asia zaczyna się śmiać i kręci przecząco głową.",

No to pokażesz czy nie?
],








//koniec szybkiego wątku










//Spontaniczna zmiana zeznań

"4A18":
[
"s - Yy... No muszę sprawdzić jeszcze, może rzeczywiście go nie spakowałem.",
"Stasiek jest wyraźnie zakłopotany, co sprawia, że Aśka zaczyna uroczo chichotać.",
"a - Cudowna zmiana zeznań.",
{
		"Choice": {
			"4A32": {
			"Text": " - W takim razie - mam propozycję.",
			"Do":"jump 4A32",
		},
			"4A33": {
			"Text": " - No i co teraz?",
			"Do":"jump 4A33",
		},
	},
},

],

"4A19":
[
"a	- No możemy pójść, mi to nie przeszkadza. A nie chcesz się pływać w bieliźnie? Na słońcu powinna szybko wyschnąć.",
"Aśka odwraca się w twoją stronę i delikatnie uśmiecha.",
{
		"Choice": {
			"4A20": {
			"Text": " - Nie, bo i tak potem będę musiała latać bez majtek, dopóki nie wyschną.",
			"Do":"jump 4A20",
		},
			"4A19": {
			"Text": " - Szkoda mi ją moczyć, jest za fajna i ładna i w ogóle.",
			"Do":"jump 4A21",
		},
	},
},
],
"4A20":
[
"s	- No spoko, jak chcesz. Zaraz będziemy.",
"Po chwili docieracie na miejsce. Jest to nieduża polanka, do której prowadzi mało uczęszczana, leśna droga. 'Plaża' to jest po prostu kilka metrów brzegu bez trzciny.",
"a - Znaleźliśmy to miejsce na jakimś forum, wygląda trochę inaczej niż na fotkach.",
"Parkujecie w cieniu, Stasiek wyciąga rzeczy z bagażnika i wybieracie miejsce na namioty. Aśka spogląda na ciebie życzliwie i pokazuje palcem jezioro.",
 {
 		"Choice": {
 			"4A34": {
 			"Text": "Idziesz z Aśką zobaczyć jaka jest woda.",
 			"Do":"jump 4A34",
 		},
 			"4A35": {
 			"Text": "Zostajesz przy aucie i próbujesz rozstawić namiot.",
 			"Do":"jump 4A35",
 		},
 	},
 },
],

"4A21":
[
"s	- No to ja zostanę na brzegu, a wy we dwie pójdziecie popływać gdzieś indziej. Może być?",
"Stasiek spogląda na swoją dziewczynę. Ona się tylko uśmiecha i siedzi cicho.",
"s - Jezioro jest duże, można w nim pływać na golasa.",
"a - A ty będziesz siedział i patrzył?",
"s - Namiot rozstawię...",
{
		"Choice": {
			"4A27": {
			"Text": "W porządku, poradzę sobie.",
			"Do":"jump 4A27",
		},
	},
},
],

"4A22":
[
"Aśka reaguje bardzo radośnie, niemal podskakuje w miejscu. Po kilku dłuższych chwilach docieracie na miejsce. Jest to nieduża polanka, do której prowadzi mało uczęszczana, leśna droga. 'Plaża' to jest po prostu kilka metrów brzegu bez trzciny.",
"a - Znaleźliśmy to miejsce na jakimś forum, wygląda trochę inaczej niż na fotkach.",
"s - Nie jest tak źle.",
"a - No tak, zawsze mogło być mniej drzew i piasku.",
"Parkujecie w cieniu, Stasiek wyciąga rzeczy z bagażnika i wybieracie miejsce na namioty. Aśka spogląda na ciebie życzliwie i pokazuje palcem jezioro.",
{
	 "Choice": {
		 "4A34": {
		 "Text": "Idziesz z Aśką zobaczyć jaka jest woda.",
		 "Do":"jump 4A34",
 },
},
},
],

"4A23":
[
"a - Oj, okej, no dobrze.",
"Dziewczyna wygląda na zawiedzioną, uchodzi z niej cała ekscytacja.",
"Resztę drogi pokonujecie w milczeniu, towarzyszy wam jedynie świst powietrza wpadającego przez opuszczone szyby. Po chwili docieracie na miejsce. Jest to nieduża polanka, do której prowadzi mało uczęszczana, leśna droga. 'Plaża' to jest po prostu kilka metrów brzegu bez trzciny.",
"a - Znaleźliśmy to miejsce na jakimś forum, wygląda trochę inaczej niż na fotkach.",
"s - Nie jest tak źle.",
"a - No tak, zawsze mogło być mniej drzew i piasku.",
"Parkujecie w cieniu, Stasiek wyciąga rzeczy z bagażnika i wybieracie miejsce na namioty.",
{
	 "Choice": {
		 "4A34": {
		 "Text": "Jednak idziesz z Aśką zobaczyć jaka jest woda.",
		 "Do":"jump 4A36",
	 },
		 "4A35": {
		 "Text": "Próbujesz rozstawić namiot.",
		 "Do":"jump 4A35",
	 },
 },
},
],

/*

"4A24":
Macać pod wodą. Żart.
Asia szybko dostrzega twój żart i od razu go podłapuje.
a - O tak, nie mogę się doczekać kiedy wyściskam te cycuszki.
Dziewczyna odwraca się do ciebie i uśmiecha, wystawiająć żartobliwie język. Odwazjemniasz uśmiech.

1. Złap się za piersi i spytaj czy naprawdę jej się podobają.
2. Przygryź wargę i popraw włosy.

//wątek morderstwa

"4A25":
Będziemy się podtapiać. Żart nietrafiony.
Śmiech ustaje. Twoi przyjaciele nagle przestają się odzywać. Czujesz niesmak w powietrzu.

1. Docieracie na miejsce w milczeniu.

"4A26":
  - Może jak nauczysz się pływać, to pozwolimy ci się przekonać.
 Mówisz to radośnie, a Asia zaczyna się głośno śmiać.
 - No może takiej motywacji potrzebujesz, co?
 - To w ogóle nie jest śmieszne.
 - Oczywiście że jest.
 Mówicie to niemal jednocześnie, co powoduje kolejny wybuch śmiechu. Nawet Stasiek się uśmiecha.

1. - Ja cię chętnie zmotywuję. (Nitka nie trafiona.)
2.  - Chyba nie masz wyjścia i musisz wejść z nami do wody. (Nikta 'we troje w wodzie')
*/
 //Wstydliwe rozwiązanie

"4A27":
[
"Resztę drogi pokonujecie w milczeniu, towarzyszy wam jedynie świst powietrza wpadającego przez opuszczone szyby. Po chwili docieracie na miejsce. Jest to nieduża polanka, do której prowadzi mało uczęszczana, leśna droga. 'Plaża' to jest po prostu kilka metrów brzegu bez trzciny.",
"a - Znaleźliśmy to miejsce na jakimś forum, wygląda trochę inaczej niż na fotkach.",
"Parkujecie w cieniu, Stasiek wyciąga rzeczy z bagażnika i wybieracie miejsce na namioty. Aśka spogląda na ciebie życzliwie i pokazuje palcem jezioro.",
{
	 "Choice": {
		 "4A34": {
		 "Text": "Idziesz z Aśką zobaczyć jaka jest woda.",
		 "Do":"jump 4A34",
	 },
		 "4A35": {
		 "Text": "Zostajesz przy aucie i próbujesz rozstawić namiot.",
		 "Do":"jump 4A35",
	 },
 },
},
],


/*
//Spontaniczna zmiana zeznań prowadzi do kąpieli we troje.

"4A32":

W takim razie mam propozycję. Jak tylko dojedziemy na miejsce to do razu wskakujemy do wody!
s - W ubraniach?
Asia zaczyna się głośno śmiać, od razu do niej dołączasz.
i - Możesz w ubraniu.

"4A33":
No i co teraz? Staś nie ma stroju.
s - No nie wiem właśnie. Wyglada na to, że tylko Aś się przygotowała należycie
i - Czyli tylko Aśka się kąpie.
a - Możecie popływać w bieliźnie przecież.
i - Albo nago.



"4A34":
- Idziemy obczaić wodę. Poradzisz sobie?
 - Pewka. - Chłopak odpowiada i dalej ogarnia namiot.
Asia idzie obok Ciebie tych kilkanaście kroków i wchodzi prosto do wody, zanużając się do kostek.
 - Jest super. - Mówi radośnie. Przez chwilę patrzy na ciebie, a potem znów się odzywa. - Eh, jeszcze w tym roku się nie kąpałam.
Wycofuje się znowu na brzeg, ściąga sukienkę, odsłaniając czarny, dwuczęsciowy kostium.

"4A35":
Zostajesz z namiotem, a Asia nie chce isc sama. Nalega.
Asia krząta się przez moment przy aucie, pomagając Staśkowi z rozpakowywaniem. W końcu staje i głośno wzdycha.
 - Ida, idziesz zobaczyć wodę?


"4A36":
Jednak idziesz nad wodę z Aśką. Jest ci wdzięczna.

"4A37":












//copypaste
[
"				"

],


{
		"Choice": {
			"4A  ": {
			"Text": " ",
			"Do":"jump 4A  ",
		},
			"4A  ": {
			"Text": " ",
			"Do":"jump 4A  ",
		},
	},
},

*/














"4B1":
//Zwykłe ciuchy
	[
	"Oboje uśmiechają się do ciebie. Są czerwoni na twarzy. Pomimo szeroko otwartych okien, w aucie panuje upał. Stasiek mówi, że to przez popsutą klimatyzację. Jego dziewczyna marudzi, bo założyła na siebie strój kąpielowy i jest jej jeszcze bardziej gorąco. Potem dodaje, że nie może doczekać się jeziora i zimnej wody.",
	],


"4C1":
//Wyuzdane
	[
	"Oboje uśmiechają się do ciebie. Są czerwoni na twarzy. Pomimo szeroko otwartych okien, w aucie panuje upał. Stasiek mówi, że to przez popsutą klimatyzację. Jego dziewczyna marudzi, bo założyła na siebie strój kąpielowy i jest jej jeszcze bardziej gorąco. Potem dodaje, że nie może doczekać się jeziora i zimnej wody.",
	],
"4C2":
	[
	"s - Jeszcze trochę i będziemy na miejscu, a wtedy... będziesz mogła wskoczyć w strój."
	],

"4C3":
	[
	"s - No to zdejmij. Przecież możesz jechać w stroju kąpielowym.",
	"s - Aśka, ty też. Jest ze trzydzieści stopni...",
	"Spotykasz spojrzenie chłopaka we wstecznym lusterku. Chyba sprawdza jaka będzie Twoja reakcja.",
	"a - Ona mówiła o majtkach, Staś. Zostanie w samej bieliźnie wyklucza zdjęcie gaci.",
	],

//Koniec przedwczesny
"fine":
[
	"To już koniec. Może spróbujesz jeszcze raz?",
	"end",
],

};
