import * as functions from 'firebase-functions';
import { submitCacheUpdateRequest } from './submit-cache-update-request';
import { generateBlogUrlObject } from './helpers';
import { assertUID } from '../config/global-helpers';


/////// DEPLOYABLE FUNCTIONS ///////


export const refreshPublicBlogCache = functions.https.onCall(async (data: any, context) => {
  functions.logger.log('Received request to refresh public blog cache with this data', data);

  assertUID(context);

  const blogUrlObject = generateBlogUrlObject();
  
  return submitCacheUpdateRequest(blogUrlObject);
});