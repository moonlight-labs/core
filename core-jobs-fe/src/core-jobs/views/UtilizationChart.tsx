import { Box, Button, ButtonGroup, Stack, useTheme } from '@mui/material'
import * as echarts from 'echarts'
import ReactECharts from 'echarts-for-react'
import { random } from 'lodash'
import { FunctionField, RaRecord, SimpleShowLayout } from 'react-admin'
import { WorkersTable } from '../resource/workers/WorkersTable'
import { ButtonPopover } from './ButtonPopover'
import { JobReportShow } from './JobReportShow'
import { echartsThemeFromMui } from './echartsThemeFromMui'
import { useRef } from 'react'

// import { echartsThemeFromMui } from './echartsThemeFromMui'
// echarts.registerTheme('custom', echartsThemeFromMui())

export const UtilizationChart = () => {
  const theme = useTheme()
  echarts.registerTheme(
    'custom',
    echartsThemeFromMui(theme.palette.primary.main),
  )

  const chart = useRef<ReactECharts>(null)

  return (
    <JobReportShow id="jobs_kpis" title="Utilization">
      <SimpleShowLayout sx={{ p: 0 }}>
        <FunctionField
          render={(data: RaRecord) => {
            if (!data) return <div>No data</div>

            const record = data.data[0]

            const workers = record.workers
            const running = record.running
            const utilization = Math.round((100.0 * running) / workers)

            let config = {...utilizationOptions} // make a copy
            config.series[0].data[0].value = utilization

            chart?.current?.getEchartsInstance().setOption(config)

            return (
              <Stack
                direction="row"
                spacing={2}
                justifyContent="space-around"
                alignItems="stretch"
                p={0}
              >
                <Box sx={{ flexBasis: '40%' }}>
                  <ReactECharts
                    ref={chart}
                    theme="custom"
                    style={{
                      // flexBasis: '100%',
                      height: '100%',
                      width: '100%',
                    }}
                    option={config}
                  />
                </Box>

                <Box sx={{ flexBasis: '60%' }}>
                  <ButtonGroup
                    variant="text"
                    size="large"
                    aria-label="large button group"
                  >
                    <ButtonPopover label={`${workers} Workers`}>
                      <WorkersTable />
                    </ButtonPopover>
                    <Button disabled>{`${running} Running Jobs`}</Button>
                  </ButtonGroup>
                </Box>

                {/* <KPIs /> */}
              </Stack>
            )
          }}
        />
      </SimpleShowLayout>
    </JobReportShow>
  )
}

const utilizationOptions = {
  // tooltip: {
  //   formatter: '{a} <br/>{b} : {c}%',
  // },
  series: [
    {
      // name: 'Pressure',
      type: 'gauge',
      radius: '100%',
      detail: {
        fontSize: 20,
        color: 'inherit',
        formatter: '{value}%',
      },
      data: [
        {
          value: random(0, 100),
          detail: {
            offsetCenter: ['0%', '0%'],
            valueAnimation: true,
          },
        },
      ],
      pointer: {
        show: false,
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
  ],
}
