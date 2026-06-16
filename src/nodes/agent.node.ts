import { model } from "../config/model.js";
import { tools } from "../tools/index.js";

const modelWithTools = model.bindTools(tools);

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