const jbpservice = require("../services/Jostpost.service")

const getJobpost = async (req, res) => {
    try {
      const data = await jbpservice.getAllJobpost();
      res
        .status(data.status)
        .json({ code: data.code, message: data.message, data: data.data });
    } catch (error) {
      return res.status(500).json({ message: error.message, code: -1, data: "" });
    }
  };
  const getJobpostByID = async (req, res) => {
    try {
      const data = await jbpservice.getJobpostByID(req.body.id);
      res
        .status(data.status)
        .json({ code: data.code, message: data.message, data: data.data });
    } catch (error) {
      return res.status(500).json({ message: error.message, code: -1, data: "" });
    }
  };
  const searchJobPostsByKeyword =async(req,res)=>{

    const keyword =req.body.keyword
    console.log("jdjsa",keyword)
    if (!keyword) {
      return res.status(400).json({ message: 'Keyword is required' });
    }
    try {
      const data = await jbpservice.searchJobPostsByKeyword(keyword);
      res
        .status(data.status)
        .json({ code: data.code, message: data.message, data: data.data });
    } catch (error) {
      return res.status(500).json({ message: error.message, code: -1, data: "" });
    }
  }

module.exports ={getJobpost,getJobpostByID,searchJobPostsByKeyword}