import {
  START,
  END,
  StateGraph,
} from "@langchain/langgraph";

import { AgentState } from "../state/agent.state.js";
import { agentNode } from "../nodes/agent.node.js";
import { toolNode } from "../nodes/tool.node.js";
import { shouldContinue } from "./router.js";

const workflow = new StateGraph(AgentState);

workflow.addNode("agent", agentNode);
workflow.addNode("tools", toolNode);

workflow.addEdge(START, "agent");

workflow.addConditionalEdges(
  "agent",
  shouldContinue
);

workflow.addEdge("tools", "agent");

export const graph = workflow.compile();