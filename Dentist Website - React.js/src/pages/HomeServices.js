import React from "react";
import Title from "./repeatable/title";
import Services from "./services";
import { FormattedMessage } from "react-intl";

export default function HomeServices() {
  return (
    <>
      <Title
        title={<FormattedMessage id="service_title" />}
        bigTitle={<FormattedMessage id="service_bigTitle" />}
        titleStyle="mt-20"
      />
      <Services />
    </>
  );
}
