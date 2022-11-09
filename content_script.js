console.log("GoogleSitesToMarkdown: content_script.js injected");

const INDENT = "    ";
const PREFIX_UL="*";
const PREFIX_OL="1.";

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  let elements = window.document.querySelectorAll('.tyJCtd.mGzaTb.Depvyb.baZpAe');
  let result = "";
  for (const element of elements) {
    let elementResult = "";
    for (const child of element.children) {
      let childResult = "";
      switch (child.tagName) {
        case 'DIV':
          break;
        case 'H1':
          childResult += `# ${child.textContent}\n\n`;
          break;
        case 'H2':
          childResult += `## ${child.textContent}\n\n`;
          break;
        case 'H3':
          childResult += `### ${child.textContent}\n\n`;
          break;
        case 'P':
          childResult += `${child.textContent}\n\n`;
          break;
        case 'UL':
          childResult += convertUL(child, "");
          break;
        case 'OL':
          childResult += convertOL(child, "");
          break;
        default:
          console.log(child);
      }
      elementResult += childResult
    }
    result += elementResult
  }
  console.log(result);
  navigator.clipboard.writeText(result);
});

const convertUL = (element, indent) => {
  result = "";
  for (const child of element.children) {
   switch (child.tagName) {
      case 'LI':
        result += convertLI(child, PREFIX_UL, indent);
        break;
      default:
        console.log(child);
    }
  }
  return result;
}

const convertOL = (element, indent) => {
  result = "";
  for (const child of element.children) {
    switch (child.tagName) {
      case 'LI':
        result += convertLI(child, PREFIX_OL, indent);
        break;
      default:
        console.log(child);
    }
  }
  return result;
}

const convertLI = (element, prefix, indent) => {
  result = "";
  for (const child of element.children) {
    switch (child.tagName) {
      case 'P':
        result += `${indent}${prefix} ${child.textContent}\n`;
        break;
      case 'UL':
        result += convertUL(child, indent + INDENT);
        break;
      case 'OL':
        result += convertOL(child, indent + INDENT);
        break;
      default:
        console.log(child);
    }
  }
  return result
}
