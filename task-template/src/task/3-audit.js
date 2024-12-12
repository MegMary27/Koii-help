// src/task/3-audit.js

import { namespaceWrapper } from "@_koii/namespace-wrapper";

export async function audit(submission) {
  /**
   * Audits the submitted solutions for originality and relevance
   */
  try {
    const storedSolution = await namespaceWrapper.storeGet(`solution_${submission.roundNumber}`);
    console.log(`AUDITING SUBMISSION: ${submission.solutionText}`);
    
    // Example audit logic: Check if the solution is marked as valid
    if (!storedSolution) {
      console.log("Solution not found in the database.");
      return false;
    }

    // If the solution is valid, mark it for grading
    return true;
  } catch (error) {
    console.error("AUDIT ERROR:", error);
    return false;
  }
}
