import { createConfig } from "@ponder/core";
import { http } from "viem";

import { HappyRedPacketAbi } from "./abis/HappyRedPacketAbi";

export default createConfig({
  networks: {
    optimism: { chainId: 10, transport: http("opt-mainnet.g.alchemy.com/v2/L6amojJsXjRv4hPv_VEo7lCORzMpPmF-") },
  },
  contracts: {
    HappyRedPacket: {
      abi: HappyRedPacketAbi,
      address: "0x62E8cf62Dc0B7d7afF9A1A58CeA14976fDB16a85",
      network: "optimism",
      startBlock: 115319399,
      endBlock: 115555497,
    },
  },
});
