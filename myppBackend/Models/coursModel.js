import mongoose from "mongoose";

const coursModel = mongoose.Schema({
  nomComplet: { type: String,  },
  email: { type: String,  },
  password: { type: String,  },
  role: { type: String,  },
});
const Coursmodel = mongoose.model("user", coursModel, "users");
export default Coursmodel;