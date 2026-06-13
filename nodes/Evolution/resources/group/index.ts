import type { INodeProperties } from 'n8n-workflow';

export const groupDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					]
				}
			},
			"options": [
				{
					"name": "POST Group Create",
					"value": "POST Group Create",
					"action": "Create Group",
					"description": "Create Group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/group/create/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "POST Group Update Group Picture",
					"value": "POST Group Update Group Picture",
					"action": "Update Group Picture",
					"description": "Update Group Picture",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/group/updateGroupPicture/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "POST Group Update Group Subject",
					"value": "POST Group Update Group Subject",
					"action": "Update Group Subject",
					"description": "Update Group Subject",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/group/updateGroupSubject/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "POST Group Update Group Description",
					"value": "POST Group Update Group Description",
					"action": "Update Group Description",
					"description": "Update Group Description",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/group/updateGroupDescription/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "GET Group Invite Code",
					"value": "GET Group Invite Code",
					"action": "Fetch Invite Code",
					"description": "Fetch Invite Code",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/group/inviteCode/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "POST Group Revoke Invite Code",
					"value": "POST Group Revoke Invite Code",
					"action": "Revoke Invite Code",
					"description": "Revoke Invite Code",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/group/revokeInviteCode/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "POST Group Send Invite",
					"value": "POST Group Send Invite",
					"action": "Send Invite Url",
					"description": "Send Invite Url",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/group/sendInvite/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "GET Group Invite Info",
					"value": "GET Group Invite Info",
					"action": "Find Group by Invite Code",
					"description": "Find Group by Invite Code",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/group/inviteInfo/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "GET Group Find Group Infos",
					"value": "GET Group Find Group Infos",
					"action": "Find Group by Jid",
					"description": "Find Group by Jid",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/group/findGroupInfos/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "GET Group Fetch All Groups",
					"value": "GET Group Fetch All Groups",
					"action": "Fetch All Groups",
					"description": "Fetch All Groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/group/fetchAllGroups/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "GET Group Participants",
					"value": "GET Group Participants",
					"action": "Find Participants",
					"description": "Find Participants",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/group/participants/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "POST Group Update Participant",
					"value": "POST Group Update Participant",
					"action": "Update Participant",
					"description": "Update Participant",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/group/updateParticipant/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "POST Group Update Setting",
					"value": "POST Group Update Setting",
					"action": "Update Setting",
					"description": "Update Setting",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/group/updateSetting/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "POST Group Toggle Ephemeral",
					"value": "POST Group Toggle Ephemeral",
					"action": "Toggle Ephemeral",
					"description": "Toggle Ephemeral",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/group/toggleEphemeral/{{$parameter[\"instance\"]}}"
						}
					}
				},
				{
					"name": "DELETE Group Leave Group",
					"value": "DELETE Group Leave Group",
					"action": "Leave Group",
					"description": "Leave Group",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/group/leaveGroup/{{$parameter[\"instance\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /group/create/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Create"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Create"
					]
				}
			}
		},
		{
			"displayName": "POST /group/updateGroupPicture/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Group Picture"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Group Picture"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Group Picture"
					]
				}
			}
		},
		{
			"displayName": "POST /group/updateGroupSubject/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Group Subject"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Group Subject"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Group Subject"
					]
				}
			}
		},
		{
			"displayName": "POST /group/updateGroupDescription/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Group Description"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Group Description"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Group Description"
					]
				}
			}
		},
		{
			"displayName": "GET /group/inviteCode/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Invite Code"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Invite Code"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Invite Code"
					]
				}
			}
		},
		{
			"displayName": "POST /group/revokeInviteCode/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Revoke Invite Code"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Revoke Invite Code"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Revoke Invite Code"
					]
				}
			}
		},
		{
			"displayName": "POST /group/revokeInviteCode/{instance}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Revoke Invite Code"
					]
				}
			}
		},
		{
			"displayName": "POST /group/sendInvite/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Send Invite"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Send Invite"
					]
				}
			}
		},
		{
			"displayName": "GET /group/inviteInfo/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Invite Info"
					]
				}
			}
		},
		{
			"displayName": "Invite Code",
			"name": "inviteCode",
			"default": "{{inviteCode}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "inviteCode",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Invite Info"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Invite Info"
					]
				}
			}
		},
		{
			"displayName": "GET /group/findGroupInfos/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Find Group Infos"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Find Group Infos"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Find Group Infos"
					]
				}
			}
		},
		{
			"displayName": "GET /group/fetchAllGroups/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Fetch All Groups"
					]
				}
			}
		},
		{
			"displayName": "Get Participants",
			"name": "getParticipants",
			"default": "false",
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "getParticipants",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Fetch All Groups"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Fetch All Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /group/participants/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Participants"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Participants"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"GET Group Participants"
					]
				}
			}
		},
		{
			"displayName": "POST /group/updateParticipant/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Participant"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Participant"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Participant"
					]
				}
			}
		},
		{
			"displayName": "POST /group/updateSetting/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Setting"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Setting"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Update Setting"
					]
				}
			}
		},
		{
			"displayName": "POST /group/toggleEphemeral/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Toggle Ephemeral"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Toggle Ephemeral"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"POST Group Toggle Ephemeral"
					]
				}
			}
		},
		{
			"displayName": "DELETE /group/leaveGroup/{instance}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"DELETE Group Leave Group"
					]
				}
			}
		},
		{
			"displayName": "Group Jid",
			"name": "groupJid",
			"default": "{{groupJid}}",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "groupJid",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"DELETE Group Leave Group"
					]
				}
			}
		},
		{
			"displayName": "Instance",
			"name": "instance",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Group"
					],
					"operation": [
						"DELETE Group Leave Group"
					]
				}
			}
		},
];
