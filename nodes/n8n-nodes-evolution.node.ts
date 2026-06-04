import { INodeType, INodeTypeDescription } from 'n8n-workflow';
import { N8NPropertiesBuilder } from '../lib';
import * as doc from '../openapi.json';

const parser = new N8NPropertiesBuilder(doc);
const properties = parser.build();

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
    properties: properties,
  };
}
