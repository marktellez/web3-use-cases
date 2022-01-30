import useWeb3 from "@/features/web3/hooks/use-web3";
import LoginForm from "@/features/authentication/log-in";

import Page from "./";

export default function SecurePage({ children }) {
  const { address } = useWeb3();

  return (
    <Page>
      {address ? (
        children
      ) : (
        <div>
          <div>
            <h1 className="text-center">
              Please connect to Metamask to continue
            </h1>
          </div>
          <div className="w-full flex justify-center">
            <LoginForm />
          </div>
        </div>
      )}
    </Page>
  );
}
