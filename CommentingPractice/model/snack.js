export default class Snack{

constructor(){
    var type;
    var heathly;
}//closes constructor

/**
 * getType() setter method sets type field
 */
getType(){
    return this.type;
}

setType(typePara){
    this.type = typePara;
}

getHealthy(){
    return this.heathly;
}

setHealthy(healthyPara){
    this.heathly = healthyPara;
}
} //Closes class

export class Chocolate extends Snack{

    constructor(){
        super() //calling constructor or paraent class
        var cocoPowderPercentage;
        var chocolateType;
    }

    getCocoPowderPercentage(){
        return cocoPowderPercentage;

    }
    

    setCocoPowderPercentage(percentagePara){
        this.cocoPowderPercentage = percentagePara;

    }



    getChocolateType(){
        return this.chocolateType;
    }

    setChocolateType(typePara){
        this.chocolateType = typePara;
    }


    }
