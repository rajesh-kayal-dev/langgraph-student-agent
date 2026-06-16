import { HumanMessage } from "@langchain/core/messages";
import { model } from "./config/model.js";
import { calculatorTool } from "./tools/calculator.tool.js";
import { graph } from "./graph/agent.graph.js";


async function main() {

  // const modelWithTools = model.bindTools([calculatorTool]);

  // const response = await modelWithTools.invoke([
  //   new HumanMessage(`
  //     You are a helpful assistant.

  //     Answer directly when no tool is required.
  //     Use tools only when necessary.

  //     Question:
  //     What is React?
  //     `),
  // ]);

  // console.log("AI Response:");
  // console.log("Content:");
  // console.log(response.content);

  // console.log("Tool Calls:");
  // console.log(response.tool_calls);
   const result = await graph.invoke({
    messages: [
      new HumanMessage("What is React?")
    ],
  });

  console.log(result.messages);
}

main();