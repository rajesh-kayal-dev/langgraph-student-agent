import "dotenv/config";
import { searchTool } from "./tools/search.tool.js";

async function main() {
  const result = await searchTool.invoke({
    query: "latest Node.js version",
  });

  console.log(result);
}

main();