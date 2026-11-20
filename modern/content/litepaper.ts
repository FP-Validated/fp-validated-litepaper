export type Lang = "en" | "ko";

export type Localized = {
  en: string;
  ko: string;
};

export type SectionId =
  | "cover"
  | "vision"
  | "footprint"
  | "team"
  | "networks"
  | "pillars"
  | "architecture"
  | "security"
  | "observability"
  | "operations"
  | "coverage"
  | "live"
  | "roadmap";

export type SectionMeta = {
  id: SectionId;
  index: string;
  label: Localized;
};

export const sections: SectionMeta[] = [
  { id: "cover", index: "00", label: { en: "Cover", ko: "커버" } },
  { id: "vision", index: "01", label: { en: "Vision", ko: "비전" } },
  { id: "footprint", index: "02", label: { en: "Footprint", ko: "운영 현황" } },
  { id: "team", index: "03", label: { en: "Team", ko: "팀" } },
  { id: "networks", index: "04", label: { en: "Networks", ko: "네트워크" } },
  { id: "pillars", index: "05", label: { en: "Principles", ko: "원칙" } },
  { id: "architecture", index: "06", label: { en: "Architecture", ko: "아키텍처" } },
  { id: "security", index: "07", label: { en: "Key Safety", ko: "키 보안" } },
  { id: "observability", index: "08", label: { en: "Observability", ko: "관측성" } },
  { id: "operations", index: "09", label: { en: "Operations", ko: "운영 체계" } },
  { id: "coverage", index: "10", label: { en: "Coverage", ko: "커버리지 (TVL)" } },
  { id: "live", index: "11", label: { en: "Live", ko: "라이브" } },
  { id: "roadmap", index: "12", label: { en: "Roadmap", ko: "로드맵" } }
];

export const navItems = sections;

export const brand = {
  title: "FP Validated",
  logo: "https://4pillars.io/assets/brand/fp-validated/logo-white.png",
  subtitle: { en: "Litepaper 2026", ko: "라이트페이퍼 2026" },
  topStrip: { en: "Validator & RPC Infrastructure", ko: "밸리데이터 · RPC 인프라" },
  url: "https://validated.4pillars.io"
} as const;

export const hero = {
  eyebrow: { en: "Institutional Staking Infrastructure", ko: "기관용 스테이킹 인프라" },
  title: { en: "“Validated for<br>Confident Decisions”", ko: "“확신 있는<br>의사결정을 위한 검증”" },
  subtitle: {
    en: "FP Validated is a blockchain infrastructure service provider that aims to enable the growth and maturation of digital asset networks.",
    ko: "FP Validated는 디지털 자산 네트워크의 성장과 성숙을 돕는 블록체인 인프라 서비스 제공자입니다."
  },
  meta: [
    { key: { en: "Model", ko: "모델" }, value: { en: "Validator · RPC", ko: "밸리데이터 · RPC" } },
    { key: { en: "Footprint", ko: "운영 범위" }, value: { en: "5 providers", ko: "5개 프로바이더" } },
    { key: { en: "Posture", ko: "기준" }, value: { en: "SOC 2 / ISO 27001", ko: "SOC 2 / ISO 27001" } },
    { key: { en: "Engineering update", ko: "기술 업데이트" }, value: { en: "November 2026", ko: "2026년 11월" } }
  ],
  stats: [
    { value: "1", label: { en: "Rule above all — stop before restarting any active signer", ko: "최우선 원칙 — 활성 서명자를 재시작하기 전에 멈춘다" } },
    { value: "0", label: { en: "Validator signing keys exposed on a server", ko: "서버에 노출되는 밸리데이터 서명 키" } },
    { value: "2", label: { en: "Planes — control and workload, never co-located", ko: "평면 — 제어와 워크로드, 절대 같은 곳에 두지 않음" } },
    { value: "100%", label: { en: "Changes reconciled & auditable through GitOps", ko: "GitOps로 조정·감사 가능한 변경" } }
  ]
};

export const marquee = {
  en: ["Threshold Signing", "Zero Static Secrets", "Control / Workload Split", "Multi-Provider", "GitOps Audited", "SOC 2 / ISO 27001", "Safety First"],
  ko: ["임계 서명", "정적 시크릿 0", "제어 / 워크로드 분리", "멀티 프로바이더", "GitOps 감사", "SOC 2 / ISO 27001", "안전 우선"]
} satisfies Record<Lang, string[]>;

