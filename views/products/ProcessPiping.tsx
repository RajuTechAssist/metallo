"use client";

import React from "react";
import { ConfigurableProductPage } from "../../components/product";
import { PROCESS_PIPING_PAGE_DATA } from "@/data/processPipingData";

const ProcessPiping: React.FC = () => <ConfigurableProductPage config={PROCESS_PIPING_PAGE_DATA} />;

export default ProcessPiping;
