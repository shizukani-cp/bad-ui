import { Slider } from "@/components/ui/slider"

export default function Page() {
  return (
    <div className="p-4 space-y-4">
      <Slider defaultValue={[0]} max={10 ^ 11} />
    </div>
  )
}
