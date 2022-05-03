const router = require('express').Router();

const {addComment, removeComment} = require('../../controllers/comment-controller');

// set up route to add comment by pizza id
router.route('/:pizzaId').post(addComment)

    // route to delete comments

    router.route('/:pizzaId/:commentId').delete(removeComment)

module.exports = router;