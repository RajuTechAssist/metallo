"use client";

import React from "react";
import { ConfigurableProductPage } from "../../components/product";
import { PROCESS_EQUIPMENTS_PAGE_DATA } from "@/data/processEquipmentsData";

const ProcessEquipments: React.FC = () => (
  <ConfigurableProductPage config={PROCESS_EQUIPMENTS_PAGE_DATA} />
);

export default ProcessEquipments;
