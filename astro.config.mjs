import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import expressiveCode from "astro-expressive-code";
import overrideIntegration from './src/overrideIntegration.mjs'
export const locales = {
  root: {
    label: "English",
    lang: "en",
  },
  de: {
    label: "Deutsch",
    lang: "de",
  },
  es: {
    label: "Español",
    lang: "es",
  },
};
const site = "http://localhost:4321/";

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    expressiveCode(),
    overrideIntegration(),
    starlight({
      title: "NEEMSEED",
      editLink: {
        baseUrl: "https://github.com/neemseed/browser",
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/custom.css",
      ],
      social: {
        github: "https://github.com/neemseed/browser",
        twitter: "https://twitter.com/i/flow/login",
      },
      locales,
      sidebar: [
        {
          label: "Guides",
          translations: {
            de: "Beginne hier",
            es: "Comienza aqui",
            ja: "ここからはじめる",
          },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Introduction",
              link: "/en/guides/introduction/",
            },
          ],
        },
        {
          label: "Code Example",
          items: [
            {
              label: "Styling",
              items: [
                { label: "CSS", link: "/en/code/finders/" },
                { label: "Tailwind", link: "/en/code/finders/" },
                { label: "Shiki", link: "/en/code/finders/" },
              ],
            },
            // Each item here is one entry in the navigation menu.
            {
              label: "Navigation",
              link: "/en/code/installation/",
            },
            {
              label: "Finders",
              link: "/en/code/finders/",
            },
            {
              label: "ScreenShot",
              link: "/en/code/screenshot/",
            },
            {
              label: "Cleaning Up",
              link: "/en/code/cleaning/",
            },
            {
              label: "Network",
              link: "/en/code/network/",
            },
            {
              label: "Proxy",
              link: "/en/code/proxy/",
            },
            {
              label: "Mouse",
              link: "/en/code/mouse/",
            },
            {
              label: "Keyboard",
              link: "/en/code/keyboard/",
            },
            {
              label: "Cookies",
              link: "/en/code/cookies/",
            },
            {
              label: "Browser Header ",
              link: "/en/code/browser-header/",
            },
            {
              label: "Javascript",
              link: "/en/code/javascript/",
            },
            {
              label: "Frames",
              link: "/en/code/frames/",
            },
            {
              label: "Frame",
              link: "/en/code/frame/",
            },
            {
              label: "Dialog",
              link: "/en/code/dialog/",
            },
            {
              label: "Animation",
              link: "/en/code/animation/",
            },
            {
              label: "Node",
              link: "/en/code/node/",
            },
            {
              label: "Tracing",
              link: "/en/code/tracing/",
            },
            {
              label: "Thread Safety",
              link: "/en/code/thread-safety/",
            },
          ],
        },
        {
          label: "Reference",
          autogenerate: {
            directory: "reference",
          },
        },
      ],
      lastUpdated: true,
    }),
  ],
});
