export function FootprintDiagram() {
  return (
    <svg viewBox="0 0 980 272" role="img" aria-label="Management and workload clusters across providers">
      <defs><marker id="fpah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#8a8a8f" /></marker></defs>
      <rect x="300" y="18" width="380" height="52" rx="8" fill="#0a0a0b" stroke="#2a2a2e" />
      <text x="490" y="42" fill="#fff" fontSize="13" textAnchor="middle">Azure AKS · Management plane</text>
      <text x="490" y="59" fill="#5a5a60" fontSize="10" textAnchor="middle">Argo CD · Vault · Observability</text>
      <line x1="455" y1="70" x2="455" y2="114" stroke="#e8e8ea" strokeWidth="1.4" markerEnd="url(#fpah)" />
      <text x="448" y="96" fill="#8a8a8f" fontSize="9" textAnchor="end">GitOps</text>
      <line x1="525" y1="114" x2="525" y2="72" stroke="#3a3a3e" strokeWidth="1.4" markerEnd="url(#fpah)" />
      <text x="532" y="96" fill="#8a8a8f" fontSize="9">fp:* summary</text>
      <rect x="150" y="116" width="680" height="52" rx="8" fill="#0a0a0b" stroke="#2a2a2e" />
      <text x="490" y="140" fill="#fff" fontSize="13" textAnchor="middle">OVH Cluster · k3s workload plane</text>
      <text x="490" y="157" fill="#5a5a60" fontSize="10" textAnchor="middle">Encrypted private overlay</text>
      {["OVH", "Worldstream", "Azure", "LA", "Cherry"].map((name, index) => {
        const x = 40 + index * 185;
        const center = x + 80;
        return (
          <g key={name}>
            <rect x={x} y="216" width="160" height="44" rx="7" fill="#0a0a0b" stroke="#2a2a2e" />
            <text x={center} y="242" textAnchor="middle" fill="#e8e8ea" fontSize="12">{name}</text>
            <path d={`M${center} 216 L${center} 168`} stroke="#2a2a2e" strokeWidth="1" strokeDasharray="2 4" />
          </g>
        );
      })}
    </svg>
  );
}
