import { Button } from '@/components/ui/button'
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Barbershop } from '@/interfaces/barbershop'
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBarbershop } from '@/api/update-barbershop'
import { Loader2 } from 'lucide-react'

export interface DialogUpdateBarbershopProps {
  barbershop: Barbershop
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const updateBarbershopSchema = z.object({
  name: z.string(),
  contactName: z.string(),
  email: z.string().email(),
  contactPhone: z.string(),
})

type updateBarbershopInputs = z.infer<typeof updateBarbershopSchema>

export const DialogUpdateBarbershop: React.FC<DialogUpdateBarbershopProps> = ({
  barbershop,
  setOpen,
}) => {
  const queryClient = useQueryClient()

  const { mutateAsync: updateBarbershopFn, isPending } = useMutation({
    mutationFn: updateBarbershop,
    onSuccess: () => {
      setOpen(false)

      queryClient.invalidateQueries({
        queryKey: ['barbershops'],
      })
    },
  })

  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = useForm<updateBarbershopInputs>({
    resolver: zodResolver(updateBarbershopSchema),
    defaultValues: {
      contactName: barbershop.contactName,
      contactPhone: barbershop.contactPhone,
      email: barbershop.email,
      name: barbershop.name,
    },
  })

  const handleUpdateBarbershop = async (data: updateBarbershopInputs) => {
    updateBarbershopFn({
      contactName: data.contactName,
      contactPhone: data.contactPhone,
      email: data.email,
      name: data.name,
      id: barbershop.id,
    })
  }

  return (
    <DialogContent>
      <form
        onSubmit={handleSubmit(handleUpdateBarbershop)}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>Editar perfil da barbearia</DialogTitle>
          <DialogDescription>Altere o perfil da barbearia</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Nome da barbearia
            </Label>
            <Input id="name" className="col-span-3" {...register('name')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contactName" className="text-right">
              Nome para contato
            </Label>
            <Input
              id="contactName"
              className="col-span-3"
              {...register('contactName')}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input id="email" className="col-span-3" {...register('email')} />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="contactPhone" className="text-right">
              Telefone para contato
            </Label>
            <Input
              id="contactPhone"
              className="col-span-3"
              {...register('contactPhone')}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" disabled={isPending || !isDirty}>
            {isPending ? (
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            ) : (
              <>Salvar alterações</>
            )}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
