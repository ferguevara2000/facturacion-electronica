import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-black hover:bg-gray-200 border border-black">
        <Plus className="mr-2 h-4 w-4" />Agregar Productos
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Agregar un nuevo Producto</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nombre
            </Label>
            <Input
              id="name"
              placeHolder="Nombre del producto"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="price" className="text-right">
              Precio Unitario
            </Label>
            <Input
              id="price"
              placeHolder="Precio del producto"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
              IVA
            </Label>
            <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
            </Select>
          </div>
        </div>
        <DialogFooter>
          <Button className="bg-white text-black hover:bg-gray-200 border border-black" type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