export const sectionCopy = {
  vision: {
    title: { en: "Validator as a Prepared & Trusted Partner for builders & institutions.", ko: "빌더와 기관을 위한 준비되고 신뢰받는 밸리데이터 파트너." },
    body: {
      en: "Validators form the backbone of every protocol, providing the foundational layer where new value is first generated. FP Validated delivers robust, institutional-grade infrastructure that enables builders and institutions to scale digital asset networks with confidence.",
      ko: "밸리데이터는 모든 프로토콜의 근간으로서, 새로운 가치가 처음 생성되는 기반 계층을 제공합니다. FP Validated는 빌더와 기관이 자신감을 가지고 디지털 자산 네트워크를 확장할 수 있도록 견고한 기관급 인프라를 제공합니다."
    }
  },
  footprint: {
    title: { en: "Live Today", ko: "현재 라이브" },
    body: { en: "Capacity is intentionally distributed across independent providers, eliminating reliance on any single vendor as a potential point of failure.", ko: "용량은 독립적인 프로바이더에 의도적으로 분산되어, 어떤 단일 벤더에도 단일 장애점으로서 의존하지 않습니다." }
  },
  team: {
    title: { en: "Who We Are", ko: "우리는 누구인가" },
    body: {
      en: "FP Validated has been operating since 2024, but 2026 marked a major inflection point in its growth. Through the acqui-hire of leadership and core talent from A41, formerly one of Asia’s largest validator companies, FP Validated began scaling its team and infrastructure more aggressively, rapidly building an institution-grade operating foundation backed by veteran SREs with experience operating hundreds of nodes under a SOC 2-compliant environment.",
      ko: "FP Validated는 2024년부터 운영되어 왔으며, 2026년은 성장의 중요한 전환점이었습니다. 아시아 최대 밸리데이터 기업 중 하나였던 A41의 리더십과 핵심 인재를 acqui-hire하며 팀과 인프라를 더 공격적으로 확장하기 시작했습니다."
    },
    body2: {
      en: "With this foundation, FP Validated is expanding its AUS rapidly and is already working with institutions, VCs, and companies on white-label validator offerings and technical supports. As builders and institutions increasingly seek secure, scalable, and compliance-ready access to staking and blockchain infrastructure, FP Validated is positioned to become one of the most Prepared and Trusted validator partners in the global market.",
      ko: "이 기반 위에서 FP Validated는 AUS를 빠르게 확장하고 있으며, 기관, VC, 기업들과 화이트라벨 밸리데이터와 기술 지원을 논의하고 있습니다."
    }
  },
  networks: {
    title: { en: "What We Operate", ko: "우리가 운영하는 것" },
    body: { en: "Every network runs on a single Kubernetes-based, institution-grade operating model, covering Cosmos-SDK chains, Sui and Walrus, Canton, Ethereum and Solana, and ten mainnet EVM/RPC networks, with all workloads reconciled by Argo CD.", ko: "모든 네트워크는 하나의 쿠버네티스 기반 기관급 운영 모델에서 실행되며, Cosmos-SDK 체인, Sui와 Walrus, Canton, Ethereum과 Solana, 그리고 10개 메인넷 EVM/RPC 네트워크를 포괄합니다. 모든 워크로드는 Argo CD로 조정됩니다." }
  },
  pillars: {
    body: { en: "Delegating stake means handing over <b>signing authority and slashing risk</b>. Most failures can be recovered from; double-signing or key compromise cannot. Our entire operator architecture is built around one principle: <b>safety before availability</b>.", ko: "스테이크를 위임한다는 것은 <b>서명 권한과 슬래싱 리스크</b>를 넘기는 일입니다. 대부분의 장애는 복구할 수 있지만, 이중 서명이나 키 유출은 그렇지 않습니다. 우리의 전체 오퍼레이터 아키텍처는 단 하나의 원칙 — <b>가용성보다 안전</b> — 을 중심으로 구축되었습니다." }
  },
  architecture: {
    title: { en: "Who Controls the Assets?", ko: "자산을 움직일 수 있는 사람은 누구인가" },
    body: { en: "In our white-label validator design, an institution delegates the work of running a node, not the right to move its funds. The two responsibilities use different keys.", ko: "화이트라벨 밸리데이터 설계에서 기관이 맡기는 것은 노드 운영이지, 자산을 옮길 권한이 아닙니다. 두 역할은 서로 다른 키를 씁니다." },
    roles: [
      { label: { en: "Institution or custodian", ko: "기관 또는 수탁사" }, title: { en: "Hold the assets", ko: "자산을 보관합니다" }, body: { en: "The custody key stays with the institution or its custodian. The chain pays rewards directly to the institution’s address, not through an FP account.", ko: "자산 보관 키는 기관이나 수탁사가 보유합니다. 체인에서 발생한 보상은 FP 계정을 거치지 않고 기관 주소로 들어갑니다." } },
      { label: { en: "FP Validated", ko: "FP Validated" }, title: { en: "Run the validator", ko: "검증인을 운영합니다" }, body: { en: "Each customer has a separate signing environment. Its validator key signs consensus messages; it cannot withdraw the customer’s funds. FP monitors the node and reports incidents and changes.", ko: "고객마다 서명 환경을 분리합니다. 검증인 키는 합의 메시지에 서명할 수 있지만 고객 자산을 인출할 수는 없습니다. FP는 노드 상태를 살피고 장애와 변경 사항을 보고합니다." } }
    ]
  },
  security: {
    title: { en: "When Should Pillar Sign?", ko: "Pillar는 언제 서명하는가" },
    body: { en: "A validator signs for one chain. A LayerZero Decentralized Verifier Network (DVN) attests to a message sent between two. As of November 2026, our Rust client serves signing requests for 33 mainnet chains across eight chain families. Follow one request from Ethereum to Arbitrum.", ko: "밸리데이터가 한 체인의 합의에 서명한다면, LayerZero 분산 검증 네트워크(DVN)는 두 체인 사이에서 보낸 메시지를 확인하고 서명합니다. 2026년 11월 기준, 우리가 만든 Rust 클라이언트는 8개 계열에 걸친 메인넷 33개 체인의 서명 요청을 처리합니다. 이더리움에서 아비트럼으로 가는 요청 한 건을 따라가 보겠습니다." }
  },
  observability: {
    title: { en: "Did the Message Arrive?", ko: "메시지가 도착했는가" },
    body: { en: "A signature is not a delivery receipt. On testnet, our observer sends a message without moving tokens and checks what the destination app actually received. It follows 16 directional routes: eight out from a hub and eight back.", ko: "서명은 도착 확인증이 아닙니다. 테스트넷에서 우리가 만든 옵저버는 토큰을 옮기지 않고 시험 메시지를 보낸 뒤 목적지 앱이 실제로 받았는지 확인합니다. 허브에서 나가는 여덟 경로와 돌아오는 여덟 경로를 따로 관찰합니다." },
    stages: [
      { en: "Dispatched", ko: "출발지 발송" },
      { en: "Signed", ko: "DVN 서명" },
      { en: "Verified", ko: "목적지 검증" },
      { en: "Committed", ko: "메시지 확정" },
      { en: "Executed", ko: "앱 실행" }
    ],
    caption: { en: "If a signature exists but destination verification is missing, check submission. If verification is recorded but the app has not received the message, check execution.", ko: "서명이 있는데 목적지 검증 기록이 없다면 제출 구간을 봅니다. 검증까지 기록됐는데 앱의 수신 기록이 없다면 실행 구간을 봅니다." }
  },
  operations: {
    title: { en: "Explainable & Reversible", ko: "설명 가능 & 되돌릴 수 있음" },
    body: { en: "On 17 November we upgraded the Stable mainnet validator to v1.9.1. Checking the running binary established which release was live. Checking that consensus signing had resumed established that the validator was doing its job again.", ko: "11월 17일 Stable 메인넷 밸리데이터를 v1.9.1로 올렸습니다. 실행 중인 바이너리의 버전을 확인해 새 릴리스가 반영됐는지 판단했습니다. 업그레이드의 완료 기준은 한 단계 더 있었습니다. 검증인이 합의 서명을 다시 내는 것까지 확인했습니다." }
  },
  coverage: {
    title: { en: "Value We Secure", ko: "우리가 지키는 자산" },
    caption: { en: "FP Validated dashboard — delegated value across 6 chains", ko: "FP Validated 대시보드 — 6개 체인 위임 자산 현황" },
    note: { en: "*Note: On Ethereum, we actively participate in Lido's CSM and IDVTC modules and are preparing non-custodial white-label staking solutions through stVaults. Through these initiatives, we aim to provide institutions and ecosystem partners with secure, scalable, and battle-tested staking infrastructure.", ko: "*참고: 이더리움에서는 Lido의 CSM 및 IDVTC 모듈에 적극적으로 참여하고 있으며, stVaults를 통한 논커스터디 화이트라벨 스테이킹 솔루션을 준비하고 있습니다. 이러한 노력을 통해 기관 및 생태계 파트너에게 안전하고 확장 가능하며 검증된 스테이킹 인프라를 제공하고자 합니다." }
  },
  live: {
    title: { en: "Validator Node Performance", ko: "밸리데이터 노드 퍼포먼스" },
    body: { en: "Public explorers and dashboards across every network we operate", ko: "우리가 운영하는 모든 네트워크의 공개 익스플로러와 대시보드입니다." }
  },
  roadmap: {
    title: { en: "What's Next", ko: "다음 단계" },
    closing: { en: "We started by operating validators. Today we also build the software that decides which chain record to trust, when to sign it, and how to check delivery. For the next network we bring online, recovery will mean more than a healthy node: the original request must work again.", ko: "우리는 밸리데이터를 운영하는 일에서 출발했습니다. 이제는 어떤 체인 기록을 믿을지, 언제 서명할지, 메시지가 도착했는지 확인하는 소프트웨어도 직접 만듭니다. 다음 네트워크에서도 복구의 기준은 같습니다. 노드가 다시 켜지는 데서 끝나지 않고, 그 노드에 맡겼던 요청이 다시 처리돼야 합니다." }
  }
} as const;

