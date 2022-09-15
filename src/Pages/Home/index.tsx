import React, { useMemo, useState } from 'react';

import { K_FLOW_ASSURANCE_DATA_PROPERTY_OPTIONS } from 'Pages/FlowAssurance/constants';
import { generateChartData, useFlowAssuranceData } from 'Pages/FlowAssurance/utils';
import HSEChart from 'Pages/HSE/Components/HSEChart';
import { useHSEData } from 'Pages/HSE/utils';
import PowerPlantChart from 'Pages/PowerPlant/Components/PowerPlantChart';
import { usePowerPlantData } from 'Pages/PowerPlant/utils';

import { LineChart } from 'Components/Chart';
import RadioButtonList, { RadioButtonValue } from 'Components/RadioButtonList';

import styles from './index.module.css';

const Home = () => {
  const [selectedProperty, setSelectedProperty] = useState<RadioButtonValue>('depth');

  const { data: hseData } = useHSEData();
  const { data: powerPlantData } = usePowerPlantData();
  const { data: flowAssuranceData } = useFlowAssuranceData();

  const { xValues, chartData } = useMemo(
    () => generateChartData(flowAssuranceData, selectedProperty as string, 15),
    [flowAssuranceData, selectedProperty],
  );

  const actionChangePropertyShownInChart = (value: RadioButtonValue) => {
    setSelectedProperty(value);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.firstRow}>
        <HSEChart data={hseData} shownData={8} />
        <PowerPlantChart data={powerPlantData} shownData={8} />
      </div>
      <div className={styles.secondRow}>
        <LineChart
          id="flowassurance-line-chart"
          xValues={xValues}
          data={chartData}
          title="Flow Assurance Chart"
          xLabel="Date"
          yLabel={selectedProperty as string}
        />
        <RadioButtonList
          value={selectedProperty}
          options={K_FLOW_ASSURANCE_DATA_PROPERTY_OPTIONS}
          onChangeOptions={actionChangePropertyShownInChart}
        />
      </div>
    </div>
  );
};

export default Home;
