// Function to add HTML content to a div with a specific ID
function addHtmlToDiv(target,htmlContent) {
    var div = document.getElementById("inputtext");
    if (div) {
        div.innerHTML = htmlContent;
    } else {
        console.error('Div with id ' + target + ' not found.');
    }
}

// Example usage
addHtmlToDiv("inputtext", '<p>This is some new content, we try to input from our .js file.</p>');