# WireDrawdownPositivePayAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAt** | **string** | The date the resource was created. | [default to undefined]
**status** | **string** | One of AwaitingDocuments, Active, Expired, or Cancelled. | [default to undefined]
**expirationDate** | **string** | When the authorization expires. | [optional] [default to undefined]
**tags** | **{ [key: string]: any; }** | See Tags. | [optional] [default to undefined]

## Example

```typescript
import { WireDrawdownPositivePayAttributes } from '@unit-finance/unit-openapi-node-sdk';

const instance: WireDrawdownPositivePayAttributes = {
    createdAt,
    status,
    expirationDate,
    tags,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
