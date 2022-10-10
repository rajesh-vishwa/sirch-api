import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import axios, { AxiosResponse } from 'axios';
import { HBResponse } from './types/hb-response.type';

const apiClient = axios.create({
  baseURL: 'https://engine.hyperbeam.com',
});

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async computer(): Promise<HBResponse> {
    try {
      const resp = await apiClient.post<HBResponse>(
        '/v0/vm',
        { kiosk: true, hide_cursor: true, ublock: true },
        {
          headers: {
            Authorization: `Bearer ${process.env.HB_TOKEN}`,
          },
        },
      );
      console.log(resp.data);
      return resp.data;
    } catch (error) {
      console.log('Error: => ', error.response);
      throw error;
    }
  }
}
