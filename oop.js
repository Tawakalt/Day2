class mobilePhones {
	//initializing constructor
  constructor(imeiCode,processor,internalMemory) {
    this.imeiCode = imeiCode;
    this.processor = processor;
    this.internalMemory = internalMemory;
  }

  //declaring methods
  getIemiCode() {
    return this.imeiCode;
  }
  dialNumber() {
  	// the code that does the dialing
    return "Number dialled";
  }
  receiveCall() {
    return "Call received";
  }
  sendMessage() {
  	// the code that does the sending of the message
    return "Message sent";
  }

}

//declaring class smartPhones that inherits from class mobilePhones
class smartPhones extends mobilePhones{
	//initializing constructor
	constructor(imeiCode,processor,internalMemory){
		super(imeiCode,processor,internalMemory);
	}

	//declaring methods
	wifiConnection() {	
    	return "Wifi Enabled";
   }
   bluetoothConnection() {	
    	return "Bluetooth Enabled";
   }
}

//declaring class samsung that inherits from class smartPhones
class samsung extends smartPhones{
	//initializing constructor
	constructor(imeiCode,processor,internalMemory,edgeToEdge){
		super(imeiCode,processor,internalMemory,edgeToEdge);
		this.edgeToEdge = edgeToEdge;

	}

	//declaring methods
	returnEdgeToEdge() {
    	return this.edgeToEdge;
  	}
  	cameraClick() {
    	return "Camera clicked ";
  	}
  	cameraClick(mode) {
    	return "Camera clicked in " + mode + ' mode';
  	}

}

//declaring class microsoft that inherits from class smartPhones
class microsoft extends smartPhones{
	//initializing constructor
	constructor(imeiCode,processor,internalMemory,lumia){
		super(imeiCode,processor,internalMemory,lumia);
		this.lumia = lumia;

	}

	//declaring methods
	returnLumia() {
    	return this.lumia;
  	}
}

//let microsoftXL = new microsoft(12,"ram",'5gb',false);
//nokia.returnLumia();