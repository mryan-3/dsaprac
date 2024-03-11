class Camera{
    constructor(serialNumber, cameraType, Position ){
        this.serialNumber = serialNumber,
        this.cameraType = cameraType
        this.Position = Position
    }
    log(){
        console.log(this.serialNumber, this.cameraType, this.Position)
    }

}

class Position{
    constructor(pan, tilt, zoom){
        this.pan = pan,
        this.tilt = tilt,
        this.zoom = zoom
    }
}
const camPosition = new Position(12, 12, 12)
const camera1 = new Camera("qw12", "Nikon", camPosition)
camera1.log()
