const express = require("express")
const mongoose = require("mongoose")
const Package = require("../model").Package
const Workout = require("../model").Workout
const TemplateExercise = require("../model").TemplateExercise
const TemplateWarmUp = require("../model").TemplateWarmUp
const TemplateSet = require("../model").TemplateSet


const warrior_shredded = new Package (
    {
      name: "Warrior Shredded",
      url: "warrior_shredded",
      active: true,
      purchased: true,
      workouts: [{
          name: "A: Chest and Shoulder",
          nameShort: "A",
          image: "https://source.unsplash.com/sAKQGX1Krs8/286x190",
          description: "5 workouts to strengthen chest and shoulders.",
          duration: 60,
          exercises: [
              {
                  name: "Incline Barbell Bench Press",
                  videoLink: "https://my.kinobody.com/courses/66901/lectures/5059620",
                  order: 0,
                  instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                  type: "Reverse Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightType: "bar",
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
                          low: 5,
                          high: 6
                      },
                      {
                          low: 6,
                          high: 7
                      },
                      {
                          low: 7,
                          high: 8
                      }
                  ]
              },
              {
                  name: "Flat Dumbbell Bench Press",
                  videoLink: "https://my.kinobody.com/courses/108654/lectures/1589076",
                  order: 1,
                  instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                  type: "Reverse Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightType: "dumbbells",
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
                      }
                  ]
              },
              {
                  name: "Incline Dumbbell Curls",
                  videoLink: "https://my.kinobody.com/courses/108654/lectures/1589113",
                  order: 2,
                  instructions: "Reverse Pyramid - reduce weight by 5lbs per dumbbell for reach additional set. Rest 3 minutes between each set.",
                  type: "Reverse Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
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
                  name: "Rope Hammer Curls",
                  videoLink: "https://www.google.com/",
                  order: 3,
                  instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                  type: "Reverse Pyramid",
                  weightIncrement: 5,
                  startWeight: 2.5,
                  weightType: "rope",
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
                      }
                  ]
              },
              {
                  name: "Bent Over Flyes",
                  videoLink: "https://my.kinobody.com/courses/108654/lectures/1589088",
                  order: 4,
                  instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                  type: "Reverse Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
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
        name: "B: Legs & Bum",
        nameShort: "B",
        image: "https://source.unsplash.com/WvDYdXDzkhs/286x190",
        description: "4 workouts to strengthen your legs and bum.",
        duration: 60,
        exercises: [
            {
                name: "Bulgarian Split Squats",
                videoLink: "https://www.google.com/",
                order: 0,
                instructions: "Reverse Pyramid - reduce weight by 10lbs per dumbbell for reach additional set. Rest 3 minutes between each set.",
                type: "Reverse Pyramid",
                weightIncrement: 5,
                startWeight: 0,
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
                    }
                ]
            },
            {
                name: "Romanian Deadlifts",
                videoLink: "https://www.google.com/",
                order: 1,
                instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                type: "Reverse Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightType: "bar",
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
                name: "Leg Extensions",
                videoLink: "https://www.google.com/",
                order: 2,
                instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                type: "Reverse Pyramid",
                weightIncrement: 15,
                startWeight: 0,
                weightType: "cable",
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
                    }
                ]
            },
            {
                name: "Hanging Weighted Knee Raises",
                videoLink: "https://www.google.com/",
                order: 3,
                instructions: "Same weight for all sets, start with 5lbs on feet",
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightType: "dumbbell",
                pauseDuration: 60,
                warmUps: [],
                sets: [
                    {
                        low: 8,
                        high: 15
                    },
                    {
                        low: 8,
                        high: 15
                    },
                    {
                      low: 8,
                      high: 15
                    }
                ]
            }
        ]
      },
      {
        name: "C: Tri's, Back, and Bi's",
        nameShort: "C",
        image: "https://source.unsplash.com/WdoQio6HPVA/286x190",
        description: "5 workouts to strengthen your triceps, back, and biceps",
        duration: 60,
        exercises: [
            {
                name: "Standing Barbell Press",
                videoLink: "https://www.google.com/",
                order: 0,
                instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                type: "Reverse Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightType: "bar",
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
                name: "Weighted Chin-ups",
                videoLink: "https://www.google.com/",
                order: 1,
                instructions: "Reverse Pyramid - reduce weight by 10lbs for second set. Increase weight by 2.5lbs each time.",
                type: "Reverse Pyramid",
                weightIncrement: 5,
                startWeight: 0,
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
                      high: 6
                  },
                  {
                      low: 4,
                      high: 6
                  }
                ]
            },
            {
                name: "Seated Cable Rows",
                videoLink: "https://www.google.com/",
                order: 2,
                instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                type: "Reverse Pyramid",
                weightIncrement: 20,
                startWeight: 0,
                weightType: "cable",
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
                    }
                ]
            },
            {
                name: "Triceps Rope Pushdown",
                videoLink: "https://www.google.com/",
                order: 3,
                instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 2 minutes between each set.",
                type: "Reverse Pyramid",
                weightIncrement: 5,
                startWeight: 2.5,
                weightType: "rope",
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
                      low: 10,
                      high: 12
                    }
                ]
            },
            {
              name: "Lateral Raises",
              videoLink: "https://www.google.com/",
              order: 4,
              instructions: "Rest Pause - 10 second rest between each.",
              type: "Rest Pause",
              weightIncrement: 5,
              startWeight: 0,
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
    }]
    }
  )

  function createWarriorShredded(){
      Package.create(warrior_shredded, function(err){
          if (err){
              console.log(err)
          }
      })
  }

  module.exports = {warrior_shredded, createWarriorShredded}