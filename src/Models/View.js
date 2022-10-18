const mongoose = require("mongoose");

const ViewSchema = new mongoose.Schema({
    voltageV1N:{
        type: String,
        required: true,
    },
    voltageV2N:{
        type: String,
        required: true,
    },
    voltageV3N:{
        type: String,
        required: true,
    },
    averageVoltageLN:{
        type: String,
        required: true,
    },
    currentI1:{
        type: String,
        required: true,
    },
    currentI2:{
        type: String,
        required: true,
    },
    currentI3:{
        type: String,
        required: true,
    },
    averageCurrent:{
        type: String,
        required: true,
    },
    kW1:{
        type: String,
        required: true,
    },
    kW2:{
        type: String,
        required: true,
    },
    kW3:{
        type: String,
        required: true,
    },
    kVA1:{
        type: String,
        required: true,
    },
    kVA2:{
        type: String,
        required: true,
    },
    kVA3:{
        type: String,
        required: true,
    },
    kVAr1:{
        type: String,
        required: true,
    },
    kVAr2:{
        type: String,
        required: true,
    },
    kVAr3:{
        type: String,
        required: true,
    },
    totalKW:{
        type: String,
        required: true,
    },
    totalKVA:{
        type: String,
        required: true,
    },
    totalKVAr:{
        type: String,
        required: true,
    },
    pF1:{
        type: String,
        required: true,
    },
    pF2:{
        type: String,
        required: true,
    },
    pF3:{
        type: String,
        required: true,
    },
    averagePF:{
        type: String,
        required: true,
    },
    frequency:{
        type: String,
        required: true,
    },
    totalNetKVAh:{
        type: String,
        required: true,
    },
    totalNetKVArh:{
        type: String,
        required: true,
    },
    kWMaxActivePower:{
        type: String,
        required: true,
    },
    kwMinActivePower:{
        type: String,
        required: true,
    },
    kVArMaxReactivePower:{
        type: String,
        required: true,
    },
    kVArMinReactivePower:{
        type: String,
        required: true,
    },
    kVAMaxApparentPower:{
        type: String,
        required: true,
    },
    neturalCurrent:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },

});

const view = mongoose.model("Views", ViewSchema);
module.exports = view;


