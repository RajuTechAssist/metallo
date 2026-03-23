import React from "react";
import { ConfigurableProductPage } from "../../components/product";
import { FABRICATED_STRUCTURES_PAGE_DATA } from "./data/fabricatedStructuresData";

const FabricatedStructures: React.FC = () => (
  <ConfigurableProductPage config={FABRICATED_STRUCTURES_PAGE_DATA} />
);

export default FabricatedStructures;
