import { getServerSession } from "next-auth";
import Supply from "../../../models/Supply.js";
import connectDB from "../../../utils/db.js";
import { authOptions } from "../auth/[...nextauth].js";
import User from "../../../models/User.js";

const handler = async (req, res) => {
  connectDB();
  const sess = await getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(200).json({ msg: "Not Authorized" });
  } else {
    const { id } = sess.user;
    if (req.method == "GET") {
      const Supply = await Supply.find({})
      res.status(200).json(Supply);
    } else if (req.method == "POST") {
      const user = await User.findById(id);
      const dem = await Supply.create({ ...req.body, creator: id });
      user.SupplyCreated.push(dem._id);
      await user.save();
      res.status(201).json({ msg: "Success" });
    }
  }
};

export default handler;
