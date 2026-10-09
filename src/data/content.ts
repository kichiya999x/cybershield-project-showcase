export const projectTitle =
  "A Cybersecured Centralized Firearm Traceability and Accountability Platform for the National Police Commission – Installations and Logistics Service";
export const problems = [
  {
    icon: "database",
    title: "Fragmented Records",
    text: "Separate records make it difficult to maintain one consistent view of firearm accountability.",
  },
  {
    icon: "clock",
    title: "Delayed Validation",
    text: "Manual consolidation delays the review and verification of inspection findings.",
  },
  {
    icon: "synchronize",
    title: "Risk of Double Issuance",
    text: "Disconnected assignment records can lead to conflicting issuance information.",
  },
  {
    icon: "security",
    title: "Accountability & Security Gaps",
    text: "Limited traceability and access controls weaken oversight of sensitive records.",
  },
];
export const features = [
  {
    icon: "database",
    title: "Centralized Firearm Records",
    text: "A shared registry for firearm details, status, and validation.",
  },
  {
    icon: "synchronize",
    title: "Issuance & Return Tracking",
    text: "Structured transactions throughout the accountability lifecycle.",
  },
  {
    icon: "inspection",
    title: "Post-Inspection Encoding",
    text: "Inspection findings, supporting evidence, and validation feedback.",
  },
  {
    icon: "clock",
    title: "Chain-of-Custody Tracking",
    text: "Read-only history of firearm assignments and returns.",
  },
  {
    icon: "document",
    title: "Incident Reporting",
    text: "Record lost, stolen, or defective firearms for follow-up.",
  },
  {
    icon: "document",
    title: "Audit Trails & Compliance Alerts",
    text: "Activity records and reminders for accountability requirements.",
  },
];
export const workflow = [
  {
    title: "Inspection Encoding",
    text: "Inspectors record structured findings and supporting evidence.",
  },
  {
    title: "Validation & Review",
    text: "Submitted records are checked for conflicts and items needing review.",
  },
  {
    title: "Issuance / Return Processing",
    text: "Authorized logistics personnel process assignment and return activity.",
  },
  {
    title: "Centralized Record Update",
    text: "Registry, status, and custody information are updated together.",
  },
  {
    title: "Audit Trail & Monitoring",
    text: "Recorded actions and compliance alerts support accountability.",
  },
];
export const controls = [
  {
    icon: "key",
    title: "Multi-Factor Authentication",
    detail: "Time-based one-time passwords add a second identity check.",
  },
  {
    icon: "users",
    title: "Role-Based Access Control",
    detail:
      "Permissions separate administrative and operational responsibilities.",

  },
  {
    icon: "security",
    title: "Zero Trust Principles",
    detail:
      "Identity verification and least-privilege access guide the design.",

  },
  {
    icon: "fingerprint",
    title: "Argon2id Password Hashing",
    detail:
      "Password hashing is specified in the security design and requirements.",

  },
  {
    icon: "security",
    title: "AES-256 Data Protection",
    detail: "At-rest protection requires separate deployment-level validation.",

  },
  {
    icon: "document",
    title: "SHA-256 Audit Logging",
    detail:
      "Tamper-evident audit records support accountability and traceability.",

  },
];
export const screenshots = [
  {
    id: "logistics",
    label: "Logistics",
    title: "Logistics Officer Dashboard",
    image: "/screenshots/logistics.webp",
    width: 1978,
    height: 1248,
    caption:
      "An overview of firearm status, returns, compliance alerts, and custody activity.",
  },
  {
    id: "inspector",
    label: "Inspector",
    title: "Inspector Dashboard",
    image: "/screenshots/inspector.webp",
    width: 1996,
    height: 1248,
    caption:
      "Inspection submissions, verified records, and validation discrepancies in one workspace.",
  },
  {
    id: "administrator",
    label: "Administrator",
    title: "Administrator Dashboard",
    image: "/screenshots/admin-dashboard.png",
    width: 1996,
    height: 1248,
    caption:
      "System governance and role management. A sanitized public screenshot is pending.",
  },
  {
    id: "accountable",
    label: "Accountable Officer",
    title: "Accountable Officer Dashboard",
    image: "/screenshots/accountable.webp",
    width: 1996,
    height: 1248,
    caption:
      "Role-limited records for assigned custody, accountability requirements, and return requests.",
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
export const team = [
  "Matthew Lawrence T. Abarquez",
  "Kiesha P. Conde",
  "Charles Daryl O. Dee",
  "Mary Anne R. Ramil",
];
