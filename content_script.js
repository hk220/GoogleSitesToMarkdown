console.log("GoogleSitesToMarkdown: content_script.js injected");

const INDENT = "    ";
const PREFIX_UL="*";
const PREFIX_OL="1.";

const MAGIC_CLASS=".tyJCtd.mGzaTb.Depvyb.baZpAe";
const CODE_CLASS="s1gOZb";
  
const main = () => {
  let elements = window.document.querySelectorAll(MAGIC_CLASS);
  let result = "";
  for (const element of elements) {
    result += convertTopDIV(element)
  }
  console.log(result);
  navigator.clipboard.writeText(result);
}

const convertTopDIV = (element) => {
  result = ""
  for (const child of element.children) {
    switch (child.tagName) {
      case 'DIV':
        if (child.className == CODE_CLASS) {
          result += convertCode(child);
        }
        break;
      case 'H1':
        result += `# ${child.textContent}\n\n`;
        break;
      case 'H2':
        result += `## ${child.textContent}\n\n`;
        break;
      case 'H3':
        result += `### ${child.textContent}\n\n`;
        break;
      case 'P':
        result += `${child.textContent}\n\n`;
        break;
      case 'UL':
        result += convertUL(child, "");
        break;
      case 'OL':
        result += convertOL(child, "");
        break;
      default:
        console.log(child);
    }
  }
  return result;
}

const convertCode = (element) => {
  result = "";
  result += '```\n';
  for (const child of element.children) {
    result += `${child.textContent}\n`;
  }
  result += '```\n\n';
  return result;
}

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

chrome.runtime.onMessage.addListener(main);
