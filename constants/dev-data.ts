export const defaultSchedule = [
    {
        from: {
            // date: 'Oct 01',
            // time: '14:30',
            datetime: new Date('2024-10-01T14:30:00'),
            location: 'IAH'
        }, to: {
            // date: 'Oct 01',
            // time: '17:30',
            datetime: new Date('2024-10-01T17:30:00'),
            location: 'DEN'
        }
    },
    {
        from: {
            // date: 'Oct 02',
            // time: '9:30',
            datetime: new Date('2024-10-02T09:30:00'),
            location: 'DEN'
        }, to: {
            // date: 'Oct 02',
            // time: '12:30',
            datetime: new Date('2024-10-02T12:30:00'),
            location: 'SEA'
        }
    },
    {
        from: {
            // date: 'Oct 02',
            // time: '14:30',
            datetime: new Date('2024-10-02T14:30:00'),
            location: 'SEA'
        }, to: {
            // date: 'Oct 02',
            // time: '17:30',
            datetime: new Date('2024-10-02T17:30:00'),
            location: 'SFO'
        }
    },
    {
        from: {
            // date: 'Oct 03',
            // time: '9:30',
            datetime: new Date('2024-10-03T09:30:00'),
            location: 'SFO'
        }, to: {
            // date: 'Oct 03',
            // time: '12:30',
            datetime: new Date('2024-10-03T12:30:00'),
            location: 'LAX'
        }
    },
    {
        from: {
            // date: 'Oct 03',
            // time: '14:30',
            datetime: new Date('2024-10-03T14:30:00'),
            location: 'LAX'
        }, to: {
            // date: 'Oct 03',
            // time: '17:30',
            datetime: new Date('2024-10-03T17:30:00'),
            location: 'PHX'
        }
    }
];

export const defaultFlights = [
    { airline: 'Spirit Airlines', 
        from: {
            // date: 'Oct 02',
            // time: '14:30',
            datetime: new Date('2024-10-02T14:30:00'),
            location: 'LAX'
        }, to: {
            // date: 'Oct 02',
            // time: '17:30',
            datetime: new Date('2024-10-02T17:30:00'),
            location: 'ORD'
        },
        price: 256
    },
    { airline: 'United Airlines', 
        from: {
            // date: 'Oct 03',
            // time: '9:30',
            datetime: new Date('2024-10-03T09:30:00'),
            location: 'LAX'
        }, 
        to: {
            // date: 'Oct 03',
            // time: '12:30',
            datetime: new Date('2024-10-03T12:30:00'),
            location: 'JFK'
        },
        price: 305
    },
    { airline: 'Southwest', 
        // route: 'LAX to SFO', 
        from: {
            // date: 'Oct 05',
            // time: '14:30',
            datetime: new Date('2024-10-05T14:30:00'),
            location: 'LAX'
        },
        to: {
            // date: 'Oct 05',
            // time: '17:30',
            datetime: new Date('2024-10-05T17:30:00'),
            location: 'SFO'
        },
        price: 120
    },
]