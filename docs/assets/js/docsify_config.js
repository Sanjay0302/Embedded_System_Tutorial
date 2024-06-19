window.$docsify = {
    name: 'sanjaybyranna',
    repo: 'https://github.com/Sanjay0302/Embedded_System_Tutorial',
    coverpage: true,
    homepage: 'README.md',
    loadSidebar: true,
    loadNavbar: true,
    maxLevel: 3,
    subMaxLevel: 3,
    auto2top: true, // Automatically scroll to the top when changing the page
    search: 'auto',
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

};