import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  FileCode,
  Trophy,
  Terminal,
  Sparkles,
  Layers,
  Copy,
  Check,
  Users
} from "lucide-react";

// 3D Cube Faces Definition with explicit 3D geometry for all 6 faces
const FACES = [
  {
    id: "developer",
    filename: "engineer.ts",
    label: "Architecture",
    icon: FileCode,
    iconColor: "text-blue-600 dark:text-blue-400",
    badge: "Core Architecture",
    targetRot: { x: 0, y: 0 },
    faceTransform: "rotateY(0deg) translateZ(var(--tz, 210px))",
  },
  {
    id: "milestones",
    filename: "hackathons.json",
    label: "Wins & Team",
    icon: Trophy,
    iconColor: "text-amber-500",
    badge: "National Wins",
    targetRot: { x: 0, y: -90 },
    faceTransform: "rotateY(90deg) translateZ(var(--tz, 210px))",
  },
  {
    id: "terminal",
    filename: "terminal.sh",
    label: "AI Runtime",
    icon: Terminal,
    iconColor: "text-purple-600 dark:text-purple-400",
    badge: "Live Execution",
    targetRot: { x: -90, y: 0 },
    faceTransform: "rotateX(90deg) translateZ(var(--tz, 210px))",
  },
  {
    id: "metrics",
    filename: "metrics.config",
    label: "Impact",
    icon: Sparkles,
    iconColor: "text-emerald-500",
    badge: "Proven Record",
    targetRot: { x: 0, y: 90 },
    faceTransform: "rotateY(-90deg) translateZ(var(--tz, 210px))",
  },
  {
    id: "architecture",
    filename: "cloud.json",
    label: "Cloud & APIs",
    icon: Layers,
    iconColor: "text-sky-500",
    badge: "Full-Stack System",
    targetRot: { x: 90, y: 0 },
    faceTransform: "rotateX(-90deg) translateZ(var(--tz, 210px))",
  },
];

// Multi-directional auto-spin sequence covering all 4 directions (Right, Up, Left, Down) without any blanks!
const ROTATION_SEQUENCE = [
  { faceIndex: 0, rot: { x: 0, y: 0 } },       // 1. Front (engineer.ts)
  { faceIndex: 1, rot: { x: 0, y: -90 } },     // 2. Spins Right (hackathons.json)
  { faceIndex: 2, rot: { x: -90, y: 0 } },     // 3. Flips Upwards (terminal.sh)
  { faceIndex: 3, rot: { x: 0, y: 90 } },      // 4. Spins Left (metrics.config)
  { faceIndex: 4, rot: { x: 90, y: 0 } },      // 5. Flips Downwards (cloud.json)
];

