import React, { useState } from 'react';
import {
  Fingerprint,
  BookMarked,
  ShieldCheck,
  Cpu,
  FileCheck,
  Network,
  Zap,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { SMART_CAMPUS_NODES } from '../data/mockData';

export const SmartCampus: React.FC = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-biometrics');

  const selectedNode =
    SMART_CAMPUS_NODES.find((n) => n.id === selectedNodeId) || SMART_CAMPUS_NODES[0];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Fingerprint':
        return Fingerprint;
      case 'BookMarked':
        return BookMarked;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Cpu':
        return Cpu;
      case 'FileCheck':
        return FileCheck;
      default:
        return Network;
    }
  };

  return (
    <section id="smart-campus" className="relative py-20 bg-slate-950 text-white border-b border-slate-800 overflow-hidden">
      {/* Background Campus Aerial Banner with High Visual Presence */}
      <div className="absolute inset-0 z-0">
        <img
          src="/m_naac.webp"
          alt="Silver Oak University AI Powered Campus Aerial"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-90 transform scale-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/85 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Real University AI Powered Campus & Accreditation Banner */}
        <div className="relative mb-12 rounded-xl overflow-hidden border border-slate-700/80 shadow-2xl group">
          <div className="relative w-full h-64 sm:h-80 md:h-96">
            <img
              src="/m_naac.webp"
              alt="Silver Oak University NAAC A Accredited AI Powered Campus"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Subtle Gradient and Information Strip Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 p-4 sm:p-5 bg-slate-950/85 backdrop-blur-md rounded-lg border border-slate-700/70">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider">
                    Institutional Benchmark · Gujarat
                  </span>
                </div>
                <h3 className="text-base sm:text-xl font-bold text-white mt-1">
                  Silver Oak University · AI-Powered Smart Campus
                </h3>
                <p className="text-xs text-slate-300 mt-1 max-w-xl">
                  Accredited NAAC Grade ‘A’, approved by AICTE, NBA, and DGCA. Spearheading digital integration under Viksit Bharat @ 2047.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <span className="px-3 py-1 text-xs font-semibold bg-blue-600/40 text-blue-200 border border-blue-400/50 rounded-md">
                  AI-Powered Infrastructure
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-emerald-600/40 text-emerald-200 border border-emerald-400/50 rounded-md">
                  NAAC Grade 'A'
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-900/60 border border-blue-700/80 rounded-md text-xs font-semibold text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>National Vision · Viksit Bharat @ 2047</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-3 text-balance">
              The Sovereign Smart Campus Architecture
            </h2>
            <p className="text-slate-300 text-base sm:text-lg mt-3 leading-relaxed">
              As part of India’s Viksit Bharat @ 2047 digital infrastructure mandate, Campus360
              transforms university administration into an integrated, zero-friction smart campus.
              Disconnected analog registers, manual clearance chits, and fragmented messaging groups
              are replaced with a real-time sovereign event bus.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-900/80 border border-slate-700/80 p-6 rounded-lg backdrop-blur-xs">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Institutional Impact Metrics
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                  100%
                </div>
                <div className="text-xs text-slate-300 mt-1">Paperless Clearance Workflows</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-blue-400 tabular-nums">
                  &lt; 200ms
                </div>
                <div className="text-xs text-slate-300 mt-1">Unified Multi-system Latency</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">
                  Zero Queues
                </div>
                <div className="text-xs text-slate-300 mt-1">Automated Hall Ticket & Gate Pass</div>
              </div>
              <div>
                <div className="text-2xl font-bold font-mono text-amber-400 tabular-nums">
                  48 Hours
                </div>
                <div className="text-xs text-slate-300 mt-1">Enforced Grievance SLA Cap</div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual System Network Element */}
        <div className="bg-slate-950 border border-slate-800 rounded-xl p-6 lg:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800/90 gap-4">
            <div>
              <span className="text-xs font-mono text-blue-400 font-semibold uppercase">
                Interactive Campus Mesh
              </span>
              <h3 className="text-lg font-bold text-white mt-1">
                How Campus Services Interconnect via Campus360
              </h3>
            </div>
            <span className="text-xs text-slate-400">
              Select any ecosystem node to inspect integration telemetry
            </span>
          </div>

          {/* Interactive Topology Nodes Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {SMART_CAMPUS_NODES.map((node) => {
              const Icon = getIcon(node.iconName);
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-4 rounded-lg border text-left transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-blue-950/70 border-blue-500 shadow-md ring-1 ring-blue-500/50'
                      : 'bg-slate-900/90 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-2 rounded ${
                        isSelected ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {isSelected && (
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    )}
                  </div>

                  <div className="mt-4">
                    <div
                      className={`text-xs font-bold leading-snug ${
                        isSelected ? 'text-white' : 'text-slate-200'
                      }`}
                    >
                      {node.title}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-1">
                      {node.role}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Node Telemetry Banner */}
          <div className="mt-6 p-6 bg-slate-900 border border-slate-800 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                  <Zap className="w-3.5 h-3.5" />
                  <span>SUBSYSTEM PROTOCOL ANALYSIS</span>
                </div>
                <h4 className="text-lg font-bold text-white mt-1">{selectedNode.title}</h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {selectedNode.description}
                </p>
              </div>

              <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-slate-800 pt-4 lg:pt-0 lg:pl-6 space-y-3 text-xs">
                <div>
                  <span className="text-slate-500 uppercase tracking-wide text-[10px] block">
                    Transport Protocol
                  </span>
                  <span className="font-mono text-slate-200 font-semibold">
                    {selectedNode.protocol}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wide text-[10px] block">
                    Sync Latency
                  </span>
                  <span className="font-mono text-emerald-400 font-semibold">
                    {selectedNode.latency}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 uppercase tracking-wide text-[10px] block">
                    Institutional Standard
                  </span>
                  <span className="text-slate-300 font-medium">
                    National Institutional Framework (NIRF) & UGC Smart Campus Guidelines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
