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
        {},
        {
          headers: {
            Authorization: `Bearer sk_live_9chIoAfCklgfjS2-W5QktuKQr94X7JdZazQvYT-40o8`,
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
