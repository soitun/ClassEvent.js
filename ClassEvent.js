/*!
 * ClassEvent.js v0.1
 *
 * http://github.com/webim/ClassEvent.js
 *
 * Copyright (c) 2010 Hidden
 * Released under the MIT, BSD, and GPL Licenses.
 *
 */

function ClassEvent( type ) {
	this.type =  type;
	this.timeStamp = ( new Date() ).getTime();
}

ClassEvent.on = function() {
	var proto, helper = ClassEvent.on.prototype;
	for ( var i = 0, l = arguments.length; i < l; i++ ) {
		proto = arguments[ i ].prototype;
		proto.a = proto.addEventListener = helper.addEventListener;
		proto.r = proto.removeEventListener = helper.removeEventListener;
		proto.d = proto.dispatchEvent = helper.dispatchEvent;
	}
};


ClassEvent.on.prototype = {
	addEventListener: function( type, listener ) {
		var self = this, ls = self.__listeners = self.__listeners || {};
		ls[ type ] = ls[ type ] || [];
		ls[ type ].push( listener );
		return self;
	},
	dispatchEvent: function( event, data ) {
		var self = this, ls = self.__listeners = self.__listeners || {};
		event = event.type ? event : new ClassEvent( event );
		ls = ls[ event.type ];
		event.data = data;
		if ( ls ) {
			for ( var i = 0, l = ls.length; i < l; i++ ) {
				ls[ i ].apply( self, [ event ] );
			}
		}
		return self;
	},
	removeEventListener: function( type, listener ) {
		var self = this, ls = self.__listeners = self.__listeners || {};
		if ( ls[ type ] ) {
			if ( listener ) {
				var _e = ls[ type ];
				for ( var i = _e.length; i--; i ) {
					if ( _e[ i ] === listener ) 
						_e.splice( i, 1 );
				}
			} else {
				delete ls[ type ];
			}
		}
		return self;
	}
};