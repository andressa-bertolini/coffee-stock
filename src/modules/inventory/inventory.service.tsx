import type { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/services/api';
import type { Item } from './inventory.types';

const API_URL = '/inventory';

const apiRequest = async (
  api: AxiosInstance,
  url: string,
  method: 'get' | 'post' | 'put' | 'delete',
  data?: any,
) => {
  try {
    const response = await api({ method, url, data });
    return response.data;
  } catch (error) {
    console.error(`Erro ao realizar a requisição: ${error}`);
    throw error;
  }
};

export const fetchInventory = createAsyncThunk<
    {inventory: Item[]; totalPages: number; totalItems: number},
    {page?: number, pageSize?: number; branchId: number; search?: string}
>('inventory', async(params) => {
    const { page = 1, pageSize, branchId, ...filters } = params;
    const query = new URLSearchParams({ page: String(page), pageSize: String(pageSize), branchId: String(branchId), ...filters });
    const data = await apiRequest(api, `${API_URL}?${query.toString()}`, 'get');

    return { inventory: data.content, totalPages: data.totalPages, totalItems: data.totalItems };
});