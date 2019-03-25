const express = require("express")
const mongoose = require("mongoose")
const Package = require("../model").Package
const Workout = require("../model").Workout
const TemplateExercise = require("../model").TemplateExercise
const TemplateWarmUp = require("../model").TemplateWarmUp
const TemplateSet = require("../model").TemplateSet


const superhero_bulk = new Package (
    {
      name: "Superhero Bulk",
      url: "superhero_bulk",
      active: true,
      purchased: true,
      workouts: [{
          name: "A: Shoulder and Back",
          nameShort: "A",
          image: "https://source.unsplash.com/sAKQGX1Krs8/286x190",
          description: "5 workouts to strengthen chest and shoulders.",
          duration: 60,
          exercises: [
            {
                name: "Weighted Pull-ups",
                videoLink: "https://www.google.com/",
                order: 0,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 20 lbs for second set. Increase weight by 2.5lbs each time."],
                notesFromCourse: ["Notes From Course:", "The weighted pull-up is a fantastic movement for building your upper back, LATs and biceps. The weighted pull-up is so effective, I had to stop doing them as my back was becoming too wide.", "Weighted pull-ups are superior to any other pulling exercise. If you can’t do pull-ups yet, then start with the LAT pulldown machine with hands facing you. As you build strength and lean down, you will eventually be able to do a few bodyweight chinups. Gradually build up to eight unbroken reps before adding weight."],
                type: "Reverse Pyramid",
                weightIncrement: 2.5,
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
                name: "Standing Barbell Press",
                videoLink: "https://www.google.com/",
                order: 1,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                notesFromCourse: ["Notes From Course:", "This exercise is incredible at developing your shoulders, triceps and even core strength. It’s also one of the toughest exercises known to man. The standing press used to be considered the king of upper-body strength. As you get stronger with this exercise, your shoulders, upper chest and arms will thicken. Also, you will develop a rock-solid and stable core and lower body."],
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
                  name: "Bent Over Dumbbell Rowes",
                  videoLink: "https://www.google.com",
                  order: 2,
                  instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                  type: "Reverse Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightType: "dumbbells",
                  pauseDuration: 150,
                  warmUps: [],
                  sets: [
                      {
                          low: 4,
                          high: 6
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
                name: "Incline Dumbbell Flyes",
                videoLink: "https://my.kinobody.com/courses/108654/lectures/1589088",
                order: 3,
                instructions: [],
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
                        low: 3,
                        high: 5
                    },
                    {
                        low: 3,
                        high: 5
                    },
                    {
                        low: 3,
                        high: 5
                    }
                ]
            },
            {
                name: "Lateral Raises",
                videoLink: "https://www.google.com/",
                order: 4,
                instructions: ["Instructions:", "Rest Pause - 10 second rest between each."],
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightType: "dumbbells",
                pauseDuration: 10,
                warmUps: [],
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
                ]
              }
              
          ]
      }, 
      {
        name: "B: Lower Body & Abs",
        nameShort: "B",
        image: "https://source.unsplash.com/WvDYdXDzkhs/286x190",
        description: "6 workouts to strengthen your legs and bum.",
        duration: 60,
        exercises: [
            {
                name: "Bulgarian Split Squats",
                videoLink: "https://www.google.com/",
                order: 0,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10lbs per dumbbell for reach additional set. Rest 3 minutes between each set."],
                notesFromCourse: ["Notes From Course:", "Of course, leg training is pivotal for a well-balanced physique. Two of my favorite movements are front squats and Bulgarian split squats. Both exercises do an amazing job at building strong thighs. Moreover, they both hit the VMO nicely (the teardrop muscle that develops well with training). This gives your legs more thickness near the knee, delivering an aesthetic muscle proportion.", 
                
                "If you prefer traditional back squats, you can opt for those instead."],
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
                        low: 4,
                        high: 6
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
                name: "Romanian Deadlifts",
                videoLink: "https://www.google.com/",
                order: 1,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                notesFromCourse: ["Notes From Course:", "This deadlift variation is my preferred version. It's safer on the lower back and does a great job developing the hamstrings, glutes and low back. In fact, if you want to build a great butt (which, I mean, who doesn't?), then this exercise should definitely be included in your routine."],
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
                name: "Leg Extensions",
                videoLink: "https://www.google.com/",
                order: 2,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                type: "Reverse Pyramid",
                weightIncrement: 15,
                startWeight: 10,
                weightType: "cable",
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
                name: "Hanging Leg Raises",
                videoLink: "https://www.google.com/",
                order: 3,
                instructions: ["Instructions:", "Same weight for all sets, start with 5lbs on feet"],
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightType: "bodyweight",
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
        name: "C: Heavy Chest Training",
        nameShort: "C",
        image: "https://source.unsplash.com/WdoQio6HPVA/286x190",
        description: "5 workouts to strengthen your triceps, back, and biceps",
        duration: 60,
        exercises: [
            {
                name: "Incline Barbell Bench Press",
                videoLink: "https://my.kinobody.com/courses/66901/lectures/5059620",
                order: 0,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                notesFromCourse: ["Notes From Course:", "This exercise is critical for the warrior physique. The incline bench effectively targets the chest, front deltoids and triceps. By performing the bench on an incline, you hit the upper chest harder than you would with a flat-bench press. This exercise develops a sculpted chest that looks like a plate of armor.", "A lot of people focus way too much on flat bench. They end up over-developing their lower pecs. This gives their chest a boob look. If you want to have a masculine chest, then focus more on the incline bench."],
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
                        low: 4,
                        high: 6
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
                name: "Flat Barbell Bench Press",
                videoLink: "https://www.google.com/",
                order: 1,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                notesFromCourse: ["Notes From Course:", "This exercise is incredible at developing your shoulders, triceps and even core strength. It’s also one of the toughest exercises known to man. The standing press used to be considered the king of upper-body strength. As you get stronger with this exercise, your shoulders, upper chest and arms will thicken. Also, you will develop a rock-solid and stable core and lower body."],
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
                        low: 4,
                        high: 6
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
                name: "Seated Cable Rows",
                videoLink: "https://www.google.com/",
                order: 2,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                type: "Rest Pause",
                weightIncrement: 20,
                startWeight: 0,
                weightType: "cable",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                    {
                        low: 12,
                        high: 15
                    },
                    {
                        low: 3,
                        high: 5
                    },
                    {
                        low: 3,
                        high: 5
                    },
                    {
                        low: 3,
                        high: 5
                    }
                ]
            },
            {
                name: "Incline Dumbbell Curls",
                videoLink: "https://my.kinobody.com/courses/108654/lectures/1589113",
                order: 3,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 5lbs per dumbbell for reach additional set. Rest 3 minutes between each set."],
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
                        low: 4,
                        high: 6
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
                name: "Cable Rope Pushdown",
                videoLink: "https://www.google.com/",
                order: 4,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 2 minutes between each set."],
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
            }
        ]
      },
      {
        name: "A Phase 2: Heavy Chest Training",
        nameShort: "A2",
        image: "https://source.unsplash.com/WdoQio6HPVA/286x190",
        description: "5 workouts to strengthen your triceps, back, and biceps",
        duration: 60,
        exercises: [
            {
                name: "Incline Barbell Bench Press",
                videoLink: "https://my.kinobody.com/courses/66901/lectures/5059620",
                order: 0,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                notesFromCourse: ["Notes From Course:", "This exercise is critical for the warrior physique. The incline bench effectively targets the chest, front deltoids and triceps. By performing the bench on an incline, you hit the upper chest harder than you would with a flat-bench press. This exercise develops a sculpted chest that looks like a plate of armor.", "A lot of people focus way too much on flat bench. They end up over-developing their lower pecs. This gives their chest a boob look. If you want to have a masculine chest, then focus more on the incline bench."],
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
                        low: 4,
                        high: 6
                    },
                    {
                        low: 6,
                        high: 8
                    },
                ]
            },
            {
                name: "Flat Barbell Bench Press",
                videoLink: "https://www.google.com/",
                order: 1,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                notesFromCourse: ["Notes From Course:", "This exercise is incredible at developing your shoulders, triceps and even core strength. It’s also one of the toughest exercises known to man. The standing press used to be considered the king of upper-body strength. As you get stronger with this exercise, your shoulders, upper chest and arms will thicken. Also, you will develop a rock-solid and stable core and lower body."],
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
                        low: 4,
                        high: 6
                    },
                    {
                        low: 6,
                        high: 8
                    },
                ]
            },
            {
                name: "Seated Cable Rows",
                videoLink: "https://www.google.com/",
                order: 2,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                type: "Rest Pause",
                weightIncrement: 20,
                startWeight: 0,
                weightType: "cable",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                    {
                        low: 12,
                        high: 15
                    },
                    {
                        low: 3,
                        high: 5
                    },
                    {
                        low: 3,
                        high: 5
                    },
                    {
                        low: 3,
                        high: 5
                    }
                ]
            },
            {
                name: "Incline Dumbbell Curls",
                videoLink: "https://my.kinobody.com/courses/108654/lectures/1589113",
                order: 3,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 5lbs per dumbbell for reach additional set. Rest 3 minutes between each set."],
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
                        low: 4,
                        high: 6
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
                name: "Cable Rope Pushdown",
                videoLink: "https://www.google.com/",
                order: 4,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 2 minutes between each set."],
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
            }
        ]
      },
      {
        name: "B Phase 2: Lower Body & Abs",
        nameShort: "B2",
        image: "https://source.unsplash.com/WvDYdXDzkhs/286x190",
        description: "6 workouts to strengthen your legs and bum.",
        duration: 60,
        exercises: [
            {
                name: "Bulgarian Split Squats",
                videoLink: "https://www.google.com/",
                order: 0,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10lbs per dumbbell for reach additional set. Rest 3 minutes between each set."],
                notesFromCourse: ["Notes From Course:", "Of course, leg training is pivotal for a well-balanced physique. Two of my favorite movements are front squats and Bulgarian split squats. Both exercises do an amazing job at building strong thighs. Moreover, they both hit the VMO nicely (the teardrop muscle that develops well with training). This gives your legs more thickness near the knee, delivering an aesthetic muscle proportion.", 
                
                "If you prefer traditional back squats, you can opt for those instead."],
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
                        low: 4,
                        high: 6
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
                name: "Romanian Deadlifts",
                videoLink: "https://www.google.com/",
                order: 1,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                notesFromCourse: ["Notes From Course:", "This deadlift variation is my preferred version. It's safer on the lower back and does a great job developing the hamstrings, glutes and low back. In fact, if you want to build a great butt (which, I mean, who doesn't?), then this exercise should definitely be included in your routine."],
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
                name: "Leg Extensions",
                videoLink: "https://www.google.com/",
                order: 2,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                type: "Reverse Pyramid",
                weightIncrement: 15,
                startWeight: 10,
                weightType: "cable",
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
                name: "Hanging Leg Raises",
                videoLink: "https://www.google.com/",
                order: 3,
                instructions: ["Instructions:", "Same weight for all sets, start with 5lbs on feet"],
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightType: "bodyweight",
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
        name: "C: Shoulder and Back",
        nameShort: "C2",
        image: "https://source.unsplash.com/sAKQGX1Krs8/286x190",
        description: "5 workouts to strengthen chest and shoulders.",
        duration: 60,
        exercises: [
          {
              name: "Weighted Pull-ups",
              videoLink: "https://www.google.com/",
              order: 0,
              instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 20 lbs for second set. Increase weight by 2.5lbs each time."],
              notesFromCourse: ["Notes From Course:", "The weighted pull-up is a fantastic movement for building your upper back, LATs and biceps. The weighted pull-up is so effective, I had to stop doing them as my back was becoming too wide.", "Weighted pull-ups are superior to any other pulling exercise. If you can’t do pull-ups yet, then start with the LAT pulldown machine with hands facing you. As you build strength and lean down, you will eventually be able to do a few bodyweight chinups. Gradually build up to eight unbroken reps before adding weight."],
              type: "Reverse Pyramid",
              weightIncrement: 2.5,
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
              name: "Standing Barbell Press",
              videoLink: "https://www.google.com/",
              order: 1,
              instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
              notesFromCourse: ["Notes From Course:", "This exercise is incredible at developing your shoulders, triceps and even core strength. It’s also one of the toughest exercises known to man. The standing press used to be considered the king of upper-body strength. As you get stronger with this exercise, your shoulders, upper chest and arms will thicken. Also, you will develop a rock-solid and stable core and lower body."],
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
                name: "Bent Over Dumbbell Rowes",
                videoLink: "https://www.google.com",
                order: 2,
                instructions: ["Instructions:", "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set."],
                type: "Reverse Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightType: "dumbbells",
                pauseDuration: 150,
                warmUps: [],
                sets: [
                    {
                        low: 4,
                        high: 6
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
              name: "Incline Dumbbell Flyes",
              videoLink: "https://my.kinobody.com/courses/108654/lectures/1589088",
              order: 3,
              instructions: [],
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
                      low: 3,
                      high: 5
                  },
                  {
                      low: 3,
                      high: 5
                  },
                  {
                      low: 3,
                      high: 5
                  }
              ]
          },
          {
              name: "Lateral Raises",
              videoLink: "https://www.google.com/",
              order: 4,
              instructions: ["Instructions:", "Rest Pause - 10 second rest between each."],
              type: "Standard Pyramid",
              weightIncrement: 5,
              startWeight: 0,
              weightType: "dumbbells",
              pauseDuration: 10,
              warmUps: [],
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
              ]
            }
            
        ]
      }
    
    ]
    }
  )

  function createSuperHeroBulk(){
      Package.create(superhero_bulk, function(err){
          if (err){
              console.log(err)
          }
      })
  }

  module.exports = {superhero_bulk, createSuperHeroBulk}