db.posts.insertMany([
  {
    user_id: "u111",
    content: "Just deployed my first Node.js app!",
    likes: 45,
    comments: [
      { user: "u201", text: "Congrats!", timestamp: ISODate("2024-10-01T12:30:00Z") }
    ],
    tags: ["nodejs", "backend"],
    created_at: ISODate("2024-10-01T12:00:00Z")
  },
  {
    user_id: "u112",
    content: "Learning full-stack development is so satisfying.",
    likes: 70,
    comments: [],
    tags: ["webdev", "fullstack"],
    created_at: ISODate("2024-09-20T15:15:00Z")
  },
  {
    user_id: "u113",
    content: "Python is love ❤️",
    likes: 88,
    comments: [
      { user: "u211", text: "Absolutely!", timestamp: ISODate("2024-09-22T08:10:00Z") }
    ],
    tags: ["python"],
    created_at: ISODate("2024-09-22T08:00:00Z")
  },
  {
    user_id: "u114",
    content: "React hooks make life easy.",
    likes: 55,
    comments: [
      { user: "u115", text: "Totally agree!", timestamp: ISODate("2024-09-18T11:45:00Z") }
    ],
    tags: ["react", "javascript"],
    created_at: ISODate("2024-09-18T11:30:00Z")
  },
  {
    user_id: "u115",
    content: "Weekend project: Build a portfolio site.",
    likes: 21,
    comments: [],
    tags: ["webdev", "html", "css"],
    created_at: ISODate("2024-10-06T14:00:00Z")
  },
  {
    user_id: "u116",
    content: "Who else is preparing for hackathons?",
    likes: 60,
    comments: [
      { user: "u119", text: "I am!", timestamp: ISODate("2024-10-02T13:20:00Z") }
    ],
    tags: ["coding", "hackathon"],
    created_at: ISODate("2024-10-02T13:00:00Z")
  },
  {
    user_id: "u117",
    content: "Docker is amazing for managing environments.",
    likes: 42,
    comments: [],
    tags: ["docker", "devops"],
    created_at: ISODate("2024-10-04T09:00:00Z")
  },
  {
    user_id: "u118",
    content: "Dark mode UI is underrated.",
    likes: 50,
    comments: [],
    tags: ["ui", "design"],
    created_at: ISODate("2024-09-28T17:00:00Z")
  },
  {
    user_id: "u119",
    content: "MongoDB aggregation is powerful 💪",
    likes: 68,
    comments: [
      { user: "u120", text: "Just learned it yesterday!", timestamp: ISODate("2024-09-27T10:45:00Z") }
    ],
    tags: ["mongodb", "aggregation"],
    created_at: ISODate("2024-09-27T10:30:00Z")
  },
  {
    user_id: "u120",
    content: "JavaScript destructuring is so clean!",
    likes: 32,
    comments: [],
    tags: ["javascript", "es6"],
    created_at: ISODate("2024-09-24T16:20:00Z")
  },
  {
    user_id: "u121",
    content: "VS Code is the best editor.",
    likes: 75,
    comments: [
      { user: "u122", text: "Totally agreed!", timestamp: ISODate("2024-09-21T10:15:00Z") }
    ],
    tags: ["vscode", "tools"],
    created_at: ISODate("2024-09-21T10:00:00Z")
  },
  {
    user_id: "u122",
    content: "GitHub Copilot is crazy helpful!",
    likes: 95,
    comments: [],
    tags: ["github", "copilot", "ai"],
    created_at: ISODate("2024-09-30T09:40:00Z")
  },
  {
    user_id: "u123",
    content: "My portfolio finally went live 😍",
    likes: 39,
    comments: [
      { user: "u125", text: "Drop the link!", timestamp: ISODate("2024-09-19T20:15:00Z") }
    ],
    tags: ["portfolio", "showcase"],
    created_at: ISODate("2024-09-19T20:00:00Z")
  },
  {
    user_id: "u124",
    content: "Debugging JavaScript at 2AM hits different.",
    likes: 27,
    comments: [],
    tags: ["js", "debugging"],
    created_at: ISODate("2024-09-16T02:30:00Z")
  },
  {
    user_id: "u125",
    content: "Any good resources for learning MongoDB?",
    likes: 10,
    comments: [
      { user: "u119", text: "Check MongoDB University!", timestamp: ISODate("2024-09-15T18:00:00Z") }
    ],
    tags: ["mongodb", "resources"],
    created_at: ISODate("2024-09-15T17:45:00Z")
  },
  {
    user_id: "u126",
    content: "Deploying with Netlify is so smooth.",
    likes: 33,
    comments: [],
    tags: ["netlify", "deployment"],
    created_at: ISODate("2024-10-03T14:30:00Z")
  },
  {
    user_id: "u127",
    content: "Redux makes state management manageable.",
    likes: 44,
    comments: [],
    tags: ["redux", "react"],
    created_at: ISODate("2024-10-01T10:10:00Z")
  },
  {
    user_id: "u128",
    content: "Why is CSS still so tricky? 😭",
    likes: 29,
    comments: [
      { user: "u111", text: "Flexbox & Grid save me daily!", timestamp: ISODate("2024-09-14T07:15:00Z") }
    ],
    tags: ["css", "frontend"],
    created_at: ISODate("2024-09-14T07:00:00Z")
  },
  {
    user_id: "u129",
    content: "What's your go-to tech stack?",
    likes: 65,
    comments: [
      { user: "u123", text: "MERN!", timestamp: ISODate("2024-09-13T08:30:00Z") }
    ],
    tags: ["stack", "tech"],
    created_at: ISODate("2024-09-13T08:00:00Z")
  },
  {
    user_id: "u130",
    content: "Angular or React — your pick?",
    likes: 48,
    comments: [],
    tags: ["angular", "react"],
    created_at: ISODate("2024-09-11T18:45:00Z")
  }
]);
