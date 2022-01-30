import Link from "next/link";
import Container from "@/ui/container";

import useWeb3 from "@/features/web3/hooks/use-web3";
import LogOut from "@/features/authentication/log-out";
import Balance from "./balance";

export default function Header({}) {
  const { address } = useWeb3();
  return (
    <header className="fixed top-0 w-full">
      <Container>
        <div className="flex py-6 px-4 items-center">
          <div className="flex-grow text-lg">
            <Link href={"/"}>
              <a className="text-white font-heading text-4xl">
                <>
                  <span className="font-bold">Reward</span>
                  <span className="font-light">Token</span>
                </>
              </a>
            </Link>
          </div>

          {address && (
            <div className="flex items-center space-x-8">
              <Balance />
              <LogOut />
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
