import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  nomComplet: { type: String,  },
  email: { type: String,  },
  password: { type: String,  },
  role: { type: String,  },
});
const userModel = mongoose.model("user", userSchema, "users");
export default userModel;
