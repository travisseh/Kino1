
//query to figure out number of users who haven't increased exercises in a couple of weeks
db.users.aggregate([
    {$lookup : { from: "exercises", localField: "_id", foreignField: "userId", as: "exercises" }}, 
    {$project: { email: 1, exercises: {
        $filter: {
            input: '$exercises',
            as: 'item',
            cond: {$eq: ['$$item.isSetCreator', false]}
        }
    }}},
    {$match: {exercises: {$ne: []}}},
    {$project: {_id: 0, email: 1, exerciseCount: {$size: '$exercises'}, exercises: 1, }},
    {$match: {exerciseCount: {$gt: 30}}},
    {$unwind: '$exercises'},
    {$group: {_id: '$email', allExercises: {$push: {name: '$exercises.name', date: '$exercises.date', totalWeights:{
        $reduce: {
            input:'$exercises.sets.weight',
            initialValue: "",
            in: {$sum: ['$$value', '$$this']}
        }
    }}}}},
    {$sort: {'_id.email': 1, 'allExercises.date': -1}},
    {$project: {_id: 1, first15Exercises: {$slice: ['$allExercises', -31, 16]}, second15Exercises: {$slice: ['$allExercises', -15]}}}
]).pretty()


