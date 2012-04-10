Function.prototype.chunk = function(timeout, batchSize) {
    var func = this,
        queued = 0,
        timer;
    
    return function() {
        var self = this,
            arg = arguments;
        
        timer && clearTimeout(timer);
        
        batchSize && queued++;
        
        if(batchSize && queued === batchSize) {
            clearTimeout(timer)
            func.apply(self, arg);
            queued = 0;
            return;
        }
        
        timer = setTimeout(
        function(){
            func.apply(self, arg);
            queued = 0;                            
        }, timeout || 100);
    }
};
