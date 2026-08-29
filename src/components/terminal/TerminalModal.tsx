"use client";

import React, { useState, useEffect, useRef } from "react";
import { personalInfo } from "@/data/personal";
import { projectsData } from "@/data/projects";
import { X, Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="text-secondary text-xs font-mono space-y-1">
          <p className="text-accent-light font-bold">
            Mina Lotfy Saad — .NET Backend Developer CLI [Version 1.0.0]
          </p>
          <p className="text-muted">
            Type <span className="text-foreground font-semibold">&apos;help&apos;</span> to see available commands or <span className="text-foreground font-semibold">&apos;exit&apos;</span> to close.
          </p>
        </div>
      ),
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();

    let output: React.ReactNode;

    switch (cleanCmd) {
      case "help":
        output = (
          <div className="space-y-1 text-xs font-mono text-secondary">
            <p className="text-foreground font-bold">AVAILABLE COMMANDS:</p>
            <p>• <span className="text-accent-light">whoami</span> — Identity, role, and location</p>
            <p>• <span className="text-accent-light">skills</span> — Key backend technologies</p>
            <p>• <span className="text-accent-light">projects</span> — Featured production systems</p>
            <p>• <span className="text-accent-light">arch</span> — Clean Architecture layer map</p>
            <p>• <span className="text-accent-light">contact</span> — Email, LinkedIn, and GitHub links</p>
            <p>• <span className="text-accent-light">cv</span> — Download resume PDF</p>
            <p>• <span className="text-accent-light">clear</span> — Clear terminal output</p>
            <p>• <span className="text-accent-light">exit</span> — Close terminal panel</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="text-xs font-mono text-secondary space-y-1">
            <p><strong className="text-foreground">Name:</strong> {personalInfo.name}</p>
            <p><strong className="text-foreground">Role:</strong> {personalInfo.role}</p>
            <p><strong className="text-foreground">Location:</strong> {personalInfo.location}</p>
            <p><strong className="text-foreground">Status:</strong> {personalInfo.availability} ({personalInfo.relocation})</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="text-xs font-mono text-secondary space-y-1.5">
            <p className="text-accent-light font-bold">CORE BACKEND CAPABILITIES:</p>
            <p>• <strong className="text-foreground">Backend:</strong> C#, ASP.NET Core Web API, .NET 9, REST APIs</p>
            <p>• <strong className="text-foreground">Databases:</strong> SQL Server, Entity Framework Core, LINQ, Redis</p>
            <p>• <strong className="text-foreground">Architecture:</strong> Clean Architecture, SOLID, Repository, Unit of Work, Specification Pattern</p>
            <p>• <strong className="text-foreground">Security:</strong> ASP.NET Identity, JWT Authentication, Role-Based Access Control (RBAC)</p>
            <p>• <strong className="text-foreground">Libraries & Tools:</strong> FluentValidation, AutoMapper, Swagger, Docker, Git, xUnit, Moq</p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="text-xs font-mono text-secondary space-y-2">
            <p className="text-accent-light font-bold">PRODUCTION-STYLE PROJECTS:</p>
            {projectsData.map((p, idx) => (
              <div key={p.id} className="pl-2 border-l border-border">
                <p className="text-foreground font-semibold">0{idx + 1}. {p.title}</p>
                <p className="text-muted text-[11px]">{p.shortDescription}</p>
                <a href={p.githubUrl} target="_blank" rel="noreferrer" className="text-accent-light underline text-[11px]">
                  {p.githubUrl}
                </a>
              </div>
            ))}
          </div>
        );
        break;

      case "arch":
        output = (
          <div className="text-xs font-mono text-secondary space-y-1 leading-tight bg-surface/50 p-3 rounded border border-border">
            <p className="text-accent-light font-bold">CLEAN ARCHITECTURE BACKEND FLOW:</p>
            <pre className="text-[11px] text-foreground font-mono">
{`[CLIENT] → HTTPS JSON + JWT Bearer
    ↓
[PRESENTATION] → ASP.NET Core Controllers / Exception Middleware
    ↓
[APPLICATION]  → Use Cases / FluentValidation / DTOs
    ↓
[DOMAIN]       → Entities / Value Objects / Contracts (Pure Core)
    ↓
[INFRASTRUCTURE] → EF Core 9 / SQL Server / Redis Cache`}
            </pre>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs font-mono text-secondary space-y-1">
            <p><strong className="text-foreground">Email:</strong> {personalInfo.email}</p>
            <p><strong className="text-foreground">GitHub:</strong> {personalInfo.github}</p>
            <p><strong className="text-foreground">LinkedIn:</strong> {personalInfo.linkedin}</p>
          </div>
        );
        break;

      case "cv":
        window.open(personalInfo.cvUrl, "_blank");
        output = (
          <p className="text-xs font-mono text-emerald-400">
            ✓ Triggering download for {personalInfo.cvUrl}...
          </p>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      case "exit":
        onClose();
        return;

      default:
        output = (
          <p className="text-xs font-mono text-red-400">
            command not found: &apos;{cmd}&apos;. Type &apos;help&apos; for list of commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0B0B0E] border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-[#111114]">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 font-mono text-xs text-secondary flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-accent-light" />
              mina@backend-cli:~
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded text-secondary hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal History Screen */}
        <div className="p-4 overflow-y-auto space-y-4 flex-1 font-mono text-xs bg-[#09090C]">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-muted">
                <span className="text-accent-light font-bold">mina@portfolio:~$</span>
                <span className="text-foreground">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={scrollRef} />
        </div>

        {/* Command Input Bar */}
        <form
          onSubmit={handleFormSubmit}
          className="p-3 border-t border-border bg-[#111114] flex items-center gap-2"
        >
          <span className="font-mono text-xs text-accent-light font-bold shrink-0">
            mina@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type 'help', 'skills', 'projects', 'arch'..."
            className="flex-1 bg-transparent font-mono text-xs text-foreground placeholder:text-muted focus:outline-none"
          />
          <button
            type="submit"
            className="p-1 rounded text-muted hover:text-accent-light transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
};
