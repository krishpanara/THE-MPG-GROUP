/**
 * Draft legal text from brief tab 10. Working drafts for legal review, NOT final.
 * Square brackets are details still missing. Set `reviewed: true` only after counsel signs off.
 */

export type LegalDoc = {
  title: string;
  reviewed: boolean;
  sections: { heading?: string; body: string }[];
};

export const privacy: LegalDoc = {
  title: "Privacy notice",
  reviewed: false,
  sections: [
    {
      heading: "Who we are",
      body: '[Registered company name], doing business as The MPG Group ("we"), is responsible for the personal information collected on thempggroup.com. Contact: thefounder@thempggroup.com. [Data Protection Officer name and email.]',
    },
    {
      heading: "What we collect",
      body: "When you use the contact form: your name, company, email address, optional phone number and your message. When you visit the site: basic technical data such as browser type, pages viewed and approximate location, collected through cookies or analytics [name the analytics tool once chosen].",
    },
    {
      heading: "Why we collect it",
      body: "To reply to your enquiry and to discuss our services. We process this information only with your consent, which you give by ticking the box on the form. You can withdraw it at any time.",
    },
    {
      heading: "Who sees it",
      body: "Our partners who handle enquiries, and the service providers who run our website and email, [list once chosen]. We do not sell your information.",
    },
    {
      heading: "How long we keep it",
      body: "For as long as needed to deal with your enquiry and any resulting engagement, then [retention period, for example 2 years] unless the law requires longer.",
    },
    {
      heading: "Your rights",
      body: "Under the Data Privacy Act of 2012 (Republic Act 10173), you may ask to see the information we hold about you, have it corrected, object to its use, ask for it to be blocked or deleted, ask for a copy, and claim damages if it is misused. You may also complain to the National Privacy Commission. Write to thefounder@thempggroup.com to use any of these rights.",
    },
    {
      heading: "Security",
      body: "We use reasonable organizational, physical and technical measures to protect your information.",
    },
    { heading: "Changes", body: "We will post any update on this page with its date. Effective date: [date]." },
  ],
};

export const terms: LegalDoc = {
  title: "Terms of use",
  reviewed: false,
  sections: [
    {
      heading: "About this site",
      body: "The site is run by [registered company name], doing business as The MPG Group. By using it you accept these terms.",
    },
    {
      heading: "Information only",
      body: "The site describes our services in general terms. It is not an offer, a quote or a contract. Engagements are agreed only in a signed engagement letter.",
    },
    {
      heading: "No relationship from using the site",
      body: "Sending a message through the site does not make you our client. Please do not send confidential or privileged information through the form.",
    },
    {
      heading: "Our content",
      body: "The text, logo and design belong to us. You may view and share pages for your own business use, but may not copy or reuse them for another purpose without our written permission.",
    },
    {
      heading: "No guarantees",
      body: "We work to keep the site accurate and available, but give no warranty. To the extent the law allows, we are not liable for loss from using the site or relying on it.",
    },
    { heading: "Other sites", body: "We are not responsible for the content of sites we link to." },
    {
      heading: "Governing law",
      body: "Philippine law governs these terms. Disputes go to the courts of [city, to be confirmed by counsel].",
    },
    { heading: "Changes", body: "We may update these terms. Effective date: [date]." },
  ],
};

export const disclaimer: LegalDoc = {
  title: "Legal disclaimer",
  reviewed: false,
  sections: [
    {
      body: "The information on this site is general and for information only. It is not legal advice and does not create an attorney-client relationship. Labor and employment rules in the Philippines change and depend on the facts of each case. Where legal advice or representation is needed, we handle it through our partner counsel under a separate engagement. Please get advice on your own situation before acting on anything you read here.",
    },
  ],
};
