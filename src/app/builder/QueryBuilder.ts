import { Query } from "mongoose";

class QueryBuilder<T> {
  public modelQuery: Query<T[], T>;
  public query: Record<string, unknown>;

  constructor(modelQuery: Query<T[], T>, query: Record<string, unknown>) {
    this.modelQuery = modelQuery;
    this.query = query;
  }

  search() {
    if (this?.query?.search) {
      this.modelQuery = this.modelQuery.find({
        $or: [
          { title: { $regex: this?.query?.search, $options: "i" } },
          { content: { $regex: this?.query?.search, $options: "i" } },
        ],
      });
    }
    return this;
  }

  // filter() {
  //   const queryObj = { ...this.query };
  //   const excludeFields = ["searchTerm", "sort", "limit", "page", "fields"];
  //   excludeFields.forEach((el) => delete queryObj[el]);

  //   this.modelQuery = this.modelQuery.find(queryObj);

  //   return this;
  // }

  // sort() {
  //   const sort =
  //     (this?.query?.sort as string)?.split(",")?.join(" ") || "-createdAt";
  //   this.modelQuery = this.modelQuery.sort(sort as string);

  //   return this;
  // }

  // fields() {
  //   const fields =
  //     (this?.query?.fields as string)?.split(",")?.join(" ") || "-__v";
  //   this.modelQuery = this.modelQuery.select(fields);

  //   return this;
  // }
}

export default QueryBuilder;
