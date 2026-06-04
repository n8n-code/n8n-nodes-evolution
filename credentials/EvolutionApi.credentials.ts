import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class EvolutionApi implements ICredentialType {
	name = 'n8n-nodes-evolutionApi';

	displayName = 'Evolution API';

	icon: Icon = { light: 'file:../nodes/Evolution/evolution.svg', dark: 'file:../nodes/Evolution/evolution.dark.svg' };

	documentationUrl = '';

	properties: INodeProperties[] = [
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
				'apikey': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://evolution-example',
			url: '/',
			method: 'GET',
		},
	};
}
