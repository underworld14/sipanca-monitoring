import axios from 'axios';
import dayjs from 'dayjs';

class Adapter {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://server.sipanca.pocari.id/api',
    });
  }

  getInstance() {
    return this.client;
  }

  getDateStats() {
    return this.client.get('/stats');
  }

  getDashboardData(location_id = 1) {
    return this.client.get('/dashboard', { params: { location_id } });
  }

  getLocationData() {
    return this.client.get('/location');
  }

  getHistory(location_id, date) {
    return this.client.get('/history', {
      params: {
        location_id: location_id,
        date: dayjs(date).format('YYYY-MM-DD'),
      },
    });
  }
}

export default Adapter;
