import Link from "next/link";
import Page from "@/ui/page";
import Paper from "@/ui/paper";

export default function Homepage({}) {
  return (
    <Page>
      <Paper>
        <h1>Token Rewards Staking System</h1>

        <p>What is this?</p>

        <p>
          This is an experiment in both building a react web3 library and in
          tokenomics and the concept of awarding and staking Reward Tokens.
        </p>

        <p>
          To see your rewards go to{" "}
          <Link href="/rewards">your reward tokens</Link>.
        </p>
      </Paper>
    </Page>
  );
}
