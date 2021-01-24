import axios from 'axios';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export class HttpService {
	/**
	 * HTTP GET method, used to fetch data `statusCode`: 200.
	 *
	 * @access public
	 * @template T - `TYPE`: expected object.
	 * @template R - `RESPONSE`: expected object inside a axios response format.
	 * @param {string} path - endpoint you want to reach.
	 * @returns {Promise<R>} HTTP `axios` response payload.
	 * @memberof HttpService
	 */
	public get<T, R = AxiosResponse<T>>(
		path: string,
		config?: AxiosRequestConfig
	): Promise<R> {
		return axios.get(path, config);
	}

	/**
	 * HTTP DELETE method, `statusCode`: 204 No Content.
	 *
	 * @access public
	 * @template T - `TYPE`: expected object.
	 * @template R - `RESPONSE`: expected object inside a axios response format.
	 * @param {string} path - endpoint you want to reach.
	 * @returns {Promise<R>} - HTTP [axios] response payload.
	 * @memberof HttpService
	 */
	public delete<T, R = AxiosResponse<T>>(path: string): Promise<R> {
		return axios.delete(path);
	}

	/**
	 * HTTP POST method `statusCode`: 201 Created.
	 *
	 * @access public
	 * @template T - `TYPE`: expected object.
	 * @template B - `BODY`: body request object.
	 * @template R - `RESPONSE`: expected object inside a axios response format.
	 * @param {string} path - endpoint you want to reach.
	 * @param {B} data - payload to be send as the `request body`,
	 * @returns {Promise<R>} - HTTP [axios] response payload.
	 * @memberof HttpService
	 */
	public post<T, B, R = AxiosResponse<T>>(
		path: string,
		data?: B,
		config?: AxiosRequestConfig
	): Promise<R> {
		return axios.post(path, data, config);
	}

	/**
	 * HTTP PUT method.
	 *
	 * @access public
	 * @template T - `TYPE`: expected object.
	 * @template B - `BODY`: body request object.
	 * @template R - `RESPONSE`: expected object inside a axios response format.
	 * @param {string} path - endpoint you want to reach.
	 * @param {B} data - payload to be send as the `request body`,
	 * @returns {Promise<R>} - HTTP [axios] response payload.
	 * @memberof Api
	 */
	public put<T, B, R = AxiosResponse<T>>(path: string, data?: B): Promise<R> {
		return axios.put(path, data);
	}
}
