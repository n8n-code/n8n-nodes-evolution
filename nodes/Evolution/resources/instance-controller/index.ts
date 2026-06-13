import type { INodeProperties } from 'n8n-workflow';

export const instanceControllerDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					]
				}
			},
			"options": [
				{
					"name": "Create Instance",
					"value": "Create Instance",
					"action": "Create Instance",
					"description": "Create Instance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/instance/create"
						}
					}
				},
				{
					"name": "Fetch Instances",
					"value": "Fetch Instances",
					"action": "Fetch Instances",
					"description": "Returns the instance with the name informed in the parameter, or all the instances if empty.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instance/fetchInstances"
						}
					}
				},
				{
					"name": "Instance Connect",
					"value": "Instance Connect",
					"action": "Instances Connect",
					"description": "Generates and returns the QR code for WhatsApp connection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instance/connect/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Restart Instance",
					"value": "Restart Instance",
					"action": "Restart Instance",
					"description": "Restarts the instance",
					"routing": {
						"request": {
							"method": "PUT",
							"url": "=/instance/restart/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Connection State",
					"value": "Connection State",
					"action": "Connection State",
					"description": "Gets the state of the connection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/instance/connectionState/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Logout Instance",
					"value": "Logout Instance",
					"action": "Logout Instance",
					"description": "Makes logout on instance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/instance/logout/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Delete Instance",
					"value": "Delete Instance",
					"action": "Delete Instance",
					"description": "Delete instance",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/instance/delete/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Set Presence",
					"value": "Set Presence",
					"action": "Set Presence",
					"description": "Deletes instance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/instance/setPresence/{{$parameter[\"instance\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /instance/create",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Instance Name",
			"name": "instanceName",
			"type": "string",
			"default": "",
			"description": "instance (Instance name)",
			"routing": {
				"send": {
					"property": "instanceName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Token",
			"name": "token",
			"type": "string",
			"default": "",
			"description": "apikey (Enter or leave empty to create dynamically)",
			"routing": {
				"send": {
					"property": "token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Qrcode",
			"name": "qrcode",
			"type": "boolean",
			"default": true,
			"description": "Create QR Code automatically after creation",
			"routing": {
				"send": {
					"property": "qrcode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"type": "string",
			"default": "",
			"description": "559999999999 (Instance owner number with Country Code)",
			"routing": {
				"send": {
					"property": "number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Integration",
			"name": "integration",
			"type": "options",
			"default": "WHATSAPP-BAILEYS",
			"description": "WhatsApp engine",
			"options": [
				{
					"name": "WHATSAPP BAILEYS",
					"value": "WHATSAPP-BAILEYS"
				},
				{
					"name": "WHATSAPP BUSINESS",
					"value": "WHATSAPP-BUSINESS"
				}
			],
			"routing": {
				"send": {
					"property": "integration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Reject Call",
			"name": "rejectCall",
			"type": "boolean",
			"default": true,
			"description": "Reject WhatsApp calls automatically",
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
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
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
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
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
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Always Online",
			"name": "alwaysOnline",
			"type": "boolean",
			"default": true,
			"description": "Keep WhatsApp always online",
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
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Read Messages",
			"name": "readMessages",
			"type": "boolean",
			"default": true,
			"description": "Send read receipts to received messages",
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
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Read Status",
			"name": "readStatus",
			"type": "boolean",
			"default": true,
			"description": "Show sent messages read status",
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
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
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
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Proxy Host",
			"name": "proxyHost",
			"type": "string",
			"default": "",
			"description": "proxy host",
			"routing": {
				"send": {
					"property": "proxyHost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Proxy Port",
			"name": "proxyPort",
			"type": "string",
			"default": "",
			"description": "proxy port",
			"routing": {
				"send": {
					"property": "proxyPort",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Proxy Protocol",
			"name": "proxyProtocol",
			"type": "string",
			"default": "",
			"description": "proxy protocol",
			"routing": {
				"send": {
					"property": "proxyProtocol",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Proxy Username",
			"name": "proxyUsername",
			"type": "string",
			"default": "",
			"description": "proxy Username",
			"routing": {
				"send": {
					"property": "proxyUsername",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Proxy Password",
			"name": "proxyPassword",
			"type": "string",
			"default": "",
			"description": "proxy password",
			"routing": {
				"send": {
					"property": "proxyPassword",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Webhook",
			"name": "webhook",
			"type": "json",
			"default": "{\n  \"headers\": {},\n  \"events\": [\n    null\n  ]\n}",
			"description": "Webhook URL",
			"routing": {
				"send": {
					"property": "webhook",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Rabbitmq",
			"name": "rabbitmq",
			"type": "json",
			"default": "{\n  \"events\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "rabbitmq",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Sqs",
			"name": "sqs",
			"type": "json",
			"default": "{\n  \"events\": [\n    null\n  ]\n}",
			"description": "Enable SQS",
			"routing": {
				"send": {
					"property": "sqs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Account ID",
			"name": "chatwootAccountId",
			"type": "number",
			"default": 0,
			"description": "Chatwoot account ID",
			"routing": {
				"send": {
					"property": "chatwootAccountId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Token",
			"name": "chatwootToken",
			"type": "string",
			"default": "",
			"description": "Chatwoot authentication token",
			"routing": {
				"send": {
					"property": "chatwootToken",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot URL",
			"name": "chatwootUrl",
			"type": "string",
			"default": "",
			"description": "Chatwoot server URL",
			"routing": {
				"send": {
					"property": "chatwootUrl",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Sign Msg",
			"name": "chatwootSignMsg",
			"type": "boolean",
			"default": true,
			"description": "Send message signature on Chatwoot",
			"routing": {
				"send": {
					"property": "chatwootSignMsg",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Reopen Conversation",
			"name": "chatwootReopenConversation",
			"type": "boolean",
			"default": true,
			"description": "Reopen conversation on Chatwoot",
			"routing": {
				"send": {
					"property": "chatwootReopenConversation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Conversation Pending",
			"name": "chatwootConversationPending",
			"type": "boolean",
			"default": true,
			"description": "TODO",
			"routing": {
				"send": {
					"property": "chatwootConversationPending",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Import Contacts",
			"name": "chatwootImportContacts",
			"type": "boolean",
			"default": true,
			"description": "Import Chatwoot contacts",
			"routing": {
				"send": {
					"property": "chatwootImportContacts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Name Inbox",
			"name": "chatwootNameInbox",
			"type": "string",
			"default": "",
			"description": "Name inbox chatwoot",
			"routing": {
				"send": {
					"property": "chatwootNameInbox",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Merge Brazil Contacts",
			"name": "chatwootMergeBrazilContacts",
			"type": "boolean",
			"default": true,
			"description": "TODO",
			"routing": {
				"send": {
					"property": "chatwootMergeBrazilContacts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Import Messages",
			"name": "chatwootImportMessages",
			"type": "boolean",
			"default": true,
			"description": "Import chatwoot messages",
			"routing": {
				"send": {
					"property": "chatwootImportMessages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Days Limit Import Messages",
			"name": "chatwootDaysLimitImportMessages",
			"type": "number",
			"default": 0,
			"description": "Limit message import chatwoot",
			"routing": {
				"send": {
					"property": "chatwootDaysLimitImportMessages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Organization",
			"name": "chatwootOrganization",
			"type": "string",
			"default": "",
			"description": "Evolution Bot",
			"routing": {
				"send": {
					"property": "chatwootOrganization",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "Chatwoot Logo",
			"name": "chatwootLogo",
			"type": "string",
			"default": "",
			"description": "https://evolution-api.com/files/evolution-api-favicon.png",
			"routing": {
				"send": {
					"property": "chatwootLogo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
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
						"Instance Controller"
					],
					"operation": [
						"Create Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /instance/fetchInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Fetch Instances"
					]
				}
			}
		},
		{
			"displayName": "Instance Name",
			"name": "instanceName",
			"description": "Name of the instance to be fetched",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "instanceName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Fetch Instances"
					]
				}
			}
		},
		{
			"displayName": "Instance ID",
			"name": "instanceId",
			"description": "ID of the instance to be fetched",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "instanceId",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Fetch Instances"
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
						"Instance Controller"
					],
					"operation": [
						"Fetch Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /instance/connect/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Instance Connect"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name of the instance to connect",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Instance Connect"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "number",
			"description": "Phone number (with country code) to be connected",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Instance Connect"
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
						"Instance Controller"
					],
					"operation": [
						"Instance Connect"
					]
				}
			}
		},
		{
			"displayName": "PUT /instance/restart/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Restart Instance"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name of the instance to restart",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Restart Instance"
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
						"Instance Controller"
					],
					"operation": [
						"Restart Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /instance/connectionState/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Connection State"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name of the instance to get status connect",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Connection State"
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
						"Instance Controller"
					],
					"operation": [
						"Connection State"
					]
				}
			}
		},
		{
			"displayName": "DELETE /instance/logout/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Logout Instance"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name of the instance to logout",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Logout Instance"
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
						"Instance Controller"
					],
					"operation": [
						"Logout Instance"
					]
				}
			}
		},
		{
			"displayName": "DELETE /instance/delete/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Delete Instance"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name of the instance to delete",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Delete Instance"
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
						"Instance Controller"
					],
					"operation": [
						"Delete Instance"
					]
				}
			}
		},
		{
			"displayName": "POST /instance/setPresence/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Set Presence"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name of the instance to connect",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Set Presence"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Presence",
			"name": "presence",
			"type": "options",
			"default": "available",
			"options": [
				{
					"name": "Available",
					"value": "available"
				},
				{
					"name": "Unavailable",
					"value": "unavailable"
				}
			],
			"routing": {
				"send": {
					"property": "presence",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Instance Controller"
					],
					"operation": [
						"Set Presence"
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
						"Instance Controller"
					],
					"operation": [
						"Set Presence"
					]
				}
			}
		},
];
