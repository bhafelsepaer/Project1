const express = require('express');
const router = express.Router();

/* 실제 사용하려는 라우터 선언 Start. */

const index = require('./index');
const users = require('./users');

/* 실제 사용하려는 라우터 선언 End. */


/* 실제 사용하려는 라우터 호출 Start. */

router.use('/', index);
router.use('/users', users);

/* 실제 사용하려는 라우터 호출 End. */

module.exports = router;
