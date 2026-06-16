import { HumanMessage } from "@langchain/core/messages";
import { graph } from "./graph/agent.graph.js";

async function main() {
  const result = await graph.invoke({
    messages: [
      new HumanMessage("What is react?")
    ],
  });

  console.log(
    result.messages[result.messages.length - 1].content
  );
}

main();