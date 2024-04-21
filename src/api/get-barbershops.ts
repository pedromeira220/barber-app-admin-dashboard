import { Barbershop } from '../interfaces/barbershop'
import { api } from '../lib/axios'

export interface GetBarbershopsResponse {
  barbershops: Barbershop[]
}

export async function getBarbershops() {
  return api.get<GetBarbershopsResponse>('/barbershops')
}
