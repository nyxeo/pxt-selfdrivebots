/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


//% weight=0 color=#457abc  icon="\uf1ba" block="selfdrivebot"
namespace selfdrivebot {


    export enum TrackingStateType {
        //% block="● ●" enumval=0
        Tracking_State_0,

        //% block="● ◌" enumval=1
        Tracking_State_1,

        //% block="◌ ●" enumval=2
        Tracking_State_2,

        //% block="◌ ◌" enumval=3
        Tracking_State_3,
    }

    export enum SpeedStateType {
        //% block="● ◌ ◌ ◌" enumval=0
        Speed_State_0,

        //% block="◌ ● ◌ ◌" enumval=1
        Speed_State_1,

        //% block="◌ ◌ ● ◌" enumval=2
        Speed_State_2,

        //% block="◌ ◌ ◌ ●" enumval=3
        Speed_State_3,
    }

    export enum SteerStateType {
        //% block="● ◌ ◌ ◌ ◌" enumval=0
        Steer_State_0,

        //% block="◌ ● ◌ ◌ ◌" enumval=1
        Steer_State_1,

        //% block="◌ ◌ ● ◌ ◌" enumval=2
        Steer_State_2,

        //% block="◌ ◌ ◌ ● ◌" enumval=3
        Steer_State_3,

        //% block="◌ ◌ ◌ ◌ ●" enumval=4
        Steer_State_4
    }


    export enum Distance_Unit {
        //% block="mm" enumval=0
        Distance_Unit_mm,

        //% block="cm" enumval=1
        Distance_Unit_cm,

        //% block="inch" enumval=2
        Distance_Unit_inch,
    }

    let pin_run_motor = AnalogPin.P1
    let pin_steer_motor = AnalogPin.P14
    let pin_ultrasound_trig = AnalogPin.P10
    let pin_ultrasound_echo = AnalogPin.P3
    let pin_tracker_left = DigitalPin.P8
    let pin_tracker_right = DigitalPin.P9

    /**
    * initialization selfdrivebot car control
    * @param run run motor pin, ex: AnalogPin.P1
    * @param steer steer motor pin, ex: AnalogPin.P2
    */
    //% weight=10
    //% blockId=selfdrivebot_init_run block="set run motor at pin %run"
    export function init_run(run: AnalogPin): void {
        // Add code here
        pin_run_motor = run

    }

    /**
    * initialization selfdrivebot car steer pin
    * @param steer steer motor pin, ex: AnalogPin.P2
    */
    //% weight=10
    //% blockId=selfdrivebot_init_steer block="set steer motor at pin %steer"
    export function init_steer(steer: AnalogPin): void {
        // Add code here
        pin_steer_motor = steer

    }

    /**
    * initialization selfdrivebot car ultrasound sensor
    * @param trig trigger ultrasound sensor pin, ex: AnalogPin.P3
    * @param echo echo ultrasound sensor pin, ex: AnalogPin.P10
    */
    //% weight=10
    //% blockId=selfdrivebot_init_ultrasound block="set ultrasound trigger at %trig| and echo at %echo"
    export function init_us_sensor(trig: AnalogPin, echo: AnalogPin): void {
        // Add code here
        pin_ultrasound_trig = trig
        pin_ultrasound_echo = echo

    }

    /**
    * initialization selfdrivebot car tracking sensors
    * @param left left tracking sensor pin, ex: AnalogPin.P8
    * @param right right tracking sensor pin, ex: AnalogPin.P9
    */
    //% weight=10
    //% blockId=selfdrivebot_init_tracking block="set left tracking sensor at %left| and right at %right"
    export function init_tracking_sensors(left: DigitalPin, right: DigitalPin): void {
        // Add code here
        pin_tracker_left = left
        pin_tracker_right = right

    }
	
	/**
	* Moves forward the motor at the given speed
	*/
	//% block="crickit run at $speed \\%"
    //% blockId=selfdrivebot_move_forward block="move forward at %speed"
	export function move_forward(speed: SpeedStateType) {

    }
    
    /**
	* Moves backward the motor at the given speed
	*/
	//% block="crickit run at $speed \\%"
    //% blockId=selfdrivebot_move_backward block="move backward at %speed"
	export function move_backward(speed: SpeedStateType) {

    }
    
    /**
	* Brakes the motor
	*/
    //% blockId=selfdrivebot_brake block="brake"
	export function brake() {

	}
	
	/**
	* Steers two motors by the given ratio
	*/
	//% block="steer $turnRatio"
    //% blockId=selfdrivebot_steer block="steer at %turnRatio"
	export function steer(turnRatio: SteerStateType) {
        pins.servoSetPulse(pin_steer_motor, 600)
	}


    /**
    * line following
    */
    //% weight=10
    //% advanced=true
    //% blockId=selfdrivebot_tracking block="tracking state is %state"
    export function tracking(state: TrackingStateType): boolean {
        
        return true
    
    }



    /**
    * get ultrasonic distance
    */
    //% weight=9
    //% advanced=true
    //% blockId=selfdrivebot_ultrasound block="ultrasonic distance in unit %distance_unit"
    export function selfdrivebot_ultrasound(distance_unit: Distance_Unit): number {

        return 0
    }




}

