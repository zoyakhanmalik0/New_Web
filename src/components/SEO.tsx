import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
}

export default function SEO({
  title = 'Flying Chess AI - Experience AI-Powered Gaming',
  description = 'Play Flying Chess with advanced AI technology. Download for Windows, Mac, Android, iOS, Linux, or play directly in your browser. Secure, fun, and educational.',
  keywords = 'flying chess, AI game, board game, multiplayer, chess game, AI gaming, free download',
  ogImage = '/og-image.jpg',
  ogType = 'website'
}: SEOProps) {
  const fullTitle = title.includes('Flying Chess AI') ? title : `${title} | Flying Chess AI`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#0e7490" />

      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}
