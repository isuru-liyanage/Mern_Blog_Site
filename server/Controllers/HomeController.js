const Blog = require('../Models/BlogModel');

async function myBlog(req, res) {

};

async function viewBlog(req, res) {
    try {
        const { pagenum } = req.params;
        if (!pagenum) {
            return res.status(400).json({ message: 'Page Id is required' });
        }
        const blog = await Blog.find({}).skip((pagenum-1)*9).limit(9).exec();
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.status(200).json({ message: 'Blog Found', success: true, blog });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

};

async function updateBlog(req, res) {

}

async function deleteBlog(req, res) {


}

module.exports = {
    myBlog, viewBlog, updateBlog, deleteBlog
};