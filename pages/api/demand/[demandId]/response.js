import { getServerSession } from "next-auth";

import Supply from "../../../../models/Supply.js";
import { authOptions } from "../../auth/[...nextauth].js";
import connectDB from "../../../../utils/db.js";

const handler = async (req, res) => {
  connectDB();
  const sess = await getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(200).json({ msg: "Not Authorized" });
  } else {
    const { id } = sess.user;
    if (req.method == "GET") {
      const Supply = await Supply.find({}).populate({
        path: "creator",
        select: "name email _id",
      });
      res.status(200).json(Supply);
    } else if (req.method == "POST") {
      const { response } = req.body;
      const { SupplyId } = req.query;

      const dem = await Supply.findById(SupplyId);
      dem.responses.push({
        user: id,
        response,
      });
      await dem.save();

      res.status(201).json({ msg: "Success" });
    }
  }
};

export default handler;
