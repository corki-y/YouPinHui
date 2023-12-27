import { useNavigate, useLocation, useParams } from 'react-router-dom'

/**
 *
 * @description 对 react-router-dom 中的 hooks 进行封装
 */
const useRouterHooks = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const params = useParams()

  const { pathname, state, hash, search } = location
  // 将 search 转 Map 然后再转对象
  const searchObj = Object.fromEntries(
    new URLSearchParams(search)
  )

  return {
    // 返回，back(-1)
    back: (step: number) => navigate(step),
    push: (path: string, state?: any) => navigate(path, { state }),
    replace: (path: string, state?: any) => navigate(path, { replace: true, state }),
    pathname,
    state,
    hash,
    // 路由 query 值获取，/home?id=1 => search = { id: 1 }
    search: searchObj,
    // 自定义路由参数获取，/home/:id => params = { id: xxx }
    params
  }
}

export default useRouterHooks
