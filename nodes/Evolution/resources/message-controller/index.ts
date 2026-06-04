import type { INodeProperties } from 'n8n-workflow';

export const messageControllerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					]
				}
			},
			"options": [
				{
					"name": "Send Text",
					"value": "Send Text",
					"action": "Send Text",
					"description": "Send plain text message",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/message/sendText/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Send Media",
					"value": "Send Media",
					"action": "Send Media",
					"description": "Send media message",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/message/sendMedia/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Send Whats App Audio",
					"value": "Send Whats App Audio",
					"action": "Send WhatsApp Audio",
					"description": "Send WhatsApp Audio",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/message/sendWhatsAppAudio/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Send Sticker",
					"value": "Send Sticker",
					"action": "Send Sticker",
					"description": "Send Sticker",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/message/sendSticker/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Send Status",
					"value": "Send Status",
					"action": "Send Status",
					"description": "Post WhatsApp status (stories)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/message/sendStatus/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Send Location",
					"value": "Send Location",
					"action": "Send Location",
					"description": "Send Location",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/message/sendLocation/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Send Contact",
					"value": "Send Contact",
					"action": "Send Contact",
					"description": "Send Contact",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/message/sendContact/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Send Reaction",
					"value": "Send Reaction",
					"action": "Send Reaction",
					"description": "Send Reaction",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/message/sendReaction/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Send Poll",
					"value": "Send Poll",
					"action": "Send Poll",
					"description": "Send Poll",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/message/sendPoll/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "Send List",
					"value": "Send List",
					"action": "Send List",
					"description": "Send List",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/message/sendList/{{$parameter[\"instance\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /message/sendText/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Text"
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
						"Message Controller"
					],
					"operation": [
						"Send Text"
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
			"description": "Number to receive the message (with country code)",
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
						"Message Controller"
					],
					"operation": [
						"Send Text"
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
			"description": "Test message to send",
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
						"Message Controller"
					],
					"operation": [
						"Send Text"
					]
				}
			}
		},
		{
			"displayName": "Delay",
			"name": "delay",
			"type": "number",
			"default": 0,
			"description": "Presence time in milliseconds before sending message",
			"routing": {
				"send": {
					"property": "delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Text"
					]
				}
			}
		},
		{
			"displayName": "Link Preview",
			"name": "linkPreview",
			"type": "boolean",
			"default": true,
			"description": "Shows a preview of the target website if there's a link within the message",
			"routing": {
				"send": {
					"property": "linkPreview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Text"
					]
				}
			}
		},
		{
			"displayName": "Mentions Every One",
			"name": "mentionsEveryOne",
			"type": "boolean",
			"default": true,
			"description": "Mentioned everyone when the message send",
			"routing": {
				"send": {
					"property": "mentionsEveryOne",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Text"
					]
				}
			}
		},
		{
			"displayName": "Mentioned",
			"name": "mentioned",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Numbers to mention",
			"routing": {
				"send": {
					"property": "mentioned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Text"
					]
				}
			}
		},
		{
			"displayName": "Quoted",
			"name": "quoted",
			"type": "json",
			"default": "{\n  \"key\": {},\n  \"message\": {}\n}",
			"routing": {
				"send": {
					"property": "quoted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Text"
					]
				}
			}
		},
		{
			"displayName": "POST /message/sendMedia/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
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
						"Message Controller"
					],
					"operation": [
						"Send Media"
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
			"description": "Number to receive the message (with country code)",
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
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mediatype",
			"name": "mediatype",
			"type": "string",
			"default": "",
			"description": "Image, video or document",
			"routing": {
				"send": {
					"property": "mediatype",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Mimetype",
			"name": "mimetype",
			"type": "string",
			"default": "",
			"description": "image/png",
			"routing": {
				"send": {
					"property": "mimetype",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Caption",
			"name": "caption",
			"type": "string",
			"default": "",
			"description": "Teste de caption",
			"routing": {
				"send": {
					"property": "caption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Media",
			"name": "media",
			"type": "string",
			"default": "",
			"description": "Url or base64",
			"routing": {
				"send": {
					"property": "media",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "File Name",
			"name": "fileName",
			"type": "string",
			"default": "",
			"description": "Image.png",
			"routing": {
				"send": {
					"property": "fileName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"displayName": "Delay",
			"name": "delay",
			"type": "number",
			"default": 0,
			"description": "Presence time in milliseconds before sending message",
			"routing": {
				"send": {
					"property": "delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"displayName": "Link Preview",
			"name": "linkPreview",
			"type": "boolean",
			"default": true,
			"description": "Shows a preview of the target website if there's a link within the message",
			"routing": {
				"send": {
					"property": "linkPreview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"displayName": "Mentions Every One",
			"name": "mentionsEveryOne",
			"type": "boolean",
			"default": true,
			"description": "Mentioned everyone when the message send",
			"routing": {
				"send": {
					"property": "mentionsEveryOne",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"displayName": "Mentioned",
			"name": "mentioned",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Numbers to mention",
			"routing": {
				"send": {
					"property": "mentioned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"displayName": "Quoted",
			"name": "quoted",
			"type": "json",
			"default": "{\n  \"key\": {},\n  \"message\": {}\n}",
			"routing": {
				"send": {
					"property": "quoted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Media"
					]
				}
			}
		},
		{
			"displayName": "POST /message/sendWhatsAppAudio/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Whats App Audio"
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
						"Message Controller"
					],
					"operation": [
						"Send Whats App Audio"
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
			"description": "Number to receive the message (with country code)",
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
						"Message Controller"
					],
					"operation": [
						"Send Whats App Audio"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Audio",
			"name": "audio",
			"type": "string",
			"default": "",
			"description": "url or base64 ",
			"routing": {
				"send": {
					"property": "audio",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Whats App Audio"
					]
				}
			}
		},
		{
			"displayName": "Delay",
			"name": "delay",
			"type": "number",
			"default": 0,
			"description": "Presence time in milliseconds before sending message",
			"routing": {
				"send": {
					"property": "delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Whats App Audio"
					]
				}
			}
		},
		{
			"displayName": "Link Preview",
			"name": "linkPreview",
			"type": "boolean",
			"default": true,
			"description": "Shows a preview of the target website if there's a link within the message",
			"routing": {
				"send": {
					"property": "linkPreview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Whats App Audio"
					]
				}
			}
		},
		{
			"displayName": "Mentions Every One",
			"name": "mentionsEveryOne",
			"type": "boolean",
			"default": true,
			"description": "Mentioned everyone when the message send",
			"routing": {
				"send": {
					"property": "mentionsEveryOne",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Whats App Audio"
					]
				}
			}
		},
		{
			"displayName": "Mentioned",
			"name": "mentioned",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Numbers to mention",
			"routing": {
				"send": {
					"property": "mentioned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Whats App Audio"
					]
				}
			}
		},
		{
			"displayName": "Quoted",
			"name": "quoted",
			"type": "json",
			"default": "{\n  \"key\": {},\n  \"message\": {}\n}",
			"routing": {
				"send": {
					"property": "quoted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Whats App Audio"
					]
				}
			}
		},
		{
			"displayName": "POST /message/sendSticker/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Sticker"
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
						"Message Controller"
					],
					"operation": [
						"Send Sticker"
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
			"description": "Number to receive the message (with country code)",
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
						"Message Controller"
					],
					"operation": [
						"Send Sticker"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Sticker",
			"name": "sticker",
			"type": "string",
			"default": "",
			"description": "Url or base64 ",
			"routing": {
				"send": {
					"property": "sticker",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Sticker"
					]
				}
			}
		},
		{
			"displayName": "Delay",
			"name": "delay",
			"type": "number",
			"default": 0,
			"description": "Presence time in milliseconds before sending message",
			"routing": {
				"send": {
					"property": "delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Sticker"
					]
				}
			}
		},
		{
			"displayName": "Link Preview",
			"name": "linkPreview",
			"type": "boolean",
			"default": true,
			"description": "Shows a preview of the target website if there's a link within the message",
			"routing": {
				"send": {
					"property": "linkPreview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Sticker"
					]
				}
			}
		},
		{
			"displayName": "Mentions Every One",
			"name": "mentionsEveryOne",
			"type": "boolean",
			"default": true,
			"description": "Mentioned everyone when the message send",
			"routing": {
				"send": {
					"property": "mentionsEveryOne",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Sticker"
					]
				}
			}
		},
		{
			"displayName": "Mentioned",
			"name": "mentioned",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Numbers to mention",
			"routing": {
				"send": {
					"property": "mentioned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Sticker"
					]
				}
			}
		},
		{
			"displayName": "Quoted",
			"name": "quoted",
			"type": "json",
			"default": "{\n  \"key\": {},\n  \"message\": {}\n}",
			"routing": {
				"send": {
					"property": "quoted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Sticker"
					]
				}
			}
		},
		{
			"displayName": "POST /message/sendStatus/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Status"
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
						"Message Controller"
					],
					"operation": [
						"Send Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Type",
			"name": "type",
			"type": "options",
			"default": "text",
			"description": "status type",
			"options": [
				{
					"name": "Text",
					"value": "text"
				},
				{
					"name": "Image",
					"value": "image"
				},
				{
					"name": "Audio",
					"value": "audio"
				}
			],
			"routing": {
				"send": {
					"property": "type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Content",
			"name": "content",
			"type": "string",
			"default": "",
			"description": "status type",
			"routing": {
				"send": {
					"property": "content",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Caption",
			"name": "caption",
			"type": "string",
			"default": "",
			"description": "Optional for image or video",
			"routing": {
				"send": {
					"property": "caption",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Background Color",
			"name": "backgroundColor",
			"type": "string",
			"default": "",
			"description": "Exemple #008000",
			"routing": {
				"send": {
					"property": "backgroundColor",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Font",
			"name": "font",
			"type": "number",
			"default": 0,
			"description": "1 = SERIF 2 = NORICAN_REGULAR 3 = BRYNDAN_WRITE 4 = BEBASNEUE_REGULAR 5 = OSWALD_HEAVY ",
			"routing": {
				"send": {
					"property": "font",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "All Contacts",
			"name": "allContacts",
			"type": "boolean",
			"default": true,
			"description": "true to send to all contacts or false to send to statusJidList below ",
			"routing": {
				"send": {
					"property": "allContacts",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Status Jid List",
			"name": "statusJidList",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Numbers to send status",
			"routing": {
				"send": {
					"property": "statusJidList",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Status"
					]
				}
			}
		},
		{
			"displayName": "POST /message/sendLocation/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Location"
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
						"Message Controller"
					],
					"operation": [
						"Send Location"
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
			"description": "Number to receive the message (with country code)",
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
						"Message Controller"
					],
					"operation": [
						"Send Location"
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
			"description": "Name the city",
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
						"Message Controller"
					],
					"operation": [
						"Send Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Address",
			"name": "address",
			"type": "string",
			"default": "",
			"description": "Location address",
			"routing": {
				"send": {
					"property": "address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Latitude",
			"name": "latitude",
			"type": "number",
			"default": 0,
			"description": "Latitude location",
			"routing": {
				"send": {
					"property": "latitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Location"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Longitude",
			"name": "longitude",
			"type": "number",
			"default": 0,
			"description": "Longitude location",
			"routing": {
				"send": {
					"property": "longitude",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Location"
					]
				}
			}
		},
		{
			"displayName": "Delay",
			"name": "delay",
			"type": "number",
			"default": 0,
			"description": "Presence time in milliseconds before sending message",
			"routing": {
				"send": {
					"property": "delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Location"
					]
				}
			}
		},
		{
			"displayName": "Link Preview",
			"name": "linkPreview",
			"type": "boolean",
			"default": true,
			"description": "Shows a preview of the target website if there's a link within the message",
			"routing": {
				"send": {
					"property": "linkPreview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Location"
					]
				}
			}
		},
		{
			"displayName": "Mentions Every One",
			"name": "mentionsEveryOne",
			"type": "boolean",
			"default": true,
			"description": "Mentioned everyone when the message send",
			"routing": {
				"send": {
					"property": "mentionsEveryOne",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Location"
					]
				}
			}
		},
		{
			"displayName": "Mentioned",
			"name": "mentioned",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Numbers to mention",
			"routing": {
				"send": {
					"property": "mentioned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Location"
					]
				}
			}
		},
		{
			"displayName": "Quoted",
			"name": "quoted",
			"type": "json",
			"default": "{\n  \"key\": {},\n  \"message\": {}\n}",
			"routing": {
				"send": {
					"property": "quoted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Location"
					]
				}
			}
		},
		{
			"displayName": "POST /message/sendContact/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Contact"
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
						"Message Controller"
					],
					"operation": [
						"Send Contact"
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
			"description": "Number to receive the message (with country code)",
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
						"Message Controller"
					],
					"operation": [
						"Send Contact"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Contact",
			"name": "contact",
			"type": "json",
			"default": "[\n  {}\n]",
			"routing": {
				"send": {
					"property": "contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Contact"
					]
				}
			}
		},
		{
			"displayName": "POST /message/sendReaction/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Reaction"
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
						"Message Controller"
					],
					"operation": [
						"Send Reaction"
					]
				}
			}
		},
		{
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
						"Message Controller"
					],
					"operation": [
						"Send Reaction"
					]
				}
			}
		},
		{
			"displayName": "Reaction",
			"name": "reaction",
			"type": "string",
			"default": "🚀",
			"description": "Reaction emoji",
			"routing": {
				"send": {
					"property": "reaction",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Reaction"
					]
				}
			}
		},
		{
			"displayName": "POST /message/sendPoll/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Poll"
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
						"Message Controller"
					],
					"operation": [
						"Send Poll"
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
			"description": "{{remoteJid}}",
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
						"Message Controller"
					],
					"operation": [
						"Send Poll"
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
			"description": "Main text of the poll",
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
						"Message Controller"
					],
					"operation": [
						"Send Poll"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Selectable Count",
			"name": "selectableCount",
			"type": "number",
			"default": 0,
			"description": "Ex: 1",
			"routing": {
				"send": {
					"property": "selectableCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Poll"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Values for question",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Delay",
			"name": "delay",
			"type": "number",
			"default": 0,
			"description": "Presence time in milliseconds before sending message",
			"routing": {
				"send": {
					"property": "delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Link Preview",
			"name": "linkPreview",
			"type": "boolean",
			"default": true,
			"description": "Shows a preview of the target website if there's a link within the message",
			"routing": {
				"send": {
					"property": "linkPreview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Mentions Every One",
			"name": "mentionsEveryOne",
			"type": "boolean",
			"default": true,
			"description": "Mentioned everyone when the message send",
			"routing": {
				"send": {
					"property": "mentionsEveryOne",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Mentioned",
			"name": "mentioned",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Numbers to mention",
			"routing": {
				"send": {
					"property": "mentioned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Poll"
					]
				}
			}
		},
		{
			"displayName": "Quoted",
			"name": "quoted",
			"type": "json",
			"default": "{\n  \"key\": {},\n  \"message\": {}\n}",
			"routing": {
				"send": {
					"property": "quoted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send Poll"
					]
				}
			}
		},
		{
			"displayName": "POST /message/sendList/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
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
						"Message Controller"
					],
					"operation": [
						"Send List"
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
			"description": "{{remoteJid}}",
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
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "title",
			"type": "string",
			"default": "",
			"description": "Title of list",
			"routing": {
				"send": {
					"property": "title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "Description for lists",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Button Text",
			"name": "buttonText",
			"type": "string",
			"default": "",
			"description": "Text Button",
			"routing": {
				"send": {
					"property": "buttonText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Footer Text",
			"name": "footerText",
			"type": "string",
			"default": "",
			"description": "footer list\nhttps://examplelink.com.br",
			"routing": {
				"send": {
					"property": "footerText",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Values",
			"name": "values",
			"type": "json",
			"default": "[\n  {\n    \"rows\": [\n      {}\n    ]\n  }\n]",
			"routing": {
				"send": {
					"property": "values",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
		{
			"displayName": "Delay",
			"name": "delay",
			"type": "number",
			"default": 0,
			"description": "Presence time in milliseconds before sending message",
			"routing": {
				"send": {
					"property": "delay",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
		{
			"displayName": "Link Preview",
			"name": "linkPreview",
			"type": "boolean",
			"default": true,
			"description": "Shows a preview of the target website if there's a link within the message",
			"routing": {
				"send": {
					"property": "linkPreview",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
		{
			"displayName": "Mentions Every One",
			"name": "mentionsEveryOne",
			"type": "boolean",
			"default": true,
			"description": "Mentioned everyone when the message send",
			"routing": {
				"send": {
					"property": "mentionsEveryOne",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
		{
			"displayName": "Mentioned",
			"name": "mentioned",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Numbers to mention",
			"routing": {
				"send": {
					"property": "mentioned",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
		{
			"displayName": "Quoted",
			"name": "quoted",
			"type": "json",
			"default": "{\n  \"key\": {},\n  \"message\": {}\n}",
			"routing": {
				"send": {
					"property": "quoted",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Message Controller"
					],
					"operation": [
						"Send List"
					]
				}
			}
		},
];
