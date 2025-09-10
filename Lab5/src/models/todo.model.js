import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      index: true, // ✅ Index created for fast searching
    },
    completed: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);


todoSchema.virtual("isOverdue").get(function () {
  if (!this.dueDate) return false;
  return !this.completed && new Date() > this.dueDate;
});


todoSchema.set("toJSON", { virtuals: true });
todoSchema.set("toObject", { virtuals: true });


todoSchema.pre("save", function (next) {
  console.log(`📌 Before saving todo: ${this.title}`);
  next();
});

todoSchema.post("save", function (doc) {
  console.log(`✅ Todo "${doc.title}" saved successfully!`);
});


todoSchema.pre("findOneAndDelete", function (next) {
  console.log("⚠️ Todo is about to be deleted:", this.getQuery());
  next();
});

// ✅ Compound Index (optimizes queries on multiple fields)
todoSchema.index({ completed: 1, dueDate: -1 });

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
