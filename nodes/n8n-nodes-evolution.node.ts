import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class Evolution implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Evolution',
    name: 'n8n-nodes-evolution',
    icon: 'file:node.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'n8n community node for Evolution API',
    defaults: { name: 'Evolution' },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [{ name: 'n8n-nodes-evolutionApi', required: true }],
    requestDefaults: {
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      baseURL: '={{$credentials.url}}',
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
        "name": "Fetch Profile Picture Url",
        "value": "Fetch Profile Picture Url",
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
    "displayName": "Chatwoot Account Id",
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
    "displayName": "Chatwoot Url",
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
    "displayName": "Instance Id",
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
    "displayName": "Url",
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
    "displayName": "Id",
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
          "Fetch Profile Picture Url"
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
          "Fetch Profile Picture Url"
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
          "Fetch Profile Picture Url"
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
  }
],
  };
}
