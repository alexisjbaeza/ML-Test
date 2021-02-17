const { Router } = require("express");
const { itemGet, itemsSearch} = require("../controllers/item.controllers");
const router = Router();

router.get("/api/items/:id", itemGet);
router.get("/api/items", itemsSearch);

module.exports = router;
