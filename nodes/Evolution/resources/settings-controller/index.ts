import type { INodeProperties } from 'n8n-workflow';

export const settingsControllerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Controller"
					]
				}
			},
			"options": [
				{
					"name": "Set Settings",
					"value": "Set Settings",
					"action": "Set Settings",
					"description": "Set settings",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/settings/set/{{$parameter[\"instance\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /settings/set/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Controller"
					],
					"operation": [
						"Set Settings"
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
						"Settings Controller"
					],
					"operation": [
						"Set Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Reject Call",
			"name": "rejectCall",
			"type": "boolean",
			"default": true,
			"description": "Reject calls automatically",
			"routing": {
				"send": {
					"property": "rejectCall",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Controller"
					],
					"operation": [
						"Set Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Msg Call",
			"name": "msgCall",
			"type": "string",
			"default": "",
			"description": "Message to be sent when a call is rejected automatically",
			"routing": {
				"send": {
					"property": "msgCall",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Controller"
					],
					"operation": [
						"Set Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Groups Ignore",
			"name": "groupsIgnore",
			"type": "boolean",
			"default": true,
			"description": "Ignore group messages",
			"routing": {
				"send": {
					"property": "groupsIgnore",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Controller"
					],
					"operation": [
						"Set Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Always Online",
			"name": "alwaysOnline",
			"type": "boolean",
			"default": true,
			"description": "Always show WhatsApp online",
			"routing": {
				"send": {
					"property": "alwaysOnline",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Controller"
					],
					"operation": [
						"Set Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Read Messages",
			"name": "readMessages",
			"type": "boolean",
			"default": true,
			"description": "Send read receipts",
			"routing": {
				"send": {
					"property": "readMessages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Controller"
					],
					"operation": [
						"Set Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Read Status",
			"name": "readStatus",
			"type": "boolean",
			"default": true,
			"description": "See message status",
			"routing": {
				"send": {
					"property": "readStatus",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Controller"
					],
					"operation": [
						"Set Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sync Full History",
			"name": "syncFullHistory",
			"type": "boolean",
			"default": true,
			"description": "Syncronize full WhatsApp history with EvolutionAPI",
			"routing": {
				"send": {
					"property": "syncFullHistory",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Settings Controller"
					],
					"operation": [
						"Set Settings"
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
						"Settings Controller"
					],
					"operation": [
						"Set Settings"
					]
				}
			}
		},
];