export const footprintStats = [
  { value: "14", label: { en: "Workload nodes — all Ready", ko: "워크로드 노드 — 전부 Ready" } },
  { value: "5", label: { en: "Cloud providers", ko: "클라우드 프로바이더" } },
  { value: "24", label: { en: "Chain networks operated", ko: "체인 네트워크 운영" } },
  { value: "99.9%+", label: { en: "Effective uptime", ko: "실효 가동률" } }
];

export const comparisons = [
  ["Signing Model", "서명 모델", "Threshold Signing", "임계 서명", "Single Key File", "단일 키 파일"],
  ["Active Keys in K8s Secrets", "K8s Secret 내 활성 키", "Never", "전혀 없음", "Frequently", "흔함"],
  ["Control vs Workload", "제어 vs 워크로드", "Separated Planes", "분리된 평면", "Co-located", "같은 곳에 배치"],
  ["Provider Diversity", "프로바이더 다양성", "5 Providers · Multi-region", "5개 프로바이더 · 멀티 리전", "Single Provider", "단일 프로바이더"],
  ["Change Traceability", "변경 추적성", "GitOps + Audit Evidence", "GitOps + 감사 증거", "Manual / Ad-hoc", "수동 / 임시"]
].map(([enQ, koQ, enUs, koUs, enThem, koThem]) => ({
  question: { en: enQ, ko: koQ },
  us: { en: enUs, ko: koUs },
  them: { en: enThem, ko: koThem }
}));

