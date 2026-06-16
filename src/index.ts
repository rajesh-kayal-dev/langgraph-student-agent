import { HumanMessage } from "@langchain/core/messages";
import { model } from "./config/model.js";

async function main() {
  const response = await model.invoke([
    new HumanMessage("What is Node.js in one sentence?")
  ]);

  console.log(response.content);
}

main();