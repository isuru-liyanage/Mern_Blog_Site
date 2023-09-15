const Support = require('../Models/SupportModel');

async function createSupport(req, res) {
    try {
        
        const { content, title, phoneno } = req.body;
        const userId = req.user._id;

        console.log(userId);
        
        const support = new Support({
            content,
            userId,
            phoneno,
            title,
        });

        const savedSupport = await support.save();
        res.status(201).json({ support: savedSupport });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to support' });
    }

}

async function getSupportsByUserId(req, res) {
    try {



        const userId = req.user._id;

        const support = await Support.find({ userId: userId });;

        if (!support || support.length === 0) {
            return res.status(403).json({ message: "No supports found for the given user ID" });
        }


        res.status(200).json({ support });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to support' });
    }

}

async function getSupportsBySupportId(req, res) {
    try {

        const { SupportId } = req.params;

        const userId = req.user._id;

        console.log(userId);

        const support = await Support.findOne({ _id: SupportId });

        if( !support ){
            return res.status(404).json({message : "Invalid Support ID"})
        }

        if(req.user._id.toString() !== support.userId.toString()){
            return res.status(401).json({ message: 'Unauthorized' });
        }

        res.status(200).json({ support });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to support' });
    }

}
async function DeleteSupport(req, res) {
    try {
        
        const { SupportId } = req.params;
        
        const userId = req.user._id;

        console.log(userId);

        const support = await Support.findOne({ _id: SupportId });

        if( !support ){
            return res.status(404).json({message : "Support not found"})
        }
       
        if(req.user._id.toString() !== support.userId.toString() && req.user.role !== "admin"){
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const deletedSupport = await Support.findByIdAndRemove({ _id: SupportId });
  
        res.status(200).json({ support, message: "Support request deleted successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to support' });
    }

}

async function updateSupport(req, res) {
    try {
        
        const { SupportId } = req.params;
        const { content, title, phoneno } = req.body;
        
        const userId = req.user._id;

        console.log(userId);

        const support = await Support.findOne({ _id: SupportId });

        if( !support ){
            return res.status(404).json({message : "Invalid Support ID"})
        }

        if(req.user._id.toString() !== support.userId.toString()){
            return res.status(401).json({ message: 'Unauthorized' });
        }
        
        const updatedSupport = await Support.findByIdAndUpdate( SupportId,{content, title, phoneno});

        res.status(200).json({ support,updatedSupport });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to support' });
    }
}

async function allSupports(req, res){
    try {

      const supports = await Support.find();
      res.status(200).json({message: "All blogs", success: true ,supports});

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete the blog' });
    }
}



module.exports={
    createSupport, getSupportsBySupportId,DeleteSupport,updateSupport,getSupportsByUserId, allSupports
};

