const Support = require('../Models/SupportModel');

async function createSupport(req, res) {
    try {
        
        const { content,title } = req.body;
        const userId = req.user._id;
        
        const support = new Support({
            content,
            user: userId,
            title,
        });

        const savedSupport = await Support.save();
        res.status(201).json({ support: savedSupport });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to support' });
    }

}

module.exports={
    createSupport
};