function testClass() {
}

ClassEvent.on( testClass );

var _testClass;

module( "ClassEvent", {
	setup: function() {
		_testClass = new testClass();
	},
	teardown: function() {
	}
} );

test( "check basic function", function() {
	expect( 6 );
	ok( _testClass.addEventListener, "addEventListener" );
	ok( _testClass.removeEventListener, "removeEventListener" );
	ok( _testClass.dispatchEvent, "dispatchEvent" );
	equal( _testClass.addEventListener, _testClass.a, "a short for addEventListener" );
	equal( _testClass.removeEventListener, _testClass.r, "r short for removeEventListener" );
	equal( _testClass.dispatchEvent, _testClass.d, "d short for dispatchEvent" );
} );

test( "handle events", function() {
	expect( 3 );
	var i = 1;
	function listen1( e ) { ok( true, "First" ); }
	function listen2( e ) { ok( true, "Second" ); }
	function listen3( e ) { ok( e.data, "Event data" ); }
	_testClass.a( "test", listen1 );
	_testClass.d( "test" );
	_testClass.r( "test", listen1 );
	_testClass.a( "test", listen2 );
	_testClass.a( "test", listen3 );
	_testClass.d( "test", { "name" : "jack" } );
	_testClass.r( "test" );
	_testClass.d( "test", { "name" : "jack" } );
} );
