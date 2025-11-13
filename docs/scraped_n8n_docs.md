# Scraped n8n Documentation for Building Gamma Node

This file contains all scraped documentation needed to build the n8n Gamma community node.

---

## devlikeapro/n8n-openapi-node Tool Documentation

### Quick Start

If you have OpenAPI specification - you can easily in few minutes create your community node for n8n!

It'll still require to create and publish `n8n-nodes-<yourproject>` npm package, but you can use this package to generate most of the code.

### Installation

```bash
npm install @devlikeapro/n8n-openapi-node
# OR
pnpm add @devlikeapro/n8n-openapi-node
# OR
yarn add @devlikeapro/n8n-openapi-node
```

### Usage

1. Add your `openapi.json` to `src/{NodeName}` folder (use **OpenAPI v3** and **json**)

2. Get your `Node.properties` from OpenAPI v3 spec:

```typescript
import {INodeType, INodeTypeDescription, NodeConnectionType} from 'n8n-workflow';
import {N8NPropertiesBuilder, N8NPropertiesBuilderConfig} from '@devlikeapro/n8n-openapi-node';
import * as doc from './openapi.json'; // <=== Your OpenAPI v3 spec

const config: N8NPropertiesBuilderConfig = {}
const parser = new N8NPropertiesBuilder(doc, config);
const properties = parser.build()

export class Petstore implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Petstore',
    name: 'petstore',
    icon: 'file:petstore.svg',
    group: ['transform'],
    version: 1,
    subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
    description: 'Interact with Petstore API',
    defaults: {
      name: 'Petstore',
    },
    inputs: [NodeConnectionType.Main],
    outputs: [NodeConnectionType.Main],
    credentials: [
      {
        name: 'petstoreApi',
        required: false,
      },
    ],
    requestDefaults: {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      baseURL: '={{$credentials.url}}',
    },
    properties: properties, // <==== HERE
  };
}
```

### How it works

`N8NPropertiesBuilder` extracts entities from OpenAPI v3 to your n8n community node:

1. **Resource** - a list of **Tags** from OpenAPI spec
2. **Operation** - a list of **Operations** from OpenAPI spec (aka **Actions** in n8n)
3. **Query Parameters** - a list of `operation.parameters` from OpenAPI spec
4. **Request Body** - a list of `operation.requestBody.content` from OpenAPI spec (only for `application/json`)
5. **Headers** - a list of `operation.parameters` from OpenAPI spec

### Customization

You can override the way to extract **Resource** from **OpenAPI Tag** by defining custom `IResourceParser` and **Operation** from **OpenAPI Operation** by defining custom `IOperationParser`.

