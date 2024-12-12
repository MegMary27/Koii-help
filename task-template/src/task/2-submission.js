// src/task/2-submission.js

import { namespaceWrapper } from "@_koii/namespace-wrapper";
import axios from "axios"; // For web scraping

export async function submission(roundNumber, solutionText) {
  /**
   * Submit the task solution and verify originality using web scraping
   * Returns a string of max 512 bytes to be submitted on chain
   */
  try {
    console.log(`MAKE SUBMISSION FOR ROUND ${roundNumber}`);
    
    // Web scraping logic to verify solution originality (check if the gap has been identified before)
    const webScrapingUrl = `https://scholar.google.com/=${encodeURIComponent(solutionText)}`;
    const response = await axios.get(webScrapingUrl);
    
    if (response.data && response.data.length > 0) {
      console.log("Research gap identified previously.");
      throw new Error("The solution is not original.");
    }

    // Save the solution if it's original
    const submissionDetails = { solutionText, roundNumber };
    await namespaceWrapper.storeSet(`solution_${roundNumber}`, submissionDetails);
    console.log("Solution submitted and stored.");
    
    return submissionDetails;
  } catch (error) {
    console.error("MAKE SUBMISSION ERROR:", error);
    throw error;
  }
}
