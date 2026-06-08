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
		displayName: 'evolution',
		name: 'N8nDevEvolution',
		icon: { light: 'file:./evolution.png', dark: 'file:./evolution.dark.png' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'n8n community node for Evolution API',
		defaults: { name: 'evolution' },
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
			baseURL: '={{\$credentials.url}}',
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
