import { TOKEN_TYPE } from '../../../enum'

export default {
  tokenType: [
    'required',
    { 'in': [...TOKEN_TYPE.values] },
  ],
  accessToken: 'required|string',
}
