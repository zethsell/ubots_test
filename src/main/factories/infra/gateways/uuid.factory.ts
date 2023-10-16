import { UUIDHandler } from '@/infra/gateways'

export const uuidFactory = (): UUIDHandler => new UUIDHandler()
