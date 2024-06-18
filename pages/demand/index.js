import React from "react";
import { usePolls } from "../../hooks/queries";
import SupplysPageComponent from "../../components/SupplysPage";
import { useSession } from "next-auth/react";
import UnAuth from "../../components/UI/UnAuth";

const SupplysPage = () => {
  const { data: session } = useSession();
  const { Supplys, isError, isLoading, error } = usePolls();
  // console.log(Supplys);

  if (session) {
    return (
      <div>
        <SupplysPageComponent Supplys={Supplys} />
      </div>
    );
  } else {
    return <UnAuth text={"SignIn or Login to continue"} />;
  }
};

export default SupplysPage;
