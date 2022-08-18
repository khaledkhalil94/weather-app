import axios from 'axios';
import type {NextApiRequest, NextApiResponse} from 'next';
import {ApiError} from '../../../../core/definitions/types';

const appId = process.env.APP_ID;

interface Response {
  error: boolean;
  msg: string;
  data: string[];
}

export default async function handler(
  req: NextApiRequest,
  result: NextApiResponse<Response | ApiError>,
) {
  const {country} = req.query;

  try {
    const response = await axios.post(`https://countriesnow.space/api/v0.1/countries/cities`, {
      country,
      appId,
    });
    const {data} = response;
    result.status(200).json(data);
  } catch (error: any) {
    result.status(400).json({
      statusCode: error.response.status,
      message: error.response.data.msg,
      error: error.response.data.error,
    });
  }
}
