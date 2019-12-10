import axios from 'axios';

const url = 'api/keys';

class KeyService {
  // Get Keys
  static async getKeys() {
    const response = await axios.get(url);
    return response.data;
  }
  
}

export default KeyService;
