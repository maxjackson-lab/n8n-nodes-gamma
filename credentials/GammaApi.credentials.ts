import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class GammaApi implements ICredentialType {
	name = 'gammaApi';
	displayName = 'Gamma API';
	documentationUrl = 'https://developers.gamma.app';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'Your Gamma API key (starts with sk-gamma-)',
			placeholder: 'sk-gamma-xxxxx',
		},
	];
	
	// Gamma uses X-API-KEY header for authentication
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'X-API-KEY': '={{$credentials.apiKey}}',
			},
		},
	};
	
	// Test credentials by calling the /v1.0/me endpoint
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://public-api.gamma.app',
			url: '/v1.0/me',
			method: 'GET',
		},
	};
}
