console.log("content_script.js injected");

const INDENT = "    ";

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
          childResult += `# ${child.textContent}\n`;
          break;
        case 'H2':
          childResult += `## ${child.textContent}\n`;
          break;
        case 'H3':
          childResult += `### ${child.textContent}\n`;
          break;
        case 'P':
          childResult += child.textContent;
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
      elementResult += `${childResult}\n`
    }
    result += elementResult
  }
  console.log(result);
});

const convertUL = (element, indent) => {
  result = "";
  for (const child of element.children) {
    console.log(indent + child.tagName);
    switch (child.tagName) {
      case 'LI':
        result += convertLI(child, '*', indent);
        break;
      default:
        console.log(child);
    }
    result += '\n';
  }
  return result;
}

const convertOL = (element, indent) => {
  result = "";
  for (const child of element.children) {
    console.log(indent + child.tagName);
    switch (child.tagName) {
      case 'LI':
        result += convertLI(child, '1.', indent);
        break;
      default:
        console.log(child);
    }
    result += '\n';
  }
  return result;
}

const convertLI = (element, prefix, indent) => {
  result = "";
  for (const child of element.children) {
    console.log(indent + child.tagName);
    switch (child.tagName) {
      case 'P':
        result += `${indent}${prefix} ${child.textContent}`;
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
    result += '\n';
  }
  return result
}
