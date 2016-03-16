var config = {
    lang: 'en',
    time: {
        timeFormat: 12,
        displaySeconds: false,
        digitFade: true,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Loughborough, GB',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'en',
            APPID: 'dfe6bc1887878d45957fd313fbecd59a'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look sexy!',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!'
        ]
    },
    calendar: {
        maximumEntries: 5, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		//{
		//	symbol: 'calendar-plus-o', 
		//	url: 'https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M'
		//},
		//{
		//	symbol: 'birthday-cake',
		//	url: 'https://calendar.google.com/calendar/htmlembed?src=%23contacts%40group.v.calendar.google.com&ctz=Europe/London',
		//},
		 {
			 symbol: 'car',
			 url: "https://calendar.google.com/calendar/ical/p5tegap0ff538rd69qekou1v8h5ukugm%40import.calendar.google.com/public/basic.ics",
		 },
		 {
			 symbol: 'sun-o',
			 url: "https://calendar.google.com/calendar/ical/en.uk%23holiday%40group.v.calendar.google.com/public/basic.ics",
		 },
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },
    news: {
        feed: 'http://feeds.bbci.co.uk/news/rss.xml?edition=uk#'
    }
}
