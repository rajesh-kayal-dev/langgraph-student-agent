import { model } from "../config/model.js";
import { calculatorTool } from "../tools/calculator.tool.js";

const modelWithTools = model.bindTools([
  calculatorTool,
]);

export async function agentNode(state: any) {
  const response = await modelWithTools.invoke([
    {
      role: "system",
      content:
        "You are a helpful assistant. Answer directly when no tool is required. Use tools only when necessary.",
    },
    ...state.messages,
  ]);

  return {
    messages: [response],
  };
}