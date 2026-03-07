import { http, HttpResponse } from 'msw';
import { inventory } from '../data/inventory';

export const stockHandlers = [
  http.get('/stobe/api/inventory', ({ request }) => {
    const url = new URL(request.url)

    const page = Number(url.searchParams.get('page') ?? 0)
    const pageSize = Number(url.searchParams.get('pageSize') ?? 5)
    const search = url.searchParams.get('search')?.toLowerCase() ?? ''
    const branchId = Number(url.searchParams.get('branchId'))

    const filtered = inventory.filter(item =>
      item.branchId === branchId &&
      item.name.toLowerCase().includes(search)
    )

    const totalElements = filtered.length
    const totalPages = Math.ceil(totalElements / pageSize)

    const start = (page - 1) * pageSize
    const end = start + pageSize

    const paginated = filtered.slice(start, end)

    return HttpResponse.json({
      content: paginated,
      page,
      pageSize,
      totalElements,
      totalPages,
    })
  }),
]