import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class EvolutionApi implements ICredentialType {
        name = 'N8nDevEvolutionApi';

        displayName = 'Evolution API';

        icon: Icon = { light: 'file:../nodes/Evolution/evolution.png', dark: 'file:../nodes/Evolution/evolution.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://evolution-example',
                        description: 'The base URL of your Evolution API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'apikey': '={{$credentials.apiKey}}',
                        },
                },
        };


}
