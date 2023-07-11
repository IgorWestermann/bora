import React from "react";
import { Column, Row, VStack } from "native-base";
import PersonProfile from "./PersonProfile";
import MyProfile from "./MyProfile";

export default function Party({ ...props }) {
  return (
    <Row w={"100%"} space={1} {...props}>
      <MyProfile />
      <PersonProfile />
      <PersonProfile />
      <PersonProfile />
    </Row>
  );
}
