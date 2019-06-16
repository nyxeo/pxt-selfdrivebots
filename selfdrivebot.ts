/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.microbit.org/blocks/custom
 */


//% weight=0 color=#457abc  icon="\uf1ba" block="selfdrivebot"
namespace selfdrivebot {


    export enum TrackingStateType {
        //% block="● ●" enumval=0
        Tracking_State_1_1,

        //% block="● ◌" enumval=1
        Tracking_State_1_0,

        //% block="◌ ●" enumval=2
        Tracking_State_0_1,

        //% block="◌ ◌" enumval=3
        Tracking_State_0_0,
    }

    export enum SpeedStateType {
        
        //% block="● ◌ ◌ ◌" enumval=0
        Speed_State_25,

        //% block="◌ ● ◌ ◌" enumval=1
        Speed_State_50,

        //% block="◌ ◌ ● ◌" enumval=2
        Speed_State_75,

        //% block="◌ ◌ ◌ ●" enumval=3
        Speed_State_100,
    }

    export enum SteerStateType {
        //% block="● ◌ ◌ ◌ ◌" enumval=0
        Steer_State_full_left,

        //% block="◌ ● ◌ ◌ ◌" enumval=1
        Steer_State_left,

        //% block="◌ ◌ ● ◌ ◌" enumval=2
        Steer_State_center,

        //% block="◌ ◌ ◌ ● ◌" enumval=3
        Steer_State_right,

        //% block="◌ ◌ ◌ ◌ ●" enumval=4
        Steer_State_full_right
    }


    export enum Distance_Unit {
        //% block="mm" enumval=0
        Distance_Unit_mm,

        //% block="cm" enumval=1
        Distance_Unit_cm,

        //% block="inch" enumval=2
        Distance_Unit_inch,
    }

    let pin_run_motor = AnalogPin.P0
    let pin_steer_motor = AnalogPin.P14
    let pin_ultrasound_trig = AnalogPin.P10
    let pin_ultrasound_echo = AnalogPin.P3
    let pin_tracker_left = DigitalPin.P8
    let pin_tracker_right = DigitalPin.P9

    /**
    * initialization selfdrivebot car control
    * @param run run motor pin, ex: AnalogPin.P0
    */
    //% weight=10
    //% blockId=selfdrivebot_init_run block="set run motor at pin %run"
    //% group="Configuration"
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
    //% group="Configuration"
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
    //% group="Configuration"
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
    //% group="Configuration"
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
    //% group="Control"
    export function move_forward(speed: SpeedStateType) {
        // min = 500, max = 2500, defl = 1500
        switch(speed) {
            case SpeedStateType.Speed_State_25 :
                pins.servoSetPulse(pin_run_motor, 500)
                break;
            case SpeedStateType.Speed_State_50 :
                pins.servoSetPulse(pin_run_motor, 750)
                break;
            case SpeedStateType.Speed_State_75 :
                pins.servoSetPulse(pin_run_motor, 1000)
                break;
            case SpeedStateType.Speed_State_100 :
                pins.servoSetPulse(pin_run_motor, 1250)
                break;
            default :      
        }
    }
    
    /**
	* Moves backward the motor at the given speed
	*/
	//% block="crickit run at $speed \\%"
    //% blockId=selfdrivebot_move_backward block="move backward at %speed"
    //% group="Control"
	export function move_backward(speed: SpeedStateType) {
        // min = 500, max = 2500, defl = 1500
        switch(speed) {
            case SpeedStateType.Speed_State_25 :
                pins.servoSetPulse(pin_run_motor, 2500) 
                break;
            case SpeedStateType.Speed_State_50 :
                pins.servoSetPulse(pin_run_motor, 2250) 
                break;
            case SpeedStateType.Speed_State_75 :
                pins.servoSetPulse(pin_run_motor, 2000) 
                break;
            case SpeedStateType.Speed_State_100 :
                pins.servoSetPulse(pin_run_motor, 1750) 
                break;
            default :      
        }
    }
    
    /**
	* Brakes the motor
	*/
    //% blockId=selfdrivebot_brake block="brake"
    //% group="Control"
	export function brake() {
        pins.analogWritePin(pin_run_motor, 0)
	}
	
	/**
	* Steers two motors by the given ratio
	*/
	//% block="steer $turnRatio"
    //% blockId=selfdrivebot_steer block="steer at %turnRatio"
    //% group="Control"
	export function steer(turnRatio: SteerStateType) {
        // minAngle = 0, maxAngle=180
        pins.servoWritePin(pin_steer_motor, 600)
        switch(turnRatio) {
            case SteerStateType.Steer_State_full_right:
                pins.servoWritePin(pin_steer_motor, 0);
                break;
            case SteerStateType.Steer_State_right:
                pins.servoWritePin(pin_steer_motor, 45);
                break;
            case SteerStateType.Steer_State_center:
                pins.servoWritePin(pin_steer_motor, 90)
                break;
            case SteerStateType.Steer_State_left:
                pins.servoWritePin(pin_steer_motor, 135)
                break;
            case SteerStateType.Steer_State_full_left:
                pins.servoWritePin(pin_steer_motor, 180)
                break;
            
            default : 
                
        }
	}


    /**
    * line following
    */
    //% weight=10
    //% advanced=true
    //% blockId=selfdrivebot_tracking block="tracking state is %state"
    //% group="Perception"
    export function tracking(state: TrackingStateType): boolean {
        
        return true
    
    }



    /**
    * get ultrasonic distance
    */
    //% weight=9
    //% advanced=true
    //% blockId=selfdrivebot_ultrasound block="ultrasonic distance in unit %distance_unit"
    //% group="Perception"
    export function selfdrivebot_ultrasound(distance_unit: Distance_Unit): number {

        return 0
    }




}

