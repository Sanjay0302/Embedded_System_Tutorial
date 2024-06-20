window.$docsify = {
    name: 'sanjaybyranna',
    repo: 'https://github.com/Sanjay0302/Embedded_System_Tutorial',
    coverpage: true,
    homepage: 'README.md',
    loadSidebar: true,
    // loadSidebar: 'summary.md', // load sidebar from another file.
    // hideSidebar: false, // to hide the sidebar completely,  remove lodeSidebar before using this
    loadNavbar: true,
    maxLevel: 3, // Maximum Table of content level.
    subMaxLevel: 3,
    auto2top: true, // Automatically scroll to the top when changing the page
    search: 'auto',
  
    cornerExternalLinkTarget: '_self', // or default: _blank
    executeScript: true,
    
    // complete configuration parameters
    search: {
        maxAge: 86400000, // Expiration time, the default one day
        paths: 'auto',
        placeholder: 'Search here for anything',
        noData: 'Oops! out of the box',
        // Headline depth, 1 - 6
        depth: 6,
        hideOtherSidebarContent: true, // whether or not to hide other sidebar content
    },
    themeable: {
        responsiveTables: true
    },

    pagination: {
        previousText: 'Previous',
        nextText: 'Next',
        crossChapter: true,
        crossChapterText: true
    },

    tabs: {
        persist: true, // Determines if tab selections will be restored after a page refresh/revisit.
        sync: true, // Determines if tab selections will be synced across tabs with matching labels.
        theme: 'classic', // default //material and classic
        tabComments: true, // default
        tabHeadings: true // default
    },

    markdown: {
        renderer: {
          code: function(code, lang) {
            if (lang === "markmap") {
              return '<pre data-lang="markmap">' + code + '</pre>';
            }
            return this.origin.code.apply(this, arguments);
          }
        }
      },

};