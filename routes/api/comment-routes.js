const router = require('express').Router();

const {addComment, removeComment, addReply, removeReply} = require('../../controllers/comment-controller');

// set up route to add comment by pizza id
router.route('/:pizzaId').post(addComment)

    // route to delete comments

    router.route('/:pizzaId/:commentId').put(addReply).delete(removeComment);

    router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;