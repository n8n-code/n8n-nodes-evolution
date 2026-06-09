import type { INodeProperties } from 'n8n-workflow';

export const chatControllerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					]
				}
			},
			"options": [
				{
					"name": "Whatsapp Numbers",
					"value": "Whatsapp Numbers",
					"action": "WhatsApp Numbers",
					"description": "Check if numbers are on WhatsApp",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/whatsappNumbers/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Mark Message As Read",
					"value": "Mark Message As Read",
					"action": "Mark Message As Read",
					"description": "Mark message as read",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/markMessageAsRead/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Archive Chat",
					"value": "Archive Chat",
					"action": "Archive Chat",
					"description": "Archive Chat",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/archiveChat/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Delete Message For Everyone",
					"value": "Delete Message For Everyone",
					"action": "Delete Message For Everyone",
					"description": "Delete Message For Everyone",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chat/deleteMessageForEveryone/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Send Presence",
					"value": "Send Presence",
					"action": "Send Presence",
					"description": "Send Presence (typing...)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/sendPresence/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Fetch Profile Picture URL",
					"value": "Fetch Profile Picture URL",
					"action": "Fetch Profile Picture URL",
					"description": "Fetch Profile Picture URL",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/fetchProfilePictureUrl/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Find Contacts",
					"value": "Find Contacts",
					"action": "Find Contacts",
					"description": "Here it is possible to list all contacts or just one,using the 'where' option.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/findContacts/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Get Base 64 From Media Message",
					"value": "Get Base 64 From Media Message",
					"action": "Get Base64 From Media Message",
					"description": "Get base64 from media message",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/getBase64FromMediaMessage/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Find Messages",
					"value": "Find Messages",
					"action": "Find Messages",
					"description": "Find all messages",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/findMessages/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Find Status Message",
					"value": "Find Status Message",
					"action": "Find Status Message",
					"description": "Find status message",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/findStatusMessage/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Update Message",
					"value": "Update Message",
					"action": "Update Message",
					"description": "Update message",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/updateMessage/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Find Chats",
					"value": "Find Chats",
					"action": "Find Chats",
					"description": "Find all chats",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/findChats/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Fetch Business Profile",
					"value": "Fetch Business Profile",
					"action": "Fetch Business Profile",
					"description": "Fetch business profile from phone number",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/fetchBusinessProfile/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Update Profile Name",
					"value": "Update Profile Name",
					"action": "Update Profile Name",
					"description": "Update profile name",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/updateProfileName/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Update Profile Status",
					"value": "Update Profile Status",
					"action": "Update Profile Status",
					"description": "Update profile status",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/updateProfileStatus/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Update Profile Picture",
					"value": "Update Profile Picture",
					"action": "Update Profile Picture",
					"description": "Update profile picture",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/updateProfilePicture/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Remove Profile Picture",
					"value": "Remove Profile Picture",
					"action": "Remove Profile Picture",
					"description": "Update profile picture",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/chat/removeProfilePicture/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Fetch Privacy Settings",
					"value": "Fetch Privacy Settings",
					"action": "Fetch Privacy Settings",
					"description": "Fetch privacy settings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/chat/fetchPrivacySettings/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Update Privacy Settings",
					"value": "Update Privacy Settings",
					"action": "Update Privacy Settings",
					"description": "Update privacy settings",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/chat/updatePrivacySettings/{{$parameter[\"instance\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /chat/whatsappNumbers/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Whatsapp Numbers"
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
						"Chat Controller"
					],
					"operation": [
						"Whatsapp Numbers"
					]
				}
			}
		},
		{
			"displayName": "Numbers",
			"name": "numbers",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Phone numbers (with country code) to be checked",
			"routing": {
				"send": {
					"property": "numbers",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Whatsapp Numbers"
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
						"Chat Controller"
					],
					"operation": [
						"Whatsapp Numbers"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/markMessageAsRead/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Mark Message As Read"
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
						"Chat Controller"
					],
					"operation": [
						"Mark Message As Read"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Read Messages",
			"name": "readMessages",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "Messages to be mark as read",
			"routing": {
				"send": {
					"property": "readMessages",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Mark Message As Read"
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
						"Chat Controller"
					],
					"operation": [
						"Mark Message As Read"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/archiveChat/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Archive Chat"
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
						"Chat Controller"
					],
					"operation": [
						"Archive Chat"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Last Message",
			"name": "lastMessage",
			"type": "json",
			"default": "{\n  \"key\": {}\n}",
			"description": "Messages to be mark as read",
			"routing": {
				"send": {
					"property": "lastMessage",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Archive Chat"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Archive",
			"name": "archive",
			"type": "boolean",
			"default": true,
			"description": "Whether to archive the chat or not",
			"routing": {
				"send": {
					"property": "archive",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Archive Chat"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Chat",
			"name": "chat",
			"type": "string",
			"default": "",
			"description": "remoteJid here",
			"routing": {
				"send": {
					"property": "chat",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Archive Chat"
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
						"Chat Controller"
					],
					"operation": [
						"Archive Chat"
					]
				}
			}
		},
		{
			"displayName": "DELETE /chat/deleteMessageForEveryone/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Delete Message For Everyone"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Delete Message For Everyone"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "ID",
			"name": "id",
			"type": "string",
			"default": "",
			"description": "Message ID",
			"routing": {
				"send": {
					"property": "id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Delete Message For Everyone"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Remote Jid",
			"name": "remoteJid",
			"type": "string",
			"default": "",
			"description": "Chat contact or group remote JID",
			"routing": {
				"send": {
					"property": "remoteJid",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Delete Message For Everyone"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "From Me",
			"name": "fromMe",
			"type": "boolean",
			"default": true,
			"description": "If the message was sent by the instance owner or the contact",
			"routing": {
				"send": {
					"property": "fromMe",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Delete Message For Everyone"
					]
				}
			}
		},
		{
			"displayName": "Participant",
			"name": "participant",
			"type": "string",
			"default": "",
			"description": "Participant for group messages only TODO",
			"routing": {
				"send": {
					"property": "participant",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Delete Message For Everyone"
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
						"Chat Controller"
					],
					"operation": [
						"Delete Message For Everyone"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/sendPresence/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Send Presence"
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
						"Chat Controller"
					],
					"operation": [
						"Send Presence"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Number",
			"name": "number",
			"type": "string",
			"default": "",
			"description": "Receiver phone number with country code",
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
						"Chat Controller"
					],
					"operation": [
						"Send Presence"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Options",
			"name": "options",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "options",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Send Presence"
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
						"Chat Controller"
					],
					"operation": [
						"Send Presence"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/fetchProfilePictureUrl/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Fetch Profile Picture URL"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Fetch Profile Picture URL"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Number",
			"name": "number",
			"type": "string",
			"default": "",
			"description": "Number to fetch profile picture URL: {{remoteJid}}",
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
						"Chat Controller"
					],
					"operation": [
						"Fetch Profile Picture URL"
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
						"Chat Controller"
					],
					"operation": [
						"Fetch Profile Picture URL"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/findContacts/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Contacts"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Contacts"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Where",
			"name": "where",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "where",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Contacts"
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
						"Chat Controller"
					],
					"operation": [
						"Find Contacts"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/getBase64FromMediaMessage/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Get Base 64 From Media Message"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Get Base 64 From Media Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Message",
			"name": "message",
			"type": "json",
			"default": "{\n  \"key\": {}\n}",
			"routing": {
				"send": {
					"property": "message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Get Base 64 From Media Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Convert To Mp 4",
			"name": "convertToMp4",
			"type": "boolean",
			"default": true,
			"description": "Convert video to MP4, for video only",
			"routing": {
				"send": {
					"property": "convertToMp4",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Get Base 64 From Media Message"
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
						"Chat Controller"
					],
					"operation": [
						"Get Base 64 From Media Message"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/findMessages/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Messages"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Messages"
					]
				}
			}
		},
		{
			"displayName": "Where",
			"name": "where",
			"type": "json",
			"default": "{\n  \"key\": {}\n}",
			"routing": {
				"send": {
					"property": "where",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Messages"
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
						"Chat Controller"
					],
					"operation": [
						"Find Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/findStatusMessage/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Status Message"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Status Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Where",
			"name": "where",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "where",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Status Message"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"type": "number",
			"default": 0,
			"description": "Limit for the return",
			"routing": {
				"send": {
					"property": "limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Status Message"
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
						"Chat Controller"
					],
					"operation": [
						"Find Status Message"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/updateMessage/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Message"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Number",
			"name": "number",
			"type": "number",
			"default": 0,
			"description": "Receiver phone number with country code",
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
						"Chat Controller"
					],
					"operation": [
						"Update Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Text",
			"name": "text",
			"type": "string",
			"default": "",
			"description": "New message content",
			"routing": {
				"send": {
					"property": "text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Message"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key",
			"name": "key",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "key",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Message"
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
						"Chat Controller"
					],
					"operation": [
						"Update Message"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/findChats/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Chats"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Find Chats"
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
						"Chat Controller"
					],
					"operation": [
						"Find Chats"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/fetchBusinessProfile/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Fetch Business Profile"
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
						"Chat Controller"
					],
					"operation": [
						"Fetch Business Profile"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Number",
			"name": "number",
			"type": "string",
			"default": "",
			"description": "Phone number with country code",
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
						"Chat Controller"
					],
					"operation": [
						"Fetch Business Profile"
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
						"Chat Controller"
					],
					"operation": [
						"Fetch Business Profile"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/updateProfileName/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Profile Name"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Profile Name"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "New name for profile",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Profile Name"
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
						"Chat Controller"
					],
					"operation": [
						"Update Profile Name"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/updateProfileStatus/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Profile Status"
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
						"Chat Controller"
					],
					"operation": [
						"Update Profile Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "status",
			"type": "string",
			"default": "",
			"description": "New status for profile",
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Profile Status"
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
						"Chat Controller"
					],
					"operation": [
						"Update Profile Status"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/updateProfilePicture/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Profile Picture"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Profile Picture"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Picture",
			"name": "picture",
			"type": "string",
			"default": "",
			"description": "New spicture URL",
			"routing": {
				"send": {
					"property": "picture",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Profile Picture"
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
						"Chat Controller"
					],
					"operation": [
						"Update Profile Picture"
					]
				}
			}
		},
		{
			"displayName": "DELETE /chat/removeProfilePicture/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Remove Profile Picture"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name instance",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Remove Profile Picture"
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
						"Chat Controller"
					],
					"operation": [
						"Remove Profile Picture"
					]
				}
			}
		},
		{
			"displayName": "GET /chat/fetchPrivacySettings/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Fetch Privacy Settings"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name of the instance ",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Fetch Privacy Settings"
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
						"Chat Controller"
					],
					"operation": [
						"Fetch Privacy Settings"
					]
				}
			}
		},
		{
			"displayName": "POST /chat/updatePrivacySettings/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Privacy Settings"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"description": "Name of the instance ",
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Privacy Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Readreceipts",
			"name": "readreceipts",
			"type": "options",
			"default": "all",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "None",
					"value": "none"
				}
			],
			"routing": {
				"send": {
					"property": "readreceipts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Privacy Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Profile",
			"name": "profile",
			"type": "options",
			"default": "all",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Contacts",
					"value": "contacts"
				},
				{
					"name": "Contact Blacklist",
					"value": "contact_blacklist"
				},
				{
					"name": "None",
					"value": "none"
				}
			],
			"routing": {
				"send": {
					"property": "profile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Privacy Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status",
			"name": "status",
			"type": "options",
			"default": "all",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Contacts",
					"value": "contacts"
				},
				{
					"name": "Contact Blacklist",
					"value": "contact_blacklist"
				},
				{
					"name": "None",
					"value": "none"
				}
			],
			"routing": {
				"send": {
					"property": "status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Privacy Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Online",
			"name": "online",
			"type": "options",
			"default": "all",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Match Last Seen",
					"value": "match_last_seen"
				}
			],
			"routing": {
				"send": {
					"property": "online",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Privacy Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Last",
			"name": "last",
			"type": "options",
			"default": "all",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Contacts",
					"value": "contacts"
				},
				{
					"name": "Contact Blacklist",
					"value": "contact_blacklist"
				},
				{
					"name": "None",
					"value": "none"
				}
			],
			"routing": {
				"send": {
					"property": "last",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Privacy Settings"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Groupadd",
			"name": "groupadd",
			"type": "options",
			"default": "all",
			"options": [
				{
					"name": "All",
					"value": "all"
				},
				{
					"name": "Contacts",
					"value": "contacts"
				},
				{
					"name": "Contact Blacklist",
					"value": "contact_blacklist"
				}
			],
			"routing": {
				"send": {
					"property": "groupadd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Chat Controller"
					],
					"operation": [
						"Update Privacy Settings"
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
						"Chat Controller"
					],
					"operation": [
						"Update Privacy Settings"
					]
				}
			}
		},
];
