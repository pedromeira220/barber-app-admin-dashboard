import { api } from '../lib/axios'

export interface UpdateBarbershopQuery {
  id: string
  name?: string
  contactName?: string
  email?: string
  contactPhone?: string
}

export async function updateBarbershop({
  contactName,
  contactPhone,
  email,
  name,
  id,
}: UpdateBarbershopQuery) {
  return api.put(`/barbershops/${id}`, {
    contactName,
    contactPhone,
    email,
    name,
  })
}
