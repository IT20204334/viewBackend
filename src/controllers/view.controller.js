const View = require("../Models/View");

exports.createView = async(req, res) => {
    try{
        const view = new View(req.body);
        const savedView = await view.save();
        if(savedView){
            res.status(201).send({message: "success!", data: savedView});
        }else{
            res.status(400).send({message:"failed!", data:savedView});
        }
    }catch(e) {
        console.log("error", e);
        res.status(500).send({message: "error", data:e});
    }
};

exports.getAllViews = async (req, res) => {
    try {
        const view = await View.find({});
        res.json(view);
      } catch (e) {
        console.log("Error", e);
        res.status(500).send({message:"error", data:e});
      }
    };
    