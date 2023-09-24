import HeaderUser from "../components/HeaderUser";
import Transactions from "../components/Transactions";

const MainUser = () => {
  return (
    <main className="main bg-dark">
      <HeaderUser />
      <Transactions />
    </main>
  );
};

export default MainUser;
