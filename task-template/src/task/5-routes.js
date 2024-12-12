import express from "express";
import { task } from "./1-task.js";
import { submission } from "./2-submission.js";
import { audit } from "./3-audit.js";

const router = express.Router();

// Route to manually trigger the task
router.get("/run-task", async (req, res) => {
  try {
    const roundNumber = req.query.round || 1;
    await task(roundNumber);
    res.send(`Task executed for round ${roundNumber}`);
  } catch (error) {
    res.status(500).send(`Error executing task: ${error.message}`);
  }
});

// Route to submit a solution
router.post("/submit-solution", async (req, res) => {
  try {
    const { roundNumber, solutionText } = req.body;
    const result = await submission(roundNumber, solutionText);  // Ensure the submission function expects and uses these parameters correctly
    res.json({ message: "Solution submitted successfully", result });
  } catch (error) {
    res.status(500).send(`Error submitting solution: ${error.message}`);
  }
});

// Route to audit a solution
router.get("/audit-solution", async (req, res) => {
  try {
    const { roundNumber, solutionText } = req.query;  // Ensure this matches the function signature of audit
    const result = await audit({ roundNumber, solutionText });  // Make sure audit handles this correctly
    res.json({ auditResult: result });
  } catch (error) {
    res.status(500).send(`Error auditing solution: ${error.message}`);
  }
});

// Export router as routes so it can be used in other files
export default router;
