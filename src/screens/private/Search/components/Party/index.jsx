import React, { useContext } from "react";
import { Column, Row, VStack, Button } from "native-base";
import PersonProfile from "./PersonProfile";
import MyProfile from "./MyProfile";
import { SearchContext } from "../../context";

export default function Party({ ...props }) {
  const { users, fullParty } = useContext(SearchContext);

  return (
    <Row w={"100%"} space={1} {...props}>
      <MyProfile />
      <PersonProfile personData={users[0]} />
      <PersonProfile personData={users[1]} />
      <PersonProfile personData={users[2]} />
    </Row>
  );
}
