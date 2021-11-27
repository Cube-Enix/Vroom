import { id } from './handleimports.js';
Object.defineProperty(exports, "__esModule", { value: true });
class Sound {
    constructor(options) {
        Object.assign(this, options);
        if (!this.id) {
            this.id = id.idGenidGen();
        }
    }

    setName(name) {
        this.name = name;
    }

}

export { Sound };