export const teamGroups = [
  {
    label: { en: "Node operations team · 5 members", ko: "노드 운영팀 · 5명" },
    members: [
      ["Jaehwan Jeong", "Co-founder & Head of Validator", "Former Head of Validator Governance at A41."],
      ["Hyuksoo Jang", "Validator Advisor & Tech Researcher", "Former Head of Validator and Tech Lead at A41; Former Cloud Architect Engineer at Samsung SDS Research / Cloud Business Division."],
      ["Hyunmin Kim", "SRE", "Former SRE at A41; Former Node Operator at Lambda 256."],
      ["Seokhyun Sim", "SRE", "Former Node Operator at DSRV and Shinlabs."],
      ["Yeonghyun Sim", "SRE", "Former Node Operator at Shinlabs."]
    ]
  },
  {
    label: { en: "Executive & research team · 8 members", ko: "경영 · 리서치팀 · 8명" },
    members: [
      ["Namwoong Kim", "Co-founder & CEO", "Co-founder and Former Head of Research at A41."],
      ["Heechang Kang", "Co-founder & CSO", "Former Researcher at Xangle."],
      ["Jinsol Bok", "Co-founder & Head of Research", "Former Researcher at A41."],
      ["+ team", "", "Additional sector-specialized researchers and data engineers across the team."]
    ]
  }
].map((group) => ({
  ...group,
  members: group.members.map(([name, role, bio]) => ({ name, role, bio }))
}));

