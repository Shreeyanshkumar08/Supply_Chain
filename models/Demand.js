import mongoose from "mongoose";
import { ResponseSchema } from "./Response";
import { ResourceProposalSchema } from "./Resource";

const SupplySchema = new mongoose.Schema({
  title: {
    type: String,
  },

  description: {
    type: String,
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  active: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business",
  },

  proposals: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Proposal",
    },
  ],

  location: String,
  tags: [String],
  responses: [ResponseSchema],
  resoursesPromised: [ResourceProposalSchema],
});

const Supply =
  mongoose.models?.Supply || mongoose.model("Supply", SupplySchema);

export default Supply;
