class SITConversion{
    convertMs(ms, to){
        switch(to){
            case "mc": return ms*1000
            case "s": return ms/1000
            case "m": return ms/1000/60
            case "h": return ms/1000/60/60
            default: throw Error("Invalid Argument")
        }
    }
    convertSec(seconds ,to) {
        switch(to){
            case "mc": return seconds*1000*1000
            case "ms": return seconds*1000
            case "m": return seconds/60
            case "h": return seconds/60/60
            default: throw Error("Invalid Argument")

        }
    }
    convertM(m, to){
        switch(to){
            case "mc": return m*60*1000*1000
            case "ms": return m*60*1000
            case "s": return m*60 
            case "h": return m/60
            default: throw Error("Invalid Argument")
        }
    }
    convertH(h, to){
        switch(to){
            case "mc": return h*60*60*1000*1000
            case "ms": return h*60*60*1000
            case "s": return h*60*60
            case "m": return h*60
            default: throw Error("Invalid Argument")
        }
    }
}

module.exports = {SITConversion};