import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [{ duration: '2m', target: 200 }],
  thresholds: { http_req_duration: ['p(95)<200'] }
};

export default function () {
  const res = http.get(`${__ENV.BASE_URL}/v1/rsvp`);
  check(res, { 'status is 200': r => r.status === 200 });
  sleep(0.3);
}

