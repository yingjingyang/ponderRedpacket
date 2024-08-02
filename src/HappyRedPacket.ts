import { ponder } from "@/generated";

ponder.on("HappyRedPacket:ClaimSuccess", async ({ event, context }) => {
  const { Example } = context.db;
  await Example.create({
    id: event.block.timestamp,
    data: {
      name: event.args.claimer,
    },
  });
  console.log(event.args);
});

ponder.on("HappyRedPacket:CreationSuccess", async ({ event, context }) => {
  console.log(event.args);
});

ponder.on("HappyRedPacket:RefundSuccess", async ({ event, context }) => {
  console.log(event.args);
});
