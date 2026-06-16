import { HumanMessage } from "@langchain/core/messages";
import { model } from "./config/model.js";
import {calculatorTool} from "./tools/calculator.tool.js";

async function main() {

  const result = await calculatorTool.invoke({
    expression: "25 * 4 + 10"
  });

  console.log(result);

  // const response = await model.invoke([
  //   new HumanMessage("What is Node.js in one sentence?")
  // ]);

  // console.log(response.content);
}

main();