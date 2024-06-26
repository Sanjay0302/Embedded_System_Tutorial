// plugins.js is a file that contains all the plugins that you want to use in your docsify project

// Plugins are loaded in the order they are written
document.write('<script src="https://cdn.jsdelivr.net/npm/docsify-tabs@1"><\/script>');
document.write('<script src="//unpkg.com/docsify/lib/plugins/search.min.js"><\/script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/docsify-copy-code"><\/script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/docsify@4/lib/plugins/zoom-image.min.js"><\/script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/docsify-pagination@2/dist/docsify-pagination.min.js"><\/script>');
document.write('<script src="//cdn.jsdelivr.net/npm/docsify/lib/plugins/emoji.min.js"></script>');

// This is the source code of the pdf embed plugin 
// document.write('<script src="path-to-file/docsify-pdf-embed.js"></script>');

// or use this if you are not hosting the file yourself
document.write('<script src="//unpkg.com/docsify-pdf-embed-plugin/src/docsify-pdf-embed.js"><\/script>');
// PDFObject.js is a required dependency of this plugin
document.write('<script src="//cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js"><\/script>');


// Markmap CDN scripts, referense `https://github.com/rcqed/docsify-markmap.js/`
// these below CDN files are customised and used in loacl files in index.html, these links are customised to cumpatible with the custome css and to avoid div tag in markmap embed, so to know the error see the commit b4202e1 and 
// document.write('<script src="https://cdn.jsdelivr.net/npm/markmap-autoloader@0.15.2"></script>');
// document.write('<script src="https://cdn.jsdelivr.net/npm/docsify-markmap.js@1.0.0/docsify-markmap.min.js"></script>');

