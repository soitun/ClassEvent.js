ClassEvent
=============================================

Handle events on custom classes.

Class Methods
---------------------------------------------

###addEventListener( type, listener )


###removeEventListener( type, listener )


###dispatchEvent( event, extraParameters )

Execute the event listeners with extraParameters.

###a( type, listener )

Short for addEventListener

###r( type, listener )

Short for removeEventListener

###d( event, extraParameters )

Short for dispatchEvent

Event attributes
---------------------------------------------

###event.type

Describes the nature of the event.

###event.timeStamp

When the event is dispatched

Helper
---------------------------------------------

###ClassEvent.on( _class1, _class2 ... )


Example
---------------------------------------------

	//Create class
	function testClass() {}

	//Make the class work with custom events
	//ClassEvent.on( Function ) will add event capability to all classes
	ClassEvent.on( testClass );

	//New class
	var test = new testClass();

	//Add a custum event listener
	test.addEventListener( "custom", function( event, data ) { 
		console.log( this ); 
		console.log( event ); 
		console.log( data ); 
	} );

	//Dispatch event with user data
	test.dispatchEvent( "custom", { "name": "jack" } );

	//Remove all custom events
	test.removeEventListener( "custom" );



[Eventify]: http://blog.stephenrushing.com/index.php/javascript/custom-events-in-javascript/

[Dispatcher]: http://www.nonobtrusive.com/2009/07/24/custom-events-in-javascript-by-making-your-own-dispatcher-class/

[custom_event_listeners]: http://joshdavis.wordpress.com/2007/04/10/custom-event-listeners/
