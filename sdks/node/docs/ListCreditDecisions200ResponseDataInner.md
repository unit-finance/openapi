# ListCreditDecisions200ResponseDataInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** |  | [default to undefined]
**id** | **string** |  | [default to undefined]
**attributes** | [**ManualReviewCreditApplicationDecisionAttributes**](ManualReviewCreditApplicationDecisionAttributes.md) |  | [default to undefined]
**relationships** | [**DeniedCreditApplicationDecisionRelationships**](DeniedCreditApplicationDecisionRelationships.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ListCreditDecisions200ResponseDataInner } from '@unit-finance/unit-node-sdk';

const instance: ListCreditDecisions200ResponseDataInner = {
    type,
    id,
    attributes,
    relationships,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
