class Camera{
    constructor(serialNumber, cameraType, position ){
        this.serialNumber = serialNumber,
        this.cameraType = cameraType
        this.position = position
    }
    log(){
        console.log(this.serialNumber, this.cameraType, this.position)
    }

}

class Position{
    constructor(pan, tilt, zoom){
        this.pan = pan,
        this.tilt = tilt,
        this.zoom = zoom
    }
    log(){
        console.log(this.pan, this.tilt, this.zoom)
    }
}


const camPosition = new Position(12, 12, 12)
const camera1 = new Camera("qw12", "Nikon", camPosition)
camera1.log()
