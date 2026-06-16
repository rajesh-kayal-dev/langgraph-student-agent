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
use the search tool.

For calculations, use calculator.
`,
    },
    ...state.messages,
  ]);

  return {
    messages: [response],
  };
}