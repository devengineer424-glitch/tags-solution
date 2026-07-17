const base = "/case-studies/reimagining-the-paper-check-for-a-digital-business";

export const paperCheck = {
  slug: "reimagining-the-paper-check-for-a-digital-business",
  title: "Reimagining the Paper Check for a Digital Business",
  kicker: "Fintech & Payments",
  client: "Confidential Client",
  industry: "Fintech & Payments",
  excerpt:
    "A full-lifecycle platform for writing, printing, mailing, and reconciling business checks — with real-time ledgers, bulk spreadsheet import, MFA-gated security, payment-request links, and direct accounting-software sync.",
  heroImage: `${base}/03-dashboard.png`,
  listImage: `${base}/03-dashboard.png`,
  tags: ["Fintech", "Payments", "Check Printing", "Accounting Sync", "MFA", "Audit Trail", "Bulk Import", "Admin Console"],

  challenge: [
    "Paper checks are supposed to be a relic. And yet, across payroll, vendor payments, rent, and contractor invoices, they remain one of the most trusted payment methods in North American business. The problem was never that businesses wanted to keep writing checks — it's that the tools to do it were stuck decades in the past: desktop, single-user, disconnected from banking, disconnected from accounting.",
    "Teams were stitching together spreadsheets, physical checkbooks, and separate mailing trips just to pay a vendor. No shared visibility, no audit trail, and no connection between the check written on Tuesday and the accounting software that needed to know by Friday.",
  ],
  solution: [
    "We built a web platform that carries a check through its entire life: creation, distribution, and reconciliation, all in one place. A user can create a check individually or generate hundreds from an imported spreadsheet, then print it at home, email a PDF to the payee, or hand it off entirely to a print-and-mail fulfillment network.",
    "Every check is automatically reflected in a running ledger that updates in real time. Beyond paying people, the platform collects money via hosted payment-request links, and connects directly to accounting software — all built not just for a single freelancer but for organizations with multiple users, shared bank accounts, shared payees, and an administrative layer.",
  ],

  experience: [
    "The first design decision was trust: a product touching real bank accounts needed to feel secure without feeling hostile. Login and signup are clean and minimal, and every account is protected by mandatory MFA — authenticator app, email code, or a spoken code over a phone call — so no one is locked out because their preferred channel isn't available.",
    "Once inside, the dashboard answers one question immediately: where does my money stand right now? Checks issued, cleared, and in draft, plus a simple activity chart — before the user clicks into anything else.",
  ],
  experienceGallery: [
    { src: `${base}/01-login.png`, alt: "Login" },
    { src: `${base}/02-signup.png`, alt: "Sign up" },
    { src: `${base}/04-mfa-verify.png`, alt: "MFA verification" },
  ],

  workflow: [
    "The heart of the product is check creation, built for two very different users: someone writing three checks a week and a business writing hundreds. A check can be created one at a time with a live preview of routing and account numbers exactly as they'll print, or an entire batch queued in one sitting.",
    "Distribution is up to the user — print on the spot, email a PDF, or hand off for physical mailing, where the platform prints, stuffs, stamps and delivers through a fulfillment partner. The moment a check is created, edited or voided, the check register updates itself — every deposit and withdrawal against a running balance, minus the arithmetic.",
  ],
  workflowGallery: [
    { src: `${base}/05-checks-list.png`, alt: "My Checks workspace" },
    { src: `${base}/06-create-check.png`, alt: "Creating a check" },
    { src: `${base}/07-check-register.png`, alt: "Check register & reconciliation" },
  ],

  manage: [
    "Behind every check is a bank account and a payee, both first-class records. Adding a bank account walks the user through routing and account numbers with confirmation fields to catch typos, and a reusable digital signature — drawn, typed or uploaded. Payees get a searchable directory editable inline, and checks can be tagged and grouped freely so reporting stays meaningful as volume grows.",
    "Security is something the user actively manages — register multiple verification methods, see the default, rotate a password — without feeling like an IT admin console. The platform also lets a business get paid via hosted payment-request links, and syncs directly with accounting software by mapping existing vendors and bank accounts rather than recreating them.",
  ],
  manageGallery: [
    { src: `${base}/08-bank-accounts.png`, alt: "Bank accounts" },
    { src: `${base}/09-payees.png`, alt: "Payee directory" },
    { src: `${base}/10-tags-groups.png`, alt: "Tags & groups" },
    { src: `${base}/11-security-settings.png`, alt: "Security settings" },
    { src: `${base}/12-payment-link.png`, alt: "Payment-request link" },
    { src: `${base}/13-accounting-sync.png`, alt: "Accounting sync" },
  ],

  admin: [
    "None of this works at scale without someone able to see across the whole system, so a dedicated admin layer sits alongside the product. Operations staff track every check submitted for mailing and where it sits in the fulfillment pipeline; leadership gets analytics on signups, checks issued, and which organizations drive volume; and support can manage individual accounts — even securely stepping into one to troubleshoot, with an unmissable banner the entire time.",
    "Billing follows the same philosophy — visible, simple, never a surprise: current plan, payment method, and past charges without opening a support ticket.",
  ],
  adminGallery: [
    { src: `${base}/14-admin-mail-console.png`, alt: "Mail fulfillment console" },
    { src: `${base}/15-admin-analytics.png`, alt: "Admin analytics" },
    { src: `${base}/16-user-management.png`, alt: "User management" },
    { src: `${base}/17-subscription-management.png`, alt: "Subscription & billing" },
  ],

  hardProblems: [
    { title: "Taming messy, real-world data", text: "Let someone dump any bank's or tool's spreadsheet and turn it into hundreds of correctly numbered, signed checks. The import reconciles inconsistent column names, keeps both raw and corrected values side by side, stages rows for review, and catches duplicate check numbers automatically." },
    { title: "Keeping the books honest", text: "Every check created, edited or deleted updates a running ledger in real time — no nightly batch. Every change is captured in a permanent audit trail (before and after), and deletions retire records rather than erase them." },
    { title: "Visibility without chaos", text: "Finer-grained permissions than “admin vs everyone”: whether a check can be edited/voided/cleared depends on its own state, and admin visibility is enforced deeply enough that it can't be reached by guessing a URL." },
    { title: "Infrastructure that doesn't quietly break", text: "PDFs, signatures, logos and imports live in object storage with time-limited signed links; partner webhooks are verified against the untouched original request; and checks render through the same browser engine used to preview them." },
    { title: "Making external data agree", text: "A dedicated mapping layer keeps a persistent link between external and internal records while holding the original data, so an upstream change doesn't silently drift — and “mapped vs unmapped” is a visible, countable distinction." },
    { title: "Reliable notifications", text: "Verification codes go by email, SMS, spoken phone call, or authenticator app; every mailing stage triggers its own notification; and background checks flag anything stuck too long or still awaiting fulfillment." },
  ],

  result:
    "The end result is a product where writing a check, mailing it, and watching the balance update afterward happen as one continuous motion instead of three disconnected chores — every action logged, every file access-controlled, every login backed by a second factor. It looks simple from the outside precisely because so much engineering went into making sure the complicated parts never surface to the person just trying to pay their landscaper on time.",
};

export default paperCheck;
