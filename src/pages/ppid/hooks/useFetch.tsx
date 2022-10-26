import type { APIResponse, FetchController, File } from '#/types'
// import path from 'path-browserify'
import urljoin from 'url-join'
import { useState } from 'react'
import qs from 'qs'

type FetchInput<T> = Partial<T & {
  __loadAll: boolean
}>

export function useFetch<T>(endpoint: string, param?: FetchInput<T>): FetchController<T> {
  const [data, setData] = useState<T[]>([])
  const [isLoading, setLoading] = useState(false)
  // const url = path.join(window.app.BASE_API_URL, ENDPOINT)
  const baseUrl = urljoin(window.app.BASE_API_URL, endpoint) + '?'
  const { __loadAll, ...restParams } = Object.assign({
    __loadAll: false,
    perpage: 10,
    page: 1
  }, param)

  function start() {
    setLoading(true)
    // TODO: Temporary fix... by requesting all pages
    fetch(baseUrl + qs.stringify(param))
      .then(res => res.json())
      .then((initialRes: APIResponse<T>) => {
        if(initialRes.total == null) setData(initialRes.data)
        else {
          if(initialRes.total <= restParams.perpage || __loadAll === false)  setData(initialRes.data)
          else {
            // get remaining pages to be fetched
            const nReq = Math.ceil(initialRes.total / restParams.perpage) - 1

            // request all pages asynchronously then wait till all pages to be loaded
            // before setting the data.
            Promise.all(Array(nReq).fill(0).map((_, i) =>
              fetch(baseUrl + qs.stringify({...param, page: i + 2}))
                .then(res => res.json())
                .then((res: APIResponse<T>) => res.data)
            ))
              .then((res: T[][]) => setData([initialRes.data, ...res].flat()))
          }
        }

        setLoading(false)
      })
  }

  return { start, data, isLoading } 
}

export function fetchFactory<T>(endpoint: string) {
  return function Execute(query?: FetchInput<T>) { 
    // nothing complex for now...
    return useFetch<T>(endpoint,query)
  }
}