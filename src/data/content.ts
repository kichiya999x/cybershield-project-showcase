export interface ContentItem {
  icon: string;
  title: string;
  text: string;
}

export interface SecurityControl {
  icon: string;
  title: string;
  detail: string;
}

export interface DashboardScreenshot {
  id: string;
  label: string;
  title: string;
  image: string;
  width: number;
  height: number;
  caption: string;
}

export interface TeamMember {
  name: string;
  photo: string;
  role: string;
}

export const projectTitle =
  "A Cybersecured Centralized Firearm Traceability and Accountability Platform for the National Police Commission – Installations and Logistics Service";

export const interfaceDisclosure =
  "Interface shown with non-operational demonstration data.";

export const problems: ContentItem[] = [
  { icon: "database", title: "Fragmented Records", text: "Separate records make it difficult to maintain one consistent view of firearm accountability." },
  { icon: "clock", title: "Delayed Validation", text: "Manual consolidation delays the review and verification of inspection findings." },
  { icon: "synchronize", title: "Risk of Double Issuance", text: "Disconnected assignment records can lead to conflicting issuance information." },
  { icon: "security", title: "Accountability & Security Gaps", text: "Limited traceability and access controls weaken oversight of sensitive records." },
];

export const studyObjective = {
  general:
    "Develop a cybersecured, centralized web-based system that supports post-inspection firearm traceability, accountability, incident reporting, and record protection in the NAPOLCOM-ILS context.",
  specific: [
    "Centralize record validation and reduce conflicting or duplicate issuance information.",
    "Apply Zero Trust-oriented access through multi-factor authentication and role-based permissions.",
    "Maintain tamper-evident audit records and compliance notifications for accountable activity.",
    "Test application security using STRIDE and OWASP ASVS-aligned procedures.",
    "Evaluate selected software-quality characteristics using ISO/IEC 25010.",
  ],
  scope:
    "The prototype covers authorized user management, centralized firearm records, role-based dashboards, issuance and return workflows, inspection encoding, custody and accountability tracking, incident reporting, reconciliation, reports, and compliance monitoring.",
};

export const features: ContentItem[] = [
  { icon: "database", title: "Centralized Firearm Records", text: "A shared registry for firearm details, status, and validation." },
  { icon: "synchronize", title: "Issuance & Return Tracking", text: "Structured transactions throughout the accountability lifecycle." },
  { icon: "inspection", title: "Post-Inspection Encoding", text: "Inspection findings, supporting evidence, and validation feedback." },
  { icon: "clock", title: "Chain-of-Custody Tracking", text: "Read-only history of firearm assignments and returns." },
  { icon: "document", title: "Incident Reporting", text: "Record lost, stolen, or defective firearms for follow-up." },
  { icon: "document", title: "Audit Trails & Compliance Alerts", text: "Activity records and reminders for accountability requirements." },
];

export const workflow = [
  { title: "Inspection Encoding", text: "Inspectors record structured findings and supporting evidence." },
  { title: "Validation & Review", text: "Submitted records are checked for conflicts and items needing review." },
  { title: "Issuance / Return Processing", text: "Authorized logistics personnel process assignment and return activity." },
  { title: "Centralized Record Update", text: "Registry, status, and custody information are updated together." },
  { title: "Audit Trail & Monitoring", text: "Recorded actions and compliance alerts support accountability." },
];

export const controls: SecurityControl[] = [
  { icon: "key", title: "Multi-Factor Authentication", detail: "Time-based one-time passwords add a second identity check; broader validation remains part of future testing." },
  { icon: "users", title: "Role-Based Access Control", detail: "Permissions separate administrative and operational responsibilities." },
  { icon: "security", title: "Zero Trust Principles", detail: "Identity verification and least-privilege access guide the design." },
  { icon: "fingerprint", title: "Argon2id Password Hashing", detail: "Password hashing is specified in the security design and requirements." },
  { icon: "security", title: "AES-256 Data Protection", detail: "At-rest protection requires separate deployment-level validation." },
  { icon: "document", title: "SHA-256 Audit Logging", detail: "Tamper-evident audit records support accountability and traceability." },
];

export const screenshots: DashboardScreenshot[] = [
  {
    id: "logistics",
    label: "Logistics",
    title: "Logistics Officer Dashboard",
    image: "/screenshots/logistics.webp",
    width: 1978,
    height: 1248,
    caption: "An overview of firearm status, returns, compliance alerts, and custody activity.",
  },
  {
    id: "inspector",
    label: "Inspector",
    title: "Inspector Dashboard",
    image: "/screenshots/inspector.webp",
    width: 1996,
    height: 1248,
    caption: "Inspection submissions, verified records, and validation discrepancies in one workspace.",
  },
  {
    id: "administrator",
    label: "Administrator",
    title: "Administrator Dashboard",
    image: "/screenshots/admin-dashboard.webp",
    width: 1586,
    height: 992,
    caption: "A sanitized prototype view of user administration, system governance, security alerts, and audit activity.",
  },
  {
    id: "accountable",
    label: "Accountable Officer",
    title: "Accountable Officer Dashboard",
    image: "/screenshots/accountable.webp",
    width: 1996,
    height: 1248,
    caption: "Role-limited records for assigned custody, accountability requirements, and return requests.",
  },
];

export const qualityResults = [
  { label: "Performance Efficiency", value: 4.94 },
  { label: "Reliability", value: 4.78 },
  { label: "Functional Suitability", value: 4.76 },
  { label: "Security", value: 4.7 },
  { label: "Usability", value: 4.49 },
];

export const securityResults = {
  total: 24,
  passed: 21,
  note: 1,
  remediation: 2,
  fullPass: "87.50%",
  accepted: "91.67%",
};

export const team: TeamMember[] = [
  { name: "Matthew Lawrence T. Abarquez", photo: "/team/matthew-lawrence-abarquez.jpg", role: "Documentation & Penetration Testing" },
  { name: "Kiesha P. Conde", photo: "/team/kiesha-conde.jpeg", role: "Full-Stack Developer & UI/UX Design" },
  { name: "Charles Daryl O. Dee", photo: "/team/charles-daryl-dee.jpg", role: "Project Manager & Full-Stack Developer" },
  { name: "Mary Anne R. Ramil", photo: "/team/mary-anne-ramil.jpg", role: "Research & Documentation" },
];
