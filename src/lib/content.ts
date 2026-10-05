/**
 * All site copy lives here. Wording follows the Website Developer Brief
 * (tabs 4 "Voice & copy", 6 "Page copy" and 7 "Names & contact") — use approved lines verbatim.
 */

export const site = {
  name: "The MPG Group",
  practice: "MPGW, Make People Great At Workplace",
  tagline: "Make People Great At Workplace",
  url: "https://thempggroup.com",
  domain: "thempggroup.com",
  email: "thefounder@thempggroup.com",
  phone: "+63 917 127 9600",
  phoneHref: "tel:+639171279600",
  /** Swap in the registered company name once it exists (brief tab 7). */
  legalName: "The MPG Group",
  copyrightYear: 2026,
};

export const home = {
  title: "The MPG Group | Senior-partner-led HR as a Service",
  description:
    "Senior-partner-led HR for owners: Fractional CHRO, Foundational HR, Business Venture HR, Specialist HR Practices and HR Systems.",
  headline: "We help owners get free from headaches and organizational problems.",
  subhead:
    "You can't grow a business that only works when you're in the room. We fix what keeps you stuck in it, so your company can run, and grow, without you holding it up.",
  whatWeDoLead: "We take the headache. We fix the cause.",
  whatWeDoClose: "We keep your company in the right shape.",
  whyChooseUs: "The right business outcome at fractional cost, without hiring a full-time CHRO.",
  whoWeAre: "We are senior HR executives in the industry. Senior partners lead every engagement.",
  closingCta: "Stuck in the room? Talk to us.",
};

export type Service = {
  number: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  covers: string[];
  bestFor: string;
};

export const services: Service[] = [
  {
    number: "01",
    slug: "fractional-chro",
    name: "Fractional CHRO",
    tagline: "Strategic HR Advisory",
    description:
      "A part-time senior HR head at your leadership table. We build your people plan, then fix how the company is set up, without the full-time executive salary.",
    covers: ["A people plan for the business", "Lean organization design", "A blueprint for owners and CEOs"],
    bestFor: "Funded startups, mid-size firms with no senior HR head, family groups (500+)",
  },
  {
    number: "02",
    slug: "foundational-hr",
    name: "Foundational HR",
    tagline: "Retainer HR Service",
    description:
      "The HR basics every business needs from day one: contracts, employee files, policies, hiring, onboarding and DOLE requirements. Set up right, then kept running on retainer.",
    covers: [
      "Contracts and employee files",
      "Policies",
      "Hiring and onboarding",
      "DOLE requirements",
      "Ongoing monthly retainer",
    ],
    bestFor: "Startups, small and multi-branch businesses, foreign firms setting up in the PH",
  },
  {
    number: "03",
    slug: "business-venture-hr",
    name: "Business Venture HR",
    tagline: "M&A, Spin-offs and Carve-outs",
    description:
      "When you buy, merge, spin off or sell a company, we find the people problems you would inherit before you sign, and move the teams over properly.",
    covers: ["Acquisitions and mergers", "Spin-offs and carve-outs", "People risks found before signing"],
    bestFor: "Groups, investors and foreign firms buying, selling or restructuring a PH business",
  },
  {
    number: "04",
    slug: "specialist-hr-practices",
    name: "Specialist HR Practices",
    tagline: "Total Rewards and Labor Risk",
    description:
      "Fair, competitive pay through job grading, pay benchmarking and incentive design. We also help you avoid labor cases and DOLE penalties, with legal matters handled through our partner counsel.",
    covers: [
      "Job grading",
      "Pay benchmarking",
      "Incentive design",
      "Labor-risk review. Legal matters go through partner counsel.",
    ],
    bestFor: "Manufacturing, BPO, retail, hospitality, hospitals, logistics, unionized groups",
  },
  {
    number: "05",
    slug: "hr-systems-technology-platforms",
    name: "HR Systems & Technology Platforms",
    tagline: "HR Cloud Platform",
    description:
      "We first sort out how HR works in your company, then set it up on an HR platform with our technology partner, so HR runs in one place and not in spreadsheets.",
    covers: [
      "How HR works today, mapped first",
      "Set-up on an HR platform with our technology partner",
      "HR records in one place",
    ],
    bestFor: "Growing SMEs tired of Excel, multi-company groups, firms opening in the PH",
  },
];

export const servicesOverview = {
  intro: "Senior-partner-led HR as a Service, focused on five services.",
};

export const reasons = [
  {
    title: "Senior partners lead the work.",
    body: "Every engagement is led by an experienced partner, not handed off to a junior team.",
  },
  {
    title: "Deep industry experience.",
    body: "Telco, pharma, construction, manufacturing and more. We have seen most of what owners run into.",
  },
  {
    title: "Real capability design.",
    body: "Built to help you achieve your vision, not a report that sits in a drawer.",
  },
  {
    title: "We tell you the cost first.",
    body: "Before we fix anything, you see the problem and its price.",
  },
];

export const industries = [
  "Telco",
  "Logistics",
  "Pharma",
  "Distribution",
  "Engineering and Construction",
  "FMCG",
  "Consumer Electronics",
  "Manufacturing",
  "BPO",
  "Conglomerates",
  "Start-ups",
];

export const partners = {
  heading: "Who we are",
  body: "We are senior HR executives in the industry. 100+ years of combined experience across 11 industries.",
};

export const contactPage = {
  heading: "Talk to us",
  intro: "Tell us what is keeping you stuck in the room. We will reply by email.",
  diagnostic:
    "Start with a diagnostic: you see the problem and its peso cost before you commit. Partnership enquiries are welcome.",
  consent: "I agree to The MPG Group using these details to reply to my enquiry.",
  confirmation: "Thank you. We will reply to your email.",
};
