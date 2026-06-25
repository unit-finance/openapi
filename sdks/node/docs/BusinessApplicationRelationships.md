# BusinessApplicationRelationships


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**customer** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**officer** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]
**beneficialOwners** | [**ToManyRelationship**](ToManyRelationship.md) |  | [optional] [default to undefined]
**documents** | [**ToManyRelationship**](ToManyRelationship.md) |  | [optional] [default to undefined]
**applicationForm** | [**Relationship**](Relationship.md) |  | [optional] [default to undefined]

## Example

```typescript
import { BusinessApplicationRelationships } from '@unit-finance/unit-node-sdk';

const instance: BusinessApplicationRelationships = {
    org,
    customer,
    officer,
    beneficialOwners,
    documents,
    applicationForm,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
