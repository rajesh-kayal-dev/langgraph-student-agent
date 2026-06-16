import { tool } from "@langchain/core/tools";
import { z } from "zod";

export const calculatorTool = tool(
  async ({ expression }) => {
    try {
      const result = Function(
        `"use strict"; return (${expression})`
      )();

      return `Result: ${result}`;
    } catch {
      return "Invalid mathematical expression";
    }
  },
  {
    name: "calculator",
    description:
      "Use this tool for mathematical calculations like addition, subtraction, multiplication and division.",
    schema: z.object({
      expression: z
        .string()
        .describe("Mathematical expression to evaluate"),
    }),
  }
);