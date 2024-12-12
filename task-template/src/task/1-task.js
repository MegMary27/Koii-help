// src/task/1-task.js

import { namespaceWrapper } from "@_koii/namespace-wrapper";

export async function task(roundNumber) {
  // Define the task, set bounty, and store the task details
  const taskDetails = {
    taskId: roundNumber,
    title: "Research Gap Identification",
    description: "Submit solutions to fill previously unidentified research gaps",
    bounty: 100, // Example bounty
    status: "open", // Task status (e.g., open, closed)
    solutions: []
  };

  try {
    console.log(`EXECUTE TASK FOR ROUND ${roundNumber}`);
    await namespaceWrapper.storeSet(`task_${roundNumber}`, taskDetails); // Store task details in the blockchain
    console.log("Task details saved:", taskDetails);
  } catch (error) {
    console.error("EXECUTE TASK ERROR:", error);
  }
}
