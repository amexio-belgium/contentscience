import fs from "node:fs";
import { loadEnv } from "vite";
const { PUBLIC_ASTRO_BASE_PATH } = loadEnv(
  process.env.NODE_ENV,
  process.cwd(),
  "",
);
const basePath = PUBLIC_ASTRO_BASE_PATH || "";

const content = `
@font-face {
    font-family: 'Contane';
    src: url('${basePath}/fonts/ContaneMediumRegular.woff2') format('woff2');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Contane';
    src: url('${basePath}/fonts/ContaneRegular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lexend';
    src: url('${basePath}/fonts/Lexend-Light.woff2') format('woff2');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lexend';
    src: url('${basePath}/fonts/Lexend-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Lexend';
    src: url('${basePath}/fonts/Lexend-Bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Agrandir-GrandHeavy';
    src: url('${basePath}/fonts/Agrandir-GrandHeavy.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Agrandir-Regular';
    src: url('${basePath}/fonts/Agrandir-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}


`;

fs.writeFile("public/fonts/fonts.css", content, (err) => {
  if (err) {
    console.log(err);
  }
});
