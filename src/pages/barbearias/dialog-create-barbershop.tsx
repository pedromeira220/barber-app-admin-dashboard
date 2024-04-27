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
import React from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
// import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { registerBarbershop } from '@/api/register-barbershop'

export interface DialogCreateBarbershopProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const registerBarbershopSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  contactName: z.string(),
  contactPhone: z.string(),
})

type registerBarbershopInputs = z.infer<typeof registerBarbershopSchema>

export const DialogCreateBarbershop: React.FC<DialogCreateBarbershopProps> = ({
  setOpen,
}) => {
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm<registerBarbershopInputs>({
    resolver: zodResolver(registerBarbershopSchema),
  })

  const {
    mutateAsync: registerBarbershopFn,
    isPending: registerBarbershopIsPending,
  } = useMutation({
    mutationFn: registerBarbershop,
    onSuccess: () => {
      setOpen(false)
      reset()

      queryClient.invalidateQueries({
        queryKey: ['barbershops'],
      })
    },
  })

  const handleRegisterBarbershop = async (data: registerBarbershopInputs) => {
    registerBarbershopFn({
      contactName: data.contactName,
      contactPhone: data.contactPhone,
      email: data.email,
      name: data.name,
      password: data.password,
    })
  }

  return (
    <DialogContent>
      <form
        onSubmit={handleSubmit(handleRegisterBarbershop)}
        className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>Cadastrar nova barbearia</DialogTitle>
          <DialogDescription>Adicionar barbearia no sistema</DialogDescription>
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
            <Label htmlFor="password" className="text-right">
              Senha
            </Label>
            <Input
              id="password"
              className="col-span-3"
              {...register('password')}
            />
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
          <Button
            type="submit"
            disabled={registerBarbershopIsPending || !isDirty}
          >
            {registerBarbershopIsPending ? (
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            ) : (
              <>Cadastrar</>
            )}
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
