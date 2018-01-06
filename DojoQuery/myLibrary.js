(function $Dojo(id) {
    let elem = document.getElementById(id);

    let click = function (callback) {
        elem.addEventListener("click", callback);
    }

    let hover = function (hoverin, hoverout) {
        elem.addEventListener("mouseover", hoverin);
        elem.addEventListener("mouseout", hoverout);
    }
    
    window.$Dojo = $Dojo;
    return {
        click: click,
        hover: hover
    };
}());