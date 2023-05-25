// Function to replace 'gpt' with 'butt' in the given text
function replaceText(text) {
    return text.replace(/GPT/gi, 'butt');
}

// Function to modify the DOM
function modifyDOM() {
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];
            if (node.nodeType === Node.TEXT_NODE) {
                node.nodeValue = replaceText(node.nodeValue);
            }
        }
    }
}

// Modify the DOM when the page is loaded
window.addEventListener('load', modifyDOM);
