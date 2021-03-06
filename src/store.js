import create from 'zustand';
import Adapter from './service/Adapter';

const ApiAdapter = new Adapter();

const useStore = create((set, get) => ({
  /** date stats */
  dateState: null,
  getDateState: async () => {
    const response = await ApiAdapter.getDateStats(get().currentLocation);
    set({ dateState: response.data });
  },

  /** location state */
  currentLocation: 1,
  setLocation: async (newLocation) => {
    set({ currentLocation: newLocation });
    await get().getDateState();
    await get().getActualData();
  },

  /** actual data */
  actual: null,
  getActualData: async () => {
    const response = await ApiAdapter.getDashboardData(get().currentLocation);
    set({ actual: response.data });
  },

  /** location data */
  locations: [],
  getLocationData: async () => {
    const response = await ApiAdapter.getLocationData();
    set({ locations: response.data });
  },
}));

export default useStore;
