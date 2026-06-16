import { model } from "../config/model.js";
import { tools } from "../tools/index.js";

const modelWithTools = model.bindTools(tools);

export async function agentNode(state: any) {
  const response = await modelWithTools.invoke([
    {
      role: "system",
      content: `
You are a helpful assistant.

For current events, news, sports results, and latest versions,
you MUST use the search tool.

For calculations, use calculator.
`,
    },
    ...state.messages,
  ]);

  console.log("\n=== AGENT RESPONSE ===");
  console.log("Content:", response.content);
  console.log("Tool Calls:", response.tool_calls);

  return {
    messages: [response],
  };
}