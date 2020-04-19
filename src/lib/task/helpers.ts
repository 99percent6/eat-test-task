import { AxiosResponse } from 'axios'
import { Task } from './types'

function isSuccessStatus(status: number): boolean {
  return status >= 200 && status < 300
}

function processUrl(url: string): string {
  if (url.startsWith('/')) {
    return url.slice(1)
  }
  return url
}

function processResponse(response: AxiosResponse<any>): Task {
  const { status } = response
  const result = isSuccessStatus(status) ? response.data : null
  const error = isSuccessStatus(status) ? null : response.data
  return {
    code: status,
    result: [error, result],
  }
}

export {
  processUrl,
  processResponse,
  isSuccessStatus,
}
