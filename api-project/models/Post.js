const mongoose = require('mongoose')

const Schema = mongoose.Schema;

/**
 * @openapi
 * components:
 *      schemas:
 *          Post:
 *              required:
 *                  - title
 *                  - userId
 *              properties:
 *                  title:
 *                      type: string
 *                      example: test openapi
 *                  body:
 *                      type: string
 *                      example: test body message
 *                  userId:
 *                      type: integer
 *                      format: int64
 *                      minimun: 0
 *                      example: 35
 */
const PostSchema = new Schema({
    title:{
        type: String,
        required: 'Enter the title'
    },
    userId: {
        type: String
    },
    body: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
}); 

module.exports = {PostSchema}