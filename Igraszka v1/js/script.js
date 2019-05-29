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
	}
],

//SUKIENKA
"Roz4A":
[
"Naprawdę lubisz tę sukienkę. Bez chwili wahania zakładasz ją na siebie. Gdy kończysz się ubierać, pod twój dom przybywa auto Staśka. Wrzucasz swoje rzeczy do środka i ładujesz się na tylną kanapę. Przyglądasz się szybko swoim towarzyszom. Stasiek ma na sobie koszulkę i jakieś krótkie spodnie. Asia też ubrała się w sukienkę, sięga jej do połowy łydek, ma szerokie ramiączka i głęboki dekolt. Chyba spodobała im się twoja sukienka, bo oboje ją chwalą.",
"Stasiek ma na sobie koszulkę i jakieś krótkie spodnie. Asia też jest w sukience, sięga jej do połowy łydek i ma szerokie ramiączka z dekoltem.  Oboje chwalą Twoją sukienkę, mówiąc że jest śliczna.",
{
			"Choice": {
				"4A1": {
				"Text": "Podziękuj i pochwali ich ubiór.",
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
	}

],
//ZWYKŁE CIUCHY
"Roz4B":[
	"Nie masz ochoty na kombinowanie z ubiorem. Gdy kończysz się ubierać, pod twój dom przybywa auto Staśka. Wrzucasz swoje rzeczy do środka i ładujesz się na tylną kanapę.",
	"Stasiek ma na sobie koszulkę i jakieś krótkie spodnie. Asia jest w sukience, sięgającej do połowy łydek i ma szerokie ramiączka z dekoltem. Stasiek uśmiecha się do ciebie i stwierdza żartobliwie, że musi ci być gorąco w tych spodniach.",
	{
			"Choice": {
				"4B1": {
				"Text": "Podziękuj i pochwali ich ubiór.",
				"Do":"jump 4B1",
			},
		},
	}
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
	}
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
	}
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
}
}
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
	}
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
	}
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
	}

],

"4A6":
[
	"s - No to ja zostanę na brzegu, a wy we dwie pójdziecie popływać gdzieś indziej. Może być?",
	"Chłopak spogląda na Aśkę, jakby wyczekując jakiejś określonej reakcji. Niestety ona postanawia siedzieć cicho, uśmiechając się tylko.",
	"s - Jezioro jest duże."
],

"4A7":
[
	"a - Oczywiście, kochana.",
	"Odpowiada radośnie Aśka i odwraca się w twoją stronę.",
	"a - Idziemy od razu do wody?",
],

"4A8":
	[
"s - Hej, a mojego nie chcesz oglądać? - Oburzył się nagle Staś.",
"a- Przestań. Zamierzasz wchodzić do wody? On nie potrafi pływać.",
"Asia powiedziała to z wyczuwalnym śmiechem w głosie, jednocześnie odwracając się w twoją stronę.",

Choice
- No to chyba nie popływasz z nami.
- Szkoda, miałam wielką ochotę popływać nago. - Mówisz prowokująco.
		],
"4A9":
	[
"s - Fajny stanik. - Komentuje Stasiek, gdy zostajesz w samej bieliźnie. Jego partnerka zgadza się z nim. Dostrzegasz delikatny ruch jej dłoni, która przesuwa się po jej rozgrzanej szyi. Chłopak ciągle zerka na ciebie w lusterku.",
	],

"4A10":
	[
" - Stasiek ty się chyba nigdy nago nie kąpałeś, co? - Spytała nagle Aśka. - No ale może najpierw mógłbyś się w ogóle nauczyć pływać, to byś miał więcej okazji.
 - To że kiepsko pływam, nie znaczy, że będę unikał wody.
 - Jasne. Ale Ida pyta, czy przypadkiem nie zapomniałeś stroju.
 - No nie, mam go w torbie przecież... - Widzisz, że Asia zaczyna się śmiać i kręci głową.",
	],
"4A11":
[
" - A nie chcesz się pływać w bieliźnie? - Asia odwraca się w Twoją stronę. - Na słońcu powinna szybko wyschnąć.",

],

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
