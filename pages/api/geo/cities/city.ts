import axios from 'axios';
import type {NextApiRequest, NextApiResponse} from 'next';

const appId = process.env.APP_ID;

export default async function handler(req: NextApiRequest, result: NextApiResponse) {
  const params = req.query;
  const {city, country} = params;

  try {
    const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
      params: {
        q: `${city}, ${country}`,
        appId,
      },
    });
    const {data} = response;
    result.status(200).json(data);
  } catch (error: any) {
    result.status(400).json({
      statusCode: error.response.status,
      message: error.response.data.message,
      error: true,
    });
  }
}
