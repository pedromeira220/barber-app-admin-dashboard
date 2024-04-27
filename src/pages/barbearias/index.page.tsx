import { Sidebar } from '@/components/sidebar'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getBarbershops } from '@/api/get-barbershops'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import { BarbershopTableRow } from './barbershop-table-row'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { DialogCreateBarbershop } from './dialog-create-barbershop'

export default function Barbearias() {
  const [isRegisterBarbershopDialogOpen, setIsRegisterBarbershopDialogOpen] =
    useState(false)

  const fetchBarbershops = async () => {
    return getBarbershops().then((response) => {
      return response.data
    })
  }

  const { data: result } = useQuery({
    queryKey: ['barbershops'],
    queryFn: fetchBarbershops,
  })

  return (
    <div className="grid min-h-screen grid-cols-5">
      <Sidebar />

      <div className="col-span-4 flex flex-col gap-6 border-l p-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Visão das barbearias cadastradas
            </h2>
            <p className="text-muted-foreground">
              Veja aqui todas as barbeiras cadastradas no sistema
            </p>
          </div>

          <Dialog
            open={isRegisterBarbershopDialogOpen}
            onOpenChange={setIsRegisterBarbershopDialogOpen}
          >
            <DialogTrigger asChild>
              <Button>Cadastrar</Button>
            </DialogTrigger>

            <DialogCreateBarbershop
              setOpen={setIsRegisterBarbershopDialogOpen}
            />
          </Dialog>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome da barbearia</TableHead>
                <TableHead>Nome para contato</TableHead>
                <TableHead>Endereço de email</TableHead>
                <TableHead>Telefone para contato</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {result &&
                result.barbershops.map((barbershop) => {
                  return (
                    <BarbershopTableRow
                      barbershop={barbershop}
                      key={barbershop.id}
                    />
                  )
                })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
