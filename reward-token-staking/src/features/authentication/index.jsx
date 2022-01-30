import useWeb3 from "@/features/web3/hooks/use-web3";
import OutlineButton from "@/ui/buttons/outline";

import Modal from "@/ui/modal";
import Image from "next/image";

import { connectors } from "./connectors";

export function AuthButton({ label, onClick }) {
  return <OutlineButton onClick={onClick}>{label}</OutlineButton>;
}

export default function Authentication({
  isModalVisible = true,
  setIsModalVisible = () => {},
}) {
  const { authenticate } = useWeb3();
  return (
    <Modal isOpen={isModalVisible} close={() => setIsModalVisible(false)}>
      <h2 className="text-lg my-4 font-medium">
        Please connect to your wallet to continue
      </h2>

      <div className="flex justify-center">
        {connectors
          .filter((connector) => connector.enabled)
          .map(({ title, icon, connectorId }, key) => (
            <div
              key={key}
              onClick={async () => {
                try {
                  await authenticate({ provider: connectorId });
                  window.localStorage.setItem("connectorId", connectorId);
                  setIsModalVisible(false);
                } catch (e) {
                  console.error(e);
                }
              }}>
              <div className="p-8 border rounded-sm border-black-100 text-white flex w-full flex-col justify-center">
                <Image
                  src={`/images/logos/${icon}`}
                  alt={title}
                  height={64}
                  width={64}
                />

                <div>{title}</div>
              </div>
            </div>
          ))}
      </div>
    </Modal>
  );
}
