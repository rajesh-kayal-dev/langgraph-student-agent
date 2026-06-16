import {
  START,
  END,
  StateGraph,
} from "@langchain/langgraph";

import { AgentState } from "../state/agent.state.js";
import { agentNode } from "../nodes/agent.node.js";

const workflow = new StateGraph(AgentState);

workflow.addNode("agent", agentNode);

workflow.addEdge(START, "agent");
workflow.addEdge("agent", END);

export const graph = workflow.compile();