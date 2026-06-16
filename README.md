## Project MVP


### User Story

> As a user, I want to ask questions to an AI assistant. The assistant should decide whether it can answer directly or needs to use a tool. If a tool is needed, it should call the appropriate tool, get the result, and then answer me.

### MVP Features

#### Direct Answer

User:

```txt
What is React?
```

Flow:

```txt
User
 ↓
Agent
 ↓
Direct Answer
 ↓
End
```

#### Calculator Tool

User:

```txt
What is 456 * 23?
```

Flow:

```txt
User
 ↓
Agent
 ↓
Calculator Tool
 ↓
Agent
 ↓
Answer
 ↓
End
```

#### Tavily Search Tool

User:

```txt
Who won the latest IPL final?
```

Flow:

```txt
User
 ↓
Agent
 ↓
Tavily Search
 ↓
Agent
 ↓
Answer
 ↓
End
```

This introduces a real-world tool and internet access without making the project complex.

### Graph

```txt
START
  |
  v
AGENT
  |
  +----------------+
  |                |
  | tool needed?   |
  |                |
  +----------------+
      |       |
     yes      no
      |       |
      v       v
   TOOLS     END
      |
      v
    AGENT
      |
      v
     END
```

This is the exact pattern shown in the LangGraph docs using an Agent node, Tool node, and conditional edges. ([LangChain Docs][1])

### Tech Stack

```txt
TypeScript
Node.js
LangChain
LangGraph
LangSmith
Gemini 2.5 Flash
Tavily Search
Zod
dotenv
```

### Free APIs

**Gemini**

* Free API key from Google AI Studio
* Enough for learning

**Tavily**

* Free tier
* Designed specifically for AI agents
* Officially used throughout LangChain examples

### Concepts You'll Learn

Phase 1:

```txt
Tools
Tool Calling
Messages
State
Nodes
Edges
Conditional Edges
```

Phase 2:

```txt
LangSmith Tracing
Streaming
Structured Output
```

### Resume-Worthy Project Name

Instead of:

```txt
Weather Agent
```

Use:

```txt
AI Student Assistant Agent
```

or

```txt
LangGraph Tool-Calling Agent
```

These sound much stronger during interviews.



