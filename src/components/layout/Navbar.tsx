"use client";

import Link from "next/link";

import {
  ArrowLeft,
  BrainCircuit,
  Home,
} from "lucide-react";

import { Button } from "@/src/components/ui/button";
import { Container } from "@/src/components/layout/Container";

import { ExportPdfButton } from "@/src/features/report/components/ExportPdfButton";

interface NavbarProps {
  variant?: "landing" | "assessment" | "report";
}

export function Navbar({
  variant = "landing",
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-xl">

      <Container>

        <div className="flex h-16 items-center justify-between">

          {/* Logo */}

          <Link
            href="/"
            className="flex items-center gap-2 font-bold"
          >
            <BrainCircuit className="h-6 w-6 text-primary" />

            <span>AI Readiness</span>
          </Link>

          {/* Landing Navbar */}

          {variant === "landing" && (
            <>
              <nav className="hidden gap-8 text-sm md:flex">

                <a href="#features">
                  Features
                </a>

                <a href="#how-it-works">
                  How it Works
                </a>

                <a href="#faq">
                  FAQ
                </a>

              </nav>

              <Link href="/assessment">
                <Button
                  size="sm"
                  className="cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Button>
              </Link>
            </>
          )}

          {/* Assessment Navbar */}

          {variant === "assessment" && (
            <Link href="/">
              <Button
                variant="ghost"
                className="cursor-pointer"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />

                Exit Assessment
              </Button>
            </Link>
          )}

          {/* Report Navbar */}

          {variant === "report" && (
            <div className="flex items-center gap-3">

              <ExportPdfButton />

              <Link href="/">
                <Button className="cursor-pointer">
                  <Home className="mr-2 h-4 w-4" />

                  Home
                </Button>
              </Link>

            </div>
          )}

        </div>

      </Container>

    </header>
  );
}