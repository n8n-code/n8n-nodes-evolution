import type { INodeProperties } from 'n8n-workflow';

export const webhookControllerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					]
				}
			},
			"options": [
				{
					"name": "Set Webhook",
					"value": "Set Webhook",
					"action": "Set Webhook",
					"description": "Set Webhook for instance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/webhook/set/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Find Webhook",
					"value": "Find Webhook",
					"action": "Find Webhook",
					"description": "Fetch Webhook configuration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/webhook/find/{{$parameter[\"instance\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /webhook/set/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Set Webhook"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name of the instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Set Webhook"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Enabled",
			"name": "enabled",
			"type": "boolean",
			"default": true,
			"description": "enable webhook to instance",
			"routing": {
				"send": {
					"property": "enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Set Webhook"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "URL",
			"name": "url",
			"type": "string",
			"default": "",
			"description": "Webhook URL",
			"routing": {
				"send": {
					"property": "url",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Set Webhook"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Webhook By Events",
			"name": "webhookByEvents",
			"type": "boolean",
			"default": true,
			"description": "Enables Webhook by events",
			"routing": {
				"send": {
					"property": "webhookByEvents",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Set Webhook"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Webhook Base 64",
			"name": "webhookBase64",
			"type": "boolean",
			"default": true,
			"description": "Sends files in base64 when available",
			"routing": {
				"send": {
					"property": "webhookBase64",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Set Webhook"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Events",
			"name": "events",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Events to be sent to the Webhook",
			"routing": {
				"send": {
					"property": "events",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Set Webhook"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "Your authorization key header",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apikey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Set Webhook"
					]
				}
			}
		},
		{
			"displayName": "GET /webhook/find/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Find Webhook"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name of the instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Find Webhook"
					]
				}
			}
		},
		{
			"displayName": "Apikey",
			"name": "security_apikeyauth",
			"type": "string",
			"default": "",
			"description": "Your authorization key header",
			"required": false,
			"routing": {
				"request": {
					"headers": {
						"apikey": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Webhook Controller"
					],
					"operation": [
						"Find Webhook"
					]
				}
			}
		},
];
