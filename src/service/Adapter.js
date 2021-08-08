import axios from 'axios';
import dayjs from 'dayjs';

class Adapter {
  constructor() {
    this.client = axios.create({
      baseURL: 'http://server.sipanca.pocari.id/api',
    });
  }

  getDateStats(location_id) {
    let params = {};

    if (location_id) {
      params.lokasi_id = location_id;
    }

    return this.client.get('/stats', { params });
  }

  getDashboardData(location_id = 1) {
    return this.client.get('/dashboard', { params: { lokasi_id: location_id } });
  }

  getLocationData() {
    return this.client.get('/location');
  }

  getHistory(location_id, date) {
    return this.client.get('/history', {
      params: {
        lokasi_id: location_id,
        date: dayjs(date).format('YYYY-MM-DD'),
      },
    });
  }
}

export default Adapter;
