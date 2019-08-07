const express = require("express")
const mongoose = require("mongoose")
const Package = require("../model").Package
const Workout = require("../model").Workout
const TemplateExercise = require("../model").TemplateExercise
const TemplateWarmUp = require("../model").TemplateWarmUp
const TemplateSet = require("../model").TemplateSet


const greek_god = new Package (
    {
      name: "Greek God",
      url: "greek_god",
      description: "This program shows you how to build a body with dense, proportionate muscle mass while maintaining a solid level of definition.",
      phaseIndex: 0,
      active: true,
      purchased: true,
      verifyQ: 'What is the first word written after "Goal:" near the top of the page',
      verifyLink: 'https://kinobody.teachable.com/courses/66902/lectures/1122305',
      verifyLength: 7,
      verifyWord: 'rapidly',
      phases: 3,
      bonusPhase: true,
      workouts: [
        {
          name: "A: Chest, Shoulder, Triceps, Abs",
          nameShort: "A",
          image: "https://source.unsplash.com/sAKQGX1Krs8/286x190",
          description: "5 workouts to strengthen chest and shoulders.",
          duration: 60,
          phase: 1,
          exercises: [
            {
                name: "Incline Barbell Bench Press",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589074",
                order: 0,
                instructions: [ "Set 1: 4-5 reps", "Set 2: 6-7 reps", "Set 3: 8-10 reps", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                notesFromCourse: [ "It’s important to note: You should be able to perform your first set with good form. But for the second and third set, try not to kill yourself. Leave a rep in the tank. (Meaning your last rep shouldn’t be all out.)","After incline press, I recommend resting 4-5 minutes before moving on to the standing press."],
                type: "Reverse Pyramid",
                weightIncrement: 5,
                weightIncrementKg: 2.5,
                startWeight: 0,
                startWeightKg: 0,
                weightType: "bar",
                pauseDuration: 150,
                warmUps: [
                    {
                        percent: 50,
                        reps: 6
                    },
                    {
                        percent: 70,
                        reps: 5
                    },
                    {
                        percent: 80,
                        reps: 3
                    }
                ],
                sets: [
                    {
                        low: 4,
                        high: 5
                    },
                    {
                        low: 6,
                        high: 7
                    },
                    {
                        low: 8,
                        high: 10
                    }
                ]
            },
            {
                name: "Standing Barbell Press",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589083",
                order: 1,
                instructions: [ "Set 1: 6-8 reps", "Set 2: 8-10 reps", "Set 3: 8-10 reps", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                notesFromCourse: [ "This should feel pretty easy. At this point of the workout, we’ve done the most effective, difficult exercises.","Now it’s time to get in a little more isolation work to complete our physique."],
                type: "Reverse Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2.5,
                startWeightKg: 0,
                weightType: "bar",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 8,
                        high: 10
                    },
                    {
                        low: 8,
                        high: 10
                    }
                ]
            },
            {
                name: "Triceps Rope Pushdown",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1590659",
                order: 2,
                instructions: ["Set 1: 6-8 reps.", "Set 2: 8-10 reps.", "Set 3: 10-12 reps.", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                type: "Reverse Pyramid",
                weightIncrement: 2.5,
                startWeight: 2.5,
                weightIncrementKg: 1,
                startWeightKg: 0,
                weightType: "rope",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 8,
                        high: 10
                    },
                    {
                        low: 10,
                        high: 12
                    }
                ]
            },
            {
                name: "Lateral Raises",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1590520",
                order: 3,
                instructions: [ "Set 1: 12-15 reps.", "Set 2: 4-6 reps.", "Set 3: 4-6 reps.", "Set 4: 4-6 reps", "Rest Pause - 10 second rest between each."],
                type: "Rest Pause",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                    startWeightKg: 0,
                weightType: "dumbbells",
                pauseDuration: 10,
                warmUps: [],
                sets: [
                    {
                        low: 12,
                        high: 15
                    },
                    {
                        low: 4,
                        high: 6
                    },
                    {
                        low: 4,
                        high: 6
                    },
                    {
                        low: 4,
                        high: 6
                    }
                ]
            },
            {
                name: "Hanging Weighted Knee Raises",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589138",
                order: 4,
                instructions: [ "8-12 reps per set.", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."], 
                notesFromCourse: ["I recommend lowering your feet slightly in front of you to keep constant tension on your abs, instead of simply dropping them to hanging and losing that tension. Also, lift your knees up as high as you can to make your body curl into a ball. This will hit your abs extremely hard, keeping your core flexed the entire time. When you can do 3 sets of 15 reps, add weight between your feet, starting with 5 pounds"],
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "dumbbell",
                pauseDuration: 60,
                warmUps: [],
                sets: [
                    {
                        low: 8,
                        high: 12
                    },
                    {
                        low: 8,
                        high: 12
                    },
                    {
                        low: 8,
                        high: 12
                    }
                ]
            }
          ]
        }, 
        {
        name: "B: Back, Biceps, Legs",
        nameShort: "B",
        image: "https://source.unsplash.com/WvDYdXDzkhs/286x190",
        description: "4 workouts to strengthen your legs and bum.",
        duration: 60,
        phase: 1,
        exercises: [
            {
                name: "Weighted Chin-ups",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589080",
                order: 0,
                instructions: [ "6 reps per set.", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                notesFromCourse: [ "If you can’t do weighted chinups, just do three sets at bodyweight. If you can’t do bodyweight chinups, substitute LAT pulldowns for three sets (6-8, 8-10, 10-12 reps) until you can rep out your bodyweight."],
                type: "Reverse Pyramid",
                weightIncrement: 2.5,
                startWeight: 0,
                weightIncrementKg: 1.25,
                startWeightKg: 0,
                weightType: "barWeights",
                pauseDuration: 150,
                warmUps: [
                  {
                    percent: 0,
                    reps: 5
                  },
                  {
                    percent: 50,
                    reps: 3
                  }
                ],
                sets: [
                  {
                      low: 4,
                      high: 4
                  },
                  {
                      low: 6,
                      high: 6
                  },
                  {
                    low: 8,
                    high: 8
                }
                ]
            },
            {
                name: "Incline Hammer Curls",
                videoLink: "https://www.bodybuilding.com/exercises/incline-hammer-curls",
                order: 1,
                instructions: [ "6-8 reps per set for first two sets.8-10 reps for final set.", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 5lbs/2.5kgs per dumbbell for reach additional set. Rest 3 minutes between each set."],
                type: "Reverse Pyramid",
                weightIncrement: 5,
                weightIncrementKg: 2,
                startWeight: 0,
                startWeightKg: 0,
                weightType: "dumbbells",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 8,
                        high: 10
                    }
                ]
            },
            {
                name: "Bulgarian Split Squats",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589122",
                order: 2,
                instructions: [ "6-8 reps per set.", "Rest 2-3 minutes between sets.", "Kino Rep Training style where you begin with light weights and increase the load with each set."],
                notesFromCourse: [ "Eventually, you'll build up to:","Set 1: 40 pounds for 8 reps","Set 2: 50 pounds for 8 reps","Set 3: 60 pounds for 8 reps","Set 4: 70 pounds for 8 reps","When you've developed weight loads at this level, your legs will be athletic and well-developed."],
                type: "Kino Rep",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "dumbbells",
                pauseDuration: 150,
                warmUps: [
                    {
                        percent: 0,
                        reps: 8
                    },
                    {
                        percent: 50,
                        reps: 6
                    }
                ],
                sets: [
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 6,
                        high: 8
                    }
                ]
            },
            {
                name: "Dumbbell Romanian Deadlifts",
                videoLink: "https://www.bodybuilding.com/exercises/romanian-deadlift-with-dumbbells",
                order: 3,
                instructions: ["10-12 reps per set.", "Rest 2-3 minutes between sets.", "Kino Rep Training style where you begin with light weights and increase the load with each set."],
                notesFromCourse: [ "This may seem easy, but it’s a remarkable workout. When you can do all four sets for 12 reps, increase by 5 pounds per dumbbell on each set.",
                "When you can build up to 60 pounds for 12 reps, 70 pounds for 12 reps, 80 pounds for 12 reps and 90 pounds for 12 reps, you'll have a solid posterior chain and thick forearms."],
                type: "Kino Rep",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2.5,
                startWeightKg: 0,
                weightType: "bar",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                  {
                      low: 10,
                      high: 12
                  },
                  {
                    low: 10,
                    high: 12
                },
                {
                    low: 10,
                    high: 12
                },
                {
                    low: 10,
                    high: 12
                },
                {
                    low: 10,
                    high: 12
                },
                ]
            },
            {
                name: "Face Pulls",
                videoLink: "https://www.bodybuilding.com/exercises/face-pull",
                order: 4,
                instructions: [ "12-15 reps per set.", "Rest 2-3 minutes between sets.", "Kino Rep Training style where you begin with light weights and increase the load with each set."],
                type: "Kino Rep",
                weightIncrement: 5,
                startWeight: 10,
                weightIncrementKg: 1,
                startWeightKg: 0,
                weightType: "cable",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                    {
                        low: 12,
                        high: 15
                    },
                    {
                        low: 12,
                        high: 15
                    },
                    {
                        low: 12,
                        high: 15
                    },
                    {
                        low: 12,
                        high: 15
                    },
                ]
            }
        ]
        },
        {
            name: "A: Chest, Shoulder, Triceps, Abs",
            nameShort: "A",
            image: "https://source.unsplash.com/sAKQGX1Krs8/286x190",
            description: "5 workouts to strengthen chest and shoulders.",
            duration: 60,
            phase: 2,
            exercises: [
                {
                    name: "Incline Dumbbell Bench Press",
                    videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589075",
                    order: 0,
                    instructions: [ "Set 1: 6-8 reps", "Set 2: 8-10 reps", "Set 2: 10-12 reps", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                    notesFromCourse: [ "This exercise is critical for the warrior physique. The incline press effectively targets the chest, front deltoids and triceps. By performing the bench on an incline, you hit the upper chest harder than you would with a flat-bench press. This exercise develops a sculpted chest that looks like a plate of armor.", "A lot of people focus way too much on flat bench. They end up over-developing their lower pecs. This gives their chest a boob look. If you want to have a masculine chest, then focus more on the incline bench."],
                    type: "Reverse Pyramid",
                    weightIncrement: 5,
                    weightIncrementKg: 2,
                    startWeight: 0,
                    startWeightKg: 0,
                    weightType: "dumbbells",
                    pauseDuration: 150,
                    warmUps: [
                        {
                            percent: 60,
                            reps: 5
                        },
                        {
                            percent: 80,
                            reps: 3
                        }
                    ],
                    sets: [
                        {
                            low: 6,
                            high: 8
                        },
                        {
                            low: 8,
                            high: 10
                        },
                        {
                            low: 10,
                            high: 12
                        }
                    ]
                },
                {
                    name: "Weighted Dips",
                    videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589077",
                    order: 1,
                    instructions: [ "Set 1: 6 reps", "Set 2: 8 reps", "Set 3: 10 reps", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                    type: "Reverse Pyramid",
                    weightIncrement: 5,
                    startWeight: 0,
                    weightIncrementKg: 1.25,
                    startWeightKg: 0,
                    weightType: "barWeights",
                    pauseDuration: 150,
                    warmUps: [],
                    sets: [
                    {
                        low: 6,
                        high: 6
                    },
                    {
                        low: 8,
                        high: 8
                    },
                    {
                        low: 10,
                        high: 10
                    }
                    ]
                },
                {
                    name: "One-Arm Overhead Triceps Extensions",
                    videoLink: "https://www.bodybuilding.com/exercises/standing-dumbbell-upright-row",
                    order: 2,
                    instructions: [ "Set 1: 8-10 reps", "Set 2: 10-12 reps", "Set 3: 12-15 reps", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                    type: "Reverse Pyramid",
                    weightIncrement: 5,
                    weightIncrementKg: 2.5,
                    startWeight: 0,
                    startWeightKg: 0,
                    weightType: "bar",
                    pauseDuration: 150,
                    warmUps: [],
                    sets: [
                        {
                            low: 8,
                            high: 10
                        },
                        {
                            low: 10,
                            high: 12
                        },
                        {
                            low: 12,
                            high: 15
                        }
                    ]
                },
                {
                    name: "Dumbbell Upright Rows",
                    videoLink: "https://www.bodybuilding.com/exercises/standing-dumbbell-upright-row",
                    order: 3,
                    instructions: [ "10-15 reps per set", "Rest 2-3 minutes between sets.", "Kino Rep Training style where you begin with light weights and increase the load with each set."],
                    type: "Kino Rep",
                    weightIncrement: 5,
                    weightIncrementKg: 1.25,
                    startWeight: 0,
                    startWeightKg: 0,
                    weightType: "barWeights",
                    pauseDuration: 150,
                    warmUps: [
                        {
                            percent: 50,
                            reps: 8
                        }
                    ],
                    sets: [
                        {
                            low: 10,
                            high: 15
                        },
                        {
                            low: 10,
                            high: 15
                        },
                        {
                            low: 10,
                            high: 15
                        },
                        {
                            low: 10,
                            high: 15
                        }
                    ]
                },
                {
                    name: "Side-to-Side Knee Ups",
                    videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589142",
                    order: 4,
                    instructions: [ "8-12 reps per set", "Rest 2-3 minutes between sets.", "Use same weight on all sets."],
                    type: "Standard Pyramid",
                    weightIncrement: 5,
                    weightIncrementKg: 2,
                    startWeight: 0,
                    startWeightKg: 0,
                    weightType: "dumbbells",
                    pauseDuration: 150,
                    warmUps: [],
                    sets: [
                        {
                            low: 8,
                            high: 12
                        },
                        {
                            low: 8,
                            high: 12
                        },
                        {
                            low: 8,
                            high: 12
                        }
                    ]
                },
            ]
        },
        {
            name: "B: Back, Biceps, Legs",
            nameShort: "B",
            image: "https://source.unsplash.com/WvDYdXDzkhs/286x190",
            description: "4 workouts to strengthen your legs and bum.",
            duration: 60,
            phase: 2,
            exercises: [
            {
                name: "Weighted Pull-ups",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589080",
                order: 0,
                instructions: [ "Set 1: 6 reps", "Set 1: 8 reps", "Set 1: 8 reps", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                type: "Reverse Pyramid",
                weightIncrement: 2.5,
                startWeight: 0,
                weightIncrementKg: 1.25,
                startWeightKg: 0,
                weightType: "barWeights",
                pauseDuration: 150,
                warmUps: [
                  {
                    percent: 50,
                    reps: 3
                  }
                ],
                sets: [
                  {
                      low: 6,
                      high: 6
                  },
                  {
                      low: 8,
                      high: 8
                  },
                  {
                    low: 8,
                    high: 8
                }
                ]
            },
            {
                name: "Incline Dumbbell Curls",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589113",
                order: 1,
                instructions: [ "6-8 reps per set", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 5lbs/2.5kgs per dumbbell for reach additional set. Rest 3 minutes between each set."],
                type: "Reverse Pyramid",
                weightIncrement: 5,
                weightIncrementKg: 2,
                startWeight: 0,
                startWeightKg: 0,
                weightType: "dumbbells",
                pauseDuration: 150,
                warmUps: [
                    {
                        percent: 50,
                        reps: 8
                    }
                ],
                sets: [
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 6,
                        high: 8
                    }
                ]
            },
            {
                name: "Barbell Box Squat",
                videoLink: "https://www.bodybuilding.com/exercises/box-squat",
                order: 2,
                instructions: ["6 reps per set.", "Rest 2-3 minutes between sets.", "Kino Rep Training style where you begin with light weights and increase the load with each set."],
                notesFromCourse: [ "This deadlift variation is my preferred version. It's safer on the lower back and does a great job developing the hamstrings, glutes and low back. In fact, if you want to build a great butt (which, I mean, who doesn't?), then this exercise should definitely be included in your routine."],
                type: "Kino Rep",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2.5,
                startWeightKg: 0,
                weightType: "bar",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                  {
                      low: 6,
                      high: 6
                  },
                  {
                      low: 6,
                      high: 6
                  },
                  {
                      low: 6,
                      high: 6
                  },
                  {
                    low: 6,
                    high: 6
                },
                {
                    low: 6,
                    high: 6
                }
                ]
            },
            {
                name: "Single-Leg Romanian Deadlift",
                videoLink: "https://www.bodybuilding.com/exercises/single-leg-deadlift",
                order: 3,
                instructions: [ "8-12 reps per set.", "Rest 2-3 minutes between sets.", "Kino Rep Training style where you begin with light weights and increase the load with each set."],
                notesFromCourse: [ "This is a great exercise to develop your balance, knee stability and to build your hamstrings and glutes. Romanian deadlifts also pair nicely with box squats.", "If you prefer traditional back squats, you can opt for those instead."],
                type: "Kino Rep",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "dumbbells",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                    {
                        low: 8,
                        high: 12
                    },
                    {
                        low: 8,
                        high: 12
                    },
                    {
                        low: 8,
                        high: 12
                    }
                ]
            },
            {
                name: "Seated Bent-Over Flyes",
                videoLink: "https://www.bodybuilding.com/exercises/seated-bent-over-rear-delt-raise",
                order: 4,
                instructions: ["Set 1: 12-15 reps", "Set 2: 4-6 reps", "Set 3: 4-6 reps", "Set 4: 4-6 reps", "Rest Pause - rest 10 seconds between sets."],
                type: "Rest Pause",
                weightIncrement: 5,
                weightIncrementKg: 2,
                startWeight: 0,
                startWeightKg: 0,
                weightType: "dumbbells",
                pauseDuration: 10,
                warmUps: [],
                sets: [
                    {
                        low: 12,
                        high: 15
                    },
                    {
                        low: 4,
                        high: 6
                    },
                    {
                        low: 4,
                        high: 6
                    },
                    {
                        low: 4,
                        high: 6
                    }
                ]
            }
        ]
        },
        {
            name: "A: Chest, Shoulder, Triceps, Abs",
            nameShort: "A",
            image: "https://source.unsplash.com/sAKQGX1Krs8/286x190",
            description: "5 workouts to strengthen chest and shoulders.",
            duration: 60,
            phase: 3,
            exercises: [
              {
                  name: "Incline Barbell Bench Press",
                  videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589074",
                  order: 0,
                  instructions: [ "Set 1: 4-5 reps", "Set 2: 6-7 reps", "Set 3: 8-10 reps", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                  notesFromCourse: [ "It’s important to note: You should be able to perform your first set with good form. But for the second and third set, try not to kill yourself. Leave a rep in the tank. (Meaning your last rep shouldn’t be all out.)","After incline press, I recommend resting 4-5 minutes before moving on to the standing press."],
                  type: "Reverse Pyramid",
                  weightIncrement: 5,
                  weightIncrementKg: 2.5,
                  startWeight: 0,
                  startWeightKg: 0,
                  weightType: "bar",
                  pauseDuration: 150,
                  warmUps: [
                      {
                          percent: 50,
                          reps: 6
                      },
                      {
                          percent: 70,
                          reps: 5
                      },
                      {
                          percent: 80,
                          reps: 3
                      }
                  ],
                  sets: [
                      {
                          low: 4,
                          high: 5
                      },
                      {
                          low: 6,
                          high: 7
                      },
                      {
                          low: 8,
                          high: 10
                      }
                  ]
              },
              {
                  name: "Standing Barbell Press",
                  videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589083",
                  order: 1,
                  instructions: [ "Set 1: 6-8 reps", "Set 2: 8-10 reps", "Set 3: 8-10 reps", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                  notesFromCourse: [ "This should feel pretty easy. At this point of the workout, we’ve done the most effective, difficult exercises.","Now it’s time to get in a little more isolation work to complete our physique."],
                  type: "Reverse Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightIncrementKg: 2.5,
                  startWeightKg: 0,
                  weightType: "bar",
                  pauseDuration: 150,
                  warmUps: [],
                  sets: [
                      {
                          low: 6,
                          high: 8
                      },
                      {
                          low: 8,
                          high: 10
                      },
                      {
                          low: 8,
                          high: 10
                      }
                  ]
              },
              {
                  name: "Triceps Rope Pushdown",
                  videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1590659",
                  order: 2,
                  instructions: ["Set 1: 6-8 reps.", "Set 2: 8-10 reps.", "Set 3: 10-12 reps.", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                  type: "Reverse Pyramid",
                  weightIncrement: 2.5,
                  startWeight: 2.5,
                  weightIncrementKg: 1,
                  startWeightKg: 0,
                  weightType: "rope",
                  pauseDuration: 150,
                  warmUps: [],
                  sets: [
                      {
                          low: 6,
                          high: 8
                      },
                      {
                          low: 8,
                          high: 10
                      },
                      {
                          low: 10,
                          high: 12
                      }
                  ]
              },
              {
                  name: "Lateral Raises",
                  videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1590520",
                  order: 3,
                  instructions: [ "Set 1: 12-15 reps.", "Set 2: 4-6 reps.", "Set 3: 4-6 reps.", "Set 4: 4-6 reps", "Rest Pause - 10 second rest between each."],
                  type: "Rest Pause",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightIncrementKg: 2,
                      startWeightKg: 0,
                  weightType: "dumbbells",
                  pauseDuration: 10,
                  warmUps: [],
                  sets: [
                      {
                          low: 12,
                          high: 15
                      },
                      {
                          low: 4,
                          high: 6
                      },
                      {
                          low: 4,
                          high: 6
                      },
                      {
                          low: 4,
                          high: 6
                      }
                  ]
              },
              {
                  name: "Hanging Weighted Knee Raises",
                  videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589138",
                  order: 4,
                  instructions: [ "8-12 reps per set.", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."], 
                  notesFromCourse: ["I recommend lowering your feet slightly in front of you to keep constant tension on your abs, instead of simply dropping them to hanging and losing that tension. Also, lift your knees up as high as you can to make your body curl into a ball. This will hit your abs extremely hard, keeping your core flexed the entire time. When you can do 3 sets of 15 reps, add weight between your feet, starting with 5 pounds"],
                  type: "Standard Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightIncrementKg: 2,
                  startWeightKg: 0,
                  weightType: "dumbbell",
                  pauseDuration: 60,
                  warmUps: [],
                  sets: [
                      {
                          low: 8,
                          high: 12
                      },
                      {
                          low: 8,
                          high: 12
                      },
                      {
                          low: 8,
                          high: 12
                      }
                  ]
              }
            ]
        }, 
        {
        name: "B: Back, Biceps, Legs",
        nameShort: "B",
        image: "https://source.unsplash.com/WvDYdXDzkhs/286x190",
        description: "4 workouts to strengthen your legs and bum.",
        duration: 60,
        phase: 3,
        exercises: [
            {
                name: "Weighted Chin-ups",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589080",
                order: 0,
                instructions: [ "6 reps per set.", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 10% for reach additional set."],
                notesFromCourse: [ "If you can’t do weighted chinups, just do three sets at bodyweight. If you can’t do bodyweight chinups, substitute LAT pulldowns for three sets (6-8, 8-10, 10-12 reps) until you can rep out your bodyweight."],
                type: "Reverse Pyramid",
                weightIncrement: 2.5,
                startWeight: 0,
                weightIncrementKg: 1.25,
                startWeightKg: 0,
                weightType: "barWeights",
                pauseDuration: 150,
                warmUps: [
                {
                    percent: 0,
                    reps: 5
                },
                {
                    percent: 50,
                    reps: 3
                }
                ],
                sets: [
                {
                    low: 4,
                    high: 4
                },
                {
                    low: 6,
                    high: 6
                },
                {
                    low: 8,
                    high: 8
                }
                ]
            },
            {
                name: "Incline Hammer Curls",
                videoLink: "https://www.bodybuilding.com/exercises/incline-hammer-curls",
                order: 1,
                instructions: [ "6-8 reps per set for first two sets.8-10 reps for final set.", "Rest 2-3 minutes between sets.", "Reverse Pyramid - reduce weight by 5lbs/2.5kgs per dumbbell for reach additional set. Rest 3 minutes between each set."],
                type: "Reverse Pyramid",
                weightIncrement: 5,
                weightIncrementKg: 2,
                startWeight: 0,
                startWeightKg: 0,
                weightType: "dumbbells",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 8,
                        high: 10
                    }
                ]
            },
            {
                name: "Bulgarian Split Squats",
                videoLink: "https://kinobody.teachable.com/courses/108654/lectures/1589122",
                order: 2,
                instructions: [ "6-8 reps per set.", "Rest 2-3 minutes between sets.", "Kino Rep Training style where you begin with light weights and increase the load with each set."],
                notesFromCourse: [ "Eventually, you'll build up to:","Set 1: 40 pounds for 8 reps","Set 2: 50 pounds for 8 reps","Set 3: 60 pounds for 8 reps","Set 4: 70 pounds for 8 reps","When you've developed weight loads at this level, your legs will be athletic and well-developed."],
                type: "Kino Rep",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "dumbbells",
                pauseDuration: 150,
                warmUps: [
                    {
                        percent: 0,
                        reps: 8
                    },
                    {
                        percent: 50,
                        reps: 6
                    }
                ],
                sets: [
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 6,
                        high: 8
                    },
                    {
                        low: 6,
                        high: 8
                    }
                ]
            },
            {
                name: "Dumbbell Romanian Deadlifts",
                videoLink: "https://www.bodybuilding.com/exercises/romanian-deadlift-with-dumbbells",
                order: 3,
                instructions: ["10-12 reps per set.", "Rest 2-3 minutes between sets.", "Kino Rep Training style where you begin with light weights and increase the load with each set."],
                notesFromCourse: [ "This may seem easy, but it’s a remarkable workout. When you can do all four sets for 12 reps, increase by 5 pounds per dumbbell on each set.",
                "When you can build up to 60 pounds for 12 reps, 70 pounds for 12 reps, 80 pounds for 12 reps and 90 pounds for 12 reps, you'll have a solid posterior chain and thick forearms."],
                type: "Kino Rep",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2.5,
                startWeightKg: 0,
                weightType: "bar",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                {
                    low: 10,
                    high: 12
                },
                {
                    low: 10,
                    high: 12
                },
                {
                    low: 10,
                    high: 12
                },
                {
                    low: 10,
                    high: 12
                },
                {
                    low: 10,
                    high: 12
                },
                ]
            },
            {
                name: "Face Pulls",
                videoLink: "https://www.bodybuilding.com/exercises/face-pull",
                order: 4,
                instructions: [ "12-15 reps per set.", "Rest 2-3 minutes between sets.", "Kino Rep Training style where you begin with light weights and increase the load with each set."],
                type: "Kino Rep",
                weightIncrement: 5,
                startWeight: 10,
                weightIncrementKg: 1,
                startWeightKg: 0,
                weightType: "cable",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                    {
                        low: 12,
                        high: 15
                    },
                    {
                        low: 12,
                        high: 15
                    },
                    {
                        low: 12,
                        high: 15
                    },
                    {
                        low: 12,
                        high: 15
                    },
                ]
            }
        ]
        }
    ]
    }
  )

  function createGreekGod(){
      Package.create(greek_god, function(err){
          if (err){
              console.log(err)
          }
      })
  }

  module.exports = {greek_god, createGreekGod}