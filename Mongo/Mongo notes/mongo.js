db.createUser({
    user: 'John',
    pwd: 'password',
    customData: { startDate: new Date () },
    roles: [
        { role: 'clusterAdmin', db: 'admin' },
        { role: 'readAnyDatabase', db: 'admin' },
        'readWrite'
    ]
})


db.books.insert({
    "name": "OOP Programing",
    "startDate": new Date(),
    "authors": [
        {"name": "Jon Snow Jr"},
    ]

})

db.books.insertMany([
    {
    "name": "Confident Ruby",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Avdi Grimm"}
    ]
},
{
    "name": "The War of Art",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Steven Pressfield"},
    ]
},
{
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Malcolm Gladwell"},
    ]
}
])


db.books.find(
    {
        name: "Confident Ruby"
    },
    {
        _id: 0,
        name: 1,
        authors: 1
    }
).pretty()

db.books.insert ({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Malcolm Gladwell" },
        { "name": "Ghost Writer"}
    ]
})

db.books.find(
    {
        name: "Blink"
    },
    {
        publishedDate: 1,
        name: 1,
        authors: { $slice: -1 }

    }
).pretty()

db.books.insert({
    "name": "Deep Work: Rules for Focused Success in a Distracted World",
    "publishedDate": new Date(),
    "authors": [
        {"name": "Cal Newport"}
    ]
});

db.books.insert({
    "name": "Blink",
    "publishedDate": new Date(),
    "authors": [
        { "name": "Malcolm Gladwell", "active": "true" },
        { "name": "Ghost Writer", "active": "true" }
    ]
});

db.books.find(
    {
      name: "Blink"
    },
    {
      name: 1,
      publishedDate: 1,
      "authors": 1
    }
  ).pretty()


db.books.insert( 
    {
      "name": "Deep Work: Rules for Focused Success in a Distracted World",
      "publishedDate": new Date(),
      "reviews": 100,
      "authors": [
        {"name": "Cal Newport"}
      ]
    }
)