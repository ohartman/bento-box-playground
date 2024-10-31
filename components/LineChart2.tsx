"use client"

import * as React from "react"
import { CartesianGrid, LineChart, XAxis, YAxis, ReferenceLine, Line } from "recharts"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

const chartData = [
  { epoch: "Epoch 0" },
  { epoch: "Epoch 1" },
  { epoch: "Epoch 2" },
  { epoch: "Epoch 3" },
  { epoch: "Epoch 4" },
  { epoch: "Epoch 5" },
  { epoch: "Epoch 6" },
  { epoch: "End" }
]

const randomLineData = [
  { epoch: "Epoch 0", value: 300 },
  { epoch: "Epoch 1", value: 250 },
  { epoch: "Epoch 2", value: 200 },
  { epoch: "Epoch 3", value: 150 },
  { epoch: "Epoch 4", value: 100 },
  { epoch: "Epoch 5", value: 50 },
  { epoch: "Epoch 6", value: 25 },
  { epoch: "End", value: 0 }
]

const chartConfig = {
  supply: {
    label: "Supply",
    color: "teal",
  },
}

const infoBoxes = [
  { title: "Claims", max: 9000, min: 1000 },
  { title: "Claims", max: 4500, min: 500 },
  { title: "Claims", max: 2250, min: 250 },
  { title: "Claims", max: 1125, min: 125 },
  { title: "Claims", max: 564, min: 66 },
  { title: "Claims", max: 282, min: 33 },
  { title: "Claims", max: 141, min: 20 },
  { title: "Invisible" }
]

export function LineChart2() {
  const { theme } = useTheme()
  const lineColor = theme === "light" ? "#000000" : "teal"

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Airdrop Claims</CardTitle>
          <CardDescription>25,000,000 Tribbles</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <LineChart
            data={chartData} 
            margin={{ top: 30, left: 12, right: 40 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="epoch"
              tick={false}
              axisLine={false}
              tickLine={false}
              padding={{ left: 0, right: 50 }}
            />
            <YAxis hide domain={[0, 'auto']} />

            {chartData.map((entry, index) => (
              <ReferenceLine
                key={index}
                x={entry.epoch}
                stroke="gray"
                strokeDasharray="3 3"
                label={
                  entry.epoch !== "End"
                    ? {
                        value: entry.epoch,
                        position: "top",
                        style: { fontSize: 12, fill: "gray", transform: "translateX(7%)" },
                      } as any
                    : undefined
                }
              />
            ))}

            <Line
              data={randomLineData}
              dataKey="value"
              type="monotone"
              stroke={lineColor}
              strokeWidth={2}
              dot={{ r: 3 }}
              isAnimationActive={true}
            />
          </LineChart>
        </ChartContainer>

        <div className="flex justify-between mt-4 gap-2">
          {infoBoxes.map((info, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center w-full h-45 rounded-lg text-gray-700 font-semibold shadow-md p-2 mx-1 ${
                info.title === "Invisible" ? "bg-transparent text-transparent shadow-none" : "bg-gray-100"
              }`}
              style={{ flexBasis: `${100 / infoBoxes.length}%` }} // Ensures boxes span evenly under each epoch
            >
              <span>{info.title}</span>
              {info.max && <span>Max: {info.max}</span>}
              {info.min && <span>Min: {info.min}</span>}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
