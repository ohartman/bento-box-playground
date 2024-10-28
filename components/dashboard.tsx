"use client"

import { useState } from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { useTheme } from "next-themes"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "teal",
  },
  mobile: {
    label: "Mobile",
    color: "teal",
  },
} satisfies ChartConfig

export function Component() {
  const { theme } = useTheme()
  const chartColor = theme === "light" ? "#000000" : "teal"

  const [zoom, setZoom] = useState({ start: 0, end: chartData.length - 1 })
  const minRange = 2

  const handleZoomIn = () => {
    const range = zoom.end - zoom.start
    if (range > minRange) {
      const mid = Math.floor((zoom.start + zoom.end) / 2)
      const newRange = Math.max(minRange, Math.floor(range / 2))

      setZoom({
        start: Math.max(0, mid - Math.floor(newRange / 2)),
        end: Math.min(chartData.length - 1, mid + Math.floor(newRange / 2)),
      })
    }
  }

  const handleZoomOut = () => {
    if (zoom.start === 0 && zoom.end === chartData.length - 1) {
      return
    }

    const range = zoom.end - zoom.start
    const mid = Math.floor((zoom.start + zoom.end) / 2)
    const newRange = Math.min(chartData.length, range * 2)

    setZoom({
      start: Math.max(0, mid - Math.floor(newRange / 2)),
      end: Math.min(chartData.length - 1, mid + Math.floor(newRange / 2)),
    })
  }

  const handlePanLeft = () => {
    const step = 1
    const newStart = Math.max(0, zoom.start - step)
    const newEnd = newStart + (zoom.end - zoom.start)
    
    setZoom({
      start: newStart,
      end: Math.min(chartData.length - 1, newEnd),
    })
  }

  const handlePanRight = () => {
    const step = 1
    const newEnd = Math.min(chartData.length - 1, zoom.end + step)
    const newStart = newEnd - (zoom.end - zoom.start)
    
    setZoom({
      start: Math.max(0, newStart),
      end: newEnd,
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lost Users</CardTitle>
        <CardDescription>Showing lost users for the last 6 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            width={500}
            height={300}
            data={chartData.slice(zoom.start, zoom.end + 1)}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke={chartColor}
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke={chartColor}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between mt-4">
          <div className="flex gap-2">
            <button
              onClick={handleZoomIn}
              className="px-3 py-1 text-sm font-medium text-white rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors"
              style={{ backgroundColor: chartColor }}
            >
              Zoom In
            </button>
            <button
              onClick={handleZoomOut}
              className="px-3 py-1 text-sm font-medium text-white rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors"
              style={{ backgroundColor: chartColor }}
            >
              Zoom Out
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePanLeft}
              className="px-3 py-1 text-sm font-medium text-white rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors"
              style={{ backgroundColor: chartColor }}
            >
              ◀
            </button>
            <button
              onClick={handlePanRight}
              className="px-3 py-1 text-sm font-medium text-white rounded-md shadow-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors"
              style={{ backgroundColor: chartColor }}
            >
              ▶
            </button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
