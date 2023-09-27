const model = { 
    app: {
        currentPage: 'calendar',
        displayMode: 'dark',
        language: 'no',
        RestMode: false,
    },
    inputs: {
        AddEditTasksPage: {
            currentId: null,
            description: null,
            difficulty: null,
            timeframe: null,
            repeat: null,
        },
        calendarPage: {
            task: [
                {
                    id: 1,
                    checkBox: true,
                },
                {
                    id: 2,
                    checkBox: false,
                },
                {
                    id: 3,
                    checkBox: true,
                },
                {
                    id: 4,
                    checkBox: false,
                },
                {
                    id: 5,
                    checkBox: false,
                },
                {
                    id: 6,
                    checkBox: false,
                },
                {
                    id: 7,
                    checkBox: false,
                },
                {
                    id: 8,
                    checkBox: true,
                },
            ]
        },
    },
    tasks: [
        {
            id: 1,
            description: 'Rydd rommet',
            difficulty: 'medium',
            deadline: 'mandag',
            repeat: null,
            checkBox: true,
        },
        {
            id: 2,
            description: 'Oppvask',
            difficulty: 'easy',
            deadline: 'tirsdag',
            repeat: null,
            checkBox: false,
        },
        {
            id: 3,
            description: 'Gå ut med søppel',
            difficulty: 'easy',
            deadline: 'tirsdag',
            repeat: null,
            checkBox: true,
        },
        {
            id: 4,
            description: 'Klesvask',
            difficulty: 'hard',
            deadline: 'onsdag',
            repeat: null,
            checkBox: false,
        },
        {
            id: 5,
            description: 'Mat dyra/barna',
            difficulty: 'hard',
            deadline: 'Onsdag',
            repeat: null,
            checkBox: false,
        },
        {
            id: 6,
            description: 'Gå tur med hunden',
            difficulty: 'medium',
            deadline: 'Torsdag',
            repeat: null,
            checkBox: false,
        },
        {
            id: 7,
            description: 'Vask katten',
            difficulty: 'medium',
            deadline: 'Fredag',
            repeat: null,
            checkBox: false,
        },
        {
            id: 8,
            description: 'Vaske kattedo',
            difficulty: 'hard',
            deadline: 'Lørdag',
            repeat: null,
            checkBox: true,
            
        }
    ],
    alerts: {
        positive: {img: 'terjeSnorlax', text: 'Bra Jobba!:)'},
        negative: {img: 'terjeBlyant', text: 'TERJE DO NOT APPROVE'}
    }
}