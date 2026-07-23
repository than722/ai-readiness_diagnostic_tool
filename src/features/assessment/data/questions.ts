import { AssessmentQuestion } from "../types";

const q1: AssessmentQuestion = {
    order: 1,
    id: "q1",

  section: "Business Clarity & Reach",

  title: "Ideal Client Profile (ICP) & Targeting",

  description:
    "How clearly defined is your target service client, and how is that criteria used in lead generation?",

  primaryPillar: "Business Clarity",

  secondaryPillar: "Data & Systems",

  race: "Reach",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "We take almost any client that comes through the door; criteria live in our heads.",
    },

    {
      id: "basic",
      maturity: 1,
      label:
        "We have a general idea of our ideal client, but targeting relies on gut feeling and basic broad filters.",
    },

    {
      id: "standardized",
      maturity: 2,
      label:
        "Documented ICP with clear demographic/firmographic criteria used consistently across sales channels.",
    },

    {
      id: "ai",
      maturity: 3,
      label:
        "Data-driven ICP integrated into our ad/outreach systems with dynamic lead-scoring models.",
    },
  ],
};

const q2: AssessmentQuestion = {
  order: 2,

  id: "q2",

  section: "Business Clarity & Reach",

  title: "Service Offering Standardization",

  description:
    "How standardized are your core service deliverables and pricing scopes?",

  primaryPillar: "Business Clarity",

  secondaryPillar: "Process Maturity",

  race: "Act",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "Every proposal is written from scratch; scope and pricing are heavily customized every time.",
    },

    {
      id: "basic",
      maturity: 1,
      label:
        "We have basic templates or standard rate cards, but frequent custom additions are required.",
    },

    {
      id: "standardized",
      maturity: 2,
      label:
        "Tiered, fixed-scope service packages with standardized scoping guidelines.",
    },

    {
      id: "ai",
      maturity: 3,
      label:
        "Fully modular service catalog with instant quote generation or self-serve tier selection.",
    },
  ],
};

const q3: AssessmentQuestion = {
  order: 3,

  id: "q3",

  section: "Process Maturity & Lead Conversion",

  title: "Lead Ingestion & Initial Response Speed",

  description:
    "What happens immediately after a prospect submits an inquiry or booking form on your website?",

  primaryPillar: "Process Maturity",

  secondaryPillar: "AI Adoption",

  race: "Act",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "Form submissions drop into an inbox and responses vary from hours to days.",
    },

    {
      id: "basic",
      maturity: 1,
      label:
        "An automated thank-you email is sent, but manual review is required before scheduling.",
    },

    {
      id: "standardized",
      maturity: 2,
      label:
        "A calendar scheduling tool allows prospects to book calls immediately.",
    },

    {
      id: "ai",
      maturity: 3,
      label:
        "An AI lead agent instantly qualifies, enriches, and books meetings automatically.",
    },
  ],
};

const q4: AssessmentQuestion = {
  order: 4,

  id: "q4",

  section: "Process Maturity & Lead Conversion",

  title: "Client Onboarding & Hand-off",

  description:
    "How does a signed contract transition into active project delivery?",

  primaryPillar: "Process Maturity",

  secondaryPillar: "Team Readiness",

  race: "Convert",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "Manual kick-off emails, manually created folders, and manual task creation.",
    },

    {
      id: "basic",
      maturity: 1,
      label:
        "Checklists exist but templates and project setup are still copied manually.",
    },

    {
      id: "standardized",
      maturity: 2,
      label:
        "Automation tools create project boards, folders, and client portals.",
    },

    {
      id: "ai",
      maturity: 3,
      label:
        "Autonomous onboarding creates assets, collects intake data, and assigns work automatically.",
    },
  ],
};

const q5: AssessmentQuestion = {
  order: 5,

  id: "q5",

  section: "Data & Systems Infrastructure",

  title: "CRM & Central Data Architecture",

  description:
    "How centralized is your customer data across sales, operations, and account management?",

  primaryPillar: "Data & Systems",

  secondaryPillar: "Business Clarity",

  race: "Convert",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "Data is scattered across email threads, individual spreadsheets, and personal notes.",
    },
    {
      id: "basic",
      maturity: 1,
      label:
        "We use a CRM, but team members frequently bypass it or leave important information outdated.",
    },
    {
      id: "standardized",
      maturity: 2,
      label:
        "A centralized CRM is used with required fields, defined pipelines, and reliable synchronization.",
    },
    {
      id: "ai",
      maturity: 3,
      label:
        "Customer data is unified with automated data hygiene and activity logging.",
    },
  ],
};

const q6: AssessmentQuestion = {
  order: 6,

  id: "q6",

  section: "Data & Systems Infrastructure",

  title: "Operational Knowledge Management",

  description:
    "Where do your SOPs and institutional business knowledge live?",

  primaryPillar: "Data & Systems",

  secondaryPillar: "Process Maturity",

  race: "Engage",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "Knowledge mainly exists in employees' heads with little documentation.",
    },
    {
      id: "basic",
      maturity: 1,
      label:
        "Documentation exists in Google Docs or Notion but is difficult to maintain or search.",
    },
    {
      id: "standardized",
      maturity: 2,
      label:
        "A centralized and maintained knowledge base is available for the team.",
    },
    {
      id: "ai",
      maturity: 3,
      label:
        "An AI-powered internal knowledge assistant answers SOP questions instantly.",
    },
  ],
};