const logo = (name: string) => `/img/${name}`;

export const validatorNetworks = [
  ["logo-canton.png", "Canton", "Splice", "Splice"],
  ["logo-ethereum.png", "Ethereum", "mainnet", "메인넷"],
  ["logo-ethereum.png", "Ethereum", "testnet", "테스트넷"],
  ["logo-initia.png", "Initia", "mainnet", "메인넷"],
  ["logo-initia.png", "Initia", "testnet", "테스트넷"],
  ["logo-layerzero.jpg", "LayerZero", "DVN · mainnet", "DVN · 메인넷"],
  ["logo-optimum.png", "Optimum", "testnet", "테스트넷"],
  ["logo-sei.png", "Sei", "mainnet", "메인넷"],
  ["logo-solana.png", "Solana", "testnet", "테스트넷"],
  ["logo-ssv.png", "SSV", "mainnet", "메인넷"],
  ["logo-stable.png", "Stable", "mainnet", "메인넷"],
  ["logo-stable.png", "Stable", "testnet", "테스트넷"],
  ["logo-sui.png", "Sui", "mainnet", "메인넷"],
  ["logo-sui.png", "Sui", "testnet", "테스트넷"],
  ["logo-walrus.png", "Walrus", "mainnet", "메인넷"],
  ["logo-walrus.png", "Walrus", "testnet", "테스트넷"]
].map(([icon, name, en, ko]) => ({ icon: logo(icon), name, label: { en, ko } }));

export const rpcNetworks = [
  ["logo-ethereum.png", "Ethereum"],
  ["logo-bsc.png", "BSC"],
  ["logo-solana.png", "Solana"],
  ["logo-hyperliquid.jpg", "Hyperliquid"],
  ["logo-avalanche.png", "Avalanche"],
  ["logo-polygon.png", "Polygon"],
  ["logo-arbitrum.jpg", "Arbitrum"],
  ["logo-optimism.png", "Optimism"],
  ["logo-base.png", "Base"],
  ["logo-tempo.png", "Tempo"]
].map(([icon, name]) => ({ icon: logo(icon), name }));

export const pillars = [
  ["Pillar 01", "기둥 01", "Control / Workload", "제어 / 워크로드", "SEPARATE THE PLANES", "평면을 분리하라", "A hardened management plane governs identity, secrets, and policy, while chains run on a separate workload plane. Even if the management plane goes down, it can never restart a validator.", "강화된 관리 평면은 아이덴티티, 시크릿, 정책을 통제하고, 체인은 별도의 워크로드 평면에서 실행됩니다. 관리 평면이 중단되더라도 밸리데이터를 재시작할 수는 없습니다."],
  ["Pillar 02", "기둥 02", "Key Safety", "키 보안", "PROTECT THE KEY", "키를 지켜라", "Threshold signing, keys kept outside Kubernetes Secrets, and no signer failover triggered by alerts. Any signer-state change is treated as a SEV-1 procedure, not routine operations.", "임계 서명, Kubernetes Secrets 밖에 보관되는 키, 알림으로 트리거되지 않는 서명자 페일오버. 모든 서명자 상태 변경은 일상 운영이 아니라 SEV-1 절차로 다룹니다."],
  ["Pillar 03", "기둥 03", "Observability", "관측성", "SEE BEFORE YOU ACT", "행동 전에 본다", "Raw, high-cardinality detail stays at the edge, while low-cardinality summaries flow to the center. Alerts explain what is happening; they never execute dangerous actions on their own.", "원시 고카디널리티 상세 데이터는 엣지에 남고, 저카디널리티 요약만 중앙으로 흐릅니다. 알림은 무슨 일이 일어나는지 설명하지만, 스스로 위험한 조치를 실행하지 않습니다."],
  ["Pillar 04", "기둥 04", "Compliance", "컴플라이언스", "PROVE EVERYTHING", "모든 것을 증명하라", "GitOps desired state, tiered RBAC, and audit evidence are designed for SOC 2 and ISO 27001 from the first commit — verifiable, not merely promised.", "GitOps 선언적 상태, 계층형 RBAC, 감사 증거는 첫 커밋부터 SOC 2와 ISO 27001을 위해 설계됩니다 — 단순한 약속이 아니라 검증 가능한 것입니다."]
].map(([kEn, kKo, titleEn, titleKo, bigEn, bigKo, bodyEn, bodyKo]) => ({
  eyebrow: { en: kEn, ko: kKo },
  title: { en: titleEn, ko: titleKo },
  big: { en: bigEn, ko: bigKo },
  body: { en: bodyEn, ko: bodyKo }
}));

