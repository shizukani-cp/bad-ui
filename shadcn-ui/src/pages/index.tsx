"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Page() {
  const [val, setVal] = useState([0]);
  const items = Array.from({ length: 64 })
  const initialOptions = ["Male", "Female", "Lesbian", "Gay", "Bisexual", "Transgender", "Queer", "Don't know"]
  const [options, setOptions] = useState(initialOptions)
  const shuffle = () => {
    setOptions((prev) => [...prev].sort(() => Math.random() - 0.5))
  }

  return (
    <div className="p-4 space-y-4">
      <div className="text-2xl font-bold">電話番号: {String(val[0]).padStart(11, '0')}
        <Slider defaultValue={[0]} max={10 ** 11} step={1} onValueChange={setVal} value={val} />
      </div>
      <div>
        パスワード
        {items.map((_, index) => { return <Switch key={index} />; })}
      </div>
      <div>
        生年月日
        <Calendar />
      </div>
      <div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Gender" />
          </SelectTrigger>
          <SelectContent>
            <div onMouseMove={shuffle} className="p-1">
              {options.map((option) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </div>
          </SelectContent>
        </Select>
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button>送信</Button>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          align="center"
          sideOffset={-40}
          avoidCollisions={false}
          className="z-50 bg-red-500 h-20 w-40 flex items-center justify-center"
        >
          <p style={{
            fontSize: "100rem"
          }}>推定時間:2000年</p>
        </TooltipContent>
      </Tooltip >
    </div >
  )
}
