import EarnMoney from "../../assets/earn_money.png";
import SwapCrypto from "../../assets/swap_crypto.png";
import ShopProducts from "../../assets/shop_products.png";
import BulkSend from "../../assets/bulk_send.png";
import RequestPayment from "../../assets/request_payments.svg";
import Kite from "../../assets/kite.png";
import { RevealType } from "@types";

export const LEARN_MORE_SEO_CONFIG: Record<
  string,
  {
    title: string;
    description: string;
  }
> = {
  faq: {
    title:
      "Got Questions? We've Got Answers! Explore Scrim's FAQ for Everything You Need to Know!",
    description:
      "Curious about Scrim? Find answers to your questions and discover the incredible features that make Scrim the talk of the town!",
  },
  "terms-and-conditions": {
    title:
      "Your Privacy Matters! Explore Scrim's Privacy Policy for a Secure and Trustworthy Experience.",
    description:
      "We take your privacy seriously. Dive into Scrim's Privacy Policy to understand how we keep your information safe and secure.",
  },
  "privacy-policy": {
    title:
      "Navigate the Scrim Universe – Your Guide to Exciting Opportunities and Responsibilities",
    description:
      "Before you embark on your Scrim adventure, familiarize yourself with the Terms and Conditions. Learn about the rules and unleash the potential of Scrim!",
  },
};

export const FEATURES_CONFIG = [
  {
    title: "Earn money",
    description:
      "Earn money when you shop products on the Scrim app or complete tasks.",
    image: EarnMoney.src,
  },
  {
    title: "Shop products",
    description:
      "Shop for 500 million+ Amazon or Shopify products and pay with your Scrim balance.",
    image: ShopProducts.src,
  },
  {
    title: "Swap crypto",
    description:
      "Swap between different crypto tokens on Scrim, instant with no P2P needed.",
    image: SwapCrypto.src,
  },
  {
    title: "Transfer money",
    description:
      "Send single or bulk Scrim transfers globally to anyone via their email or phone number.",
    image: BulkSend.src,
  },
];

export const PAYMENT_INFO_CONFIG = [
  {
    title: "Request payment and get paid from anywhere",
    description:
      "With Scrim, you can request payments from anyone globally using their email address. They'll receive a detailed invoice and a payment link for instant, hassle-free payments, no matter where they are. Our payment links offer global pay-in options, ensuring that they can pay you.",
    image: RequestPayment.src,
  },
  {
    title: "Bulk send transfers to your geng globally",
    description:
      "Send payments to multiple emails / phone numbers at once. Your recipients each get a unique redeem link with which they can make a choice to redeem their payment to a bank account in 100+ countries, airtime, mobile money, gift cards, crypto and more.",
    image: Kite.src,
  },
];

export const TESTIMONIALS = [
  {
    name: "Hammed Babatunde",
    testimony:
      "Nice and Amazing features, now I can send money to anyone without having to ask them for their bank account details.",
    rating: 3,
  },
  {
    name: "Faheed Alli-Balogun",
    testimony:
      "Nice and Amazing features, now I can send money to anyone without having to ask them for their bank account details.",
    rating: 5,
  },
];

export const FOOTER_LINKS_CONFIG = [
  {
    header: "Learn More",
    links: [
      {
        name: "FAQ",
        href: "/learn-more?tab=faq",
      },
      {
        name: "Privacy Policy",
        href: "/learn-more?tab=privacy-policy",
      },
      {
        name: "Terms",
        href: "/learn-more?tab=terms-and-conditions",
      },
      {
        name: "Blog",
        href: "/blog",
      },
    ],
  },
  {
    header: "Socials",
    links: [
      {
        name: "Twitter",
        href: "https://twitter.com/sendscrim",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/sendscrim/",
      },
      {
        name: "LinkedIn",
        href: "https://www.linkedin.com/sendscrim/",
      },
    ],
  },
  {
    header: "Parent",
    links: [
      {
        name: "About Chimoney",
        href: "https://chimoney.io/about-chimoney",
      },
      {
        name: "Chimoney API",
        href: "https://chimoney.io/developers-api",
      },
      {
        name: "Contact",
        href: "https://chimoney.io/?book_a_demo=1",
      },
    ],
  },
];

export const BLOG_MOCK_DATA = [
  {
    image: "https://picsum.photos/200/300",
    title: "Introducing the Scrim App",
    description:
      "Short description about the launch of Scrim by Chimoney after the monumental acquisition of the startup.",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "How to make money on Scrim",
    description:
      "Short description about the launch of Scrim by Chimoney after the monumental acquisition of the startup.",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "How to make money on Scrim",
    description:
      "Short description about the launch of Scrim by Chimoney after the monumental acquisition of the startup. Short description about the launch of Scrim by Chimoney after the monumental acquisition of the startup.Short description about the launch of Scrim by Chimoney after the monumental acquisition of the startup.Short description about the launch of Scrim by Chimoney after the monumental acquisition of the startup.",
  },
  {
    image: "https://picsum.photos/200/300",
    title: "How to make money on Scrim",
    description:
      "Short description about the launch of Scrim by Chimoney after the monumental acquisition of the startup.",
  },
];

export const BLOG_TAB_DEFAULTS = [
  {
    attributes: {
      name: "Featured",
      slug: "featured",
    },
  },
  {
    attributes: {
      name: "All",
      slug: "all",
    },
  },
];

export const LEARN_MORE_TAB_CONFIG = [
  {
    name: "FAQ",
    slug: "faq",
  },
  {
    name: "Privacy Policy",
    slug: "privacy-policy",
  },
  {
    name: "Terms and Conditions",
    slug: "terms-and-conditions",
  },
];

