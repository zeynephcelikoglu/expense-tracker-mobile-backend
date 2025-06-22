import express from "express";
import {sql} from "../config/db.js";
import {createTransaction, deleteTransaction, getTransactionsByUserId, getSummaryTransaction} from "../controllers/transactionsController.js";

const router = express.Router();

router.get("/:userId", getTransactionsByUserId);
router.post("/", createTransaction);
router.delete("/:id", deleteTransaction);
router.get("/summary/:userId", getSummaryTransaction);

export default router;