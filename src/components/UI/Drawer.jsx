import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNewspaper,
  faAnchor,
  faFlag,
  faAddressCard,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import WOW from "wow.js";

export const Drawer = () => {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  });
  return <div></div>;
};
