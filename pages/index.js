import { useWeb3React } from "@web3-react/core";
import { injected } from "../connectors";

export default function Home() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (error) {
      console.log(error);
    }
  }

  async function disconnect() {
    try {
      await deactivate();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.container}>
      {active ? (
        <>
          <button onClick={disconnect} className={styles.button}>
            Disconnect Wallet
          </button>
          <span>
            Wallet Connected <b>{account}</b>{" "}
          </span>
        </>
      ) : (
        <>
          <button onClick={connect} className={styles.button}>
            Connect to MetaMaskt
          </button>
          <span>Not connected</span>
        </>
      )}
    </div>
  );
}

const styles = {
  container: "flex flex-col items-center justify-center h-screen",
  button:
    "py-2 mt-20 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-blue-600 hover:bg-blue-800",
};
