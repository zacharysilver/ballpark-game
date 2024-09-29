export const defaultSchedule = [
    {
        airline: 'American Airlines',
        price: 100,
        from: {
            // date: 'Oct 01',
            // time: '14:30',
            datetime: new Date('2024-04-01T14:30:00'),
            location: 'IAH'
        }, to: {
            // date: 'Oct 01',
            // time: '17:30',
            datetime: new Date('2024-04-01T17:30:00'),
            location: 'DEN'
        }
    },
    {
        airline: 'American Airlines',
        price: 100,
        from: {
            // date: 'Oct 02',
            // time: '9:30',
            datetime: new Date('2024-04-02T09:30:00'),
            location: 'DEN'
        }, to: {
            // date: 'Oct 02',
            // time: '12:30',
            datetime: new Date('2024-04-02T12:30:00'),
            location: 'SEA'
        }
    },
    {
        airline: 'American Airlines',
        price: 100,
        from: {
            // date: 'Oct 02',
            // time: '14:30',
            datetime: new Date('2024-04-02T14:30:00'),
            location: 'SEA'
        }, to: {
            // date: 'Oct 02',
            // time: '17:30',
            datetime: new Date('2024-04-02T17:30:00'),
            location: 'SFO'
        }
    },
    {
        airline: 'American Airlines',
        price: 100,
        from: {
            // date: 'Oct 03',
            // time: '9:30',
            datetime: new Date('2024-04-03T09:30:00'),
            location: 'SFO'
        }, to: {
            // date: 'Oct 03',
            // time: '12:30',
            datetime: new Date('2024-04-03T12:30:00'),
            location: 'LAX'
        }
    },
    {
        airline: 'American Airlines',
        price: 100,
        from: {
            // date: 'Oct 03',
            // time: '14:30',
            datetime: new Date('2024-04-03T14:30:00'),
            location: 'LAX'
        }, to: {
            // date: 'Oct 03',
            // time: '17:30',
            datetime: new Date('2024-04-03T17:30:00'),
            location: 'PHX'
        }
    }
];

export const defaultFlights = [
    { airline: 'Spirit Airlines', 
        from: {
            // date: 'Oct 02',
            // time: '14:30',
            datetime: new Date('2024-04-02T14:30:00'),
            location: 'LAX'
        }, to: {
            // date: 'Oct 02',
            // time: '17:30',
            datetime: new Date('2024-04-02T17:30:00'),
            location: 'ORD'
        },
        price: 256
    },
    { airline: 'United Airlines', 
        from: {
            // date: 'Oct 03',
            // time: '9:30',
            datetime: new Date('2024-04-03T09:30:00'),
            location: 'LAX'
        }, 
        to: {
            // date: 'Oct 03',
            // time: '12:30',
            datetime: new Date('2024-04-03T12:30:00'),
            location: 'JFK'
        },
        price: 305
    },
    { airline: 'Southwest', 
        // route: 'LAX to SFO', 
        from: {
            // date: 'Oct 05',
            // time: '14:30',
            datetime: new Date('2024-04-05T14:30:00'),
            location: 'LAX'
        },
        to: {
            // date: 'Oct 05',
            // time: '17:30',
            datetime: new Date('2024-04-05T17:30:00'),
            location: 'SFO'
        },
        price: 120
    },
]