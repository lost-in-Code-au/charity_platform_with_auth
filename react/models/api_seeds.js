use passport_local_mongoose
// db.dropDatabase()

var memberCampaigns = {}

memberCampaigns.details [
  {
    title: "StreetChange",
    image: "",
    description: "How people out individually"
  }],
  [{
    title: "HouseChange",
    image: "",
    description: "How people out individually"
  }],
  [{
    title: "ClothsChange",
    image: "",
    description: "How people out individually"
  }],
  [{
    title: "BikeChange",
    image: "",
    description: "How people out individually"
  }
]


db.Campaigns.insert(memberCampaigns)
db.Campaigns.find()


//run mongod then type "mongo < api_seeds.js" in terminal
