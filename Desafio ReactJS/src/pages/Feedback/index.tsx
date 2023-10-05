import { PageWrapper } from "../../components/PageWrapper";
import { DefaultMessage } from "../../components/DefaultMessage";

import CheckoutFeedback from "../../assets/checkout-feedback.png";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";

export function Feedback() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageWrapper>
      <DefaultMessage
        img={CheckoutFeedback}
        message="Compra realizada com sucesso!"
      />
    </PageWrapper>
  );
}
