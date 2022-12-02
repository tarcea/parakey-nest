import { Injectable } from '@nestjs/common';
import { KeyDto, TimeKeyDto } from './dto';

@Injectable()
export class KeyService {
  token = process.env.PARAKEY_ACCESS_TOKEN;
  domainId = process.env.PARAKEY_DOMAIN_ID;
  url = 'https://api.parakey.co/access-keys';

  // get all keys for a certain domain (domain = flowpass)
  async getKeys() {
    console.log(process.env.TEST);
    const params = {
      headers: {
        method: 'GET',
        'access-token': this.token,
      },
    };
    const response = await fetch(
      `${this.url}?domainId=${this.domainId}`,
      params,
    );
    const result = await response.json();
    return { message: 'get keys', result };
  }

  // create key for an user(email) for a certain door(accessId) in a certain time framework(startDate, expirationDate)
  async addKey(dto: TimeKeyDto) {
    const { email, accessId, startDate, expirationDate } = dto;
    console.log(dto);
    const bodyData = {
      insert: [
        {
          access: {
            id: accessId,
          },
          user: {
            email,
          },
          startDate,
          expirationDate,
        },
      ],
    };

    const params = {
      method: 'POST',
      headers: {
        'access-token': this.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    };

    const response = await fetch(`${this.url}`, params);
    const result = await response.json();

    return { message: 'added time restricted key', result };
  }

  // delete a key asigned to an user(email) for a certain door(accessId)
  async deleteKey(dto: KeyDto) {
    const { email, accessId } = dto;

    const bodyData = {
      delete: [
        {
          access: {
            accessId,
          },
          user: {
            email,
          },
        },
      ],
    };

    const params = {
      method: 'POST',
      headers: {
        'access-token': this.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    };

    const response = await fetch(`${this.url}`, params);
    const result = await response.json();

    return { message: 'delete key', result };
  }
}
