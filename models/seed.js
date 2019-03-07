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


//PACKAGES
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
                pauseDuration: 150,
                useBar: true,
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
              pauseDuration: 150,
              useBar: true,
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
              pauseDuration: 150,
              special: 15,
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
              pauseDuration: 150,
              useBar: true,
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
              pauseDuration: 150,
              special: 2.5,
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
              pauseDuration: 150,
              special: 20,
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
              pauseDuration: 150,
              special: 57,
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

const goddess_toning = new Package (
  {
    name: "Goddess Toning",
    url: "goddess_toning",
    active: false,
    purchased: false,
    workouts: [{
        name: "A: Legs, Shoulders, Abs",
        nameShort: "A",
        image: "https://source.unsplash.com/DC5akQJyH4I/286x190",
        description: "7 workouts to strengthen legs, shoulders, and Abs.",
        duration: 60,
        exercises: [
            {
                name: "Sumo Deadlift Squats",
                videoLink: "https://my.kinobody.com/courses/66901/lectures/5059620",
                order: 0,
                instructions: "Rest 2-3 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets.",
                type: "Standard Pyramid",
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
                order: 1,
                instructions: "Rest 2-3 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets.",
                type: "Standard Pyramid",
                pauseDuration: 150,
                warmUps: [],
                sets: [
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
                name: "Seated Dumbbell Shoulder Press",
                videoLink: "https://my.kinobody.com/courses/108654/lectures/1589113",
                order: 2,
                instructions: "Rest 2-3 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets.",
                type: "Standard Pyramid",
                pauseDuration: 150,
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
                name: "Lateral Raises",
                videoLink: "https://www.google.com/",
                order: 3,
                instructions: "Same weight for all sets except the last. Pause 30-60 seconds between sets.",
                type: "Standard Pyramid Tweaked",
                pauseDuration: 60,
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
                order: 4,
                instructions: "Same weight for all sets. 1 minute between sets",
                type: "Standard Pyramid",
                pauseDuration: 60,
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
              order: 5,
              instructions: "none",
              type: "Hold",
              pauseDuration: 60,
              dropDown: ["Regular", "Long Lever Plank", "Long Lever + 5 lbs", "Long Lever + 10 lbs", "Long Lever + 15 lbs",],
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
              order: 6,
              instructions: "none",
              type: "Hold",
              pauseDuration: 60,
              dropDown: ["Regular", "Full Bridge Hold", "Full Bridge w/ Band"],
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
      image: "https://source.unsplash.com/CN-6UcL7z2Y/286x190",
      description: "5 workouts to strengthen your chest and back",
      duration: 60,
      exercises: [
          {
              name: "Incline Dumbbell Bench Press",
              order: 0,
              instructions: "Rest 2 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets",
              type: "Standard Pyramid",
              pauseDuration: 150,
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
              order: 1,
              instructions: "Hands facing toward or away. Work toward chin being up",
              type: "Standard Pyramid",
              pauseDuration: 150,
              special: 57,
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
              order: 2,
              instructions: "Knees, then elevated hands, then regular, then feet raised",
              type: "Standard Pyramid",
              pauseDuration: 120,
              dropDown: ["Kneeling", "Standard", "Feet Elevated"],
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
              order: 3,
              instructions: "Rest 2 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets",
              type: "Standard Pyramid",
              pauseDuration: 150,
              special: 20,
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
            order: 4,
            instructions: "Same weight for all sets except the last. Pause 30 seconds between sets. ",
            type: "Standard Pyramid Tweaked",
            pauseDuration: 30,
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
      image: "https://source.unsplash.com/T-hBGkb3-xQ/286x190",
      description: "7 workouts to strengthen your legs and arms.",
      duration: 60,
      exercises: [
          {
              name: "Goblet Box Squats",
              videoLink: "https://www.google.com/",
              order: 0,
              instructions: "Rest 2-3 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets",
              type: "Standard Pyramid",
              pauseDuration: 150,
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
              name: "Step-Ups",
              videoLink: "https://www.google.com/",
              order: 1,
              instructions: "Start with weaker foot, keep foot on bench. Rest 2 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets.",
              type: "Standard Pyramid",
              pauseDuration: 150,
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
              order: 2,
              instructions: "Rest 2 minutes between each set. Same weight for each set. Add 5 lbs after completing upper range of reps for all three sets",
              type: "Standard Pyramid",
              pauseDuration: 150,
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
              order: 3,
              instructions: "Rest 2 minutes between each set. Reduce by 10% each time.",
              type: "Reverse Pyramid",
              pauseDuration: 150,
              special: 57,
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
            order: 4,
            instructions: "Same weight for all sets. 1 minute between sets.",
            type: "Standard Pyramid",
            pauseDuration: 60,
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
            order: 5,
            instructions: "2x per side",
            type: "Hold",
            pauseDuration: 60,
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
            order: 6,
            instructions: "none",
            type: "Hold",
            pauseDuration: 60,
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

const packages_array = [warrior_shredded, goddess_toning]


//WARRIOR A DAY
const incline_barbell_bench_press = new Exercise ({
    name: "Incline Barbell Bench Press",
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
    workout: "A"
  })

const rope_hammer_curls = new Exercise ({
    name: "Rope Hammer Curls",
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
    order: 3,
    packageUrl: "warrior_shredded",
    workout: "A"
  })

const bent_over_flyes = new Exercise ({
    name: "Bent Over Flyes",
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
    workout: "A"
  })


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

const warrior_shredded_array = [
    incline_barbell_bench_press,
    flat_dumbbell_bench_press,
    incline_dumbbell_curls,
    rope_hammer_curls,
    bent_over_flyes,
    bulgarian_split_squats,
    romanian_deadlifts,
    leg_extensions,
    hanging_weighted_knee_raises,
    standing_barbell_press,
    weighted_chinups,
    seated_cable_rows,
    triceps_rope_pushdown,
    lateral_raises]

//GODDESS TONING

//a day

const sumo_deadlift_squats = new Exercise ({
    name: "Sumo Deadlift Squats",
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
    packageUrl: "goddess_toning",
    workout: "A"
    })

const dumbbell_forward_lunges = new Exercise ({
    name: "Dumbbell Forward Lunges",
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
    packageUrl: "goddess_toning",
    workout: "A"
    })

const seated_dumbbell_shoulder_press = new Exercise ({
    name: "Seated Dumbbell Shoulder Press",
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
    packageUrl: "goddess_toning",
    workout: "A"
    })

const lateral_raises_gt = new Exercise ({
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
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 3,
    packageUrl: "goddess_toning",
    workout: "A"
    })

const lying_leg_raises = new Exercise ({
    name: "Lying Leg Raises",
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
    order: 4,
    packageUrl: "goddess_toning",
    workout: "A"
    })

const plank_hold = new Exercise ({
    name: "Plank Hold",
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
    order: 5,
    packageUrl: "goddess_toning",
    workout: "A"
    })

const hip_bridge_hold = new Exercise ({
    name: "Hip Bridge Hold",
    sets: [
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 6,
    packageUrl: "goddess_toning",
    workout: "A"
    })

//b day

const incline_dumbbell_bench_press = new Exercise ({
    name: "Incline Dumbbell Bench Press",
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
    packageUrl: "goddess_toning",
    workout: "B"
    })

const lat_pull_downs = new Exercise ({
    name: "Lat Pull Downs",
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
    packageUrl: "goddess_toning",
    workout: "B"
    })

const pushups = new Exercise ({
    name: "Pushups",
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
    packageUrl: "goddess_toning",
    workout: "B"
    })

const cable_rows = new Exercise ({
    name: "Cable Rows",
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
    packageUrl: "goddess_toning",
    workout: "B"
    })

const bent_over_flyes_gt = new Exercise ({
    name: "Bent Over Flyes",
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
        },
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 4,
    packageUrl: "goddess_toning",
    workout: "B"
    })

//c day

const goblet_box_squats = new Exercise ({
    name: "Goblet Box Squats",
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
    packageUrl: "goddess_toning",
    workout: "C"
    })

const step_ups = new Exercise ({
    name: "Step-Ups",
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
    packageUrl: "goddess_toning",
    workout: "C"
    })

const alternating_dumbbell_curls = new Exercise ({
    name: "Alternating Dumbbell Curls",
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
    packageUrl: "goddess_toning",
    workout: "C"
    })

const triceps_rope_pushdown_gt = new Exercise ({
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
    packageUrl: "goddess_toning",
    workout: "C"
    })

const hanging_knee_raises = new Exercise ({
    name: "Hanging Knee Raises",
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
    order: 4,
    packageUrl: "goddess_toning",
    workout: "C"
    })

const side_plank_hold = new Exercise ({
    name: "Side Plank Hold",
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
    order: 5,
    packageUrl: "goddess_toning",
    workout: "C"
    })

const hip_bridge_hold_2 = new Exercise ({
    name: "Hip Bridge Hold",
    sets: [
        {
            reps: 0,
            weight: 0
        }
    ],
    order: 6,
    packageUrl: "goddess_toning",
    workout: "C"
    })

//array 
const goddess_toning_array =[sumo_deadlift_squats,dumbbell_forward_lunges,
seated_dumbbell_shoulder_press,
lateral_raises_gt,
lying_leg_raises,
plank_hold,
hip_bridge_hold,
incline_dumbbell_bench_press,
lat_pull_downs,
pushups,
cable_rows,
bent_over_flyes_gt,
goblet_box_squats,
step_ups,
alternating_dumbbell_curls,
triceps_rope_pushdown_gt,
hanging_knee_raises,
side_plank_hold,
hip_bridge_hold_2,]


function seedDB(){
    Exercise.collection.drop()
    BodyWeight.collection.drop()
    Package.collection.drop()
    newBodyWeight.save()
    Package.create(packages_array, function(err){
        if (err){
            console.log(err)
        }
    })
    Exercise.create(warrior_shredded_array,function(err){
    if (err) {
        console.log(err)
    }
    })
    Exercise.create(goddess_toning_array,function(err){
        if (err) {
            console.log(err)
        }
    })
}

function seedPackages(){
    Package.collection.drop(function(err, result){
        if (err) {
            console.log (err)
        }
        if (result) {
            Package.create(packages_array, function(err){
                if (err){
                    console.log(err)
                }
            })
        }
    })
}




module.exports = {seedDB, seedPackages}
