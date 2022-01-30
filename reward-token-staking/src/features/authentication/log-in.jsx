import { useState } from "react";
import Authentication, { AuthButton } from "@/features/authentication";

export default function LogIn({ label = "Connect your wallet" }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <AuthButton label={label} onClick={() => setIsModalVisible(true)} />

      <Authentication
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
}