const q7: AssessmentQuestion = {
  order: 7,

  id: "q7",

  section: "AI Adoption & Workflow Automation",

  title: "AI Tool Usage Across the Team",

  description:
    "How are AI and automation tools currently used in day-to-day operations?",

  primaryPillar: "AI Adoption",

  secondaryPillar: "Team Readiness",

  race: "Engage",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "AI tools are not used or are restricted within the organization.",
    },
    {
      id: "basic",
      maturity: 1,
      label:
        "Individuals use AI occasionally for writing, brainstorming, or research.",
    },
    {
      id: "standardized",
      maturity: 2,
      label:
        "The organization has standardized AI tools, prompts, and approved workflows.",
    },
    {
      id: "ai",
      maturity: 3,
      label:
        "Custom AI agents are embedded directly into operational workflows.",
    },
  ],
};

const q8: AssessmentQuestion = {
  order: 8,

  id: "q8",

  section: "AI Adoption & Workflow Automation",

  title: "Client Communication & Support Automation",

  description:
    "How are routine client inquiries, status updates, and FAQs handled?",

  primaryPillar: "AI Adoption",

  secondaryPillar: "Process Maturity",

  race: "Engage",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "All client communication is handled manually through email, calls, or messaging apps.",
    },
    {
      id: "basic",
      maturity: 1,
      label:
        "Email templates and canned responses are used manually.",
    },
    {
      id: "standardized",
      maturity: 2,
      label:
        "Automated status updates are sent at important milestones.",
    },
    {
      id: "ai",
      maturity: 3,
      label:
        "An AI assistant manages routine inquiries, updates, and initial support triage.",
    },
  ],
};
const q9: AssessmentQuestion = {
  order: 9,

  id: "q9",

  section: "Team Readiness & Scaling Capacity",

  title: "Operational Bottlenecks & Executive Time",

  description:
    "How much time do senior leaders spend on repetitive administrative tasks?",

  primaryPillar: "Team Readiness",

  secondaryPillar: "Business Clarity",

  race: "Engage",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "More than 50% of leadership time is spent chasing updates, fixing errors, and handling manual administration.",
    },
    {
      id: "basic",
      maturity: 1,
      label:
        "Around 25%–50% of leadership time is spent on administrative work, and delegation requires heavy supervision.",
    },
    {
      id: "standardized",
      maturity: 2,
      label:
        "Less than 25% of leadership time is spent on administration thanks to documented processes and delegation.",
    },
    {
      id: "ai",
      maturity: 3,
      label:
        "Leadership focuses almost entirely on strategic growth while routine work is automated or delegated.",
    },
  ],
};

const q10: AssessmentQuestion = {
  order: 10,

  id: "q10",

  section: "Team Readiness & Scaling Capacity",

  title: "AI & Automation Skills Training",

  description:
    "What is your team's level of training and confidence in adopting AI technologies?",

  primaryPillar: "Team Readiness",

  secondaryPillar: "AI Adoption",

  race: "Engage",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "No formal AI training exists and the team is hesitant to adopt new technology.",
    },
    {
      id: "basic",
      maturity: 1,
      label:
        "Team members learn AI tools independently through trial and error.",
    },
    {
      id: "standardized",
      maturity: 2,
      label:
        "Regular workshops, prompt libraries, and AI usage guidelines are available.",
    },
    {
      id: "ai",
      maturity: 3,
      label:
        "The company has an AI enablement program with dedicated champions and continuous optimization.",
    },
  ],
};

const q11: AssessmentQuestion = {
  order: 11,

  id: "q11",

  section: "Revenue Acceleration & Optimization",

  title: "Re-engagement & Pipeline Nurturing",

  description:
    "How systematically do you nurture lost opportunities or previous clients for repeat business?",

  primaryPillar: "Business Clarity",

  secondaryPillar: "Data & Systems",

  race: "Reach",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "Outreach only happens when the sales pipeline becomes slow or inconsistent.",
    },
    {
      id: "basic",
      maturity: 1,
      label:
        "A generic newsletter is sent to everyone without audience segmentation.",
    },
    {
      id: "standardized",
      maturity: 2,
      label:
        "Automated email campaigns are triggered based on deal stage, activity, or service type.",
    },
    {
      id: "ai",
      maturity: 3,
      label:
        "AI-powered lifecycle campaigns personalize outreach using customer behavior and intent signals.",
    },
  ],
};

const q12: AssessmentQuestion = {
  order: 12,

  id: "q12",

  section: "Revenue Acceleration & Optimization",

  title: "Performance Reporting & Analytics",

  description:
    "How quickly can leadership access reliable business performance metrics?",

  primaryPillar: "Data & Systems",

  secondaryPillar: "Process Maturity",

  race: "Convert",

  options: [
    {
      id: "manual",
      maturity: 0,
      label:
        "Reports are manually compiled in spreadsheets and often delayed until month-end.",
    },
    {
      id: "basic",
      maturity: 1,
      label:
        "Individual systems provide dashboards, but cross-platform reporting requires manual work.",
    },
    {
      id: "standardized",
      maturity: 2,
      label:
        "Leadership has access to a centralized dashboard combining CRM, finance, and operations.",
    },
    {
      id: "ai",
      maturity: 3,
      label:
        "Predictive analytics provide revenue forecasts, capacity planning, and proactive recommendations.",
    },
  ],
};

export const assessmentQuestions: AssessmentQuestion[] = [
  q1,
  q2,
  q3,
  q4,
  q5,
  q6,
  q7,
  q8,
  q9,
  q10,
  q11,
  q12,
];