var halls = [ { name: 'Via Events', adress: 'Rehon bla bla 7', email: 'lololo@walla.lololo', phone: '0522991956', description: 'lore korem lorem lore', type: 'Guarden',
                accelability: true, price: 35000, guestsCount: {min: 400, max: 800}, imgUrl: 'event1.jpg',
                comments: [], rating: 0, website: '#' },
                { name: 'Avenu', adress: 'Rehon bla bla 7', email: 'lololo@walla.lololo', phone: '0522991956', description: 'lore korem lorem lore', type: 'Guarden',
                accelability: true, price: 35000, guestsCount: {min: 400, max: 800}, imgUrl: 'event1.jpg',
                comments: [], rating: 0, website: '#' },
                { name: 'The Queen blabla', adress: 'Rehon bla bla 7', email: 'lololo@walla.lololo', phone: '0522991956', description: 'lore korem lorem lore', type: 'Guarden',
                accelability: true, price: 35000, guestsCount: {min: 400, max: 800}, imgUrl: 'event1.jpg',
                comments: [], rating: 0, website: '#' }];

function getHalls() {
    return new Promise((resolve, reject) => {
        if(Array.isArray(halls)) {
            resolve(halls);
        } else {
            reject('Halls isn\'t Array');
        }
    })
}

export default {
    getHalls
}