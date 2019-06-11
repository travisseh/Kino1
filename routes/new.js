import { warrior_shredded } from "../modules/storedWorkouts";

Exercise.aggregate([
    {$match: {userId: ObjectId("5c9d0ee45da4cb3ec19428db"), packageUrl: warrior_shredded, workout: B, phase: 2}},
    {$group: {_id: {order: "$order", name: "$name"}, sets: {$last: "$sets"}, lastId: {$last: "$_id"}}},
    {$sort: {"_id.order" : 1}}
])

db.exercises.aggregate([
    {$match: {userId: ObjectId("5c9d0ee45da4cb3ec19428db"), packageUrl: "warrior_shredded", workout: "B", phase: 2}}
]).pretty()

db.exercises.aggregate([
    {$match: {userId: ObjectId("5c9d0ee45da4cb3ec19428db"), packageUrl: "warrior_shredded", workout: "B", phase: 2}},
    {$group: {_id: {order: "$order", name: "$name"}, sets: {$last: "$sets"}, lastId: {$last: "$_id"}}},
    {$sort: {"_id.order" : 1}}
]).pretty()