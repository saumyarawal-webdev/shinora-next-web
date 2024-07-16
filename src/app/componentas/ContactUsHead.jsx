import Script from "next/script";

const ContactUsHead = () => {
  return (
    <head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-TGZDYJMBNS"></Script>
      <Script dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TGZDYJMBNS');
      `}}></Script>
      <title>Shinora - Skin & Dental Clinic</title>
      <meta name="description" content="Shinora &mdash; Skin & Dental Clinic" />
      <meta charSet="utf-8" />
      <meta name="author" content="https://themeforest.net/user/bestlooker/portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="icon" href="images/favicon.png" type="image/png" sizes="any" />
      <link rel="icon" href="images/favicon.svg" type="image/svg+xml" />

      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/style.css" />
      <link rel="stylesheet" href="css/style-responsive.css" />
      <link rel="stylesheet" href="css/vertical-rhythm.min.css" />
      <link rel="stylesheet" href="css/magnific-popup.css" />
      <link rel="stylesheet" href="css/owl.carousel.css" />
      <link rel="stylesheet" href="css/splitting.css" />
      <link rel="stylesheet" href="css/YTPlayer.css" />
      <link rel="stylesheet" href="css/demo-strong/demo-strong.css" />

      <link rel="preconnect" href="https://fonts.googleapis.com/" />
      <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
    </head>
  );
};

export default ContactUsHead;
