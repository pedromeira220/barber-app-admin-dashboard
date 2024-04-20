import { Sidebar } from '@/components/sidebar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import Image from 'next/image'
import React from 'react'

export default function Barbearias() {
  return (
    <div className="grid min-h-screen grid-cols-5">
      <Sidebar />

      <div className="col-span-4 flex flex-col gap-6 border-l p-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Visão das barbearias cadastradas
          </h2>
          <p className="text-muted-foreground">
            Veja aqui todas as barbeiras cadastradas no sistema
          </p>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome da barbearia</TableHead>
                <TableHead>Nome para contato</TableHead>
                <TableHead>Endereço de email</TableHead>
                <TableHead>Telefone</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {Array.from({
                length: 10,
              }).map((_, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell className="flex items-center gap-3">
                      <Image
                        alt="Foto do logo da barbearia"
                        src="https://i.pinimg.com/736x/ff/39/14/ff3914853f62ef394f7b8821bab37f6b.jpg"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full"
                      />
                      <span>Barbearia do seu zé</span>
                    </TableCell>
                    <TableCell>José da Silva</TableCell>
                    <TableCell>jose@barbeariadoseuze.com</TableCell>
                    <TableCell>(19) 12345-6789</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}
