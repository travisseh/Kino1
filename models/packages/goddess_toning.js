const express = require("express")
const mongoose = require("mongoose")
const Package = require("../model").Package
const Workout = require("../model").Workout
const TemplateExercise = require("../model").TemplateExercise
const TemplateWarmUp = require("../model").TemplateWarmUp
const TemplateSet = require("../model").TemplateSet

const goddess_toning = new Package (
    {
      name: "Goddess Toning",
      url: "goddess_toning",
      active: false,
      purchased: false,
      description: "This programs shows you how to slim down to a low body fat while developing great-looking shape and muscle tone",
      workouts: [{
          name: "A: Legs, Shoulders, Abs",
          nameShort: "A",
          image: "https://source.unsplash.com/DC5akQJyH4I/286x190",
          description: "This will focus on strengthening your legs with an emphasis on glutes, plus your shoulders",
          duration: 60,
          exercises: [
              {
                  name: "Sumo Deadlift Squats",
                  videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                  order: 0,
                  instructions: ["4-6 reps per set.", "Rest 2-3 minutes between sets.", "Use same weight for each set. Add 5 lbs/2.5 kgs after completing upper range of reps for all three sets."],
                  notesFromCourse: ["This movement hits your legs, butt and lower back. It will really build the posterior chain the most - hamstrings, butt and lower back. Sumo deadlifts are one of the best movements to strengthen the posterior chain. This is a tough lift, but if you work hard at it, you will build an incredible butt.",
  
                  "Furthermore, the sumo deadlift is a highly functional movement that will assist you in life. The ability to lift an object off the ground is about as functional as it gets. What’s more, learning the sumo deadlift will teach you how to safely pick up objects. This is because the sumo deadlift teaches you how to keep your back flat and engaged. When people get injured from lifting objects off the ground, it’s because they lift with a rounded back."],
                  type: "Standard Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightIncrementKg: 2,
                    startWeightKg: 0,
                  weightType: "dumbbell",
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
                  videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                  order: 1,
                  instructions: [ 
                  "3-5 reps per set.", "Rest 2-3 minutes between sets.",
                  "Same weight for each set. Add 5 lbs/2.5 kgs after completing upper range of reps for all three sets."],
                  notesFromCourse: ["Forward lunges or step-ups are great exercises to do because they build single leg strength and stability. It forces you to keep both legs of equal strength. Moreover, these two exercises hit the butt very hard, if you do them correctly. The key is to keep the weight on the heel of the foot. This will activate the glutes the hardest."],
                  type: "Standard Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightIncrementKg: 2,
                  startWeightKg: 0,
                  weightType: "dumbbells",
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
                  videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                  order: 2,
                  instructions: [ 
                  "6-10 reps per set.", "Rest 2-3 minutes between sets.",
                  "Same weight for each set. Add 5 lbs/2.5 kgs after completing upper range of reps for all three sets."],
                  notesFromCourse: ["The shoulder press is a great movement to strengthen your shoulders and triceps (back of the arms). The shoulder press will also help support your v shape from your shoulders to your waist.", "You will also develop more tone in your shoulders and arms and even create a little separation between them. This will make you look more fit and toned, instead of just skinny."],
                  type: "Standard Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightIncrementKg: 2,
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
                  videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                  order: 3,
                  instructions: [ "Set 1: 12 reps", "Set 2: 10 reps", "Set 3: 8 reps", "Set 4: 6 reps", "Set 5: 12-15 reps", "Rest 30-60 seconds between sets.",
                  "Each workout you want to try and finish with less rest between sets. When you get down to less than 30 seconds rest between sets, increase the weight."],
                  type: "Standard Pyramid Tweaked",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightIncrementKg: 2,
                  startWeightKg: 0,
                  weightType: "dumbbell",
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
                  videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                  order: 4,
                  instructions: ["10-20 reps per set.", "Rest 1 minute between sets.", "Add weight between feet once you can do 20 reps per set."],
                  notesFromCourse: [ "Lying leg raises and hanging knee raises will strengthen your entire core, from top to bottom.", "As well, you’ll build flexibility along the back of your legs. Leg raise variations also promote a strong low back."],
                  type: "Standard Pyramid",
                  weightIncrement: 5,
                  startWeight: 0,
                  weightIncrementKg: 2,
                  startWeightKg: 0,
                  weightType: "body",
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
                videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                order: 5,
                instructions: ["30-90 seconds per set.", "Rest 1 minute between sets."],
                notesFromCourse: ["Planks and side planks will develop your TVA (transversus abdominis muscle). This is your deep core muscle that acts as your inner corset. A weak TVA leads to a sloppy droopy gut. When you become strong at planks your core will be more firm and taut.", "As well, a strong TVA will injury-proof your body and improve your posture."],
                type: "Hold",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "body",
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
                videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                order: 6,
                instructions: ["60 seconds per set, only one set."],
                notesFromCourse: ["I recommend including a hip bridge to promote great posture, teach your butt how to fire and to develop solid flexibility through your quads, hip flexors and abs. If you get really good at this and build strength, you can even work up to a full bridge.", "A great abs workout is as simple as performing a few sets of lying leg raises or hanging knee raises and 2 sets of a plank hold and finishing off with a one minute hip bridge."],
                type: "Hold",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "body",
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
        image: "https://source.unsplash.com/QP84K2HuIMY/286x190",
        description: "This workout will improve your posture and strengthen your major upper body muscles.",
        duration: 60,
        exercises: [
            {
                name: "Incline Dumbbell Bench Press",
                order: 0,
                instructions: ["6-10 reps each set","Rest 2 minutes between each set", "Same weight for each set. Add 5 lbs/2.5 kgs after completing upper range of reps for all three sets" ],
                notesFromCourse: ["Incline bench and flat bench are the primary movements to build your entire chest. Strengthening your pectorals is a key strategy to give your bust a little lift. By increasing chest strength, you will increase the muscle and shape under your bust, giving it more support."],
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "dumbbells",
                pauseDuration: 150,
                videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
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
                videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                order: 1,
                instructions: ["6-10 reps each set", "Rest 2 minutes between sets"],
                notesFromCourse:[ "Lat pull down is a great exercise to build your upper back and biceps. Eventually you may want to work up to full chin ups, but the first step is to get strong on the lat pull down.", "You can do this with hands facing away or hands facing you. Both variations are great!", "Building up your strength on lat pull downs will help support a nice V shape from your waist to your shoulders. Having a slight V shape will make you look slim, athletic and attractive. Jessica Biel is an example of a girl with a great V shape. She looks feminine and sexy, not overdone. Chin-ups or lat pull downs will help build this beautifully."],
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "cable",
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
                name: "Pushups",
                videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                order: 2,
                instructions: [ "8-15 reps per set", "Rest 2 minutes between sets"],
                notesFromCourse: [ "For push-ups you will be doing a quality set. This simply means stop about 1-2 reps before complete failure. Do a pushup variation that you can do for 8-15 reps."],
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "body",
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
                videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                order: 3,
                instructions: [ "8-12 reps per set", "Rest 2 minutes between each set.", "Same weight for each set. Add 5 lbs/2.5 kgs after completing upper range of reps for all three sets."],
                type: "Standard Pyramid",
                weightIncrement: 2.5,
                startWeight: 2.5,
                weightIncrementKg: 1,
                startWeightKg: 0,
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
                    },
                    {
                      low: 8,
                      high: 12
                    }
                ]
            },
            {
              name: "Bent Over Flyes",
              videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
              order: 4,
              instructions: [ "Set 1: 12 reps", "Set 2: 10 reps", "Set 3: 8 reps", "Set 4: 6 reps", "Set 5: 12-15 reps", "Same weight for all sets except the last. Each workout you want to try and finish this with less rest between sets. When you get down to less than 30 seconds rest between sets, increase the weight."],
              type: "Standard Pyramid Tweaked",
              weightIncrement: 5,
              startWeight: 0,
              weightIncrementKg: 2,
              startWeightKg: 0,
              weightType: "dumbbells",
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
        image: "https://source.unsplash.com/5UbIqV58CW8/286x190",
        description: "This will hit your legs and butt plus arms - making them firmer and more toned",
        duration: 60,
        exercises: [
            {
                name: "Goblet Box Squats",
                videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                order: 0,
                instructions: ["6-8 reps per set.", "Rest 2-3 minutes between sets.", "Same weight for each set. Add 5lbs/2.5kgs after completing upper range of reps for all three sets.", "The goblet squat is performed by holding a single dumbbell in front of your chest. This forces you to keep your chest up. Sitting onto a box forces you to use your butt and hamstring muscles to sit back onto the box."],
                notesFromCourse: ["A goblet squat onto a box is a way to ensure optimal squatting technique and great butt development without as much work onto the quads. Many girls want to keep their legs fit and toned without adding much size to their legs. This workout program will focus on a variety of lower body movements that hit the butt the hardest. This will accomplish the goal of having slim and athletic legs combined with a great booty."],
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "dumbbell",
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
                        low: 6,
                        high: 8
                    }
                ]
            },
            {
                name: "Step-Ups",
                videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                order: 1,
                instructions: [ "6-10 reps per set.", "Rest 2 minutes between sets.", "Start with weaker foot, keep foot on bench. Rest 2 minutes between each set. Same weight for each set. Add 5lbs/2.5kgs after completing upper range of reps for all three sets."],
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
                startWeightKg: 0,
                weightType: "dumbbells",
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
                videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                order: 2,
                instructions: [ "6-10 reps per set.", "Rest 2-3 minutes between sets.", "Same weight for each set. Add 5 lbs/2.5 kgs after completing upper range of reps for all three sets."],
                type: "Standard Pyramid",
                weightIncrement: 5,
                startWeight: 0,
                weightIncrementKg: 2,
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
                videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
                order: 3,
                instructions: [ "8-12 reps per set.", "Rest 2 minutes between sets.", "Same weight each time."],
                type: "Standard Pyramid",
                weightIncrement: 2.5,
                startWeight: 2.5,
                weightIncrementKg: 1,
                startWeightKg: 0,
                weightType: "rope",
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
              name: "Hanging Knee Raises",
              videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
              order: 4,
              instructions: [ "6-10 reps per set.", "Rest 1 minute between sets.", "Same weight for all sets."],
              type: "Standard Pyramid",
              weightIncrement: 5,
              startWeight: 0,
              weightIncrementKg: 2,
              startWeightKg: 0,
              weightType: "body",
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
              videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
              order: 5,
              instructions: ["20-40 seconds per set.", "Rest 1 minute between sets."],
              notesFromCourse: ["Planks and side planks will develop your TVA (transversus abdominis muscle). This is your deep core muscle that acts as your inner corset. A weak TVA leads to a sloppy droopy gut. When you become strong at planks your core will be more firm and taut.", "As well, a strong TVA will injury-proof your body and improve your posture."],
              type: "Hold",
              weightIncrement: 5,
              startWeight: 0,
              weightIncrementKg: 2,
              startWeightKg: 0,
              weightType: "body",
              pauseDuration: 60,
              dropDown: ["Regular", "Arm Straightened", "Outer Leg Lifted", "Feet Elevated", "Holding 10 lbs", "Holding 20 lbs"],
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
              videoLink: "https://my.kinobody.com/courses/66905/lectures/989806",
              order: 6,
              instructions: ["One set only for 60 seconds. Progress to more difficult holds after holding for 60 seconds"],
              type: "Hold",
              weightIncrement: 5,
              startWeight: 0,
              weightIncrementKg: 2,
              startWeightKg: 0,
              weightType: "body",
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
    }]
    }
  )



function createGodessToning(){
      Package.create(goddess_toning,function(err){
      if (err){
          console.log(err)
      }
  })
}


  module.exports = {goddess_toning, createGodessToning}