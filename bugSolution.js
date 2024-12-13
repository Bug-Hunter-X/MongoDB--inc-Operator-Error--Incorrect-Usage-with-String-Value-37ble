```javascript
// Correct use of $inc operator for updating a field in MongoDB
db.collection.updateOne({fieldName: 'value'}, {$inc: {fieldName: 1}});
```