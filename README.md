#Using jQuery in 'No Conflict' mode
===================================
###### Updated: Thursday the 4th of May 2017.


### Overview
The '$' symbol is not unique to jQuery and can be used by other JavaScript libraries. In a situation where multiple libraries require the $ symbol, errors will appear on the browser's console due to conflicts between the libraries. This project was created in response to such a scenario, where a web student experienced issues when attempting to write their own jQuery functions for a WordPress template. This was due to the presence of multiple libraries and plugins, which were syntactically dependent on the $ symbol.

The documentation for jQuery proposes a couple of ways to address such a conflict. One approach is to set jQuery into 'no conflict' mode, which relinquishes the default $ but allows the developer to create a local instance of the $ instead. This project demonstrates how to write and use jQuery in no conflict mode, with a simple example where jQuery was used to toggle the CSS styles applied to an HTML form.

### Requirements
To get the most out of this project, it is assumed that you already know how to do all of the following: 
- how to create HTML forms, classes and ID's
- how to write CSS
- how to write JavaScript (in particular, jQuery)
- how to recognise JavaScript errors using your browser's console

### Resources

[Google hosted libraries](https://developers.google.com/speed/libraries/)
 provides a range of CDN's, including the latest version of jQuery.

[jquery.com](http://jquery.com/)
 provides excellent documentation about jQuery. There is also a section where you can find more information about 'no conflict' mode.