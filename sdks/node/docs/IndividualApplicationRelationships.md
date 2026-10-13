# IndividualApplicationRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**customer** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**documents** | [**ToManyRelationship**](ToManyRelationship.md) |  | [optional] [default to undefined]
**applicationForm** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]

## Example

```typescript
import { IndividualApplicationRelationships } from '@unit-finance/unit-openapi-node-sdk';

const instance: IndividualApplicationRelationships = {
    org,
    customer,
    documents,
    applicationForm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
