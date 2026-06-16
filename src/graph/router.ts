import { AIMessage } from "@langchain/core/messages";
import { END } from "@langchain/langgraph";

export function shouldContinue(state: any) {
  const lastMessage =
    state.messages[state.messages.length - 1];

  if (
    lastMessage instanceof AIMessage &&
    lastMessage.tool_calls?.length
  ) {
    return "tools";
  }

  return END;
}