export const LEARN_MORE_CONFIG: Record<string, Record<string, RevealType[]>> = {
  faq: {
    "General Information": [
      {
        title: "What is Scrim?",
        content:
          "Scrim is a versatile fintech app that allows you to send payments to multiple emails or phone numbers at once. Recipients receive a unique redeem link, giving them the flexibility to choose how they want to receive their payment, whether it's to a bank account in over 100 countries, airtime, mobile money, gift cards, crypto, and more.",
      },
      {
        title: "How does Scrim work?",
        content:
          "Scrim simplifies payments and transfers. You can send payments to multiple recipients through email or phone numbers. Recipients receive a redeem link to choose how they want to receive their payment. It also offers a range of financial services like shopping with Scrim tokens, instant crypto swapping, and global transfers via email or phone.",
      },
      {
        title: "Is Scrim safe and secure?",
        content:
          "Yes, Scrim prioritizes your security. We implement robust security measures to protect your data and transactions. Our platform is designed with your safety in mind, and your financial and personal information is kept secure.",
      },
      {
        title: "How can I contact customer support?",
        content:
          "You can reach our dedicated customer support team through the 'Contact Us' option within the app. We're here to assist you with any questions or concerns you may have.",
      },
    ],
    "Account Setup": [
      {
        title: "How do I create an account?",
        content:
          "Creating a Scrim account is easy. Download the Scrim app, register with your email or phone number, and follow the on-screen instructions to set up your account.",
      },
      {
        title: "What information is required during the registration process?",
        content:
          "During registration, we'll need basic information such as your name, email, and phone number to set up your Scrim account.",
      },
      {
        title: "Can I use social media accounts to sign up?",
        content:
          "Currently, we require email or phone number registration. However, we're continually working on enhancing user options, including social media sign-up in the future.",
      },
      {
        title: "How can I reset my password?",
        content:
          "If you need to reset your password, simply click the 'Forgot Password' option on the login page. Follow the instructions sent to your registered email or phone number.",
      },
    ],
    "Using the App": [
      {
        title: "What financial services does Scrim offer?",
        content:
          "Scrim offers a range of financial services, including payments, shopping with Scrim tokens, instant crypto swapping, and global transfers via email or phone.",
      },
      {
        title: "What transactions can I perform with Scrim?",
        content:
          "Scrim allows you to send payments, request payments from others, shop with Scrim tokens, swap crypto instantly, and send global transfers via email or phone.",
      },
      {
        title: "How do I make payments or transfers?",
        content:
          "Making payments or transfers is straightforward. Select your recipient(s), choose the payment method, and confirm the transaction. Your recipients will receive a unique redeem link to access their funds, and it is even better if they are Scrim users, the transaction is seamless and is received immediately.",
      },
      {
        title: "How can I earn money with Scrim?",
        content:
          "You can earn with Scrim by sending payments and participating in special promotions, referral programs, and loyalty programs that offer rewards and incentives. Stay updated on our app for earning opportunities.",
      },
    ],
    "Security and Privacy": [
      {
        title: "What security measures does Scrim have in place?",
        content:
          "Scrim employs advanced encryption, secure data storage, and authentication methods to ensure your financial and personal information remains protected.",
      },
      {
        title: "How is my personal and financial information protected?",
        content:
          "Your data is safeguarded through industry-standard security practices. We never share your data without your consent.",
      },
      {
        title:
          "What should I do if I suspect unauthorized access to my account?",
        content:
          "If you suspect unauthorized access, contact our customer support immediately for assistance in securing your account.",
      },
      {
        title: "Is my data shared with third parties?",
        content:
          "Scrim values your privacy. We don't share your data with third parties without your consent. For more details, refer to our privacy policy.",
      },
    ],
    "Fees and Charges": [
      {
        title: "Are there any fees associated with using Scrim?",
        content:
          "Scrim may charge nominal fees for certain transactions. You can review our fee schedule within the app or on our website for detailed information.",
      },
      {
        title: "How are transaction fees calculated?",
        content:
          "Transaction fees are calculated based on the type of transaction and the recipient's chosen payment method. You can find the specific fee for your transaction before confirming.",
      },
      {
        title: "Can I view a statement of my transaction history?",
        content:
          "Yes, you can easily access your transaction history within the Scrim app. This allows you to track your past payments and transfers.",
      },
    ],
    "Technical Issues": [
      {
        title:
          "What should I do if I encounter technical difficulties with the Scrim app?",
        content:
          "If you face technical issues, try restarting the app or updating it to the latest version (in case a latest version is available). If the problem persists, contact our support team for assistance.",
      },
      {
        title: "How do I update the app to the latest version?",
        content:
          "You can update the Scrim app through your device's app store. Regularly checking for updates ensures you have the latest features and security improvements.",
      },
      {
        title: "Is Scrim compatible with all devices and operating systems?",
        content:
          "Scrim is designed to work with a wide range of devices and operating systems. Ensure your device meets our system requirements for the best experience.",
      },
    ],
  },
  "privacy-policy": {
    "Scrim Privacy Policy": [
      {
        title: "INTRODUCTION",
        content: `Scrim’s services are provided by, and you’re contracting with: Chi Technologies Inc. organized under the Canadian Federal and Provincial privacy laws and regulations including the Personal Information and Electronic Documents Act.<br/><br/>
        This privacy policy (this "Privacy Policy") explains how personal information is collected, used, stored, and disclosed by Scrim. This Privacy Policy applies to our website and all related sites, applications, services, and tools regardless of how you access or use them. This Privacy Policy is part of our Terms of Use. By accessing or using our Services, website, software, services, applications, products, and content offered via Scrim (collectively, the “Services”), you agree to this Privacy Policy and our Terms of Use.<br/><br/>
        This Privacy Policy applies to your use of (regardless of means of access) our Services. You may access or use our Services through a desktop, laptop, mobile phone, tablet, or other consumer electronic device (each, a "Device").<br/><br/>
        This Privacy Policy does not apply to services that are not owned or controlled by Scrim, including third-party websites. These other sites may place their own cookies, plug-ins, or other files on your computer, collect data, or solicit personal information from you. Scrim does not control these third-party websites and we are not responsible for their privacy statements. Please consult such third parties’ privacy statements.`,
      },
      {
        title: "INFORMATION WE COLLECT",
        content: `1. Information You Provide Us<br/><br/>
          Information You Provide Us To gain full access to our website and services, you must register for a Scrim account. When you register for an account, we collect Personal Information that you voluntarily provide to us. Personal Information refers to information relating to an identified person or information that can be used to identify you (e.g. email address, bank details, name, telephone number). It may also include anonymous information that may be linked to you specifically (e.g. IP address).<br/><br/>
          The Personal Information we have about you is directly made available to us when you:<br/><br/>
          1. Sign up for a Scrim Account;<br/>
          2. Use any of our services;<br/>
          3. Contact us or our customer support team;<br/>
          4. Fill out our online forms;<br/><br/>
          2. Personal Information We May Collect About You<br/><br/>
          We may collect, use, process, store, or transfer personal information such as:<br/><br/>
          - Identity Data & Identification Documents: Information such as your full name(s), your government-issued identity number, bank verification number (BVN) or NIN, and your date of birth. Identification documents may include a passport or any Government-issued identity card, a photograph (if applicable), and any other registration information you may provide to prove you are eligible to use our services. This data is to enable us to verify your identity in order to offer our services to you;<br/><br/>
          - Contact Data: This is data that is needed to reach out to you, such as your contact address, email address, telephone number, details of the device you use, and billing details;<br/><br/>
          - Log/Technical information: When you access Scrim’s services, our servers automatically record information that your browser sends whenever you visit a website, links you have clicked on, length of visit on certain pages, unique device identifier, log-in information, location, and other device details.<br/><br/>
          - Financial Data: Information, such as personal account number and location, the date and the total amount of transaction, and other information provided by financial institutions when we act on their behalf;<br/><br/>
          - Transactional Data: These are information relating to payments when you as a customer are using our products or services;<br/><br/>
          - Marketing and Communications Data: This includes both a record of your decision to subscribe or to withdraw from receiving marketing materials from us or from our third parties.<br/><br/>
          - Records of your discussions with us, if we contact you, and if you contact us.<br/>
        `,
      },
      {
        title: "HOW WE MAY USE YOUR PERSONAL INFORMATION",
        content: `1. We may use the Personal Information we collect to:<br/><br/>
          1. Create and manage any accounts you may have with us, verify your identity, provide our services, and respond to your inquiries;<br/>
          2. To administer Scrim (i.e. to provide our Services to you) and for internal operations, including troubleshooting, data analysis, testing, research, statistical, and survey purposes (i.e. to guarantee Scrim’s stability and security) and to solicit your feedback;<br/>
          3. Process your payment transactions (including authorization, clearing, chargebacks, and other related dispute resolution activities);<br/>
          4. Protect against and prevent fraud, unauthorized transactions, claims, and other liabilities;<br/>
          5. Provide, administer, and communicate with you about products, services, offers, programs, and promotions of Scrim, financial institutions, and partners;<br/>
          6. Evaluate and improve our business, including developing new products and services;<br/>
          7. As necessary to establish, exercise, and defend legal rights; As may be required by applicable laws and regulations, including for compliance with Know Your Customers and risk assessment, Anti-Money Laundering, anti-corruption, and sanctions screening requirements, or as requested by any judicial process, law enforcement or governmental agency;<br/>
          8. To use data analytics to improve our Website, products or services, and user experiences;<br/>
          9. For other purposes for which we provide specific notice at the time of collection.<br/>
        `,
      },
      {
        title: "HOW WE SHARE YOUR PERSONAL DATA",
        content: `1. We may disclose or share your Personal Information with third parties which include our affiliates, employees, officers, service providers, agents, suppliers, and subcontractors as may be reasonably necessary for the purposes set out in this policy.<br/><br/>
          Scrim only shares personal information with External Third parties in the following limited circumstances:<br/><br/>
          1. We have your consent. We require opt-in consent for the sharing of any personal information; We share Personal Information with third parties directly authorized by you to receive Personal Information, such as when you authorize a third-party application provider to access your account. The use of your Personal Information by an authorized third party is subject to the third party's privacy policy and Scrim shall bear no liability for any breach which may arise from such authorization by you;<br/><br/>
          2. We provide such information to our subsidiaries, affiliated companies, or other trusted businesses or persons for the purpose of processing personal information on our behalf. We require that these parties agree to process such information based on our instructions and in compliance with this Privacy Policy and any other appropriate confidentiality and security measures;<br/><br/>
          3. We have a good faith belief that access, use, preservation, or disclosure of such information is reasonably necessary to:<br/><br/>
          - satisfy any applicable law, regulation, legal process, or enforceable governmental request,<br/>
          - enforce applicable Terms of Service, including investigation of potential violations thereof<br/>
          - detect, prevent, or otherwise address fraud, security or technical issues, or<br/>
          - protect against imminent harm to the rights, property, or safety of Scrim, its users, or the public as required or permitted by law<br/><br/>
          If Scrim becomes involved in a merger, acquisition, or any form of sale of some or all of its assets, we will provide notice before personal information is transferred and becomes subject to a different privacy policy.<br/>
        `,
      },
      {
        title: "OTHER RIGHTS TO YOUR PERSONAL INFORMATION WITH US",
        content: `Below are the rights you have as a user in relation to your Personal Information;<br/><br/>
          1. Right to request access or copies to your Personal Information by contacting us<br/>
          2. Right to information on their personal information collected and stored;<br/>
          3. Right to objection or request for restriction; this means refrain us from doing certain things with your data or restrict the extent of our collection or processing of your data.<br/>
          4. Right to correct or rectify any Personal Information that you provide which may be incorrect, out of date or inaccurate.<br/>
          5. Right to object to the processing of your Personal Information for marketing purposes. You have a right to ask us not to contact you for marketing purposes by adjusting your notification preference on the settings page or by opting out via the unsubscribe link in marketing emails we send you.<br/>
          6. Right to request that Scrim erase your Personal Information. You have the right to ask us to erase your Personal Information. Please note that this is a limited right which applies where the data is no longer required, or the processing has no legal justification. The exceptions to this right is where the applicable law requires us to retain a historical archive or where we retain a core set of your personal data to ensure we do not inadvertently contact you in future where you object to your data being used for marketing purposes.<br/>
          7. Right to object to decisions being taken by automated means which produce legal effects concerning you or similarly significantly affect you.<br/>
          8. Right to request the movement of data from Scrim to a third party; this is the right to the portability of data;<br/>
          9. The basis of we processing your Personal Information is your consent. You also have the choice at any time to withdraw consent which you have provided.<br/>
          10. You may decline to provide your Personal Information when it is requested by Scrim, however, certain services or all the services may be unavailable to you. You may review your account settings and update your Personal Information directly or by contacting us.<br/>
          11. If you wish to exercise any of the rights set above, please contact us using the contact information provided in the Contact Us segment below.<br/>
        `,
      },
      {
        title: "SECURITY AND STORAGE OF YOUR PERSONAL INFORMATION",
        content: `We have suitable security measures in place to prevent your Personal Information from being accidentally lost or used or accessed in an unauthorized way by a third party. When your bank account information is transmitted via our Services, it will be protected by encryption technology. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your Personal Information on our instructions. We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.<br/><br/>
          Unfortunately, no method of electronic transmission or storage via the Internet is 100% secure. Therefore, we cannot guarantee absolute security of your Personal Information. You also play a role in protecting your Personal Information. Please safeguard your password for your Scrim account and do not share them with others. If we receive instructions using your Scrim account login information, we will consider that you have authorized the instructions. You agree to notify us immediately of any unauthorized use of your Scrim account or any other breach of security. We reserve the right, in our sole discretion, to refuse to provide our Services, terminate Scrim accounts, and to remove or edit content.<br/><br/>
          Subject to applicable law, which might, from time to time, oblige us to store your Personal Information for a certain period of time, we will retain your Personal Information for as long as necessary to fulfil the purposes we collected it for, including the purposes of satisfying any legal, accounting, or reporting requirements.<br/>
        `,
      },
      {
        title: "COOKIES",
        content: `Like many other websites, we use cookies to distinguish you from other users and to customize and improve our services. Cookies allow our servers to remember IP addresses, date and time of visits, monitor web traffic, and prevent fraudulent activities.<br/><br/>
          Our cookies never store personal or sensitive information; they simply hold a unique random reference to you so that once you visit the site we can recognize who you are and provide certain content to you.<br/><br/>
          If your browser or browser add-on permits, you have the choice to disable cookies on our website, however, this may impact your experience using our website. Unless you opt out of Cookies, we will assume you consent to the use of Cookies.<br/>
        `,
      },
      {
        title: "AGE RESTRICTION",
        content: `Our Services are not directed, or intended to be attractive, to children under the age of 18. We do not knowingly collect Personal Information from children under the age of 18. If you are under the Age Limit, please do not use the Services, and do not provide any personal data to us.<br/><br/>
          If as a parent or guardian, you become aware that your child or ward child has provided us with any information without your consent, please contact us through the details provided in this Privacy Policy.<br/>
        `,
      },
      {
        title: "OPT-OUT RIGHTS",
        content: `If you do not wish to receive offers or other notices from us in the future, you can 'opt-out' by contacting us as indicated at the end of this Privacy Policy or by following the 'unsubscribe' instructions in any communication you receive from us. Please be aware that if you are a User, you are not able to opt out of receiving communications about your Scrim account or related transactions with us.<br/>
        `,
      },
      {
        title: "CHANGE TO OUR PRIVACY POLICY",
        content: `We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.<br/>
          This policy is effective as of 2023-10-11.<br/>
        `,
      },
      {
        title: "CONTACT US",
        content: `If you have any questions, comments, or concerns with respect to your Personal Information or this Privacy Policy, you may contact us by:<br/><br/>
          - reaching out to the customer service support available on the website.<br/>
          - sending an email to support@scrim.com<br/>
        `,
      },
    ],
  },
  "terms-and-conditions": {
    "Scrim Terms And Conditions": [
      {
        title: "INTRODUCTION",
        content: `This contract is between you and Scrim. (“Scrim”, “we”, “us”, or “our” as applicable), and covers all aspects of your use of our Services, which include the website, app, and any other materials produced by Scrim. These terms apply in full force and when you create a Scrim Account, access our Services, or otherwise interact with us, you agree to be bound by this Agreement and agree to receive communication relating to the Services or your Scrim Account in electronic format. Additionally, you affirm that you are at least eighteen (18) years old and legally allowed to enter into this Agreement. You expressly accept all Terms and Conditions contained herein in full and without limitation or qualification, including our: Privacy Policy. You must not use any of the Services if you have any objection to any of these terms.<br/><br/>
    It is essential that you read and understand all the terms of each of our policies as well as all the other agreements that are applicable to you. For certain Services, we may have additional terms and conditions that we will communicate to you through the Service or by other means, and these supplementary terms and conditions shall be included in this Agreement.<br/><br/>`,
      },
      {
        title: "PURPOSE AND SCOPE OF AGREEMENT",
        content: `This Terms of Service is an Agreement between you and Scrim. It sets forth the terms and conditions that shall govern the use of the Platform and the services. It details Scrim’s obligations to you. It also highlights certain risks on using the services and you must consider such risks carefully as the provision of this Agreement will bind you through your use of this website or any of our services.<br/><br/>
    Our Services permit you to move money in supported currencies, send or receive money into your Scrim Balance, keep amounts in your Scrim Balance, pull out funds held in your Scrim Balance, and send funds to recipients. We carry the sole authority to refuse to accept any user or to complete any command to transmit, receive, send, withdraw, or convert money held in your Scrim Account at any time.<br/><br/>`,
      },
      {
        title: "REGISTRATION",
        content: `To use Scrim, you have to create a Scrim account by registering. To register, you will provide us with certain information such as your email, first name, last name, and phone number and we may seek to verify your information, (by ourselves or through third parties), after which we will approve your account unless deemed risky. You permit us to do all these.<br/><br/>
    GETTING TO KNOW YOU<br/><br/>
    We are required by law to carry out all necessary security and customer due diligence checks on you in order to provide any services to you. You agree to comply with any request from us for further information and provide such information in a format acceptable to us. In addition, you agree that we may make, directly or through any third party, any inquiries we consider necessary to validate the information you provided to us, including checking commercial databases or credit reports. Scrim reserves the right to close, suspend, or limit access to your Scrim Account and/or the Services in the event we are unable to obtain or verify this information. You authorize us to obtain one or more of your credit reports, from time to time, to establish, update or renew your Scrim account with us or in the event of a dispute relating to this agreement and activity under your Scrim account.<br/><br/>
    ACCOUNT SECURITY<br/><br/>
    You are solely responsible for maintaining adequate security and control of any email IDs, passwords, or other details you use to access your Scrim Account and Services. You agree not to allow anyone else to have or use your password details and comply with all reasonable instructions regarding account access and security. In the event you share your password details, Scrim will not be liable to you for losses or damages. You will also take all reasonable steps to protect the security of the personal electronic device through which you access Scrim’s services (including, without limitation, using PIN and/or password-protected personally configured device functionality to access Scrim’s services and not sharing your device with other people). Immediately change your password and contact Scrim customer support if:<br/><br/>
    - anyone asks for your password, OTP, or any other security-related aspect of your Scrim Account.<br/><br/>
    - your email address becomes compromised.<br/><br/>
    - you suspect your Scrim Account or login details including your password or any other security features are stolen, lost, used without authorization, or otherwise compromised.<br/><br/>
    - your transaction history for your Scrim Account shows transactions that you did not initiate.<br/><br/>
    We may suspend your Scrim Account or otherwise restrict its functionality if we have concerns about the security of the Scrim Account or any of its security features; or potential unauthorized or fraudulent use of your Scrim Account or any of its security features.<br/><br/>`,
      },
      {
        title: "AGE RESTRICTION",
        content: `Our website and services are directed to people aged 18 and above. You are only permitted to use the Services if you are 18 or older. We do not knowingly engage people younger than the age of 18.<br/><br/>`,
      },
      {
        title: "WARRANTIES AND REPRESENTATIONS",
        content: `You represent and warrant to Scrim that:<br/><br/>
    - You have the full power, authority, regulatory approval, and corporate authorisation to enter into, execute, deliver, and perform this Agreement.<br/><br/>`,
      },
      {
        title: "CHARGES AND FEES",
        content: `You agree to pay us for the services we render. Our Fees will be calculated as demonstrated on the Pricing page on the website. Subject to the terms of this Agreement, Scrim will send to your designated bank settlement account (“Bank Account”), GiftCards, and Mobile Money all amounts settled and due to you from your transactions, minus our stated fees, any Reversals, Invalidated Payments, Chargebacks, Reversals, Refunds or other amounts that you owe to Scrim under this Agreement (“Payout”). We reserve the right to revise our fees. In the event that we revise our fees, we will notify you within twenty-four (24) hours of such change.<br/><br/>`,
      },
      {
        title: "INTELLECTUAL PROPERTY",
        content: `Unless otherwise stated, Scrim and/or its licensors own the intellectual property rights and materials on the website subject to the license below. All text, formatting (including without limitation the arrangement of materials on the Scrim website and the graphics, animation, tools, commercials, music, video, articles, sound, copy, trade names, logos, and other materials and information on the website are subject to the intellectual property rights of Scrim and its affiliates and their licensors and licensees (collectively the “Content”). We do not grant you any right, license, title, or interest to any of our intellectual Property rights which you may or may not have access to. This Content may not be copied, reverse-engineered, decompiled, disassembled, modified, or reposted to other websites. Nothing on the Scrim site should be construed as granting by implication or otherwise, any license or right to use any Trademark displayed on the Scrim website without the written permission of Scrim or such third party that may own the Trademark. You agree to take such actions including any legal or official document or other documents that may be needed to further affirm our intellectual property rights.<br/><br/>`,
      },
      {
        title: "DISCLAIMERS",
        content: `SCRIM WILL TRY TO ENSURE THAT THE WEBSITE IS AVAILABLE AT ALL TIMES AND BUG-FREE. HOWEVER, IT IS USED AT YOUR OWN RISK.<br/><br/>
        OUR WEBSITE AND SERVICES ARE PROVIDED “AS IS” WITHOUT ANY EXPRESS, IMPLIED, AND/OR STATUTORY WARRANTIES (INCLUDING, BUT NOT LIMITED TO, ANY IMPLIED OR STATUTORY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR USE OR PURPOSE, TITLE, AND NON-INFRINGEMENT OF INTELLECTUAL PROPERTY RIGHTS). WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, SCRIM MAKES NO WARRANTY THAT OUR WEBSITE AND SERVICES WILL MEET YOUR REQUIREMENTS OR THAT OUR WEBSITE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU THROUGH OUR WEBSITE OR FROM SCRIM, ITS PARENTS, SUBSIDIARIES, OR OTHER AFFILIATED COMPANIES, OR ITS OR THEIR SUPPLIERS (OR THE RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS OF ANY SUCH ENTITIES) (COLLECTIVELY, "SCRIM PARTIES") SHALL CREATE ANY WARRANTY.<br/><br/>
        WE HAVE THE RIGHT TO SUSPEND, WITHDRAW, DISCONTINUE, OR CHANGE ALL OR ANY PART OF OUR SERVICE WITHOUT NOTICE. WE WILL NOT BE LIABLE TO YOU IF FOR ANY REASON OUR SERVICES ARE UNAVAILABLE (IN WHOLE OR IN PART) AT ANY TIME OR FOR ANY PERIOD. YOU ARE RESPONSIBLE FOR MAKING ALL ARRANGEMENTS NECESSARY FOR YOU TO HAVE ACCESS TO THE SERVICES.<br/><br/>`,
      },
      {
        title: "LIMITATION OF LIABILITY",
        content: `Scrim and its directors, officers, agents, employees, and affiliates will not be liable for any actions, claims, losses, damages, liabilities, and expenses including legal fees from your use of the Site and services.<br/><br/>`,
      },
      {
        title: "INDEMNITY",
        content: `You hereby indemnify Scrim and undertake to keep Scrim, its staff, and affiliates indemnified against any losses, damages, costs, liabilities, and expenses (including without limitation reasonable legal fees and expenses) arising out of any breach by you of any provision of these Terms, or arising out of any claim that you have breached any provision of these Terms, or arising from a suspension or other action taken with respect to your Scrim Account, or arising from your need to modify your practices, content, or behavior, or your loss of or inability to do business, as a result of changes to this Agreement or any other Scrim policy. You will indemnify and hold Scrim harmless from and against any claim, suit, or proceeding brought against Scrim arising from or in connection with violations of Intellectual Property or other rights of third parties in relation to your use of the Services.<br/><br/>
        If you have a dispute with any other Scrim Account holder or a third party that you send money to or receive money from using the Services, you release Scrim from any and all claims, demands and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with such disputes.<br/><br/>`,
      },
      {
        title: "TERMINATION",
        content: `You may terminate this Agreement by closing your Scrim Account.<br/><br/>
        We may, in our sole discretion suspend or close your Scrim Account and your access to Scrim’s services and any funds, or terminate this Agreement, If;<br/><br/>
        You do not comply with or breach any of the provisions of this Agreement;<br/><br/>
        We are required to do so by law, government authority or agency, or law enforcement agency;<br/><br/>
        Where a suspicious or fraudulent transaction occurs<br/><br/>
        We have reason to believe you are involved in any fraudulent activity, money laundering, terrorism financing, or other criminal or illegal activity.<br/><br/>
        Scrim may take further actions it deems appropriate to deal with the breach, which may include, suspending your access to the website, prohibiting you from accessing the website and Services, blocking computers using your IP address from accessing the website and Services, contacting your internet service provider to request that they block your access to the website and Services and/or bringing court proceedings against you.<br/><br/>
        We may also suspend your Scrim Account if it has been compromised or for other security reasons; or has been used or is being used without your authorization or fraudulently.<br/><br/>
        If we close your Scrim Account or terminate your use of the Services for any reason, we’ll provide you with notice of our actions and make any unrestricted prepaid money held in your Scrim Account available for withdrawal.  You are responsible for all reversals, chargebacks, fees, fines, penalties, and other liability incurred by Scrim, any other Scrim customer, or a third party, caused by or arising out of your breach of this Agreement, and/or your use or the use of your authorized third parties of the Services. You agree to reimburse Scrim, any Scro, customer, or a third party for any and all such liability.<br/><br/>
        On termination for any reason, all rights granted to you in connection with the App shall cease, you must immediately delete or remove the App from your devices.<br/><br/>`,
      },
      {
        title: "HOW DO I CLOSE MY SCRIM ACCOUNT",
        content: `You may close your Scrim account at any time by;<br/><br/>
        Login to your account on the mobile app<br/><br/>
        Navigate to More<br/><br/>
        Select 'Delete your account'<br/><br/>
        Agree to the terms of service<br/><br/>
        Tap the 'Continue with account deletion' button<br/><br/>
        Enter a reason for deleting the account & account password<br/><br/>
        Tap the 'Delete account' button<br/><br/>
        Pending Payments<br/><br/>
        If there are any pending transactions relating to your Scrim Account when you initiate account deletion, your Scrim Account will be closed promptly after such transactions are completed.<br/><br/>
        Remaining Balances<br/><br/>
        Before closing your account, you should empty your currency balances. Unused balances in your Scrim account may be lost, so ensure to use or remove all the funds in your account. Scrim will not be liable for any losses that may occur due to failure to remove all funds in your account. To empty your balances, you should;<br/><br/>
        Login to your account on the mobile app<br/><br/>
        On the homepage, select the Payout option you wish to withdraw funds from<br/><br/>
        Tap the 'Send' button<br/><br/>
        Select 'Send to a saved recipient' or 'Send to another account'<br/><br/>
        Fill required fields on the withdrawal form<br/><br/>
        Tap the 'Continue' button<br/><br/>
        Review your transaction and tap the 'Finish' button<br/><br/>
        You must not close your Scrim Account to avoid an investigation. If you attempt to close your Scrim Account during an investigation, we may hold your money until the investigation is fully completed. You agree that you will continue to be responsible for all obligations related to your Scrim Account even after it is closed. As a regulated financial institution, Scrim is obligated to retain some of your data for purposes such as security, fraud, accounting, reconciliation, anti-money laundering, and reporting purposes.<br/><br/>`,
      },
      {
        title: "DISPUTE RESOLUTION",
        content: `If a dispute of any kind whatsoever arises between the Parties in connection with or arising out of the execution of this Agreement, including but not limited to any dispute as to opinion, instruction, determination, assessment, estimate, valuation, certification, or invoice submitted by a Party, or in connection with this Agreement construction, validity, interpretation, enforceability of this Agreement shall be finally settled pursuant to the dispute resolution process described in this clause.<br/><br/>
        The Parties shall use their best endeavours to settle any dispute or difference of opinion between them, arising from or in connection with this Agreement amicably through mutual discussion and negotiation pursuant to this clause.<br/><br/>
        If the Parties are unable to settle the dispute as indicated above within 15 (fifteen) Business Days, the dispute shall be referred to Mediation by the legal representative of either of the Parties. The parties will choose a mutually acceptable mediator.<br/><br/>
        The findings of the Mediator and subsequent award/Agreement shall be binding on both parties. Each Party shall bear its respective costs in connection with the Mediation.<br/><br/>`,
      },
      {
        title: "ERRORS",
        content: `With regard to your Scrim Account, the following are considered Errors:<br/>
        1. When money is either incorrectly withdrawn from your Scrim Account or incorrectly deposited into your Scrim Account, or when a transaction or Transfer is incorrectly recorded in your Scrim Account;<br/>
        2. You send money to a third party or withdraw money, and the incorrect amount is debited from your Scrim Account;<br/>
        3. An incorrect amount is credited to your Scrim Account;<br/>
        4. A transfer to or from your Scrim Account is missing from or not properly identified in your Scrim Account statement;<br/>
        5. We make a computational or mathematical error related to your Scrim Account or currency you have converted;<br/>
        6. You request additional information or clarification concerning a transfer to or from your Scrim Account, including a request you make to determine whether an error has occurred;<br/>
        7. You inquire about the status of a pending transfer to or from your Scrim Account.<br/>
        If you believe an Error of the type described above has occurred with respect to your Scrim Account, and you duly contact us in accordance with the information above, we will investigate and determine whether an error occurred within ten (10) Business Days after we hear from you and will correct any error promptly. If we need more time, however, we may take up to 45 days to investigate your complaint or question. If we decide to do this, we will credit your Scrim Account within ten (10) Business Days for the amount you think is in error, so that you will have the use of the money during the time it takes us to complete our investigation.<br/>
        We will rectify any Errors that we discover. If the Error results in:<br/>
        - You receiving less than the correct amount to which you were entitled, then we will credit your Scrim Account for the difference between what you should have received and what you actually received.<br/>
        - You receiving more than the correct amount to which you were entitled, then we will debit your Scrim Account for the difference between what you actually received and what you should have received.<br/>
        - Our not completing a transaction on time or in the correct amount, then we will be responsible to you for your losses or damages directly caused by this failure, unless:<br/>
          a. through no fault of ours, you did not have enough available funds to complete the transaction;<br/>
          b. our system was not working properly and you knew about the breakdown when you started the transaction; or<br/>
          c. the error was due to extraordinary circumstances outside our control (such as fire, flood, or loss of Internet connection), despite our reasonable precautions.<br/>
        The following are not considered Errors:<br/>
        - If you give someone access to your Scrim Account (by giving them your login information) and they use your Scrim Account without your knowledge or permission. You are responsible for transactions made in this situation;<br/>
        - Invalidation and reversal of a payment or transaction as a result of the actions described under Reversals and Chargebacks;<br/>
        - Routine inquiries about your Scrim Account balance;<br/>
        - Requests for duplicate documentation or other information for recordkeeping purposes;<br/>
        - An inquiry about the status of a currency conversion order (except where the funds from the order were not made available to the recipient by the disclosed date of availability);<br/>
        - A change requested by the recipient of funds sent from you;<br/>
        - A change in the amount or type of currency received by a designated recipient from the amount or type of currency stated in the disclosure provided you, if we relied on information provided by you in making the disclosure;<br/>
        - Delays that result from Scrim applying holds or limitations. Our decision about holds or limitations may be based on confidential risk management procedures and the protection of Scrim, our customers, and/or service providers. In addition, we may be restricted by regulation or a governmental authority from disclosing certain information to you about such decisions. We have no obligation to disclose the details of our risk management or security procedures to you;<br/>
        - Delays based on a review of a potentially high-risk transaction;<br/>
        - Your errors in making a transaction (for example, mistyping the amount of money that you are sending or choosing an incorrect destination Currency).`,
      },
      {
        title: "SEVERABILITY",
        content: `The invalidity, illegality, or unenforceability of any of the provisions of this Agreement shall not affect the validity, legality, and enforceability of the remaining provisions of this Agreement.`,
      },
      {
        title: "ASSIGNMENT",
        content: `You hereby agree that we may assign, transfer, sub-contract, or otherwise deal with our rights and/or obligations under these terms and conditions.<br/>
        Without our prior written consent, you may not assign, transfer, sub-contract, or otherwise deal with any of your rights and/or obligations under these terms and conditions.`,
      },
      {
        title: "REVERSALS AND CHARGEBACKS",
        content: `If you receive a payment that is later refunded or invalidated for any reason, you are responsible for the full amount of the payment sent to you plus any fees (including any applicable chargeback fee described below). Whenever a transaction is reversed, Scrim will refund or reverse the transaction from your Scrim Account in the same currency as the original transaction. If your Scrim Account balance for a particular currency is insufficient to cover the amount of a refund or reversal, Scrim will perform a currency conversion in order to refund or reverse the transaction, subject to the exchange rate being offered by Scrim in the applicable currencies at that time.<br/>
        If you receive a debit or credit card-funded payment through your Scrim, Account and you (or a third party) pursue a chargeback for the transaction with the card issuer, then Scrim may assess you with a chargeback fee (for facilitating the chargeback process) and will remove the charged back funds from your Scrim account.<br/>
        Payments to you may be invalidated and reversed by Scrim if:<br/>
        - Our investigation of a bank reversal finds that the transaction was fraudulent.<br/>
        - Scrim sent the payment to you in error.<br/>
        - The payment was unauthorized.<br/>
        - You received the payment for activities that violated this Agreement or any other agreement between you and Scrim.<br/>
        When you receive a payment, you are liable to Scrim for the full amount of the payment sent to you plus any fees if the payment is later invalidated for any reason.<br/>
        If your Scrim Account goes into a negative amount, including as a result of a chargeback, reversal of a transaction, deduction of fees, or any other action carried by you or a third party, that negative amount represents an amount you owe to Scrim and you promise to repay the negative amount immediately without any notice from us. We may send you reminders or take such other reasonable actions to recover the negative amount from you, for example, we may use a debt collection service or take further legal actions. We may charge you for any costs we may incur as a result of these collection efforts.`,
      },
      {
        title: "UPDATES, MODIFICATION & ADJUSTMENTS",
        content: `Scrim reserves the right to change, revise, or modify these Terms from time to time by updating this page. The changes will not be retroactive, and the most current version of the Terms will always be on this page and will continue to govern our relationship with you. We will also try to notify you of any material changes which could be done via the email associated with your account or service notification. By continuing to use our services after the changes become effective, you agree to be bound by the revised Terms.`,
      },
      {
        title: "DATA PROTECTION",
        content: `With respect to all the Personal Information belonging to, and/or processed in connection with Scrim or this website, such Personal Information at all times comply with all Data Protection Laws in the territory, in all respect and in particular the General Data Protection Regulation and all applicable data protection regulation in force. Scrim maintains a Privacy Policy which provides an overview of the Personal Information we collect about you or that you provide to us and how we store and use the information provided by you in line with applicable Data protection legislations. By using Scrim’s Services, you consent to such processing and you commit to providing accurate information.`,
      },
      {
        title: "THIRD-PARTY MATERIALS",
        content: `Certain Website or App functionality may make available access to information, products, services, and other materials made available by third parties (“Third Party Materials”), or allow for the routing or transmission of such Third Party Materials, including via links. By using such functionality, you are directing us to access, route, and transmit to you the applicable Third Party Materials.<br/>
        Any access or consent you give to such third-party materials is an agreement between you and it, we will have no liability for any loss whatsoever, as a result of any such agreement. We neither control nor endorse, nor are we responsible for, any Third Party Materials, including the accuracy, validity, timeliness, completeness, reliability, integrity, quality, legality, usefulness, or safety of Third Party Materials, or any intellectual property rights therein. Certain Third Party Materials may, among other things, be inaccurate, misleading, or deceptive. Nothing in this Agreement shall be deemed to be a representation or warranty by us with respect to any Third Party Materials. We have no obligation to monitor Third Party Materials, and we may block or disable access to any Third Party Materials (in whole or part) through the Website or App at any time. In addition, the availability of any Third Party Materials through the Website or App does not imply our endorsement of, or our affiliation with, any provider of such Third Party Materials, nor does such availability create any legal relationship between you and any such provider.<br/>
        Your use of Third Party Materials is at your own risk and is subject to any additional terms, conditions, and policies applicable to such Third Party Materials (such as terms of service or privacy policies of the providers of such Third Party Materials).`,
      },
      {
        title: "GOVERNING LAW",
        content: `The formation, existence, construction, performance, validity and all aspects whatsoever of this Terms of Service or of any term of this Agreement will be governed by the Laws of Canada.`,
      },
      {
        title: "CONTACT US",
        content: `This website is owned by Chi Technologies Inc. incorporated under the Laws of Canada. If you have any complaints or enquires about us and our Services, you may contact us at:<br/>
        - reaching out to the in-app support channel<br/>
        - sending an email to support@scrim.com<br/><br/>
        Effective Date: 12th day of October 2023`,
      },
    ],
  },
};
