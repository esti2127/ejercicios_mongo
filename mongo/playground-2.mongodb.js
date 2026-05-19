
use('taller_mongo_2026');

// Ejercicio 1: Devuelve todas las empleadas de la empresa usando $match

db.employees.aggregate([
  {$match: {gender: "female"}}
])

// Ejercicio 2: Devuelve un array de objetos que tenga en cada uno {id_departamento,totalEmployees} datos como en el siguiente ejemplo:

db.employees.aggregate([
  { $group: { _id: "$department.name", totalSalaries: { $sum: "$salary" }}}
])


