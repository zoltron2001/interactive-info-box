# interactive-info-box

A simple script to give info boxes show/hide functionality. Compatible with multiple info boxes per site.

Only one info box is currently permitted per wrapper. jQuery is only being used for the jQuery(document).ready function and could just as easily be replaced with the equivelant vanilla JavaScript.

Here it is with the info box hidden:

![alt text](images/hide.png "info box hidden")

When a user clicks the info icon, the info box is revealed.

![alt text](images/show.png "info box visible")

The user can select either the info or close icon to hide the box again. 

**HTML**

Assign the following classes to the appropriate elements:

   .info-wrapper  
   .info-box  
   .info-icon  
   .info-close  

**CSS**

Define the info boxes' sitewide active/hidden styles, for example:

   .info-box { display: block }  
   .info-box .hidden { display: none } 
