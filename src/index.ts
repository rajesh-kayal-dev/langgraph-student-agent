import { HumanMessage } from "@langchain/core/messages";
import { graph } from "./graph/agent.graph.js";

async function main() {
  const result = await graph.invoke({
    messages: [
      new HumanMessage("Who won the latest IPL final?")
    ],
  });

  const finalMessage =
    result.messages[result.messages.length - 1];

  console.log(finalMessage.content);
}

main();