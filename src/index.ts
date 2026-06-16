import { HumanMessage } from "@langchain/core/messages";
import { graph } from "./graph/agent.graph.js";

async function main() {
  try {
    const result = await graph.invoke({
      messages: [
        new HumanMessage("Who won the latest IPL final?")
      ],
    });

    console.log(
      result.messages[result.messages.length - 1].content
    );
  } catch (error) {
    console.error("AI request failed:", error);
  }
}

main();