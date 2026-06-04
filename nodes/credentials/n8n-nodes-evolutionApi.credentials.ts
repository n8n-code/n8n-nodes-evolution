import {
  IAuthenticateGeneric,
  ICredentialType,
  INodeProperties,
} from 'n8n-workflow';

export class EvolutionApi implements ICredentialType {
  name = 'n8n-nodes-evolutionApi';
  displayName = 'Evolution API';
  documentationUrl = '';
  properties: INodeProperties[] = [
    {
      displayName: 'Base URL',
      name: 'url',
      type: 'string',
      default: '',
      required: true,
    },
    {
      displayName: 'API Key',
      name: 'apiKey',
      type: 'string',
      typeOptions: { password: true },
      default: '',
      required: true,
    },
  ];
  authenticate: IAuthenticateGeneric = {
    type: 'generic',
    properties: {
      headers: {
        'Authorization': '=Bearer {{$credentials.apiKey}}',
      },
    },
  };
}
