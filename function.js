function stringToBinary(str, delimiter = "") {
    let binaryRepresentation = '';
    for (let i = 0; i < str.length; i++) {
        let binary = str.charCodeAt(i).toString(2);
        binary = binary.padStart(8, '0');
        binaryRepresentation += binary;
        if (i < str.length - 1) {
            switch (delimiter) {
                case "\\n":
                    binaryRepresentation += "\n";
                    break;
                case "\\t":
                    binaryRepresentation += "\t";
                    break;
                default:
                    binaryRepresentation += delimiter;
            }
        }
    }
    return binaryRepresentation;
}

/*
Example:

window.onload = function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const binaryRepresentation = stringToBinary(element.innerHTML);
        element.innerHTML = binaryRepresentation;
    }
};

OnClick Example: 

document.querySelector("#myButton").addEventListener("click", function() {
    const element = document.querySelector("#myElement");
    if (element) {
        const binaryRepresentation = stringToBinary(element.innerHTML);
        element.innerHTML = binaryRepresentation;
    }
});

*/