import { deleteBarbershop } from '@/api/delete-barbershop'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { Barbershop } from '@/interfaces/barbershop'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import React, { useState } from 'react'
import { DialogUpdateBarbershop } from './dialog-update-barbershop'

interface BarbershopTableRowProps {
  barbershop: Barbershop
}

export const BarbershopTableRow: React.FC<BarbershopTableRowProps> = ({
  barbershop,
}) => {
  const queryClient = useQueryClient()

  const [isUpdateBarbershopDialogOpen, setIsUpdateBarbershopDialogOpen] =
    useState(false)

  const { mutateAsync: deleteBarbershopFn } = useMutation({
    mutationFn: deleteBarbershop,
  })

  return (
    <TableRow key={barbershop.id}>
      <TableCell>
        <div className="flex items-center gap-3">
          <Image
            alt="Foto do logo da barbearia"
            src="https://i.pinimg.com/736x/ff/39/14/ff3914853f62ef394f7b8821bab37f6b.jpg"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <span>{barbershop.name}</span>
        </div>
      </TableCell>
      <TableCell>{barbershop.contactName}</TableCell>
      <TableCell>{barbershop.email}</TableCell>
      <TableCell>{barbershop.contactPhone}</TableCell>
      <TableCell className="flex gap-3">
        <Button
          variant="secondary"
          onClick={() => {
            if (
              confirm(
                'Tem certeza que deseja deletar a barbearia do sistema (essa ação é irreversível)?',
              )
            ) {
              deleteBarbershopFn({
                barbershopId: barbershop.id,
              })

              queryClient.invalidateQueries({
                queryKey: ['barbershops'],
              })
            }
          }}
        >
          Deletar
        </Button>
        <Dialog
          open={isUpdateBarbershopDialogOpen}
          onOpenChange={setIsUpdateBarbershopDialogOpen}
        >
          <DialogTrigger asChild>
            <Button variant="outline">Atualizar</Button>
          </DialogTrigger>
          <DialogUpdateBarbershop
            barbershop={barbershop}
            setOpen={setIsUpdateBarbershopDialogOpen}
          />
        </Dialog>
      </TableCell>
    </TableRow>
  )
}
