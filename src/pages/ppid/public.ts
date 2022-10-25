import path from 'path-browserify'

export default function publicPath(filePath: string) {
  const { BASE_PATH } = window.app
  return path.join(BASE_PATH, filePath)
}