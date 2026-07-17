const base = "/case-studies/building-the-plumbing-behind-a-private-dinner-club-platform";

export const dinnerClub = {
  slug: "building-the-plumbing-behind-a-private-dinner-club-platform",
  title: "Building the Plumbing Behind a Private Dinner-Club Platform",
  kicker: "Hospitality & Social Platforms · Web (mobile-first)",
  client: "Confidential Client",
  industry: "Hospitality & Social Platforms",
  excerpt:
    "A role-aware dinner-club platform for guests, members, hosts and admins — with native Apple Pay checkout, a Redis-backed reminder engine, and a lean, environment-aware analytics stack.",
  heroImage: `${base}/00-hero-banner.png`,
  listImage: `${base}/00-hero-banner.png`,
  tags: ["Role-Based Access", "Payments", "Apple Pay", "Redis", "BullMQ", "Firebase", "Node.js", "Next.js", "SMS Notifications", "Product Analytics"],

  snapshot: [
    { icon: "📱", label: "Platform", value: "Web app (mobile-first)" },
    { icon: "🧱", label: "Stack", value: "Next.js · Node/Express · Firebase" },
    { icon: "💳", label: "Payments", value: "Stripe · Apple Pay" },
    { icon: "⚙️", label: "Infra", value: "BullMQ · Redis" },
    { icon: "🎭", label: "Roles shipped", value: "5" },
  ],

  problem: [
    "Dinner parties don't scale the way most social products expect them to. A host isn't broadcasting to followers — they're vouching for specific people around a specific table. A guest isn't browsing a catalog — they're asking to be let in. And the “membership” isn't a fixed subscription tier, it's whatever someone feels the club is worth that month.",
    "We were asked to build the software layer underneath: a place where a host can put together a dinner and invite people, where guests can ask to join a dinner they weren't personally invited to, and where the guest → member → host relationship is something the product actively manages rather than something support sorts out by hand.",
  ],

  roles: [
    { title: "Guest", text: "Browse invited dinners, request to join, limited profile/feed access until invited into the club." },
    { title: "Member", text: "Full dinner feed, unrestricted RSVPs, eligible to be invited to host." },
    { title: "Host", text: "Create & edit dinners, manage the guest list, send SMS blasts, invite guests into the club." },
    { title: "Co-host", text: "Same privileges as a host, scoped to one dinner — trust without a global grant." },
    { title: "Admin", text: "Back-office dashboard: full user & dinner visibility, moderation, private-dinner controls." },
  ],
  rolesLead:
    "The instinct is to reach for a single role enum — guest, member, admin, pick one. We didn't, because whether someone has paid to join, whether they're trusted to host, and whether they administer the platform are three independent facts about a person. That model is what lets the product say something different to five people looking at the exact same dinner.",
  rolesGallery: [
    { src: `${base}/06-dinner-feed.png`, alt: "Role-aware dinner feed" },
    { src: `${base}/07-dinner-detail.png`, alt: "Dinner detail with progressive disclosure" },
  ],
  onboardingGallery: [
    { src: `${base}/01-login.png`, alt: "Phone-based sign-in" },
    { src: `${base}/02-signup-registration.png`, alt: "Guided onboarding" },
    { src: `${base}/03-profile-photo.png`, alt: "Profile completion with photo crop" },
  ],

  payments: [
    "Membership is pay-what-you-want — from free up to a $50/month ceiling, set with a single slider. That one decision rippled through the whole integration: instead of a fixed Stripe Price ID, checkout resolves the slider value against a matching pre-configured Stripe Product at confirmation time, so “$15” and “$32” are both first-class subscriptions.",
    "A large share of sign-ups happen on a phone, mid-conversation about a dinner someone's about to walk into — a bad moment to ask for a 16-digit number. So checkout detects Apple/Google Pay via Stripe's Payment Request API and surfaces it as the primary one-tap option, backed by a live, actually-registered merchant-domain verification file.",
  ],
  paymentsGallery: [
    { src: `${base}/04-membership-slider.png`, alt: "Pay-what-you-want slider" },
    { src: `${base}/05-payment-apple-pay.png`, alt: "Native Apple Pay checkout" },
  ],
  paymentsQuote: "Both payment paths — card and Apple Pay — terminate in the exact same subscription-creation call. Apple Pay isn't a parallel special-cased flow; it's just a different way of arriving at the same Stripe payment method.",

  reminders: [
    "A dinner-club product lives and dies by its reminders. Forget to nudge a host to invite guests into the club and the growth loop stalls; forget to remind a guest 48 hours out and you get a no-show at someone's table. None of that can depend on someone remembering to run a script.",
    "Every time-based touchpoint runs through a BullMQ job queue backed by Redis, not a cron poller. Jobs are scheduled with deterministic IDs keyed to the dinner, so when a host reschedules, the pipeline cancels and re-creates exactly the right reminders. Failed jobs retry with exponential backoff, and a dashboard gives the team live visibility into what's running, stuck, or failed.",
    "Notifications span three channels — in-app (with a live unread badge), SMS (including a host “text blast” capped at 450 characters), and email (transactional plus hand-built calendar invites for Google, Outlook and Apple) — all fed by the same pipeline, so a reminder is authored once and fans out to whichever channels fit.",
  ],
  remindersGallery: [
    { src: `${base}/09-guest-invites.png`, alt: "Invite link & QR with per-guest status" },
    { src: `${base}/10-notifications.png`, alt: "In-app notifications" },
    { src: `${base}/12-message-blast.png`, alt: "Host text-blast tool" },
  ],

  admin: [
    "The back office isn't an afterthought — it's the view an operator needs when a dinner needs a second look, a host needs promoting, or someone needs to understand how the club is trending city over city. Filterable by city, host, date range and party size, with the same dinner data the public feed uses, minus the parts of the role model that hide things from the public.",
    "Instrumentation is deliberately lean: PostHog for product analytics (a centralized, named event registry), Microsoft Clarity + Google Analytics in production for session replay and traffic, and Intercom in staging only — swapped out the moment a build reaches production so the support widget never becomes noise for a real guest.",
  ],
  adminImage: `${base}/11-admin-dashboard.png`,

  roadmap:
    "Every role check described here currently lives in the frontend as conditional rendering — the right way to build the experience, but not on its own a security boundary. The API layer doesn't yet independently verify who's calling it. The role model is real, shipped, and does real product work; the next milestone is moving those same checks (host owns this dinner, admin is actually an admin) down onto the server — pushing the boundaries down a layer, not rethinking them.",
};

export default dinnerClub;
