toPNG('#mainbody')

function toPNG(divId) {
    var div = document.getElementById(divId);
    var clone = div.cloneNode(true);

    console.log('Clone')

    // Wrap the cloned div in an SVG foreignObject
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    var foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    svg.appendChild(foreignObject);
    foreignObject.appendChild(clone);

    console.log('Foreign Object')

    // Set the size of the SVG to match the div
    svg.setAttribute('width', div.offsetWidth);
    svg.setAttribute('height', div.offsetHeight);
    foreignObject.setAttribute('width', '100%');
    foreignObject.setAttribute('height', '100%');

    console.log('SVG size')

    // Convert the SVG to a data URL
    var serializer = new XMLSerializer();
    var string = serializer.serializeToString(svg);
    var encodedData = 'data:image/svg+xml;base64,' + window.btoa(string);

    console.log('SVG Data')

    // Create an image from the data URL
    var img = new Image();
    img.src = encodedData;

    console.log('Img')

    // We need to wait for the image to load before drawing it to the canvas
    img.onload = function() {
        console.log('OnLoad')
        var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        var pngDataUrl = canvas.toDataURL('image/png');

        // Create a download link for the PNG
        var link = document.createElement('a');
        link.download = divId + '.png';
        link.href = pngDataUrl;
        link.click();
    }
}