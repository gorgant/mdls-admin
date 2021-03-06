import * as functions from 'firebase-functions';
import { submitCacheUpdateRequest } from './submit-cache-update-request';
import { generateHomeUrlObject } from './helpers';
import { assertUID } from '../config/global-helpers';


/////// DEPLOYABLE FUNCTIONS ///////


export const refreshPublicFeaturedPostsCache = functions.https.onCall(async (data: any, context) => {
  functions.logger.log('Received request to refresh public home cache with this data', data);

  assertUID(context);

  const blogUrlObject = generateHomeUrlObject();
  
  return submitCacheUpdateRequest(blogUrlObject);
});