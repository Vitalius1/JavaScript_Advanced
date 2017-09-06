(function(){
    function $Dojo(id){
        this.elem = document.getElementById(id);
        
        this.click = function(callback){
            this.elem.addEventListener("click", callback);
        }
        
        this.hover = function(hoverin, hoverout){
            this.elem.addEventListener("mouseover", hoverin);
            this.elem.addEventListener("mouseout", hoverout);
        }
        return this;
    }
    window.$Dojo = $Dojo;
}());