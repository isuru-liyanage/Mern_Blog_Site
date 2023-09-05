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

async function getSupportsBySupportId(req, res) {
    try {
        
        const { SupportId } = req.params;
        
        const userId = req.user._id;

        console.log(userId);

        const support = await Support.findOne({ _id: SupportId });

        if( !support ){
            return res.status(404).json({message : "Invalid Support ID"})
        }

        if(req.user._id.toString() !== support.userId.toString()){
            return res.status(401).json({ message: 'Unauthorized' });
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

        const support = await Support.findOne({ _id: SupportId });

        if( !support ){
            return res.status(404).json({message : "Sopport not found"})
        }
       

        if(req.user._id.toString() !== support.userId.toString()){
            return res.status(401).json({ message: 'Unauthorized' });
        }
        
        res.status(200).json({ support });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to support' });
    }

}




module.exports={
    createSupport, getSupportsBySupportId
};

