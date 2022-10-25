export interface AppEnvironment {
  BASE_API_URL: string
  API_FILE_ENDPOINT: string
  API_CATEGORY_ENDPOINT: string
  BASE_PATH: string

  APP_INFO: Partial<AppInfo>
  NOT_FOUND_REDIRECT: string
  // READ_APP_INFO: Partial<AppInfo>
  // path: any
}

export interface AppInfo {
  deskel: string
  kecamatan: string
  kabkota: string
  province: string
  zipcode: string
  logo: string
  phone: string
  email: string
  address: string
  home_url: string
}

export interface APIResponse<T> {
  success: boolean
  total?: number
  page?: number
  data: T[]
}

export interface FetchController<T> {
  start: () => void
  isLoading: boolean
  data: T[]
}

export interface QueryParam {
  page: number
  perpage: number
}

export interface Category extends QueryParam {
  id: string
  parent_id: string | null
  name: string
  description: string
  iat: string
  uat: string
}

export interface File extends QueryParam {
  id: string,
  category_id: string,
  name: string,
  description: string,
  iat: string,
  uat: string,
  category: string,
  url: string
}