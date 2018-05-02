jQuery(document).ready(function($){

    /* Interactive Info Boxes
        How to use:
        HTML
            Assign the following classes to the appropriate elements:
                .info-wrapper
                .info-box
                .info-icon
                .info-close
        CSS
            Define the info boxes' sitewide active/hidden styles, for example:
                .info-box { display: block }
                .info-box .hidden { display: none }
        NOTE: only one box/icon pair is currently permitted per wrapper
    */
    function interactiveInfoBoxes() {
    	// select nodes
        const wrapperNodes = document.querySelectorAll(".info-wrapper");
        const boxNodes = document.querySelectorAll(".info-wrapper .info-box");
        const iconNodes = document.querySelectorAll(".info-wrapper .info-icon");
        const closeIconNodes =  document.querySelectorAll(".info-wrapper .info-close");
        // convert NodeLists => Arrays for ease of use
        let boxes = Array.prototype.slice.call(boxNodes);
        let icons = Array.prototype.slice.call(iconNodes);
        let closeIcons = Array.prototype.slice.call(closeIconNodes);
        // prepare wrapppers
        let wrappers = nodesToArray(wrapperNodes); // wrappers = [ {},{},{}... ]
        
        function nodesToArray(wrapperNodes) {
            const nullArray = Array.apply(null, Array(wrapperNodes.length));
            return nullArray.map( () => { return {} })
        }

        // controller
        for (let wrapperIndex = wrapperNodes.length - 1; wrapperIndex >= 0; wrapperIndex--) {
            storeChildren(wrapperIndex,boxes,'box')
            storeChildren(wrapperIndex,icons,'icon')
            storeChildren(wrapperIndex,closeIcons,'closeIcon')
            toggleHideBox(wrapperIndex);
            listenToIcons(wrapperIndex);
        }

        function storeChildren(wrapperIndex,childrenArray,key) {
        	// wrappers = [ {'box': { boxHTMLnode }, 'key': { boxHTMLnode}... }]
        	const wrapper = wrapperNodes[wrapperIndex];
            for (let childIndex = childrenArray.length - 1; childIndex >= 0; childIndex--) {
                if( wrapper.contains(childrenArray[childIndex]) ) {
                    wrappers[wrapperIndex][key] = childrenArray.pop();
                } else { break }
            }
        }

        function listenToIcons(wrapperIndex) {
        	wrappers[wrapperIndex].closeIcon.addEventListener( "click", () => {
                toggleHideBox(wrapperIndex);
            });
            wrappers[wrapperIndex].icon.addEventListener( "click", () => {
                toggleHideBox(wrapperIndex);
            });
        }

        function toggleHideBox(wrapperIndex) {
            const box = wrappers[wrapperIndex].box;
            box.classList.toggle('hidden');
        }
    }
    interactiveInfoBoxes();
    // Interactive Info Boxes
    
}); // document ready