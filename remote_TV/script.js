class Remote {
    constructor (code) {
        this.code = code;
    }
    ChangeTVChannel(channel,tivi) {
        tivi.changeChannel(channel);
    }
    ControlTurnTiviOn(tivi) {
        tivi.turnTVOn();
    }
    ControlTurnTiviOff(tivi) {
        tivi.turnTVOff();
    }
}

class TiVi {
    constructor (currentChannel, currentVolume) {
        this.currentChannel = currentChannel;
        this.currentVolume = currentVolume;
    }

    turnTVOn() {
        this.status = true;
    }

    turnTVOff() {
        this.status = false;
    }

    changeChannel(channel) {
        return channel;
    }

    changeVolumeUp() {
        this.currentVolume++;
    }

    changeVolumeDown() {
        this.currentVolume--;
    }
}

let tivi = new TiVi(2,10);
let remote = new Remote(1);
tivi.turnTVOn();
tivi.changeChannel(7);
remote.ChangeTVChannel(3,tivi);
tivi.changeVolumeUp();
tivi.changeVolumeUp();
remote.ControlTurnTiviOff(tivi);

