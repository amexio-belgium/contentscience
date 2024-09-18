import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: [
      {
        link: "https://contentscience.be/", // Home page link
        title: "Content Science Confrence 2024",
        pubDate: new Date().toUTCString(), // Current date and time
        description:
          "The Next Wave of Enterprise Innovation: Where Content Management Meets AI. Discover how AI can enhance your content platforms and streamline processes!",
        author: "contact@amexiogroup.com",
        source: "https://contentscience.be/rss",
      },
      {
        link: "https://contentscience.be/register", // Register page link
        title: "Secure Your FREE Spot Today!",
        pubDate: new Date().toUTCString(), // Current date and time
        description:
          "Don’t miss your chance to be part of the conversation. Request your invitation now and secure your spot at Content Science Conference 2024!",
        author: "contact@amexiogroup.com",
        source: "https://contentscience.be/rss",
      },
    ],
  });
}