function Rotating3DBox() {
  const [seqIndex, setSeqIndex] = useState(0);
  const [activeFaceIndex, setActiveFaceIndex] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);

  const containerRef = useRef(null);

  // Multi-directional continuous auto-rotation
  useEffect(() => {
    if (isHovered || isDragging) return;

    const timer = setInterval(() => {
      setSeqIndex((prev) => {
        const next = (prev + 1) % ROTATION_SEQUENCE.length;
        const target = ROTATION_SEQUENCE[next];
        setRotation(target.rot);
        setActiveFaceIndex(target.faceIndex);
        return next;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered, isDragging]);

  // Direct tab click to rotate the 3D box directly to that face
  const handleTabClick = (index) => {
    setActiveFaceIndex(index);
    setRotation(FACES[index].targetRot);
    setDragOffset({ x: 0, y: 0 });
  };

  // Holographic 3D mouse parallax in every direction
  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStart.x;
      const deltaY = e.clientY - dragStart.y;
      setDragOffset({
        x: -deltaY * 0.35,
        y: deltaX * 0.35,
      });
      return;
    }

    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const normX = x / rect.width - 0.5;
    const normY = y / rect.height - 0.5;

    setTilt({
      x: -normY * 16,
      y: normX * 16,
    });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setRotation((prev) => ({
        x: prev.x + dragOffset.x,
        y: prev.y + dragOffset.y,
      }));
      setDragOffset({ x: 0, y: 0 });
    }
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
    setTilt({ x: 0, y: 0 });
    setDragOffset({ x: 0, y: 0 });
  };

  const handleCopy = useCallback(() => {
    let snippet = "";
    if (activeFaceIndex === 0) {
      snippet = `// TypeScript Architecture
interface SoftwareArchitect {
  name: "Panati Nitesh";
  role: "Full-Stack & AI Engineer";
  team: "codexcreators";
  coreStack: ["React", "PyTorch", "Node.js", "MongoDB", "TypeScript"];
  specialty: "AI Architecture & Scalable Web Systems";
  status: "Available to Build 🚀";
};`;
    } else if (activeFaceIndex === 1) {
      snippet = `// Major Hackathons & Honors
{
  "team": "codexcreators (Active Member)",
  "smart_india_hackathon_2025": "1st Place Winner 🏆",
  "meta_pytorch_scaler_2026": "Grand Finalist (Top National Teams)",
  "quant_a_thon_2026": "Runner-Up 🥈 (Quantitative AI)",
  "internship": "Full-Stack Developer Intern @ JB Portals"
}`;
    } else if (activeFaceIndex === 2) {
      snippet = `$ npx codexcreators build --prod
✔ Initializing PyTorch AI deep learning engine... [LOADED]
✔ Real-time WebSockets & collaborative APIs... [ONLINE]
✔ Role-based centralized governance (SIH 2025)... [DEPLOYED]
➜ System Online: Panati Nitesh portfolio operational.`;
    } else if (activeFaceIndex === 3) {
      snippet = `// Verified Impact & Stats
- 3+ National Hackathon Victories & Finalist Titles
- Member of Team Codexcreators
- 9.1 CGPA (Diploma CSE) | 8.45 CGPA (B.E CSE Data Science)
- 6+ Deployed Full-Stack & AI Applications`;
    } else {
      snippet = `// Full-Stack & Cloud Architecture
{
  "frontend": "React.js • Tailwind CSS • Responsive UI",
  "backend": "Node.js • Express • REST APIs",
  "ai_pipeline": "PyTorch • Deep Learning Models",
  "database": "MongoDB • High-Concurrency Schemas"
}`;
    }

    navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [activeFaceIndex]);

  const totalRotX = rotation.x + dragOffset.x + tilt.x;
  const totalRotY = rotation.y + dragOffset.y + tilt.y;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        "--tz": "clamp(150px, 34vw, 215px)",
      }}
      className="relative w-full max-w-lg select-none perspective-1400 py-4 flex flex-col items-center cursor-grab active:cursor-grabbing"
    >
      {/* 3D Multi-color Ambient Aura Glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-indigo-500/20 to-purple-600/30 dark:from-blue-500/20 dark:via-indigo-500/15 dark:to-purple-500/20 rounded-[3.5rem] blur-3xl opacity-75 dark:opacity-45 pointer-events-none transition-opacity duration-700" />

      {/* Dynamic 3D Floor Shadow Grounding */}
      <div
        className="absolute -bottom-6 w-3/4 h-8 bg-black/25 dark:bg-black/60 blur-xl rounded-[100%] pointer-events-none transition-all duration-700"
        style={{
          transform: `scale(${1 + Math.abs(totalRotX) / 360}, ${1 - Math.abs(totalRotX) / 450})`,
        }}
      />

      {/* Floating 3D Badge: "Available to Build" */}
      <div
        className="absolute -top-2 right-4 z-40 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 dark:bg-[#1E1E22]/95 backdrop-blur-md border border-slate-200/90 dark:border-white/10 shadow-xl transition-transform duration-300"
        style={{
          transform: "translateZ(45px)",
        }}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span className="font-mono text-[11px] font-bold text-slate-800 dark:text-stone-200">
          Available to Build
        </span>
        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
          3D
        </span>
      </div>

      {/* Main 3D Cube Scene */}
      <div
        className="relative w-full h-[470px] sm:h-[450px] preserve-3d"
        style={{
          transform: `translateZ(calc(-1 * var(--tz, 210px))) rotateX(${totalRotX}deg) rotateY(${totalRotY}deg)`,
          transition: isDragging ? "none" : "transform 0.9s cubic-bezier(0.2, 0.9, 0.3, 1)",
        }}
      >
        {/* FACE 0: engineer.ts (Front Face) */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-white dark:bg-[#16161A] border-2 border-slate-300/80 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between backface-hidden"
          style={{
            transform: FACES[0].faceTransform,
          }}
        >
          <SpecularGlint />
          <HeaderBar
            activeId={FACES[activeFaceIndex]?.id || "developer"}
            onTabClick={handleTabClick}
            handleCopy={handleCopy}
            copied={copied}
          />
          <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto flex-grow flex flex-col justify-center text-left">
            <div className="space-y-1">
              <p className="text-slate-400 dark:text-stone-500">{"// TypeScript Architecture"}</p>
              <p>
                <span className="text-purple-600 dark:text-purple-400 font-semibold">interface </span>
                <span className="text-blue-600 dark:text-blue-300">SoftwareArchitect </span>
                <span>{"{"}</span>
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-400">name</span>: <span className="text-amber-600 dark:text-amber-300">"Panati Nitesh"</span>;
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-400">role</span>: <span className="text-amber-600 dark:text-amber-300">"Full-Stack & AI Engineer"</span>;
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-400">team</span>:{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">"codexcreators"</span>;
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-400">coreStack</span>: [
                <span className="text-amber-600 dark:text-amber-300">"React"</span>,{" "}
                <span className="text-amber-600 dark:text-amber-300">"PyTorch"</span>,{" "}
                <span className="text-amber-600 dark:text-amber-300">"Node.js"</span>
                ];
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-400">specialty</span>: <span className="text-amber-600 dark:text-amber-300">"AI Architecture & UI/UX"</span>;
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-400">status</span>: <span className="text-emerald-600 dark:text-emerald-400 font-semibold">"Available to Build 🚀"</span>;
              </p>
              <p>{"};"}</p>
              <p className="pt-2 text-slate-400 dark:text-stone-500">{"// Turning ideas into production reality"}</p>
            </div>
          </div>
          <FooterBar filename="engineer.ts" note="TypeScript Architecture" />
        </div>

        {/* FACE 1: hackathons.json (Right Face - Rotates horizontally) */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-white dark:bg-[#16161A] border-2 border-slate-300/80 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between backface-hidden"
          style={{
            transform: FACES[1].faceTransform,
          }}
        >
          <SpecularGlint />
          <HeaderBar
            activeId={FACES[activeFaceIndex]?.id || "milestones"}
            onTabClick={handleTabClick}
            handleCopy={handleCopy}
            copied={copied}
          />
          <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto flex-grow flex flex-col justify-center text-left">
            <div className="space-y-1">
              <p className="text-slate-400 dark:text-stone-500">{"// National Hackathons & Team Codexcreators"}</p>
              <p>{"{"}</p>
              <p className="pl-4 flex items-center gap-1.5">
                <span className="text-blue-600 dark:text-blue-300">"team"</span>:{" "}
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                  "codexcreators"
                </span>
                ,
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-300">"smart_india_hackathon_2025"</span>:{" "}
                <span className="text-amber-600 dark:text-amber-300">"1st Place Winner 🏆"</span>,
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-300">"meta_pytorch_scaler_2026"</span>:{" "}
                <span className="text-amber-600 dark:text-amber-300">"Grand Finalist (Top Teams)"</span>,
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-300">"quant_a_thon_2026"</span>:{" "}
                <span className="text-amber-600 dark:text-amber-300">"Runner-Up 🥈 (National Level)"</span>,
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-300">"experience"</span>:{" "}
                <span className="text-amber-600 dark:text-amber-300">"Full Stack Intern @ JB Portals"</span>
              </p>
              <p>{"}"}</p>
              <p className="pt-2 text-slate-400 dark:text-stone-500">{"// Verified rapid builder under 48h pressure"}</p>
            </div>
          </div>
          <FooterBar filename="hackathons.json" note="National Hackathon Victories" />
        </div>

        {/* FACE 2: terminal.sh (Top Face - Flips vertically upwards) */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-white dark:bg-[#16161A] border-2 border-slate-300/80 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between backface-hidden"
          style={{
            transform: FACES[2].faceTransform,
          }}
        >
          <SpecularGlint />
          <HeaderBar
            activeId={FACES[activeFaceIndex]?.id || "terminal"}
            onTabClick={handleTabClick}
            handleCopy={handleCopy}
            copied={copied}
          />
          <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto flex-grow flex flex-col justify-center text-left space-y-2">
            <p className="text-slate-500 dark:text-stone-400">$ npx codexcreators build --prod</p>
            <p className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <Sparkles size={13} className="shrink-0" />
              <span>Initializing PyTorch AI engine... [LOADED]</span>
            </p>
            <p className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <Sparkles size={13} className="shrink-0" />
              <span>Real-time WebSockets & REST APIs... [ONLINE]</span>
            </p>
            <p className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
              <Sparkles size={13} className="shrink-0" />
              <span>Education governance (SIH 2025)... [DEPLOYED]</span>
            </p>
            <p className="text-slate-800 dark:text-stone-200 pt-1">
              ➜ <span className="text-blue-600 dark:text-blue-400 font-bold">System Online:</span> Panati Nitesh portfolio operational.
            </p>
            <p className="text-slate-400 dark:text-stone-500 text-[11px]">
              ➜ SEO: 1000/10 • Lighthouse: 100/100
            </p>
          </div>
          <FooterBar filename="terminal.sh" note="Production AI Engine Online" />
        </div>

        {/* FACE 3: metrics.config (Left Face - Rotates horizontally) */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-white dark:bg-[#16161A] border-2 border-slate-300/80 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between backface-hidden"
          style={{
            transform: FACES[3].faceTransform,
          }}
        >
          <SpecularGlint />
          <HeaderBar
            activeId={FACES[activeFaceIndex]?.id || "metrics"}
            onTabClick={handleTabClick}
            handleCopy={handleCopy}
            copied={copied}
          />
          <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto flex-grow flex flex-col justify-center text-left">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5">
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400 block">3+</span>
                <span className="text-[11px] text-slate-600 dark:text-stone-400 font-medium">National Hackathon Wins</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5">
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <Users size={14} /> codexcreators
                </span>
                <span className="text-[11px] text-slate-600 dark:text-stone-400 font-medium">Core Member</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5">
                <span className="text-xl font-bold text-amber-600 dark:text-amber-400 block">9.1 / 8.45</span>
                <span className="text-[11px] text-slate-600 dark:text-stone-400 font-medium">CGPA (CS / Data Sci)</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/5">
                <span className="text-2xl font-bold text-purple-600 dark:text-purple-400 block">6+</span>
                <span className="text-[11px] text-slate-600 dark:text-stone-400 font-medium">Production Systems</span>
              </div>
            </div>
            <p className="pt-3 text-[11px] text-slate-500 dark:text-stone-400">
              ⚡ Ready to architect and deliver high-impact software worldwide.
            </p>
          </div>
          <FooterBar filename="metrics.config" note="Verified Track Record" />
        </div>

        {/* FACE 4: cloud.json (Bottom Face - Flips vertically downwards) */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-white dark:bg-[#16161A] border-2 border-slate-300/80 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between backface-hidden"
          style={{
            transform: FACES[4].faceTransform,
          }}
        >
          <SpecularGlint />
          <HeaderBar
            activeId={FACES[activeFaceIndex]?.id || "architecture"}
            onTabClick={handleTabClick}
            handleCopy={handleCopy}
            copied={copied}
          />
          <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto flex-grow flex flex-col justify-center text-left">
            <div className="space-y-1">
              <p className="text-slate-400 dark:text-stone-500">{"// Full-Stack Architecture & Cloud Services"}</p>
              <p>{"{"}</p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-300">"frontend"</span>: <span className="text-amber-600 dark:text-amber-300">"React.js • Vite • Tailwind CSS"</span>,
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-300">"backend"</span>: <span className="text-amber-600 dark:text-amber-300">"Node.js • Express • REST APIs"</span>,
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-300">"ai_models"</span>: <span className="text-amber-600 dark:text-amber-300">"PyTorch • Neural Networks • Inference"</span>,
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-300">"database"</span>: <span className="text-amber-600 dark:text-amber-300">"MongoDB • PostgreSQL • Scalable Queries"</span>,
              </p>
              <p className="pl-4">
                <span className="text-blue-600 dark:text-blue-300">"devops"</span>: <span className="text-amber-600 dark:text-amber-300">"Docker • GitHub Actions • Cloud Deploy"</span>
              </p>
              <p>{"}"}</p>
              <p className="pt-2 text-slate-400 dark:text-stone-500">{"// Built for speed, security, and extreme scale"}</p>
            </div>
          </div>
          <FooterBar filename="cloud.json" note="Cloud & Architecture" />
        </div>

        {/* FACE 5: Back Face - Guarantees 360 degree coverage during manual 3D dragging */}
        <div
          className="absolute inset-0 w-full h-full rounded-[2.5rem] bg-white dark:bg-[#16161A] border-2 border-slate-300/80 dark:border-white/15 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between backface-hidden"
          style={{
            transform: "rotateY(180deg) translateZ(var(--tz, 210px))",
          }}
        >
          <SpecularGlint />
          <HeaderBar
            activeId={FACES[activeFaceIndex]?.id || "developer"}
            onTabClick={handleTabClick}
            handleCopy={handleCopy}
            copied={copied}
          />
          <div className="p-6 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto flex-grow flex flex-col justify-center text-left">
            <p className="text-slate-400 dark:text-stone-500">{"// Rapid Prototyping & Engineering"}</p>
            <div className="space-y-2 pt-2">
              <p className="text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
                <Sparkles size={14} className="shrink-0" />
                <span>Smart India Hackathon 2025: Champion 🏆</span>
              </p>
              <p className="text-blue-600 dark:text-blue-400 flex items-center gap-2">
                <Trophy size={14} className="shrink-0" />
                <span>Meta × PyTorch Hackathon: Grand Finalist</span>
              </p>
              <p className="text-amber-600 dark:text-amber-400 flex items-center gap-2">
                <Trophy size={14} className="shrink-0" />
                <span>QUANT-A-THON '26: Runner-Up 🥈</span>
              </p>
              <p className="text-slate-600 dark:text-stone-300 pt-2 text-[11px]">
                Active Member of Team Codexcreators • Building Impactful Products
              </p>
            </div>
          </div>
          <FooterBar filename="milestones.ts" note="Verified Honors & History" />
        </div>

      </div>
    </div>
  );
}

// 3D Specular Highlight Line along top edge
function SpecularGlint() {
  return (
    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400/50 dark:via-blue-400/40 to-transparent pointer-events-none" />
  );
}

// Subcomponent: Header Bar for each 3D face
function HeaderBar({ activeId, onTabClick, handleCopy, copied }) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-slate-100/90 dark:bg-[#1A1A20] border-b border-slate-200/80 dark:border-white/5">
      {/* Traffic Lights */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]/90 border border-[#E0443E]/40" />
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/90 border border-[#DEA123]/40" />
        <div className="w-3 h-3 rounded-full bg-[#27C93F]/90 border border-[#1AAB29]/40" />
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 overflow-x-auto max-w-[260px] sm:max-w-none">
        {FACES.map((face, index) => {
          const Icon = face.icon;
          const isActive = face.id === activeId;
          return (
            <button
              key={face.id}
              onClick={(e) => {
                e.stopPropagation();
                onTabClick(index);
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                isActive
                  ? "bg-white dark:bg-[#16161A] text-[#111827] dark:text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-800 dark:hover:text-stone-200"
              }`}
            >
              <Icon size={12} className={face.iconColor} />
              <span className="hidden sm:inline">{face.filename}</span>
              <span className="sm:hidden">{face.label}</span>
            </button>
          );
        })}
      </div>

      {/* Copy Action */}
      <div className="flex items-center gap-1">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
          className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-white/10 transition-colors"
          aria-label="Copy snippet"
          title="Copy snippet"
        >
          {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
        </button>
      </div>
    </div>
  );
}

// Subcomponent: Footer Status Bar for each 3D face
function FooterBar({ filename, note }) {
  return (
    <div className="px-6 py-2.5 bg-slate-100/70 dark:bg-[#121216] border-t border-slate-200/70 dark:border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-stone-400">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
        <span>{filename}</span>
      </div>
      <span className="text-[10px] hidden sm:inline text-slate-400 dark:text-stone-500">
        {note}
      </span>
    </div>
  );
}

export default Rotating3DBox;
