import type { Category, File } from '../types.ts'
import { useFetch,fetchFactory } from './useFetch.tsx'

export const useFiles = fetchFactory<File>(window.app.API_FILE_ENDPOINT)
export const useCategories = fetchFactory<Category>(window.app.API_CATEGORY_ENDPOINT)

