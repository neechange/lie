		return exports;
	};

	if(typeof define === 'function'){
		define(['setImmediate'],function(setImmediate){
			return create(setImmediate,{});
		});
	}else if(typeof module === 'undefined' || !('exports' in module)){
		create(typeof setImmediate === 'function'?setImmediate:setTimeout,typeof global === 'object' && global ? global : this);
	}else{
		create(process.nextTick,exports);
	}
})();
