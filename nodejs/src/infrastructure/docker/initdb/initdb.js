db.createCollection('film');
db.film.insert([{
    title: 'titre1',
    actors: ['actor1', 'actor2'],
    date: new Date(),
    meta: {
        usersNote: 1,
        pressNote: 2
    },
    synopsis: 'test syno'
}]);