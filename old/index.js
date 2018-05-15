import "/src/astro-app/astro-app.js";
import "../@webcomponents/webcomponentsjs/webcomponents-loader.js";
const $_documentContainer = document.createElement("div");
$_documentContainer.setAttribute("style", "display: none;");
$_documentContainer.innerHTML = `<title>Astro Demo App JS</title>
<h1>TesT</h1>
  <astro-app></astro-app>`;
document.head.appendChild($_documentContainer);
