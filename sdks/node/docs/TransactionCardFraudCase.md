# TransactionCardFraudCase

`TransactionCardFraudCase` is a JSON:API resource, top-level fields:

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**AuthorizationCardFraudCaseAttributes**](AuthorizationCardFraudCaseAttributes.md) |  | [default to undefined]
**relationships** | [**AuthorizationCardFraudCaseRelationships**](AuthorizationCardFraudCaseRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TransactionCardFraudCase } from 'unit-openapi-node-sdk';

const instance: TransactionCardFraudCase = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
