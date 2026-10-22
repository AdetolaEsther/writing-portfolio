
export type WritingCategory = "personal" | "technical" | "published";
export type WritingFilter = "all" | WritingCategory;

export type Writing = {
  id: number;
  title: string;
  description: string;
  category: WritingCategory;
  label: string;
  readTime?: string;
  publication?: string;
  href?: string;
};



export const writings: Writing[] = [
  {
    id: 1,
    title: "SEO and Next.js: How to Implement and Optimize for Better Results",
    description:
      "SEO stands for Search Engine Optimization. It is the process of making a website more visible in search results to increase both the quality and quantity of traffic. Unlike paid ads, SEO focuses on organic traffic, making websites easier for users to find naturally through search engines like Google and Bing",
    category: "technical",
    label: "Technical writing",
    readTime: "5 min read",
    href: "https://dev.to/adetolaesther/seo-and-nextjs-how-to-implement-and-optimize-for-better-results-54pj",
  },
  {
    id: 2,
    title: "The summer I nearly craze",
    description:
      "I’m Oluwafemi Jacob, My surname literally translate to “God loves me” and honestly I can’t agree less. The worst moments of my life didn’t arrive in a thunderclap. They crept in slow, soft, and polite until they owned everything.",
    category: "personal",
    label: "Fiction",
    readTime: "8 min read",
    href: "https://adetolaesther5.wordpress.com/2025/11/04/the-summer-i-nearly-craze/",
  },
  {
    id: 3,
    title: "Why Is Everyone So F*cking Serious?",
    description:
      "For a while now, I’ve had just one question that I haven’t been able to get out of my head, Why is everyone so serious? Not serious in the “focused” way, or serious in the “building your life” way. I mean serious in the way that feels heavy, tight. Almost performative and routine based.",
    category: "personal",
    label: "Personal essay",
    readTime: "6 min read",
    href: "https://adetolaesther5.wordpress.com/2026/03/03/why-is-everyone-so-fking-serious/",
  },
  {
    id: 4,
    title: "The No-Strings Theory",
    description:
      "It’s not news that Lagos has an interesting relationship with commitment. I know it’s bad every where but it’s 10x worse in Lagos, We ghost, We orbit, We lovebomb, We “see where things go”, We insist we’re “just having fun”, we’ve mastered the art of acting like we’re not in relationships while accidentally behaving like we’re in one the way others don’t.",
    category: "published",
    label: "Sex and the Lagos City",
    publication: "Substack",
    readTime: "7 min read",
    href: "https://sexandlagoscity.substack.com/p/the-no-strings-theory",
  },
  {
    id: 5,
    title: "Beneath the Flowers",
    description:
      "She stood still, her palms cupped over her nose and mouth as she watched his lifeless body bleed out. His blood, meandering from his body and paving its path through the white tiles. The clink from the drop of the knife jolted her back to life. She had just killed a man, her ex.",
    category: "published",
    label: "Collaboration",
    publication: "Knots Stories",
    href: "https://drive.google.com/file/d/1MVCaIjytfn7sIybfkCAcZd6BILz4dK7U/view?usp=drive_link",
  },
];


