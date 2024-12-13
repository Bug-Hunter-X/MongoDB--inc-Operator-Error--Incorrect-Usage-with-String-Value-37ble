# MongoDB $inc Operator Error

This example demonstrates an error related to the MongoDB `$inc` operator. The `$inc` operator is used to increment a numeric field in a document.  However, in this example, a string value is provided to the `$inc` operator which results in an unexpected behavior. The code is written in Javascript.  The solution demonstrates the correct usage.

## Bug
The incorrect use of the `$inc` operator with a string value. This leads to an error or unexpected result, because the `$inc` operator expects a numeric value.

## Solution
The solution demonstrates how to correctly increment a numeric field with `$inc` using the correct numeric type.