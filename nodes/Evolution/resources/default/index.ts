import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Get Evo Info",
					"value": "Get Evo Info",
					"action": "Get information about your EvolutionAPI",
					"description": "Get information about your EvolutionAPI",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Evo Info"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "ID of the instance to connect",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Evo Info"
					]
				}
			}
		},
];
