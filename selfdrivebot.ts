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


    export enum Distance_Unit {
        //% block="mm" enumval=0
        Distance_Unit_mm,

        //% block="cm" enumval=1
        Distance_Unit_cm,

        //% block="inch" enumval=2
        Distance_Unit_inch,
    }

    let pin_run_motor = AnalogPin.P1
    let pin_steer_motor = AnalogPin.P2
    let pin_ultrasound = AnalogPin.P10
    let pin_tracker_left = AnalogPin.P8
    let pin_tracker_right = AnalogPin.P9

    /**
    * TODO: initialization selfdrivebot car control
    * @param run run motor pin, ex: AnalogPin.P1
    * @param steer steer motor pin, ex: AnalogPin.P2
    */
    //% weight=10
    //% blockId=selfdrivebot_init_control block="set run motor at pin %run| and steer motor at pin %steer"
    export function init_control(run: AnalogPin, steer: AnalogPin): void {
        // Add code here
        pin_run_motor = run
        pin_steer_motor = steer

    }

    /**
    * TODO: initialization selfdrivebot car ultrasound sensor
    * @param ultrasound ultrasound sensor pin, ex: AnalogPin.P10
    */
    //% weight=10
    //% blockId=selfdrivebot_init_ultrasound block="set ultrasound sensor at %ultrasound"
    export function init_us_sensor(ultrasound: AnalogPin): void {
        // Add code here
        pin_ultrasound = ultrasound

    }

    /**
    * TODO: initialization selfdrivebot car tracking sensors
    * @param left left tracking sensor pin, ex: AnalogPin.P8
    * @param right right tracking sensor pin, ex: AnalogPin.P9
    */
    //% weight=10
    //% blockId=selfdrivebot_init_tracking block="set left tracking sensor at %left| and right at %right"
    export function init_tracking_sensors(left: AnalogPin, right: AnalogPin): void {
        // Add code here
        pin_tracker_left = left
        pin_tracker_right = right

    }
	
	/**
	* Runs the motor at the given speed
	*/
	//% block="crickit run at $speed \\%"
    //% speed.shadow="speedPicker"
    //% blockId=selfdrivebot_run block="run at %speed"
	export function run(speed: number) {
        pins.servoSetPulse(pin_run_motor, 2400)
        pins.servoSetPulse(pin_steer_motor, 600)
	}
	
	/**
	* Steers two motors by the given ratio
	*/
	//% block="steer $turnRatio"
	//% turnRatio.min=-200 turnRatio.max=200
    //% turnratio.shadow=turnRatioPicker
    //% blockId=selfdrivebot_steer block="steer at %turnRatio"
	export function steer(turnRatio: number) {
	}


    /**
    * TODO: line following
    */
    //% weight=10
    //% advanced=true
    //% blockId=selfdrivebot_tracking block="tracking state is %state"
    export function tracking(state: TrackingStateType): boolean {
        
        return true
    
    }



    /**
    * TODO: get ultrasonic distance
    */
    //% weight=9
    //% advanced=true
    //% blockId=selfdrivebot_ultrasound block="ultrasonic distance in unit %distance_unit"
    export function selfdrivebot_ultrasound(distance_unit: Distance_Unit): number {

        return 0
    }




}