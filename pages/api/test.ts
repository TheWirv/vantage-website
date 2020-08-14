// Types and type guards
import type {NextApiRequest, NextApiResponse} from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({name: 'John Doe'});
};
