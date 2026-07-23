"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Bot,
  Send,
  User,
} from "lucide-react";

import { motion } from "framer-motion";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";

import { askConsultant } from "../actions/askConsultant";

interface Props {
  company: string;
  industry: string;
  teamSize: string;
  totalScore: number;
  tier: string;
  executiveSummary: string;
}

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
  time: string;
}

export function AIConsultant({
  company,
  industry,
  teamSize,
  totalScore,
  tier,
  executiveSummary,
}: Props) {
  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState<
    ChatMessage[]
  >([]);

  const [isLoading, setIsLoading] =
    useState(false);

  const bottomRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) return;

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages]);

  const suggestions = [
    "How can I improve my Data score?",
    "What AI tools should I use first?",
    "Create a 6-month AI roadmap.",
    "How can I improve customer engagement?",
  ];

  function currentTime() {
    return new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  async function handleSend(
    question?: string
  ) {
    const text = question ?? message;

    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: text,
        time: currentTime(),
      },
    ]);

    setMessage("");

    setIsLoading(true);

    try {
      const response =
        await askConsultant({
          company,
          industry,
          teamSize,
          totalScore,
          tier,
          executiveSummary,
          question: text,
        });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: response,
          time: currentTime(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong while contacting the AI consultant.",
          time: currentTime(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="rounded-3xl border bg-card p-8 shadow-lg">

      <div className="mb-8">
        <h2 className="flex items-center gap-3 text-3xl font-bold">
          <Bot className="h-8 w-8 text-primary" />

          AI Consultant
        </h2>

        <p className="mt-2 text-muted-foreground">
          Ask follow-up questions about your
          AI Readiness Report.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border bg-muted/30 p-6">

        <div className="grid gap-4 md:grid-cols-2">

          <div>
            <span className="font-semibold">
              Company
            </span>

            <p>{company}</p>
          </div>

          <div>
            <span className="font-semibold">
              Industry
            </span>

            <p>{industry}</p>
          </div>

          <div>
            <span className="font-semibold">
              Team Size
            </span>

            <p>{teamSize}</p>
          </div>

          <div>
            <span className="font-semibold">
              Overall Score
            </span>

            <p>{totalScore}%</p>
          </div>

          <div>
            <span className="font-semibold">
              Tier
            </span>

            <p>{tier}</p>
          </div>

        </div>

        <div className="mt-6">

          <h3 className="font-semibold">
            Executive Summary
          </h3>

          <p className="mt-2 leading-7 text-muted-foreground">
            {executiveSummary}
          </p>

        </div>

      </div>

      {messages.length === 0 && (

        <div className="mb-8">

          <p className="mb-3 text-sm font-medium text-muted-foreground">
            Suggested Questions
          </p>

          <div className="flex flex-wrap gap-2">

            {suggestions.map((item) => (

              <Button
                key={item}
                variant="outline"
                size="sm"
                onClick={() =>
                  handleSend(item)
                }
              >
                {item}
              </Button>

            ))}

          </div>

        </div>

      )}

      <div className="max-h-[550px] space-y-5 overflow-y-auto rounded-2xl border bg-background p-6">

        {messages.map((msg, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >

            <div
              className={`flex max-w-3xl gap-3 ${
                msg.role === "user"
                  ? "flex-row-reverse"
                  : ""
              }`}
            >

              <div className="mt-1">

                {msg.role === "assistant" ? (

                  <Bot className="h-7 w-7 text-primary" />

                ) : (

                  <User className="h-7 w-7 text-primary" />

                )}

              </div>

              <div
                className={`rounded-2xl px-5 py-4 shadow-sm ${
                  msg.role === "assistant"
                    ? "bg-muted"
                    : "bg-primary"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div className="prose prose-sm max-w-none dark:prose-invert">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p
                    className="leading-7 font-medium"
                    style={{ color: "#111827" }}
                  >
                    {msg.content}
                  </p>
                )}

                <p
                  className={`mt-4 text-xs ${
                    msg.role === "assistant"
                      ? "text-muted-foreground"
                      : ""
                  }`}
                  style={
                    msg.role === "user"
                      ? { color: "#4b5563" }
                      : undefined
                  }
                >
                  {msg.time}
                </p>
              </div>

            </div>

          </motion.div>

        ))}

        {isLoading && (

          <div className="flex gap-3">

            <Bot className="mt-1 h-7 w-7 text-primary" />

            <div className="rounded-2xl bg-muted px-5 py-4">

              <div className="flex gap-2">

                <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />

                <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:.15s]" />

                <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:.3s]" />

              </div>

            </div>

          </div>

        )}

        <div ref={bottomRef} />

      </div>

      <div className="mt-6 flex gap-3">

        <Input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          placeholder="Ask your AI consultant..."
          disabled={isLoading}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />

        <Button
          onClick={() =>
            handleSend()
          }
          disabled={
            isLoading ||
            !message.trim()
          }
        >

          <Send className="mr-2 h-4 w-4" />

          Send

        </Button>

      </div>

    </section>
  );
}