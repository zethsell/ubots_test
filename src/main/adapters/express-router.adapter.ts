import { Controller } from '@/application/controllers'
import { RequestHandler } from 'express'

type Adapter = (controller: Controller) => RequestHandler

export const adaptExpressRoute: Adapter = (controller) => async (req, res) => {
  const { statusCode, data } = await controller.handle({ ...req.body, ...req.params, ...req.locals, ...req.query })
  if ([200, 201].includes(statusCode)) {
    return res.status(statusCode).json(data)
  }
  res.status(statusCode).json(data)
}
