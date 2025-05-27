Q2: Find all products in the Electronics category with a stock less than 50

db.products.find({
  category: "Electronics",
  stock: { $lt: 50 }
});


Q3: Update all products tagged as "wireless" to also include "bluetooth"

db.products.updateMany(
  { tags: "wireless", tags: { $ne: "bluetooth" } },
  { $addToSet: { tags: "bluetooth" } }
);


Q4: Calculate average rating of each product

db.products.aggregate([
  {
    $project: {
      name: 1,
      average_rating: { $avg: "$ratings" }
    }
  }
]);


Q5: Automatically delete documents older than 1 year based on created_at

db.products.createIndex(
  { created_at: 1 },
  { expireAfterSeconds: 31536000 } // 365 days in seconds
);
