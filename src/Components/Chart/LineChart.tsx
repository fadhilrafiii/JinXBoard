import React, { useEffect, useRef, useState } from 'react';

import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import Button, { ButtonTheme, ButtonType } from 'Components/Button';

// import { Colors } from 'Shared/Enums';
import { downloadFile } from 'Shared/Helpers/file';

import { useLineChartData } from './utils';

import styles from './index.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.defaults.font.family = 'Lato';

interface LineChartProps {
  id: string;
  data: Record<string, number[]>;
  xValues: string[];
  title: string;
  xLabel?: string;
  yLabel?: string;
}

const LineChart = ({
  id,
  data,
  xValues,
  title,
  xLabel = 'Datetime',
  yLabel = 'Value',
}: LineChartProps) => {
  const [shouldRender, setShouldRender] = useState<boolean>(false);
  const { options, chartData } = useLineChartData(xValues, data, xLabel, yLabel);
  const chartRef = useRef<ChartJS<'line', number[], string>>(null);

  const actionDownloadChartImage = () => {
    const chartObject = chartRef.current;

    if (chartObject) {
      const chartImage = chartObject.toBase64Image('image/png', 1);

      if (chartImage) downloadFile(chartImage, title);
    }
  };

  useEffect(() => {
    const delay = setTimeout(() => setShouldRender(true), 200);
    return () => clearTimeout(delay);
  }, []);

  const classNames = [styles.chartContainer];

  if (shouldRender) classNames.push(styles.chartContainerRender);

  return (
    <div className={classNames.join(' ')}>
      <div className={styles.chartHeader}>
        <h4>{title}</h4>
        <div>
          <Button
            title="Download Chart"
            theme={ButtonTheme.Primary}
            type={ButtonType.Outlined}
            onClick={actionDownloadChartImage}
          />
        </div>
      </div>
      <div>
        <Line id={id} ref={chartRef} options={options} data={chartData} />
      </div>
    </div>
  );
};

export default LineChart;
