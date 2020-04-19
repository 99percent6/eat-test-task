import axios, { Method } from 'axios'
import { Task } from './types'
import config from '../../config'
import { processUrl, processResponse } from './helpers'
import logger from '../logger'

const API_URL = config.api.url

export default async function ({ url, method = 'GET', body }: { url: string; method?: Method; body?: any }): Promise<Task> {
  const targetUrl = `${API_URL}/${processUrl(url)}`

  try {
    const response = await axios({
      method,
      url: targetUrl,
      data: method !== 'GET' && body ? body : null,
    })

    return processResponse(response)
  } catch (error) {
    logger.error(error)
    return {
      code: 500,
      result: [error, null],
    }
  }
}
