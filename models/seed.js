const express = require("express")
const mongoose = require("mongoose")
const Exercise = require("./model").Exercise
const BodyWeight = require("./model").BodyWeight
const Package = require("./model").Package
const packages = require("../modules/storedWorkouts").packages
const Workout = require("./model").Workout
const TemplateExercise = require("./model").TemplateExercise
const TemplateWarmUp = require("./model").TemplateWarmUp
const TemplateSet = require("./model").TemplateSet


const newBodyWeight = new BodyWeight ({
    weight: null
  })
  
const newExercise = new Exercise ({
    name: "Triceps Rope Pushdown",
    warmUps: [
        {
            done: true
        },
        {
            done: true
        }
    ],
    sets: [
        {
            reps: 10,
            weight: 58
        },
        {
          reps: 10,
          weight: 52
        },
        {
          reps: 11,
          weight: 45
        }
    ]
  })
  


function packageCreator(packagesArray){
packagesArray.forEach(function(package){
    Package.create({name: package, active: false})
})
}


function seedDB(){
  Exercise.collection.drop()
  BodyWeight.collection.drop()
  Package.collection.drop()
  packageCreator(packages)
  newExercise.save()
  newBodyWeight.save()
}


const warrior_shredded = new Package (
  {
    name: "Warrior Shredded",
    url: "warrior_shredded",
    active: true,
    purchased: true,
    workouts: [{
        name: "A: Chest and Shoulder",
        nameShort: "A",
        image: "https://source.unsplash.com/dMWL8V7L8G4",
        description: "5 workouts to strengthen chest and shoulders.",
        duration: 60,
        exercises: [
            {
                name: "Incline Barbell Bench Press",
                videoLink: "https://my.kinobody.com/courses/66901/lectures/5059620",
                instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                type: "Reverse Pyramid",
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
                instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                type: "Reverse Pyramid",
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
                name: "Incline Dumbbell Curls",
                videoLink: "https://my.kinobody.com/courses/108654/lectures/1589113",
                instructions: "Reverse Pyramid - reduce weight by 5lbs per dumbbell for reach additional set. Rest 3 minutes between each set.",
                type: "Reverse Pyramid",
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
                instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                type: "Reverse Pyramid",
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
                instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
                type: "Reverse Pyramid",
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
      image: "https://source.unsplash.com/dMWL8V7L8G4",
      description: "4 workouts to strengthen your legs and bum.",
      duration: 60,
      exercises: [
          {
              name: "Bulgarian Split Squats",
              videoLink: "https://www.google.com/",
              instructions: "Reverse Pyramid - reduce weight by 10lbs per dumbbell for reach additional set. Rest 3 minutes between each set.",
              type: "Reverse Pyramid",
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
              instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
              type: "Reverse Pyramid",
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
              instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
              type: "Reverse Pyramid",
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
              instructions: "Same weight for all sets, start with 5lbs on feet",
              type: "Standard Pyramid",
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
      name: "C: Triceps, Back, and Biceps",
      nameShort: "C",
      image: "https://source.unsplash.com/dMWL8V7L8G4",
      description: "5 workouts to strengthen your triceps, back, and biceps",
      duration: 60,
      exercises: [
          {
              name: "Standing Barbell Press",
              videoLink: "https://www.google.com/",
              instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
              type: "Reverse Pyramid",
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
              instructions: "Reverse Pyramid - reduce weight by 10lbs for second set. Increase weight by 2.5lbs each time.",
              type: "Reverse Pyramid",
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
              instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 3 minutes between each set.",
              type: "Reverse Pyramid",
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
              instructions: "Reverse Pyramid - reduce weight by 10% for reach additional set. Rest 2 minutes between each set.",
              type: "Reverse Pyramid",
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
            instructions: "Rest Pause - 10 second rest between each.",
            type: "Rest Pause",
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

const goddess_toning = new Package (
  {
    name: "Goddess Toning",
    url: "goddess_toning",
    active: false,
    purchased: false,
    workouts: [{
        name: "A: Legs, Shoulders, Abs",
        nameShort: "A",
        image: "https://source.unsplash.com/dMWL8V7L8G4",
        description: "7 workouts to strengthen legs, shoulders, and Abs.",
        duration: 60,
        exercises: [
            {
                name: "Sumo Deadlift Squats",
                videoLink: "https://my.kinobody.com/courses/66901/lectures/5059620",
                instructions: "Rest 2-3 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets.",
                type: "Standard Pyramid",
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
                name: "Dumbbell Forward Lunges",
                videoLink: "https://my.kinobody.com/courses/108654/lectures/1589076",
                instructions: "Rest 2-3 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets.",
                type: "Standard Pyramid",
                warmUps: [],
                sets: [
                    {
                        low: 6,
                        high: 10
                    },
                    {
                        low: 6,
                        high: 10
                    },
                    {
                        low: 6,
                        high: 10
                    }
                ]
            },
            {
                name: "Seated Dumbbell Shoulder Press",
                videoLink: "https://my.kinobody.com/courses/108654/lectures/1589113",
                instructions: "Rest 2-3 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets.",
                type: "Standard Pyramid",
                warmUps: [
                    {
                        percent: 60,
                        reps: 5
                    },
                    {
                        percent: 60,
                        reps: 5
                    }
                ],
                sets: [
                    {
                        low: 6,
                        high: 10
                    },
                    {
                        low: 6,
                        high: 10
                    },
                    {
                        low: 6,
                        high: 10
                    }
                ]
            },
            {
                name: "Lateral Raises",
                videoLink: "https://www.google.com/",
                instructions: "Same weight for all sets except the last. Pause 30-60 seconds between sets.",
                type: "Standard Pyramid",
                warmUps: [],
                sets: [
                    {
                        low: null,
                        high: 12
                    },
                    {
                        low: null,
                        high: 10
                    },
                    {
                        low: null,
                        high: 8
                    },
                    {
                        low: null,
                        high: 6
                    },
                    {
                        low: 12,
                        high: 15
                    }
                ]
            },
            {
                name: "Lying Leg Raises",
                videoLink: "https://my.kinobody.com/courses/108654/lectures/1589088",
                instructions: "Same weight for all sets. 1 minute between sets",
                type: "Standard Pyramid",
                warmUps: [],
                sets: [
                    {
                        low: 10,
                        high: 20
                    },
                    {
                        low: 10,
                        high: 20
                    },
                    {
                        low: 10,
                        high: 20
                    }
                ]
            },
            {
              name: "Plank Hold",
              videoLink: "https://my.kinobody.com/courses/108654/lectures/1589088",
              instructions: "none",
              type: "Hold",
              warmUps: [],
              sets: [
                  {
                      low: 30,
                      high: 90
                  },
                  {
                      low: 30,
                      high: 90
                  }
              ]
            },
            {
              name: "Hip Bridge Hold",
              videoLink: "https://my.kinobody.com/courses/108654/lectures/1589088",
              instructions: "none",
              type: "Hold",
              warmUps: [],
              sets: [
                  {
                      low: null,
                      high: 60
                  }
              ]
            }
        ]
    }, 
    {
      name: "B: Chest & Back",
      nameShort: "B",
      image: "https://source.unsplash.com/dMWL8V7L8G4",
      description: "5 workouts to strengthen your chest and back",
      duration: 60,
      exercises: [
          {
              name: "Incline Dumbbell Bench Press",
              instructions: "Rest 2 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets",
              type: "Standard Pyramid",
              videoLink: "https://www.google.com/",
              warmUps: [
                  {
                      percent: 60,
                      reps: 5
                  },
                  {
                      percent: 80,
                      reps: 5
                  }
              ],
              sets: [
                  {
                      low: 6,
                      high: 10
                  },
                  {
                      low: 6,
                      high: 10
                  },
                  {
                      low: 6,
                      high: 10
                  }
              ]
          },
          {
              name: "Lat Pull Downs",
              videoLink: "https://www.google.com/",
              instructions: "Hands facing toward or away. Work toward chin being up",
              type: "Standard Pyramid",
              warmUps: [],
              sets: [
                {
                    low: 6,
                    high: 10
                },
                {
                    low: 6,
                    high: 10
                },
                {
                    low: 6,
                    high: 10
                }
              ]
          },
          {
              name: "Pushups",
              videoLink: "https://www.google.com/",
              instructions: "Knees, then elevated hands, then regular, then feet raised",
              type: "Standard Pyramid",
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
                  }
              ]
          },
          {
              name: "Cable Rows",
              videoLink: "https://www.google.com/",
              instructions: "Rest 2 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets",
              type: "Standard Pyramid",
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
            name: "Bent Over Flyes",
            videoLink: "https://www.google.com/",
            instructions: "Same weight for all sets except the last. Pause 30 seconds between sets. ",
            type: "Standard Pyramid",
            warmUps: [],
            sets: [
                {
                    low: null,
                    high: 12
                },
                {
                    low: null,
                    high: 10
                },
                {
                    low: null,
                    high: 8
                },
                {
                    low: null,
                    high: 6
                },
                {
                    low: 12,
                    high: 15
                }
            ]
          }
      ]
    },
    {
      name: "C: Legs & Arms",
      nameShort: "C",
      image: "https://source.unsplash.com/dMWL8V7L8G4",
      description: "7 workouts to strengthen your legs and arms.",
      duration: 60,
      exercises: [
          {
              name: "Goblet Box Squats",
              videoLink: "https://www.google.com/",
              instructions: "Rest 2-3 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets",
              type: "Standard Pyramid",
              warmUps: [
                  {
                      percent: 60,
                      reps: 5
                  },
                  {
                      percent: 80,
                      reps: 5
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
              name: "Step-Ups ",
              videoLink: "https://www.google.com/",
              instructions: "Start with weaker foot, keep foot on bench. Rest 2 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets.",
              type: "Standard Pyramid",
              warmUps: [],
              sets: [
                {
                    low: 6,
                    high: 10
                },
                {
                    low: 6,
                    high: 10
                },
                {
                    low: 6,
                    high: 10
                }
              ]
          },
          {
              name: "Alternating Dumbbell Curls",
              videoLink: "https://www.google.com/",
              instructions: "Rest 2 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets",
              type: "Standard Pyramid",
              warmUps: [
                  {
                      percent: 60,
                      reps: 5
                  },
                  {
                      percent: 80,
                      reps: 5
                  }
              ],
              sets: [
                  {
                      low: 6,
                      high: 10
                  },
                  {
                      low: 6,
                      high: 10
                  },
                  {
                      low: 6,
                      high: 10
                  }
              ]
          },
          {
              name: "Triceps Rope Pushdown",
              videoLink: "https://www.google.com/",
              instructions: "Rest 2 minutes between each set. Reduce by 10% each time.",
              type: "Reverse Pyramid",
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
            name: "Hanging Knee Raises",
            videoLink: "https://www.google.com/",
            instructions: "Same weight for all sets. 1 minute between sets.",
            type: "Standard Pyramid",
            warmUps: [],
            sets: [
                {
                    low: 6,
                    high: 12
                },
                {
                    low: 6,
                    high: 12
                },
                {
                    low: 6,
                    high: 12
                }
            ]
          },
          {
            name: "Side Plank Hold",
            videoLink: "https://www.google.com/",
            instructions: "2x per side",
            type: "Hold",
            warmUps: [],
            sets: [
                {
                    low: 20,
                    high: 40
                },
                {
                    low: 20,
                    high: 40
                }
            ]
          },
          {
            name: "Hip Bridge Hold",
            videoLink: "https://www.google.com/",
            instructions: "none",
            type: "Hold",
            warmUps: [],
            sets: [
                {
                    low: null,
                    high: 60
                }
            ]
          }
      ]
  }]
  }
)



// warrior_shredded.save()

// goddess_toning.save()



const incline_barbell_bench_press = new Exercise ({
    name: "Incline Barbell Bench Press",
    sets: [
        {
            reps: 3,
            weight: 150
        },
        {
            reps: 6,
            weight: 135
        },
        {
            reps: 7,
            weight: 120
        }
    ],
    order: 0,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

const flat_dumbbell_bench_press = new Exercise ({
    name: "Flat Dumbbell Bench Press",
    sets: [
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 1,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

const incline_dumbbell_curls = new Exercise ({
    name: "Incline Dumbbell Curls",
    sets: [
        {
            reps: 6,
            weight: 30
        },
        {
            reps: 5,
            weight: 35
        },
        {
            reps: 7,
            weight: 25
        }
    ],
    order: 2,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

const rope_hammer_curls = new Exercise ({
    name: "Rope Hammer Curls",
    sets: [
        {
            reps: 8,
            weight: 50
        },
        {
            reps: 10,
            weight: 42
        }
    ],
    order: 3,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

const bent_over_flyes = new Exercise ({
    name: "Bent Over Flyes",
    sets: [
        {
            reps: 15,
            weight: 15
        },
        {
            reps: 5,
            weight: 15
        },
        {
            reps: 4,
            weight: 15
        },
        {
            reps: 4,
            weight: 15
        }
    ],
    order: 4,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

// incline_barbell_bench_press.save(function(err){
//     if (err) {
//         console.log(err)
//     }
// })
// flat_dumbbell_bench_press.save(function(err){
//     if (err) {
//         console.log(err)
//     }
// })
// incline_dumbbell_curls.save(function(err){
//     if (err) {
//         console.log(err)
//     }
// })
// rope_hammer_curls.save(function(err){
//     if (err) {
//         console.log(err)
//     }
// })
// bent_over_flyes.save()


//WARRIOR B DAY

const bulgarian_split_squats = new Exercise ({
    name: "Bulgarian Split Squats",
    sets: [
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 0,
    packageUrl: "warrior_shredded",
    workout: "B"
  })

  const romanian_deadlifts = new Exercise ({
    name: "Romanian Deadlifts",
    sets: [
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 1,
    packageUrl: "warrior_shredded",
    workout: "B"
  })

  const leg_extensions = new Exercise ({
    name: "Leg Extensions",
    sets: [
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 2,
    packageUrl: "warrior_shredded",
    workout: "B"
  })

  const hanging_weighted_knee_raises = new Exercise ({
    name: "Hanging Weighted Knee Raises",
    sets: [
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 3,
    packageUrl: "warrior_shredded",
    workout: "B"
  })

//   bulgarian_split_squats.save()
//   romanian_deadlifts.save()
//   leg_extensions.save()
//   hanging_weighted_knee_raises.save()


//WARRIOR C DAY

const standing_barbell_press = new Exercise ({
    name: "Standing Barbell Press",
    sets: [
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 0,
    packageUrl: "warrior_shredded",
    workout: "C"
  })


const weighted_chinups = new Exercise ({
    name: "Weighted Chin-ups",
    sets: [
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 1,
    packageUrl: "warrior_shredded",
    workout: "C"
    })

const seated_cable_rows = new Exercise ({
    name: "Seated Cable Rows",
    sets: [
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 2,
    packageUrl: "warrior_shredded",
    workout: "C"
    })

const triceps_rope_pushdown = new Exercise ({
    name: "Triceps Rope Pushdown",
    sets: [
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 3,
    packageUrl: "warrior_shredded",
    workout: "C"
    })

const lateral_raises = new Exercise ({
    name: "Lateral Raises",
    sets: [
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 4,
    packageUrl: "warrior_shredded",
    workout: "C"
    })

// standing_barbell_press.save()
// weighted_chinups.save()
// seated_cable_rows.save()
// triceps_rope_pushdown.save()
// lateral_raises.save()


module.exports = seedDB
