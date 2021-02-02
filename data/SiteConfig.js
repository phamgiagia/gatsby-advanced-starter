const config = {
  siteTitle: "Hai Pham Blog, Công nghệ, Thể thao và cuộc sống.", // Site title.
  siteTitleShort: "Hai Pham Tech Blog", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Hai Pham Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
    siteUrl: "https://www.leapor.com/", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Learn Work Sport Eat Sleep Repeat, Tech blog and life.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
    siteRssTitle: "Hai Pham Blog, Công nghệ, Thể thao và cuộc sống.", // Title of the RSS feed
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "haipham", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  postsPerPage: 4, // Amount of posts displayed per listing page.
  userName: "Hai Pham", // Username to display in the author segment.
  userEmail: "phamgiagia@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Ho Chi Minh, Viet Nam", // User location to display in the author segment.
  userAvatar: "", // User avatar to display in the author segment.
  userDescription:
    "", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "",
      iconClassName: "fa fa-github",
    },
    {
      label: "Twitter",
      url: "",
      iconClassName: "fa fa-twitter",
    },
    {
      label: "Email",
      url: "",
      iconClassName: "fa fa-envelope",
    },
  ],
  copyright: "Copyright © 2021. Hai Pham Blog", // Copyright string for the footer of the website and RSS feed.
  themeColor: "white", // Used for setting manifest and progress theme colors.
  backgroundColor: "white", // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
