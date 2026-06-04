import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { instanceControllerDescription } from './resources/instance-controller';
import { webhookControllerDescription } from './resources/webhook-controller';
import { settingsControllerDescription } from './resources/settings-controller';
import { messageControllerDescription } from './resources/message-controller';
import { chatControllerDescription } from './resources/chat-controller';
import { groupDescription } from './resources/group';
import { defaultDescription } from './resources/default';

export class Evolution implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Evolution',
		name: 'N8nDevEvolution',
		icon: { light: 'file:./evolution.svg', dark: 'file:./evolution.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'n8n community node for Evolution API - WhatsApp Business API',
		defaults: { name: 'Evolution' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevEvolutionApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://evolution-example',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Instance Controller",
					"value": "Instance Controller",
					"description": ""
				},
				{
					"name": "Webhook Controller",
					"value": "Webhook Controller",
					"description": ""
				},
				{
					"name": "Settings Controller",
					"value": "Settings Controller",
					"description": ""
				},
				{
					"name": "Message Controller",
					"value": "Message Controller",
					"description": ""
				},
				{
					"name": "Chat Controller",
					"value": "Chat Controller",
					"description": ""
				},
				{
					"name": "Group",
					"value": "Group",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...instanceControllerDescription,
		...webhookControllerDescription,
		...settingsControllerDescription,
		...messageControllerDescription,
		...chatControllerDescription,
		...groupDescription,
		...defaultDescription
		],
	};
}
