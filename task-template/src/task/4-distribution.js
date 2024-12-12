// src/task/4-distribution.js

export async function distribution(auditResults) {
    /**
     * Distribute incentives based on the audit results
     */
    try {
      console.log("DISTRIBUTING INCENTIVES");
      const rewards = auditResults.filter(result => result.accepted); // Filter out accepted solutions
      const highestReward = rewards.length > 0 ? rewards[0].bounty : 0;
      
      // Example: Distribute the bounty to the contributor with the most accepted solutions
      console.log(`Distributing bounty: ${highestReward}`);
      // Further logic to send the reward to the contributor
    } catch (error) {
      console.error("DISTRIBUTION ERROR:", error);
    }
  }
  