export const rows = {
  security: [
    ["Pillar RPC", "Pillar RPC", "Read the right block", "요청한 블록을 읽습니다", "The gateway selects a provider that can read the requested Ethereum block, not just the latest one. Two endpoints run by one provider count as one source, not two independent votes.", "게이트웨이는 최신 블록뿐 아니라 요청한 이더리움 블록을 읽을 수 있는 제공자를 고릅니다. 한 사업자가 운영하는 주소 두 곳의 답은 독립된 두 표가 아니라 한 표로 셉니다."],
    ["Rust client", "Rust 클라이언트", "Match the message", "발송 기록과 대조합니다", "The client waits for the source block to reach the required confirmation depth. It checks that the dispatch event identifies the requested message and its destination before asking for signing permission.", "클라이언트는 발송 블록 뒤에 필요한 만큼 블록이 쌓이기를 기다립니다. 발송 이벤트의 내용과 목적지가 요청과 일치해야 서명 허가를 구합니다."],
    ["Policy gate", "정책 게이트", "A valid message can still be refused", "맞는 메시지도 거절할 수 있습니다", "If the asset’s limit for this direction has been reached, the gate refuses a new signature without stopping unrelated routes. A stop cannot revoke a signature already issued.", "해당 자산이 이 방향에서 쓸 수 있는 한도를 다 채웠다면 새 서명을 내주지 않습니다. 관련 없는 경로는 계속 동작합니다. 이미 내준 서명은 정지 조치로 거둘 수 없습니다."]
  ],
  operations: [
    ["Tiered change classes", "계층형 변경 등급", "From Docs to Signer/Key", "문서부터 서명자/키까지", "Documentation, monitoring, management apps, workload policy, chain runtime, and signer/key changes each carry their own approval threshold and rollback path.", "문서, 모니터링, 관리 앱, 워크로드 정책, 체인 런타임, 서명자/키 변경은 각각 고유한 승인 임계값과 롤백 경로를 가집니다."],
    ["Evidence-gated onboarding", "증거 기반 온보딩", "Join ≠ Activate", "조인 ≠ 활성화", "A new worker is provisioned, joined, isolated by taint, observed, and recorded before any chain is scheduled onto it — a seven-step gate before activation.", "새 워커는 어떤 체인도 스케줄되기 전에 프로비저닝, 조인, taint 격리, 관측, 기록을 거칩니다 — 활성화 전 7단계 게이트입니다."],
    ["Stop conditions", "중단 조건", "We Halt When Unsure", "확신이 없으면 멈춥니다", "Unclear signer impact, an ambiguous deploy target, pruning that may touch runtime state, a monitoring blind spot, or the absence of a rollback path — any one of these stops the change.", "불명확한 서명자 영향, 모호한 배포 대상, 런타임 상태를 건드릴 수 있는 pruning, 모니터링 사각지대, 롤백 경로 부재 — 이 중 하나라도 있으면 변경을 멈춥니다."],
    ["Recovery order", "복구 순서", "Safety First, Always", "언제나 안전이 먼저", "Confirm there is no signer/key risk → freeze evidence → restore visibility → isolate the workload → proceed with controlled recovery. Backups are stored in zone-redundant storage.", "서명자/키 위험이 없음을 확인 → 증거 동결 → 가시성 복구 → 워크로드 격리 → 통제된 복구 진행. 백업은 영역 중복 스토리지에 저장됩니다."]
  ]
} as const;

