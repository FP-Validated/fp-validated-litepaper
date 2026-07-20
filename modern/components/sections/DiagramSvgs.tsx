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

export function ArchitectureDiagram() {
  return (
    <svg viewBox="0 0 980 372" role="img" aria-label="Two-plane architecture">
      <defs><marker id="ah" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#6a6a70" /></marker></defs>
      <rect x="24" y="26" width="392" height="252" rx="8" fill="#0a0a0b" stroke="#2a2a2e" />
      <text x="44" y="54" fill="#5a5a60" fontSize="10" letterSpacing="3">MANAGEMENT PLANE · AKS</text>
      <text x="44" y="82" fill="#fff" fontSize="22" fontWeight="800">Govern</text>
      {["Argo CD|GitOps", "Vault + ESO|secrets", "Grafana · Prometheus · Alertmanager|", "SSO / RBAC · Kyverno · Audit|"].map((line, i) => {
        const [left, right] = line.split("|");
        const y = 102 + i * 44;
        return (
          <g key={left}>
            <rect x="44" y={y} width="352" height="36" rx="4" fill="#070708" stroke="#1f1f22" />
            <text x="60" y={y + 23} fill="#e8e8ea" fontSize="13">{left}</text>
            {right ? <text x="380" y={y + 23} fill="#5a5a60" fontSize="10" textAnchor="end">{right}</text> : null}
          </g>
        );
      })}
      <rect x="564" y="26" width="392" height="252" rx="8" fill="#0a0a0b" stroke="#2a2a2e" />
      <text x="584" y="54" fill="#5a5a60" fontSize="10" letterSpacing="3">WORKLOAD PLANE · k3s</text>
      <text x="584" y="82" fill="#fff" fontSize="22" fontWeight="800">Execute</text>
      {["Validators · threshold signers", "RPC endpoints|10 chains", "Exporters · Edge Prometheus", "Encrypted private overlay"].map((line, i) => {
        const [left, right] = line.split("|");
        const y = 102 + i * 44;
        return (
          <g key={left}>
            <rect x="584" y={y} width="352" height="36" rx="4" fill="#070708" stroke="#1f1f22" />
            <text x="600" y={y + 23} fill="#e8e8ea" fontSize="13">{left}</text>
            {right ? <text x="920" y={y + 23} fill="#5a5a60" fontSize="10" textAnchor="end">{right}</text> : null}
          </g>
        );
      })}
      <line x1="416" y1="120" x2="562" y2="120" stroke="#fff" strokeWidth="1.4" markerEnd="url(#ah)" opacity=".85" />
      <text x="489" y="110" fill="#8a8a8f" fontSize="10" textAnchor="middle">GitOps · prune OFF</text>
      <line x1="562" y1="186" x2="418" y2="186" stroke="#3a3a3e" strokeWidth="1.4" markerEnd="url(#ah)" />
      <text x="489" y="204" fill="#8a8a8f" fontSize="10" textAnchor="middle">fp:* summary</text>
      <rect x="350" y="312" width="280" height="44" rx="6" fill="#070708" stroke="#2a2a2e" strokeDasharray="3 4" />
      <text x="490" y="339" fill="#8a8a8f" fontSize="11" textAnchor="middle">Azure Key Vault · Workload Identity · 0 static secrets</text>
    </svg>
  );
}

export function SecurityDiagram() {
  return (
    <svg viewBox="0 0 980 312" role="img" aria-label="Key-management flow">
      <defs><marker id="ah2" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#fff" /></marker></defs>
      <text x="0" y="22" fill="#5a5a60" fontSize="10" letterSpacing="3">KEY-MANAGEMENT FLOW</text>
      {[
        ["Cloud KMS / HSM", "root key, sealed"],
        ["HashiCorp Vault", "seal · auto-unseal"],
        ["Workload Identity", "short-lived access"],
        ["Signer", "calls KMS to sign"],
        ["Validator / Chain", "one valid signature"]
      ].map(([title, sub], index) => {
        const x = index * 205;
        return (
          <g key={title}>
            <rect x={x} y="80" width="160" height="84" rx="8" fill="#0a0a0b" stroke={index === 4 ? "#fff" : "#2a2a2e"} />
            <text x={x + 80} y="124" fill="#fff" fontSize="14" textAnchor="middle">{title}</text>
            <text x={x + 80} y="146" fill="#5a5a60" fontSize="11" textAnchor="middle">{sub}</text>
            {index < 4 ? <line x1={x + 160} y1="122" x2={x + 205} y2="122" stroke="#fff" strokeWidth="1.4" markerEnd="url(#ah2)" /> : null}
          </g>
        );
      })}
      <rect x="0" y="272" width="980" height="34" rx="6" fill="#070708" stroke="#2a2a2e" strokeDasharray="3 4" />
      <text x="490" y="293" fill="#8a8a8f" fontSize="11" textAnchor="middle">Raw key never exported · Git stores references, not values · no usable key on any single server</text>
    </svg>
  );
}

export function ObservabilityDiagram() {
  return (
    <svg viewBox="0 0 980 300" role="img" aria-label="Observability pipeline">
      <defs><marker id="ah3" markerWidth="9" markerHeight="9" refX="7" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#6a6a70" /></marker></defs>
      <rect x="20" y="40" width="372" height="222" rx="8" fill="none" stroke="#26262a" strokeDasharray="4 5" />
      <text x="40" y="66" fill="#5a5a60" fontSize="10" letterSpacing="3">EDGE — RAW · SHORT RETENTION</text>
      <rect x="44" y="96" width="150" height="120" rx="6" fill="#0a0a0b" stroke="#2a2a2e" />
      <text x="119" y="150" fill="#e8e8ea" fontSize="13" textAnchor="middle">Exporters</text>
      <text x="119" y="170" fill="#5a5a60" fontSize="10" textAnchor="middle">node·chain·proc</text>
      <rect x="224" y="96" width="150" height="120" rx="6" fill="#0a0a0b" stroke="#2a2a2e" />
      <text x="299" y="150" fill="#e8e8ea" fontSize="13" textAnchor="middle">Edge Prometheus</text>
      <text x="299" y="170" fill="#5a5a60" fontSize="10" textAnchor="middle">drill-down, local</text>
      <line x1="392" y1="156" x2="452" y2="156" stroke="#fff" strokeWidth="1.5" markerEnd="url(#ah3)" />
      <text x="422" y="142" fill="#8a8a8f" fontSize="10" textAnchor="middle">remote_write</text>
      <text x="422" y="180" fill="#8a8a8f" fontSize="10" textAnchor="middle">fp:* only</text>
      <rect x="456" y="40" width="504" height="222" rx="8" fill="none" stroke="#26262a" strokeDasharray="4 5" />
      <text x="476" y="66" fill="#5a5a60" fontSize="10" letterSpacing="3">CENTER — SUMMARY</text>
      {["Central Prometheus", "Grafana · Alertmanager", "FP Validated Guard", "Telegram · Slack · PagerDuty"].map((label, i) => {
        const x = i % 2 === 0 ? 476 : 676;
        const y = i < 2 ? 86 : 186;
        const w = i % 2 === 0 ? 170 : 262;
        return (
          <g key={label}>
            <rect x={x} y={y} width={w} height="52" rx="6" fill="#0a0a0b" stroke="#2a2a2e" />
            <text x={x + w / 2} y={y + 31} fill="#e8e8ea" fontSize="13" textAnchor="middle">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}
