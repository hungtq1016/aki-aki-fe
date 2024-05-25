import axios from 'axios'

import { i18n } from '@/core/services/base/translation'

import { useAuthInfo } from './indexedDB.helper'

import { stringify } from '@/core/services/utils/util.string'
import { urlBuilder } from '@/core/services/utils/util.url'

import type { AxiosRequestConfig } from 'axios'
import type { Response, TTokenResponse } from '@/core/models/type'
async function refreshToken() {
  const { readAuthAsync, updateAuthAsync } = useAuthInfo();

  try {
    const token = await readAuthAsync()
    const response = await post<any,TTokenResponse>('/api/authenticate/refresh-token', token);
    if (response?.data) {
      await updateAuthAsync(response.data); 

    }
    return response?.data;
  } catch (error) {
    console.error('Error refreshing token:', error);
    throw error;
  }
}
// Define a helper function for making API requests
async function makeRequest<TRequest, TResponse>(
  method: string,
  path: string,
  data?: TRequest,
  header: Record<string, string> = { 'Content-Type': 'application/json' },
  queryParams?: any
): Promise<Response<TResponse> | undefined> {
  const url: string = urlBuilder(path, queryParams);
  const { readAuthAsync } = useAuthInfo();
  const token: TTokenResponse | undefined = await readAuthAsync();

  const headers: Record<string, string> = {
    Accept: 'application/json',
    ...header,
  };

  if (token?.accessToken) {
    headers['Authorization'] = 'Bearer ' + token.accessToken;
  }

  const options: AxiosRequestConfig = {
    url: url,
    method,
    headers: headers, // Initialize headers here to avoid undefined error
  };

  // Add request body if data is provided
  if (data) {
    options.data = stringify(data);
  }

  // Make the API request
  try {
    const response = await axios<Response<TResponse>>(options);
    return response.data;
  } catch (err: any) {
    if (err.response.status == 401) {
      try {
        const newToken = await refreshToken();
        if (newToken) {
          headers['Authorization'] = 'Bearer ' + newToken.accessToken;
          headers['x-retry'] = 'true'; // Prevent infinite retry loop
          options.headers = header
          const retryResponse = await axios<Response<TResponse>>(options);
          return retryResponse.data;
        }
      } catch (refreshError) {
        console.error('Token refresh failed:', refreshError);

        throw refreshError;
      }
    } else {
      console.log(i18n.global.t('error.server_error.message'), err);
      // errorHandling(err.response.data.message, err.response.status);
      throw err;
    }
  }
}

// Define your REST API request methods
export async function get<TResponse>(
  path: string,
  queryParams?: any,
  header?: Record<string, string>
) {
  return makeRequest<any, TResponse>('GET', path, undefined, header, queryParams)
}

export async function post<TRequest, TResponse>(
  path: string,
  data?: any,
  header?: Record<string, string>
) {
  return makeRequest<TRequest, TResponse>('POST', path, data, header)
}

export async function put<TRequest, TResponse>(
  path: string,
  data?: any,
  header?: Record<string, string>
) {
  return makeRequest<TRequest, TResponse>('PUT', path, data, header)
}

export async function del<TRequest, TResponse>(
  path: string,
  data?: any,
  header?: Record<string, string>
) {
  return makeRequest<TRequest, TResponse>('DELETE', path, data, header)
}

export async function upload<TResponse>(path: string, formData: FormData) {
  try {
    const url: string = urlBuilder(path)

    return await axios<Response<TResponse>>(url, {
      method: 'POST',
      data: formData
    })
  } catch (err: any) {
    console.log(i18n.global.t('error.server_error.message'), err)
  }
}
