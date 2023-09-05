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

module.exports={
    createSupport
};