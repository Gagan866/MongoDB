Q1: Retrieve posts that have the tag "nosql" but NOT "mongodb"

db.posts.find({
  tags: "nosql",
  tags: { $ne: "mongodb" }
});


Q2: Return only the number of likes for each post

db.posts.find({}, { likes: 1, _id: 0 });


Q3: Aggregation to count number of comments per post

db.posts.aggregate([
  {
    $project: {
      user_id: 1,
      content: 1,
      comment_count: { $size: "$comments" }
    }
  }
]);


Q4: Keep only the latest 5 comments (most recent timestamps)

db.posts.updateMany(
  {},
  [
    {
      $set: {
        comments: {
          $slice: [
            {
              $sortArray: {
                input: "$comments",
                sortBy: { timestamp: -1 }
              }
            },
            5
          ]
        }
      }
    }
  ]
);
);
