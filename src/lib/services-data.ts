import { Scale, Gavel, Home, Briefcase, Users, FileText } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export interface Service {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  slug: string;
  description: string;
  details: {
    heading: string;
    sections: {
      title: string;
      content: string;
    }[];
  };
}

export const services: Service[] = [
  {
    icon: Scale,
    title: 'Civil Law',
    slug: 'civil-law',
    description: 'Expert representation in civil disputes, ensuring your rights are protected with strategic litigation.',
    details: {
      heading: 'Comprehensive Civil Litigation Services',
      sections: [
        {
          title: 'Strategic Dispute Resolution',
          content: 'I handle a wide array of civil disputes, including contractual disagreements, property disputes, and personal injury claims. My approach is to first understand the nuances of your situation and then develop a robust legal strategy. I prioritize negotiation and settlement to save you time and money, but I am always prepared to vigorously represent your interests in court if litigation becomes necessary.'
        },
        {
          title: 'Your Rights, My Priority',
          content: 'In every civil case, my primary goal is to protect your rights and achieve the best possible outcome. I provide clear, straightforward advice, keeping you informed at every stage of the legal process. You can trust me to be a dedicated advocate, fighting for a just resolution on your behalf.'
        }
      ]
    }
  },
  {
    icon: Gavel,
    title: 'Criminal Law',
    slug: 'criminal-law',
    description: 'Vigorous defense for a wide range of criminal charges, from misdemeanors to serious felonies.',
    details: {
        heading: 'Dedicated Criminal Defense Advocacy',
        sections: [
          {
            title: 'A Vigorous Defense',
            content: 'Facing criminal charges can be one of the most stressful experiences in life. I provide a staunch defense for individuals accused of a wide range of offenses, from minor infractions to serious felonies. My commitment is to ensure your constitutional rights are upheld at every turn, scrutinizing the prosecution\'s case for any weakness and challenging any evidence improperly obtained.'
          },
          {
            title: 'Protecting Your Future',
            content: 'A criminal conviction can have lasting consequences. I work tirelessly to mitigate the potential impact on your life, exploring every legal avenue, including plea negotiations, motions to suppress, and, when necessary, a full trial. My goal is to secure the most favorable outcome, whether that be a dismissal, acquittal, or reduced charges, to protect your freedom and your future.'
          }
        ]
      }
  },
  {
    icon: Home,
    title: 'Property & Real Estate',
    slug: 'property-real-estate',
    description: 'Comprehensive legal support for all real estate transactions, including sales, leasing, and disputes.',
    details: {
        heading: 'Expert Guidance in Real Estate Law',
        sections: [
          {
            title: 'Secure Your Investment',
            content: 'Real estate transactions are significant investments, and it is crucial to ensure they are handled correctly. I offer comprehensive legal services for residential and commercial property matters, including purchase and sale agreements, leasing, and zoning issues. My meticulous approach to due diligence and contract review is designed to protect your interests and prevent future complications.'
          },
          {
            title: 'Resolving Property Disputes',
            content: 'When disputes arise over property lines, titles, or contractual obligations, you need a knowledgeable advocate to navigate the complexities of real estate law. I represent clients in negotiations, mediation, and litigation to resolve these conflicts efficiently and effectively, always aiming to preserve the value of your investment.'
          }
        ]
      }
  },
  {
    icon: Briefcase,
    title: 'Corporate & Business Law',
    slug: 'corporate-business-law',
    description: 'Advisory on business formation, compliance, M&A, and commercial litigation for companies of all sizes.',
    details: {
        heading: 'Strategic Legal Counsel for Your Business',
        sections: [
          {
            title: 'From Formation to Expansion',
            content: 'Whether you are a startup or an established enterprise, sound legal guidance is the bedrock of business success. I provide advisory services on a full spectrum of corporate matters, including entity formation (LLCs, corporations), corporate governance, and regulatory compliance. My goal is to create a solid legal foundation that supports your business\'s growth.'
          },
          {
            title: 'Commercial Litigation and M&A',
            content: 'I also guide businesses through complex transactions like mergers and acquisitions, ensuring your interests are protected at every step. In the event of a commercial dispute, I offer assertive representation to resolve conflicts through negotiation or litigation, always focused on your bottom line and long-term objectives.'
          }
        ]
      }
  },
  {
    icon: Users,
    title: 'Family Law',
    slug: 'family-law',
    description: 'Sensitive and effective handling of divorce, child custody, and other family-related legal matters.',
    details: {
        heading: 'Compassionate Representation in Family Matters',
        sections: [
          {
            title: 'Navigating Difficult Transitions',
            content: 'Family law matters are deeply personal and often emotionally charged. I approach cases of divorce, separation, and child custody with the sensitivity and compassion they require. My focus is on finding amicable and sustainable solutions that prioritize the well-being of your family, especially children, while steadfastly protecting your rights.'
          },
          {
            title: 'Your Advocate in and out of Court',
            content: 'While I always strive for collaborative resolutions to minimize conflict, I am fully prepared to be your strong advocate in court when a fair agreement cannot be reached. You can rely on me to handle your case with discretion, integrity, and a commitment to achieving the best possible outcome for you and your loved ones.'
          }
        ]
      }
  },
  {
    icon: FileText,
    title: 'Documentation & Contracts',
    slug: 'documentation-contracts',
    description: 'Drafting, reviewing, and negotiating legally sound contracts and agreements to protect your interests.',
    details: {
        heading: 'Ironclad Contracts and Documentation',
        sections: [
          {
            title: 'The Foundation of Agreement',
            content: 'A clearly written, legally sound contract is essential for any personal or business transaction. It prevents misunderstandings and provides a clear framework for your agreements. I specialize in drafting, reviewing, and negotiating contracts that are tailored to your specific needs, ensuring they are comprehensive, unambiguous, and enforceable.'
          },
          {
            title: 'Protecting Your Interests',
            content: 'My meticulous attention to detail ensures that your contracts fully protect your interests and minimize potential risks. From employment agreements to service contracts and partnership agreements, I ensure every clause is scrutinized and crafted to your advantage, giving you confidence and security in all your dealings.'
          }
        ]
      }
  },
];
