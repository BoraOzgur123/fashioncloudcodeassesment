const router = require('express').Router();
const cacheController = require('./controller/cacheController');
const {check} = require('express-validator');

var cacheValidator = new Array(check("key").notEmpty().withMessage("Key cannot be null").isString(),
                                check("value").notEmpty().withMessage("Value cannot be null").isString()
);





router.route("/cache").get([cacheValidator],cacheController.list)
                        .post([cacheValidator],cacheController.create)
                        .delete([cacheValidator],cacheController.deleteAll);
                        
router.route("/cache/:cache_id").put([cacheValidator],cacheController.update);

router.route("/caches/:cache_key").delete([cacheValidator],cacheController.delete)
                                    .get([cacheValidator],cacheController.getByKey);


module.exports = router;










