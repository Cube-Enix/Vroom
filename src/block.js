import { opcodes } from "./misc/handleimports.js";

class blockfunctions {
    isValidBlock(opcode) {
        return opcodes.contains(opcode);

    }

    isHatBlock(opcode) {
        const hatBlocks = [
            opcodes.event_whengreenflagclicked,
            opcodes.event_whenkeypressed,
            opcodes.event_whenthisspriteclicked,
            opcodes.event_whenstageclicked,
            opcodes.event_whenbackdropswitchesto,
            opcodes.event_whengreaterthan,
            opcodes.event_whenbroadcastrecieved,
            opcodes.control_start_as_clone,
            opcodes.procedures_definition
        ]

        return hatBlocks.contains(opcode);
    }
}

const blockMap = {
    // motion
    [opcodes.motion_movesteps]: {
        input: { init: 10 }
    },
    [opcodes.motion_turnright]: {
        input: { init: 15 }
    }, 
    [opcodes.motion_turnleft]: {
        input: { init: 15 }
    }, 
    [opcodes.motion_goto]: {
        input: { init: '_random_' }
    }, 
    [opcodes.motion_glideto]: {
        seconds: { init: 1 },
        target: { init: '_random_' }
    }, 
    [opcodes.motion_glidesecstoxy]: {
        seconds: { init: 1 },
        x: { init: 0 },
        y: { init: 1 }
    },
    [opcodes.motion_pointindirection]: {
        input: { init: 90 }
    }, 
    [opcodes.motion_pointtowards]: {
        input: { init: 90 }
    }, 
}


