const express = require('express');
const { getPosts, addNewPost, getPostByID } = require('../controllers/PostController');
const helloRouter = express.Router();

helloRouter.route('/')
    /**
     * @openapi
     * /v2/posts:
     *   get:
     *     description: Welcome to swagger-jsdoc!
     *     responses:
     *       200:
     *         description: Returns a mysterious string.
     *         content:
     *              application/json:
     *                  schema:
     *                      type: array
     *                      items: 
     *                          $ref: "#/components/schemas/Post"
     */
    .get(getPosts)
    .post(addNewPost)

helloRouter.route('/:postId')
    .get(getPostByID)


module.exports = helloRouter;