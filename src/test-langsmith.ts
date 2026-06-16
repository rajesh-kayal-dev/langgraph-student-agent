import "dotenv/config";
import { traceable } from "langsmith/traceable";

const hello = traceable(
  async (name: string) => {
    return `Hello ${name}`;
  },
  {
    name: "hello-test",
    project_name: "langgraph-student-agent",
  }
);

async function main() {
  const result = await hello("Rajesh");

  console.log(result);

  await new Promise((resolve) =>
    setTimeout(resolve, 10000)
  );
}

main();