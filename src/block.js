import { opcodes } from "./misc/handleimports.js";

function isValidBlock(opcode) {
    return opcodes.contains(opcode);
}

function isHatBlock(opcode) {
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

