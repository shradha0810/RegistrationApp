const jwt = require("jsonwebtoken");
const USER = require("./schema");

const authenticate = async (req, res, next) => {
  try {
    const tokgot = req.cookies.jwtoken;
    const validtoken = jwt.verify(tokgot, process.env.SECRET_KEY);
    const data = await USER.findOne({
      _id: validtoken._id,
    });
    let found=false;
    data.tokens.map((curr)=>{
      if(curr.token===tokgot){
        found=true;
      }
      return curr;
    });
    if (!data || !found) {
      throw new Error("No User Found");
    }
    req.token = tokgot;
    req.userdata = data;
    req.id = data._id;
    next();
  } catch (error) {
    res.status(401).send("Unauthorized token");
  }
};

module.exports = authenticate;
