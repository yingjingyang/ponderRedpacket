import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  Example: p.createTable({
    id: p.bigint(),
    name: p.string().optional(),
  }),
}));
