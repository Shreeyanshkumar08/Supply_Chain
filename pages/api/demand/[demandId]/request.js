import { getServerSession } from "next-auth";

import Supply from "../../../../models/Supply.js";
import { authOptions } from "../../auth/[...nextauth].js";
import connectDB from "../../../../utils/db.js";
import Proposal from "../../../../models/Proposal.js";

const handler = async (req, res) => {
  connectDB();
  const sess = await getServerSession(req, res, authOptions);

  if (!sess) {
    return res.status(200).json({ msg: "Not Authorized" });
  } else {
    const { id } = sess.user;
    if (req.method == "POST") {
      const { SupplyId } = req.query;

      const dem = await Supply.findById(SupplyId);
      const proposal = await Proposal.create({
        ...req.body,
        status: "req",
        Supply: SupplyId,
        creator: id,
      });

      await proposal.save();
      dem.proposals.push(proposal._id);
      await dem.save();

      res.status(201).json({ msg: "Success" });
    }
  }
};

export default handler;
