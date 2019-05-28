﻿"use strict";

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
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff"
	},

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
		"Wyobrażasz sobie, że jest ciepły wieczór po długim, upalnym dniu.",
		"Wchodzisz naga do wody i powoli podpływasz do Stasia i Aśki, którzy stoją zanużeni do pasa w wodzie.",
		"Oboje są nadzy i bardzo zajęci sobą. Ignorują cię. Z niewyjaśnionych powódw, złości cię to.",
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
			  "Chłopak uśmiecha się. Wygląda na lekko podekscytowanego.",
			  "Asia po chwili też się uśmiecha, widać, że od dawna czeka na dobrą pogodę.",
			  "a - Ciągle jest zimno. Normalnie kurewska epoka lodowcowa.",
			  "jump Roz3",
			],

			"Roz1-2":
			[
				"i - Nie mam namiotu.",
				"s - No to musisz sobie jakiś ogarnąć do soboty. Bo jedziemy w sobotę.",
				"s - Ma być wtedy ładnie i ciepło.",
				"Chłopak uśmiecha się.",
				"Asia po chwili też się uśmiecha, widać, że od dawna czeka na dobrą pogodę.",
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
				"Chłopak uśmiecha się.",
				"Asia po chwili też się uśmiecha, widać, że od dawna czeka na dobrą pogodę.",
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
"Obudziłaś się wcześnie i od razu zauważyłaś, że pogoda bardzo dopisała.",
"Minęło kilkanaście dni. Przez cały ten czas utrzymywałaś kontakt ze Staśkiem i Asią.",
"Oboje wydawali się bardzo podekscytowani wyjazdem.",
"Wysłali ci kilka zdjęć miejsca, które wybrali.",
"Nieduża polana, tuż nad brzegiem jeziora. Dość miejsca na kilka namiotów i aut.",
"Może nawet uda wam się rozpalić nieduże ognisko.",
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
	"Wydaje ci się, że namiot za niecałe 100PLN nie wytrzyma pierwszej lepszej wichury.",
	"Ale lepsze to niż spanie pod gołym niebem.",
	"Pakujesz wszystko do plecaka.",
	"Dostajesz SMS-a od Aśki. Niebawem powinni być pod twoim domem.",
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

"Roz4A":
[
	"Naprawdę lubisz tę sukienkę. Bez chwili wahania zakładasz ją na siebie.",
	"Wreszcie pod twój dom przybywa auto Staśka.",
	"Wrzucasz swoje rzeczy do środka i ładujesz się na tylną kanapę.",
	"Przyglądasz się im szybko. Stasiek ma na sobie koszulkę i jakieś krótkie spodnie.",
	"Asia też ubrała się w sukienkę, sięga jej do połowy łydek, ma szerokie ramiączka i głęboki dekolt.",
	"Chyba spodobała im się twoja sukienka, bo oboje ją chwalą.",

],

"Roz4B":[
	"Nie masz ochoty na kombinowanie z ubiorem.",
	"Wreszcie pod twój dom przybywa auto Staśka.",
	"Wrzucasz swoje rzeczy do środka i ładujesz się na tylną kanapę.",
	">>DOPISAĆ CD<<",
],

"Roz4C":[
	"Pomyślałaś, że może powinnaś ich odrobinę sprowokować.",
	"Wreszcie pod twój dom przybywa auto Staśka.",
	"Wrzucasz swoje rzeczy do środka i ładujesz się na tylną kanapę.",
	">>DOPISAĆ CD<<",
],

//Koniec przedwczesny
"fine":
[
	"To już koniec. Może spróbujesz jeszcze raz?",
	"end",
],

};