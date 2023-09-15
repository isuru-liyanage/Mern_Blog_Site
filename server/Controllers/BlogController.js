const Blog = require('../Models/BlogModel');

async function createBlog(req, res) {
    console.log("abc+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    console.log("Received a createBlog request from: ", req.body);
    try {
        const {title, interestedFields, content, photoUrl} = req.body;

        const publisherId = req.user._id;
        const publisherName = req.user.name;

        console.log(interestedFields)

        const newBlog = new Blog({
            title,
            publisherId,
            publisherName,
            interestedFields,
            content,
            photoUrl,
        });

        const savedBlog = await newBlog.save();
        res.json(savedBlog);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create a blog Blog' });
    }
    return;
};

async function viewBlog(req, res) {
  try {
    const { blogId } = req.query; 
    if (!blogId) {
        return res.status(400).json({ message: 'Blog Id is required' });
    }

    const blog = await Blog.findOne({ _id: blogId }); 
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
  try {
      const { blogId } = req.params;
      const { title, interestedFields, content, photoUrl } = req.body;

      const blog = await Blog.findOne({ _id: blogId });

      if (!blog) {
          return res.status(404).json({ message: 'Blog not found' });
      }

      if (req.user._id.toString() !== blog.publisherId.toString()) {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      blog.title = title;
      blog.interestedFields = interestedFields;
      blog.content = content;
      blog.photoUrl = photoUrl;

      const updatedBlog = await blog.save();
      res.json(updatedBlog);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to update the blog' });
  }
}

async function deleteBlog(req, res) {
  try {
      const { blogId } = req.params;

      const blog = await Blog.findOne({ _id: blogId });

      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      console.log(req.user._id , blog.publisherId)
      if (req.user._id.toString() !== blog.publisherId.toString() && req.user.role !== 'admin') {
        return res.status(401).json({ message: 'Unauthorized' });
      }

      const deletedBlog = await Blog.findOneAndDelete({ _id: blogId });

      res.json({ message: 'Blog deleted successfully', success: true });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Failed to delete the blog' });
  }
}

async function allBlogs(req, res){
  try {

    const blogs = await Blog.find();
    res.status(200).json({message: "All blogs", success: true ,blogs});

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete the blog' });
  }
}

module.exports = {
    createBlog, viewBlog, updateBlog, deleteBlog, allBlogs
};