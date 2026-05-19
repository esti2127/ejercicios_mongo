
use('taller_mongo_2026');

// Ejercicio 1: Mostrar todos los documentos de la colección restaurantes

// db.restaurants.find()

// Ejercicio 2: Mostrar los campos restaurant_id, nombre, distrito y cocina, pero excluya el campo _id para todos los documentos de la colección restaurantes

// db.restaurants.find({}, {"restaurant_id":1, "name":1, "borough": 1, "cuisine": 1, "_id":0})

// Ejercicio 3: Mostrar los primeros 5 restaurantes que se encuentran en el distrito Bronx

// db.restaurants.find({}, {"borough": 'Bronx'}).limit(5)

// Ejercicio 4: Devolver los restaurantes que lograron una puntuación superior a 80 pero inferior a 100

// db.restaurants.find({grades: { $elemMatch: {"score": {$gt:80, $lt:100}}}})

// Ejercicio 5: Devolver los restaurantes que se ubican en un valor de latitud inferior a -95.754168

// db.restaurants.find({"address.coord.0" : {$lt: -95.754168}})

// Ejercicio 6: Devolver los restaurantes que no preparan cocina americana y lograron una puntuación superior a 70 y se ubicaron en una longitud inferior a -65.754168. Nota: Realice esta consulta sin usar el operador $and

// db.restaurants.find({cuisine: { $ne: "American" }, grades.score: { $gt: 70 }, "address.coord.0": { $lt: -65.754168 }})

// db.restaurants.find({cuisine: {$ne: 'American'} },{grades: { $elemMatch: {"score": {$gt:70}}}}, {"address.coord.0" : {$lt: -65.754168}})

// Ejercicio 7: Devolver los restaurantes que no preparan cocina americana y lograron un punto de calificación 'A' que no pertenece al distrito de Brooklyn. El documento debe mostrarse según la cocina en orden descendente.

// db.restaurants.find({cuisine: { $ne: "American" }, borough: {$ne: "Brooklyn"}, "grades.score": "A"}).sort({ cuisine: -1 })

// Ejercicio 8: Devolver los restaurantes que pertenecen al distrito Bronx y preparan platos americanos o chinos






