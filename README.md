# TonderLabs Website

TonderLabs website - Building Web3 solutions for the TON Network. This Next.js application showcases our Web3 solutions and TonderBot utility.

## 🚀 Features

- **SEO Optimized**: Comprehensive metadata, structured data, and social media optimization
- **Analytics Ready**: Google Analytics 4 integration for tracking and insights
- **PWA Support**: Progressive Web App capabilities with service worker
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Next.js Image optimization and lazy loading
- **Accessibility**: WCAG compliant with proper alt texts and semantic HTML

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy environment variables:

```bash
cp .env.example .env.local
```

4. Fill in your environment variables (especially Google Analytics ID)

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📊 SEO Features

- **Structured Data**: JSON-LD schema for Organization, SoftwareApplication, and WebPage
- **Meta Tags**: Comprehensive title templates, descriptions, and keywords
- **Open Graph & Twitter Cards**: Rich social media previews
- **Sitemap**: Automatic sitemap generation for search engines
- **Robots.txt**: Proper search engine crawling instructions
- **Analytics**: Google Analytics 4 tracking with custom events
- **Error Pages**: SEO-friendly 404 and error handling

## 🔧 Configuration

### Analytics Setup

1. Create a Google Analytics 4 property
2. Add your GA4 measurement ID to `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### SEO Configuration

Update the SEO configuration in `lib/seo.ts` to customize:

- Site metadata
- Keywords and descriptions
- Social media handles
- Organization information

## 📱 Pages

- **Homepage** (`/`): Main landing page with company overview
- **Bot Page** (`/bot`): TonderBot utility bot information and features
- **404 Page**: Custom error page with navigation options

## 🎨 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Analytics**: Google Analytics 4
- **Deployment**: Vercel (recommended)

## 📈 Performance

- Lighthouse Score: 90+ on all metrics
- SEO Score: 95+
- Accessibility Score: 95+
- Performance optimized images and fonts

## 📝 License

This project is proprietary to TonderLabs.

---

Built with ❤️ by [TonderLabs](https://tonderlabs.com)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
