"use client";

import { useState, useEffect, useRef } from "react";
import { Droplets } from "lucide-react";

const WHATSAPP_NUMBER = "2347061964340";

// ─── Icon helpers ─────────────────────────────────────────────────────────────

function WhatsAppIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="currentColor" className={className} aria-hidden="true">
      <path d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.2 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4zm0 36c-3.1 0-6.1-.8-8.7-2.4l-.6-.4-6.2 1.6 1.7-6-.4-.6C8.9 30 8 27.1 8 24 8 15.2 15.2 8 24 8s16 7.2 16 16-7.2 16-16 16zm8.7-11.8c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.4-1.2 1.5-1.4 1.8-.3.3-.5.4-1 .1s-2-.7-3.8-2.3c-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-1l.7-.8c.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.8-1-.8h-.9c-.3 0-.8.1-1.2.6-.4.4-1.6 1.6-1.6 3.8s1.6 4.4 1.8 4.7c.2.3 3.2 4.9 7.8 6.8 1.1.5 1.9.7 2.6.9 1.1.3 2 .3 2.8.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.3-.5-.4-1-.6z" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg className="ml-auto h-4 w-4 shrink-0 transition-colors text-gray-300 group-hover:text-[#25D366]"
      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function IconTech({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8l3 3-3 3M13 14h4" />
    </svg>
  );
}

function IconElectrical({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}

function IconDefence({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3L4 7v5c0 5 3.5 9.74 8 11 4.5-1.26 8-6 8-11V7l-8-4z" />
    </svg>
  );
}

function IconChat({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
    </svg>
  );
}

// ─── Data types ───────────────────────────────────────────────────────────────

/** A leaf — opens WhatsApp directly */
type Leaf = { kind: "leaf"; label: string; message: string };

/** A node — opens a deeper list */
type Node = { kind: "node"; label: string; children: MenuItem[] };

type MenuItem = Leaf | Node;

type TopicIcon =
  | { kind: "emoji"; value: string }
  | { kind: "svg"; component: React.FC<{ className?: string }> };

type Topic = {
  id: string;
  label: string;
  icon: TopicIcon;
  /** Direct leaf — skips the sub-menu entirely */
  message?: string;
  /** Sub-menu items (Node or Leaf) */
  children?: MenuItem[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function leaf(label: string, product: string, extra = ""): Leaf {
  return {
    kind: "leaf",
    label,
    message: `Hello Willstone Strategic, I'd like to enquire about your ${product} supply and pricing.${extra ? " " + extra : ""}`,
  };
}

function node(label: string, children: MenuItem[]): Node {
  return { kind: "node", label, children };
}

// ─── Topic data ───────────────────────────────────────────────────────────────

const TOPICS: Topic[] = [
  {
    id: "agro",
    label: "Agriculture & Agribusiness",
    icon: { kind: "emoji", value: "🌾" },
    children: [
      // Oils (nested)
      node("Oils", [
        leaf("Palm Oil",   "Palm Oil"),
        leaf("Edible Oil", "Edible Oil"),
      ]),
      // Charcoal (nested)
      node("Charcoal", [
        leaf("Hardwood Lump Charcoal",   "Hardwood Lump Charcoal"),
        leaf("BBQ Charcoal",             "BBQ Charcoal"),
        leaf("Coconut Shell Charcoal",   "Coconut Shell Charcoal"),
        leaf("Acacia Hardwood Charcoal", "Acacia Hardwood Charcoal"),
      ]),
      // Direct leaves
      leaf("Sesame Seeds", "Sesame Seeds"),
      leaf("Maize",        "Maize"),
      leaf("Soybeans",     "Soybeans"),
      leaf("Cocoa",        "Cocoa"),
      leaf("Cassava",      "Cassava"),
      leaf("Ginger",       "Ginger"),
      leaf("Turmeric",     "Turmeric"),
      leaf("Rice",         "Rice"),
      leaf("Agri-Inputs",  "Agricultural Inputs (fertilisers, seeds, agrochemicals)"),
    ],
  },
  {
    id: "tech",
    label: "Software & IT Solutions",
    icon: { kind: "svg", component: IconTech },
    children: [
      leaf("Custom Software Development", "Custom Software Development services"),
      leaf("ERP & Business Systems",      "ERP & Business Systems solutions"),
      leaf("Web & Mobile Applications",   "Web & Mobile Application development"),
      leaf("IT Consultancy",              "IT Consultancy services"),
      leaf("Digital Transformation",      "Digital Transformation services"),
      leaf("Cybersecurity Solutions",     "Cybersecurity solutions"),
    ],
  },
  {
    id: "electrical",
    label: "Electrical & Electronic Solutions",
    icon: { kind: "svg", component: IconElectrical },
    children: [
      leaf("Power Systems & Installation",        "Power Systems & Installation services"),
      leaf("Industrial Automation",               "Industrial Automation solutions"),
      leaf("Solar & Renewable Energy",            "Solar & Renewable Energy systems"),
      leaf("Electrical Engineering Consultancy",  "Electrical Engineering Consultancy"),
      leaf("Electronic Maintenance & Repair",     "Electronic Maintenance & Repair services"),
    ],
  },
  {
    id: "defence",
    label: "Defence, Security & Protective Solutions",
    icon: { kind: "svg", component: IconDefence },
    children: [
      leaf("Surveillance & CCTV Systems",       "Surveillance & CCTV Systems"),
      leaf("Access Control Systems",            "Access Control Systems"),
      leaf("Threat Assessment & Risk Advisory", "Threat Assessment & Risk Advisory services"),
      leaf("Asset Protection Solutions",        "Asset Protection Solutions"),
      leaf("Security Equipment Supply",         "Security Equipment Supply"),
    ],
  },
  {
    id: "general",
    label: "General Enquiry",
    icon: { kind: "svg", component: IconChat },
    message: "Hello Willstone Strategic, I'd like to make a general enquiry about your products and services.",
  },
];

// ─── Nav stack item (what each breadcrumb level shows) ───────────────────────

type StackFrame =
  | { kind: "topics" }
  | { kind: "items"; label: string; icon: TopicIcon; items: MenuItem[] };

// ─── Sub-components ───────────────────────────────────────────────────────────

function TopicIconSlot({ icon, small = false }: { icon: TopicIcon; small?: boolean }) {
  if (icon.kind === "emoji") {
    return <span className={small ? "text-base leading-none" : "text-lg leading-none shrink-0"}>{icon.value}</span>;
  }
  const Comp = icon.component;
  return (
    <span className={`shrink-0 flex items-center justify-center rounded-lg ${
      small ? "h-5 w-5 text-[#25D366]" : "h-8 w-8 bg-[#e9f9f0] text-[#067f33]"
    }`}>
      <Comp className={small ? "h-5 w-5" : "h-4 w-4"} />
    </span>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function WhatsAppButton() {
  const [open, setOpen]     = useState(false);
  // Navigation stack — each push goes deeper, pop goes back
  const [stack, setStack]   = useState<StackFrame[]>([{ kind: "topics" }]);
  const containerRef        = useRef<HTMLDivElement>(null);

  const current = stack[stack.length - 1];

  function pushFrame(frame: StackFrame) {
    setStack((s) => [...s, frame]);
  }

  function popFrame() {
    setStack((s) => (s.length > 1 ? s.slice(0, -1) : s));
  }

  function closeAll() {
    setOpen(false);
    setStack([{ kind: "topics" }]);
  }

  // Outside click
  useEffect(() => {
    function h(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as globalThis.Node)) {
        setOpen(false);
        setStack([{ kind: "topics" }]);
      }
    }
    if (open) document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [open]);

  // Escape key
  useEffect(() => {
    function h(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (stack.length > 1) popFrame();
        else closeAll();
      }
    }
    if (open) document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, stack]);

  function handleTopicClick(topic: Topic) {
    if (topic.message) {
      openWhatsApp(topic.message);
      closeAll();
    } else if (topic.children) {
      pushFrame({ kind: "items", label: topic.label, icon: topic.icon, items: topic.children });
    }
  }

  function handleMenuItemClick(item: MenuItem) {
    if (item.kind === "leaf") {
      openWhatsApp(item.message);
      closeAll();
    } else {
      // It's a node — push a new frame with this node's children
      pushFrame({
        kind: "items",
        label: item.label,
        icon: item.label === "Oils"
          ? { kind: "svg", component: ({ className = "h-5 w-5" }) => <Droplets className={className} /> }
          : { kind: "emoji", value: "📦" },
        items: item.children,
      });
    }
  }

  function openWhatsApp(message: string) {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  function toggleOpen() {
    if (open) closeAll();
    else setOpen(true);
  }

  // Decide what to render in the list
  const listItems: ({ id?: string } & (
    | { type: "topic"; topic: Topic }
    | { type: "menuitem"; item: MenuItem; index: number }
  ))[] = current.kind === "topics"
    ? TOPICS.map((t) => ({ type: "topic" as const, topic: t, id: t.id }))
    : (current.items ?? []).map((item, i) => ({ type: "menuitem" as const, item, index: i, id: String(i) }));

  const headerLabel = current.kind === "topics" ? null : current;

  return (
    <>
      <style>{`
        @keyframes wa-pop-in {
          from { opacity: 0; transform: translateY(14px) scale(0.94); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wa-slide-in {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .wa-pop   { animation: wa-pop-in  0.22s cubic-bezier(0.34,1.56,0.64,1) both; }
        .wa-slide { animation: wa-slide-in 0.18s ease both; }

        /* Custom slim scrollbar in WhatsApp green */
        .wa-scroll::-webkit-scrollbar        { width: px; }
        .wa-scroll::-webkit-scrollbar-track  { background: #f0faf4; border-radius: 99px; }
        .wa-scroll::-webkit-scrollbar-thumb  { background: #076429; border-radius: 99px; }
        .wa-scroll::-webkit-scrollbar-thumb:hover { background: #076429; }
        /* Firefox */
        .wa-scroll { scrollbar-width: thin; scrollbar-color: #076429 #f0faf4; }
      `}</style>

      <div ref={containerRef} className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">

        {/* ── Card ── */}
        {open && (
          <div
            role="dialog"
            aria-label="WhatsApp enquiry"
            className="wa-pop mb-1 w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3" style={{ background: "#067f33" }}>
              {stack.length > 1 && (
                <button
                  onClick={popFrame}
                  aria-label="Back"
                  className="flex items-center justify-center w-7 h-7 rounded-full shrink-0 transition-colors"
                  style={{ background: "rgba(255,255,255,0.18)" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.30)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.18)")}
                >
                  <ChevronLeft />
                </button>
              )}
              <div className="flex h-9 w-9 items-center justify-center rounded-full shrink-0"
                   style={{ background: "rgba(255,255,255,0.20)" }}>
                <WhatsAppIcon className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white leading-tight truncate">Willstone Strategic</p>
                <p style={{ fontSize: "11px" }} className="text-green-200">Typically replies instantly</p>
              </div>
              {/* Close — turns WhatsApp green on hover */}
              <button
                onClick={closeAll}
                aria-label="Close"
                className="shrink-0 rounded-full w-7 h-7 flex items-center justify-center transition-colors"
                style={{ color: "rgba(255,255,255,0.75)" }}
                onMouseEnter={e => { (e.currentTarget.style.color = "#25D366"); (e.currentTarget.style.background = "rgba(255,255,255,0.12)"); }}
                onMouseLeave={e => { (e.currentTarget.style.color = "rgba(255,255,255,0.75)"); (e.currentTarget.style.background = "transparent"); }}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Breadcrumb bar */}
            <div className="px-4 py-2.5 bg-gray-50 border-b border-gray-100">
              {headerLabel ? (
                <div className="wa-slide flex items-center gap-2" key={headerLabel.label}>
                  <TopicIconSlot icon={headerLabel.icon} small />
                  <p className="text-xs font-semibold text-[#067f33] leading-tight truncate">{headerLabel.label}</p>
                </div>
              ) : (
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">What can we help you with?</p>
              )}
            </div>

            {/* List */}
            <ul className="wa-scroll py-1 max-h-72 overflow-y-auto overscroll-contain">
              {listItems.map((entry, i) => {
                if (entry.type === "topic") {
                  const { topic } = entry;
                  const hasChildren = !!topic.children?.length;
                  return (
                    <li key={topic.id}>
                      <button
                        onClick={() => handleTopicClick(topic)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-green-50 transition-colors group"
                      >
                        <TopicIconSlot icon={topic.icon} />
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#067f33] leading-snug flex-1">
                          {topic.label}
                        </span>
                        <ChevronRight />
                      </button>
                    </li>
                  );
                }

                const { item, index } = entry;
                const isNode = item.kind === "node";
                return (
                  <li key={index}>
                    <button
                      onClick={() => handleMenuItemClick(item)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left hover:bg-green-50 transition-colors group"
                    >
                      {isNode ? (
                        /* Node: icon varies by label */
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                          {item.label === "Oils" ? (
                            <Droplets className="h-3.5 w-3.5" />
                          ) : (
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                            </svg>
                          )}
                        </span>
                      ) : (
                        /* Leaf: numbered badge */
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-[10px] font-bold text-[#067f33]">
                          {i + 1}
                        </span>
                      )}
                      <span className="text-sm font-medium text-gray-700 group-hover:text-[#067f33] leading-snug flex-1">
                        {item.label}
                      </span>
                      <ChevronRight />
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Footer */}
            <div className="px-4 py-2 border-t border-gray-100 bg-gray-50">
              <p className="text-[11px] text-gray-400 text-center">
                Powered by <span className="text-[#25D366] font-semibold">WhatsApp</span>
              </p>
            </div>
          </div>
        )}

        {/* ── FAB ── */}
        <button
          onClick={toggleOpen}
          aria-label={open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}
          aria-expanded={open}
          className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 ${
            open ? "bg-[#067f33] hover:bg-[#067f33]" : "bg-[#067f33] hover:bg-[#067f33] hover:scale-110"
          }`}
        >
          {open ? (
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <WhatsAppIcon className="h-8 w-8 text-white" />
          )}
          {!open && (
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" aria-hidden="true" />
          )}
        </button>
      </div>
    </>
  );
}