Use Cases:
- [@devlikeapro/n8n-nodes-petstore](https://github.com/devlikeapro/n8n-nodes-petstore) - Petstore example
- [@devlikeapro/n8n-nodes-chatwoot](https://github.com/devlikeapro/n8n-nodes-chatwoot) - ChatWoot node with credentials
- [@devlikeapro/n8n-nodes-waha](https://github.com/devlikeapro/n8n-nodes-waha) - WAHA WhatsApp API node

---

## n8n Credentials File Documentation

### Structure of the credentials file

The credentials file follows this basic structure:

1. Import statements
2. Create a class for the credentials
3. Within the class, define the properties that control authentication for the node.

### Example Outline

```typescript
import {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class ExampleNode implements ICredentialType {
	name = 'exampleNodeApi';
	displayName = 'Example Node API';
	documentationUrl = '';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
    		// Can be body, header, qs or auth
			qs: {
        		// Use the value from `apiKey` above
				'api_key': '={{$credentials.apiKey}}'
			}
		},
	};
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials?.domain}}',
			url: '/bearer',
		},
	};
}
```

### Parameters

- **name**: String. The internal name of the object.
- **displayName**: String. The name n8n uses in the GUI.
- **documentationUrl**: String. URL to your credentials documentation.
- **properties**: Each object contains displayName, name, type, and default.
- **authenticate**: Object that tells n8n how to inject authentication data:
  - `type`: 'generic' for header/body/query string auth
  - `properties`: Can be `body`, `header`, `qs`, or `auth`
    - `header`: Send authentication data in request header
    - `qs`: Send authentication data in query string
    - `body`: Send authentication data in request body
    - `auth`: For Basic Auth (requires username and password)
- **test**: Request object with URL n8n can use to test the credential

### Authentication Examples

#### Header Authentication (Bearer Token)
```typescript
authenticate: IAuthenticateGeneric = {
	type: 'generic',
	properties: {
		header: {
			Authorization: '=Bearer {{$credentials.authToken}}',
		},
	},
};
```

#### Query String Authentication
```typescript
authenticate: IAuthenticateGeneric = {
	type: 'generic',
	properties: {
		qs: {
			token: '={{$credentials.token}}',
		},
	},
};
```

#### Basic Auth
```typescript
authenticate: IAuthenticateGeneric = {
	type: 'generic',
	properties: {
		auth: {
			username: '={{$credentials.username}}',
			password: '={{$credentials.password}}',
		},
	},
};
```

---

## n8n Declarative-Style Node Tutorial

### Prerequisites

You need:
- git
- Node.js and npm (Minimum version Node 18.17.0)
- Understanding of JavaScript/TypeScript, REST APIs, git

### Build Your Node Steps

#### Step 1: Set up the project

n8n provides a starter repository. Clone and set up:

1. Generate a new repository from [n8n-nodes-starter template](https://github.com/n8n-io/n8n-nodes-starter/generate)
2. Clone and install dependencies:
```bash
git clone https://github.com/<your-org>/<your-repo>.git
cd <your-repo>
npm i
```

#### Step 2: Add an icon

Save your node icon as SVG (recommended) or PNG (60x60px). Square or near-square aspect ratio.

#### Step 3: Create the node

Every node must have a base file. Basic structure:

```typescript
import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class YourNode implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Your Node',
		name: 'yourNode',
		icon: 'file:yournode.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Get data from Your API',
		defaults: {
			name: 'Your Node',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'yourNodeApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.yourservice.com',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			// Resources and operations go here
		]
	};
}
```

#### Step 4: Add resources

Resources are typically Tags from OpenAPI spec:

```typescript
properties: [
	{
		displayName: 'Resource',
		name: 'resource',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'Resource One',
				value: 'resourceOne',
			},
			{
				name: 'Resource Two',
				value: 'resourceTwo',
			},
		],
		default: 'resourceOne',
	},
	// Operations will go here
]
```

#### Step 5: Add operations

Operations include `routing` for declarative-style nodes:

```typescript
{
	displayName: 'Operation',
	name: 'operation',
	type: 'options',
	noDataExpression: true,
	displayOptions: {
		show: {
			resource: ['resourceOne'],
		},
	},
	options: [
		{
			name: 'Get',
			value: 'get',
			action: 'Get resource',
			description: 'Get a resource',
			routing: {
				request: {
					method: 'GET',
					url: '/api/resource',
				},
			},
		},
	],
	default: 'get',
}
```

#### Step 6: Add node metadata

Create `YourNode.node.json`:

```json
{
	"node": "n8n-nodes-base.YourNode",
	"nodeVersion": "1.0",
	"codexVersion": "1.0",
	"categories": [
		"Miscellaneous"
	],
	"resources": {
		"credentialDocumentation": [
			{
				"url": ""
			}
		],
		"primaryDocumentation": [
			{
				"url": ""
			}
		]
	}
}
```

#### Step 7: Update package.json

```json
{
	"name": "n8n-nodes-yournode",
	"version": "0.1.0",
	"description": "n8n node to call Your API",
	"keywords": [
		"n8n-community-node-package"
	],
	"license": "MIT",
	"n8n": {
		"n8nNodesApiVersion": 1,
		"credentials": [
			"dist/credentials/YourNodeApi.credentials.js"
		],
		"nodes": [
			"dist/nodes/YourNode/YourNode.node.js"
		]
	}
}
```

### Test your node

```bash
# Build the node
npm run build
npm link

# In ~/.n8n/custom directory
npm link n8n-nodes-yournode

# Start n8n
n8n start
```

---

## Key Points for Gamma Node

1. **Gamma API uses X-API-KEY header** for authentication
2. **Base URL**: https://public-api.gamma.app
3. **Resources** from tags: Generations, Themes, Folders, User
4. **Operations**: Create Generation, Get Status, Create from Template, List Themes, List Folders, Get Me
5. **Request/Response format**: JSON
6. **Rate limits**: Hundreds per hour, thousands per day
7. **Credits**: Deducted per generation

