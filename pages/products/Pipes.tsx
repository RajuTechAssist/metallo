import React from "react";
import { ConfigurableProductPage } from "../../components/product";
import { PIPES_PAGE_DATA } from "./data/pipesData";

const Pipes: React.FC = () => <ConfigurableProductPage config={PIPES_PAGE_DATA} />;

export default Pipes;
