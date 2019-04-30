var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text.replace(/Salesforce/gi, 'Project mindblenderz');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

            replacedText = text.replace(/Lightning /gi, 'Thunder');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

            replacedText = text.replace(/SLDS/gi, 'Bad Bootstrap');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

            
            replacedText = text.replace(/Admin/gi, 'Boss');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

            replacedText = text.replace(/Developer/gi, 'Snake Pepole');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

            replacedText = text.replace(/Snake/gi, 'Danger Noodle');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }

            replacedText = text.replace(/How to/gi, 'copy mat kar');
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
          
        }
    }
}