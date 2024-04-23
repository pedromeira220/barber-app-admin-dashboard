import { api } from '../lib/axios'

export interface GetBarbershopsQuery {
  barbershopId: string
}

export async function deleteBarbershop({ barbershopId }: GetBarbershopsQuery) {
  return api.delete(`/barbershops/${barbershopId}`)
}