export const tvl = {
  total: "$52,138,342",
  date: { en: "Asset Under Staked (Data as of 23rd June, 2026)", ko: "스테이킹 자산 (AUS) (2026년 6월 23일 기준)" }
};

export const galleries = {
  perf: [
    ["perf-eth-rated.png", "Ethereum — 99.9% participation · RAVER 99% (rated.network)", "이더리움 — 참여율 99.9% · RAVER 99% (rated.network)"],
    ["perf-eth-beacon.png", "Ethereum — 99.84% effectiveness (beaconcha.in)", "이더리움 — 이펙티브니스 99.84% (beaconcha.in)"],
    ["perf-eth-ssv.png", "Hoodi testnet — 99.99% SSV DVN uptime (ssv.network)", "Hoodi 테스트넷 — SSV DVN 가동률 99.99% (ssv.network)"],
    ["perf-solana.png", "Solana — Validator · 173,765 SOL staked", "솔라나 — 밸리데이터 · 173,765 SOL 스테이킹"],
    ["perf-sui.png", "Sui — Validator · 1.61% APY · 15.21M SUI", "수이 — 밸리데이터 · APY 1.61% · 15.21M SUI"],
    ["perf-initia.png", "Initia — 100% uptime", "이니시아 — 가동률 100%"],
    ["perf-canton.png", "Canton — 100% uptime", "캔톤 — 가동률 100%"],
    ["perf-stable.png", "Stable — 100% uptime", "스테이블 — 가동률 100%"]
  ],
  guard: [
    ["guard-upgrades.png", "FP Validated Guard — Chain upgrade readiness", "FP Validated Guard — 체인 업그레이드 준비도"],
    ["guard-resources.png", "FP Validated Guard — Live resources & logs", "FP Validated Guard — 실시간 리소스·로그"]
  ]
} as const;

export const galleryItems = {
  perf: galleries.perf.map(([src, en, ko]) => ({ src: logo(src), caption: { en, ko } })),
  guard: galleries.guard.map(([src, en, ko]) => ({ src: logo(src), caption: { en, ko } }))
};

export const roadmap = [
  ["2026 H1", "2026 상반기", "Live", "라이브", "Multi-Provider Platform", "멀티 프로바이더 플랫폼", "Two-plane architecture in production: validators running across five providers, ten mainnet RPC endpoints, and threshold signing live on Cosmos-SDK chains.", "프로덕션의 2평면 아키텍처: 5개 프로바이더에서 실행되는 밸리데이터, 10개 메인넷 RPC 엔드포인트, Cosmos-SDK 체인에서 라이브인 임계 서명."],
  ["2026 H2", "2026 하반기", "In Progress", "진행 중", "Compliance Attestation", "컴플라이언스 인증", "SOC 2 / ISO 27001 evidence packets, monthly access reviews, and continuous Azure inventory are being matured into formal audit readiness.", "SOC 2 / ISO 27001 증거 패킷, 월간 접근 검토, 지속적 Azure 인벤토리를 공식 감사 준비 수준으로 성숙시키고 있습니다."],
  ["2027 H1", "2027 상반기", "Planned", "계획됨", "Region & Provider Expansion", "리전 · 프로바이더 확장", "Expand into additional independent regions and bare-metal providers, with dedicated per-chain capacity sets and tighter private-access controls.", "추가 독립 리전과 베어메탈 프로바이더로 확장하고, 체인별 전용 용량 세트와 더 엄격한 비공개 접근 통제를 적용합니다."],
  ["2027", "2027", "Goal", "목표", "SOC 2 Type II Certification", "SOC 2 Type II 인증", "Complete an independent SOC 2 Type II audit on top of ISO 27001-aligned controls, providing formal assurance for institutional clients.", "ISO 27001 기반 통제 위에서 독립 기관의 SOC 2 Type II 감사를 완료하여 기관 고객에게 공식 보증을 제공합니다."]
].map(([timeEn, timeKo, statusEn, statusKo, titleEn, titleKo, bodyEn, bodyKo]) => ({
  time: { en: timeEn, ko: timeKo },
  status: { en: statusEn, ko: statusKo },
  title: { en: titleEn, ko: titleKo },
  body: { en: bodyEn, ko: bodyKo }
}));
